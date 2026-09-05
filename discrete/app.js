/* Discrete, Decoded — interface and study-state controller. */
(function () {
  "use strict";

  const data = window.COURSE_DATA || {};
  const lessons = Array.isArray(data.lessons) ? data.lessons : [];
  const examBank = Array.isArray(data.examBank) ? data.examBank : [];
  const flashcards = Array.isArray(data.flashcards) ? data.flashcards : [];
  const practiceCollections = Array.isArray(data.practiceCollections) && data.practiceCollections.length
    ? data.practiceCollections
    : [{ id: "past-paper", label: "Past papers", eyebrow: "Uploaded assessments", description: "Questions from uploaded assessments." }];
  const practiceCollectionIds = new Set(practiceCollections.map((collection) => collection.id));
  const masteryTarget = Number(data.course && data.course.masteryPercent) || 80;
  const STORAGE_KEY = "discrete-decoded-state-v1";
  const TIRED_KEY = "svnd3-discrete-tired-v1";

  const main = document.getElementById("main-content");
  const lessonNav = document.getElementById("lesson-nav");
  const sidebar = document.getElementById("sidebar");
  const sidebarScrim = document.getElementById("sidebar-scrim");
  const menuButton = document.getElementById("menu-button");
  const sidebarClose = document.getElementById("sidebar-close");
  const focusButton = document.getElementById("focus-button");
  const tiredButton = document.getElementById("tired-button");
  const topbarEyebrow = document.getElementById("topbar-eyebrow");
  const topbarTitle = document.getElementById("topbar-title");
  const searchButton = document.getElementById("search-button");
  const searchDialog = document.getElementById("search-dialog");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const toastElement = document.getElementById("toast");

  if (!main) return;

  const runtime = {
    practiceCollection: practiceCollections[0].id,
    practiceTopic: "All",
    practiceDifficulty: "All",
    memoryTopic: "All",
    memoryOrder: null,
    vennOperation: "union",
    pendingScrollId: "",
    toastTimer: null,
  };

  const studyState = loadStudyState();
  applyFocusState();
  applyTiredState();
  renderLessonNavigation();
  updateProgressUI();

  function safeArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[character]);
  }

  function stripHtml(value) {
    return String(value == null ? "" : value)
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .replace(/\s+/g, " ")
      .trim();
  }

  function loadStudyState() {
    const fallback = { completed: [], quizzes: {}, focus: false };
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!parsed || typeof parsed !== "object") return fallback;
      const validLessonIds = new Set(lessons.map((lesson) => lesson.id));
      return {
        completed: Array.isArray(parsed.completed)
          ? [...new Set(parsed.completed.filter((id) => typeof id === "string" && validLessonIds.has(id)))]
          : [],
        quizzes: parsed.quizzes && typeof parsed.quizzes === "object" ? parsed.quizzes : {},
        focus: Boolean(parsed.focus),
      };
    } catch (_error) {
      return fallback;
    }
  }

  function saveStudyState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(studyState));
    } catch (_error) {
      // The site remains usable when storage is blocked (for example, private mode).
    }
  }

  function applyTiredState() {
    const tired = localStorage.getItem(TIRED_KEY) === "yes";
    document.body.classList.toggle("tired-mode", tired);
    if (tiredButton) {
      tiredButton.setAttribute("aria-pressed", String(tired));
      const label = tiredButton.querySelector("b");
      if (label) label.textContent = tired ? "Tired mode" : "Full notes";
    }
  }

  function toggleTired() {
    const tired = !document.body.classList.contains("tired-mode");
    localStorage.setItem(TIRED_KEY, tired ? "yes" : "no");
    applyTiredState();
    showToast(tired ? "Tired mode on — only the safest route is showing." : "Full notes are back.");
  }

  function isComplete(lessonId) {
    return studyState.completed.includes(lessonId);
  }

  function setComplete(lessonId, complete) {
    const current = new Set(studyState.completed);
    if (complete) current.add(lessonId);
    else current.delete(lessonId);
    studyState.completed = lessons.filter((lesson) => current.has(lesson.id)).map((lesson) => lesson.id);
    saveStudyState();
    renderLessonNavigation();
    updateProgressUI();
    updateActiveNavigation(parseRoute());
  }

  function progressPercent() {
    if (!lessons.length) return 0;
    return Math.round((studyState.completed.length / lessons.length) * 100);
  }

  function updateProgressUI() {
    const completed = lessons.filter((lesson) => isComplete(lesson.id)).length;
    const percent = lessons.length ? Math.round((completed / lessons.length) * 100) : 0;
    const label = document.getElementById("sidebar-progress-label");
    const bar = document.getElementById("sidebar-progress-bar");
    const detail = document.getElementById("sidebar-progress-detail");
    if (label) label.textContent = `${percent}%`;
    if (bar) bar.style.width = `${percent}%`;
    if (detail) detail.textContent = `${completed} of ${lessons.length} tutorials complete`;
    const practicePill = document.querySelector('[data-route="practice"] .nav-pill');
    if (practicePill) practicePill.textContent = String(examBank.length);
  }

  function renderLessonNavigation() {
    if (!lessonNav) return;
    lessonNav.innerHTML = lessons.map((lesson) => {
      const done = isComplete(lesson.id);
      return `
        <button class="nav-item" data-route="lesson/${escapeHtml(lesson.id)}">
          <span class="lesson-index${done ? " done" : ""}" aria-hidden="true">${done ? "✓" : escapeHtml(lesson.number)}</span>
          <span>${escapeHtml(lesson.navTitle || lesson.title)}</span>
        </button>`;
    }).join("");
  }

  function parseRoute() {
    const raw = decodeURIComponent((window.location.hash || "#home").replace(/^#\/?/, ""));
    const parts = raw.split("/").filter(Boolean);
    if (!parts.length || parts[0] === "home") return { name: "home", raw: "home" };
    if (parts[0] === "lesson" && parts[1]) return { name: "lesson", id: parts[1], raw: `lesson/${parts[1]}` };
    if (["practice", "lab", "memory", "resources"].includes(parts[0])) {
      return { name: parts[0], raw: parts[0] };
    }
    return { name: "not-found", raw };
  }

  function goToRoute(route) {
    const cleanRoute = String(route || "home").replace(/^#\/?/, "");
    if ((window.location.hash || "#home") === `#${cleanRoute}`) {
      renderRoute(true);
    } else {
      window.location.hash = cleanRoute;
    }
  }

  function routeMeta(route) {
    const courseCode = (data.course && data.course.code) || "Discrete Mathematics";
    if (route.name === "lesson") {
      const lesson = lessons.find((item) => item.id === route.id);
      return lesson
        ? { eyebrow: `Tutorial ${String(lesson.number).padStart(2, "0")} · ${lesson.minutes || "—"} min`, title: lesson.navTitle || lesson.title, document: lesson.title }
        : { eyebrow: courseCode, title: "Tutorial not found", document: "Not found" };
    }
    const pages = {
      home: [courseCode + " · First year", "Study desk", "Study desk"],
      practice: ["Separate banks · fully worked", "Exam practice", "Exam practice"],
      lab: ["Learn by changing the inputs", "Practice lab", "Practice lab"],
      memory: ["Active recall · tap to flip", "Memory deck", "Memory deck"],
      resources: ["Checked links · original files", "Videos & sources", "Videos & sources"],
      "not-found": [courseCode, "Page not found", "Not found"],
    };
    const page = pages[route.name] || pages["not-found"];
    return { eyebrow: page[0], title: page[1], document: page[2] };
  }

  function renderRoute(moveFocus) {
    const route = parseRoute();
    const meta = routeMeta(route);
    if (topbarEyebrow) topbarEyebrow.textContent = meta.eyebrow;
    if (topbarTitle) topbarTitle.textContent = meta.title;
    document.title = `${meta.document} — Discrete, Decoded`;

    if (route.name === "home") renderDashboard();
    else if (route.name === "lesson") renderLesson(route.id);
    else if (route.name === "practice") renderPractice();
    else if (route.name === "lab") renderLab();
    else if (route.name === "memory") renderMemoryDeck();
    else if (route.name === "resources") renderResources();
    else renderNotFound();

    updateActiveNavigation(route);
    updateProgressUI();
    closeSidebar();

    if (route.name === "lesson") restoreQuizReview(route.id);
    if (route.name === "lab") updateAllLabs();

    if (runtime.pendingScrollId) {
      const targetId = runtime.pendingScrollId;
      runtime.pendingScrollId = "";
      requestAnimationFrame(() => {
        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    if (moveFocus) {
      requestAnimationFrame(() => main.focus({ preventScroll: true }));
    }
    window.setTimeout(() => window.StudyTools?.maybeCameo(), 900);
  }

  function updateActiveNavigation(route) {
    document.querySelectorAll("#sidebar [data-route]").forEach((item) => {
      const active = item.dataset.route === route.raw;
      item.classList.toggle("active", active);
      if (active) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
  }

  function renderDashboard() {
    const completed = lessons.filter((lesson) => isComplete(lesson.id)).length;
    const minutes = lessons.reduce((total, lesson) => total + (Number(lesson.minutes) || 0), 0);
    const quizResults = Object.values(studyState.quizzes || {});
    const mastered = quizResults.filter((result) => result && (result.passed || Number(result.bestPercent) >= masteryTarget)).length;
    const nextLesson = lessons.find((lesson) => !isComplete(lesson.id)) || lessons[lessons.length - 1];
    const nextRoute = nextLesson ? `lesson/${nextLesson.id}` : "practice";
    const nextLabel = nextLesson ? `Continue: Tutorial ${nextLesson.number}` : "Open exam practice";

    main.innerHTML = `
      <section class="dashboard-hero" aria-labelledby="dashboard-title">
        <div class="hero-copy">
          <span class="hero-kicker">${escapeHtml((data.course && data.course.code) || "First-year discrete maths")}</span>
          <h1 id="dashboard-title">Make the symbols make sense.</h1>
          <p>Simple notes, worked steps, memory shortcuts, quick quizzes, and clearly separated past-paper and likely-exam practice—organised up to ${escapeHtml((data.course && data.course.currentStop) || "your current class point")}.</p>
          <div class="button-row">
            <button class="primary-button" data-route="${escapeHtml(nextRoute)}">${escapeHtml(nextLabel)} <span aria-hidden="true">→</span></button>
            <button class="ghost-button" data-route="practice">Try an exam question</button>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="hero-note">
            <span>Your study loop</span>
            <strong>Understand first.<br />Recall second.<br />Practise last.</strong>
            <div class="mini-checklist"><div>Read one tutorial</div><div>Open the worked example</div><div>Score ${masteryTarget}% to complete it</div></div>
          </div>
        </div>
      </section>

      <section class="dashboard-strip" aria-label="Course summary">
        <div class="stat-card"><span class="stat-icon" aria-hidden="true">✓</span><div><strong>${completed}/${lessons.length} tutorials complete</strong><span>${progressPercent()}% course progress</span></div></div>
        <div class="stat-card"><span class="stat-icon" aria-hidden="true">◎</span><div><strong>${mastered} quizzes mastered</strong><span>${masteryTarget}% is the pass line</span></div></div>
        <div class="stat-card"><span class="stat-icon" aria-hidden="true">◷</span><div><strong>${minutes} guided minutes</strong><span>plus ${examBank.length} exam questions</span></div></div>
      </section>

      <section aria-labelledby="tutorial-heading">
        <div class="section-heading">
          <div><h2 id="tutorial-heading">Your tutorial notebook</h2><p>Move in order when learning; jump by topic when revising. Your quiz progress stays on this device.</p></div>
          <button class="secondary-button" data-route="memory">Open memory deck</button>
        </div>
        <div class="topic-grid">
          ${lessons.length ? lessons.map(renderTopicCard).join("") : renderEmptyData("No tutorials have been loaded yet.")}
        </div>
      </section>

      <section class="coming-map" aria-label="Course scope and study method">
        <div class="scope-card"><h3>Where these notes stop</h3><p>The taught material currently ends at functions: mappings, domain, codomain, range, and one-to-one versus many-to-one rules. Composition, inverses, recurrence relations, graph theory, and other later-course material remain on the roadmap.</p></div>
        <div class="study-method-card"><h3>The exam-safe method</h3><p>Learn the rule, explain it in your own words, copy one worked method without looking, then solve one exam-style question. Reading alone feels fast but practice is what makes it stick.</p></div>
      </section>`;
  }

  function renderTopicCard(lesson) {
    const done = isComplete(lesson.id);
    const result = studyState.quizzes && studyState.quizzes[lesson.id];
    const score = result && Number.isFinite(Number(result.bestPercent)) ? `${Math.round(Number(result.bestPercent))}% best quiz` : `${safeArray(lesson.sections).length} bite-size sections`;
    return `
      <button class="topic-card${done ? " complete" : ""}" data-route="lesson/${escapeHtml(lesson.id)}" data-symbol="${escapeHtml(lesson.symbol || "∴")}">
        <span class="topic-meta"><span class="topic-number">Tutorial ${escapeHtml(lesson.number)}</span><span class="status-chip${done ? " done" : ""}">${done ? "Mastered" : "To learn"}</span></span>
        <h3>${escapeHtml(lesson.title)}</h3>
        <p>${escapeHtml(lesson.summary)}</p>
        <small>${escapeHtml(score)} · ${escapeHtml(lesson.minutes || "—")} min</small>
      </button>`;
  }

  function renderLesson(lessonId) {
    const lesson = lessons.find((item) => item.id === lessonId);
    if (!lesson) {
      renderNotFound("That tutorial is not in the current notebook.");
      return;
    }
    const index = lessons.indexOf(lesson);
    const previous = lessons[index - 1];
    const next = lessons[index + 1];
    const complete = isComplete(lesson.id);
    const hasExamExample = safeArray(lesson.examples).some((example) => /exam|paper|revision/i.test(example.source || ""));

    main.innerHTML = `
      <header class="lesson-header">
        <div>
          <div class="lesson-badges">
            <span class="source-chip">Tutorial ${escapeHtml(lesson.number)} · ${escapeHtml(lesson.minutes || "—")} min</span>
            <span class="source-chip">From your class notes</span>
            ${hasExamExample ? '<span class="source-chip exam">Exam-practice examples inside</span>' : ""}
          </div>
          <h1>${escapeHtml(lesson.title)}</h1>
          <p>${escapeHtml(lesson.summary)}</p>
        </div>
        <div class="lesson-number-mark" aria-hidden="true">${escapeHtml(lesson.number)}</div>
      </header>

      <div class="lesson-layout">
        <article class="lesson-article">
          <section class="tired-route" aria-label="Low-battery summary">
            <span class="tired-kicker">☾ Peter’s low-battery route</span>
            <h2>Catch this, then stop.</h2>
            <p>${escapeHtml(lesson.summary)}</p>
            <div class="tired-goals">${safeArray(lesson.goals).slice(0, 3).map((goal) => `<div><span>✓</span>${escapeHtml(goal)}</div>`).join("")}</div>
            ${safeArray(lesson.memory).length ? `<div class="tired-memory">${safeArray(lesson.memory).map((note) => `<p><strong>${escapeHtml(note.title)}:</strong> ${escapeHtml(note.body)}</p>`).join("")}</div>` : ""}
            ${safeArray(lesson.examples)[0] ? `<details class="tired-check"><summary>One exam check</summary><p>${escapeHtml(lesson.examples[0].question)}</p><strong>${escapeHtml(lesson.examples[0].answer || "Open full notes for the worked steps.")}</strong></details>` : ""}
          </section>

          <div class="full-notes-route">
          ${safeArray(lesson.goals).length ? `
            <section aria-labelledby="goals-${escapeHtml(lesson.id)}">
              <h2 id="goals-${escapeHtml(lesson.id)}" class="eyebrow">By the end, you can…</h2>
              <div class="learning-goals">${safeArray(lesson.goals).map((goal) => `<div class="goal-card">${escapeHtml(goal)}</div>`).join("")}</div>
            </section>` : ""}

          ${safeArray(lesson.sections).map((section) => `
            <section class="note-section" id="${escapeHtml(section.id)}">
              <h2>${escapeHtml(section.title)}</h2>
              ${section.html || ""}
            </section>`).join("")}

          ${renderMemoryNotes(lesson.memory)}
          ${safeArray(lesson.examples).map(renderWorkedExample).join("")}
          ${renderQuiz(lesson)}
          ${renderLessonVideos(lesson.videos)}
          </div>

          <nav class="lesson-footer-nav" aria-label="Tutorial pages">
            ${previous ? `<button class="lesson-jump" data-route="lesson/${escapeHtml(previous.id)}"><small>← Previous tutorial</small><strong>${escapeHtml(previous.navTitle || previous.title)}</strong></button>` : '<button class="lesson-jump" data-route="home"><small>← Back</small><strong>Study desk</strong></button>'}
            ${next ? `<button class="lesson-jump next" data-route="lesson/${escapeHtml(next.id)}"><small>Next tutorial →</small><strong>${escapeHtml(next.navTitle || next.title)}</strong></button>` : '<button class="lesson-jump next" data-route="practice"><small>Next step →</small><strong>Exam practice</strong></button>'}
          </nav>
        </article>

        <aside class="lesson-aside" aria-label="Tutorial tools">
          <nav class="on-page" aria-label="On this page">
            <strong>On this page</strong>
            ${safeArray(lesson.sections).map((section) => `<a href="#${escapeHtml(section.id)}" data-section-link="${escapeHtml(section.id)}">${escapeHtml(section.title)}</a>`).join("")}
            ${safeArray(lesson.examples).length ? '<a href="#worked-examples" data-section-link="worked-examples">Worked examples</a>' : ""}
            ${safeArray(lesson.quiz).length ? `<a href="#quiz-${escapeHtml(lesson.id)}" data-section-link="quiz-${escapeHtml(lesson.id)}">Mastery quiz</a>` : ""}
          </nav>
          <div class="aside-action">
            <button class="complete-button${complete ? " done" : ""}" data-action="toggle-complete" data-lesson-id="${escapeHtml(lesson.id)}">${complete ? "✓ Tutorial mastered" : `Pass the quiz (${masteryTarget}%)`}</button>
            <button class="secondary-button aside-action" data-action="print">Print / save notes</button>
          </div>
        </aside>
      </div>`;
  }

  function renderMemoryNotes(notes) {
    if (!safeArray(notes).length) return "";
    return `
      <section aria-labelledby="memory-shortcuts">
        <div class="section-heading"><div><h2 id="memory-shortcuts">Memory shortcuts</h2><p>These are the lines worth knowing without notes.</p></div></div>
        <div class="memory-row">${safeArray(notes).map((note) => `
          <aside class="sticky ${["blue", "green"].includes(note.tone) ? note.tone : ""}">
            <span class="tape" aria-hidden="true"></span><strong>${escapeHtml(note.title)}</strong><p>${escapeHtml(note.body)}</p>
          </aside>`).join("")}</div>
      </section>`;
  }

  function renderWorkedExample(example, exampleIndex) {
    const headingId = exampleIndex === 0 ? ' id="worked-examples"' : "";
    return `
      <details class="worked-example"${headingId}>
        <summary><span>${escapeHtml(example.title || "Worked example")}</span><span class="tiny-chip">show steps</span></summary>
        <div class="example-body">
          ${example.source ? `<span class="source-chip exam">${escapeHtml(example.source)}</span>` : ""}
          <div class="problem-statement">${escapeHtml(example.question || "")}</div>
          <ol class="solution-steps">${safeArray(example.steps).map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
          ${example.answer ? `<div class="answer-line">Answer: ${escapeHtml(example.answer)}</div>` : ""}
        </div>
      </details>`;
  }

  function quizAnswerIndex(question) {
    if (Number.isInteger(question.answer)) return question.answer;
    if (Number.isInteger(question.correct)) return question.correct;
    const parsed = Number(question.answer);
    return Number.isInteger(parsed) ? parsed : -1;
  }

  function renderQuiz(lesson) {
    const questions = safeArray(lesson.quiz);
    if (!questions.length) return "";
    return `
      <section class="quiz-block" id="quiz-${escapeHtml(lesson.id)}" aria-labelledby="quiz-heading-${escapeHtml(lesson.id)}">
        <div class="quiz-head"><div><h2 id="quiz-heading-${escapeHtml(lesson.id)}">Check that it stuck</h2><p>Answer every question. ${masteryTarget}% or higher masters this tutorial.</p></div><span class="quiz-count">${questions.length} questions</span></div>
        <form class="quiz-form" data-quiz-form="${escapeHtml(lesson.id)}">
          ${questions.map((question, questionIndex) => `
            <div class="quiz-question" role="group" aria-labelledby="quiz-${escapeHtml(lesson.id)}-q-${questionIndex}">
              <h3 id="quiz-${escapeHtml(lesson.id)}-q-${questionIndex}">${questionIndex + 1}. ${question.q || question.question || "Question"}</h3>
              <div class="quiz-options">
                ${safeArray(question.options).map((option, optionIndex) => `
                  <label class="quiz-option" data-question="${questionIndex}" data-option="${optionIndex}">
                    <input type="radio" name="${escapeHtml(lesson.id)}-q-${questionIndex}" value="${optionIndex}" />
                    <span>${option}</span>
                  </label>`).join("")}
              </div>
              <div class="quiz-feedback" id="quiz-feedback-${escapeHtml(lesson.id)}-${questionIndex}" aria-live="polite"></div>
            </div>`).join("")}
          <div class="quiz-actions">
            <button type="button" class="primary-button" data-action="submit-quiz" data-lesson-id="${escapeHtml(lesson.id)}">Check my answers</button>
            <span class="quiz-score" id="quiz-score-${escapeHtml(lesson.id)}" aria-live="polite"></span>
          </div>
        </form>
      </section>`;
  }

  function restoreQuizReview(lessonId) {
    const lesson = lessons.find((item) => item.id === lessonId);
    const result = studyState.quizzes && studyState.quizzes[lessonId];
    if (!lesson || !result || !Array.isArray(result.answers)) return;
    applyQuizReview(lesson, result);
  }

  function applyQuizReview(lesson, result) {
    const form = main.querySelector(`[data-quiz-form="${lesson.id}"]`);
    if (!form) return;
    safeArray(lesson.quiz).forEach((question, questionIndex) => {
      const selected = Number(result.answers[questionIndex]);
      const correct = quizAnswerIndex(question);
      const options = form.querySelectorAll(`[data-question="${questionIndex}"]`);
      options.forEach((label) => {
        const optionIndex = Number(label.dataset.option);
        const input = label.querySelector("input");
        label.classList.remove("correct", "wrong");
        if (input) input.checked = optionIndex === selected;
        if (optionIndex === correct) label.classList.add("correct");
        else if (optionIndex === selected) label.classList.add("wrong");
      });
      const feedback = document.getElementById(`quiz-feedback-${lesson.id}-${questionIndex}`);
      if (feedback) {
        const right = selected === correct;
        feedback.innerHTML = `<strong>${right ? "Correct." : "Not quite."}</strong> ${question.explain || "Review the rule above and try again."}`;
        feedback.classList.add("show");
      }
    });
    const score = document.getElementById(`quiz-score-${lesson.id}`);
    if (score) {
      const currentPercent = Number(result.percent) || 0;
      const bestPercent = Math.max(currentPercent, Number(result.bestPercent) || 0);
      score.textContent = `${Math.round(currentPercent)}% this try · ${Math.round(bestPercent)}% best${bestPercent >= masteryTarget ? " · mastered ✓" : ""}`;
    }
  }

  function submitQuiz(lessonId) {
    const lesson = lessons.find((item) => item.id === lessonId);
    const form = main.querySelector(`[data-quiz-form="${lessonId}"]`);
    if (!lesson || !form) return;
    const questions = safeArray(lesson.quiz);
    const answers = questions.map((_question, index) => {
      const selected = form.querySelector(`input[name="${lessonId}-q-${index}"]:checked`);
      return selected ? Number(selected.value) : -1;
    });
    const unanswered = answers.filter((answer) => answer < 0).length;
    if (unanswered) {
      showToast(`Answer ${unanswered === 1 ? "the remaining question" : `all ${unanswered} remaining questions`} first.`);
      const firstMissing = answers.indexOf(-1);
      const target = form.querySelector(`[data-question="${firstMissing}"] input`);
      if (target) target.focus();
      return;
    }
    const correct = questions.reduce((total, question, index) => total + (answers[index] === quizAnswerIndex(question) ? 1 : 0), 0);
    const percent = questions.length ? Math.round((correct / questions.length) * 100) : 0;
    const previous = studyState.quizzes[lessonId] || {};
    const bestPercent = Math.max(percent, Number(previous.bestPercent) || Number(previous.percent) || 0);
    const passed = bestPercent >= masteryTarget;
    const result = { answers, correct, total: questions.length, percent, bestPercent, passed };
    studyState.quizzes[lessonId] = result;
    if (passed) {
      const current = new Set(studyState.completed);
      current.add(lessonId);
      studyState.completed = lessons.filter((item) => current.has(item.id)).map((item) => item.id);
    }
    saveStudyState();
    applyQuizReview(lesson, result);
    renderLessonNavigation();
    updateProgressUI();
    updateActiveNavigation(parseRoute());
    updateCompleteButton(lessonId);
    showToast(passed ? `Tutorial mastered — best score ${bestPercent}%.` : `${percent}% this try. Review the explanations, then try again.`);
  }

  function updateCompleteButton(lessonId) {
    const button = main.querySelector(`[data-action="toggle-complete"][data-lesson-id="${lessonId}"]`);
    if (!button) return;
    const complete = isComplete(lessonId);
    button.classList.toggle("done", complete);
    button.textContent = complete ? "✓ Tutorial mastered" : `Pass the quiz (${masteryTarget}%)`;
  }

  function renderLessonVideos(videos) {
    if (!safeArray(videos).length) return "";
    return `
      <section class="video-section" aria-labelledby="video-heading">
        <h2 id="video-heading">Learn it another way</h2>
        <p>Use a video when a written step still feels foggy. Pause and work along—do not only watch.</p>
        <div class="video-grid">${safeArray(videos).map(renderVideoCard).join("")}</div>
      </section>`;
  }

  function renderVideoCard(video) {
    if (!video || !video.url) return "";
    return `
      <a class="video-card" href="${escapeHtml(video.url)}" target="_blank" rel="noopener noreferrer">
        <span class="video-icon" aria-hidden="true">▶</span><span><strong>${escapeHtml(video.title || "Video lesson")}</strong><small>${escapeHtml(video.channel || video.author || "External resource")}</small></span><span aria-hidden="true">↗</span>
      </a>`;
  }

  function renderPractice() {
    const activeCollection = practiceCollections.find((collection) => collection.id === runtime.practiceCollection) || practiceCollections[0];
    runtime.practiceCollection = activeCollection.id;
    const collectionQuestions = examBank.filter((question) => question.collection === activeCollection.id);
    const topics = uniqueValues(collectionQuestions.map((question) => question.topic));
    const difficulties = uniqueValues(collectionQuestions.map((question) => question.difficulty));
    const filtered = collectionQuestions.filter((question) => {
      const topicMatches = runtime.practiceTopic === "All" || question.topic === runtime.practiceTopic;
      const difficultyMatches = runtime.practiceDifficulty === "All" || question.difficulty === runtime.practiceDifficulty;
      return topicMatches && difficultyMatches;
    });

    main.innerHTML = `
      <header class="page-intro"><span class="eyebrow">${examBank.length} worked questions · provenance kept clear</span><h1>Exam practice</h1><p>Past-paper questions, uploaded revision exercises, and generated or research-inspired practice live in separate banks. Choose one bank below—questions from different origins are never blended into the same list.</p></header>
      <section class="practice-collection-picker" aria-labelledby="collection-picker-label">
        <div class="section-heading compact"><div><h2 id="collection-picker-label">Choose a question bank</h2><p>Each bank keeps its own topic and difficulty filters.</p></div></div>
        <div class="collection-grid">
          ${practiceCollections.map((collection) => {
            const count = examBank.filter((question) => question.collection === collection.id).length;
            const selected = collection.id === activeCollection.id;
            return `<button type="button" class="collection-card${selected ? " active" : ""}" data-practice-collection="${escapeHtml(collection.id)}" aria-pressed="${selected}">
              <span class="eyebrow">${escapeHtml(collection.eyebrow || "Question bank")}</span>
              <span class="collection-card-title"><strong>${escapeHtml(collection.label)}</strong><span>${count}</span></span>
              <small>${escapeHtml(collection.description || "A separate practice collection.")}</small>
            </button>`;
          }).join("")}
        </div>
        <div class="collection-banner"><span aria-hidden="true">✓</span><p><strong>Showing ${escapeHtml(activeCollection.label)} only.</strong> ${escapeHtml(activeCollection.description || "")}</p></div>
      </section>
      <section class="practice-filters" aria-labelledby="topic-filter-label">
        <h2 id="topic-filter-label" class="eyebrow">Filter by topic</h2>
        <div class="filter-row" aria-label="Filter exam questions by topic">${["All", ...topics].map((topic) => filterButton(topic, runtime.practiceTopic, "practice-topic")).join("")}</div>
        <h2 class="eyebrow">Filter by difficulty</h2>
        <div class="filter-row" aria-label="Filter exam questions by difficulty">${["All", ...difficulties].map((difficulty) => filterButton(difficulty, runtime.practiceDifficulty, "practice-difficulty")).join("")}</div>
      </section>
      <div class="section-heading"><div><h2>${filtered.length} matching question${filtered.length === 1 ? "" : "s"}</h2><p>Read the hint only if you are stuck; reveal the worked answer last.</p></div></div>
      <section class="exam-list" id="practice-question-panel" aria-label="${escapeHtml(activeCollection.label)} questions">
        ${filtered.length ? filtered.map((question, index) => renderExamCard(question, index)).join("") : '<div class="practice-empty"><strong>No question matches both filters.</strong><p>Choose “All” in one of the rows above.</p></div>'}
      </section>`;
  }

  function uniqueValues(values) {
    return [...new Set(values.filter(Boolean))];
  }

  function filterButton(value, selected, dataName) {
    return `<button class="filter-button${value === selected ? " active" : ""}" data-${dataName}="${escapeHtml(value)}" aria-pressed="${value === selected}">${escapeHtml(value)}</button>`;
  }

  function renderExamCard(question, index) {
    const solution = question.solution || "<p>A worked solution has not been added yet.</p>";
    const collection = practiceCollections.find((item) => item.id === question.collection);
    const sourceMarkup = question.sourceUrl && /^https?:\/\//i.test(question.sourceUrl)
      ? `<a class="source-chip exam" href="${escapeHtml(question.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(question.source || "Source paper")} · open source ↗</a>`
      : `<span class="source-chip exam">${escapeHtml(question.source || "Practice question")}${question.sourceUrl ? " · audited source file" : ""}</span>`;
    return `
      <details class="exam-card" id="${escapeHtml(question.id || `exam-question-${index + 1}`)}">
        <summary>
          <div>
            <div class="exam-meta"><span class="tiny-chip origin-${escapeHtml(question.collection || "unknown")}">${escapeHtml(collection ? collection.label : "Unclassified")}</span><span class="tiny-chip exam">${escapeHtml(question.topic || "Mixed")}</span><span class="tiny-chip">${escapeHtml(question.difficulty || "Practice")}</span>${question.scope ? `<span class="tiny-chip scope-ahead">${escapeHtml(question.scope)}</span>` : ""}${question.marks ? `<span class="tiny-chip">${escapeHtml(question.marks)} mark${Number(question.marks) === 1 ? "" : "s"}</span>` : ""}</div>
            <h3>${index + 1}. ${escapeHtml(question.question || "Question")}</h3>
          </div>
        </summary>
        <div class="exam-body">
          ${question.source ? `<p>${sourceMarkup}</p>` : ""}
          ${question.sourceWarning ? `<div class="source-warning"><strong>Source issue</strong><span>${escapeHtml(question.sourceWarning)}</span></div>` : ""}
          ${question.hint ? `<h4>Hint first</h4><p>${escapeHtml(question.hint)}</p>` : ""}
          <h4>Worked answer</h4><div class="exam-answer">${solution}</div>
        </div>
      </details>`;
  }

  function renderLab() {
    main.innerHTML = `
      <header class="page-intro"><span class="eyebrow">Change a value · watch the method</span><h1>Practice lab</h1><p>These tools make the rules visible. Use them to check work after you have tried the calculation yourself.</p></header>
      <div class="lab-grid">
        <section class="lab-card" aria-labelledby="binomial-lab-heading">
          <h2 id="binomial-lab-heading">Binomial term coach</h2>
          <p>Find Tᵣ₊₁ in (a·xᵖ + b·xᑫ)ⁿ. A negative q handles fractions such as 1/x.</p>
          <div class="control-grid">
            ${numberField("bin-a", "a (first coefficient)", 2, "any")}
            ${numberField("bin-p", "p (first x power)", 2, "any")}
            ${numberField("bin-b", "b (second coefficient)", -3, "any")}
            ${numberField("bin-q", "q (second x power)", -1, "any")}
            ${numberField("bin-n", "n (whole-number power)", 10, 1, 0, 60)}
            ${numberField("bin-r", "r (0 means first term)", 4, 1, 0, 60)}
          </div>
          <div class="lab-output" id="binomial-output" aria-live="polite"></div>
        </section>

        <section class="lab-card" aria-labelledby="truth-lab-heading">
          <h2 id="truth-lab-heading">Two-letter truth table</h2>
          <p>Choose a connective and see its full TT, TF, FT, FF pattern.</p>
          <div class="field"><label for="truth-operation">Connective</label><select id="truth-operation" data-lab-control="truth">
            <option value="and">p ∧ q — AND</option><option value="or">p ∨ q — inclusive OR</option><option value="xor">p ⊕ q — exclusive OR</option><option value="implies">p → q — implication</option><option value="iff">p ↔ q — biconditional</option>
          </select></div>
          <div class="truth-output" id="truth-output" aria-live="polite"></div>
        </section>

        <section class="lab-card wide" aria-labelledby="venn-lab-heading">
          <h2 id="venn-lab-heading">Venn shading studio</h2>
          <p>Select an operation. Coral is the region named by the expression; the rectangle is the universal set U.</p>
          <div class="venn-controls" role="group" aria-label="Choose a Venn operation">
            ${[
              ["union", "A ∪ B"], ["intersection", "A ∩ B"], ["a-minus-b", "A ∖ B"],
              ["b-minus-a", "B ∖ A"], ["symmetric", "A △ B"], ["complement-a", "Aᶜ"],
            ].map(([value, label]) => `<button class="filter-button${runtime.vennOperation === value ? " active" : ""}" data-venn-operation="${value}" aria-pressed="${runtime.vennOperation === value}">${label}</button>`).join("")}
          </div>
          <div id="venn-output" aria-live="polite"></div>
        </section>
      </div>`;
  }

  function numberField(id, label, value, step, min, max) {
    return `<div class="field"><label for="${id}">${escapeHtml(label)}</label><input id="${id}" data-lab-control="binomial" type="number" value="${value}" step="${step}"${min != null ? ` min="${min}"` : ""}${max != null ? ` max="${max}"` : ""} /></div>`;
  }

  function updateAllLabs() {
    updateBinomialLab();
    updateTruthLab();
    updateVennLab();
  }

  function getNumber(id) {
    const input = document.getElementById(id);
    return input ? Number(input.value) : NaN;
  }

  function combination(n, r) {
    const smaller = Math.min(r, n - r);
    let result = 1;
    for (let index = 1; index <= smaller; index += 1) {
      result = (result * (n - smaller + index)) / index;
    }
    return result;
  }

  function readableNumber(value) {
    if (!Number.isFinite(value)) return "not a finite number";
    const clean = Math.abs(value - Math.round(value)) < 1e-10 ? Math.round(value) : value;
    if (Math.abs(clean) >= 1e12 || (Math.abs(clean) > 0 && Math.abs(clean) < 1e-6)) return clean.toExponential(6);
    return clean.toLocaleString(undefined, { maximumSignificantDigits: 12 });
  }

  function updateBinomialLab() {
    const output = document.getElementById("binomial-output");
    if (!output) return;
    const a = getNumber("bin-a");
    const p = getNumber("bin-p");
    const b = getNumber("bin-b");
    const q = getNumber("bin-q");
    const n = getNumber("bin-n");
    const r = getNumber("bin-r");
    if (![a, p, b, q, n, r].every(Number.isFinite) || !Number.isInteger(n) || !Number.isInteger(r) || n < 0 || n > 60 || r < 0 || r > n) {
      output.innerHTML = "Use a whole number 0≤n≤60 and a whole number r with 0≤r≤n.";
      return;
    }
    const choose = combination(n, r);
    const exponent = p * (n - r) + q * r;
    const coefficient = choose * (a ** (n - r)) * (b ** r);
    const xPart = exponent === 0 ? "" : exponent === 1 ? "x" : `x<sup>${readableNumber(exponent)}</sup>`;
    const term = exponent === 0 ? readableNumber(coefficient) : `${readableNumber(coefficient)}${xPart}`;
    output.innerHTML = `
      <strong>T<sub>${r + 1}</sub> uses r=${r}</strong>
      <span class="math-block">T<sub>${r + 1}</sub> = C(${n},${r})(${readableNumber(a)}x<sup>${readableNumber(p)}</sup>)<sup>${n - r}</sup>(${readableNumber(b)}x<sup>${readableNumber(q)}</sup>)<sup>${r}</sup></span>
      <p>Choose value: <strong>${readableNumber(choose)}</strong> · x exponent: <strong>${readableNumber(exponent)}</strong></p>
      <p class="answer-line">Term: ${term}${exponent === 0 ? " — this is constant" : ""}</p>`;
  }

  function updateTruthLab() {
    const select = document.getElementById("truth-operation");
    const output = document.getElementById("truth-output");
    if (!select || !output) return;
    const operations = {
      and: { symbol: "p ∧ q", description: "true only when both are true", test: (p, q) => p && q },
      or: { symbol: "p ∨ q", description: "false only when both are false", test: (p, q) => p || q },
      xor: { symbol: "p ⊕ q", description: "true when exactly one is true", test: (p, q) => p !== q },
      implies: { symbol: "p → q", description: "false only at T → F", test: (p, q) => !p || q },
      iff: { symbol: "p ↔ q", description: "true when the values match", test: (p, q) => p === q },
    };
    const operation = operations[select.value] || operations.and;
    const rows = [[true, true], [true, false], [false, true], [false, false]];
    output.innerHTML = `
      <div class="plain-table-wrap"><table class="plain-table"><thead><tr><th>p</th><th>q</th><th>${operation.symbol}</th></tr></thead><tbody>
        ${rows.map(([p, q]) => `<tr><td>${p ? "T" : "F"}</td><td>${q ? "T" : "F"}</td><td><strong>${operation.test(p, q) ? "T" : "F"}</strong></td></tr>`).join("")}
      </tbody></table></div><p><strong>Remember:</strong> ${operation.description}.</p>`;
  }

  function vennFill(operation) {
    const colour = "#ef725d";
    const circleA = `<circle cx="115" cy="95" r="55" fill="${colour}" />`;
    const circleB = `<circle cx="165" cy="95" r="55" fill="${colour}" />`;
    const shapes = {
      union: circleA + circleB,
      intersection: `<circle cx="115" cy="95" r="55" fill="${colour}" clip-path="url(#clip-b)" />`,
      "a-minus-b": `<circle cx="115" cy="95" r="55" fill="${colour}" mask="url(#remove-b)" />`,
      "b-minus-a": `<circle cx="165" cy="95" r="55" fill="${colour}" mask="url(#remove-a)" />`,
      symmetric: `<circle cx="115" cy="95" r="55" fill="${colour}" mask="url(#remove-b)" /><circle cx="165" cy="95" r="55" fill="${colour}" mask="url(#remove-a)" />`,
      "complement-a": `<rect x="20" y="15" width="240" height="160" fill="${colour}" mask="url(#remove-a-from-u)" />`,
    };
    return shapes[operation] || shapes.union;
  }

  function updateVennLab() {
    const output = document.getElementById("venn-output");
    if (!output) return;
    const labels = {
      union: ["A ∪ B", "Everything in A, in B, or in both."],
      intersection: ["A ∩ B", "Only the overlap: elements shared by A and B."],
      "a-minus-b": ["A ∖ B", "The part of A that is not in B."],
      "b-minus-a": ["B ∖ A", "The part of B that is not in A."],
      symmetric: ["A △ B", "Elements in exactly one set; remove the overlap."],
      "complement-a": ["Aᶜ", "Everything in the universe U that is outside A."],
    };
    const copy = labels[runtime.vennOperation] || labels.union;
    document.querySelectorAll("[data-venn-operation]").forEach((button) => {
      const active = button.dataset.vennOperation === runtime.vennOperation;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    output.innerHTML = `
      <div class="venn-demo">
        <svg class="venn-svg" viewBox="0 0 280 190" role="img" aria-labelledby="venn-title venn-description">
          <title id="venn-title">Venn diagram for ${copy[0]}</title><desc id="venn-description">${copy[1]}</desc>
          <defs>
            <clipPath id="clip-b"><circle cx="165" cy="95" r="55" /></clipPath>
            <mask id="remove-b" maskUnits="userSpaceOnUse" x="0" y="0" width="280" height="190"><rect width="280" height="190" fill="white" /><circle cx="165" cy="95" r="55" fill="black" /></mask>
            <mask id="remove-a" maskUnits="userSpaceOnUse" x="0" y="0" width="280" height="190"><rect width="280" height="190" fill="white" /><circle cx="115" cy="95" r="55" fill="black" /></mask>
            <mask id="remove-a-from-u" maskUnits="userSpaceOnUse" x="0" y="0" width="280" height="190"><rect width="280" height="190" fill="white" /><circle cx="115" cy="95" r="55" fill="black" /></mask>
          </defs>
          <rect x="20" y="15" width="240" height="160" rx="7" fill="#fffef9" stroke="#173c35" stroke-width="2" />
          ${vennFill(runtime.vennOperation)}
          <circle cx="115" cy="95" r="55" fill="none" stroke="#173c35" stroke-width="2.5" /><circle cx="165" cy="95" r="55" fill="none" stroke="#173c35" stroke-width="2.5" />
          <text x="102" y="88" font-size="16" font-weight="700" fill="#173c35">A</text><text x="174" y="88" font-size="16" font-weight="700" fill="#173c35">B</text><text x="30" y="35" font-size="14" font-weight="700" fill="#173c35">U</text>
        </svg>
        <div class="venn-copy"><strong>${copy[0]}</strong><p>${copy[1]}</p></div>
      </div>`;
  }

  function effectiveFlashcards() {
    if (flashcards.length) return flashcards;
    return lessons.flatMap((lesson) => safeArray(lesson.memory).map((note) => ({ topic: lesson.navTitle || lesson.title, front: note.title, back: note.body })));
  }

  function renderMemoryDeck() {
    const cards = effectiveFlashcards();
    if (!runtime.memoryOrder || runtime.memoryOrder.length !== cards.length) runtime.memoryOrder = cards.map((_card, index) => index);
    const topics = uniqueValues(cards.map((card) => card.topic));
    const visibleIndices = runtime.memoryOrder.filter((index) => runtime.memoryTopic === "All" || cards[index].topic === runtime.memoryTopic);
    main.innerHTML = `
      <header class="page-intro"><span class="eyebrow">Active recall · tap to flip</span><h1>Memory deck</h1><p>Read the front, say the answer out loud, then flip. If you only recognise the back, you do not know it yet.</p></header>
      <div class="section-heading"><div><h2>${visibleIndices.length} cards</h2><p>Short rules and exam shortcuts from the tutorials.</p></div><button class="secondary-button" data-action="shuffle-cards">Shuffle cards</button></div>
      <div class="filter-row" aria-label="Filter flashcards by topic">${["All", ...topics].map((topic) => filterButton(topic, runtime.memoryTopic, "memory-topic")).join("")}</div>
      <section class="memory-grid" aria-label="Flashcards">
        ${visibleIndices.length ? visibleIndices.map((index) => renderFlashcard(cards[index], index)).join("") : renderEmptyData("No flashcards match this topic.")}
      </section>`;
  }

  function renderFlashcard(card, index) {
    return `
      <button class="flashcard" data-flashcard="${index}" aria-pressed="false" aria-label="Flip flashcard: ${escapeHtml(card.front)}">
        <span class="flashcard-inner">
          <span class="flashcard-face front"><small>${escapeHtml(card.topic || "Recall")}</small><strong>${escapeHtml(card.front)}</strong><span>Tap to reveal →</span></span>
          <span class="flashcard-face back"><small>Answer</small><strong>${escapeHtml(card.back)}</strong><span>Tap to hide ↩</span></span>
        </span>
      </button>`;
  }

  function shuffleMemoryDeck() {
    const cards = effectiveFlashcards();
    runtime.memoryOrder = cards.map((_card, index) => index);
    for (let index = runtime.memoryOrder.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [runtime.memoryOrder[index], runtime.memoryOrder[randomIndex]] = [runtime.memoryOrder[randomIndex], runtime.memoryOrder[index]];
    }
    renderMemoryDeck();
    showToast("Memory cards shuffled.");
  }

  function renderResources() {
    const materials = safeArray(data.sourceMaterials);
    const resources = safeArray(data.learningResources);
    const corrections = safeArray(data.sourceCorrections);
    const roadmap = safeArray(data.roadmap);
    const groups = uniqueValues(resources.map((resource) => resource.group || "More learning"));

    main.innerHTML = `
      <header class="page-intro"><span class="eyebrow">Checked sources · useful next steps</span><h1>Videos & sources</h1><p>Your original files are recorded here so you can see what was audited; their raw scans are not republished. External learning links were chosen to match this notebook, from friendly revision to deeper computer-science mathematics.</p></header>
      <div class="resource-groups">
        <section class="resource-group"><h2>Your uploaded material</h2><p>These files were read to build the cleaned lessons and answers. Return to your private source folder if you want to compare the originals.</p><div class="source-list">
          ${materials.length ? materials.map((source) => renderSourceItem(source, "FILE")).join("") : '<p>No source files were listed.</p>'}
        </div></section>

        ${groups.map((group) => `
          <section class="resource-group"><h2>${escapeHtml(group)}</h2><p>${resourceGroupDescription(group)}</p><div class="source-list">
            ${resources.filter((resource) => (resource.group || "More learning") === group).map((resource) => renderSourceItem(resource, /^https?:\/\/.*youtube/i.test(resource.url || "") || /video/i.test(resource.title || "") ? "▶" : "WEB")).join("")}
          </div></section>`).join("")}

        ${corrections.length ? `<section class="resource-group"><h2>Source-check notes</h2><p>Some uploaded sheets contain slips. These are corrected in the tutorials and worked answers.</p><div class="memory-row">${corrections.map((correction, index) => `<aside class="sticky${index % 3 === 2 ? " blue" : ""}"><span class="tape" aria-hidden="true"></span><strong>Correction ${index + 1}</strong><p>${escapeHtml(correction)}</p></aside>`).join("")}</div></section>` : ""}

        ${roadmap.length ? `<section class="resource-group"><h2>What comes next</h2><p>This is your first-year roadmap—not extra work for today's quiz. Learn each item when the lecturer reaches it.</p><div class="definition-grid">${roadmap.map((item) => `<div class="definition-card"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.reason)}</span></div>`).join("")}</div></section>` : ""}
      </div>`;
  }

  function resourceGroupDescription(group) {
    const descriptions = {
      "Start here": "Best choices when you want a calm second explanation of the current material.",
      "Read & practise": "Free reading and extra questions to deepen understanding.",
      "Go deeper": "See how discrete mathematics connects to computer science.",
      Tools: "Use these to verify your own work, not to replace it.",
      "Topic video": "Direct explanations for specific tutorials in this notebook.",
    };
    return escapeHtml(descriptions[group] || "Extra material selected for this course.");
  }

  function renderSourceItem(source, icon) {
    if (!source || !source.url) return "";
    if (!/^https?:\/\//i.test(source.url)) {
      return `
        <div class="source-item source-item-static">
          <span class="file-icon" aria-hidden="true">${escapeHtml(icon)}</span><span><strong>${escapeHtml(source.title || "Source file")}</strong><small>${escapeHtml(source.meta || source.description || source.author || "Reviewed source")} · audited, not republished</small></span><span class="arrow" aria-hidden="true">✓</span>
        </div>`;
    }
    return `
      <a class="source-item" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">
        <span class="file-icon" aria-hidden="true">${escapeHtml(icon)}</span><span><strong>${escapeHtml(source.title || "Resource")}</strong><small>${escapeHtml(source.meta || source.description || source.author || "Open resource")}${source.author && source.description ? ` · ${escapeHtml(source.author)}` : ""}</small></span><span class="arrow" aria-hidden="true">↗</span>
      </a>`;
  }

  function renderNotFound(message) {
    main.innerHTML = `
      <section class="page-intro"><span class="eyebrow">Nothing to memorise here</span><h1>That page wandered off.</h1><p>${escapeHtml(message || "The link does not point to a page in this notebook.")}</p><div class="button-row"><button class="primary-button" data-route="home">Return to study desk</button></div></section>`;
  }

  function renderEmptyData(message) {
    return `<div class="practice-empty"><strong>${escapeHtml(message)}</strong></div>`;
  }

  function toggleComplete(lessonId) {
    if (isComplete(lessonId)) {
      setComplete(lessonId, false);
      updateCompleteButton(lessonId);
      showToast("Tutorial moved back to your study list.");
      return;
    }
    const result = studyState.quizzes[lessonId];
    if (result && (result.passed || Number(result.bestPercent) >= masteryTarget)) {
      setComplete(lessonId, true);
      updateCompleteButton(lessonId);
      showToast("Tutorial marked as mastered.");
      return;
    }
    const quiz = document.getElementById(`quiz-${lessonId}`);
    if (quiz) quiz.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast(`Score at least ${masteryTarget}% on the quiz to complete this tutorial.`);
  }

  function applyFocusState() {
    document.body.classList.toggle("focus-mode", Boolean(studyState.focus));
    if (focusButton) {
      focusButton.setAttribute("aria-pressed", String(Boolean(studyState.focus)));
      focusButton.title = studyState.focus ? "Exit focus mode" : "Focus mode";
    }
  }

  function toggleFocus() {
    studyState.focus = !studyState.focus;
    saveStudyState();
    applyFocusState();
    closeSidebar();
    showToast(studyState.focus ? "Focus mode on." : "Focus mode off.");
  }

  function openSidebar() {
    if (!sidebar) return;
    sidebar.classList.add("open");
    if (sidebarScrim) sidebarScrim.classList.add("show");
    if (menuButton) menuButton.setAttribute("aria-expanded", "true");
    if (sidebarClose) sidebarClose.focus();
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove("open");
    if (sidebarScrim) sidebarScrim.classList.remove("show");
    if (menuButton) menuButton.setAttribute("aria-expanded", "false");
  }

  function showToast(message) {
    if (!toastElement) return;
    toastElement.textContent = message;
    toastElement.classList.add("show");
    window.clearTimeout(runtime.toastTimer);
    runtime.toastTimer = window.setTimeout(() => toastElement.classList.remove("show"), 3000);
  }

  function buildSearchIndex() {
    const entries = [];
    lessons.forEach((lesson) => {
      entries.push({ title: lesson.title, context: `Tutorial ${lesson.number} · ${lesson.summary || ""}`, route: `lesson/${lesson.id}`, text: `${lesson.title} ${lesson.navTitle || ""} ${lesson.summary || ""} ${lesson.keywords || ""}` });
      safeArray(lesson.sections).forEach((section) => entries.push({ title: section.title, context: lesson.title, route: `lesson/${lesson.id}`, anchor: section.id, text: `${section.title} ${stripHtml(section.html)}` }));
      safeArray(lesson.examples).forEach((example) => entries.push({ title: example.title || "Worked example", context: lesson.title, route: `lesson/${lesson.id}`, anchor: "worked-examples", text: `${example.title || ""} ${example.question || ""} ${safeArray(example.steps).join(" ")} ${example.answer || ""}` }));
    });
    examBank.filter((question) => practiceCollectionIds.has(question.collection)).forEach((question, index) => {
      const collection = practiceCollections.find((item) => item.id === question.collection);
      entries.push({ title: question.question || "Exam question", context: `${collection ? collection.label : "Question bank"} · ${question.topic || "Mixed"} · ${question.source || "Exam practice"}`, route: "practice", anchor: question.id || `exam-question-${index + 1}`, collection: question.collection, text: `${question.question || ""} ${question.hint || ""} ${stripHtml(question.solution || "")} ${question.topic || ""}` });
    });
    effectiveFlashcards().forEach((card) => entries.push({ title: card.front, context: `${card.topic || "Memory"} flashcard`, route: "memory", text: `${card.front} ${card.back} ${card.topic || ""}` }));
    safeArray(data.learningResources).forEach((resource) => entries.push({ title: resource.title, context: `${resource.group || "Resource"} · ${resource.author || ""}`, route: "resources", text: `${resource.title || ""} ${resource.description || ""} ${resource.author || ""}` }));
    return entries;
  }

  function openSearch() {
    if (!searchDialog || document.body.classList.contains("auth-locked")) return;
    if (typeof searchDialog.showModal === "function") {
      if (!searchDialog.open) searchDialog.showModal();
    } else {
      searchDialog.setAttribute("open", "");
    }
    if (searchInput) {
      searchInput.value = "";
      searchInput.focus();
    }
    updateSearchResults("");
  }

  function closeSearch() {
    if (!searchDialog) return;
    if (typeof searchDialog.close === "function" && searchDialog.open) searchDialog.close();
    else searchDialog.removeAttribute("open");
  }

  function updateSearchResults(query) {
    if (!searchResults) return;
    const entries = buildSearchIndex();
    const terms = String(query || "").toLowerCase().trim().split(/\s+/).filter(Boolean);
    const matches = entries.filter((entry) => terms.every((term) => `${entry.title} ${entry.text}`.toLowerCase().includes(term))).slice(0, terms.length ? 12 : 6);
    searchResults.innerHTML = matches.length
      ? matches.map((entry, index) => `<button type="button" class="search-result" data-search-result="${index}" data-search-route="${escapeHtml(entry.route)}" data-search-anchor="${escapeHtml(entry.anchor || "")}" data-search-collection="${escapeHtml(entry.collection || "")}"><strong>${escapeHtml(entry.title)}</strong><small>${escapeHtml(entry.context)}</small></button>`).join("")
      : '<div class="empty-search">No match yet. Try a shorter phrase such as “power set,” “constant term,” or “contrapositive.”</div>';
  }

  document.addEventListener("click", (event) => {
    const sectionLink = event.target.closest("[data-section-link]");
    if (sectionLink) {
      event.preventDefault();
      const section = document.getElementById(sectionLink.dataset.sectionLink);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const routeControl = event.target.closest("[data-route]");
    if (routeControl) {
      event.preventDefault();
      goToRoute(routeControl.dataset.route);
      return;
    }

    const searchResult = event.target.closest("[data-search-route]");
    if (searchResult) {
      if (searchResult.dataset.searchRoute === "practice") {
        if (practiceCollectionIds.has(searchResult.dataset.searchCollection)) {
          runtime.practiceCollection = searchResult.dataset.searchCollection;
        }
        runtime.practiceTopic = "All";
        runtime.practiceDifficulty = "All";
      }
      if (searchResult.dataset.searchRoute === "memory") runtime.memoryTopic = "All";
      runtime.pendingScrollId = searchResult.dataset.searchAnchor || "";
      closeSearch();
      goToRoute(searchResult.dataset.searchRoute);
      return;
    }

    const topicFilter = event.target.closest("[data-practice-topic]");
    if (topicFilter) {
      runtime.practiceTopic = topicFilter.dataset.practiceTopic;
      renderPractice();
      return;
    }
    const collectionFilter = event.target.closest("[data-practice-collection]");
    if (collectionFilter && practiceCollectionIds.has(collectionFilter.dataset.practiceCollection)) {
      runtime.practiceCollection = collectionFilter.dataset.practiceCollection;
      runtime.practiceTopic = "All";
      runtime.practiceDifficulty = "All";
      renderPractice();
      const selectedCollection = main.querySelector(`[data-practice-collection="${runtime.practiceCollection}"]`);
      if (selectedCollection) selectedCollection.focus();
      return;
    }
    const difficultyFilter = event.target.closest("[data-practice-difficulty]");
    if (difficultyFilter) {
      runtime.practiceDifficulty = difficultyFilter.dataset.practiceDifficulty;
      renderPractice();
      return;
    }
    const memoryFilter = event.target.closest("[data-memory-topic]");
    if (memoryFilter) {
      runtime.memoryTopic = memoryFilter.dataset.memoryTopic;
      renderMemoryDeck();
      return;
    }
    const vennButton = event.target.closest("[data-venn-operation]");
    if (vennButton) {
      runtime.vennOperation = vennButton.dataset.vennOperation;
      updateVennLab();
      return;
    }
    const flashcard = event.target.closest("[data-flashcard]");
    if (flashcard) {
      const flipped = flashcard.classList.toggle("flipped");
      flashcard.setAttribute("aria-pressed", String(flipped));
      return;
    }
    const action = event.target.closest("[data-action]");
    if (action) {
      const actionName = action.dataset.action;
      if (actionName === "submit-quiz") submitQuiz(action.dataset.lessonId);
      else if (actionName === "toggle-complete") toggleComplete(action.dataset.lessonId);
      else if (actionName === "print") window.print();
      else if (actionName === "shuffle-cards") shuffleMemoryDeck();
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches('[data-lab-control="binomial"]')) updateBinomialLab();
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches('[data-lab-control="truth"]')) updateTruthLab();
  });

  if (searchButton) searchButton.addEventListener("click", openSearch);
  if (searchInput) searchInput.addEventListener("input", () => updateSearchResults(searchInput.value));
  if (searchDialog) {
    const searchCloseButton = searchDialog.querySelector(".key-close");
    if (searchCloseButton) searchCloseButton.addEventListener("click", (event) => {
      event.preventDefault();
      closeSearch();
    });
    searchDialog.addEventListener("submit", (event) => event.preventDefault());
    searchDialog.addEventListener("click", (event) => {
      if (event.target === searchDialog) closeSearch();
    });
  }
  if (focusButton) focusButton.addEventListener("click", toggleFocus);
  if (tiredButton) tiredButton.addEventListener("click", toggleTired);
  if (menuButton) menuButton.addEventListener("click", () => {
    if (studyState.focus && window.innerWidth > 860) toggleFocus();
    else openSidebar();
  });
  if (sidebarClose) sidebarClose.addEventListener("click", closeSidebar);
  if (sidebarScrim) sidebarScrim.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const typing = target && (target.matches("input, textarea, select") || target.isContentEditable);
    if ((event.key === "/" && !typing && !event.ctrlKey && !event.metaKey && !event.altKey) || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k")) {
      event.preventDefault();
      openSearch();
    }
    if (event.key === "Escape" && sidebar && sidebar.classList.contains("open")) closeSidebar();
  });

  window.addEventListener("hashchange", () => renderRoute(true));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeSidebar();
  });

  if (!window.location.hash) window.history.replaceState(null, "", "#home");
  renderRoute(false);
})();

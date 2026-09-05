(() => {
  "use strict";

  if (sessionStorage.getItem("tion-auth") !== "yes") {
    window.location.replace("../");
    return;
  }

  const DATA = window.PA_DATA;
  const STORAGE_KEY = "bianca-pa-progress-v1";
  const TIRED_KEY = "bianca-pa-tired-v1";

  const main = document.querySelector("#main-content");
  const sidebar = document.querySelector("#course-sidebar");
  const menuButton = document.querySelector("#menu-button");
  const scrim = document.querySelector("#drawer-scrim");
  const searchInput = document.querySelector("#global-search");
  const tiredToggle = document.querySelector("#tired-toggle");
  const tiredBanner = document.querySelector("#tired-banner");
  const toastElement = document.querySelector("#toast");

  if (!DATA || !Array.isArray(DATA.lessons)) {
    main.innerHTML = `<section class="empty-state"><strong>The anthropology notebook has not loaded.</strong><p>Refresh the page. If this stays here, check that <code>pa-data.js</code> is beside this file.</p><a class="button" href="../">Back to all courses</a></section>`;
    return;
  }

  const lessons = DATA.lessons || [];
  const questions = DATA.questions || [];
  const memoryDeck = DATA.memoryDeck || [];
  const state = {
    route: "dashboard",
    lessonId: null,
    search: "",
    practiceTopic: "all",
    practiceType: "all",
    memoryTopic: "all",
    memoryIndex: 0,
    memoryFlipped: false,
    memoryOrder: memoryDeck.map((_, index) => index),
    tired: localStorage.getItem(TIRED_KEY) === "yes",
    progress: loadProgress(),
    toastTimer: null
  };

  function loadProgress() {
    const base = {
      completedLessons: [],
      recall: {},
      quiz: {},
      memory: {},
      ratings: {},
      exam: {}
    };
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        ...base,
        ...saved,
        completedLessons: Array.isArray(saved.completedLessons) ? saved.completedLessons : [],
        recall: saved.recall || {},
        quiz: saved.quiz || {},
        memory: saved.memory || {},
        ratings: saved.ratings || {},
        exam: saved.exam || {}
      };
    } catch {
      return base;
    }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    updateProgressUI();
  }

  function esc(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function stripHtml(value = "") {
    const holder = document.createElement("div");
    holder.innerHTML = String(value);
    return (holder.textContent || "").replace(/\s+/g, " ").trim();
  }

  function listify(value) {
    if (Array.isArray(value)) return value;
    if (value === undefined || value === null || value === "") return [];
    return [value];
  }

  function humanCourse(field, fallback) {
    if (typeof DATA.course === "string") return field === "title" ? DATA.course : fallback;
    return DATA.course?.[field] || fallback;
  }

  function lessonById(id) {
    return lessons.find(lesson => String(lesson.id) === String(id));
  }

  function completed(id) {
    return state.progress.completedLessons.includes(String(id));
  }

  function lessonNumber(lesson, index = 0) {
    return lesson.number ?? index + 1;
  }

  function toast(message) {
    window.clearTimeout(state.toastTimer);
    toastElement.textContent = message;
    toastElement.classList.add("show");
    state.toastTimer = window.setTimeout(() => toastElement.classList.remove("show"), 2600);
  }

  function setTiredMode(on) {
    state.tired = Boolean(on);
    localStorage.setItem(TIRED_KEY, state.tired ? "yes" : "no");
    document.body.classList.toggle("tired-mode", state.tired);
    tiredToggle.setAttribute("aria-pressed", String(state.tired));
    tiredBanner.hidden = !state.tired;
    tiredToggle.title = state.tired ? "Turn tired mode off" : "Keep only the main ideas";
    if (state.tired && window.StudyTools) {
      window.StudyTools.showMessage("Low battery? I kept the must-read ideas and memory hooks. We can do depth when your brain is fresher.");
    }
  }

  function closeDrawer() {
    document.body.classList.remove("drawer-open");
    menuButton.setAttribute("aria-expanded", "false");
    scrim.hidden = true;
  }

  function openDrawer() {
    document.body.classList.add("drawer-open");
    menuButton.setAttribute("aria-expanded", "true");
    scrim.hidden = false;
    sidebar.querySelector("a")?.focus();
  }

  function updateProgressUI() {
    const value = lessons.length ? Math.round((state.progress.completedLessons.length / lessons.length) * 100) : 0;
    document.querySelector("#side-progress-value").textContent = `${value}%`;
    document.querySelector("#side-progress-bar").style.width = `${value}%`;
    document.querySelector("#side-progress-note").textContent = value === 100
      ? "Full course pass complete. Now retrieve, don't just reread."
      : value >= 50
        ? "Past halfway. Keep linking each topic to the human person."
        : "Start with one topic. That counts.";
    document.querySelectorAll(".lesson-nav a").forEach(link => {
      link.classList.toggle("complete", completed(link.dataset.lessonId));
    });
  }

  function renderNavigation() {
    document.querySelector("#lesson-count").textContent = `${lessons.length} topics`;
    document.querySelector("#lesson-nav").innerHTML = lessons.map((lesson, index) => `
      <a href="#lesson/${encodeURIComponent(lesson.id)}" data-lesson-id="${esc(lesson.id)}">
        <span class="lesson-number">${esc(lessonNumber(lesson, index))}</span>
        <span>${esc(lesson.navTitle || lesson.title)}</span>
        <span class="lesson-nav-check" aria-label="Completed">✓</span>
      </a>`).join("");
    updateProgressUI();
  }

  function parseRoute() {
    const raw = window.location.hash.replace(/^#/, "") || "dashboard";
    const [pathPart, queryPart = ""] = raw.split("?");
    const [route, detail] = pathPart.split("/");
    state.route = route || "dashboard";
    state.lessonId = route === "lesson" ? decodeURIComponent(detail || "") : null;
    if (route === "search") {
      const params = new URLSearchParams(queryPart);
      state.search = params.get("q") || "";
      searchInput.value = state.search;
    }
  }

  function updateActiveNavigation() {
    document.querySelectorAll("[data-route]").forEach(link => link.classList.toggle("active", link.dataset.route === state.route));
    document.querySelectorAll(".lesson-nav a").forEach(link => link.classList.toggle("active", state.route === "lesson" && String(link.dataset.lessonId) === String(state.lessonId)));
  }

  function pageIntro(kicker, title, lead) {
    return `<header><p class="eyebrow">${esc(kicker)}</p><h1 class="page-title">${esc(title)}</h1><p class="page-lead">${esc(lead)}</p></header>`;
  }

  function renderDashboard() {
    const doneCount = state.progress.completedLessons.length;
    const quizCount = Object.keys(state.progress.quiz).length;
    const knownCount = Object.values(state.progress.memory).filter(value => value === "know").length;
    const nextLesson = lessons.find(lesson => !completed(lesson.id)) || lessons[0];
    const todayCard = memoryDeck.length ? memoryDeck[new Date().getDate() % memoryDeck.length] : null;

    main.innerHTML = `
      <section class="hero">
        <p class="eyebrow">${esc(humanCourse("code", "HED 1201"))} · your human-person toolkit</p>
        <h1 class="page-title">Who am I — and what does it mean to be human?</h1>
        <p class="page-lead">Hi Hezron. This room turns the course files into plain explanations, contrasts, memory hooks and exam-ready answers. Read actively: connect every idea back to a real person — including you.</p>
        <div class="hero-actions">
          ${nextLesson ? `<a class="button primary" href="#lesson/${encodeURIComponent(nextLesson.id)}">${doneCount ? "Continue" : "Start"}: ${esc(nextLesson.navTitle || nextLesson.title)} →</a>` : ""}
          <a class="button ghost" href="#how-to-learn">Show me how to study this</a>
        </div>
      </section>

      <section class="dashboard-stats" aria-label="Your study progress">
        <div class="stat-card"><strong>${doneCount}/${lessons.length}</strong><span>topics completed</span></div>
        <div class="stat-card"><strong>${quizCount}</strong><span>checkpoint answers tried</span></div>
        <div class="stat-card"><strong>${knownCount}/${memoryDeck.length}</strong><span>memory cards confident</span></div>
        <div class="stat-card"><strong>${questions.length}</strong><span>exam questions waiting</span></div>
      </section>

      <div class="quick-grid">
        <section class="paper-panel">
          <p class="eyebrow">Your route through PA</p>
          <h2>Being → life → human powers → choices → relationships → destiny</h2>
          <p>The topics are not separate islands. Start by asking what a human being <em>is</em>; then study what living humans can <em>do</em>; finally ask what those powers are <em>for</em>. That one line holds the whole course together.</p>
        </section>
        <aside class="sticky-note">
          <h3>Bianca's margin note</h3>
          <p>${todayCard ? `Without looking: <strong>${esc(todayCard.front)}</strong> Tap Memory cards after you answer.` : "Do not only highlight. Close the notes and say the idea in your own words."}</p>
        </aside>
      </div>

      <div class="section-heading"><div><h2>Your course path</h2><p>Follow the lecturer's order. Each card tells you the main human question it answers.</p></div><a href="#before-exam">See the one-page recap →</a></div>
      <section class="lesson-grid" aria-label="Philosophical Anthropology topics">
        ${lessons.map((lesson, index) => lessonCard(lesson, index)).join("")}
      </section>

      <div class="section-heading"><div><h2>Train, don't just read</h2><p>Retrieval is what makes the idea available in an exam room.</p></div></div>
      <div class="quick-grid">
        <section class="paper-panel"><h2>Question bank</h2><p>Practise definitions, distinctions, cases and essays. Reveal a model plan only after making your own attempt.</p><p><a class="button small" href="#practice">Try a question →</a></p></section>
        <section class="paper-panel"><h2>Memory deck</h2><p>Short prompts for terms, powers, contrasts and mnemonics. Say the answer aloud, then flip.</p><p><a class="button small" href="#memory">Recall now →</a></p></section>
      </div>`;
  }

  function lessonCard(lesson, index) {
    const isDone = completed(lesson.id);
    const mustCount = listify(lesson.sections).filter(section => (section.priority || "must") === "must").length;
    return `<a class="lesson-card ${isDone ? "complete" : ""}" href="#lesson/${encodeURIComponent(lesson.id)}">
      <span class="lesson-card-number">${esc(lessonNumber(lesson, index))}</span>
      <span>
        ${isDone ? `<span class="complete-stamp">✓ passed</span>` : ""}
        <h3>${esc(lesson.title)}</h3>
        <p>${esc(lesson.summary || lesson.question || "Build the idea, connect it, then retrieve it.")}</p>
        <span class="card-meta"><span>${esc(lesson.minutes || 15)} min</span><span>${mustCount} must-read blocks</span><span>${listify(lesson.quiz).length} checks</span></span>
      </span>
    </a>`;
  }

  function richBlock(value) {
    if (value === undefined || value === null || value === "") return "";
    if (typeof value === "string") return value;
    if (Array.isArray(value)) return `<ul>${value.map(item => `<li>${esc(item)}</li>`).join("")}</ul>`;
    if (typeof value === "object") {
      return Object.entries(value).map(([key, item]) => `<p><strong>${esc(key)}:</strong> ${Array.isArray(item) ? esc(item.join(" ")) : esc(item)}</p>`).join("");
    }
    return esc(value);
  }

  function renderLesson() {
    const lesson = lessonById(state.lessonId);
    if (!lesson) {
      main.innerHTML = `<section class="empty-state"><strong>That topic is not in this notebook.</strong><p>It may have moved while the notes were being organised.</p><a class="button" href="#dashboard">Course overview</a></section>`;
      return;
    }
    const index = lessons.indexOf(lesson);
    const previous = lessons[index - 1];
    const next = lessons[index + 1];
    const sections = listify(lesson.sections);
    const catches = listify(lesson.catch);
    const mnemonic = lesson.mnemonic || {};
    const recall = listify(lesson.recall);
    const cases = listify(lesson.cases);
    const quiz = listify(lesson.quiz);

    main.innerHTML = `
      <nav class="breadcrumb" aria-label="Breadcrumb"><a href="#dashboard">PA overview</a><span>/</span><span>Topic ${esc(lessonNumber(lesson,index))}</span></nav>
      <header class="lesson-hero">
        <span class="lesson-big-number">${esc(lessonNumber(lesson,index))}</span>
        <div>
          <p class="eyebrow">${esc(lesson.minutes || 15)} minutes · topic ${esc(lessonNumber(lesson,index))}</p>
          <h1 class="page-title">${esc(lesson.title)}</h1>
          <p class="lesson-summary">${esc(lesson.summary || "")}</p>
        </div>
      </header>
      ${lesson.question ? `<blockquote class="lesson-question"><strong>The big question</strong>${esc(lesson.question)}</blockquote>` : ""}

      <div class="lesson-layout">
        <aside class="lesson-contents" aria-label="On this page">
          <strong>On this page</strong>
          ${sections.map((section, sectionIndex) => `<a href="#section-${sectionIndex + 1}" data-priority="${esc(section.priority || "must")}">${esc(section.title)}</a>`).join("")}
          ${cases.length ? `<a href="#lesson-cases">Cases</a>` : ""}
          ${recall.length ? `<a href="#lesson-recall">Recall</a>` : ""}
        </aside>
        <article class="lesson-article">
          ${catches.length ? `<section class="catch-grid" aria-label="Main points">${catches.map((item, catchIndex) => `<article class="catch-card"><strong>Catch ${catchIndex + 1}</strong><p>${esc(item)}</p></article>`).join("")}</section>` : ""}
          ${mnemonic.letters || mnemonic.line || mnemonic.meaning ? `<section class="mnemonic-card"><div class="mnemonic-letters">${esc(mnemonic.letters || "REMEMBER")}</div><div><small>Memory hook</small><h3>${esc(mnemonic.line || mnemonic.letters || "")}</h3><p>${esc(mnemonic.meaning || "Say it, cover it, then rebuild the full meaning.")}</p></div></section>` : ""}

          ${sections.map((section, sectionIndex) => renderNoteSection(section, sectionIndex)).join("")}

          ${cases.length ? `<section class="case-study-section" id="lesson-cases"><div class="section-heading"><div><h2>Apply the idea</h2><p>Try each case before opening the guided answer.</p></div></div><div class="case-list">${cases.map(renderCase).join("")}</div></section>` : ""}

          ${recall.length ? `<section class="recall-box" id="lesson-recall"><h2>Can you say this without looking?</h2><p>Tick only after answering aloud or on blank paper. Recognition is not recall.</p><div class="recall-list">${recall.map((item, recallIndex) => {
            const key = `${lesson.id}:${recallIndex}`;
            return `<label class="check-row"><input type="checkbox" data-recall-key="${esc(key)}" ${state.progress.recall[key] ? "checked" : ""}><span>${esc(item)}</span></label>`;
          }).join("")}</div></section>` : ""}

          ${quiz.length ? renderQuiz(lesson, quiz) : ""}

          <div class="lesson-footer-nav">
            ${previous ? `<a class="button ghost" href="#lesson/${encodeURIComponent(previous.id)}">← ${esc(previous.navTitle || previous.title)}</a>` : `<a class="button ghost" href="#dashboard">← Overview</a>`}
            <button class="button ${completed(lesson.id) ? "done" : "primary"}" type="button" data-action="mark-lesson" data-lesson-id="${esc(lesson.id)}">${completed(lesson.id) ? "✓ Topic complete" : "Mark topic complete"}</button>
            ${next ? `<a class="button ghost" href="#lesson/${encodeURIComponent(next.id)}">${esc(next.navTitle || next.title)} →</a>` : `<a class="button ghost" href="#before-exam">Exam recap →</a>`}
          </div>
        </article>
      </div>`;
  }

  function renderNoteSection(section, sectionIndex) {
    const priority = ["must", "useful", "deep"].includes(section.priority) ? section.priority : "must";
    const labels = { must: "Must read", useful: "Useful", deep: "Deep dive" };
    return `<section class="note-section priority-${priority}" id="section-${sectionIndex + 1}">
      <header class="note-section-head"><h2>${esc(section.title)}</h2><span class="priority-badge ${priority}">${labels[priority]}</span></header>
      <div class="prose">${richBlock(section.html)}</div>
      ${section.example ? `<div class="worked-example"><strong>Bring it home</strong><div>${richBlock(section.example)}</div></div>` : ""}
      ${section.examTip ? `<div class="exam-tip"><strong>In the exam room</strong><div>${richBlock(section.examTip)}</div></div>` : ""}
    </section>`;
  }

  function renderCase(item) {
    return `<details class="case-card"><summary><h3>${esc(item.title || "Think it through")}</h3><p class="case-prompt">${esc(item.prompt || "")}</p></summary><div class="case-answer"><strong>A strong reasoning path</strong><ol>${listify(item.answer).map(step => `<li>${esc(step)}</li>`).join("")}</ol></div></details>`;
  }

  function correctQuizIndex(question) {
    if (typeof question.answer === "number") return question.answer;
    const answer = String(question.answer ?? "").trim();
    if (/^[A-D]$/i.test(answer)) return answer.toUpperCase().charCodeAt(0) - 65;
    const exact = listify(question.options).findIndex(option => String(option) === answer);
    return exact >= 0 ? exact : Number(answer);
  }

  function renderQuiz(lesson, quiz) {
    return `<section class="quiz-box"><h2>Checkpoint</h2><p>Choose first; the explanation appears after. Wrong answers are information, not a verdict.</p>${quiz.map((question, quizIndex) => {
      const key = `${lesson.id}:${quizIndex}`;
      const chosen = state.progress.quiz[key];
      const correct = correctQuizIndex(question);
      return `<article class="quiz-item" data-quiz-key="${esc(key)}"><p>${quizIndex + 1}. ${esc(question.q)}</p><div class="quiz-options">${listify(question.options).map((option, optionIndex) => {
        let className = "";
        if (chosen !== undefined) {
          if (optionIndex === correct) className = "correct";
          else if (optionIndex === Number(chosen)) className = "wrong";
        }
        return `<button class="quiz-option ${className}" type="button" data-action="quiz-answer" data-quiz-key="${esc(key)}" data-option="${optionIndex}" data-correct="${correct}" ${chosen !== undefined ? "disabled" : ""}>${esc(option)}</button>`;
      }).join("")}</div>${chosen !== undefined ? `<p class="quiz-feedback">${Number(chosen) === correct ? "Correct — " : "Not quite — "}${esc(question.explain || "Return to the distinction in the note above.")}</p>` : ""}</article>`;
    }).join("")}</section>`;
  }

  function uniqueValues(items, key) {
    return [...new Set(items.map(item => item[key]).filter(Boolean))].sort((a,b) => String(a).localeCompare(String(b)));
  }

  function renderPractice() {
    const topics = uniqueValues(questions, "topic");
    const types = uniqueValues(questions, "type");
    const filtered = questions.filter(question => (state.practiceTopic === "all" || question.topic === state.practiceTopic) && (state.practiceType === "all" || question.type === state.practiceType));
    main.innerHTML = `
      ${pageIntro("Exam training", "Question bank", "Write or speak your answer before revealing the model. In philosophy, marks come from a clear claim, an explained reason, a fitting example and a link back to the question.")}
      <div class="filter-row">
        <label>Topic<select id="practice-topic"><option value="all">All topics</option>${topics.map(topic => `<option ${state.practiceTopic === topic ? "selected" : ""}>${esc(topic)}</option>`).join("")}</select></label>
        <label>Question style<select id="practice-type"><option value="all">All styles</option>${types.map(type => `<option ${state.practiceType === type ? "selected" : ""}>${esc(type)}</option>`).join("")}</select></label>
        <span class="filter-count">${filtered.length} question${filtered.length === 1 ? "" : "s"}</span>
      </div>
      ${filtered.length ? `<section class="question-list">${filtered.map(renderPracticeQuestion).join("")}</section>` : `<section class="empty-state"><strong>No question matches both filters.</strong><p>Try a different topic or question style.</p></section>`}`;
  }

  function renderPracticeQuestion(question, index) {
    const id = String(question.id || `question-${questions.indexOf(question)}`);
    const rating = state.progress.ratings[id];
    return `<article class="question-card" data-question-id="${esc(id)}">
      <div class="question-meta"><span>${esc(question.topic || "Mixed")}</span><span>${esc(question.type || "Practice")}</span><span class="marks">${esc(question.marks || "—")} marks</span></div>
      <h2>${index + 1}. ${esc(question.prompt)}</h2>
      <div class="question-actions">
        <button class="button small" type="button" data-action="toggle-answer" data-question-id="${esc(id)}">Reveal model answer</button>
        <span class="rating-buttons" aria-label="Rate this question"><button class="${rating === "review" ? "active" : ""}" type="button" data-action="rate-question" data-question-id="${esc(id)}" data-rating="review">Needs review</button><button class="${rating === "got" ? "active" : ""}" type="button" data-action="rate-question" data-question-id="${esc(id)}" data-rating="got">Got it</button></span>
      </div>
      <div class="answer-panel" id="answer-${esc(id)}" hidden>
        ${listify(question.plan).length ? `<h3>Plan before prose</h3><ol>${listify(question.plan).map(step => `<li>${esc(step)}</li>`).join("")}</ol>` : ""}
        <h3>Model answer</h3>${listify(question.answer).length ? `<ol>${listify(question.answer).map(step => `<li>${esc(step)}</li>`).join("")}</ol>` : `<p>Use the course distinction, explain it in your own words, apply an example, then answer the exact wording.</p>`}
        ${question.source ? `<p class="source-line">Question/source position: ${esc(typeof question.source === "string" ? question.source : question.source.title || JSON.stringify(question.source))}</p>` : ""}
      </div>
    </article>`;
  }

  function filteredMemory() {
    return state.memoryOrder.map(index => ({ card: memoryDeck[index], originalIndex: index })).filter(item => item.card && (state.memoryTopic === "all" || item.card.topic === state.memoryTopic));
  }

  function renderMemory() {
    const topics = uniqueValues(memoryDeck, "topic");
    const cards = filteredMemory();
    if (state.memoryIndex >= cards.length) state.memoryIndex = 0;
    const item = cards[state.memoryIndex];
    main.innerHTML = `
      ${pageIntro("Active recall", "Memory cards", "Say the answer before flipping. If it feels slightly difficult, that is the memory getting stronger — not a sign to give up.")}
      <div class="memory-toolbar">
        <select id="memory-topic" aria-label="Filter memory cards by topic"><option value="all">All topics</option>${topics.map(topic => `<option ${state.memoryTopic === topic ? "selected" : ""}>${esc(topic)}</option>`).join("")}</select>
        <button class="button small" type="button" data-action="shuffle-memory">↻ Shuffle</button>
        <span class="memory-count">${cards.length ? `${state.memoryIndex + 1} of ${cards.length}` : "0 cards"}</span>
      </div>
      ${item ? renderFlashcard(item, cards.length) : `<section class="empty-state"><strong>No cards in this filter.</strong><p>Choose another topic.</p></section>`}`;
  }

  function renderFlashcard(item) {
    const status = state.progress.memory[item.originalIndex];
    return `<section class="flashcard-stage">
      <button class="flashcard ${state.memoryFlipped ? "flipped" : ""}" type="button" data-action="flip-card" aria-label="Flip memory card">
        <span class="flash-face flash-front"><span class="flash-topic">${esc(item.card.topic || "Recall")}</span><strong>${esc(item.card.front)}</strong><span class="flash-hint">Tap to reveal</span></span>
        <span class="flash-face flash-back"><span class="flash-topic">Answer</span><strong>${esc(item.card.back)}</strong><span class="flash-hint">Tap to see the prompt</span></span>
      </button>
    </section>
    <div class="memory-actions">
      <button class="button ghost" type="button" data-action="memory-prev">← Previous</button>
      <button class="button small ${status === "review" ? "orange" : ""}" type="button" data-action="memory-rate" data-card-index="${item.originalIndex}" data-rating="review">Review again</button>
      <button class="button small ${status === "know" ? "done" : ""}" type="button" data-action="memory-rate" data-card-index="${item.originalIndex}" data-rating="know">I know this</button>
      <button class="button ghost" type="button" data-action="memory-next">Next →</button>
    </div>`;
  }

  function renderHowToLearn() {
    main.innerHTML = `
      ${pageIntro("Study the person, not just the page", "How to learn Philosophical Anthropology", "PA becomes manageable when you organise contrasts, explain ideas in ordinary words and keep retrieving them. Here is a repeatable method — no vague ‘just read more’ advice.")}
      <section class="method-grid">
        <article class="method-card"><span class="method-number">1</span><h2>Question first</h2><p>Before reading a topic, turn its title into a human question: <em>What makes an act free?</em> or <em>How do body and soul form one person?</em> Your brain now has a gap it wants to close.</p></article>
        <article class="method-card"><span class="method-number">2</span><h2>Plain-language pass</h2><p>After a short section, close it and explain it as if speaking to a clever 14-year-old. Keep the technical term, but unpack it. If you cannot, mark the exact sentence that broke the chain.</p></article>
        <article class="method-card"><span class="method-number">3</span><h2>Contrast table</h2><p>PA loves distinctions: act/potency, body/soul, sense/intellect, passion/will, freedom/license, temperament/character. Put each pair in two columns: meaning, power, object and one example.</p></article>
        <article class="method-card"><span class="method-number">4</span><h2>Give it a human scene</h2><p>Attach an idea to a real case. Memory is not only a storehouse; freedom is not only a word. Picture recognising a friend, choosing to apologise, or forming a habit through repeated acts.</p></article>
        <article class="method-card"><span class="method-number">5</span><h2>Blank-page retrieval</h2><p>Hide the notes. Write the topic title, its key distinction, mnemonic, example and likely exam question. Then check in another colour. The missing parts become tomorrow's first task.</p></article>
        <article class="method-card"><span class="method-number">6</span><h2>A practical 1–3–7 rhythm</h2><p>As a simple spacing heuristic, retrieve again after about 1 day, 3 days and 7 days; adjust the gaps to your exam date and the topic’s difficulty. Each review can be short: three memory cards, one comparison and one answer plan.</p></article>

        <article class="method-card wide-card">
          <h2>Use C–E–E–L for exam paragraphs</h2>
          <p>This keeps a philosophy answer focused without making it robotic.</p>
          <div class="answer-skeleton"><div><strong>C</strong><span><b>Claim:</b> answer the question directly.</span></div><div><strong>E</strong><span><b>Explain:</b> define and give the reason.</span></div><div><strong>E</strong><span><b>Example:</b> show the idea in a human case.</span></div><div><strong>L</strong><span><b>Link:</b> return to the exact question.</span></div></div>
        </article>

        <article class="method-card"><h2>For a 2–4 mark question</h2><ul><li>Give the term or distinction immediately.</li><li>Define it in one clean sentence.</li><li>Add one line of explanation or one example.</li><li>Do not write an essay when the marks ask for a definition.</li></ul></article>
        <article class="method-card"><h2>For a 10+ mark essay</h2><ul><li>Underline the command word and every part of the question.</li><li>Write a 60-second plan: thesis + 3 reasons + examples.</li><li>Use connected paragraphs, not a list of memorised facts.</li><li>End by answering the question, not merely stopping.</li></ul></article>
        <article class="method-card"><h2>When a mnemonic helps</h2><p>Use it to retrieve a structure, then expand every letter into meaning. A mnemonic is the coat hanger; it is not the whole coat. If you can recite letters but cannot explain them, retrieval is incomplete.</p></article>
        <article class="method-card"><h2>When you are tired</h2><p>Turn on Tired mode. Do one must-read block, say the yellow catch cards aloud and attempt two memory cards. Stop at a clear checkpoint. A small honest session beats an hour of staring.</p></article>
      </section>`;
  }

  function checklistText(item) {
    if (typeof item === "string") return item;
    return item.text || item.label || item.item || item.title || JSON.stringify(item);
  }

  function renderBeforeExam() {
    const checklist = listify(DATA.examChecklist);
    main.innerHTML = `
      ${pageIntro("The final sweep", "Read this before the exam", "Do not try to relearn every page at the door. Retrieve the course spine, check the key distinctions and enter with a simple answering routine.")}
      <section class="exam-grid">
        <article class="exam-card wide-card"><h2>The whole course in one movement</h2><p><strong>Being</strong> asks what exists and how change is possible. <strong>Life</strong> names self-activity. The <strong>human person</strong> is one embodied subject with sensitive and rational powers. Through <strong>intellect</strong> we know truth; through <strong>will</strong> we seek a known good. <strong>Freedom</strong> makes responsible love and self-gift possible. Sexuality, work and society express personal relation. <strong>Destiny</strong> asks what this whole life is directed toward.</p></article>
        <article class="exam-card"><h2>Your 5-minute entry routine</h2><ol><li>Read every question and circle command words.</li><li>Start with a question you understand well.</li><li>Match answer size to marks and time.</li><li>Plan essays before prose.</li><li>Leave a final check for missing parts and unclear terms.</li></ol></article>
        <article class="exam-card"><h2>Do not lose easy marks</h2><ul><li>Define a technical term before using it heavily.</li><li>State both sides of a distinction.</li><li>Give a relevant example, then explain the link.</li><li>Keep “soul” in the course's philosophical sense, not as a ghost inside a machine.</li><li>Answer the question actually printed.</li></ul></article>

        <article class="exam-card wide-card"><h2>Topic-at-a-glance</h2><div class="glance-list">${lessons.map(lesson => `<div class="glance-row"><strong>${esc(lesson.navTitle || lesson.title)}</strong><p>${esc(listify(lesson.catch)[0] || lesson.summary || "")}${lesson.mnemonic?.letters ? ` · Memory hook: ${esc(lesson.mnemonic.letters)}` : ""}</p></div>`).join("")}</div></article>

        <article class="exam-card wide-card"><h2>Final self-check</h2><p>Tick only if you could explain the item without this page open.</p><div class="exam-checklist">${checklist.length ? checklist.map((item, index) => `<label class="exam-check"><input type="checkbox" data-exam-key="${index}" ${state.progress.exam[index] ? "checked" : ""}><span>${esc(checklistText(item))}</span></label>`).join("") : lessons.map((lesson,index) => `<label class="exam-check"><input type="checkbox" data-exam-key="lesson-${index}" ${state.progress.exam[`lesson-${index}`] ? "checked" : ""}><span>I can explain ${esc(lesson.navTitle || lesson.title)} using a distinction and an example.</span></label>`).join("")}</div></article>
      </section>`;
  }

  function sourceTitle(source, index) {
    return source.title || source.name || source.file || source.source || `Course source ${index + 1}`;
  }

  function renderSources() {
    const ledger = listify(DATA.sourceLedger);
    const webSources = listify(DATA.learningSources);
    const reviewedFileCount = ledger.reduce((total, source) => total + (Array.isArray(source?.files) ? source.files.length : (typeof source === "string" ? 1 : 0)), 0);
    main.innerHTML = `
      ${pageIntro("Know where the notes came from", "Sources, course position & corrections", "This page separates your lecturer-provided material from helpful outside reading. It also records clarifications so a typo or oversimplification does not become something you memorise.")}
      <section class="transparency-note"><h2>These are transformed study notes</h2><p>The explanations, mnemonics, cases and answer plans here were written as an original study aid from the supplied course files and referenced learning sources. Raw uploaded books and course PDFs are <strong>not republished</strong> on this site. Your lecturer's course position remains the guide for assessment; outside sources are labelled as enrichment, not replacements.</p></section>

      <div class="section-heading"><div><h2>Course-file ledger</h2><p>${reviewedFileCount || ledger.length} supplied file${(reviewedFileCount || ledger.length) === 1 ? "" : "s"} audited and mapped into the notebook.</p></div></div>
      ${ledger.length ? `<section class="source-grid">${ledger.map((source,index) => {
        if (typeof source === "string") return `<article class="source-card"><span class="source-status">Course file reviewed</span><h3>${esc(source)}</h3></article>`;
        const position = source.position || source.usedIn || source.topic || source.coursePosition || source.coverage;
        const note = source.note || source.summary || source.use || source.usedFor || source.contribution;
        const correction = source.correction || source.corrections || source.caution || source.editorial;
        const files = listify(source.files);
        return `<article class="source-card"><span class="source-status">${esc(source.status || (files.length ? `${files.length} course file${files.length === 1 ? "" : "s"} reviewed` : "Coverage note"))}</span>${source.type ? `<span class="source-type"> · ${esc(source.type)}</span>` : ""}<h3>${esc(source.title || source.topic || sourceTitle(source,index))}</h3>${position && position !== source.topic ? `<p><strong>Course position:</strong> ${esc(Array.isArray(position) ? position.join(", ") : position)}</p>` : ""}${files.length ? `<details class="source-files"><summary>See exact filenames</summary><ul>${files.map(file => `<li>${esc(file)}</li>`).join("")}</ul></details>` : ""}${note ? `<p>${esc(Array.isArray(note) ? note.join(" ") : note)}</p>` : ""}${correction ? `<div class="correction"><strong>Clarification/correction:</strong> ${esc(Array.isArray(correction) ? correction.join(" ") : correction)}</div>` : ""}</article>`;
      }).join("")}</section>` : `<section class="empty-state"><strong>The source ledger is being prepared.</strong><p>The learning notes are still usable; this list simply makes coverage transparent.</p></section>`}

      <div class="section-heading"><div><h2>Helpful outside reading</h2><p>Use these to clarify or go deeper. For exam wording, return to the course notes and lecturer.</p></div></div>
      ${webSources.length ? `<section class="source-grid">${webSources.map((source,index) => {
        if (typeof source === "string") return `<article class="source-card"><h3>${esc(source)}</h3></article>`;
        return `<article class="source-card"><span class="source-type">${esc(source.type || source.kind || source.label || "Enrichment")}</span><h3>${esc(source.title || source.name || `Learning source ${index + 1}`)}</h3>${source.author ? `<p class="source-author">${esc(source.author)}</p>` : ""}<p>${esc(source.why || source.use || source.note || source.description || "Useful for further explanation and comparison.")}</p>${source.caution ? `<div class="correction"><strong>Use carefully:</strong> ${esc(source.caution)}</div>` : ""}${source.url ? `<a class="web-source-link" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">Read reference ↗</a>` : ""}</article>`;
      }).join("")}</section>` : ""}`;
  }

  function searchHaystacks() {
    const items = [];
    lessons.forEach(lesson => {
      const content = [lesson.title, lesson.navTitle, lesson.summary, lesson.question, ...listify(lesson.catch), lesson.mnemonic?.line, lesson.mnemonic?.meaning, ...listify(lesson.sections).flatMap(section => [section.title, stripHtml(section.html), stripHtml(section.example), stripHtml(section.examTip)])].filter(Boolean).join(" ");
      items.push({ kind: "Topic", title: lesson.title, text: content, href: `#lesson/${encodeURIComponent(lesson.id)}` });
    });
    questions.forEach(question => items.push({ kind: `Question · ${question.topic || "Mixed"}`, title: question.prompt, text: [question.prompt, ...listify(question.plan), ...listify(question.answer)].join(" "), href: "#practice" }));
    memoryDeck.forEach(card => items.push({ kind: `Memory · ${card.topic || "Recall"}`, title: card.front, text: `${card.front} ${card.back}`, href: "#memory" }));
    return items;
  }

  function highlight(text, query) {
    const safe = esc(text);
    if (!query) return safe;
    const pattern = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp(`(${pattern})`, "ig"), "<mark>$1</mark>");
  }

  function renderSearch() {
    const query = state.search.trim();
    const lower = query.toLowerCase();
    const results = query.length < 2 ? [] : searchHaystacks().filter(item => item.text.toLowerCase().includes(lower));
    main.innerHTML = `
      ${pageIntro("Search this notebook", query ? `Results for “${query}”` : "Find an idea", query ? `${results.length} match${results.length === 1 ? "" : "es"} across topics, exam questions and memory cards.` : "Type at least two letters in the search box above.")}
      ${results.length ? `<section class="search-results">${results.slice(0,60).map(item => {
        const position = item.text.toLowerCase().indexOf(lower);
        const start = Math.max(0, position - 80);
        const snippet = `${start ? "…" : ""}${item.text.slice(start, start + 230)}${item.text.length > start + 230 ? "…" : ""}`;
        return `<article class="search-result"><small>${esc(item.kind)}</small><h2>${highlight(item.title,query)}</h2><p>${highlight(snippet,query)}</p><a href="${item.href}">Open this result →</a></article>`;
      }).join("")}</section>` : `<section class="empty-state"><strong>${query.length < 2 ? "What idea are you looking for?" : "No exact match yet."}</strong><p>${query.length < 2 ? "Try ‘soul’, ‘freedom’, ‘memory’ or a course term." : "Try the singular form, a shorter term, or browse the topic path."}</p></section>`}`;
  }

  function render() {
    parseRoute();
    updateActiveNavigation();
    const routes = {
      dashboard: renderDashboard,
      lesson: renderLesson,
      practice: renderPractice,
      memory: renderMemory,
      "how-to-learn": renderHowToLearn,
      "before-exam": renderBeforeExam,
      sources: renderSources,
      search: renderSearch
    };
    (routes[state.route] || renderDashboard)();
    closeDrawer();
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = state.route === "lesson" && lessonById(state.lessonId)
      ? `${lessonById(state.lessonId).title} · PA`
      : `${main.querySelector("h1")?.textContent || "Philosophical Anthropology"} · PA`;
  }

  function answerQuiz(button) {
    const key = button.dataset.quizKey;
    if (state.progress.quiz[key] !== undefined) return;
    state.progress.quiz[key] = Number(button.dataset.option);
    saveProgress();
    const lesson = lessonById(state.lessonId);
    if (lesson) renderLesson();
    const correct = Number(button.dataset.option) === Number(button.dataset.correct);
    toast(correct ? "Yes — that distinction is clean." : "Good attempt. Read the explanation, then say why the other option fits.");
  }

  function toggleLessonComplete(id) {
    const stringId = String(id);
    if (completed(stringId)) {
      state.progress.completedLessons = state.progress.completedLessons.filter(item => item !== stringId);
      toast("Topic reopened. Review is allowed.");
    } else {
      state.progress.completedLessons.push(stringId);
      toast("Topic checkpoint saved. Now retrieve it again tomorrow.");
      window.StudyTools?.showMessage("Topic complete! Tiny warning: completion is not mastery. One blank-page recall tomorrow and we make it stick.");
    }
    saveProgress();
    renderLesson();
  }

  function stepMemory(direction) {
    const count = filteredMemory().length;
    if (!count) return;
    state.memoryIndex = (state.memoryIndex + direction + count) % count;
    state.memoryFlipped = false;
    renderMemory();
  }

  main.addEventListener("click", event => {
    const actionElement = event.target.closest("[data-action]");
    if (!actionElement) return;
    const action = actionElement.dataset.action;
    if (action === "tired-off") setTiredMode(false);
    if (action === "mark-lesson") toggleLessonComplete(actionElement.dataset.lessonId);
    if (action === "quiz-answer") answerQuiz(actionElement);
    if (action === "toggle-answer") {
      const panel = document.querySelector(`#answer-${CSS.escape(actionElement.dataset.questionId)}`);
      if (panel) {
        panel.hidden = !panel.hidden;
        actionElement.textContent = panel.hidden ? "Reveal model answer" : "Hide model answer";
      }
    }
    if (action === "rate-question") {
      state.progress.ratings[actionElement.dataset.questionId] = actionElement.dataset.rating;
      saveProgress();
      actionElement.closest(".rating-buttons")?.querySelectorAll("button").forEach(button => button.classList.toggle("active", button === actionElement));
      toast(actionElement.dataset.rating === "got" ? "Nice. Re-test it later without the model." : "Saved for review — useful honesty.");
    }
    if (action === "flip-card") {
      state.memoryFlipped = !state.memoryFlipped;
      actionElement.classList.toggle("flipped", state.memoryFlipped);
    }
    if (action === "memory-next") stepMemory(1);
    if (action === "memory-prev") stepMemory(-1);
    if (action === "memory-rate") {
      state.progress.memory[actionElement.dataset.cardIndex] = actionElement.dataset.rating;
      saveProgress();
      stepMemory(1);
    }
    if (action === "shuffle-memory") {
      for (let index = state.memoryOrder.length - 1; index > 0; index -= 1) {
        const swap = Math.floor(Math.random() * (index + 1));
        [state.memoryOrder[index], state.memoryOrder[swap]] = [state.memoryOrder[swap], state.memoryOrder[index]];
      }
      state.memoryIndex = 0;
      state.memoryFlipped = false;
      renderMemory();
      toast("Deck shuffled. Recognition shortcuts are cancelled.");
    }
  });

  main.addEventListener("change", event => {
    if (event.target.id === "practice-topic") {
      state.practiceTopic = event.target.value;
      renderPractice();
    }
    if (event.target.id === "practice-type") {
      state.practiceType = event.target.value;
      renderPractice();
    }
    if (event.target.id === "memory-topic") {
      state.memoryTopic = event.target.value;
      state.memoryIndex = 0;
      state.memoryFlipped = false;
      renderMemory();
    }
    if (event.target.matches("[data-recall-key]")) {
      state.progress.recall[event.target.dataset.recallKey] = event.target.checked;
      saveProgress();
    }
    if (event.target.matches("[data-exam-key]")) {
      state.progress.exam[event.target.dataset.examKey] = event.target.checked;
      saveProgress();
    }
  });

  menuButton.addEventListener("click", () => document.body.classList.contains("drawer-open") ? closeDrawer() : openDrawer());
  scrim.addEventListener("click", closeDrawer);
  tiredToggle.addEventListener("click", () => setTiredMode(!state.tired));
  tiredBanner.addEventListener("click", event => {
    if (event.target.closest('[data-action="tired-off"]')) setTiredMode(false);
  });
  document.querySelector("#print-button").addEventListener("click", () => window.print());
  document.querySelectorAll(".sidebar a").forEach(link => link.addEventListener("click", closeDrawer));

  let searchTimer;
  searchInput.addEventListener("input", () => {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => {
      const query = searchInput.value.trim();
      if (query.length >= 2) window.location.hash = `search?q=${encodeURIComponent(query)}`;
      else if (state.route === "search" && !query) window.location.hash = "dashboard";
    }, 180);
  });

  document.addEventListener("keydown", event => {
    const tag = document.activeElement?.tagName;
    if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(tag)) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === "Escape") {
      closeDrawer();
      if (document.activeElement === searchInput) {
        searchInput.value = "";
        searchInput.blur();
      }
    }
    if (state.route === "memory" && !["INPUT", "TEXTAREA", "SELECT"].includes(tag)) {
      if (event.key === "ArrowRight") stepMemory(1);
      if (event.key === "ArrowLeft") stepMemory(-1);
      if (event.key === " " && document.activeElement?.dataset.action !== "flip-card") {
        event.preventDefault();
        state.memoryFlipped = !state.memoryFlipped;
        document.querySelector(".flashcard")?.classList.toggle("flipped", state.memoryFlipped);
      }
    }
  });

  window.addEventListener("hashchange", render);
  window.addEventListener("resize", () => { if (window.innerWidth > 820) closeDrawer(); });

  renderNavigation();
  setTiredMode(state.tired);
  render();
  window.StudyTools?.setCourse("bianca", {
    active: true,
    message: "Hey Hezron — welcome to PA. Ask ‘who am I?’ as you study; every topic is trying to answer part of that question."
  });
})();

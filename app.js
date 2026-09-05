(() => {
  "use strict";

  const { lessons, practice, formulaGroups, checkpoints, sources } = window.STUDY_DATA;
  const app = document.querySelector("#app");
  const toastRegion = document.querySelector("#toast-region");
  const STORAGE_KEY = "tion-calculus-progress-v1";
  const MODE_KEY = "tion-calculus-mode";
  const GREETING_KEY = "tion-greeting-index";
  const ACCESS_HASH = "85276b4e765304147cc4d0e6cef7350a607904d38b40e1a0f7865ecd7d632d3b";

  const navItems = [
    { id: "home", label: "Home", icon: "⌂" },
    { id: "learn", label: "Learn", icon: "✎" },
    { id: "practice", label: "Practice", icon: "∑" },
    { id: "checkpoints", label: "Checkpoints", icon: "✓" },
    { id: "formulas", label: "Formula sheet", icon: "ƒ" },
    { id: "exam", label: "Before exam", icon: "★" },
    { id: "calculator", label: "Calculator", icon: "▦" }
  ];

  const pageMessages = {
    home: [
      "Hi Hezron — what do you wanna learn today?",
      "Welcome back, Hezron. One clean step at a time.",
      "You showed up. That already counts — let’s make something click.",
      "Good to see you, Hezron — let’s catch one idea properly.",
      "Hey Hezron — ready for a small win?",
      "Your calculus corner is ready — where should we begin?"
    ],
    learn: [
      "Read the green ‘catch these’ box first. It is the shortest safe route.",
      "If a line feels too fast, say the algebra move out loud.",
      "Must-read means marks live there. Optional means return when your brain has space."
    ],
    practice: [
      "Try for two minutes before opening the solution. Then mark your own working honestly.",
      "In the exam, the method earns marks even when arithmetic slips.",
      "Write the rule first. It makes your next line much easier to trust."
    ],
    checkpoints: [
      "No pressure: a checkpoint tells us what to revisit, not how smart you are.",
      "Four out of five means this checkpoint is exam-ready.",
      "Read every explanation, including the ones you got right."
    ],
    formulas: [
      "Use this page to recall, not to learn a formula for the first time.",
      "Cover the right side and try to say each result before reading it.",
      "The minus signs are small but expensive. Check them twice."
    ],
    exam: [
      "This is your final sweep. Read every Must box; skip the extras if time is tight.",
      "Do not learn a brand-new trick in the last ten minutes.",
      "Breathe, label the rule, show the line, box the answer."
    ],
    calculator: [
      "Your fx-82EX is a checker, not a proof writer.",
      "RAD mode first for calculus trig. I will keep reminding you.",
      "If left and right table values disagree, investigate — do not guess."
    ]
  };

  const defaultProgress = {
    completedLessons: [],
    solvedProblems: [],
    checkpointScores: {},
    examChecklist: []
  };

  const state = {
    authenticated: sessionStorage.getItem("tion-auth") === "yes",
    page: "home",
    selectedLesson: lessons[0].id,
    practiceFilter: "All",
    tired: localStorage.getItem(MODE_KEY) === "tired",
    progress: loadProgress(),
    quiz: null,
    tionOpen: true,
    tionMessageIndex: 0,
    homeGreetingIndex: nextGreetingIndex(),
    mobileMore: false
  };

  function nextGreetingIndex() {
    const previous = Number.parseInt(localStorage.getItem(GREETING_KEY), 10);
    const next = Number.isInteger(previous) ? (previous + 1) % pageMessages.home.length : 0;
    localStorage.setItem(GREETING_KEY, String(next));
    return next;
  }

  function loadProgress() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return { ...defaultProgress, ...(stored || {}) };
    } catch {
      return { ...defaultProgress };
    }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  }

  async function sha256(value) {
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, "0")).join("");
  }

  function overallProgress() {
    const lessonsPart = state.progress.completedLessons.length / lessons.length;
    const problemsPart = state.progress.solvedProblems.length / practice.length;
    const checkpointsPart = checkpoints
      .filter(checkpoint => (state.progress.checkpointScores[checkpoint.id] || 0) >= checkpoint.pass).length / checkpoints.length;
    return Math.min(100, Math.round((lessonsPart * 0.45 + problemsPart * 0.35 + checkpointsPart * 0.2) * 100));
  }

  function avatar(expression = "happy", size = 76) {
    return `
      <span class="tion-avatar ${expression}" style="--tion-size:${size}px" aria-hidden="true">
        <svg viewBox="0 0 160 160" role="img">
          <path d="M80 23V12" fill="none" stroke="#17251f" stroke-width="6" stroke-linecap="round"/>
          <circle cx="80" cy="9" r="6" fill="#c8f25d" stroke="#17251f" stroke-width="4"/>
          <path d="M31 68c-12 1-16 9-13 21 2 9 8 14 17 13M129 68c12 1 16 9 13 21-2 9-8 14-17 13" fill="#f47c4b" stroke="#17251f" stroke-width="5"/>
          <rect x="30" y="26" width="100" height="113" rx="43" fill="#f47c4b" stroke="#17251f" stroke-width="6"/>
          <path d="M42 60c10-21 68-31 78 2" fill="#ffd664" stroke="#17251f" stroke-width="5" stroke-linecap="round"/>
          <path d="M44 63c8-18 64-27 74 0" fill="#c8f25d"/>
          <rect x="43" y="63" width="74" height="55" rx="24" fill="#fffdf7" stroke="#17251f" stroke-width="4"/>
          <g class="brow-left" style="transform-origin:64px 76px"><path d="M55 76q9-7 18 0" fill="none" stroke="#17251f" stroke-width="4" stroke-linecap="round"/></g>
          <g class="brow-right" style="transform-origin:96px 76px"><path d="M87 76q9-7 18 0" fill="none" stroke="#17251f" stroke-width="4" stroke-linecap="round"/></g>
          <g class="blink"><ellipse cx="65" cy="86" rx="5" ry="7" fill="#17251f"/><ellipse cx="96" cy="86" rx="5" ry="7" fill="#17251f"/></g>
          <path class="mouth-happy" d="M64 99q16 18 32 0" fill="none" stroke="#17251f" stroke-width="5" stroke-linecap="round"/>
          <ellipse class="mouth-thinking" cx="87" cy="104" rx="8" ry="5" fill="none" stroke="#17251f" stroke-width="4"/>
          <path class="mouth-proud" d="M64 103q16 10 32 0" fill="#ffd664" stroke="#17251f" stroke-width="4" stroke-linecap="round"/>
          <path class="mouth-concerned" d="M67 108q13-10 26 0" fill="none" stroke="#17251f" stroke-width="4" stroke-linecap="round"/>
          <circle cx="51" cy="98" r="5" fill="#ffc3ae"/><circle cx="110" cy="98" r="5" fill="#ffc3ae"/>
          <path d="M57 138v10M103 138v10" stroke="#17251f" stroke-width="6" stroke-linecap="round"/>
          <path d="M45 149h20M95 149h20" stroke="#17251f" stroke-width="7" stroke-linecap="round"/>
        </svg>
      </span>`;
  }

  function renderLogin() {
    document.body.classList.remove("tired-mode");
    app.innerHTML = `
      <main class="login-screen">
        <div class="login-grid">
          <section class="login-story" aria-labelledby="login-title">
            <div class="brand-lockup"><span class="brand-mark">∫</span><span>Tion’s calculus room</span></div>
            <span class="eyebrow">A study space made from your notes</span>
            <h1 id="login-title">Calculus that feels <span class="accent-scribble">human.</span></h1>
            <p>Clear explanations when you have energy. Only the points that matter when you do not. Then proper exam-room working until it sticks.</p>
            <div class="login-mini-cards" aria-label="Site features">
              <span>☾ Tired mode</span><span>✓ Checkpoints</span><span>▦ fx-82EX checks</span><span>✎ 34 worked questions</span>
            </div>
          </section>
          <section class="login-card" aria-label="Sign in">
            <div class="login-tion">${avatar("happy", 78)}<div><strong>Hey, I’m Tion!</strong><p>I’ll stay with you all the way through.</p></div></div>
            <form id="login-form">
              <input type="hidden" name="username" value="SVND3" autocomplete="username" />
              <span class="identity-label">Your study ID</span>
              <div class="username-display"><span>SVND3</span><span class="locked-pill">fixed</span></div>
              <label class="field-label" for="password">Password</label>
              <div class="password-wrap">
                <input id="password" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" autofocus aria-describedby="login-error" />
                <button class="password-toggle" type="button" data-action="toggle-password" aria-label="Show password">◉</button>
              </div>
              <p id="login-error" class="login-error" role="alert"></p>
              <button class="primary-button login-submit" type="submit">Enter the study room <span>→</span></button>
            </form>
            <p class="login-footnote">Private study profile • SVND3</p>
          </section>
        </div>
      </main>`;
  }

  function navMarkup(mobile = false) {
    const items = mobile
      ? navItems.filter(item => ["home", "learn", "practice", "formulas"].includes(item.id))
      : navItems;
    const buttons = items.map(item => `
      <button class="nav-button ${state.page === item.id ? "active" : ""}" data-action="nav" data-page="${item.id}">
        <span class="nav-icon">${item.icon}</span><span>${item.label}</span>
      </button>`).join("");

    if (mobile) {
      return `${buttons}<button class="nav-button ${["checkpoints", "exam", "calculator"].includes(state.page) ? "active" : ""}" data-action="mobile-more"><span class="nav-icon">•••</span><span>More</span></button>`;
    }
    return buttons;
  }

  function currentTionMessage() {
    const options = pageMessages[state.page] || pageMessages.home;
    return options[state.tionMessageIndex % options.length];
  }

  function currentExpression() {
    if (state.page === "checkpoints") return "thinking";
    if (state.page === "exam") return "concerned";
    if (state.progress.completedLessons.length >= 5) return "proud";
    return "happy";
  }

  function renderShell() {
    document.body.classList.toggle("tired-mode", state.tired);
    const progress = overallProgress();
    const pageLabel = navItems.find(item => item.id === state.page)?.label || "Home";

    app.innerHTML = `
      <div class="app-shell">
        <aside class="sidebar">
          <div class="brand-lockup"><span class="brand-mark">∫</span><span>Tion’s room</span></div>
          <nav class="side-nav" aria-label="Main navigation">${navMarkup()}</nav>
          <div class="side-progress">
            <div class="side-progress-head"><span>Your progress</span><strong>${progress}%</strong></div>
            <div class="progress-track" aria-label="${progress}% complete"><div class="progress-fill" style="width:${progress}%"></div></div>
          </div>
          <button class="logout-button" data-action="logout"><span>↪</span> Lock room</button>
        </aside>
        <div class="main-column">
          <header class="topbar">
            <div class="page-crumb"><span>Study room /</span><strong>${pageLabel}</strong></div>
            <div class="top-actions">
              <button class="mode-switch ${state.tired ? "active" : ""}" data-action="toggle-mode" aria-pressed="${state.tired}">
                <span class="switch-track"><span class="switch-knob"></span></span>
                <span class="mode-label">${state.tired ? "Tired mode" : "Full notes"}</span>
              </button>
              <span class="profile-dot" title="SVND3">SV</span>
            </div>
          </header>
          ${renderPage()}
        </div>
        <nav class="mobile-nav" aria-label="Mobile navigation">${navMarkup(true)}</nav>
        ${state.mobileMore ? renderMobileMore() : ""}
        <div class="tion-dock">
          <div class="tion-bubble ${state.tionOpen ? "show" : ""}">
            <p><strong>Tion:</strong> ${currentTionMessage()}</p>
            <button class="text-button" data-action="tion-next">Another tip</button>
          </div>
          <button class="tion-dock-button" data-action="tion-toggle" aria-label="Ask Tion" aria-expanded="${state.tionOpen}">
            ${avatar(currentExpression(), 68)}<span class="tion-status"></span>
          </button>
        </div>
      </div>`;
  }

  function renderMobileMore() {
    return `<div class="mobile-more-backdrop" data-action="mobile-more">
      <div class="mobile-more-sheet" role="dialog" aria-label="More pages" data-action="mobile-sheet">
        <div class="mobile-more-handle"></div>
        <h3>More from your room</h3>
        ${navItems.filter(item => ["checkpoints", "exam", "calculator"].includes(item.id)).map(item => `
          <button class="nav-button ${state.page === item.id ? "active" : ""}" data-action="nav" data-page="${item.id}"><span class="nav-icon">${item.icon}</span><span>${item.label}</span></button>
        `).join("")}
        <button class="logout-button mobile-logout" data-action="logout">↪ Lock room</button>
      </div>
    </div>`;
  }

  function renderPage() {
    const renderers = {
      home: renderHome,
      learn: renderLearn,
      practice: renderPractice,
      checkpoints: renderCheckpoints,
      formulas: renderFormulas,
      exam: renderExam,
      calculator: renderCalculator
    };
    return `<main class="page-wrap page-enter">${(renderers[state.page] || renderHome)()}</main>`;
  }

  function renderHome() {
    const completed = state.progress.completedLessons.length;
    const solved = state.progress.solvedProblems.length;
    const nextLesson = lessons.find(item => !state.progress.completedLessons.includes(item.id)) || lessons[0];
    const readyCheck = Object.values(state.progress.checkpointScores).filter(score => score >= 4).length;
    const now = new Date();
    const date = new Intl.DateTimeFormat("en-KE", { weekday: "long", day: "numeric", month: "short" }).format(now);
    const greeting = pageMessages.home[state.homeGreetingIndex];

    return `
      <section class="hero-grid">
        <div class="home-hero">
          <span class="eyebrow" style="color:var(--lime)">Your calculus corner</span>
          <h1>${greeting.split("—")[0]}<br><span class="accent-scribble">${greeting.includes("—") ? greeting.split("—")[1].trim() : "Let’s make it click."}</span></h1>
          <p>Your photographed notes, rebuilt into a route you can follow. Choose a lesson, solve it like an exam, then let a checkpoint prove it.</p>
          <div class="hero-actions">
            <button class="primary-button" data-action="open-lesson" data-lesson="${nextLesson.id}">Continue: ${nextLesson.title} →</button>
            <button class="ghost-button" data-action="nav" data-page="exam">Quick exam sweep</button>
          </div>
          <div class="hero-stat-row">
            <div class="hero-stat"><strong>${completed}/${lessons.length}</strong><span>lessons caught</span></div>
            <div class="hero-stat"><strong>${solved}</strong><span>problems solved</span></div>
            <div class="hero-stat"><strong>${readyCheck}/3</strong><span>checkpoints ready</span></div>
          </div>
        </div>
        <aside class="today-card paper-card">
          <div class="mini-date"><span>${date}</span><span>✦ TODAY</span></div>
          <div class="big-number">25</div>
          <p class="muted">focused minutes is enough for one good round.</p>
          <div class="route-list">
            <div class="route-item"><span class="route-check ${completed ? "done" : ""}">${completed ? "✓" : ""}</span><span>Read one Must lesson</span></div>
            <div class="route-item"><span class="route-check ${solved >= 2 ? "done" : ""}">${solved >= 2 ? "✓" : ""}</span><span>Attempt two questions</span></div>
            <div class="route-item"><span class="route-check ${readyCheck ? "done" : ""}">${readyCheck ? "✓" : ""}</span><span>Finish one checkpoint</span></div>
          </div>
          <button class="text-button" data-action="toggle-mode">${state.tired ? "I have energy — show full notes" : "Low energy? Switch to tired mode"}</button>
        </aside>
      </section>

      <div class="section-row"><div><span class="eyebrow">Your route</span><h2>Learn in notebook order</h2></div><button class="text-button" data-action="nav" data-page="learn">Open all lessons →</button></div>
      <section class="topic-grid">
        ${lessons.map((lesson, index) => `
          <button class="topic-card paper-card" data-action="open-lesson" data-lesson="${lesson.id}" style="--card-accent:${["var(--lime-soft)","var(--blue-soft)","var(--orange-soft)","var(--yellow-soft)"][index % 4]}">
            <span class="topic-number">${String(index + 1).padStart(2, "0")}</span>
            <h3>${lesson.title}</h3><p>${lesson.short}</p>
            <span class="topic-meta"><span>${lesson.minutes} min</span><span>${state.progress.completedLessons.includes(lesson.id) ? "✓ caught" : lesson.priority === "must" ? "Must read" : "Optional"}</span></span>
          </button>`).join("")}
      </section>

      <section class="home-lower-grid">
        <div class="quote-card paper-card"><blockquote>“A limit is about the journey near the point. A derivative is about how fast that journey changes.”</blockquote><cite>— Tion’s plain-language rule</cite></div>
        <div class="quick-card paper-card"><span class="eyebrow">Quick desk</span><h3>Need one thing fast?</h3><div class="quick-links"><button class="ghost-button" data-action="nav" data-page="formulas">Formula glance</button><button class="ghost-button" data-action="nav" data-page="calculator">Check on fx-82EX</button><button class="ghost-button" data-action="nav" data-page="checkpoints">Test me</button></div></div>
      </section>`;
  }

  function renderLearn() {
    const lesson = lessons.find(item => item.id === state.selectedLesson) || lessons[0];
    const lessonIndex = lessons.findIndex(item => item.id === lesson.id);
    const complete = state.progress.completedLessons.includes(lesson.id);
    const next = lessons[(lessonIndex + 1) % lessons.length];
    return `
      <div class="page-heading">
        <div><span class="eyebrow">Clear notes</span><h1>Learn it without the fog.</h1><p>Start with the green box. Read the full explanation only when you have the energy.</p></div>
      </div>
      <div class="tired-banner">${avatar("thinking", 48)}<div><strong>Tired mode is on.</strong><div class="muted">I hid deeper extras. Catch the three points, formula and worked example.</div></div></div>
      <div class="learn-layout">
        <aside class="lesson-index paper-card" aria-label="Lessons">
          <h3>Notebook route</h3>
          ${lessons.map((item, index) => `
            <button class="lesson-index-button ${item.id === lesson.id ? "active" : ""}" data-action="select-lesson" data-lesson="${item.id}">
              <span class="tiny-number">${state.progress.completedLessons.includes(item.id) ? "✓" : index + 1}</span><span>${item.title}</span>
            </button>`).join("")}
        </aside>
        <article class="lesson-sheet paper-card">
          <header class="lesson-header">
            <div class="lesson-kicker"><span class="priority-badge ${lesson.priority}">${lesson.priority === "must" ? "● Must read" : "○ Not a must"}</span><span class="level-badge">${lesson.level}</span><span class="source-badge">${lesson.minutes} min</span></div>
            <h2>${lesson.title}</h2><p class="lesson-lead">${lesson.lead}</p>
          </header>
          <section class="catch-box"><h3>⚡ If you only catch 3 things</h3><ol>${lesson.catches.map(item => `<li>${item}</li>`).join("")}</ol></section>
          ${lesson.sections.map((section, index) => `<section class="concept-block ${section.optional ? "optional-content deep-dive" : ""}"><div class="lesson-kicker"><span class="priority-badge ${section.optional ? "optional" : "must"}">${section.optional ? "Not a must" : "Must know"}</span></div><h3>${section.title}</h3>${section.html}</section>`).join("")}
          <aside class="sticky-note ${lessonIndex % 2 ? "blue" : ""}"><strong>Sticky note from Tion</strong><p>${lesson.sticky}</p></aside>
          <p class="muted" style="font-size:.76rem">Concept trail: ${lesson.source}. Practice questions on this site are original or rewritten, not copied verbatim.</p>
          <footer class="lesson-footer-actions">
            <button class="${complete ? "ghost-button" : "primary-button"}" data-action="complete-lesson" data-lesson="${lesson.id}">${complete ? "✓ Marked as caught" : "I caught this lesson ✓"}</button>
            <button class="secondary-button" data-action="select-lesson" data-lesson="${next.id}">Next: ${next.title} →</button>
          </footer>
        </article>
      </div>`;
  }

  function practiceTopics() {
    return ["All", "Limits", "Trig limits", "One-sided", "Continuity", "Derivatives", "Trig derivatives", "Inverse trig", "Log & exp", "Hyperbolic", "Mixed exam"];
  }

  function filteredPractice() {
    let list = practice;
    if (state.practiceFilter !== "All") {
      list = list.filter(item => item.topic === state.practiceFilter || (state.practiceFilter === "Limits" && ["Limits", "Infinity"].includes(item.topic)) || (state.practiceFilter === "Derivatives" && ["Derivatives", "First principles"].includes(item.topic)));
    }
    if (state.tired) list = list.filter(item => item.difficulty <= 2);
    return list;
  }

  function difficultyDots(level) {
    return `<span class="difficulty">${[1,2,3].map(value => `<i class="${value <= level ? "on" : ""}"></i>`).join("")} ${["Warm-up", "Exam level", "Stretch"][level - 1]}</span>`;
  }

  function renderPractice() {
    const items = filteredPractice();
    const solvedCount = state.progress.solvedProblems.length;
    return `
      <div class="page-heading">
        <div><span class="eyebrow">Exam-room working</span><h1>Attempt. Reveal. Mark.</h1><p>Every solution shows the line you should write, the final answer, and what the examiner is looking for.</p></div>
      </div>
      ${state.tired ? `<div class="tired-banner" style="display:flex">${avatar("thinking", 48)}<div><strong>Short set only.</strong><div class="muted">Stretch questions are hidden while tired mode is on.</div></div></div>` : ""}
      <div class="filter-row" aria-label="Filter practice questions">${practiceTopics().map(topic => `<button class="filter-chip ${state.practiceFilter === topic ? "active" : ""}" data-action="practice-filter" data-filter="${topic}">${topic}</button>`).join("")}</div>
      <div class="practice-layout">
        <section class="problem-list">
          ${items.length ? items.map((problem, index) => renderProblem(problem, index)).join("") : `<div class="paper-card empty-state"><span>⌁</span><h3>No questions in this view.</h3><p>Choose another filter or switch off tired mode.</p></div>`}
        </section>
        <aside class="practice-side">
          <div class="paper-card"><span class="eyebrow">Your tally</span><div class="score-wheel" style="--value:${Math.round((solvedCount / practice.length) * 360)}deg"><strong>${solvedCount}/${practice.length}</strong></div><p class="muted" style="text-align:center">worked and marked</p></div>
          <div class="paper-card"><h3>Exam order</h3><p class="muted">1. Name the rule.<br>2. Show substitution.<br>3. Simplify cleanly.<br>4. Box the answer.</p></div>
        </aside>
      </div>`;
  }

  function renderProblem(problem, index) {
    const solved = state.progress.solvedProblems.includes(problem.id);
    return `<article class="problem-card paper-card" id="${problem.id}">
      <div class="problem-head">
        <div class="problem-topline"><div><span class="source-badge">${problem.topic}</span> ${difficultyDots(problem.difficulty)}</div><span class="marks">[${problem.marks} marks]</span></div>
        <p class="problem-question"><span class="muted">${String(index + 1).padStart(2, "0")}.</span> ${problem.question}</p>
        <div class="answer-actions"><button class="primary-button" data-action="toggle-solution" data-problem="${problem.id}">Show exam solution</button>${solved ? `<span class="priority-badge must">✓ marked done</span>` : ""}</div>
      </div>
      <div class="solution-panel" data-solution="${problem.id}">
        <div class="exam-ribbon">✎ What I would write in the exam</div>
        ${problem.steps.map((step, stepIndex) => `<div class="solution-step"><span class="step-number">${stepIndex + 1}</span><p>${step}</p></div>`).join("")}
        <div class="final-answer">Final answer: ${problem.answer}</div>
        <p class="marker-note"><strong>Marker’s eye:</strong> ${problem.marker}</p>
        <button class="${solved ? "ghost-button" : "secondary-button"}" style="margin-top:8px" data-action="mark-solved" data-problem="${problem.id}">${solved ? "✓ Added to your tally" : "I worked through this ✓"}</button>
      </div>
    </article>`;
  }

  function renderFormulas() {
    return `
      <div class="page-heading">
        <div><span class="eyebrow">At-a-glance sheet</span><h1>Every formula. No hunting.</h1><p>Search, scan or print this page. In tired mode the same complete sheet stays visible.</p></div>
        <div class="formula-toolbar"><label class="search-field">⌕<span class="sr-only">Search formulas</span><input id="formula-search" placeholder="Search e.g. quotient" /></label><button class="ghost-button" data-action="print">Print sheet</button></div>
      </div>
      <div id="formula-groups">
        ${formulaGroups.map((group, groupIndex) => `
          <section class="formula-category" data-formula-category>
            <div class="formula-category-head"><span style="--category-color:${group.color}">${group.icon}</span><h2>${group.title}</h2></div>
            <div class="formula-grid">${group.items.map(item => `<article class="formula-card paper-card" data-formula-search="${(group.title + " " + item.join(" ")).toLowerCase()}"><div class="formula">${item[0]}</div><p>${item[1]}</p></article>`).join("")}</div>
          </section>`).join("")}
      </div>`;
  }

  const examSections = [
    { title: "Limits: the decision path", items: ["Substitute first.", "If 0/0: factor, rationalise or use a trig standard limit.", "For piecewise questions: calculate L₋ and L₊ separately.", "At infinity: compare highest powers."] },
    { title: "Continuity: say all three", items: ["f(a) is defined.", "limₓ→ₐf(x) exists.", "The limit equals f(a).", "For an unknown constant, equate the two branch limits."] },
    { title: "Derivatives: choose the structure", items: ["Single powers → power rule.", "Two multiplied functions → product rule.", "One function divided by another → quotient rule.", "A function inside a function → chain rule."] },
    { title: "Signs worth a mark", items: ["(cos x)′=−sin x", "(cos⁻¹x)′=−1/√(1−x²)", "(cot x)′=−cosec²x", "But (cosh x)′=+sinh x"] }
  ];

  const examChecklist = [
    "I can explain what a limit means in one sentence.",
    "I remember both standard trig limits in radians.",
    "I compare left and right before claiming a limit exists.",
    "I know the three continuity conditions.",
    "I can write the first-principles definition without looking.",
    "I can spot product, quotient and chain rule structures.",
    "I know the six trigonometric derivatives.",
    "My calculator is in radians for trig calculus."
  ];

  function renderExam() {
    const checked = state.progress.examChecklist.length;
    return `
      <section class="exam-callout">
        <div><span class="eyebrow" style="color:var(--lime)">Read this before the exam</span><h1>Your final calm sweep.</h1><p>This page is deliberately short. Read the four cards, check the danger list, then stop revising and breathe.</p></div>
        <div class="exam-countdown"><strong>${checked}/${examChecklist.length}</strong><span>readiness checks done</span></div>
      </section>
      <section class="exam-summary-grid">
        ${examSections.map((section, index) => `<article class="exam-summary-card paper-card"><h3><span class="number-chip">${index + 1}</span>${section.title}</h3><ul>${section.items.map(item => `<li>${item}</li>`).join("")}</ul></article>`).join("")}
        <article class="exam-summary-card paper-card wide"><div class="lesson-kicker"><span class="priority-badge must">● Must do</span></div><h3>One-minute danger list</h3><div class="formula-grid"><div class="sticky-note">0/0 is not an answer. Simplify.</div><div class="sticky-note blue">Do not cancel across addition.</div><div class="sticky-note">Use radians for calculus trig.</div><div class="sticky-note blue">L₋≠L₊ means DNE.</div><div class="sticky-note">Chain rule needs the inside derivative.</div><div class="sticky-note blue">Box the final answer with its sign.</div></div></article>
        <article class="exam-summary-card paper-card wide"><span class="eyebrow">Ready check</span><h2>Can you honestly tick these?</h2><div class="checklist">${examChecklist.map((item, index) => { const done = state.progress.examChecklist.includes(index); return `<label class="check-row ${done ? "checked" : ""}"><input type="checkbox" data-action="exam-check" data-index="${index}" ${done ? "checked" : ""}><span>${item}</span></label>`; }).join("")}</div></article>
        <article class="exam-summary-card paper-card wide optional-content"><div class="lesson-kicker"><span class="priority-badge optional">○ Reference only</span></div><h3>Where the extra concepts and question patterns came from</h3><p class="muted">Your notebook controls the course order. External sources were used to cross-check definitions and inspire fresh practice patterns.</p><ul>${sources.map(source => `<li><a href="${source.href}" target="_blank" rel="noreferrer">${source.label}</a> — ${source.detail}</li>`).join("")}</ul></article>
      </section>`;
  }

  function renderCheckpoints() {
    if (!state.quiz) {
      const firstNotPassed = checkpoints.find(checkpoint => (state.progress.checkpointScores[checkpoint.id] || 0) < checkpoint.pass) || checkpoints[0];
      return renderCheckpointOverview(firstNotPassed.id);
    }
    return renderActiveQuiz();
  }

  function renderCheckpointOverview(selectedId) {
    const selected = checkpoints.find(item => item.id === selectedId) || checkpoints[0];
    return `
      <div class="page-heading"><div><span class="eyebrow">Proof that it stuck</span><h1>Checkpoint station.</h1><p>Five quick questions each. Score 4/5 to mark a checkpoint exam-ready.</p></div></div>
      <div class="checkpoint-overview">
        <aside class="checkpoint-map paper-card">
          ${checkpoints.map((checkpoint, index) => { const score = state.progress.checkpointScores[checkpoint.id]; return `<button class="checkpoint-map-button ${checkpoint.id === selected.id ? "active" : ""}" data-action="preview-checkpoint" data-checkpoint="${checkpoint.id}"><span class="map-node ${score >= checkpoint.pass ? "complete" : ""}">${score >= checkpoint.pass ? "✓" : index + 1}</span><span><strong>${checkpoint.title}</strong><small class="muted" style="display:block">${score === undefined ? "Not attempted" : `${score}/5 last score`}</small></span></button>`; }).join("")}
        </aside>
        <section class="quiz-card paper-card">
          <div class="lesson-kicker"><span class="level-badge">5 questions</span><span class="priority-badge must">Pass: ${selected.pass}/5</span></div>
          <h2>${selected.title}</h2><p class="muted">${selected.subtitle}. You get an explanation after every answer.</p>
          <div class="catch-box"><h3>Before you tap start</h3><ol><li>No notes for the first attempt.</li><li>Choose an answer before asking Tion.</li><li>Use a wrong answer to pick your next lesson.</li></ol></div>
          <button class="primary-button" data-action="start-checkpoint" data-checkpoint="${selected.id}">Start checkpoint →</button>
        </section>
      </div>`;
  }

  function renderActiveQuiz() {
    const quizState = state.quiz;
    const checkpoint = checkpoints.find(item => item.id === quizState.id);
    if (quizState.finished) {
      const passed = quizState.score >= checkpoint.pass;
      return `<div class="page-heading"><div><span class="eyebrow">Checkpoint result</span><h1>${passed ? "You caught it." : "Good diagnosis."}</h1></div></div>
        <section class="quiz-result paper-card">${avatar(passed ? "proud" : "concerned", 105)}<p class="result-mark">${quizState.score}/5</p><h2>${passed ? "Exam-ready checkpoint ✓" : "One more round will help."}</h2><p class="muted">${passed ? "You reached the 4/5 target. Keep the method fresh with one practice question tomorrow." : "Review the linked lesson, then retry. A result is a map, not a label."}</p><div class="hero-actions" style="justify-content:center"><button class="primary-button" data-action="retry-checkpoint" data-checkpoint="${checkpoint.id}">Try again</button><button class="ghost-button" data-action="close-checkpoint">All checkpoints</button></div></section>`;
    }

    const question = checkpoint.questions[quizState.index];
    return `<div class="page-heading"><div><span class="eyebrow">${checkpoint.title}</span><h1>Question ${quizState.index + 1} of ${checkpoint.questions.length}</h1></div></div>
      <section class="quiz-card paper-card">
        <div class="quiz-progress">${checkpoint.questions.map((_, index) => `<span class="${index < quizState.index ? "done" : index === quizState.index ? "active" : ""}"></span>`).join("")}</div>
        <p class="quiz-question">${question.q}</p>
        <div class="quiz-options">${question.options.map((option, index) => {
          let classes = "";
          if (quizState.selected === index) classes += " selected";
          if (quizState.answered && index === question.answer) classes += " correct";
          if (quizState.answered && quizState.selected === index && index !== question.answer) classes += " incorrect";
          return `<button class="quiz-option${classes}" data-action="select-option" data-option="${index}" ${quizState.answered ? "disabled" : ""}><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span></button>`;
        }).join("")}</div>
        <div class="quiz-feedback">${quizState.answered ? `<strong>${quizState.selected === question.answer ? "Correct — nice." : "Not this time."}</strong><div>${question.why}</div>` : ""}</div>
        <div class="quiz-actions">${quizState.answered ? `<button class="primary-button" data-action="quiz-next">${quizState.index === checkpoint.questions.length - 1 ? "See result" : "Next question →"}</button>` : `<button class="primary-button" data-action="submit-answer" ${quizState.selected === null ? "disabled" : ""}>Check answer</button>`}</div>
      </section>`;
  }

  function renderCalculator() {
    return `
      <section class="calculator-hero paper-card">
        <div><span class="eyebrow" style="color:var(--lime)">Casio fx-82EX ClassWiz</span><h1>Use it to check, not to hide.</h1><p>Your model can evaluate numbers and build value tables. It has no d/dx key, integration key, equation solver or symbolic algebra system.</p></div>
        <div class="calc-mini" aria-hidden="true"><div class="calc-screen">f(x)=sin(x)/x<br>0.999998...</div><div class="calc-keys">${Array.from({ length: 30 }, () => "<i></i>").join("")}</div></div>
      </section>
      <aside class="calculator-warning paper-card"><span style="font-size:1.5rem">⚠</span><p><strong>Before every trig check:</strong> set the angle unit to radians. A correct method can look wrong if the calculator is in degrees.</p></aside>
      <section class="calculator-grid">
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge must">Must do first</span></div><h3>Set radians</h3><div class="key-sequence"><span class="calc-key">SHIFT</span><span class="key-arrow">→</span><span class="calc-key">MENU / SETUP</span><span class="key-arrow">→</span><span class="calc-key">2 Angle Unit</span><span class="key-arrow">→</span><span class="calc-key">2 Radian</span></div><p class="muted">Look for the small R indicator. Switch back only when a non-calculus question explicitly uses degrees.</p></article>
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge must">Best limit check</span></div><h3>Approach from both sides with TABLE</h3><div class="key-sequence"><span class="calc-key">MENU</span><span class="key-arrow">→</span><span class="calc-key">3: Table</span><span class="key-arrow">→</span><span class="calc-key">f(x)</span></div><ol><li>Enter the function using the X key, then press EXE.</li><li>Enter Start, End and Step, pressing EXE after each.</li><li>Compare values just below and above a.</li></ol><p class="muted">Example near 2: Start 1.8, End 2.2, Step 0.1. An error exactly at 2 may be a hole; nearby values matter.</p></article>
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge must">Derivative check</span></div><h3>Use a symmetric difference</h3><div class="formula-display" style="font-size:1.15rem">f′(a) ≈ [f(a+h)−f(a−h)]/(2h)</div><ol><li>Use h=0.001.</li><li>Type the whole expression with brackets.</li><li>Compare the decimal with your exact derivative at a.</li></ol><p class="muted">Try h=0.0001 too. Stable nearby answers are reassuring; they are not a proof.</p></article>
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge optional">Quick sanity check</span></div><h3>Check a tangent slope</h3><p>For f(x)=x² at a=3, type:</p><div class="key-sequence"><span class="calc-key">((3.001)²−(2.999)²)</span><span class="key-arrow">÷</span><span class="calc-key">0.002</span><span class="key-arrow">=</span></div><p>The display should be about 6, matching f′(x)=2x and f′(3)=6.</p></article>
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge optional">Two-column check</span></div><h3>Compare two formulas in TABLE</h3><div class="key-sequence"><span class="calc-key">SHIFT</span><span class="key-arrow">→</span><span class="calc-key">MENU / SETUP</span><span class="key-arrow">→</span><span class="calc-key">↓, 3: Table</span><span class="key-arrow">→</span><span class="calc-key">2: f(x),g(x)</span></div><p class="muted">Then open Table and enter both formulas. This is useful for checking that a cancelled expression and its simpler form agree everywhere except at the hole. Two-function mode holds up to 30 rows.</p></article>
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge optional">Hyperbolic checks</span></div><h3>Find sinh, cosh and tanh</h3><div class="key-sequence"><span class="calc-key">Calculate mode</span><span class="key-arrow">→</span><span class="calc-key">OPTN</span><span class="key-arrow">→</span><span class="calc-key">1: Hyperbolic Func</span></div><p class="muted">If it is not on the first option screen, press ↓ and choose 1. Use this to check numerical values, not to replace the derivative rule.</p></article>
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge must">Fractions</span></div><h3>Compare exact and decimal forms</h3><div class="key-sequence"><span class="calc-key">S⇔D</span><span class="key-arrow">or</span><span class="calc-key">SHIFT + EXE</span></div><p>Use S⇔D to switch an existing result; SHIFT + EXE asks for a decimal result directly. In your written answer, keep exact forms such as 3/5, √3 or π unless decimals are requested.</p></article>
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge must">Know the boundary</span></div><h3>What this calculator cannot confirm</h3><table class="truth-table"><thead><tr><th>Can help check</th><th>Cannot prove</th></tr></thead><tbody><tr><td>Nearby function values</td><td>A limit exists</td></tr><tr><td>Approximate gradient</td><td>Your symbolic derivative</td></tr><tr><td>A final decimal</td><td>Your algebraic working</td></tr><tr><td>Signs near an asymptote</td><td>A complete exam explanation</td></tr></tbody></table></article>
      </section>
      <aside class="sticky-note" style="margin-top:24px"><strong>Tion’s calculator rule</strong><p>Paper answer first, calculator check second. If they disagree, check brackets, RAD mode, signs and the value you substituted before changing your mathematics.</p></aside>
      <p class="muted optional-content" style="font-size:.78rem">Key sequences cross-checked against CASIO User’s Guide RJA532417-001V01. The retired model link has been replaced with CASIO’s active <a href="https://www.casio.com/intl/support/calculators/manual/" target="_blank" rel="noreferrer">official manual finder</a>; search for fx-82EX. Use the on-screen Table and Angle Unit labels if a regional menu differs.</p>`;
  }

  function navigate(page) {
    if (!navItems.some(item => item.id === page)) return;
    state.page = page;
    state.mobileMore = false;
    state.tionMessageIndex = 0;
    state.tionOpen = true;
    if (page !== "checkpoints") state.quiz = null;
    renderShell();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toast(message) {
    const element = document.createElement("div");
    element.className = "toast";
    element.textContent = message;
    toastRegion.append(element);
    setTimeout(() => element.remove(), 2800);
  }

  app.addEventListener("submit", async event => {
    if (event.target.id !== "login-form") return;
    event.preventDefault();
    const password = new FormData(event.target).get("password");
    const submittedHash = await sha256(password);
    if (submittedHash === ACCESS_HASH) {
      sessionStorage.setItem("tion-auth", "yes");
      state.authenticated = true;
      renderShell();
      window.scrollTo(0, 0);
      toast("Room unlocked. Welcome, Hezron!");
    } else {
      const error = document.querySelector("#login-error");
      error.textContent = "That password did not match. Check it and try again.";
      const input = document.querySelector("#password");
      input.select();
      document.querySelector(".tion-avatar")?.classList.replace("happy", "concerned");
    }
  });

  app.addEventListener("input", event => {
    if (event.target.id !== "formula-search") return;
    const query = event.target.value.trim().toLowerCase();
    document.querySelectorAll("[data-formula-search]").forEach(card => {
      card.hidden = !card.dataset.formulaSearch.includes(query);
    });
    document.querySelectorAll("[data-formula-category]").forEach(category => {
      const visible = [...category.querySelectorAll("[data-formula-search]")].some(card => !card.hidden);
      category.hidden = !visible;
    });
  });

  app.addEventListener("change", event => {
    if (event.target.dataset.action !== "exam-check") return;
    const index = Number(event.target.dataset.index);
    if (event.target.checked) {
      if (!state.progress.examChecklist.includes(index)) state.progress.examChecklist.push(index);
    } else {
      state.progress.examChecklist = state.progress.examChecklist.filter(value => value !== index);
    }
    saveProgress();
    renderShell();
  });

  app.addEventListener("click", event => {
    const trigger = event.target.closest("[data-action]");
    if (!trigger) return;
    const action = trigger.dataset.action;

    if (action === "toggle-password") {
      const input = document.querySelector("#password");
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
      trigger.setAttribute("aria-label", input.type === "password" ? "Show password" : "Hide password");
      return;
    }

    if (action === "nav") {
      navigate(trigger.dataset.page);
      return;
    }

    if (action === "logout") {
      sessionStorage.removeItem("tion-auth");
      state.authenticated = false;
      renderLogin();
      return;
    }

    if (action === "toggle-mode") {
      state.tired = !state.tired;
      localStorage.setItem(MODE_KEY, state.tired ? "tired" : "full");
      renderShell();
      toast(state.tired ? "Tired mode on — only the safest route is showing." : "Full notes are back.");
      return;
    }

    if (action === "open-lesson" || action === "select-lesson") {
      state.selectedLesson = trigger.dataset.lesson;
      state.page = "learn";
      state.tionMessageIndex = 0;
      renderShell();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (action === "complete-lesson") {
      const lessonId = trigger.dataset.lesson;
      if (!state.progress.completedLessons.includes(lessonId)) {
        state.progress.completedLessons.push(lessonId);
        saveProgress();
        toast("Lesson caught. Tion is proud of you.");
      }
      renderShell();
      return;
    }

    if (action === "practice-filter") {
      state.practiceFilter = trigger.dataset.filter;
      renderShell();
      return;
    }

    if (action === "toggle-solution") {
      const panel = document.querySelector(`[data-solution="${trigger.dataset.problem}"]`);
      if (!panel) return;
      panel.classList.toggle("open");
      trigger.textContent = panel.classList.contains("open") ? "Hide solution" : "Show exam solution";
      return;
    }

    if (action === "mark-solved") {
      const problemId = trigger.dataset.problem;
      if (!state.progress.solvedProblems.includes(problemId)) {
        state.progress.solvedProblems.push(problemId);
        saveProgress();
        toast("Added to your solved tally ✓");
      }
      trigger.textContent = "✓ Added to your tally";
      trigger.className = "ghost-button";
      return;
    }

    if (action === "preview-checkpoint") {
      const selectedId = trigger.dataset.checkpoint;
      const main = document.querySelector(".page-wrap");
      main.innerHTML = renderCheckpointOverview(selectedId);
      return;
    }

    if (action === "start-checkpoint" || action === "retry-checkpoint") {
      state.quiz = { id: trigger.dataset.checkpoint, index: 0, selected: null, answered: false, score: 0, finished: false };
      renderShell();
      return;
    }

    if (action === "select-option") {
      if (!state.quiz || state.quiz.answered) return;
      state.quiz.selected = Number(trigger.dataset.option);
      renderShell();
      return;
    }

    if (action === "submit-answer") {
      if (!state.quiz || state.quiz.selected === null) return;
      const checkpoint = checkpoints.find(item => item.id === state.quiz.id);
      if (state.quiz.selected === checkpoint.questions[state.quiz.index].answer) state.quiz.score += 1;
      state.quiz.answered = true;
      renderShell();
      return;
    }

    if (action === "quiz-next") {
      if (!state.quiz) return;
      const checkpoint = checkpoints.find(item => item.id === state.quiz.id);
      if (state.quiz.index >= checkpoint.questions.length - 1) {
        state.quiz.finished = true;
        state.progress.checkpointScores[checkpoint.id] = Math.max(state.quiz.score, state.progress.checkpointScores[checkpoint.id] || 0);
        saveProgress();
      } else {
        state.quiz.index += 1;
        state.quiz.selected = null;
        state.quiz.answered = false;
      }
      renderShell();
      return;
    }

    if (action === "close-checkpoint") {
      state.quiz = null;
      renderShell();
      return;
    }

    if (action === "print") {
      window.print();
      return;
    }

    if (action === "tion-toggle") {
      state.tionOpen = !state.tionOpen;
      document.querySelector(".tion-bubble")?.classList.toggle("show", state.tionOpen);
      trigger.setAttribute("aria-expanded", String(state.tionOpen));
      return;
    }

    if (action === "tion-next") {
      const options = pageMessages[state.page] || pageMessages.home;
      state.tionMessageIndex = (state.tionMessageIndex + 1) % options.length;
      document.querySelector(".tion-bubble p").innerHTML = `<strong>Tion:</strong> ${currentTionMessage()}`;
      return;
    }

    if (action === "mobile-more") {
      state.mobileMore = !state.mobileMore;
      renderShell();
      return;
    }

    if (action === "mobile-sheet") return;
  });

  if (state.authenticated) renderShell();
  else renderLogin();
})();

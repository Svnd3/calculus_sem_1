(() => {
  "use strict";

  const { lessons, practice, formulaGroups, derivativeDeck, checkpoints, sources } = window.STUDY_DATA;
  const examPapers = window.EXAM_PAPERS || [];
  const app = document.querySelector("#app");
  const toastRegion = document.querySelector("#toast-region");
  const STORAGE_KEY = "tion-calculus-progress-v1";
  const MODE_KEY = "tion-calculus-mode";
  const GREETING_KEY = "tion-greeting-index";
  const LAST_COURSE_KEY = "svnd3-last-course";
  const ACCESS_HASH = "85276b4e765304147cc4d0e6cef7350a607904d38b40e1a0f7865ecd7d632d3b";

  const navItems = [
    { id: "home", label: "Home", icon: "⌂" },
    { id: "learn", label: "Learn", icon: "✎" },
    { id: "practice", label: "Practice", icon: "∑" },
    { id: "papers", label: "Exam centre", icon: "▤" },
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
    papers: [
      "Sit the paper first, then reveal the working one answer at a time.",
      "These mocks predict useful patterns, not the exact questions you will meet.",
      "Method marks matter: write the rule, substitution and conclusion clearly."
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
    dashboard: new URLSearchParams(window.location.search).get("course") !== "calculus",
    page: "home",
    selectedLesson: lessons[0].id,
    practiceFilter: "All",
    tired: localStorage.getItem(MODE_KEY) === "tired",
    progress: loadProgress(),
    quiz: null,
    tionOpen: true,
    tionMessageIndex: 0,
    homeGreetingIndex: nextGreetingIndex(),
    mobileMore: false,
    selectedPaper: examPapers[0]?.id || "",
    derivativeFilter: "Core trig"
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
    const mood = ({ proud: "celebrate", concerned: "sad" })[expression] || expression;
    const markup = window.StudyTools?.avatarMarkup("tion", mood, "Tion") || "";
    return '<span class="animal-inline" style="--animal-size:' + size + 'px" aria-hidden="true">' + markup + '</span>';
  }

  function renderLogin() {
    document.body.classList.remove("tired-mode");
    document.body.classList.remove("course-dashboard-open");
    window.StudyTools?.deactivate();
    app.innerHTML = `
      <main class="login-screen">
        <div class="login-grid">
          <section class="login-story" aria-labelledby="login-title">
            <div class="brand-lockup"><span class="brand-mark">H</span><span>Hezron’s study room</span></div>
            <span class="eyebrow">Four courses · one calm study space</span>
            <h1 id="login-title">Learning that feels <span class="accent-scribble">human.</span></h1>
            <p>Deep explanations when you have energy, the essential points when you do not, and practice that makes you retrieve instead of only rereading.</p>
            <div class="login-mini-cards" aria-label="Site features">
              <span>☾ Tired mode</span><span>◷ Focus timer</span><span>✓ Checkpoints</span><span>✎ 4 course rooms</span>
            </div>
          </section>
          <section class="login-card" aria-label="Sign in">
            <div class="login-tion">${avatar("happy", 78)}<div><strong>Hey, Hezron!</strong><p>Tion, Bianca, Peter and Woof Woof are ready.</p></div></div>
            <form id="login-form">
              <input class="sr-only" name="username" type="text" value="SVND3" autocomplete="username" readonly tabindex="-1" aria-hidden="true" />
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

  function readStoredProgress(key, completedField, total) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "{}");
      const completed = Array.isArray(value[completedField]) ? value[completedField].length : 0;
      return Math.min(100, Math.round((completed / total) * 100));
    } catch {
      return 0;
    }
  }

  function courseCard({ id, eyebrow, title, guide, profile, symbol, copy, progress, href, topics }) {
    return `<article class="course-card course-${id}">
      <div class="course-card-top">
        <span class="course-symbol" aria-hidden="true">${symbol}</span>
        <div class="course-character-animal ${id}" aria-label="${guide}, course guide">${window.StudyTools?.avatarMarkup(profile || "tion", "happy", guide) || symbol}</div>
      </div>
      <span class="course-eyebrow">${eyebrow}</span>
      <h2>${title}</h2>
      <p>${copy}</p>
      <div class="course-topic-row">${topics.map(topic => `<span>${topic}</span>`).join("")}</div>
      <div class="course-progress-row"><span><strong>${progress}%</strong> explored</span><span>${guide} is waiting</span></div>
      <div class="course-progress-track"><i style="width:${progress}%"></i></div>
      ${href
        ? `<a class="course-enter" href="${href}" data-course-link="${id}">Enter with ${guide} <span>→</span></a>`
        : `<button class="course-enter" data-action="open-course" data-course="${id}">Enter with ${guide} <span>→</span></button>`}
    </article>`;
  }

  function renderCourseDashboard() {
    state.dashboard = true;
    document.body.classList.remove("tired-mode");
    document.body.classList.add("course-dashboard-open");
    document.title = "Your Courses · Hezron's Study Room";
    history.replaceState(null, "", window.location.pathname);
    const paProgress = readStoredProgress("bianca-pa-progress-v1", "completedLessons", 12);
    const discreteProgress = readStoredProgress("discrete-decoded-state-v1", "completed", 16);
    const computingProgress = readStoredProgress("computing-fundamentals-state-v1", "completed", 16);
    const last = localStorage.getItem(LAST_COURSE_KEY) || "calculus";
    const lastNames = { calculus: "Calculus", anthropology: "Philosophical Anthropology", discrete: "Discrete Mathematics", computing: "Computing Fundamentals" };
    app.innerHTML = `<main class="course-dashboard">
      <header class="dashboard-bar">
        <a class="dashboard-brand" href="./" aria-label="Study room home"><span>H</span><strong>Hezron’s study room</strong></a>
        <div class="dashboard-actions"><span class="dashboard-id">SVND3</span><button data-action="logout">Lock room ↪</button></div>
      </header>
      <section class="dashboard-hero">
        <div>
          <span class="eyebrow">Your semester, organised</span>
          <h1>What are we <span class="accent-scribble">catching</span> today?</h1>
          <p>Choose one room. Your guide, progress, focus clock and tired mode travel with you.</p>
          <button class="continue-course" data-action="continue-course" data-course="${last}">Continue ${lastNames[last] || "Calculus"} <span>→</span></button>
        </div>
        <aside class="dashboard-method-note">
          <span>Today’s smart route</span>
          <strong>Recall → check → correct</strong>
          <p>Close the notes, say what you remember, then reopen them. That struggle is your memory getting stronger.</p>
        </aside>
      </section>
      <section class="course-section" aria-labelledby="course-heading">
        <div class="dashboard-section-head"><div><span class="eyebrow">Coursework</span><h2 id="course-heading">Pick your room</h2></div><p>Each guide behaves differently. Yes, you can tickle them.</p></div>
        <div class="course-grid">
          ${courseCard({ id: "calculus", eyebrow: "ICS 1103 · Differential Calculus", title: "Calculus", guide: "Tion", profile: "tion", symbol: "∫", copy: "Limits, continuity and derivatives explained line by line, with exam-room solutions and fx-82EX checks.", progress: overallProgress(), topics: ["Worked examples", "Formula reflex", "3 mock papers"] })}
          ${courseCard({ id: "anthropology", eyebrow: "HED 1201 · Caroline S. Maingi", title: "Philosophical Anthropology", guide: "Bianca", profile: "bianca", symbol: "φ", copy: "A serious but simple journey through being, life, the person, freedom, relationships and human destiny.", progress: paProgress, href: "anthropology/", topics: ["Deep notes", "Mnemonics", "Essay practice"] })}
          ${courseCard({ id: "discrete", eyebrow: "Discrete structures", title: "Discrete Mathematics", guide: "Peter", profile: "peter", symbol: "∴", copy: "Sets, logic, counting, induction and functions made visual, testable and proof-ready.", progress: discreteProgress, href: "discrete/", topics: ["Truth labs", "Past questions", "Memory deck"] })}
          ${courseCard({ id: "computing", eyebrow: "CNS / ICS 1101 · Computing Fundamentals", title: "Computing Fundamentals", guide: "Woof Woof", profile: "woof", symbol: "01", copy: "Hardware, operating systems, networks, security, number systems and algorithms connected into one usable mental model.", progress: computingProgress, href: "computing/", topics: ["11 diagrams", "8 live labs", "77 questions"] })}
        </div>
      </section>
      <section class="dashboard-lower">
        <article><span class="dashboard-doodle">◷</span><div><strong>Focus without guessing</strong><p>Use the floating timer. When it ends, the room changes colour and your current guide calls the break.</p></div></article>
        <article><span class="dashboard-doodle">☾</span><div><strong>Low battery is allowed</strong><p>Tired mode keeps only definitions, key links, mnemonics and likely exam points.</p></div></article>
        <article><span class="dashboard-doodle">↻</span><div><strong>Retrieval beats rereading</strong><p>Use blurting, checkpoints and spaced reviews. Familiar-looking words are not yet recall.</p></div></article>
      </section>
      <footer class="dashboard-footer">Made for Hezron · Notes stay in this browser · One honest study block at a time.</footer>
    </main>`;
    window.StudyTools?.setCourse("tion", { message: "Welcome to the dashboard, Hezron. Pick a room — I’ll call the others if you need them." });
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
      return `${buttons}<button class="nav-button ${["papers", "checkpoints", "exam", "calculator"].includes(state.page) ? "active" : ""}" data-action="mobile-more"><span class="nav-icon">•••</span><span>More</span></button>`;
    }
    return buttons;
  }

  function currentTionMessage() {
    const options = pageMessages[state.page] || pageMessages.home;
    return options[state.tionMessageIndex % options.length];
  }

  function currentExpression() {
    if (state.page === "checkpoints") return "thinking";
    if (state.page === "papers") return "thinking";
    if (state.page === "exam") return "concerned";
    if (state.progress.completedLessons.length >= 5) return "proud";
    return "happy";
  }

  function renderShell() {
    state.dashboard = false;
    document.body.classList.remove("course-dashboard-open");
    document.body.classList.toggle("tired-mode", state.tired);
    document.title = "Tion's Calculus Room";
    const progress = overallProgress();
    const pageLabel = navItems.find(item => item.id === state.page)?.label || "Home";

    app.innerHTML = `
      <div class="app-shell">
        <aside class="sidebar">
          <div class="brand-lockup"><span class="brand-mark">∫</span><span>Tion’s room</span></div>
          <button class="back-to-courses" data-action="dashboard"><span>←</span> All courses</button>
          <nav class="side-nav" aria-label="Main navigation">${navMarkup()}</nav>
          <div class="side-progress">
            <div class="side-progress-head"><span>Your progress</span><strong>${progress}%</strong></div>
            <div class="progress-track" aria-label="${progress}% complete"><div class="progress-fill" style="width:${progress}%"></div></div>
          </div>
          <button class="logout-button" data-action="logout"><span>↪</span> Lock room</button>
        </aside>
        <div class="main-column">
          <header class="topbar">
            <div class="page-crumb"><span>Calculus /</span><strong>${pageLabel}</strong></div>
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
      </div>`;
    window.StudyTools?.setCourse("tion", { greet: true, message: currentTionMessage(), mood: currentExpression() });
  }

  function renderMobileMore() {
    return `<div class="mobile-more-backdrop" data-action="mobile-more">
      <div class="mobile-more-sheet" role="dialog" aria-label="More pages" data-action="mobile-sheet">
        <div class="mobile-more-handle"></div>
        <h3>More from your room</h3>
        ${navItems.filter(item => ["papers", "checkpoints", "exam", "calculator"].includes(item.id)).map(item => `
          <button class="nav-button ${state.page === item.id ? "active" : ""}" data-action="nav" data-page="${item.id}"><span class="nav-icon">${item.icon}</span><span>${item.label}</span></button>
        `).join("")}
        <button class="nav-button" data-action="dashboard"><span class="nav-icon">←</span><span>All courses</span></button>
        <button class="logout-button mobile-logout" data-action="logout">↪ Lock room</button>
      </div>
    </div>`;
  }

  function renderPage() {
    const renderers = {
      home: renderHome,
      learn: renderLearn,
      practice: renderPractice,
      papers: renderPapers,
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
        <div class="quick-card paper-card"><span class="eyebrow">Quick desk</span><h3>Need one thing fast?</h3><div class="quick-links"><button class="ghost-button" data-action="nav" data-page="formulas">Formula glance</button><button class="ghost-button" data-action="nav" data-page="papers">Past & mock papers</button><button class="ghost-button" data-action="nav" data-page="calculator">Check on fx-82EX</button><button class="ghost-button" data-action="nav" data-page="checkpoints">Test me</button></div></div>
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

  function catOneGraph() {
    return `<figure class="paper-graph">
      <svg viewBox="0 0 720 380" role="img" aria-labelledby="cat1-graph-title cat1-graph-desc">
        <title id="cat1-graph-title">Sketch of the CAT 1 piecewise function</title>
        <desc id="cat1-graph-desc">A line ending at x negative two, a reciprocal branch approaching a vertical asymptote at x one, a horizontal segment from x one to three, and a parabola continuing from x three.</desc>
        <defs><marker id="axis-arrow" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="currentColor"/></marker></defs>
        <g class="graph-grid">
          ${[70,140,210,280,350,420,490,560,630].map(x => `<line x1="${x}" y1="25" x2="${x}" y2="345"/>`).join("")}
          ${[50,80,110,140,170,200,230,260,290,320].map(y => `<line x1="35" y1="${y}" x2="685" y2="${y}"/>`).join("")}
        </g>
        <g class="graph-axes">
          <line x1="35" y1="260" x2="690" y2="260" marker-end="url(#axis-arrow)"/>
          <line x1="350" y1="350" x2="350" y2="20" marker-end="url(#axis-arrow)"/>
          <text x="695" y="255">x</text><text x="360" y="25">y</text>
          <text x="202" y="280">−2</text><text x="414" y="280">1</text><text x="554" y="280">3</text><text x="360" y="145">4</text>
        </g>
        <line class="graph-asymptote" x1="420" y1="30" x2="420" y2="345"/>
        <path class="graph-piece graph-line" d="M35 275 L210 200"/>
        <path class="graph-piece graph-curve" d="M210 210 C270 215 320 221 350 230 C380 245 398 292 410 345"/>
        <path class="graph-piece graph-flat" d="M420 140 L560 140"/>
        <path class="graph-piece graph-parabola" d="M560 140 C575 115 591 72 604 30"/>
        <circle class="graph-closed" cx="210" cy="200" r="6"/><circle class="graph-open" cx="210" cy="210" r="6"/>
        <circle class="graph-closed" cx="420" cy="140" r="6"/><circle class="graph-closed" cx="560" cy="140" r="6"/>
        <text class="graph-label" x="60" y="250">y=x+4</text><text class="graph-label" x="225" y="196">y=1/(x−1)+2</text>
        <text class="graph-label" x="465" y="128">y=4</text><text class="graph-label" x="590" y="63">y=x²−5</text>
      </svg>
      <figcaption>Closed dots are included. Open dots are excluded. The dashed line is the vertical asymptote x=1.</figcaption>
    </figure>`;
  }

  function renderPaperQuestion(question, index) {
    const questionId = question.id || `paper-q-${index + 1}`;
    const steps = question.steps || question.solution || [];
    const traps = question.commonTraps || (question.trap ? [question.trap] : []);
    const marker = question.markerNote || question.marker;
    const provenance = question.provenance || question.source;
    const finalAnswer = question.finalAnswer || question.answer;
    const calculatorCheck = Array.isArray(question.calculatorCheck)
      ? `<ul>${question.calculatorCheck.map(item => `<li>${item}</li>`).join("")}</ul>`
      : `<p>${question.calculatorCheck || ""}</p>`;
    const priority = (question.priority || "Must read").toLowerCase().includes("must") ? "must" : "optional";
    return `<article class="paper-question paper-card" id="${questionId}">
      <header class="paper-question-head">
        <div class="problem-topline">
          <div class="lesson-kicker"><span class="priority-badge ${priority}">${priority === "must" ? "● Must read" : "○ Extra practice"}</span><span class="source-badge">${question.topic || question.title || "Calculus"}</span></div>
          <span class="marks">[${question.marks} marks]</span>
        </div>
        <h3><span class="paper-question-number">${question.number || index + 1}</span>${question.title || "Question"}</h3>
        <div class="paper-prompt">${question.prompt}</div>
        ${question.visual === "cat1-piecewise" ? catOneGraph() : ""}
        <button class="primary-button paper-answer-button" data-action="toggle-paper-solution" data-paper-question="${questionId}" aria-expanded="false">Show exam-room solution</button>
      </header>
      <div class="solution-panel paper-solution" data-paper-solution="${questionId}">
        <div class="exam-ribbon">✎ What I would write in the exam</div>
        ${steps.map((step, stepIndex) => {
          const work = typeof step === "string" ? step : step.work;
          const mark = typeof step === "object" && step.marks ? `<span class="step-mark">${step.marks} mark${step.marks === 1 ? "" : "s"}</span>` : "";
          return `<div class="solution-step"><span class="step-number">${stepIndex + 1}</span><p>${work}${mark}</p></div>`;
        }).join("")}
        ${finalAnswer ? `<div class="final-answer">Final answer: ${finalAnswer}</div>` : ""}
        ${marker ? `<p class="marker-note"><strong>Marker’s eye:</strong> ${marker}</p>` : ""}
        ${traps.length ? `<aside class="paper-traps optional-content"><strong>Common traps</strong><ul>${traps.map(trap => `<li>${trap}</li>`).join("")}</ul></aside>` : ""}
        ${question.calculatorCheck ? `<aside class="paper-calc-check"><strong>fx-82EX check</strong>${calculatorCheck}</aside>` : ""}
        ${provenance ? `<p class="paper-provenance optional-content">Question trail: ${provenance}</p>` : ""}
      </div>
    </article>`;
  }

  function renderPapers() {
    if (!examPapers.length) {
      return `<section class="paper-card empty-state"><span>▤</span><h1>Exam papers are being prepared.</h1><p>Come back in a moment.</p></section>`;
    }
    const paper = examPapers.find(item => item.id === state.selectedPaper) || examPapers[0];
    const marks = paper.marks || paper.totalMarks;
    const timePlan = paper.timePlan || [];
    return `
      <section class="paper-centre-hero">
        <div><span class="eyebrow" style="color:var(--lime)">Past paper + realistic mocks</span><h1>Practise the paper.<br><span class="accent-scribble">Then see the marks.</span></h1><p>Sit each question before revealing Tion’s full exam-room working. The future-paper mocks are practice predictions, never leaked papers.</p></div>
        <div class="paper-centre-stamp"><strong>${examPapers.length}</strong><span>complete papers</span></div>
      </section>
      ${state.tired ? `<div class="tired-banner" style="display:flex">${avatar("thinking", 48)}<div><strong>Tired route:</strong><div class="muted">Read the Must read question, then its final green answer. Extra source notes and trap lists are hidden.</div></div></div>` : ""}
      <nav class="paper-tabs" aria-label="Choose an exam paper" role="tablist">
        ${examPapers.map(item => `<button role="tab" aria-selected="${item.id === paper.id}" class="paper-tab ${item.id === paper.id ? "active" : ""}" data-action="paper-tab" data-paper="${item.id}"><span>${item.tab || item.title}</span><small>${item.duration} · ${item.marks || item.totalMarks} marks</small></button>`).join("")}
      </nav>
      <section class="paper-cover paper-card">
        <div class="paper-cover-copy">
          <div class="lesson-kicker"><span class="priority-badge ${paper.badge?.toLowerCase().includes("past") ? "must" : "optional"}">${paper.badge || "Practice paper"}</span><span class="source-badge">ICS 1103</span></div>
          <h2>${paper.title}</h2>
          <p>${paper.subtitle || "Differential Calculus"}</p>
          <div class="paper-meta"><span><strong>${paper.duration}</strong> time</span><span><strong>${marks}</strong> marks</span><span><strong>${paper.questionCount || paper.questions.length}</strong> questions</span></div>
        </div>
        <aside class="paper-disclaimer"><strong>Be clear about this</strong><p>${paper.disclaimer}</p></aside>
      </section>
      <section class="paper-prep-grid">
        <article class="paper-card paper-instructions"><span class="eyebrow">Instructions</span><ol>${(paper.instructions || []).map(item => `<li>${item}</li>`).join("")}</ol></article>
        <article class="paper-card paper-time-plan"><span class="eyebrow">Time plan</span><ul>${timePlan.map(item => {
          const task = Array.isArray(item) ? item[0] : (item.task || item.label);
          const minutes = Array.isArray(item) ? item[1] : `${item.minutes} min`;
          return `<li><span>${task}</span><strong>${minutes}</strong></li>`;
        }).join("")}</ul></article>
      </section>
      <div class="paper-toolbar">
        <p><strong>Attempt first.</strong> Open solutions only after you have written something.</p>
        <div><button class="ghost-button" data-action="toggle-all-paper">Reveal all solutions</button><button class="ghost-button" data-action="print">Print this view</button></div>
      </div>
      <section class="paper-question-list">${paper.questions.map(renderPaperQuestion).join("")}</section>
      ${(paper.finalCheck || []).length ? `<section class="paper-final-check paper-card"><span class="eyebrow">Before you stop</span><h2>Final answer check</h2><div class="paper-check-grid">${paper.finalCheck.map(item => `<span>✓ ${item}</span>`).join("")}</div></section>` : ""}
      ${(paper.sources || []).length ? `<section class="paper-sources paper-card optional-content"><span class="eyebrow">Source trail</span><h2>Where the question styles came from</h2><p>Questions marked original were written for this site. Internet material supplied topic patterns only; future-paper questions are not predictions of exact wording.</p><ul>${paper.sources.map(source => {
        const url = source.href || source.url;
        const label = url ? `<a href="${url}" target="_blank" rel="noreferrer">${source.label}</a>` : `<strong>${source.label}</strong>`;
        return `<li>${label}${source.usedFor || source.note ? ` — ${source.usedFor || source.note}` : ""}</li>`;
      }).join("")}</ul></section>` : ""}`;
  }

  function renderFormulas() {
    const derivativeFamilies = ["Core trig", "Inverse trig", "Exp & log", "Hyperbolic", "Inverse hyperbolic", "All"];
    const visibleDerivativeCards = derivativeDeck.filter(item => state.derivativeFilter === "All" || item.family === state.derivativeFilter);
    return `
      <div class="page-heading">
        <div><span class="eyebrow">At-a-glance sheet + memory practice</span><h1>See it. Say it. Write it.</h1><p>Train the derivative until your response feels automatic, then use the complete formula sheet below.</p></div>
        <div class="formula-toolbar"><label class="search-field">⌕<span class="sr-only">Search formulas</span><input id="formula-search" placeholder="Search e.g. quotient" /></label><button class="ghost-button" data-action="print">Print sheet</button></div>
      </div>
      <section class="derivative-deck paper-card" aria-labelledby="derivative-deck-title">
        <div class="derivative-deck-intro">
          <div class="derivative-tion">${avatar("thinking", 74)}</div>
          <div><span class="eyebrow">Tion's derivative reflex deck</span><h2 id="derivative-deck-title">Can you answer before the ink appears?</h2><p>Let <strong>u=u(x)</strong>. Differentiate the outside, keep u unchanged, then multiply by <strong>u′</strong>. If the input is only x, u′=1.</p></div>
        </div>
        <div class="reflex-routine" aria-label="Five-second derivative routine">
          <span><b>1</b> Circle the inside u</span><span><b>2</b> Differentiate the outside</span><span><b>3</b> Keep the same u</span><span><b>4</b> Multiply by u′</span><span><b>5</b> Check the sign</span>
        </div>
        <aside class="derivative-warning"><strong>Must remember:</strong> trig derivative rules assume radians. sin²x means [sin x]², while sin⁻¹x means arcsin x — neither means cosec x.</aside>
        <div class="derivative-controls">
          <div class="filter-row" aria-label="Choose a derivative family">
            ${derivativeFamilies.map(family => `<button class="filter-chip ${state.derivativeFilter === family ? "active" : ""} ${family === "Inverse hyperbolic" ? "optional-content" : ""}" data-action="derivative-filter" data-family="${family}">${family}${family === "Inverse hyperbolic" ? " · extension" : ""}</button>`).join("")}
          </div>
          <div class="derivative-bulk-actions"><button class="ghost-button" data-action="show-derivatives">Reveal this set</button><button class="text-button" data-action="hide-derivatives">Hide answers</button></div>
        </div>
        <p class="reflex-instruction"><strong>Test yourself:</strong> say the answer aloud before pressing reveal. Every card already includes the chain-rule factor.</p>
        <div class="derivative-card-grid" id="derivative-card-grid">
          ${visibleDerivativeCards.map(item => `<article class="derivative-card ${item.must ? "" : "optional-reflex"}" data-derivative-card>
            <div class="derivative-card-top"><span class="priority-badge ${item.must ? "must" : "optional"}">${item.must ? "Must know" : "Not a must"}</span><span>${item.family}</span></div>
            <p class="derivative-prompt">${item.prompt}</p>
            <button class="secondary-button derivative-reveal" data-action="reveal-derivative" aria-expanded="false">Reveal answer</button>
            <div class="derivative-answer" hidden><div class="answer-formula">${item.answer}</div><p>${item.cue}</p><small><strong>Example:</strong> ${item.example}</small></div>
          </article>`).join("")}
        </div>
        ${state.derivativeFilter === "Inverse hyperbolic" ? `<p class="derivative-extension-note"><strong>Extension only:</strong> these inverse-hyperbolic rules were not developed in your photographed notes. Read them only if your lecturer includes them. Write <em>arsinh</em> rather than sinh⁻¹ when you need to avoid confusing an inverse with a reciprocal.</p>` : ""}
        <div class="memory-patterns">
          <article><strong>Ordinary trig · photo trick</strong><p><b>sec–sec–tan</b> is positive. <b>cosec–cosec–cot</b> is negative. Cover the function you want, then multiply the two that remain.</p></article>
          <article><strong>Hyperbolic</strong><p>sinh and cosh simply swap. Cosh has <b>no minus</b>. The reciprocal-side coth, sech and csch rules are negative.</p></article>
          <article><strong>Inverse trig · photo shapes</strong><p><b>ROOT</b> √(1−u²), <b>BOX</b> 1+u², <b>TRIANGLE</b> |u|√(u²−1). The cos/cot/cosec partner is negative.</p></article>
        </div>
        <div class="derivative-lesson-link"><span><strong>Need the reason, not just the answer?</strong><small>Open the worked notes for explanations and examples.</small></span><button class="primary-button" data-action="select-lesson" data-lesson="trig-derivatives">Open derivative lesson →</button></div>
      </section>
      <div class="formula-sheet-heading"><div><span class="eyebrow">Complete reference</span><h2>Full formula sheet</h2></div><p>Use search to jump to one rule. Print this section for a paper copy.</p></div>
      <div id="formula-groups">
        ${formulaGroups.map((group, groupIndex) => `
          <section class="formula-category ${group.title.includes("extension") ? "optional-content" : ""}" data-formula-category>
            <div class="formula-category-head"><span style="--category-color:${group.color}">${group.icon}</span><h2>${group.title}</h2></div>
            <div class="formula-grid">${group.items.map(item => `<article class="formula-card paper-card" data-formula-search="${(group.title + " " + item.join(" ")).toLowerCase()}"><div class="formula">${item[0]}</div><p>${item[1]}</p></article>`).join("")}</div>
          </section>`).join("")}
      </div>`;
  }

  const examSections = [
    { title: "Limits: the decision path", items: ["Substitute first.", "If 0/0: factor, rationalise or use a trig standard limit.", "For piecewise questions: calculate L₋ and L₊ separately.", "At infinity: compare highest powers."] },
    { title: "Continuity: say all three", items: ["f(a) is defined.", "limₓ→ₐf(x) exists.", "The limit equals f(a).", "For an unknown constant, equate the two branch limits."] },
    { title: "Derivatives: choose the structure", items: ["Single powers → power rule.", "Two multiplied functions → product rule.", "One function divided by another → quotient rule.", "A function inside a function → chain rule."] },
    { title: "Signs worth a mark", items: ["(cos x)′=−sin x", "(cos⁻¹x)′=−1/√(1−x²)", "(cot x)′=−cosec²x", "sec–sec–tan is +; cosec–cosec–cot is −.", "But (cosh x)′=+sinh x"] },
    { title: "Inverse trig: photo code", items: ["ROOT √(1−u²): arcsin +, arccos −.", "BOX 1+u²: arctan +, arccot −.", "TRIANGLE |u|√(u²−1): arcsec +, arccosec −.", "Put u′ on top of every answer."] }
  ];

  const examChecklist = [
    "I can explain what a limit means in one sentence.",
    "I remember both standard trig limits in radians.",
    "I compare left and right before claiming a limit exists.",
    "I know the three continuity conditions.",
    "I can write the first-principles definition without looking.",
    "I can spot product, quotient and chain rule structures.",
    "I know the six trigonometric derivatives.",
    "My calculator is in radians for trig calculus.",
    "I know the inverse-trig root, box and triangle pairs."
  ];

  function renderExam() {
    const checked = state.progress.examChecklist.length;
    return `
      <section class="exam-callout">
        <div><span class="eyebrow" style="color:var(--lime)">Read this before the exam</span><h1>Your final calm sweep.</h1><p>This page is deliberately short. Read the five cards, check the danger list, then stop revising and breathe.</p></div>
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
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge must">Best limit check</span></div><h3>Approach from both sides with TABLE</h3><div class="key-sequence"><span class="calc-key">MENU</span><span class="key-arrow">→</span><span class="calc-key">Highlight Table icon</span><span class="key-arrow">→</span><span class="calc-key">EXE</span></div><ol><li>Enter the function using the X key, then press EXE.</li><li>Enter Start, End and Step, pressing EXE after each.</li><li>Compare values just below and above a.</li></ol><p class="muted">Example near 2: Start 1.8, End 2.2, Step 0.1. An error exactly at 2 may be a hole; nearby values matter.</p></article>
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge must">Derivative check</span></div><h3>Use a symmetric difference</h3><div class="formula-display" style="font-size:1.15rem">f′(a) ≈ [f(a+h)−f(a−h)]/(2h)</div><ol><li>Use h=0.001.</li><li>Type the whole expression with brackets.</li><li>Compare the decimal with your exact derivative at a.</li></ol><p class="muted">Try h=0.0001 too. Stable nearby answers are reassuring; they are not a proof.</p></article>
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge optional">Quick sanity check</span></div><h3>Check a tangent slope</h3><p>For f(x)=x² at a=3, type:</p><div class="key-sequence"><span class="calc-key">((3.001)²−(2.999)²)</span><span class="key-arrow">÷</span><span class="calc-key">0.002</span><span class="key-arrow">=</span></div><p>The display should be about 6, matching f′(x)=2x and f′(3)=6.</p></article>
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge optional">Two-column check</span></div><h3>Compare two formulas in TABLE</h3><div class="key-sequence"><span class="calc-key">SHIFT</span><span class="key-arrow">→</span><span class="calc-key">MENU / SETUP</span><span class="key-arrow">→</span><span class="calc-key">↓, 2: Table</span><span class="key-arrow">→</span><span class="calc-key">2: f(x),g(x)</span></div><p class="muted">Then open Table from MENU, highlight its icon and press EXE. Enter both formulas. This is useful for checking that a cancelled expression and its simpler form agree everywhere except at the hole. Two-function mode holds up to 30 rows.</p></article>
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge optional">Hyperbolic checks</span></div><h3>Find sinh, cosh and tanh</h3><div class="key-sequence"><span class="calc-key">Calculate mode</span><span class="key-arrow">→</span><span class="calc-key">OPTN</span><span class="key-arrow">→</span><span class="calc-key">1: Hyperbolic Func</span></div><p class="muted">If it is not on the first option screen, press ↑ and choose 1. Use this to check numerical values, not to replace the derivative rule.</p></article>
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge must">Fractions</span></div><h3>Compare exact and decimal forms</h3><div class="key-sequence"><span class="calc-key">S⇔D</span><span class="key-arrow">or</span><span class="calc-key">SHIFT + EXE</span></div><p>Use S⇔D to switch an existing result; SHIFT + EXE asks for a decimal result directly. In your written answer, keep exact forms such as 3/5, √3 or π unless decimals are requested.</p></article>
        <article class="calculator-step paper-card"><div class="lesson-kicker"><span class="priority-badge must">Know the boundary</span></div><h3>What this calculator cannot confirm</h3><table class="truth-table"><thead><tr><th>Can help check</th><th>Cannot prove</th></tr></thead><tbody><tr><td>Nearby function values</td><td>A limit exists</td></tr><tr><td>Approximate gradient</td><td>Your symbolic derivative</td></tr><tr><td>A final decimal</td><td>Your algebraic working</td></tr><tr><td>Signs near an asymptote</td><td>A complete exam explanation</td></tr></tbody></table></article>
      </section>
      <aside class="sticky-note" style="margin-top:24px"><strong>Tion’s calculator rule</strong><p>Paper answer first, calculator check second. If they disagree, check brackets, RAD mode, signs and the value you substituted before changing your mathematics.</p></aside>
      <p class="muted optional-content" style="font-size:.78rem">Key sequences cross-checked against CASIO User’s Guide RJA532417-001V01. Open the <a href="https://www.casio.com/content/dam/casio/global/support/manuals/calculators/pdf/004-en/f/fx-82_85_350EX_EN.pdf" target="_blank" rel="noreferrer">official fx-82EX guide</a>. Use the on-screen Table and Angle Unit labels if a regional menu differs.</p>`;
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
      state.dashboard = true;
      renderCourseDashboard();
      window.scrollTo(0, 0);
      toast("Study rooms unlocked. Welcome, Hezron!");
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
    const derivativeSection = document.querySelector(".derivative-deck");
    if (derivativeSection) derivativeSection.hidden = Boolean(query);
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

    if (action === "dashboard") {
      renderCourseDashboard();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (action === "open-course" || action === "continue-course") {
      const course = trigger.dataset.course || "calculus";
      localStorage.setItem(LAST_COURSE_KEY, course);
      if (course === "anthropology") {
        window.location.href = "anthropology/";
      } else if (course === "discrete") {
        window.location.href = "discrete/";
      } else if (course === "computing") {
        window.location.href = "computing/";
      } else {
        history.replaceState(null, "", `${window.location.pathname}?course=calculus`);
        state.dashboard = false;
        renderShell();
        window.scrollTo(0, 0);
      }
      return;
    }

    if (action === "logout") {
      sessionStorage.removeItem("tion-auth");
      state.authenticated = false;
      history.replaceState(null, "", window.location.pathname);
      renderLogin();
      return;
    }

    if (action === "toggle-mode") {
      state.tired = !state.tired;
      if (state.tired && state.derivativeFilter === "Inverse hyperbolic") state.derivativeFilter = "Core trig";
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

    if (action === "derivative-filter") {
      state.derivativeFilter = trigger.dataset.family;
      renderShell();
      document.querySelector(".derivative-deck")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (action === "reveal-derivative") {
      const answer = trigger.nextElementSibling;
      if (!answer) return;
      const willShow = answer.hidden;
      answer.hidden = !willShow;
      trigger.textContent = willShow ? "Hide answer" : "Reveal answer";
      trigger.setAttribute("aria-expanded", String(willShow));
      return;
    }

    if (action === "show-derivatives" || action === "hide-derivatives") {
      const show = action === "show-derivatives";
      document.querySelectorAll("[data-derivative-card]").forEach(card => {
        const answer = card.querySelector(".derivative-answer");
        const button = card.querySelector(".derivative-reveal");
        if (!answer || !button) return;
        answer.hidden = !show;
        button.textContent = show ? "Hide answer" : "Reveal answer";
        button.setAttribute("aria-expanded", String(show));
      });
      return;
    }

    if (action === "paper-tab") {
      state.selectedPaper = trigger.dataset.paper;
      renderShell();
      document.querySelector(".paper-cover")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (action === "toggle-paper-solution") {
      const panel = document.querySelector(`[data-paper-solution="${trigger.dataset.paperQuestion}"]`);
      if (!panel) return;
      const open = panel.classList.toggle("open");
      trigger.textContent = open ? "Hide solution" : "Show exam-room solution";
      trigger.setAttribute("aria-expanded", String(open));
      return;
    }

    if (action === "toggle-all-paper") {
      const panels = [...document.querySelectorAll("[data-paper-solution]")];
      const shouldOpen = panels.some(panel => !panel.classList.contains("open"));
      panels.forEach(panel => panel.classList.toggle("open", shouldOpen));
      document.querySelectorAll(".paper-answer-button").forEach(button => {
        button.textContent = shouldOpen ? "Hide solution" : "Show exam-room solution";
        button.setAttribute("aria-expanded", String(shouldOpen));
      });
      trigger.textContent = shouldOpen ? "Hide all solutions" : "Reveal all solutions";
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

  document.addEventListener("click", event => {
    const courseLink = event.target.closest("[data-course-link]");
    if (courseLink) localStorage.setItem(LAST_COURSE_KEY, courseLink.dataset.courseLink);
  });

  if (state.authenticated) {
    if (state.dashboard) renderCourseDashboard();
    else renderShell();
  }
  else renderLogin();
})();

(() => {
  'use strict';

  const DATA = window.COMPUTING_DATA;
  const STORE_KEY = 'computing-fundamentals-state-v1';
  const DEFAULT_STATE = {
    completed: [],
    attempted: [],
    examChecks: [],
    cardMastered: [],
    tired: false
  };
  let state = loadState();
  let activeDiagram = DATA.diagrams[0].id;
  let memoryModule = 'all';
  let memoryDeck = DATA.flashcards.slice();
  let memoryIndex = 0;
  let practiceModule = 'all';
  let practiceDifficulty = 'all';

  const main = document.getElementById('main-content');
  const moduleNav = document.getElementById('module-nav');
  const sidebar = document.getElementById('sidebar');
  const scrim = document.getElementById('sidebar-scrim');
  const searchDialog = document.getElementById('search-dialog');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const menuButton = document.getElementById('menu-button');
  const sidebarCloseButton = document.getElementById('sidebar-close');
  const mobileSidebarQuery = window.matchMedia('(max-width: 880px)');

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
      const validModuleIds = new Set(DATA.modules.map((module) => module.id));
      const validCardIds = new Set(DATA.flashcards.map((card) => card.id));
      return {
        completed: unique(Array.isArray(saved.completed) ? saved.completed.filter((id) => validModuleIds.has(id)) : []),
        attempted: unique(Array.isArray(saved.attempted) ? saved.attempted.filter((index) => Number.isInteger(index) && index >= 0 && index < DATA.questions.length) : []),
        examChecks: unique(Array.isArray(saved.examChecks) ? saved.examChecks.filter((index) => Number.isInteger(index) && index >= 0 && index < 8) : []),
        cardMastered: unique(Array.isArray(saved.cardMastered) ? saved.cardMastered.filter((id) => validCardIds.has(id)) : []),
        tired: saved.tired === true
      };
    } catch {
      return {
        completed: DEFAULT_STATE.completed.slice(),
        attempted: DEFAULT_STATE.attempted.slice(),
        examChecks: DEFAULT_STATE.examChecks.slice(),
        cardMastered: DEFAULT_STATE.cardMastered.slice(),
        tired: DEFAULT_STATE.tired
      };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch {
      toast('Progress changed for this visit, but this browser could not save it.');
    }
    updateProgress();
  }

  function escapeHTML(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
  }

  function stripHTML(value) {
    const box = document.createElement('div');
    box.innerHTML = value || '';
    return box.textContent || '';
  }

  function unique(values) {
    return Array.from(new Set(values));
  }

  function currentRoute() {
    return location.hash.replace(/^#\/?/, '') || 'home';
  }

  function canonicalRoute(route) {
    const pages = ['home', 'diagrams', 'practice', 'labs', 'memory', 'exam', 'sources'];
    if (pages.includes(route)) return route;
    const lesson = route.match(/^lesson\/([^/]+)$/);
    return lesson && moduleById(lesson[1]) ? route : 'home';
  }

  function go(route) {
    const target = '#/' + route;
    if (location.hash === target) render();
    else location.hash = target;
    closeSidebar();
  }

  function moduleById(id) {
    return DATA.modules.find((module) => module.id === id);
  }

  function moduleName(id) {
    const module = moduleById(id);
    return module ? module.navTitle : id;
  }

  function setPageContext(kicker, title) {
    document.getElementById('page-kicker').textContent = kicker;
    document.getElementById('page-title').textContent = title;
    document.title = title + ' · Computing Fundamentals';
  }

  function buildNavigation() {
    moduleNav.innerHTML = DATA.modules.map((module) => {
      const done = state.completed.includes(module.id);
      return '<button class="nav-item module-nav-item" data-route="lesson/' + module.id + '">' +
        '<span class="module-index ' + (done ? 'done' : '') + '">' + (done ? '✓' : String(module.number).padStart(2, '0')) + '</span>' +
        '<b>' + escapeHTML(module.navTitle) + '</b></button>';
    }).join('');
    document.getElementById('question-count').textContent = DATA.questions.length;
    const diagramBadge = document.querySelector('[data-route="diagrams"] em');
    if (diagramBadge) diagramBadge.textContent = DATA.diagrams.length;
  }

  function updateProgress() {
    const count = state.completed.filter((id) => moduleById(id)).length;
    const percent = Math.round((count / DATA.modules.length) * 100);
    document.getElementById('progress-label').textContent = percent + '%';
    document.getElementById('progress-bar').style.width = percent + '%';
    document.getElementById('progress-detail').textContent = count + ' of ' + DATA.modules.length + ' modules mastered';
    const progressTrack = document.getElementById('progress-track');
    progressTrack.setAttribute('aria-valuenow', String(percent));
    progressTrack.setAttribute('aria-valuetext', count + ' of ' + DATA.modules.length + ' modules mastered');
    buildNavigation();
  }

  function setActiveNavigation(route) {
    document.querySelectorAll('.nav-item').forEach((button) => {
      const target = button.dataset.route || '';
      const active = target === route || (route.startsWith('lesson/') && target === route);
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
  }

  function pageIntro(kicker, title, copy, actions) {
    return '<header class="page-intro"><div><span class="kicker">' + escapeHTML(kicker) + '</span><h1>' +
      escapeHTML(title) + '</h1><p>' + escapeHTML(copy) + '</p></div>' + (actions || '') + '</header>';
  }

  function renderHome() {
    setPageContext('CNS / ICS 1101', 'Mission control');
    const completed = state.completed.filter((id) => moduleById(id)).length;
    const next = DATA.modules.find((module) => !state.completed.includes(module.id)) || DATA.modules[0];
    const avatar = window.StudyTools && window.StudyTools.avatarMarkup
      ? window.StudyTools.avatarMarkup('woof', 'celebrate', 'Woof Woof')
      : '🐕';
    main.innerHTML = '<div class="page-content">' +
      '<section class="hero"><div><span class="kicker">Computing Fundamentals · complete study room</span>' +
      '<h1>See the whole system. Then troubleshoot it.</h1>' +
      '<p>Deep notes built from every supplied deck and handout, corrected against current references, with diagrams, practical labs, mnemonics and exam-room answers.</p>' +
      '<div class="button-row"><button class="secondary-button" data-route="lesson/' + next.id + '">Continue: ' + escapeHTML(next.navTitle) + ' →</button>' +
      '<button class="ghost-button hero-ghost" data-route="practice">Try an application question</button></div></div>' +
      '<aside class="hero-sticker"><div class="hero-dog">' + avatar + '</div><span>Woof Woof says</span><strong>Do not memorise a list you cannot use.</strong>' +
      '<p>After each topic: explain it simply, sketch it, then solve a real fault or decision.</p></aside></section>' +
      '<section class="dashboard-stats">' +
      statCard('16', 'deep modules', 'From bits to cloud') +
      statCard(String(DATA.diagrams.length), 'visual maps', 'Labelled and explained') +
      statCard(String(DATA.questions.length), 'worked questions', 'With marking points') +
      statCard(String(DATA.flashcards.length), 'memory cards', 'Active recall deck') +
      '</section>' +
      '<section><div class="section-heading"><div><span class="kicker">Course map</span><h2>Learn in layers</h2></div>' +
      '<p>' + completed + ' mastered. Start with the source order, or jump to the system you need.</p></div>' +
      '<div class="module-grid">' + DATA.modules.map(moduleCard).join('') + '</div></section>' +
      '<section class="smart-route">' +
      '<article><strong>Low energy?</strong><p>Switch on tired mode. You keep only must-read anchors, one example and recall.</p></article>' +
      '<article><strong>Need understanding?</strong><p>Open Visual diagrams, redraw one from memory, then explain every arrow.</p></article>' +
      '<article><strong>Exam soon?</strong><p>Use Application questions first, mark against the solution, then repair weak modules.</p></article>' +
      '</section></div>';
  }

  function statCard(number, title, note) {
    return '<article class="stat-card"><span class="stat-icon">' + number + '</span><div><strong>' +
      escapeHTML(title) + '</strong><small>' + escapeHTML(note) + '</small></div></article>';
  }

  function moduleCard(module) {
    const done = state.completed.includes(module.id);
    return '<button class="module-card ' + (done ? 'complete' : '') + '" data-route="lesson/' + module.id + '">' +
      '<div class="module-top"><span class="module-number">' + String(module.number).padStart(2, '0') + '</span>' +
      '<span class="status-chip">' + (done ? 'mastered ✓' : module.minutes + ' min') + '</span></div>' +
      '<h3>' + escapeHTML(module.title) + '</h3><p>' + escapeHTML(module.summary) + '</p>' +
      '<small>' + module.sections.length + ' explanations · ' + module.worked.length + ' worked scenarios →</small></button>';
  }

  function priorityLabel(priority) {
    if (priority === 'must') return 'Must read';
    if (priority === 'useful') return 'Useful depth';
    return 'Deep dive · optional first pass';
  }

  function renderLesson(id) {
    const module = moduleById(id);
    if (!module) {
      go('home');
      return;
    }
    setPageContext('Module ' + String(module.number).padStart(2, '0'), module.navTitle);
    const done = state.completed.includes(module.id);
    const previous = DATA.modules[module.number - 2];
    const next = DATA.modules[module.number];
    main.innerHTML = '<article class="page-content lesson-page">' +
      '<header class="lesson-hero"><div><span class="kicker">Module ' + String(module.number).padStart(2, '0') + ' · about ' + module.minutes + ' min</span>' +
      '<h1>' + escapeHTML(module.title) + '</h1><p>' + escapeHTML(module.summary) + '</p></div>' +
      '<aside class="lesson-question"><span>Big question</span><strong>' + escapeHTML(module.question) + '</strong></aside></header>' +
      '<div class="tired-banner"><span>☾</span><div><strong>Tired mode is on.</strong><small> Only the exam anchors and first worked example remain.</small></div></div>' +
      '<section class="lesson-catch"><h2>Catch these first</h2><ul>' + module.catch.map((item) => '<li>' + escapeHTML(item) + '</li>').join('') + '</ul></section>' +
      '<aside class="mnemonic"><span class="mnemonic-code">' + escapeHTML(module.mnemonic.code) + '</span><div><strong>' +
      escapeHTML(module.mnemonic.line) + '</strong><p>' + escapeHTML(module.mnemonic.note) + '</p></div></aside>' +
      '<section class="note-stack">' + module.sections.map((section) => '<article class="note-card" data-priority="' + section.priority + '">' +
      '<span class="priority">' + priorityLabel(section.priority) + '</span><h2>' + escapeHTML(section.title) + '</h2>' + section.html + '</article>').join('') + '</section>' +
      '<section class="worked-grid">' + module.worked.map((item) => '<article class="worked-card"><span class="kicker">Exam-room method</span><h3>' +
      escapeHTML(item.title) + '</h3><p class="scenario">' + escapeHTML(item.prompt) + '</p><details><summary>Reveal a full answer</summary><ol>' +
      item.answer.map((step) => '<li>' + escapeHTML(step) + '</li>').join('') + '</ol></details></article>').join('') + '</section>' +
      '<section class="lesson-recall"><h2>Checkpoint: close the notes</h2><p>Say or write each answer from memory. Reopen the lesson only to check and repair what you missed.</p><ol>' +
      module.recall.map((item) => '<li>' + escapeHTML(item) + '</li>').join('') + '</ol></section>' +
      '<footer class="lesson-actions"><div>' +
      (previous ? '<button class="ghost-button" data-route="lesson/' + previous.id + '">← ' + escapeHTML(previous.navTitle) + '</button>' : '') +
      '</div><button class="master-button ' + (done ? 'done' : '') + '" data-master="' + module.id + '">' +
      (done ? 'Mastered ✓ · tap to undo' : 'Mark this module mastered') + '</button><div>' +
      (next ? '<button class="primary-button" data-route="lesson/' + next.id + '">' + escapeHTML(next.navTitle) + ' →</button>' : '<button class="primary-button" data-route="exam">Before the exam →</button>') +
      '</div></footer></article>';
  }

  function renderDiagrams() {
    setPageContext('Visual atlas', 'System diagrams');
    const active = DATA.diagrams.find((diagram) => diagram.id === activeDiagram) || DATA.diagrams[0];
    main.innerHTML = '<div class="page-content">' +
      pageIntro('Draw it to own it', 'Visual system maps', 'Click a map, study the arrows, then hide it and redraw it from memory.') +
      '<nav class="diagram-tabs" aria-label="Choose a diagram">' + DATA.diagrams.map((diagram) =>
        '<button class="chip ' + (diagram.id === active.id ? 'active' : '') + '" data-diagram="' + diagram.id + '" aria-pressed="' +
        String(diagram.id === active.id) + '">' + escapeHTML(diagram.title) + '</button>'
      ).join('') + '</nav><section class="diagram-stage" tabindex="0" aria-label="Scrollable diagram: ' + escapeHTML(active.title) + '">' +
      '<p class="diagram-swipe-hint">↔ Swipe sideways if this map is wider than your screen.</p>' + diagramHTML(active) + '</section></div>';
  }

  function diagramHTML(diagram) {
    let visual = '';
    const visualLabel = escapeHTML(diagram.title + ': ' + diagram.nodes.map((node) => node.label).join(' to '));
    if (diagram.type === 'flow') {
      visual = '<div class="flow-diagram" role="img" aria-label="' + visualLabel + '">' + diagram.nodes.map((node, index) =>
        '<div class="flow-node"><strong>' + escapeHTML(node.label) + '</strong><small>' + escapeHTML(node.note) + '</small></div>' +
        (index < diagram.nodes.length - 1 ? '<span class="flow-arrow">→</span>' : '')
      ).join('') + '</div>' + (diagram.id === 'iposc' ?
        '<div class="cycle-return" aria-hidden="true"><span>↶</span> Feedback, saved results and messages can become fresh input</div>' : '');
    } else if (diagram.type === 'hardware') {
      const validZones = ['centre', 'right', 'top', 'bottom', 'left', 'power', 'fan'];
      visual = '<div class="hardware-map" role="img" aria-label="' + visualLabel + '">' +
        '<span class="board-label">Motherboard paths / buses</span>' +
        '<svg class="hardware-wires" viewBox="0 0 760 390" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="wire-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z"/></marker></defs>' +
        '<path d="M380 185L595 150M380 185L380 76M380 185L380 296M380 185L183 191M380 185L596 296M380 185L175 300" marker-end="url(#wire-arrow)"/></svg>' +
        diagram.nodes.map((node) => {
          const zone = validZones.includes(node.zone) ? node.zone : 'centre';
          return '<div class="hardware-part part-' + zone + '"><strong>' + escapeHTML(node.label) + '</strong><small>' + escapeHTML(node.note) + '</small></div>';
        }).join('') + '</div>';
    } else if (diagram.type === 'stack' || diagram.type === 'pyramid') {
      visual = '<div class="layer-stack ' + diagram.type + '" role="img" aria-label="' + visualLabel + '">' + diagram.nodes.map((node, index) =>
        '<div class="layer"' + (diagram.type === 'pyramid' ? ' style="width:' + (56 + index * 10) + '%"' : '') + '><strong>' +
        escapeHTML(node.label) + '</strong><small>' + escapeHTML(node.note) + '</small></div>'
      ).join('') + '</div>';
    } else if (diagram.type === 'branch') {
      visual = '<div class="journey-path" role="img" aria-label="' + visualLabel + '">' + diagram.nodes.map((node, index) =>
        '<div class="journey-node ' + (index === 0 ? 'root' : '') + '"><span>' + String(index + 1).padStart(2, '0') + '</span><strong>' +
        escapeHTML(node.label) + '</strong><small>' + escapeHTML(node.note) + '</small></div>' +
        (index < diagram.nodes.length - 1 ? '<span class="journey-arrow" aria-hidden="true">→</span>' : '')
      ).join('') + '</div>';
    } else if (diagram.type === 'packet') {
      const n = diagram.nodes;
      visual = '<div class="packet-map" role="img" aria-label="' + visualLabel + '">' +
        '<div class="packet-lookup"><span class="packet-label">1 · resolve the destination</span>' + diagramNode(n[0]) +
        '<span class="packet-arrow" aria-hidden="true">→</span>' + diagramNode(n[1]) + '</div>' +
        '<div class="packet-trip"><div class="packet-endpoint">' + diagramNode(n[6]) + '<small>creates the request</small></div>' +
        '<span class="packet-arrow packet-arrow-both" aria-hidden="true">⇄</span><div class="packet-bundle"><span class="packet-label">2 · responsibilities travel together</span>' +
        '<div class="packet-layer transport">' + diagramNode(n[4]) + '</div><div class="packet-layer network">' + diagramNode(n[3]) + '</div>' +
        '<div class="packet-layer link">' + diagramNode(n[2]) + '</div></div><span class="packet-arrow packet-arrow-both" aria-hidden="true">⇄</span>' +
        '<div class="packet-endpoint">' + diagramNode(n[5]) + '<small>returns the response</small></div></div></div>';
    } else if (diagram.type === 'logic') {
      visual = '<div class="logic-map" role="img" aria-label="' + visualLabel + '"><section><span class="packet-label">Combinational · output depends on current input</span><div class="logic-grid">' +
        diagram.nodes.slice(0, 4).map((node) => logicNode(node)).join('') + '</div></section><section><span class="packet-label">Sequential · output also depends on stored state</span><div class="logic-grid sequential">' +
        diagram.nodes.slice(4).map((node) => logicNode(node)).join('') + '</div></section></div>';
    } else {
      visual = '<div class="diagram-key" role="img" aria-label="' + visualLabel + '">' + diagram.nodes.map((node) => '<div><strong>' + escapeHTML(node.label) +
        '</strong><br><small>' + escapeHTML(node.note) + '</small></div>').join('') + '</div>';
    }
    return '<span class="kicker">' + escapeHTML(diagram.tag) + '</span><h2>' + escapeHTML(diagram.title) + '</h2><p>' +
      escapeHTML(diagram.caption) + '</p>' + visual + '<aside class="diagram-check"><strong>Exam/use-it note:</strong> ' +
      escapeHTML(diagram.tip) + '</aside>';
  }

  function diagramNode(node) {
    return '<div class="diagram-node"><strong>' + escapeHTML(node.label) + '</strong><small>' + escapeHTML(node.note) + '</small></div>';
  }

  function logicNode(node) {
    const label = node.label;
    const line = '<path class="gate-line" d="M4 22H24M4 48H24M78 35H96"/>';
    let shape = '';
    if (label === 'AND') shape = '<path class="gate-shape" d="M24 10H50A25 25 0 0150 60H24Z"/>';
    if (label === 'OR' || label === 'XOR') shape = (label === 'XOR' ? '<path class="gate-shape" d="M19 10Q34 35 19 60"/>' : '') + '<path class="gate-shape" d="M24 10Q52 11 78 35Q52 59 24 60Q39 35 24 10Z"/>';
    if (label === 'NOT') shape = '<path class="gate-shape" d="M24 10L75 35L24 60Z"/><circle class="gate-shape" cx="81" cy="35" r="6"/>';
    if (['JK', 'D', 'T'].includes(label)) shape = '<rect class="gate-shape" x="25" y="8" width="55" height="54" rx="5"/><path class="gate-shape" d="M25 43L33 49L25 55"/><text class="gate-letter" x="52" y="31">' + label + '</text><text class="gate-q" x="67" y="54">Q</text>';
    return '<article class="logic-node"><svg viewBox="0 0 100 70" aria-hidden="true">' + line + shape + '</svg><strong>' + escapeHTML(label) + '</strong><small>' + escapeHTML(node.note) + '</small></article>';
  }

  function renderPractice() {
    setPageContext('Answer like the exam', 'Application questions');
    const filtered = DATA.questions.filter((question) =>
      (practiceModule === 'all' || question.module === practiceModule) &&
      (practiceDifficulty === 'all' || question.difficulty === practiceDifficulty)
    );
    main.innerHTML = '<div class="page-content">' +
      pageIntro('Attempt → reveal → repair', DATA.questions.length + ' worked application questions',
        'Write first, then reveal. Guided examples come from each lesson; marked questions are original, course-pack-aligned practice. Marks shown are practice suggestions, not official allocations.',
        '<button class="primary-button" data-random-question>Surprise me</button>') +
      '<div class="practice-layout"><aside class="practice-sidebar"><label>Topic<select id="practice-module"><option value="all">All modules</option>' +
      DATA.modules.map((module) => '<option value="' + module.id + '" ' + (practiceModule === module.id ? 'selected' : '') + '>' +
        escapeHTML(module.navTitle) + '</option>').join('') + '</select></label>' +
      '<label>Difficulty<select id="practice-difficulty"><option value="all">All levels</option>' +
      ['guided', 'warm', 'scenario', 'exam', 'challenge'].map((level) => '<option value="' + level + '" ' + (practiceDifficulty === level ? 'selected' : '') + '>' +
        level.charAt(0).toUpperCase() + level.slice(1) + '</option>').join('') + '</select></label>' +
      '<p role="status" aria-live="polite"><strong>' + filtered.length + '</strong> questions shown</p><small>Suggested order: explain the concept → apply it to the facts → justify the decision → verify.</small></aside>' +
      '<section class="question-list">' + (filtered.length ? filtered.map((question) => questionCard(question, DATA.questions.indexOf(question))).join('') :
        '<div class="empty-state"><h2>No match</h2><p>Try a different topic or difficulty.</p></div>') + '</section></div></div>';
  }

  function questionCard(question, index) {
    const done = state.attempted.includes(index);
    const label = question.title || ('Question ' + (index + 1));
    return '<article class="question-card" id="question-' + index + '"><div class="question-meta"><span>' +
      escapeHTML(moduleName(question.module)) + '</span><span class="' + (question.difficulty === 'challenge' ? 'difficulty-hard' : '') + '">' +
      escapeHTML(question.difficulty) + '</span><span>' + (question.marks == null ? 'guided drill' : 'suggested ' + question.marks + ' marks') + '</span><span>' + escapeHTML(question.origin) + '</span></div>' +
      '<h3>' + escapeHTML(label) + '</h3><p>' + escapeHTML(question.question) + '</p>' +
      '<button class="text-button" data-question-done="' + index + '">' + (done ? 'Attempted ✓' : 'I have attempted this') + '</button>' +
      '<details class="answer-card"><summary>Reveal marking points</summary><ol>' + question.answer.map((point) =>
        '<li>' + escapeHTML(point) + '</li>').join('') + '</ol><p class="mark-line">Write in complete, direct points. One developed point usually earns more than a vague list.</p></details></article>';
  }

  function renderLabs() {
    setPageContext('Practice lab', 'Learn by doing');
    main.innerHTML = '<div class="page-content">' +
      pageIntro('Interactive practice', 'The no-random-clicking lab', 'Change inputs, predict first, then use the tool to check your reasoning.') +
      '<section class="lab-grid">' +
      '<article class="lab-card"><span class="kicker">Lab 01 · number bases</span><h2>Base converter</h2><p>Enter a whole number and state its current base.</p>' +
      '<div class="lab-controls"><input id="base-value" value="173" aria-label="Number"><select id="base-from" aria-label="Current number base"><option value="10">Decimal</option><option value="2">Binary</option><option value="8">Octal</option><option value="16">Hex</option></select><button data-lab="convert">Convert</button></div><div class="lab-result" id="base-result" role="status" aria-live="polite" aria-atomic="true">Predict it first.</div></article>' +
      '<article class="lab-card"><span class="kicker">Lab 02 · logic</span><h2>Gate bench</h2><p>Choose two bits and a gate. Say the output before running it.</p>' +
      '<div class="lab-controls"><select id="gate-a" aria-label="Logic input A"><option>0</option><option>1</option></select><select id="gate-b" aria-label="Logic input B"><option>0</option><option>1</option></select><select id="gate-type" aria-label="Logic gate"><option>AND</option><option>OR</option><option>XOR</option><option>NAND</option><option>NOR</option><option>XNOR</option></select><button data-lab="gate">Run</button></div><div class="lab-result" id="gate-result" role="status" aria-live="polite" aria-atomic="true">A ? B = ?</div></article>' +
      '<article class="lab-card wide"><span class="kicker">Lab 03 · networks</span><h2>Fault detective</h2><p id="network-case">A PC can ping 8.8.8.8, but names such as example.org fail.</p>' +
      '<div class="trouble-options"><button data-network-answer="wrong">Replace the monitor</button><button data-network-answer="right">Test DNS with nslookup and inspect the configured resolver</button><button data-network-answer="wrong">Give the user administrator rights</button></div><div class="lab-result" id="network-result" role="status" aria-live="polite" aria-atomic="true">Choose the test that follows the evidence.</div></article>' +
      '<article class="lab-card"><span class="kicker">Lab 04 · service desk</span><h2>Priority matrix</h2><p>Combine business impact and urgency—not job title.</p>' +
      '<div class="lab-controls"><select id="impact" aria-label="Business impact"><option value="1">Low impact · one minor task</option><option value="2">Medium impact · team degraded</option><option value="3">High impact · service unavailable</option></select><select id="urgency" aria-label="Business urgency"><option value="1">Can wait</option><option value="2">Time-sensitive</option><option value="3">Immediate safety/operations</option></select><button data-lab="priority">Assess</button></div><div class="lab-result" id="priority-result" role="status" aria-live="polite" aria-atomic="true">Impact × urgency, then check SLA.</div></article>' +
      '<article class="lab-card"><span class="kicker">Lab 05 · IPv4</span><h2>Subnet inspector</h2><p>Enter dotted IPv4 and CIDR. This finds network, broadcast and host range.</p>' +
      '<div class="lab-controls"><input id="subnet-ip" value="190.240.33.91" aria-label="IPv4 address"><input id="subnet-prefix" type="number" min="1" max="30" value="19" aria-label="Prefix"><button data-lab="subnet">Inspect</button></div><div class="lab-result" id="subnet-result" role="status" aria-live="polite" aria-atomic="true">Predict the block boundary first.</div></article>' +
      '<article class="lab-card"><span class="kicker">Lab 06 · algorithms</span><h2>Trace-table builder</h2><p>Trace the sum from 1 to n and watch the state change.</p>' +
      '<div class="lab-controls"><input id="trace-n" type="number" min="1" max="20" value="4" aria-label="Trace upper limit"><button data-lab="trace">Trace</button></div><div class="lab-result" id="trace-result" role="status" aria-live="polite" aria-atomic="true">total starts at 0.</div></article>' +
      '<article class="lab-card"><span class="kicker">Lab 07 · upgrades</span><h2>Compatibility check</h2><p>An M.2 NVMe SSD is not detected in an older M.2 slot. Pick the strongest first check.</p>' +
      '<div class="trouble-options"><button data-hardware-answer="wrong">Buy a larger monitor</button><button data-hardware-answer="right">Verify the slot supports PCIe/NVMe, key, length, lane sharing and firmware</button><button data-hardware-answer="wrong">Defragment the SSD</button></div><div class="lab-result" id="hardware-result" role="status" aria-live="polite" aria-atomic="true">M.2 tells you shape—not automatically the path.</div></article>' +
      '<article class="lab-card"><span class="kicker">Lab 08 · security</span><h2>Phishing red flags</h2><p>“CEO: Send the payroll file now. Keep this secret. Sign in at microsoft-payroll-help.example.” Select all warning signs.</p>' +
      '<div class="checklist"><label><input type="checkbox" class="phish-flag" value="authority">Authority pressure</label><label><input type="checkbox" class="phish-flag" value="urgency">Urgency/secrecy</label><label><input type="checkbox" class="phish-flag" value="domain">Odd domain/link</label><label><input type="checkbox" class="phish-flag" value="data">Sensitive-data request</label></div><button class="primary-button" data-lab="phish">Check flags</button><div class="lab-result" id="phish-result" role="status" aria-live="polite" aria-atomic="true">Use STOP: Speed pressure, Threat/temptation, Odd sender, Private information.</div></article>' +
      '</section></div>';
  }

  function renderMemory() {
    setPageContext('Memory gym', 'Active recall');
    const deck = memoryDeck.filter((card) => memoryModule === 'all' || card.module === memoryModule);
    if (memoryIndex >= deck.length) memoryIndex = 0;
    const card = deck[memoryIndex] || DATA.flashcards[0];
    const mastered = state.cardMastered.includes(card.id);
    main.innerHTML = '<div class="page-content">' +
      pageIntro('Do not peek early', 'Teach Woof Woof from memory', 'Say the answer aloud. Flip only after committing, then rate honestly.') +
      '<div class="memory-filters"><select id="memory-module" aria-label="Filter memory cards by module"><option value="all">All ' + DATA.flashcards.length + ' cards</option>' +
      DATA.modules.map((module) => '<option value="' + module.id + '" ' + (memoryModule === module.id ? 'selected' : '') + '>' + escapeHTML(module.navTitle) + '</option>').join('') +
      '</select><button class="chip" data-memory-shuffle>Shuffle deck</button></div>' +
      '<button class="memory-card" id="memory-card" aria-label="Reveal recall-card answer" aria-expanded="false" aria-live="polite"><div class="memory-prompt"><span class="memory-topic">' +
      escapeHTML(moduleName(card.module)) + '</span><h2>' + escapeHTML(card.front) + '</h2><small>Tap to reveal</small></div>' +
      '<div class="memory-answer"><span class="memory-topic">Answer</span><h2>' + escapeHTML(card.back) + '</h2><small>Tap to hide</small></div></button>' +
      '<div class="memory-controls"><button class="ghost-button" data-memory-prev>← Previous</button><span class="memory-counter">' +
      (memoryIndex + 1) + ' / ' + deck.length + '</span><button class="ghost-button" data-card-master="' + card.id + '">' +
      (mastered ? 'Got it ✓' : 'I knew it') + '</button><button class="primary-button" data-memory-next>Next →</button></div>' +
      '<section class="recall-plan"><article><b>Now</b><p>Attempt before reveal.</p></article><article><b>Tomorrow</b><p>Repeat missed cards.</p></article>' +
      '<article><b>3 days</b><p>Mix topics and examples.</p></article><article><b>7 days</b><p>Answer under time pressure.</p></article></section></div>';
  }

  function renderExam() {
    setPageContext('Final checkpoint', 'Before the exam');
    const checkItems = [
      'I can redraw IPOSC, the boot path and the OSI stack.',
      'I can explain concepts, not only expand abbreviations.',
      'I can convert bases and show working without a tool.',
      'I can diagnose from scope and evidence, one change at a time.',
      'I can compare technologies using a criterion and a trade-off.',
      'I answer scenarios as action → reason → verification.',
      'I know which slide facts are historical or corrected.',
      'I have attempted questions closed-book and reviewed my errors.'
    ];
    main.innerHTML = '<div class="page-content">' +
      pageIntro('One-glance sheet', 'Read this before the exam', 'The high-yield map, common traps and answer method. This is revision—not a substitute for learning the modules.') +
      '<section class="exam-grid"><article class="exam-card full must-line"><span class="kicker">How to collect marks</span><h2>Define → explain mechanism → apply facts → justify → verify</h2>' +
      '<p>For “differentiate,” give both sides and the real distinction. For a scenario, use the clue before naming a fix. For calculations, show method and cross-check. For diagrams, label every box and arrow.</p></article>' +
      DATA.examSheet.map((group) => '<article class="exam-card"><h3>' + escapeHTML(group.title) + '</h3><ul>' +
        group.items.map((item) => '<li>' + escapeHTML(item) + '</li>').join('') + '</ul></article>').join('') +
      '<article class="exam-card full"><span class="kicker">Fast facts</span><h2>Numbers and sequences worth automatic recall</h2><div class="formula-strip">' +
      ['F → D → E → S', 'Octal 3 · Hex 4', '2^r ≥ m+r+1', 'DORA', 'HTTP 80 · HTTPS 443', 'DNS 53 · SSH 22', '3–2–1 backup', 'JK: 00 hold · 01 reset · 10 set · 11 toggle'].map((fact) => '<span>' + escapeHTML(fact) + '</span>').join('') +
      '</div></article><article class="exam-card full warning-box"><h3>Source traps corrected here</h3><ul>' +
      DATA.sourceCorrections.map((item) => '<li>' + escapeHTML(item) + '</li>').join('') + '</ul></article>' +
      '<article class="exam-card"><span class="kicker">Assessment map</span><h3>Official outline weighting</h3><ul><li>Main exam: 60%</li><li>Labs: 10%</li><li>Assignments: 10%</li><li>CAT 1: 10%</li><li>CAT 2: 10%</li></ul></article>' +
      '<article class="exam-card"><span class="kicker">Project brief</span><h3>Computer Literacy Centre</h3><ul><li>Word proposal for a sustainable community centre</li><li>Formula-driven Excel budget</li><li>Clear PowerPoint presentation</li><li>Strict one-page robotics and AI research summary</li><li>Confirm the unclear final rubric allocation with the lecturer</li></ul></article>' +
      '<article class="exam-card full checklist"><span class="kicker">Final honesty check</span><h2>Can I do this without the page open?</h2>' +
      checkItems.map((item, index) => '<label><input type="checkbox" data-exam-check="' + index + '" ' +
        (state.examChecks.includes(index) ? 'checked' : '') + '><span>' + escapeHTML(item) + '</span></label>').join('') + '</article></section></div>';
  }

  function renderSources() {
    setPageContext('Coverage audit', 'Sources and corrections');
    main.innerHTML = '<div class="page-content">' +
      pageIntro('Traceable study notes', 'What was read—and what was corrected', 'Every supplied source was inspected. Duplicate, unsafe and dated items are labelled instead of silently copied.') +
      '<aside class="warning-box"><strong>Safety and copyright:</strong> the old Excel self-extractor was inspected as metadata but never executed. The two 642-page textbook PDFs are identical and have doubtful redistribution provenance, so this site derives concepts without publishing the books.</aside>' +
      '<div class="source-scroll" tabindex="0" role="region" aria-label="Supplied source coverage table"><table class="source-table"><thead><tr><th>Supplied source</th><th>Format</th><th>Used for</th><th>Status</th></tr></thead><tbody>' +
      DATA.sources.map((source) => '<tr><td><strong>' + escapeHTML(source.name) + '</strong></td><td>' + escapeHTML(source.type) +
        '</td><td>' + escapeHTML(source.coverage) + '</td><td><span class="source-status ' +
        (/excluded|corrected/.test(source.status) ? 'source-warning' : '') + '">' + escapeHTML(source.status) + '</span></td></tr>').join('') +
      '</tbody></table></div><section class="exam-card full web-sources"><span class="kicker">Current reference checks</span><h2>Further reading used to modernise the notes</h2><ul>' +
      DATA.webSources.map((source) => '<li><a href="' + escapeHTML(source.url) + '" target="_blank" rel="noopener">' +
        escapeHTML(source.title) + '</a> · ' + escapeHTML(source.org) + ' — ' + escapeHTML(source.use) + '</li>').join('') +
      '</ul><p><small>Links were selected for authoritative definitions and current behaviour. Web pages can change; the supplied course materials remain the basis for lecturer-specific scope.</small></p></section></div>';
  }

  function render() {
    const requestedRoute = currentRoute();
    const route = canonicalRoute(requestedRoute);
    if (route !== requestedRoute) history.replaceState(null, '', '#/' + route);
    document.body.classList.toggle('tired-mode', Boolean(state.tired));
    const tiredButton = document.getElementById('tired-button');
    tiredButton.classList.toggle('active', Boolean(state.tired));
    tiredButton.setAttribute('aria-pressed', String(Boolean(state.tired)));
    tiredButton.querySelector('b').textContent = state.tired ? 'Tired mode' : 'Full notes';
    if (route === 'home') renderHome();
    else if (route.startsWith('lesson/')) renderLesson(route.split('/')[1]);
    else if (route === 'diagrams') renderDiagrams();
    else if (route === 'practice') renderPractice();
    else if (route === 'labs') renderLabs();
    else if (route === 'memory') renderMemory();
    else if (route === 'exam') renderExam();
    else if (route === 'sources') renderSources();
    else renderHome();
    setActiveNavigation(route);
    main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function toast(message) {
    const element = document.getElementById('toast');
    element.textContent = message;
    element.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => element.classList.remove('show'), 2300);
  }

  function react(mood, message) {
    if (!window.StudyTools) return;
    window.StudyTools.react(mood, message);
    window.setTimeout(() => {
      const speech = document.querySelector('.buddy-speech');
      const currentMessage = speech?.querySelector('.buddy-message')?.textContent;
      if (currentMessage === message) speech.classList.remove('show');
    }, 4800);
  }

  function syncSidebarAccessibility() {
    const open = sidebar.classList.contains('open');
    if (mobileSidebarQuery.matches) {
      menuButton.setAttribute('aria-expanded', String(open));
      sidebar.setAttribute('aria-hidden', String(!open));
      if (open) sidebar.removeAttribute('inert');
      else sidebar.setAttribute('inert', '');
    } else {
      menuButton.setAttribute('aria-expanded', 'false');
      sidebar.removeAttribute('aria-hidden');
      sidebar.removeAttribute('inert');
    }
  }

  function openSidebar() {
    sidebar.classList.add('open');
    scrim.classList.add('show');
    syncSidebarAccessibility();
    requestAnimationFrame(() => sidebarCloseButton.focus());
  }

  function closeSidebar(returnFocus = false) {
    sidebar.classList.remove('open');
    scrim.classList.remove('show');
    syncSidebarAccessibility();
    if (returnFocus && mobileSidebarQuery.matches) menuButton.focus();
  }

  function openSearch() {
    closeSidebar();
    if (!searchDialog.open) searchDialog.showModal();
    searchInput.value = '';
    renderSearch('');
    setTimeout(() => searchInput.focus(), 30);
  }

  function renderSearch(query) {
    const needle = query.trim().toLowerCase();
    if (!needle) {
      searchResults.innerHTML = '<div class="empty-state"><strong>Search every explanation, question and memory card.</strong><p>Try BIOS, DNS, M.2, parity, phishing or compiler.</p></div>';
      return;
    }
    const results = [];
    DATA.modules.forEach((module) => {
      const full = [module.title, module.summary, module.question, module.catch.join(' '), module.sections.map((section) => stripHTML(section.html)).join(' ')].join(' ');
      if (full.toLowerCase().includes(needle)) results.push({ title: module.title, note: 'Module ' + module.number + ' · ' + module.summary, route: 'lesson/' + module.id });
    });
    DATA.questions.forEach((question, index) => {
      if ((question.question + ' ' + question.answer.join(' ')).toLowerCase().includes(needle)) {
        results.push({ title: question.title || ('Application question ' + (index + 1)), note: moduleName(question.module) + ' · ' + question.question, route: 'practice', anchor: 'question-' + index });
      }
    });
    DATA.flashcards.forEach((card) => {
      if ((card.front + ' ' + card.back).toLowerCase().includes(needle)) {
        results.push({ title: card.front, note: moduleName(card.module) + ' memory card · ' + card.back, route: 'memory', memory: card.id });
      }
    });
    searchResults.innerHTML = results.length ? results.slice(0, 30).map((result) =>
      '<button type="button" class="search-result" data-search-route="' + result.route + '" data-search-anchor="' + (result.anchor || '') +
      '" data-search-memory="' + (result.memory || '') + '"><strong>' + escapeHTML(result.title) + '</strong><small>' +
      escapeHTML(result.note) + '</small></button>').join('') :
      '<div class="empty-state"><strong>No result for “' + escapeHTML(query) + '”.</strong><p>Try a shorter concept or acronym.</p></div>';
  }

  function handleLab(action) {
    if (action === 'convert') {
      const raw = document.getElementById('base-value').value.trim().replace(/\s+/g, '');
      const base = Number(document.getElementById('base-from').value);
      const patterns = { 2: /^[01]+$/, 8: /^[0-7]+$/, 10: /^\d+$/, 16: /^[0-9a-f]+$/i };
      const output = document.getElementById('base-result');
      if (!raw || !patterns[base].test(raw)) {
        output.innerHTML = '<strong>Invalid digit for base ' + base + '.</strong> Check the allowed symbols.';
        react('horrified', 'That digit cannot live in that base. Check the allowed range.');
        return;
      }
      const decimal = parseInt(raw, base);
      if (!Number.isSafeInteger(decimal)) {
        output.innerHTML = '<strong>That value is too large for this small trainer.</strong>';
        return;
      }
      output.innerHTML = '<strong>' + escapeHTML(raw.toUpperCase()) + '<sub>' + base + '</sub></strong>' +
        'Binary: ' + decimal.toString(2) + '<br>Octal: ' + decimal.toString(8) + '<br>Decimal: ' + decimal +
        '<br>Hex: ' + decimal.toString(16).toUpperCase();
      react('celebrate', 'Clean conversion. Now cross-check it with place values or grouping.');
    }
    if (action === 'gate') {
      const a = Number(document.getElementById('gate-a').value);
      const b = Number(document.getElementById('gate-b').value);
      const gate = document.getElementById('gate-type').value;
      const basic = { AND: a & b, OR: a | b, XOR: a ^ b };
      const result = gate.startsWith('N') || gate === 'XNOR'
        ? 1 - basic[gate === 'NAND' ? 'AND' : gate === 'NOR' ? 'OR' : 'XOR']
        : basic[gate];
      document.getElementById('gate-result').innerHTML = '<strong>' + a + ' ' + gate + ' ' + b + ' = ' + result + '</strong>' +
        (gate === 'XOR' ? 'XOR is 1 when inputs differ.' : gate === 'XNOR' ? 'XNOR is 1 when inputs match.' : 'Build the four-row truth table next.');
    }
    if (action === 'priority') {
      const impact = Number(document.getElementById('impact').value);
      const urgency = Number(document.getElementById('urgency').value);
      const score = impact * urgency;
      const level = score >= 7 ? 'P1 · critical' : score >= 4 ? 'P2 · high' : score >= 2 ? 'P3 · normal' : 'P4 · low';
      document.getElementById('priority-result').innerHTML = '<strong>' + level + '</strong>Score ' + score + '/9. Confirm SLA, safety, dependencies and local policy before assigning the final priority.';
    }
    if (action === 'subnet') runSubnetLab();
    if (action === 'trace') {
      const n = Math.max(1, Math.min(20, Number(document.getElementById('trace-n').value) || 1));
      let total = 0;
      const rows = [];
      for (let value = 1; value <= n; value += 1) {
        total += value;
        rows.push('n=' + value + ' → total=' + total);
      }
      document.getElementById('trace-result').innerHTML = '<strong>Trace</strong>' + rows.join('<br>') + '<br><b>Output: ' + total + '</b>';
    }
    if (action === 'phish') {
      const chosen = document.querySelectorAll('.phish-flag:checked').length;
      document.getElementById('phish-result').innerHTML = chosen === 4
        ? '<strong>All four spotted ✓</strong>Do not use the link. Verify through a known channel and report it.'
        : '<strong>' + chosen + '/4 spotted.</strong>Look again for authority pressure, urgency/secrecy, the odd domain and the sensitive-data request.';
      react(chosen === 4 ? 'celebrate' : 'thinking', chosen === 4 ? 'You caught every red flag. Zero panic-clicking.' : 'There is another red flag hiding in plain sight.');
    }
  }

  function runSubnetLab() {
    const parts = document.getElementById('subnet-ip').value.trim().split('.').map(Number);
    const prefix = Number(document.getElementById('subnet-prefix').value);
    const output = document.getElementById('subnet-result');
    if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255) || prefix < 1 || prefix > 30) {
      output.innerHTML = '<strong>Use four octets (0–255) and a prefix from /1 to /30.</strong>';
      return;
    }
    const ip = (((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3]) >>> 0;
    const mask = (0xffffffff << (32 - prefix)) >>> 0;
    const network = (ip & mask) >>> 0;
    const broadcast = (network | (~mask >>> 0)) >>> 0;
    const dotted = (number) => [24, 16, 8, 0].map((shift) => (number >>> shift) & 255).join('.');
    output.innerHTML = '<strong>' + dotted(ip) + '/' + prefix + '</strong>Mask: ' + dotted(mask) + '<br>Network: ' + dotted(network) +
      '<br>Broadcast: ' + dotted(broadcast) + '<br>Usable: ' + dotted(network + 1) + ' – ' + dotted(broadcast - 1);
  }

  function handleDocumentClick(event) {
    const routeButton = event.target.closest('[data-route]');
    if (routeButton) {
      go(routeButton.dataset.route);
      return;
    }
    const diagramButton = event.target.closest('[data-diagram]');
    if (diagramButton) {
      activeDiagram = diagramButton.dataset.diagram;
      renderDiagrams();
      requestAnimationFrame(() => {
        const activeButton = Array.from(document.querySelectorAll('[data-diagram]')).find((button) => button.dataset.diagram === activeDiagram);
        activeButton?.focus();
      });
      return;
    }
    const masterButton = event.target.closest('[data-master]');
    if (masterButton) {
      const id = masterButton.dataset.master;
      state.completed = state.completed.includes(id) ? state.completed.filter((item) => item !== id) : state.completed.concat(id);
      saveState();
      react(state.completed.includes(id) ? 'celebrate' : 'sad', state.completed.includes(id)
        ? 'Module mastered! Tiny victory lap, then keep it moving.'
        : 'No stress. Mastery removed so you can rebuild it honestly.');
      render();
      return;
    }
    const attempted = event.target.closest('[data-question-done]');
    if (attempted) {
      const index = Number(attempted.dataset.questionDone);
      state.attempted = state.attempted.includes(index) ? state.attempted.filter((item) => item !== index) : state.attempted.concat(index);
      saveState();
      attempted.textContent = state.attempted.includes(index) ? 'Attempted ✓' : 'I have attempted this';
      return;
    }
    if (event.target.closest('[data-random-question]')) {
      const index = Math.floor(Math.random() * DATA.questions.length);
      practiceModule = 'all';
      practiceDifficulty = 'all';
      renderPractice();
      setTimeout(() => document.getElementById('question-' + index)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 30);
      return;
    }
    if (event.target.closest('#memory-card')) {
      const card = document.getElementById('memory-card');
      const flipped = card.classList.toggle('flipped');
      card.setAttribute('aria-expanded', String(flipped));
      card.setAttribute('aria-label', flipped ? 'Hide recall-card answer' : 'Reveal recall-card answer');
      return;
    }
    if (event.target.closest('[data-memory-prev]')) {
      const deck = memoryDeck.filter((card) => memoryModule === 'all' || card.module === memoryModule);
      memoryIndex = (memoryIndex - 1 + deck.length) % deck.length;
      renderMemory();
      return;
    }
    if (event.target.closest('[data-memory-next]')) {
      const deck = memoryDeck.filter((card) => memoryModule === 'all' || card.module === memoryModule);
      memoryIndex = (memoryIndex + 1) % deck.length;
      renderMemory();
      return;
    }
    if (event.target.closest('[data-memory-shuffle]')) {
      memoryDeck = memoryDeck.slice().sort(() => Math.random() - 0.5);
      memoryIndex = 0;
      renderMemory();
      toast('Deck shuffled. No memorising the order.');
      return;
    }
    const cardMaster = event.target.closest('[data-card-master]');
    if (cardMaster) {
      const id = cardMaster.dataset.cardMaster;
      state.cardMastered = state.cardMastered.includes(id) ? state.cardMastered.filter((item) => item !== id) : state.cardMastered.concat(id);
      saveState();
      react(state.cardMastered.includes(id) ? 'celebrate' : 'thinking', state.cardMastered.includes(id) ? 'That card is in the bag.' : 'Back into the practice pile it goes.');
      renderMemory();
      return;
    }
    const labButton = event.target.closest('[data-lab]');
    if (labButton) {
      handleLab(labButton.dataset.lab);
      return;
    }
    const networkAnswer = event.target.closest('[data-network-answer]');
    if (networkAnswer) {
      const correct = networkAnswer.dataset.networkAnswer === 'right';
      document.getElementById('network-result').innerHTML = correct
        ? '<strong>Correct ✓</strong>IP reachability works while names fail, so DNS is the strongest next layer to test.'
        : '<strong>Not supported by the clue.</strong>The monitor/admin rights do not explain name-resolution failure.';
      react(correct ? 'celebrate' : 'horrified', correct ? 'Evidence-led. That is technician thinking.' : 'Plot twist: that fix has nothing to do with the symptom.');
      return;
    }
    const hardwareAnswer = event.target.closest('[data-hardware-answer]');
    if (hardwareAnswer) {
      const correct = hardwareAnswer.dataset.hardwareAnswer === 'right';
      document.getElementById('hardware-result').innerHTML = correct
        ? '<strong>Correct ✓</strong>M.2 is the shape. Check PCIe/NVMe support, key, length, firmware and shared lanes.'
        : '<strong>Nope.</strong>That action neither proves interface compatibility nor safely fixes detection.';
      react(correct ? 'celebrate' : 'sad', correct ? 'Shape versus protocol: you got the trap.' : 'That one would spend money without testing the cause.');
      return;
    }
    const searchResult = event.target.closest('[data-search-route]');
    if (searchResult) {
      const route = searchResult.dataset.searchRoute;
      const memoryId = searchResult.dataset.searchMemory;
      const anchor = searchResult.dataset.searchAnchor;
      if (route === 'practice' && anchor) {
        practiceModule = 'all';
        practiceDifficulty = 'all';
      }
      if (memoryId) {
        const card = DATA.flashcards.find((item) => item.id === memoryId);
        memoryModule = card ? card.module : 'all';
        memoryDeck = DATA.flashcards.slice();
        const deck = memoryDeck.filter((item) => item.module === memoryModule);
        memoryIndex = Math.max(0, deck.findIndex((item) => item.id === memoryId));
      }
      searchDialog.close();
      go(route);
      if (anchor) setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }), 80);
    }
  }

  function handleDocumentChange(event) {
    if (event.target.id === 'practice-module') {
      practiceModule = event.target.value;
      renderPractice();
      requestAnimationFrame(() => document.getElementById('practice-module')?.focus());
    }
    if (event.target.id === 'practice-difficulty') {
      practiceDifficulty = event.target.value;
      renderPractice();
      requestAnimationFrame(() => document.getElementById('practice-difficulty')?.focus());
    }
    if (event.target.id === 'memory-module') {
      memoryModule = event.target.value;
      memoryIndex = 0;
      renderMemory();
      requestAnimationFrame(() => document.getElementById('memory-module')?.focus());
    }
    if (event.target.matches('[data-exam-check]')) {
      const index = Number(event.target.dataset.examCheck);
      state.examChecks = event.target.checked ? unique(state.examChecks.concat(index)) : state.examChecks.filter((item) => item !== index);
      saveState();
      if (state.examChecks.length === 8) react('celebrate', 'Checklist cleared. Now trust the work and sleep properly.');
    }
  }

  function init() {
    buildNavigation();
    updateProgress();
    document.body.classList.toggle('tired-mode', Boolean(state.tired));
    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('change', handleDocumentChange);
    window.addEventListener('hashchange', render);
    document.getElementById('tired-button').addEventListener('click', () => {
      state.tired = !state.tired;
      saveState();
      render();
      react(state.tired ? 'thinking' : 'happy', state.tired ? 'Tired mode on. Main points only—zero guilt.' : 'Full notes restored. We have range again.');
    });
    document.getElementById('search-button').addEventListener('click', openSearch);
    searchInput.addEventListener('input', () => renderSearch(searchInput.value));
    menuButton.addEventListener('click', openSidebar);
    sidebarCloseButton.addEventListener('click', () => closeSidebar(true));
    scrim.addEventListener('click', () => closeSidebar(true));
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobileSidebarQuery.matches && sidebar.classList.contains('open')) {
        event.preventDefault();
        closeSidebar(true);
        return;
      }
      if (event.key === 'Tab' && mobileSidebarQuery.matches && sidebar.classList.contains('open')) {
        const focusable = Array.from(sidebar.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
      if (event.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) {
        event.preventDefault();
        openSearch();
      }
    });
    const handleSidebarBreakpoint = () => {
      sidebar.classList.remove('open');
      scrim.classList.remove('show');
      syncSidebarAccessibility();
    };
    if (mobileSidebarQuery.addEventListener) mobileSidebarQuery.addEventListener('change', handleSidebarBreakpoint);
    else mobileSidebarQuery.addListener(handleSidebarBreakpoint);
    syncSidebarAccessibility();
    if (!location.hash) location.hash = '#/home';
    else render();
  }

  init();
})();

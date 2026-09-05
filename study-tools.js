(() => {
  "use strict";

  const TIMER_KEY = "svnd3-focus-timer-v2";
  const MOTION_OK = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const profiles = {
    tion: {
      name: "Tion",
      label: "calculus co-pilot",
      colour: "#f47c4b",
      accent: "#c8f25d",
      dark: "#24483b",
      shape: "round",
      greetings: [
        "Hi Hezron — what do you wanna learn?",
        "One clean line at a time. I’m right here.",
        "Show the rule, then substitute. Easy marks first.",
        "Tiny progress still counts. Pick one example.",
        "If it looks scary, split it into smaller moves."
      ]
    },
    bianca: {
      name: "Bianca",
      label: "your thinking partner",
      colour: "#8f65d9",
      accent: "#ffcf70",
      dark: "#352b58",
      shape: "round",
      greetings: [
        "Hey Hezron — let’s turn a big idea into plain language.",
        "Ask ‘who am I?’ while you read. That is the heart of this course.",
        "Explain it without the textbook words. Then you truly own it.",
        "Philosophy is not vibes only — claim, reason, example, link.",
        "Let’s compare two ideas; contrasts are memory glue."
      ]
    },
    peter: {
      name: "Peter",
      label: "your proof buddy",
      colour: "#3f7bd9",
      accent: "#ffd45f",
      dark: "#17345f",
      shape: "square",
      greetings: [
        "Yo Hezron — definitions first, proof second.",
        "Test one tiny example before you trust the pattern.",
        "A truth table never argues back. Let’s build one.",
        "Name the rule you used; future-you will thank you.",
        "We can make this discrete, not mysterious."
      ]
    }
  };

  const breakMessages = [
    "Time’s up — save the brain cells and take five.",
    "Timer done. Hydration side quest unlocked.",
    "That focus block ate. Now let your brain breathe.",
    "Main-character study session complete. Rest a little.",
    "Clock says pause. Your notes will still be here.",
    "You cooked. Step away before the pan burns.",
    "Focus mission cleared — go stretch those shoulders.",
    "That’s a wrap for this round. Water first.",
    "Brain buffering time. Take a proper mini-break.",
    "Session complete. Look away from the screen for a bit.",
    "Big W. Stand up and reset your posture.",
    "Timer said enough, bestie. Rest is part of revision.",
    "You did the minutes. Now do the breathing.",
    "Focus streak secured. Take five with zero guilt.",
    "Academic weapon needs a recharge. Break time.",
    "Done and dusted. Go touch grass — briefly.",
    "The clock has spoken. Unclench your jaw.",
    "Round complete. Blink, breathe, beverage.",
    "That study sprint was clean. Recovery lap now.",
    "Your brain filed the notes. Give it processing time.",
    "Focus block complete — no sneaky ‘one more page’ yet.",
    "Nice work. Walk around and let the ideas settle.",
    "Timer complete. Shoulders down, deep breath.",
    "You showed up and stayed. That deserves a break.",
    "Study mode off for five. Human mode on.",
    "Knowledge downloaded. Let the system restart.",
    "You absolutely handled that block. Pause now.",
    "Stop the scroll, start the stretch. Timer done.",
    "The focus era pauses here. Come back fresh.",
    "Minutes completed. Snack negotiations may begin.",
    "That was productive fr. Rest before round two.",
    "Brain gains secured. Time for a tiny cooldown.",
    "You understood more than you did before. Break earned.",
    "No guilt, no grind: the timer says recover.",
    "Focus complete. Check on your water bottle.",
    "Study checkpoint reached. Save, stretch, breathe.",
    "You came, you read, you conquered. Pause.",
    "The neurons need a tea break. Respect the union.",
    "Solid work, Hezron. Give your eyes a holiday.",
    "That’s one more block in the bag. Reset time.",
    "Timer finished — your next task is doing nothing briefly.",
    "Focus points collected. Redeem them for a break.",
    "You cooked with evidence. Kitchen closed for five.",
    "End scene. Stretch before the sequel.",
    "Brain said ‘we got it’. Let it consolidate.",
    "Round over. Fresh air would absolutely slap.",
    "Good session. Do a lap, even if it’s around the room.",
    "Pause unlocked. You do not have to earn rest twice.",
    "Study sprint complete. Reset your eyes and spine.",
    "That was enough for now — and enough is valid.",
    "Clocked the work. Now clock out for a moment.",
    "Deep work done. Shallow breathing not allowed — inhale.",
    "Ate that session up. Leave a few crumbs for later.",
    "Time! Put the pen down like the exam invigilator said so.",
    "Memory needs space, not more stuffing. Take five.",
    "You made progress. Let that fact land.",
    "Focus timer complete. Wiggle every limb you own.",
    "This round is officially lore. Rest before the next chapter.",
    "Great work. Look at something farther away than this screen.",
    "Minutes done, mission done. Tiny celebration permitted.",
    "Study battery used wisely. Plug yourself into a break.",
    "Clean finish. Do not turn the break into doom-scrolling.",
    "The timer is proud of you. Weird, but true.",
    "Brain has left the group chat for five minutes.",
    "You survived the hard bit. Now recover on purpose.",
    "Session secured. Hydrate like it carries marks.",
    "Focus complete — stand tall, academic legend.",
    "Pause here. The next idea deserves a rested brain.",
    "Work submitted to memory. Processing may take a moment.",
    "One focused block beats an hour of staring. Well played.",
    "Timer done. Release the shoulders from their hostage situation.",
    "Revision round complete. Breathe in, breathe out.",
    "You did not zone out — you locked in. Now unlock.",
    "Great pace. A break keeps it sustainable.",
    "That was a certified study moment. Rest now.",
    "The grind can wait five minutes. Your neck cannot.",
    "Focus streak saved. Go refill your energy bar.",
    "Done! Let the information marinate.",
    "Study boss defeated. Break room is open.",
    "You gave this topic real attention. Give yourself some too.",
    "The timer rang. We listen to boundaries around here.",
    "Good work, no notes — actually, many notes. Take five.",
    "Your brain is not a browser with 90 tabs. Close a few.",
    "Round finished. Step away and return with range.",
    "Focus level: elite. Recovery level: now.",
    "Knowledge arc advanced. Intermission starts here.",
    "Pause, hydrate, then come back dangerous.",
    "The books can miss you for five minutes.",
    "Timer complete. Give those eyes a different view.",
    "Another block banked. Future Hezron says thanks.",
    "You stayed with it. That is the win. Rest.",
    "Brain fuel low-ish. Snack or stretch recommended.",
    "This is your official permission slip to pause.",
    "Study session complete. Cue the tiny victory dance.",
    "Locked in, learned things, lived to rest. Iconic.",
    "Time is up. Let your memory do its background work.",
    "That block was giving discipline. Now give balance.",
    "Done for this round. Return when your brain says yes.",
    "Focus goal met. No bonus marks for skipping the break.",
    "Bell rang. Bianca, Peter and Tion all vote for rest."
  ];

  const state = {
    profile: "tion",
    active: false,
    moodIndex: 0,
    greetingIndex: 0,
    panelOpen: false,
    timer: loadTimer(),
    tick: null,
    idle: null,
    cameo: null,
    lastActivity: Date.now()
  };

  let host;
  let finishOverlay;

  function loadTimer() {
    try {
      return { duration: 25 * 60, remaining: 25 * 60, running: false, endAt: null, ...JSON.parse(localStorage.getItem(TIMER_KEY) || "{}") };
    } catch {
      return { duration: 25 * 60, remaining: 25 * 60, running: false, endAt: null };
    }
  }

  function saveTimer() {
    localStorage.setItem(TIMER_KEY, JSON.stringify(state.timer));
  }

  function avatarSvg(profileName = state.profile, mood = "happy", label = "") {
    const p = profiles[profileName] || profiles.tion;
    const square = p.shape === "square";
    const accessory = profileName === "bianca"
      ? `<path d="M45 53q35-23 70 0" fill="none" stroke="#ffcf70" stroke-width="10" stroke-linecap="round"/><circle cx="61" cy="83" r="16" fill="none" stroke="#352b58" stroke-width="4"/><circle cx="99" cy="83" r="16" fill="none" stroke="#352b58" stroke-width="4"/><path d="M77 83h6" stroke="#352b58" stroke-width="4"/>`
      : profileName === "peter"
        ? `<path d="M46 49h68" stroke="#ffd45f" stroke-width="11" stroke-linecap="round"/><path d="M80 28v-14" stroke="#17345f" stroke-width="6"/><circle cx="80" cy="10" r="6" fill="#ffd45f" stroke="#17345f" stroke-width="4"/>`
        : `<path d="M80 27V14" stroke="#24483b" stroke-width="6"/><circle cx="80" cy="10" r="6" fill="#c8f25d" stroke="#24483b" stroke-width="4"/><path d="M43 53q37-22 74 2" fill="none" stroke="#c8f25d" stroke-width="12" stroke-linecap="round"/>`;
    return `<svg class="buddy-svg mood-${mood}" viewBox="0 0 160 174" role="img" aria-label="${label || p.name}">
      <path class="buddy-arm arm-left" d="M39 91Q16 91 18 116" fill="none" stroke="${p.dark}" stroke-width="8" stroke-linecap="round"/>
      <path class="buddy-arm arm-right" d="M121 91q23 0 21 25" fill="none" stroke="${p.dark}" stroke-width="8" stroke-linecap="round"/>
      <rect x="28" y="27" width="104" height="120" rx="${square ? 28 : 48}" fill="${p.colour}" stroke="${p.dark}" stroke-width="6"/>
      ${accessory}
      <rect x="43" y="62" width="74" height="63" rx="25" fill="#fffdf7" stroke="${p.dark}" stroke-width="4"/>
      <g class="buddy-eyes"><ellipse cx="63" cy="84" rx="5" ry="8" fill="${p.dark}"/><ellipse cx="97" cy="84" rx="5" ry="8" fill="${p.dark}"/></g>
      <g class="buddy-laugh-eyes" fill="none" stroke="${p.dark}" stroke-width="4" stroke-linecap="round"><path d="M55 87q8-9 16 0"/><path d="M89 87q8-9 16 0"/></g>
      <path class="buddy-mouth mouth-happy" d="M62 101q18 18 36 0" fill="none" stroke="${p.dark}" stroke-width="5" stroke-linecap="round"/>
      <ellipse class="buddy-mouth mouth-wow" cx="80" cy="105" rx="9" ry="11" fill="${p.accent}" stroke="${p.dark}" stroke-width="4"/>
      <path class="buddy-mouth mouth-think" d="M68 108q13-9 25 1" fill="none" stroke="${p.dark}" stroke-width="4" stroke-linecap="round"/>
      <path d="M54 146v15M106 146v15" stroke="${p.dark}" stroke-width="7" stroke-linecap="round"/>
      <path d="M42 163h24M94 163h24" stroke="${p.dark}" stroke-width="8" stroke-linecap="round"/>
    </svg>`;
  }

  function build() {
    if (host) return;
    host = document.createElement("div");
    host.className = "study-tools";
    host.hidden = true;
    host.innerHTML = `
      <section class="buddy-speech" aria-live="polite">
        <button class="buddy-close" type="button" aria-label="Close message">×</button>
        <span class="buddy-name"></span>
        <p class="buddy-message"></p>
        <button class="buddy-next" type="button">Tell me another</button>
      </section>
      <section class="focus-panel" hidden aria-label="Focus timer">
        <div class="focus-panel-head"><div><small>Focus block</small><strong class="focus-clock">25:00</strong></div><button class="focus-close" aria-label="Close focus timer">×</button></div>
        <div class="focus-presets" aria-label="Timer presets">
          <button data-minutes="15">15 min</button><button data-minutes="25" class="selected">25 min</button><button data-minutes="40">40 min</button><button data-minutes="50">50 min</button>
        </div>
        <label class="focus-custom">Custom minutes <input type="number" min="1" max="180" value="25" inputmode="numeric" /></label>
        <div class="focus-actions"><button class="focus-start">Start focus</button><button class="focus-reset">Reset</button></div>
        <p class="focus-note">Your timer keeps running if you switch courses.</p>
      </section>
      <div class="study-tool-buttons">
        <button class="focus-toggle" type="button" aria-expanded="false"><span>◷</span><b>25:00</b></button>
        <button class="buddy-button" type="button" aria-label="Talk to your study guide"></button>
      </div>`;
    document.body.append(host);

    finishOverlay = document.createElement("div");
    finishOverlay.className = "timer-finish";
    finishOverlay.hidden = true;
    finishOverlay.innerHTML = `<div class="timer-finish-card" role="dialog" aria-modal="true" aria-labelledby="timer-finish-title"><div class="finish-avatar"></div><span class="finish-kicker">Focus block complete</span><h2 id="timer-finish-title">Time’s up, Hezron!</h2><p class="finish-message"></p><button class="finish-dismiss" type="button">Rest mode →</button></div>`;
    document.body.append(finishOverlay);

    host.addEventListener("click", handleClick);
    finishOverlay.addEventListener("click", event => {
      if (event.target.closest(".finish-dismiss")) finishOverlay.hidden = true;
    });
    host.querySelector(".focus-custom input").addEventListener("change", event => selectMinutes(Number(event.target.value)));
    ["pointerdown", "keydown", "scroll", "touchstart"].forEach(type => window.addEventListener(type, noteActivity, { passive: true }));
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        updateTimer();
        noteActivity();
      }
    });
    updateTimer();
    state.tick = window.setInterval(updateTimer, 1000);
    state.cameo = window.setInterval(maybeCameo, 45000);
  }

  function noteActivity() {
    state.lastActivity = Date.now();
    window.clearTimeout(state.idle);
    if (!state.active || document.hidden) return;
    state.idle = window.setTimeout(runIdleCheck, 70000);
  }

  function runIdleCheck() {
    if (!state.active || document.hidden || Date.now() - state.lastActivity < 68000) return;
    showMessage("Hezron… you still with me, or did we zone out together? Tap me when you’re back 👀");
    if (MOTION_OK) {
      host.classList.add("buddy-flying");
      window.setTimeout(() => host?.classList.remove("buddy-flying"), 7000);
    }
    state.idle = window.setTimeout(runIdleCheck, 100000);
  }

  function handleClick(event) {
    if (event.target.closest(".buddy-close")) {
      host.querySelector(".buddy-speech").classList.remove("show");
      return;
    }
    if (event.target.closest(".buddy-next")) {
      const p = profiles[state.profile];
      state.greetingIndex = (state.greetingIndex + 1) % p.greetings.length;
      showMessage(p.greetings[state.greetingIndex]);
      return;
    }
    if (event.target.closest(".buddy-button")) {
      const moods = ["laugh", "wow", "thinking", "happy"];
      state.moodIndex = (state.moodIndex + 1) % moods.length;
      renderBuddy(moods[state.moodIndex]);
      const tickles = ["Okay okay 😭 that tickles!", "Plot twist: I have feelings now.", "Hezron! I was trying to look professional 😂", "Again? Fine — but then we study."];
      showMessage(tickles[state.moodIndex]);
      host.querySelector(".buddy-button").classList.remove("tickled");
      requestAnimationFrame(() => host.querySelector(".buddy-button")?.classList.add("tickled"));
      return;
    }
    if (event.target.closest(".focus-toggle")) {
      state.panelOpen = !state.panelOpen;
      renderTimerPanel();
      return;
    }
    if (event.target.closest(".focus-close")) {
      state.panelOpen = false;
      renderTimerPanel();
      return;
    }
    const preset = event.target.closest("[data-minutes]");
    if (preset) {
      selectMinutes(Number(preset.dataset.minutes));
      return;
    }
    if (event.target.closest(".focus-start")) {
      toggleTimer();
      return;
    }
    if (event.target.closest(".focus-reset")) resetTimer();
  }

  function selectMinutes(minutes) {
    const safe = Math.max(1, Math.min(180, Number.isFinite(minutes) ? Math.round(minutes) : 25));
    state.timer = { duration: safe * 60, remaining: safe * 60, running: false, endAt: null };
    saveTimer();
    host.querySelector(".focus-custom input").value = safe;
    host.querySelectorAll("[data-minutes]").forEach(button => button.classList.toggle("selected", Number(button.dataset.minutes) === safe));
    updateTimerUI();
  }

  function toggleTimer() {
    if (state.timer.running) {
      state.timer.remaining = Math.max(0, Math.ceil((state.timer.endAt - Date.now()) / 1000));
      state.timer.running = false;
      state.timer.endAt = null;
    } else {
      if (state.timer.remaining <= 0) state.timer.remaining = state.timer.duration;
      state.timer.running = true;
      state.timer.endAt = Date.now() + state.timer.remaining * 1000;
      showMessage("Focus mode on. I’ll guard the clock — you handle one thing only.");
    }
    saveTimer();
    updateTimerUI();
  }

  function resetTimer() {
    state.timer.running = false;
    state.timer.endAt = null;
    state.timer.remaining = state.timer.duration;
    saveTimer();
    updateTimerUI();
  }

  function updateTimer() {
    if (state.timer.running && state.timer.endAt) {
      state.timer.remaining = Math.max(0, Math.ceil((state.timer.endAt - Date.now()) / 1000));
      if (state.timer.remaining <= 0) completeTimer();
    }
    updateTimerUI();
  }

  function formatTime(seconds) {
    const safe = Math.max(0, Math.round(seconds || 0));
    return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
  }

  function updateTimerUI() {
    if (!host) return;
    const value = formatTime(state.timer.remaining);
    host.querySelector(".focus-clock").textContent = value;
    host.querySelector(".focus-toggle b").textContent = value;
    host.querySelector(".focus-start").textContent = state.timer.running ? "Pause" : state.timer.remaining < state.timer.duration ? "Resume" : "Start focus";
    host.querySelector(".focus-toggle").classList.toggle("running", state.timer.running);
  }

  function renderTimerPanel() {
    const panel = host.querySelector(".focus-panel");
    panel.hidden = !state.panelOpen;
    host.querySelector(".focus-toggle").setAttribute("aria-expanded", String(state.panelOpen));
    updateTimerUI();
  }

  function completeTimer() {
    state.timer.running = false;
    state.timer.endAt = null;
    state.timer.remaining = state.timer.duration;
    saveTimer();
    const p = profiles[state.profile];
    finishOverlay.querySelector(".finish-avatar").innerHTML = avatarSvg(state.profile, "laugh", p.name);
    finishOverlay.querySelector(".finish-message").textContent = breakMessages[Math.floor(Math.random() * breakMessages.length)];
    finishOverlay.hidden = false;
    finishOverlay.classList.remove("celebrate");
    requestAnimationFrame(() => finishOverlay.classList.add("celebrate"));
    updateTimerUI();
  }

  function renderBuddy(mood = "happy") {
    if (!host) return;
    const p = profiles[state.profile];
    host.style.setProperty("--buddy", p.colour);
    host.style.setProperty("--buddy-accent", p.accent);
    host.style.setProperty("--buddy-dark", p.dark);
    host.querySelector(".buddy-button").innerHTML = avatarSvg(state.profile, mood, `Talk to ${p.name}`);
    host.querySelector(".buddy-button").setAttribute("aria-label", `Talk to ${p.name}`);
    host.querySelector(".buddy-name").textContent = `${p.name} · ${p.label}`;
  }

  function showMessage(message) {
    if (!host || !state.active) return;
    host.querySelector(".buddy-message").textContent = message;
    host.querySelector(".buddy-speech").classList.add("show");
  }

  function maybeCameo() {
    if (!state.active || !MOTION_OK || document.hidden || document.querySelector(".buddy-cameo")) return;
    const headings = [...document.querySelectorAll("main h1, main h2, .main-column h1, .main-column h2")]
      .filter(item => {
        const r = item.getBoundingClientRect();
        return r.top > 80 && r.top < window.innerHeight - 80 && r.width > 180;
      });
    const heading = headings[Math.floor(Math.random() * headings.length)];
    if (!heading) return;
    const cameo = document.createElement("span");
    cameo.className = Math.random() > 0.45 ? "buddy-cameo walking" : "buddy-cameo leaning";
    cameo.innerHTML = avatarSvg(state.profile, Math.random() > 0.5 ? "happy" : "thinking", profiles[state.profile].name);
    heading.classList.add("buddy-landing");
    heading.append(cameo);
    window.setTimeout(() => {
      cameo.remove();
      heading.classList.remove("buddy-landing");
    }, 8000);
  }

  function setCourse(profileName, options = {}) {
    build();
    state.profile = profiles[profileName] ? profileName : "tion";
    state.active = options.active !== false;
    host.hidden = !state.active;
    document.body.dataset.studyCompanion = state.profile;
    renderBuddy(options.mood || "happy");
    const p = profiles[state.profile];
    if (options.greet !== false && state.active) {
      state.greetingIndex = (Number(sessionStorage.getItem(`buddy-greeting-${state.profile}`)) || 0) % p.greetings.length;
      sessionStorage.setItem(`buddy-greeting-${state.profile}`, String(state.greetingIndex + 1));
      window.setTimeout(() => showMessage(options.message || p.greetings[state.greetingIndex]), 450);
    }
    noteActivity();
  }

  function deactivate() {
    build();
    state.active = false;
    host.hidden = true;
    finishOverlay.hidden = true;
    window.clearTimeout(state.idle);
  }

  build();
  window.StudyTools = {
    setCourse,
    deactivate,
    showMessage,
    maybeCameo,
    completeNow: completeTimer,
    profiles,
    breakMessages
  };
})();

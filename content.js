window.STUDY_DATA = (() => {
  const lessons = [
    {
      id: "limit-language",
      title: "Limit language & laws",
      short: "Read limits, substitute safely, and combine them.",
      priority: "must",
      level: "Foundation",
      minutes: 12,
      lead: "A limit asks where f(x) is heading as x gets close to a value. It does not first ask what happens exactly at that value.",
      catches: [
        "Read x → a as ‘x approaches a’ — nearby values matter.",
        "Try direct substitution first. If it gives a real number, you are usually done.",
        "Limit laws let you split sums, products and quotients; the quotient denominator must not approach 0."
      ],
      sections: [
        {
          title: "What the notation is saying",
          html: `<p>In <strong>lim<sub>x→a</sub> f(x) = L</strong>, we can make f(x) as close to L as we like by taking x sufficiently close to a. The actual value f(a) can be L, different, or missing.</p>
          <div class="formula-display">lim<sub>x→a</sub> f(x) = L<small>Input approaches a; output approaches L.</small></div>`
        },
        {
          title: "The limit laws",
          html: `<ul>
            <li><strong>Sum:</strong> lim[f(x)+g(x)] = L + M</li>
            <li><strong>Difference:</strong> lim[f(x)−g(x)] = L − M</li>
            <li><strong>Constant:</strong> lim[c f(x)] = cL</li>
            <li><strong>Product:</strong> lim[f(x)g(x)] = LM</li>
            <li><strong>Quotient:</strong> lim[f(x)/g(x)] = L/M, provided M ≠ 0</li>
            <li><strong>Power/root:</strong> pass the limit inside when the resulting real root is defined.</li>
          </ul>
          <div class="micro-example"><strong>Quick example</strong><p>lim<sub>x→2</sub>(x² + 3x − 1) = 2² + 3(2) − 1</p><div class="answer-line">= 9</div></div>`
        },
        {
          title: "When substitution gives 0/0",
          html: `<p><strong>0/0 is not the answer.</strong> It is an alarm telling you to simplify first. Factor, cancel a common factor, rationalise a surd, or use a standard trigonometric limit.</p>
          <div class="micro-example"><strong>Factor first</strong><p>lim<sub>x→3</sub> (x²−9)/(x−3) = lim (x−3)(x+3)/(x−3)</p><div class="answer-line">= lim<sub>x→3</sub>(x+3) = 6</div></div>`,
          optional: true
        }
      ],
      sticky: "Never cancel terms across + or −. You may cancel factors only. For example, (x²−9)/(x−3) must be factored before cancellation.",
      source: "Notebook + OpenStax 2.2"
    },
    {
      id: "trig-limits",
      title: "Trigonometric limits",
      short: "Use continuity, identities and the two standard limits.",
      priority: "must",
      level: "Core",
      minutes: 16,
      lead: "Most trig limits are substitution questions. The special cases near zero use two standard limits and angles must be measured in radians.",
      catches: [
        "sin, cos, tan, sec, cosec and cot are continuous wherever they are defined.",
        "Memorise limₓ→₀(sin x)/x = 1 and limₓ→₀(1−cos x)/x = 0.",
        "If the angle is kx, create the matching kx in the denominator."
      ],
      sections: [
        {
          title: "Direct substitution",
          html: `<div class="formula-display">lim<sub>x→a</sub> sin x = sin a &nbsp; | &nbsp; lim<sub>x→a</sub> cos x = cos a</div>
          <p>The same idea works for tan x, cot x, sec x and cosec x when their denominators are non-zero.</p>
          <div class="micro-example"><strong>From your notes</strong><p>lim<sub>x→π</sub> x/(sin x − cos 2x) = π/(0−1)</p><div class="answer-line">= −π</div></div>`
        },
        {
          title: "The standard-limit pattern",
          html: `<div class="formula-display">lim<sub>u→0</sub> sin u/u = 1 &nbsp;&nbsp; and &nbsp;&nbsp; lim<sub>u→0</sub> tan u/u = 1<small>These are valid in radians.</small></div>
          <div class="micro-example"><strong>Pattern match</strong><p>lim<sub>x→0</sub> sin(5x)/x = 5 · lim<sub>x→0</sub> sin(5x)/(5x)</p><div class="answer-line">= 5</div></div>`
        },
        {
          title: "Identity route",
          html: `<p>When substitution still produces 0/0, rewrite using identities such as tan x = sin x/cos x or 1−cos²x = sin²x.</p>
          <div class="micro-example"><strong>Two rates together</strong><p>lim<sub>x→0</sub> tan(3x)/sin(5x) = [tan(3x)/(3x)] · [5x/sin(5x)] · 3/5</p><div class="answer-line">= 1 · 1 · 3/5 = 3/5</div></div>`,
          optional: true
        },
        {
          title: "Why sin x/x approaches 1",
          html: `<p>The squeeze theorem proves the standard result. For a small positive angle in radians, geometry gives cos x ≤ sin x/x ≤ 1. Both outside expressions approach 1 as x→0, so the middle expression must also approach 1.</p><div class="formula-display">cos x ≤ sin x/x ≤ 1 &nbsp; ⟹ &nbsp; lim<sub>x→0</sub> sin x/x=1</div>`,
          optional: true
        }
      ],
      sticky: "Your calculator can silently be in degrees. For calculus trig limits and derivatives, use RAD unless the question explicitly says degrees.",
      source: "Notebook + OpenStax 2.3"
    },
    {
      id: "one-sided",
      title: "One-sided & piecewise limits",
      short: "Approach from the left and right before deciding.",
      priority: "must",
      level: "Core",
      minutes: 15,
      lead: "A two-sided limit exists only when the left-hand and right-hand limits both exist and are equal.",
      catches: [
        "x → a⁻ means approach from values smaller than a; x → a⁺ means larger than a.",
        "For a piecewise function, choose the branch using the direction of approach.",
        "If L₋ ≠ L₊, write ‘the limit does not exist’ — do not average them."
      ],
      sections: [
        {
          title: "The existence test",
          html: `<div class="formula-display">lim<sub>x→a</sub> f(x) exists ⇔ lim<sub>x→a⁻</sub>f(x) = lim<sub>x→a⁺</sub>f(x)</div>
          <p>A filled or empty dot at x=a tells you f(a), but the nearby curve tells you the limit.</p>`
        },
        {
          title: "Piecewise exam method",
          html: `<p><strong>1.</strong> Write L₋ and use the x&lt;a branch. <strong>2.</strong> Write L₊ and use the x&gt;a branch. <strong>3.</strong> Compare them in one sentence.</p>
          <div class="micro-example"><strong>Worked check</strong><p>f(x)={x+1 for x&lt;2; 2x−3 for x≥2}</p><p>L₋=2+1=3, while L₊=2(2)−3=1.</p><div class="answer-line">Since 3 ≠ 1, lim<sub>x→2</sub>f(x) does not exist.</div></div>`
        },
        {
          title: "A useful exception",
          html: `<p>The limit may exist even when the function value is different. If both sides approach 4 but f(a)=9, then the limit is 4. This is a removable discontinuity.</p>`,
          optional: true
        }
      ],
      sticky: "The superscript sign belongs to the x-value: a⁻ means ‘from the left’, not a negative answer.",
      source: "Notebook + OpenStax 2.2"
    },
    {
      id: "infinite-limits",
      title: "Infinite limits & end behaviour",
      short: "Handle vertical asymptotes and x heading to infinity.",
      priority: "must",
      level: "Core",
      minutes: 16,
      lead: "There are two different ideas: the function may grow without bound near a finite x-value, or x itself may grow without bound.",
      catches: [
        "Near a vertical asymptote, test the sign from each side.",
        "For rational functions at ±∞, compare the highest powers.",
        "∞ is not a number. Do not substitute it like one."
      ],
      sections: [
        {
          title: "Vertical asymptotes",
          html: `<p>If the denominator approaches zero while the numerator stays non-zero, inspect the sign. For 1/(x−2): values just left of 2 give a tiny negative denominator; values just right give a tiny positive denominator.</p>
          <div class="formula-display">lim<sub>x→2⁻</sub> 1/(x−2) = −∞ &nbsp; | &nbsp; lim<sub>x→2⁺</sub> 1/(x−2) = +∞</div>`
        },
        {
          title: "Rational functions at infinity",
          html: `<ul><li>Top degree &lt; bottom degree → limit 0.</li><li>Degrees equal → ratio of leading coefficients.</li><li>Top degree &gt; bottom degree → no finite horizontal limit; divide if more detail is needed.</li></ul>
          <div class="micro-example"><strong>Leading terms decide</strong><p>lim<sub>x→∞</sub>(3x²−x+4)/(2x²+5) = 3/2.</p><div class="answer-line">Divide every term by x² to show it.</div></div>`
        },
        {
          title: "Why dividing works",
          html: `<p>After dividing by the highest power, every term like 1/x or 1/x² approaches 0. Only the leading coefficients survive.</p>`,
          optional: true
        },
        {
          title: "Radicals and asymptotes",
          html: `<p>For lim<sub>x→∞</sub>[√(x²+x)−x], rationalise first. The expression becomes x/[√(x²+x)+x]=1/[√(1+1/x)+1], so the limit is 1/2.</p><p>A finite limit as x→±∞ gives a horizontal asymptote y=L. An uncancelled zero of a denominator may give a vertical asymptote; always check one-sided signs.</p>`,
          optional: true
        }
      ],
      sticky: "√(x²)=|x|, not always x. It becomes x as x→+∞ and −x as x→−∞. Also: a factor that cancels makes a hole, not a vertical asymptote.",
      source: "Notebook + OpenStax 2.5"
    },
    {
      id: "continuity",
      title: "Continuity",
      short: "Use the three-condition test and repair a hole.",
      priority: "must",
      level: "Core",
      minutes: 14,
      lead: "A function is continuous at x=a when its graph can pass through that point without a break, jump, hole or vertical asymptote.",
      catches: [
        "Check: f(a) exists, limₓ→ₐf(x) exists, and the two are equal.",
        "For piecewise functions, first make the left and right limits equal.",
        "Then make sure the defined value at a equals that common limit."
      ],
      sections: [
        {
          title: "The three checks",
          html: `<div class="formula-display">1. f(a) exists &nbsp; 2. lim<sub>x→a</sub>f(x) exists &nbsp; 3. lim<sub>x→a</sub>f(x)=f(a)</div>
          <p>Failing any one condition means the function is discontinuous at a.</p>`
        },
        {
          title: "Find an unknown constant",
          html: `<div class="micro-example"><strong>Typical exam question</strong><p>f(x)={kx+1 if x&lt;2; x²−1 if x≥2}. Find k for continuity.</p><p>Left limit = 2k+1. Right limit and f(2) = 2²−1=3.</p><div class="answer-line">Set 2k+1=3, so k=1.</div></div>`
        },
        {
          title: "Types of break",
          html: `<ul><li><strong>Removable:</strong> a hole; the finite limit exists.</li><li><strong>Jump:</strong> left and right limits are finite but unequal.</li><li><strong>Infinite:</strong> values grow without bound near a vertical asymptote.</li></ul>
          <div class="micro-example"><strong>Repair a hole</strong><p>For f(x)=(x²−4)/(x−2), x≠2, cancellation gives x+2 and the limit at 2 is 4. Defining f(2)=4 makes the function continuous.</p></div>`,
          optional: true
        }
      ],
      sticky: "A rational function is continuous only where its denominator is non-zero. A formula changing at x=a does not automatically mean discontinuity; the three checks decide.",
      source: "Notebook + OpenStax 2.4"
    },
    {
      id: "first-principles",
      title: "Derivative from first principles",
      short: "Turn average change into an exact tangent slope.",
      priority: "must",
      level: "Core",
      minutes: 18,
      lead: "The derivative is the instantaneous rate of change and the gradient of the tangent. First principles builds it from secant slopes.",
      catches: [
        "Write f(x+h) carefully: replace every x in f with (x+h).",
        "Expand, subtract f(x), and only then divide by h.",
        "Cancel h as a factor before letting h approach 0."
      ],
      sections: [
        {
          title: "The definition",
          html: `<div class="formula-display">f′(x) = lim<sub>h→0</sub> [f(x+h)−f(x)]/h</div>
          <p>At a particular point a, you may also use f′(a)=lim<sub>x→a</sub>[f(x)−f(a)]/(x−a).</p>`
        },
        {
          title: "Full first-principles example",
          html: `<div class="micro-example"><strong>Find the derivative of f(x)=x²</strong><p>f(x+h)=(x+h)²=x²+2xh+h².</p><p>[f(x+h)−f(x)]/h = [x²+2xh+h²−x²]/h = 2x+h.</p><div class="answer-line">f′(x)=lim<sub>h→0</sub>(2x+h)=2x.</div></div>`
        },
        {
          title: "Must read: why (sin 3x)′=3 cos 3x",
          html: `<p>Your notebook marks this derivation <strong>READ!!!!!</strong> Start with the definition and expand sin(3x+3h):</p>
          <div class="formula-display">lim<sub>h→0</sub> [sin(3x+3h)−sin(3x)]/h</div>
          <p>Using sin(A+B)=sin A cos B+cos A sin B, this becomes sin(3x)[(cos3h−1)/h]+cos(3x)[sin3h/h]. The first limit is 0; the second is 3.</p>
          <div class="formula-display">d[sin(3x)]/dx = 3cos(3x)</div>`
        },
        {
          title: "Tangent equation",
          html: `<p>At x=a, the point is (a,f(a)) and gradient m=f′(a). Use point-gradient form:</p><div class="formula-display">y − f(a) = f′(a)(x − a)</div>`,
          optional: true
        }
      ],
      sticky: "In an exam, do not jump from the definition straight to the answer. The expansion and cancellation are the marks.",
      source: "Notebook + OpenStax 3.1"
    },
    {
      id: "derivative-rules",
      title: "Differentiation rules",
      short: "Choose power, product, quotient or chain rule fast.",
      priority: "must",
      level: "Core",
      minutes: 20,
      lead: "Most differentiation errors come from choosing the wrong rule, not from the arithmetic. Name the structure before you start.",
      catches: [
        "Power: bring the power down, then reduce it by 1.",
        "Product has two changing factors; quotient has one function divided by another.",
        "Chain rule means ‘outside derivative × inside derivative’."
      ],
      sections: [
        {
          title: "Basic and power rules",
          html: `<div class="formula-display">d(c)/dx=0 &nbsp; | &nbsp; d(ax+b)/dx=a &nbsp; | &nbsp; d(xⁿ)/dx=nxⁿ⁻¹</div>
          <div class="micro-example"><strong>Example</strong><p>d/dx(4x⁵−3x²+7)=20x⁴−6x.</p><div class="answer-line">Differentiate every term.</div></div>`
        },
        {
          title: "Product and quotient",
          html: `<div class="formula-display">(uv)′=u′v+uv′ &nbsp; | &nbsp; (u/v)′=(vu′−uv′)/v²</div>
          <p>For the quotient rule, keep the denominator squared and preserve the subtraction order.</p>`
        },
        {
          title: "Chain rule",
          html: `<div class="formula-display">If y=f(u), u=g(x), then dy/dx=(dy/du)(du/dx)</div>
          <div class="micro-example"><strong>Example</strong><p>d/dx(3x²+1)⁵ = 5(3x²+1)⁴ · 6x</p><div class="answer-line">= 30x(3x²+1)⁴</div></div>`
        }
      ],
      sticky: "Write u and v in the margin before a product or quotient rule. That tiny setup prevents most sign errors.",
      source: "Notebook + OpenStax 3.3–3.6"
    },
    {
      id: "trig-derivatives",
      title: "Trigonometric derivatives",
      short: "Memorise the core six and attach the inner derivative.",
      priority: "must",
      level: "Core",
      minutes: 18,
      lead: "These derivatives are patterns. If the input is not just x, multiply by its derivative using the chain rule.",
      catches: [
        "(sin x)′=cos x and (cos x)′=−sin x — watch that minus.",
        "(tan x)′=sec²x; (cot x)′=−cosec²x.",
        "When the angle is u(x), multiply the trig derivative by u′."
      ],
      sections: [
        {
          title: "The six trig derivatives",
          html: `<div class="formula-display">sin→cos &nbsp; | &nbsp; cos→−sin &nbsp; | &nbsp; tan→sec²<br>sec→sec tan &nbsp; | &nbsp; cosec→−cosec cot &nbsp; | &nbsp; cot→−cosec²</div>`
        },
        {
          title: "Chain them",
          html: `<div class="micro-example"><strong>Example</strong><p>y=sin(3x²). Outside derivative gives cos(3x²); inside derivative gives 6x.</p><div class="answer-line">dy/dx = 6x cos(3x²)</div></div>`
        }
      ],
      sticky: "All standard trigonometric derivative formulas assume the angle is in radians.",
      source: "Notebook + OpenStax 3.5"
    },
    {
      id: "inverse-trig",
      title: "Inverse trig derivatives",
      short: "Differentiate sin⁻¹, cos⁻¹, tan⁻¹ and their partners.",
      priority: "must",
      level: "Core",
      minutes: 18,
      lead: "sin⁻¹x means inverse sine (arcsin), not 1/sin x. The notebook derives these by setting y equal to the inverse function and differentiating the ordinary trig equation.",
      catches: [
        "sin⁻¹ and cos⁻¹ share √(1−x²); cosine has the negative sign.",
        "tan⁻¹ gives 1/(1+x²), while cot⁻¹ gives −1/(1+x²).",
        "sec⁻¹ and cosec⁻¹ need |x| in the denominator; for an inside function u, also multiply by u′."
      ],
      sections: [
        {
          title: "The main four",
          html: `<div class="formula-display">(sin⁻¹x)′=1/√(1−x²) &nbsp; | &nbsp; (cos⁻¹x)′=−1/√(1−x²)<br>(tan⁻¹x)′=1/(1+x²) &nbsp; | &nbsp; (cot⁻¹x)′=−1/(1+x²)</div>`
        },
        {
          title: "Why arcsine has that root",
          html: `<p>Let y=sin⁻¹x, so sin y=x. Differentiate implicitly: cos y·dy/dx=1. Therefore dy/dx=1/cos y. Since cos²y=1−sin²y and sin y=x, cos y=√(1−x²) on the principal range.</p>`
        },
        {
          title: "The other two — and a notebook trap",
          html: `<div class="formula-display">(sec⁻¹x)′=1/[|x|√(x²−1)] &nbsp; | &nbsp; (cosec⁻¹x)′=−1/[|x|√(x²−1)]</div>
          <p>The absolute value makes the rule work on both parts of the domain, |x|&gt;1. Also, <strong>cosec⁻¹(sin 4x)</strong> is not an ordinary differentiable real function: sin 4x stays between −1 and 1, so it enters the inverse-cosecant domain only at isolated points. Do not force the chain-rule formula onto it.</p>`
        },
        {
          title: "Chain-rule example",
          html: `<div class="micro-example"><strong>From your notes</strong><p>y=sin⁻¹(2x). Let u=2x, so u′=2.</p><div class="answer-line">dy/dx = 2/√(1−4x²).</div></div>`,
          optional: true
        }
      ],
      sticky: "On calculator keys, sin⁻¹ means arcsin. In algebra, (sin x)⁻¹ can also mean 1/sin x, so write clearly, check the domain, and use brackets.",
      source: "Notebook + OpenStax 3.7"
    },
    {
      id: "exp-log",
      title: "Exponential & logarithmic derivatives",
      short: "Keep the exponential; divide by the log input.",
      priority: "must",
      level: "Core",
      minutes: 17,
      lead: "Exponentials keep their shape when differentiated. Logarithms turn multiplication inside into division in the derivative.",
      catches: [
        "(eᵘ)′=eᵘu′ — copy the exponential and multiply by the inner derivative.",
        "(aᵘ)′=aᵘln(a)u′ — a base other than e adds ln(a).",
        "(ln u)′=u′/u and (logₐu)′=u′/[u ln(a)]."
      ],
      sections: [
        {
          title: "Exponential rules",
          html: `<div class="formula-display">d(eᵘ)/dx=eᵘu′ &nbsp; | &nbsp; d(aᵘ)/dx=aᵘln(a)u′</div>
          <div class="micro-example"><strong>Notebook-style product</strong><p>For y=e³ˣsin(2x), use product and chain rules.</p><div class="answer-line">y′=3e³ˣsin(2x)+2e³ˣcos(2x).</div></div>`
        },
        {
          title: "Logarithmic rules",
          html: `<div class="formula-display">d(ln u)/dx=u′/u &nbsp; | &nbsp; d(logₐu)/dx=u′/[u ln(a)]</div>
          <div class="micro-example"><strong>Example</strong><p>d/dx log₂(x²+1)</p><div class="answer-line">= 2x/[(x²+1)ln 2]</div></div>`
        },
        {
          title: "A sign check worth doing",
          html: `<p>For y=2<sup>cos x</sup>, the inside derivative is −sin x. Therefore y′=−2<sup>cos x</sup>ln(2)sin x. The negative sign is essential.</p>`,
          optional: true
        }
      ],
      sticky: "ln(2x) differentiates to 1/x because 2/(2x)=1/x. The constant inside has not been ignored; it cancels.",
      source: "Notebook + OpenStax 3.9"
    },
    {
      id: "hyperbolic",
      title: "Hyperbolic functions",
      short: "Differentiate sinh, cosh, tanh, sech and csch.",
      priority: "optional",
      level: "Extension",
      minutes: 17,
      lead: "Hyperbolic functions look like trig functions but are built from exponentials. Their derivative signs follow different patterns.",
      catches: [
        "sinh x=(eˣ−e⁻ˣ)/2 and cosh x=(eˣ+e⁻ˣ)/2.",
        "(sinh x)′=cosh x and (cosh x)′=sinh x — no negative sign.",
        "(tanh x)′=sech²x; (csch x)′=−csch x coth x."
      ],
      sections: [
        {
          title: "Definitions and identity",
          html: `<div class="formula-display">sinh x=(eˣ−e⁻ˣ)/2 &nbsp; | &nbsp; cosh x=(eˣ+e⁻ˣ)/2</div>
          <p>The central identity is cosh²x−sinh²x=1. Two useful forms are <strong>sech²x+tanh²x=1</strong> and <strong>coth²x−csch²x=1</strong>.</p>`
        },
        {
          title: "Derivative family",
          html: `<div class="formula-display">sinh→cosh &nbsp; | &nbsp; cosh→sinh &nbsp; | &nbsp; tanh→sech²<br>coth→−csch² &nbsp; | &nbsp; sech→−sech tanh &nbsp; | &nbsp; csch→−csch coth</div>`
        },
        {
          title: "A chain-rule example",
          html: `<div class="micro-example"><strong>From the end of your notes</strong><p>y=cosh(ln(3x)). Let u=ln(3x), so u′=1/x.</p><div class="answer-line">dy/dx = sinh(ln(3x))/x = (9x²−1)/(6x²).</div></div>`,
          optional: true
        }
      ],
      sticky: "Do not import the trig minus sign: d(cosh x)/dx is +sinh x, unlike d(cos x)/dx=−sin x.",
      source: "Notebook + OpenStax 6.9"
    }
  ];

  const practice = [
    {
      id: "p1", topic: "Limits", difficulty: 1, marks: 2,
      question: "Evaluate limₓ→₂ (x³ − 4x + 1).",
      steps: ["Start with direct substitution because a polynomial is continuous.", "Substitute x=2: 2³−4(2)+1.", "Calculate: 8−8+1=1."],
      answer: "1", marker: "One mark for the method and one for the correct value."
    },
    {
      id: "p2", topic: "Limits", difficulty: 1, marks: 3,
      question: "Evaluate limₓ→₃ (x² − 9)/(x − 3).",
      steps: ["Substitution gives 0/0, so factor the numerator.", "x²−9=(x−3)(x+3). Cancel the common factor x−3 for x≠3.", "Now substitute into x+3: 3+3=6."],
      answer: "6", marker: "Show the factorisation; writing only 6 can lose method marks."
    },
    {
      id: "p3", topic: "Limits", difficulty: 2, marks: 4,
      question: "Evaluate limₓ→₄ (√x − 2)/(x − 4).",
      steps: ["Substitution gives 0/0, so multiply top and bottom by the conjugate √x+2.", "The numerator becomes x−4, which cancels with the denominator.", "The expression is now 1/(√x+2).", "Substitute x=4 to get 1/(2+2)."],
      answer: "1/4", marker: "The conjugate and cancellation earn the working marks."
    },
    {
      id: "p4", topic: "Trig limits", difficulty: 1, marks: 3,
      question: "Evaluate limₓ→₀ sin(7x)/x.",
      steps: ["Create the standard form by multiplying and dividing by 7.", "sin(7x)/x = 7[sin(7x)/(7x)].", "As x→0, 7x→0 and the bracket approaches 1."],
      answer: "7", marker: "State the standard limit and keep the factor 7."
    },
    {
      id: "p5", topic: "Trig limits", difficulty: 2, marks: 4,
      question: "Evaluate limₓ→₀ tan(3x)/sin(5x).",
      steps: ["Split into standard-limit pieces: [tan(3x)/(3x)]·[5x/sin(5x)]·3/5.", "The first bracket approaches 1.", "The reciprocal sine bracket also approaches 1.", "Multiply the remaining constant."],
      answer: "3/5", marker: "Radians are assumed. Do not substitute first and stop at 0/0."
    },
    {
      id: "p6", topic: "Trig limits", difficulty: 1, marks: 2,
      question: "Evaluate limₓ→π x/[sin x − cos(2x)].",
      steps: ["The denominator at x=π is sinπ−cos2π=0−1=−1, so direct substitution is valid.", "Substitute the numerator x=π.", "Divide π by −1."],
      answer: "−π", marker: "This is from your notes: there is no 0/0 here."
    },
    {
      id: "p7", topic: "One-sided", difficulty: 2, marks: 5,
      question: "For f(x)={x+1 if x<2; 2x−3 if x≥2}, find limₓ→₂f(x).",
      steps: ["Left: use x+1, so L₋=2+1=3.", "Right: use 2x−3, so L₊=2(2)−3=1.", "Compare: 3≠1.", "Therefore the two-sided limit does not exist."],
      answer: "The limit does not exist (L₋=3, L₊=1).", marker: "Always show both one-sided limits before your conclusion."
    },
    {
      id: "p8", topic: "One-sided", difficulty: 2, marks: 5,
      question: "For f(x)={x²−1 if x≤0; x²+x−1 if x>0}, find limₓ→₀f(x).",
      steps: ["Left: use x²−1, giving L₋=0²−1=−1.", "Right: use x²+x−1, giving L₊=0²+0−1=−1.", "The one-sided limits are equal.", "Therefore the two-sided limit exists and equals −1."],
      answer: "−1", marker: "Equal branch formulas are not required; equal approaching values are."
    },
    {
      id: "p9", topic: "Infinity", difficulty: 1, marks: 3,
      question: "Evaluate limₓ→∞ (5x²−3x+1)/(2x²+7).",
      steps: ["The numerator and denominator have the same highest degree, 2.", "Divide every term by x² or compare the leading coefficients.", "Terms containing 1/x and 1/x² approach 0."],
      answer: "5/2", marker: "State why the lower-power terms vanish."
    },
    {
      id: "p10", topic: "Infinity", difficulty: 2, marks: 4,
      question: "Find the one-sided limits of 3/(x−1) as x→1.",
      steps: ["The numerator stays positive.", "From the left, x−1 is a tiny negative number, so the quotient tends to −∞.", "From the right, x−1 is a tiny positive number, so the quotient tends to +∞.", "The two-sided limit therefore does not exist."],
      answer: "L₋=−∞ and L₊=+∞; the two-sided limit does not exist.", marker: "The signs, not only the vertical asymptote, are the key marks."
    },
    {
      id: "p11", topic: "Continuity", difficulty: 2, marks: 5,
      question: "f(x)={kx+1 if x<2; x²−1 if x≥2}. Find k so f is continuous at x=2.",
      steps: ["For continuity, set the left-hand limit equal to f(2) from the right branch.", "Left-hand limit: 2k+1.", "Right branch value: 2²−1=3.", "Solve 2k+1=3, so 2k=2."],
      answer: "k=1", marker: "Name the continuity condition before solving."
    },
    {
      id: "p12", topic: "First principles", difficulty: 2, marks: 6,
      question: "Using first principles, find the derivative of f(x)=x²+3x.",
      steps: ["Write f(x+h)=(x+h)²+3(x+h)=x²+2xh+h²+3x+3h.", "Subtract f(x): f(x+h)−f(x)=2xh+h²+3h.", "Divide by h to get 2x+h+3.", "Take h→0."],
      answer: "f′(x)=2x+3", marker: "Because the question says first principles, using the power rule earns little or no method credit."
    },
    {
      id: "p13", topic: "Derivatives", difficulty: 1, marks: 3,
      question: "Differentiate y=4x⁵−3x²+7.",
      steps: ["Differentiate each term.", "d(4x⁵)/dx=20x⁴ and d(−3x²)/dx=−6x.", "The derivative of 7 is 0."],
      answer: "dy/dx=20x⁴−6x", marker: "The constant disappears."
    },
    {
      id: "p14", topic: "Derivatives", difficulty: 2, marks: 5,
      question: "Differentiate y=(x²+1)(3x−4).",
      steps: ["Use product rule with u=x²+1 and v=3x−4.", "u′=2x and v′=3.", "y′=u′v+uv′=2x(3x−4)+3(x²+1).", "Simplify if asked."],
      answer: "y′=9x²−8x+3", marker: "The unsimplified product-rule line is valuable evidence."
    },
    {
      id: "p15", topic: "Derivatives", difficulty: 2, marks: 5,
      question: "Differentiate y=(x²+1)/(x−1).",
      steps: ["Use quotient rule: denominator×top derivative − numerator×denominator derivative, over denominator².", "Top derivative is 2x; denominator derivative is 1.", "y′=[(x−1)(2x)−(x²+1)]/(x−1)².", "Simplify the numerator: 2x²−2x−x²−1."],
      answer: "y′=(x²−2x−1)/(x−1)²", marker: "Keep brackets around the entire second product."
    },
    {
      id: "p16", topic: "Derivatives", difficulty: 2, marks: 4,
      question: "Differentiate y=(3x²+1)⁵.",
      steps: ["Identify outside function u⁵ and inside u=3x²+1.", "Outside derivative: 5u⁴.", "Inside derivative: 6x.", "Multiply and replace u."],
      answer: "dy/dx=30x(3x²+1)⁴", marker: "Missing the inner derivative 6x is the common lost mark."
    },
    {
      id: "p17", topic: "Trig derivatives", difficulty: 2, marks: 4,
      question: "Differentiate y=sin(3x²).",
      steps: ["Let u=3x².", "d(sin u)/du=cos u.", "du/dx=6x.", "Multiply using the chain rule."],
      answer: "dy/dx=6x cos(3x²)", marker: "Keep the inside expression unchanged inside cosine."
    },
    {
      id: "p18", topic: "Trig derivatives", difficulty: 2, marks: 6,
      question: "Find the tangent to y=sin(3x) at x=π/6.",
      steps: ["Differentiate: y′=3cos(3x).", "Gradient at x=π/6: m=3cos(π/2)=0.", "Point on curve: y=sin(π/2)=1, so the point is (π/6,1).", "Use y−1=0(x−π/6)."],
      answer: "y=1", marker: "State both the gradient and the point before the line equation."
    },
    {
      id: "p19", topic: "Trig derivatives", difficulty: 3, marks: 6,
      question: "Differentiate y=sec x · tan x.",
      steps: ["Use product rule with u=sec x and v=tan x.", "u′=sec x tan x; v′=sec²x.", "y′=(sec x tan x)(tan x)+sec x(sec²x).", "Factor sec x if desired."],
      answer: "y′=sec x tan²x+sec³x", marker: "Both product-rule terms must appear."
    },
    {
      id: "p20", topic: "Log & exp", difficulty: 2, marks: 4,
      question: "Differentiate y=ln(x²+1).",
      steps: ["For ln u, the derivative is u′/u.", "Here u=x²+1 and u′=2x.", "Place u′ over the unchanged u."],
      answer: "dy/dx=2x/(x²+1)", marker: "Do not write 1/ln(x²+1)."
    },
    {
      id: "p21", topic: "Log & exp", difficulty: 2, marks: 4,
      question: "Differentiate y=e^(2x−3).",
      steps: ["The outside function eᵘ stays eᵘ.", "The inside u=2x−3 has derivative 2.", "Multiply by the inner derivative."],
      answer: "dy/dx=2e^(2x−3)", marker: "The exponential itself does not lose its exponent."
    },
    {
      id: "p22", topic: "Hyperbolic", difficulty: 2, marks: 4,
      question: "Differentiate y=tanh(4x).",
      steps: ["Use d(tanh u)/du=sech²u.", "The inner derivative of 4x is 4.", "Multiply by 4."],
      answer: "dy/dx=4sech²(4x)", marker: "Hyperbolic sech is not sec."
    },
    {
      id: "p23", topic: "Hyperbolic", difficulty: 3, marks: 6,
      question: "Differentiate y=cosh(ln(3x)).",
      steps: ["Let u=ln(3x). Then d(cosh u)/du=sinh u.", "u′=(3)/(3x)=1/x.", "So y′=sinh(ln(3x))/x.", "Using sinh z=(eᶻ−e⁻ᶻ)/2 gives sinh(ln 3x)=(3x−1/(3x))/2."],
      answer: "y′=sinh(ln(3x))/x=(9x²−1)/(6x²)", marker: "Either exact form is correct unless the question asks for algebraic form."
    },
    {
      id: "p24", topic: "Mixed exam", difficulty: 3, marks: 7,
      question: "Differentiate y=[sin(2x)]/(x²+1).",
      steps: ["Use quotient rule with u=sin(2x), v=x²+1.", "By chain rule, u′=2cos(2x); also v′=2x.", "y′=[v u′−u v′]/v².", "Substitute without dropping brackets."],
      answer: "y′={[2(x²+1)cos(2x)]−[2x sin(2x)]}/(x²+1)²", marker: "This tests quotient and chain rules together; label u and v first."
    },
    {
      id: "p25", topic: "Inverse trig", difficulty: 2, marks: 4,
      question: "Differentiate y=sin⁻¹(2x).",
      steps: ["Use d(sin⁻¹u)/dx=u′/√(1−u²).", "Let u=2x, so u′=2.", "Replace u by 2x inside the square root.", "Simplify (2x)² to 4x²."],
      answer: "dy/dx=2/√(1−4x²)", marker: "sin⁻¹ means inverse sine here, not cosecant."
    },
    {
      id: "p26", topic: "Inverse trig", difficulty: 2, marks: 4,
      question: "Differentiate y=cot⁻¹(2x²).",
      steps: ["Use d(cot⁻¹u)/dx=−u′/(1+u²).", "Let u=2x², so u′=4x.", "Substitute into the inverse-cotangent rule.", "Square the full inside expression: (2x²)²=4x⁴."],
      answer: "dy/dx=−4x/(1+4x⁴)", marker: "The conventional derivative used in your notes carries a minus sign."
    },
    {
      id: "p27", topic: "Log & exp", difficulty: 2, marks: 5,
      question: "Differentiate y=log₂(x²+1).",
      steps: ["Use d(logₐu)/dx=u′/[u ln(a)].", "Here a=2, u=x²+1 and u′=2x.", "Substitute the three pieces without changing the base.", "Keep ln 2 in the denominator."],
      answer: "dy/dx=2x/[(x²+1)ln 2]", marker: "The factor ln 2 distinguishes log base 2 from natural log."
    },
    {
      id: "p28", topic: "Log & exp", difficulty: 3, marks: 5,
      question: "Differentiate y=2^(cos x).",
      steps: ["Use d(aᵘ)/dx=aᵘln(a)u′.", "Here a=2 and u=cos x.", "The inner derivative is u′=−sin x.", "Multiply all three factors and keep the negative sign."],
      answer: "dy/dx=−2^(cos x) ln(2) sin x", marker: "This corrects an easy-to-miss sign: the derivative of cos x is negative sine."
    },
    {
      id: "p29", topic: "First principles", difficulty: 3, marks: 7,
      question: "Using first principles, find the slope of f(x)=√x at x=3.",
      steps: ["Write f′(3)=limₕ→₀[√(3+h)−√3]/h.", "Multiply top and bottom by the conjugate √(3+h)+√3.", "The numerator becomes (3+h)−3=h, which cancels with h for h≠0.", "Take the limit of 1/[√(3+h)+√3] as h→0."],
      answer: "f′(3)=1/(2√3)", marker: "The conjugate is the main method mark; keep the limit sign until after cancellation."
    },
    {
      id: "p30", topic: "First principles", difficulty: 3, marks: 7,
      question: "Using first principles, find f′(2) when f(x)=1/x.",
      steps: ["Start with f′(x)=limₕ→₀[1/(x+h)−1/x]/h.", "Combine the two fractions: [x−(x+h)]/[x(x+h)]=−h/[x(x+h)].", "Divide by h and cancel to get −1/[x(x+h)].", "Let h→0, so f′(x)=−1/x², then set x=2."],
      answer: "f′(2)=−1/4", marker: "Keep the negative sign created by x−(x+h)."
    },
    {
      id: "p31", topic: "Hyperbolic", difficulty: 2, marks: 4,
      question: "Differentiate y=csch(e^(3x)).",
      steps: ["Use d(csch u)/dx=−csch(u)coth(u)·u′.", "Let u=e^(3x).", "By the exponential chain rule, u′=3e^(3x).", "Multiply the three factors and keep the leading minus sign."],
      answer: "y′=−3e^(3x)csch(e^(3x))coth(e^(3x))", marker: "There are two nested chain rules: the hyperbolic function and the exponential."
    },
    {
      id: "p32", topic: "Hyperbolic", difficulty: 3, marks: 8,
      question: "Differentiate y=ln(sinh 4x)/ln(e^(x²)).",
      steps: ["First simplify ln(e^(x²))=x².", "For u=ln(sinh 4x), u′=4cosh(4x)/sinh(4x)=4coth(4x).", "Use quotient rule on y=u/x²: y′=[x²u′−2xu]/x⁴.", "Cancel one factor x and substitute u back."],
      answer: "y′=[4x coth(4x)−2ln(sinh 4x)]/x³, for x>0", marker: "Simplifying ln(e^(x²)) first makes the quotient rule much cleaner."
    },
    {
      id: "p33", topic: "Hyperbolic", difficulty: 3, marks: 7,
      question: "Differentiate y=e^(coth 2x)+sin(e^(3x)).",
      steps: ["Differentiate e^(coth 2x): copy the exponential and multiply by d(coth 2x)/dx.", "d(coth 2x)/dx=−2csch²(2x).", "Differentiate sin(e^(3x)): cosine of the inside times 3e^(3x).", "Add the two derivative terms."],
      answer: "y′=−2e^(coth 2x)csch²(2x)+3e^(3x)cos(e^(3x)), x≠0", marker: "Write each chain separately; the first contribution is negative."
    },
    {
      id: "p34", topic: "Hyperbolic", difficulty: 3, marks: 9,
      question: "Differentiate y=sech(e^(4x))/tanh(3x).",
      steps: ["Let u=sech(e^(4x)) and v=tanh(3x), then use y′=(vu′−uv′)/v².", "u′=−4e^(4x)sech(e^(4x))tanh(e^(4x)).", "v′=3sech²(3x).", "Substitute u, v, u′ and v′ into the quotient rule without dropping brackets."],
      answer: "y′={−4e^(4x)sech(e^(4x))tanh(e^(4x))tanh(3x)−3sech(e^(4x))sech²(3x)}/tanh²(3x), x≠0", marker: "This is a stretch question: structure and brackets earn most of the marks."
    }
  ];

  const formulaGroups = [
    {
      title: "Limit essentials", icon: "→", color: "var(--lime-soft)", items: [
        ["limₓ→ₐ c = c", "Constant law"],
        ["limₓ→ₐ x = a", "Identity law"],
        ["lim(f±g)=lim f±lim g", "Sum and difference"],
        ["lim(fg)=(lim f)(lim g)", "Product law"],
        ["lim(f/g)=lim f / lim g", "Only when denominator limit ≠0"],
        ["limₓ→₀ sin x/x = 1", "Radians only"],
        ["limₓ→₀ tan x/x = 1", "Radians only"],
        ["limₓ→₀ (1−cos x)/x = 0", "Useful standard limit"],
        ["limₓ→₀ (1−cos x)/x² = 1/2", "Useful standard limit"],
        ["L exists ⇔ L₋=L₊", "Two-sided limit test"],
        ["limₓ→±∞ 1/xⁿ = 0, n>0", "Reciprocal powers"],
        ["deg P < deg Q ⇒ lim P/Q=0", "Rational end behaviour"],
        ["deg P = deg Q ⇒ leading coefficients ratio", "Rational end behaviour"],
        ["√(x²)=|x|", "Important for x→−∞"]
      ]
    },
    {
      title: "Continuity & first principles", icon: "△", color: "var(--yellow-soft)", items: [
        ["limₓ→ₐ f(x)=f(a)", "With f(a) and the limit both existing"],
        ["f′(x)=limₕ→₀ [f(x+h)−f(x)]/h", "Derivative definition"],
        ["f′(a)=limₓ→ₐ [f(x)−f(a)]/(x−a)", "Derivative at a point"],
        ["y−f(a)=f′(a)(x−a)", "Tangent at x=a"],
        ["m<sub>normal</sub>=−1/m<sub>tangent</sub>", "For non-zero finite tangent slope"]
      ]
    },
    {
      title: "Core derivative rules", icon: "d", color: "var(--blue-soft)", items: [
        ["d(c)/dx=0", "Constant"],
        ["d(xⁿ)/dx=nxⁿ⁻¹", "Power rule"],
        ["d[c f(x)]/dx=c f′(x)", "Constant multiple"],
        ["(u±v)′=u′±v′", "Sum and difference"],
        ["(uv)′=u′v+uv′", "Product rule"],
        ["(u/v)′=(vu′−uv′)/v²", "Quotient rule"],
        ["dy/dx=(dy/du)(du/dx)", "Chain rule"]
      ]
    },
    {
      title: "Trigonometric derivatives", icon: "θ", color: "var(--orange-soft)", items: [
        ["(sin x)′=cos x", "Sine"],
        ["(cos x)′=−sin x", "Cosine — note the minus"],
        ["(tan x)′=sec²x", "Tangent"],
        ["(cot x)′=−cosec²x", "Cotangent"],
        ["(sec x)′=sec x tan x", "Secant"],
        ["(cosec x)′=−cosec x cot x", "Cosecant"]
      ]
    },
    {
      title: "Inverse trigonometric derivatives", icon: "⁻¹", color: "var(--blue-soft)", items: [
        ["(sin⁻¹x)′=1/√(1−x²)", "Inverse sine; |x|<1"],
        ["(cos⁻¹x)′=−1/√(1−x²)", "Inverse cosine; note the minus"],
        ["(tan⁻¹x)′=1/(1+x²)", "Inverse tangent"],
        ["(cot⁻¹x)′=−1/(1+x²)", "Inverse cotangent convention in your notes"],
        ["(sec⁻¹x)′=1/(|x|√(x²−1))", "Inverse secant; |x|>1"],
        ["(cosec⁻¹x)′=−1/(|x|√(x²−1))", "Inverse cosecant; |x|>1"],
        ["(sin⁻¹u)′=u′/√(1−u²)", "Chain-rule form"],
        ["(tan⁻¹u)′=u′/(1+u²)", "Chain-rule form"]
      ]
    },
    {
      title: "Exponential & logarithmic", icon: "e", color: "var(--lime-soft)", items: [
        ["(eˣ)′=eˣ", "Natural exponential"],
        ["(eᵘ)′=eᵘu′", "With chain rule"],
        ["(aˣ)′=aˣ ln a", "Base a>0"],
        ["(ln x)′=1/x", "For x>0"],
        ["(ln u)′=u′/u", "With chain rule"],
        ["(logₐx)′=1/(x ln a)", "Base a>0, a≠1"]
      ]
    },
    {
      title: "Hyperbolic functions", icon: "h", color: "var(--yellow-soft)", items: [
        ["sinh x=(eˣ−e⁻ˣ)/2", "Definition"],
        ["cosh x=(eˣ+e⁻ˣ)/2", "Definition"],
        ["cosh²x−sinh²x=1", "Main identity"],
        ["sech²x+tanh²x=1", "Divide the main identity by cosh²x"],
        ["coth²x−csch²x=1", "Rearranged hyperbolic identity"],
        ["(sinh x)′=cosh x", "Hyperbolic sine"],
        ["(cosh x)′=sinh x", "Hyperbolic cosine"],
        ["(tanh x)′=sech²x", "Hyperbolic tangent"],
        ["(coth x)′=−csch²x", "Hyperbolic cotangent"],
        ["(sech x)′=−sech x tanh x", "Hyperbolic secant"],
        ["(csch x)′=−csch x coth x", "Hyperbolic cosecant"]
      ]
    }
  ];

  const checkpoints = [
    {
      id: "limits-check", title: "Limit checkpoint", subtitle: "Laws, 0/0 and one-sided limits", pass: 4,
      questions: [
        { q: "What should you try first for limₓ→₂(x²+3)?", options: ["Differentiate", "Direct substitution", "Factor", "Use a table only"], answer: 1, why: "Polynomials are continuous, so substitution gives 7 immediately." },
        { q: "limₓ→₀ sin(4x)/x equals…", options: ["0", "1", "4", "∞"], answer: 2, why: "Write it as 4·sin(4x)/(4x); the standard-limit part tends to 1." },
        { q: "If L₋=3 and L₊=−1 at x=a, what is limₓ→ₐf(x)?", options: ["1", "2", "−1", "It does not exist"], answer: 3, why: "A two-sided limit needs equal one-sided limits; never average them." },
        { q: "After substitution gives 0/0, what does 0/0 mean?", options: ["The answer is zero", "The answer is infinity", "Simplify before deciding", "The limit never exists"], answer: 2, why: "0/0 is indeterminate: factor, rationalise, or use an identity/standard limit." },
        { q: "limₓ→∞(7x²+x)/(2x²−3) equals…", options: ["0", "7/2", "∞", "2/7"], answer: 1, why: "Equal degrees mean the ratio of leading coefficients: 7/2." }
      ]
    },
    {
      id: "derivative-check", title: "Derivative checkpoint", subtitle: "Meaning, rules and tangents", pass: 4,
      questions: [
        { q: "Which expression is f′(x) from first principles?", options: ["limₕ→₀[f(x+h)−f(x)]/h", "f(x+h)/h", "[f(x)−f(h)]/x", "limₓ→₀f(x)"], answer: 0, why: "The derivative is the limiting difference quotient." },
        { q: "d/dx(5x⁴−2x) is…", options: ["5x³−2", "20x³−2", "20x⁵−2", "4x³"], answer: 1, why: "Use the power rule term by term: 5·4x³−2." },
        { q: "Which rule fits y=(x²+1)eˣ?", options: ["Chain only", "Quotient", "Product", "No rule"], answer: 2, why: "Two functions of x are multiplied, so use product rule." },
        { q: "d/dx(2x+1)⁶ is…", options: ["6(2x+1)⁵", "12(2x+1)⁵", "12(2x+1)⁶", "6(2x)⁵"], answer: 1, why: "Outside derivative gives 6(2x+1)⁵; multiply by inner derivative 2." },
        { q: "The tangent to y=f(x) at x=a uses which point?", options: ["(0,a)", "(a,0)", "(a,f(a))", "(f(a),a)"], answer: 2, why: "At input a, the point on the graph is (a,f(a))." }
      ]
    },
    {
      id: "functions-check", title: "Function-family checkpoint", subtitle: "Trig, logs and hyperbolic", pass: 4,
      questions: [
        { q: "d/dx cos x equals…", options: ["sin x", "−sin x", "cos x", "−cos x"], answer: 1, why: "Cosine differentiates to negative sine." },
        { q: "d/dx tan(3x) equals…", options: ["sec²(3x)", "3tan²(3x)", "3sec²(3x)", "sec(3x)tan(3x)"], answer: 2, why: "Tangent gives sec²; chain rule contributes 3." },
        { q: "d/dx ln(x²+4) equals…", options: ["1/(x²+4)", "2x/(x²+4)", "ln(2x)", "2x ln(x²+4)"], answer: 1, why: "For ln u, use u′/u with u′=2x." },
        { q: "d/dx cosh x equals…", options: ["−sinh x", "cosh x", "sinh x", "sech²x"], answer: 2, why: "Unlike ordinary cosine, cosh differentiates to +sinh." },
        { q: "Which identity is correct?", options: ["cosh²x+sinh²x=1", "cosh²x−sinh²x=1", "1−tanh²x=csch²x", "sinh x=1/cosh x"], answer: 1, why: "The fundamental hyperbolic identity is cosh²x−sinh²x=1." }
      ]
    }
  ];

  const sources = [
    { label: "Your photographed calculus notebook", detail: "Primary sequence, examples and emphasis", href: "notes/" },
    { label: "OpenStax Calculus Volume 1 — Limits", detail: "Concept checks and exercise patterns, §§2.1–2.5", href: "https://openstax.org/books/calculus-volume-1/pages/2-introduction" },
    { label: "OpenStax Calculus Volume 1 — Derivatives", detail: "Definitions and rule practice, §§3.1–3.9", href: "https://openstax.org/books/calculus-volume-1/pages/3-introduction" },
    { label: "OpenStax Calculus Volume 1 — Hyperbolic Functions", detail: "Definitions, identities and derivatives, §6.9", href: "https://openstax.org/books/calculus-volume-1/pages/6-9-calculus-of-the-hyperbolic-functions" },
    { label: "CASIO calculator manual finder", detail: "Official manuals; search fx-82EX (guide RJA532417-001V01)", href: "https://www.casio.com/intl/support/calculators/manual/" }
  ];

  return { lessons, practice, formulaGroups, checkpoints, sources };
})();

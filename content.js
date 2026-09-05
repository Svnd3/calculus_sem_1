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
        "Try direct substitution first only when the expression is continuous at that input.",
        "Limit laws let you split sums, products and quotients; the quotient denominator must not approach 0."
      ],
      sections: [
        {
          title: "What the notation is saying",
          html: `<p>In <strong>lim<sub>x→a</sub> f(x) = L</strong>, we can make f(x) as close to L as we like by taking x sufficiently close to a. The actual value f(a) can be L, different, or missing.</p>
          <div class="formula-display">lim<sub>x→a</sub> f(x) = L<small>Input approaches a; output approaches L.</small></div>`
        },
        {
          title: "When direct substitution is allowed",
          html: `<p>Substitution works because familiar functions are continuous on their domains: polynomials everywhere; rational functions where the denominator is not zero; roots where the real root exists; and trig functions where they are defined. You are not using a trick — you are using continuity.</p>
          <div class="micro-example"><strong>Say the reason, then calculate</strong><p>lim<sub>x→2</sub>(x²+3x−1). A polynomial is continuous at 2, so substitute.</p><div class="answer-line">=2²+3(2)−1=9.</div></div>
          <div class="micro-example"><strong>A hole does not control the limit</strong><p>Let f(x)=(x²−1)/(x−1) for x≠1, but f(1)=20. Nearby, f(x)=x+1, so the outputs approach 2.</p><div class="answer-line">lim<sub>x→1</sub>f(x)=2 even though f(1)=20.</div></div>`
        },
        {
          title: "The limit laws",
          html: `<p>If lim f(x)=L and lim g(x)=M, the following rules let you build a larger limit from smaller ones:</p><ul>
            <li><strong>Sum:</strong> lim[f(x)+g(x)] = L + M</li>
            <li><strong>Difference:</strong> lim[f(x)−g(x)] = L − M</li>
            <li><strong>Constant:</strong> lim[c f(x)] = cL</li>
            <li><strong>Product:</strong> lim[f(x)g(x)] = LM</li>
            <li><strong>Quotient:</strong> lim[f(x)/g(x)] = L/M, provided M ≠ 0</li>
            <li><strong>Power/root:</strong> pass the limit inside when the resulting real root is defined.</li>
          </ul>`
        },
        {
          title: "When substitution gives 0/0",
          html: `<p><strong>0/0 is not the answer.</strong> It means both numerator and denominator vanished before the real behaviour was visible. Look at the shape of the expression:</p>
          <ol><li><strong>Polynomials?</strong> Factor.</li><li><strong>A square root minus something?</strong> Multiply by the conjugate.</li><li><strong>Several fractions?</strong> Use a common denominator.</li><li><strong>sin or tan near 0?</strong> Build a standard trig limit.</li></ol>
          <div class="micro-example"><strong>Route 1 — factor</strong><p>lim<sub>x→3</sub>(x²−9)/(x−3)=lim [(x−3)(x+3)]/(x−3).</p><p>For nearby x, x−3 is non-zero, so it cancels.</p><div class="answer-line">lim<sub>x→3</sub>(x+3)=6.</div></div>
          <div class="micro-example"><strong>Route 2 — use the conjugate</strong><p>lim<sub>x→0</sub>[√(x+4)−2]/x. Multiply top and bottom by √(x+4)+2.</p><p>The numerator becomes (x+4)−4=x, which cancels with the denominator.</p><div class="answer-line">lim 1/[√(x+4)+2]=1/4.</div></div>
          <div class="micro-example"><strong>Route 3 — common denominator</strong><p>lim<sub>x→1</sub>[1/x−1]/(x−1) = lim [(1−x)/x]/(x−1).</p><div class="answer-line">=lim −(x−1)/[x(x−1)]=lim −1/x=−1.</div></div>`
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
        "Memorise limₓ→₀(sin x)/x=1 and limₓ→₀(1−cos x)/x²=1/2.",
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
          html: `<p>The useful small-angle facts are below. They work only in radians because a radian measures angle by arc length, which is what makes the ratio tend to 1.</p>
          <div class="formula-display">lim<sub>u→0</sub> sin u/u=1 &nbsp; | &nbsp; lim<sub>u→0</sub> tan u/u=1 &nbsp; | &nbsp; lim<sub>u→0</sub>(1−cos u)/u²=1/2<small>Consequently, lim (1−cos u)/u=0.</small></div>
          <div class="micro-example"><strong>Match the angle exactly</strong><p>lim<sub>x→0</sub>sin(5x)/x = 5·lim sin(5x)/(5x).</p><div class="answer-line">=5·1=5.</div></div>
          <div class="micro-example"><strong>Two sine rates</strong><p>lim<sub>x→0</sub>sin(3x)/sin(5x)=[sin(3x)/(3x)]·[5x/sin(5x)]·3/5.</p><div class="answer-line">=1·1·3/5=3/5.</div></div>
          <div class="micro-example"><strong>Cosine pattern</strong><p>lim<sub>x→0</sub>[1−cos(4x)]/x² = 16·lim [1−cos(4x)]/(4x)².</p><div class="answer-line">=16·(1/2)=8.</div></div>`
        },
        {
          title: "Identity route",
          html: `<p>When substitution still produces 0/0, rewrite using identities such as tan x=sin x/cos x or 1−cos²x=sin²x. Your goal is always to expose sin u/u, tan u/u or (1−cos u)/u².</p>
          <div class="micro-example"><strong>Know when not to force a pattern</strong><p>lim<sub>x→π/4</sub>tan x can be found by substitution because cos(π/4)≠0.</p><div class="answer-line">tan(π/4)=1.</div></div>`,
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
          <p>Imagine walking toward a doorway from each side. If both walks arrive at the same height, the two-sided limit exists. A <strong>filled dot</strong> gives the actual value f(a); an <strong>open dot</strong> shows a value the branch approaches but does not include. Neither dot can replace the left/right comparison.</p>`
        },
        {
          title: "Piecewise exam method",
          html: `<p><strong>1.</strong> Write L₋ and use the branch valid just below a. <strong>2.</strong> Write L₊ and use the branch valid just above a. <strong>3.</strong> Compare them in one sentence. The symbols &lt; and ≤ decide which formula owns f(a), but they do not change which formula nearby points use.</p>
          <div class="micro-example"><strong>Worked check</strong><p>f(x)={x+1 for x&lt;2; 2x−3 for x≥2}</p><p>L₋=2+1=3, while L₊=2(2)−3=1.</p><div class="answer-line">Since 3 ≠ 1, lim<sub>x→2</sub>f(x) does not exist.</div></div>`
        },
        {
          title: "Three pictures to recognise",
          html: `<div class="micro-example"><strong>Continuous join</strong><p>f(x)=x+1 for x&lt;2 and 3x−3 for x≥2. Both sides give 3 and f(2)=3.</p><div class="answer-line">The limit is 3 and f is continuous at 2.</div></div>
          <div class="micro-example"><strong>Jump</strong><p>If the left branch approaches 3 but the right branch approaches 1, the graph jumps.</p><div class="answer-line">Finite but unequal sides ⇒ the two-sided limit does not exist.</div></div>
          <div class="micro-example"><strong>Infinite sides</strong><p>For 1/(x−2), L₋=−∞ and L₊=+∞.</p><div class="answer-line">The signs disagree, so the two-sided limit does not exist; x=2 is a vertical asymptote.</div></div>
          <p>The limit may also exist while f(a) is different. If both sides approach 4 but f(a)=9, the limit is 4; that is a removable discontinuity.</p>`,
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
          html: `<p>If an <strong>uncancelled</strong> denominator factor approaches zero while the numerator stays non-zero, inspect the sign on each side. Make a tiny sign table: numerator sign × denominator sign = fraction sign.</p>
          <div class="formula-display">lim<sub>x→2⁻</sub>1/(x−2)=−∞ &nbsp; | &nbsp; lim<sub>x→2⁺</sub>1/(x−2)=+∞</div>
          <p>Left of 2, x−2 is a tiny negative number, so its reciprocal is a huge negative number. Right of 2 it is tiny positive, so the reciprocal is huge positive. The ∞ symbol describes unbounded behaviour; it is not a value you substitute.</p>`
        },
        {
          title: "Rational functions at infinity",
          html: `<p>For P(x)/Q(x), the largest powers control the end behaviour because lower powers become tiny after division by the largest power.</p><ul><li><strong>deg P&lt;deg Q:</strong> limit 0; horizontal asymptote y=0.</li><li><strong>deg P=deg Q:</strong> ratio of leading coefficients.</li><li><strong>deg P&gt;deg Q:</strong> no horizontal asymptote. If the top is exactly one degree higher, polynomial division gives a slant asymptote.</li></ul>
          <div class="micro-example"><strong>Equal degree, show the line</strong><p>lim<sub>x→∞</sub>(3x²−x+4)/(2x²+5). Divide every term by x²:</p><p>[3−1/x+4/x²]/[2+5/x²].</p><div class="answer-line">The reciprocal terms vanish, so the limit is 3/2.</div></div>`
        },
        {
          title: "One rational function can have a hole and an asymptote",
          html: `<div class="micro-example"><strong>Work it in this order</strong><p>f(x)=(x²−1)/(x²−6x+5)=[(x−1)(x+1)]/[(x−1)(x−5)].</p><p>Cancel x−1 only after recording x≠1. The simplified rule is (x+1)/(x−5).</p><ul><li>x=1 was cancelled → a <strong>hole</strong>; its missing y-value is (1+1)/(1−5)=−1/2.</li><li>x=5 remains in the denominator → <strong>vertical asymptote</strong>.</li><li>Original degrees are equal → <strong>horizontal asymptote y=1</strong>.</li></ul></div>`,
          optional: true
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
          <p>These checks answer different questions. Check 1 asks whether there is a filled value at a. Check 2 asks whether both nearby sides meet. Check 3 asks whether that meeting height is the actual filled value. Failing any one means discontinuity.</p>
          <div class="micro-example"><strong>Exam sentences you can copy</strong><p><strong>Hole:</strong> “The limit exists, but f(a) is undefined, so condition 1 fails.”</p><p><strong>Wrong filled value:</strong> “The limit exists but is not equal to f(a), so condition 3 fails.”</p><p><strong>Jump:</strong> “The one-sided limits are unequal, so condition 2 fails.”</p></div>`
        },
        {
          title: "Find an unknown constant",
          html: `<div class="micro-example"><strong>Typical exam question</strong><p>f(x)={kx+1 if x&lt;2; x²−1 if x≥2}. Find k for continuity.</p><p>Left limit = 2k+1. Right limit and f(2) = 2²−1=3.</p><div class="answer-line">Set 2k+1=3, so k=1.</div></div>`
        },
        {
          title: "Your CAT 1 continuity pattern",
          html: `<div class="micro-example"><strong>At x=0</strong><p>f(x)=2x³+1 for x≥0, and f(x)=A sin(3x)+B cos(3x) for x&lt;0.</p><p>Right limit and f(0): 2(0)³+1=1.</p><p>Left limit: A sin0+B cos0=0+B=B.</p><p>Continuity needs B=1. The A-term always becomes zero at the join, so continuity cannot determine A.</p><div class="answer-line">B=1; A may be any real number.</div></div>
          <p><strong>Important idea:</strong> an unknown is not automatically forced to one value. If its entire term vanishes at the joining point, it remains free.</p>`
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
          <p>Here h is a small horizontal step. The numerator f(x+h)−f(x) is the matching vertical change, so their quotient is the slope of a secant line through two points. As h approaches 0, the second point slides toward the first and the secant slope approaches the tangent slope.</p>
          <p>At a particular point a, you may also use f′(a)=lim<sub>x→a</sub>[f(x)−f(a)]/(x−a). Both definitions express “vertical change divided by horizontal change, with the gap shrinking to zero.”</p>`
        },
        {
          title: "Full first-principles example",
          html: `<div class="micro-example"><strong>Find the derivative of f(x)=x²</strong><p>f(x+h)=(x+h)²=x²+2xh+h².</p><p>[f(x+h)−f(x)]/h = [x²+2xh+h²−x²]/h = 2x+h.</p><div class="answer-line">f′(x)=lim<sub>h→0</sub>(2x+h)=2x.</div></div>`
        },
        {
          title: "Must read: why (sin 3x)′=3 cos 3x",
          html: `<p>Your notebook marks this derivation <strong>READ!!!!!</strong> Start with the definition and expand sin(3x+3h):</p>
          <div class="formula-display">lim<sub>h→0</sub> [sin(3x+3h)−sin(3x)]/h</div>
          <p>Using sin(A+B)=sin A cos B+cos A sin B, subtracting sin(3x), and grouping gives</p>
          <div class="formula-display">sin(3x)[cos(3h)−1]/h + cos(3x)sin(3h)/h</div>
          <p>For the second fraction, multiply and divide by 3: sin(3h)/h=3[sin(3h)/(3h)]→3. For the first, [cos(3h)−1]/h→0. Therefore only 3cos(3x) remains.</p>
          <div class="formula-display">d[sin(3x)]/dx = 3cos(3x)</div>`
        },
        {
          title: "Tangent and normal equations",
          html: `<p>At x=a, first find the point (a,f(a)), then the tangent gradient m=f′(a). Use point-gradient form. A normal is perpendicular, so its slope is the negative reciprocal when m is non-zero.</p><div class="formula-display">tangent: y−f(a)=f′(a)(x−a) &nbsp; | &nbsp; m<sub>normal</sub>=−1/f′(a)</div>
          <div class="micro-example"><strong>For y=x² at x=2</strong><p>Point=(2,4); f′(x)=2x, so tangent slope=4.</p><div class="answer-line">Tangent: y−4=4(x−2). Normal: y−4=−¼(x−2).</div></div>`
        },
        {
          title: "A second first-principles example",
          html: `<div class="micro-example"><strong>Find d(1/x)/dx from the definition</strong><p>[1/(x+h)−1/x]/h = [x−(x+h)]/[hx(x+h)] = −h/[hx(x+h)].</p><p>Cancel h before taking the limit.</p><div class="answer-line">f′(x)=lim<sub>h→0</sub>−1/[x(x+h)]=−1/x², x≠0.</div></div>`,
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
          title: "First recognise the structure",
          html: `<p>Before touching the algebra, ask what holds the expression together. This decides the rule:</p>
          <div class="rule-choice-grid">
            <div><strong>Terms joined by + or −</strong><span>Differentiate term by term.</span></div>
            <div><strong>Two changing factors multiplied</strong><span>Use product rule.</span></div>
            <div><strong>One function divided by another</strong><span>Use quotient rule.</span></div>
            <div><strong>A function inside another</strong><span>Use chain rule.</span></div>
          </div>
          <p>Rules can be nested. In x²sin(3x), multiplication calls for product rule, while sin(3x) needs chain rule inside one product term.</p>`
        },
        {
          title: "Power rule, including roots and reciprocals",
          html: `<div class="formula-display">d(c)/dx=0 &nbsp; | &nbsp; d(xⁿ)/dx=nxⁿ⁻¹</div>
          <p>The power n moves to the front as a multiplier, then the exponent falls by one. Rewrite roots and reciprocals as powers first: √x=x¹⁄² and 1/x=x⁻¹.</p>
          <div class="micro-example"><strong>Term by term</strong><p>d/dx(4x⁵−3x²+7)=20x⁴−6x+0.</p><div class="answer-line">=20x⁴−6x.</div></div>
          <div class="micro-example"><strong>Fractional and negative powers</strong><p>d(√x)/dx=d(x¹⁄²)/dx=½x⁻¹⁄²=1/(2√x).</p><p>d(1/x)/dx=d(x⁻¹)/dx=−x⁻².</p><div class="answer-line">Roots and reciprocals are still power-rule questions.</div></div>`
        },
        {
          title: "Product rule: each factor gets a turn",
          html: `<div class="formula-display">(uv)′=u′v+uv′<small>First changes while second stays + first stays while second changes.</small></div>
          <p>It is <strong>not</strong> u′v′. A product changes for two reasons, so the answer has two terms.</p>
          <div class="micro-example"><strong>y=(x²+1)sin x</strong><p>Let u=x²+1, so u′=2x. Let v=sin x, so v′=cos x.</p><p>y′=u′v+uv′.</p><div class="answer-line">y′=2x sin x+(x²+1)cos x.</div></div>`
        },
        {
          title: "Quotient rule: preserve the order",
          html: `<div class="formula-display">(u/v)′=(vu′−uv′)/v²<small>“bottom d-top minus top d-bottom, over bottom squared.”</small></div>
          <div class="micro-example"><strong>y=(x²+1)/(x−1)</strong><p>u=x²+1, u′=2x; v=x−1, v′=1.</p><p>y′=[(x−1)(2x)−(x²+1)(1)]/(x−1)².</p><div class="answer-line">y′=(x²−2x−1)/(x−1)².</div></div>
          <p>Do not expand before the rule unless it truly makes the expression simpler. The bracket after the minus prevents sign losses.</p>`
        },
        {
          title: "Chain rule: outside, same inside, times inside",
          html: `<div class="formula-display">If y=f(u), u=g(x), then dy/dx=(dy/du)(du/dx)</div>
          <p>A nested function changes twice: the outside responds to a change in u, while u responds to a change in x. Differentiate the <strong>outside</strong>, keep the <strong>inside unchanged</strong>, then multiply by the <strong>inside derivative</strong>.</p>
          <div class="micro-example"><strong>y=(3x²+1)⁵</strong><p>Outside: u⁵ becomes 5u⁴. Same inside: 5(3x²+1)⁴. Inside derivative: 6x.</p><div class="answer-line">y′=30x(3x²+1)⁴.</div></div>
          <div class="micro-example"><strong>How to spot more than one layer</strong><p>For [cos(2x)]⁴, the layers are power → cosine → 2x.</p><p>4cos³(2x)·[−sin(2x)]·2</p><div class="answer-line">=−8cos³(2x)sin(2x).</div></div>`
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
          title: "Must memorise: see it → write it",
          html: `<p>Let u mean any inside expression such as 4x, x² or ln x. If the input is only x, then u′=1.</p>
          <div class="formula-display">(sin u)′=cos u·u′ &nbsp; | &nbsp; (cos u)′=−sin u·u′<br>(tan u)′=sec²u·u′ &nbsp; | &nbsp; (cot u)′=−cosec²u·u′<br>(sec u)′=sec u tan u·u′ &nbsp; | &nbsp; (cosec u)′=−cosec u cot u·u′</div>
          <p><strong>Memory pattern:</strong> ordinary trig derivatives beginning with <strong>C</strong> — cosine, cotangent and cosecant — carry a minus. Tan and cot produce the matching reciprocal squared. Sec and cosec copy themselves and attach tan or cot.</p>
          <p><strong>Vocabulary:</strong> cosec=csc, sec u=1/cos u, cosec u=1/sin u, and cot u=cos u/sin u.</p>
          <div class="micro-example"><strong>Fast chain example</strong><p>sin(3x²) becomes cos(3x²), then multiply by (3x²)′.</p><div class="answer-line">d/dx[sin(3x²)]=6x cos(3x²).</div></div>`
        },
        {
          title: "One worked example for every rule",
          html: `<div class="worked-example-grid">
            <div class="micro-example"><strong>sin(4x)</strong><p>sin→cos; (4x)′=4.</p><div class="answer-line">4cos(4x)</div></div>
            <div class="micro-example"><strong>cos(x²)</strong><p>cos→−sin; (x²)′=2x.</p><div class="answer-line">−2x sin(x²)</div></div>
            <div class="micro-example"><strong>tan(5x−1)</strong><p>tan→sec²; inside derivative=5.</p><div class="answer-line">5sec²(5x−1)</div></div>
            <div class="micro-example"><strong>cot(x³)</strong><p>cot→−cosec²; inside derivative=3x².</p><div class="answer-line">−3x²cosec²(x³)</div></div>
            <div class="micro-example"><strong>sec(3x)</strong><p>sec→sec tan; inside derivative=3.</p><div class="answer-line">3sec(3x)tan(3x)</div></div>
            <div class="micro-example"><strong>cosec(2x)</strong><p>cosec→−cosec cot; inside derivative=2.</p><div class="answer-line">−2cosec(2x)cot(2x)</div></div>
          </div>`,
          optional: true
        },
        {
          title: "When a trig function is inside another rule",
          html: `<div class="micro-example"><strong>y=sin²(3x) means [sin(3x)]²</strong><p>Power layer: 2sin(3x). Trig layer: cos(3x). Inner linear layer: 3.</p><div class="answer-line">y′=6sin(3x)cos(3x).</div></div>
          <div class="micro-example"><strong>y=sec x tan x</strong><p>Two functions are multiplied, so start with product rule.</p><p>y′=(sec x tan x)(tan x)+sec x(sec²x).</p><div class="answer-line">y′=sec x tan²x+sec³x.</div></div>`,
          optional: true
        },
        {
          title: "Why sec and cosec copy themselves",
          html: `<p>This is useful when a formula refuses to stick. Since sec x=1/cos x=(cos x)⁻¹, chain rule gives</p><div class="formula-display">(sec x)′=−(cos x)⁻²(−sin x)=sin x/cos²x=sec x tan x.</div>
          <p>Similarly, cosec x=(sin x)⁻¹ gives −cos x/sin²x=−cosec x cot x.</p>`,
          optional: true
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
          title: "Must memorise: all six with an inside u",
          html: `<p>Use the names <strong>arcsin, arccos, arctan</strong> when possible. They make it clear that these are inverse functions, not reciprocals. Every numerator contains u′ because chain rule still applies.</p>
          <div class="formula-display">(arcsin u)′=u′/√(1−u²) &nbsp; | &nbsp; (arccos u)′=−u′/√(1−u²)<br>(arctan u)′=u′/(1+u²) &nbsp; | &nbsp; (arccot u)′=−u′/(1+u²)<br>(arcsec u)′=u′/[|u|√(u²−1)] &nbsp; | &nbsp; (arccosec u)′=−u′/[|u|√(u²−1)]</div>
          <p><strong>Pair memory:</strong> arcsin/arccos share √(1−u²); arctan/arccot share 1+u²; arcsec/arccosec share |u|√(u²−1). Within each pair, the cos/cot/cosec partner is negative.</p>`
        },
        {
          title: "Why arcsine has that root",
          html: `<p>Let y=sin⁻¹x, so sin y=x. Differentiate implicitly: cos y·dy/dx=1. Therefore dy/dx=1/cos y. Since cos²y=1−sin²y and sin y=x, cos y=√(1−x²) on the principal range.</p>`
        },
        {
          title: "The other two — and a notebook trap",
          html: `<div class="formula-display">(arcsec u)′=u′/[|u|√(u²−1)] &nbsp; | &nbsp; (arccosec u)′=−u′/[|u|√(u²−1)]</div>
          <p>The absolute value makes each rule work on both branches. The function is real for |u|≥1, while the displayed derivative is finite for |u|&gt;1. Also, <strong>arccosec(sin 4x)</strong> is not an ordinary differentiable real composition: sin 4x stays between −1 and 1, so it reaches the inverse-cosecant domain only at isolated points. Do not force the chain rule onto an expression with no open real domain.</p>`
        },
        {
          title: "Chain-rule examples",
          html: `<div class="worked-example-grid">
            <div class="micro-example"><strong>y=arcsin(2x)</strong><p>u=2x and u′=2. Put u′ on top and replace u² by (2x)².</p><div class="answer-line">y′=2/√(1−4x²), |x|&lt;½.</div></div>
            <div class="micro-example"><strong>y=arccos(3x)</strong><p>Use the negative partner and u′=3.</p><div class="answer-line">y′=−3/√(1−9x²).</div></div>
            <div class="micro-example"><strong>y=arctan(x²)</strong><p>u′=2x and 1+u²=1+x⁴.</p><div class="answer-line">y′=2x/(1+x⁴).</div></div>
            <div class="micro-example"><strong>y=arcsec(2x)</strong><p>u′=2; keep the absolute value around 2x.</p><div class="answer-line">y′=2/[|2x|√(4x²−1)].</div></div>
          </div>`
        },
        {
          title: "A convention you should know",
          html: `<p>This course uses the common principal range 0&lt;arccot x&lt;π, which gives (arccot x)′=−1/(1+x²). Some books choose a different convention, so follow the convention stated by your lecturer or paper.</p>`,
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
      lead: "Exponentials keep their own shape when differentiated. A logarithm follows the rule u′/u: the change of the inside goes over the unchanged inside.",
      catches: [
        "(eᵘ)′=eᵘu′ — copy the exponential and multiply by the inner derivative.",
        "(aᵘ)′=aᵘln(a)u′ — a base other than e adds ln(a).",
        "(ln u)′=u′/u and (logₐu)′=u′/[u ln(a)]."
      ],
      sections: [
        {
          title: "Exponential rules",
          html: `<div class="formula-display">d(eᵘ)/dx=eᵘu′ &nbsp; | &nbsp; d(aᵘ)/dx=aᵘln(a)u′</div>
          <p><strong>Why the rules differ:</strong> e is the special base whose exponential copies itself. Any other positive base a contributes the constant factor ln(a). In both cases, an inside function contributes u′.</p>
          <div class="worked-example-grid">
            <div class="micro-example"><strong>y=e^(2x−3)</strong><p>Copy e^(2x−3), then multiply by (2x−3)′.</p><div class="answer-line">y′=2e^(2x−3).</div></div>
            <div class="micro-example"><strong>y=2^(cos x)</strong><p>Copy the exponential, add ln2, then multiply by −sin x.</p><div class="answer-line">y′=−2^(cos x)ln2 sin x.</div></div>
          </div>
          <div class="micro-example"><strong>Product + two chain rules</strong><p>For y=e³ˣsin(2x), product rule gives (3e³ˣ)sin(2x)+e³ˣ[2cos(2x)].</p><div class="answer-line">y′=3e³ˣsin(2x)+2e³ˣcos(2x).</div></div>`
        },
        {
          title: "Logarithmic rules",
          html: `<div class="formula-display">d(ln u)/dx=u′/u &nbsp; | &nbsp; d(logₐu)/dx=u′/[u ln(a)]</div>
          <p>The base-change identity logₐu=ln u/ln a explains the extra ln(a). For real logarithms, the input u must be positive. The related rule d[ln|u|]/dx=u′/u works wherever u≠0.</p>
          <div class="worked-example-grid">
            <div class="micro-example"><strong>y=ln(x²+1)</strong><p>Inside u=x²+1 and u′=2x.</p><div class="answer-line">y′=2x/(x²+1).</div></div>
            <div class="micro-example"><strong>y=log₂(3x−1)</strong><p>u′=3; denominator is u ln2.</p><div class="answer-line">y′=3/[(3x−1)ln2], x&gt;1/3.</div></div>
          </div>`
        },
        {
          title: "Do not mix up these four shapes",
          html: `<div class="rule-choice-grid"><div><strong>xⁿ</strong><span>Power moves down: nxⁿ⁻¹.</span></div><div><strong>eˣ</strong><span>Copies itself.</span></div><div><strong>aˣ</strong><span>Copies itself × ln a.</span></div><div><strong>ln x</strong><span>Becomes 1/x.</span></div></div>
          <div class="micro-example"><strong>Stretch: y=xˣ</strong><p>Both base and exponent change, so ordinary power and exponential rules do not fit. Take logs: ln y=x ln x.</p><p>Differentiate implicitly: y′/y=ln x+1.</p><div class="answer-line">y′=xˣ(ln x+1), x&gt;0.</div></div>`,
          optional: true
        }
      ],
      sticky: "ln(2x) differentiates to 1/x because 2/(2x)=1/x. The constant inside has not been ignored; it cancels.",
      source: "Notebook + OpenStax 3.9"
    },
    {
      id: "hyperbolic",
      title: "Hyperbolic functions",
      short: "Differentiate all six hyperbolic functions.",
      priority: "must",
      level: "Core",
      minutes: 22,
      lead: "Hyperbolic functions look like trig functions but are built from exponentials. Their derivative signs follow different patterns.",
      catches: [
        "sinh x=(eˣ−e⁻ˣ)/2 and cosh x=(eˣ+e⁻ˣ)/2.",
        "(sinh x)′=cosh x and (cosh x)′=sinh x — no negative sign.",
        "(tanh x)′=sech²x; (csch x)′=−csch x coth x."
      ],
      sections: [
        {
          title: "What the names mean",
          html: `<p>Hyperbolic functions are built from exponentials; they are not ordinary trig functions with an h attached. Start with sinh and cosh, then form the other four as quotients or reciprocals.</p>
          <div class="formula-display">sinh x=(eˣ−e⁻ˣ)/2 &nbsp; | &nbsp; cosh x=(eˣ+e⁻ˣ)/2<br>tanh x=sinh x/cosh x &nbsp; | &nbsp; coth x=cosh x/sinh x<br>sech x=1/cosh x &nbsp; | &nbsp; csch x=1/sinh x</div>
          <p>The central identity is cosh²x−sinh²x=1. Dividing it by cosh²x gives sech²x+tanh²x=1; dividing by sinh²x gives coth²x−csch²x=1.</p>`
        },
        {
          title: "Must memorise: all six with an inside u",
          html: `<div class="formula-display">(sinh u)′=cosh u·u′ &nbsp; | &nbsp; (cosh u)′=sinh u·u′<br>(tanh u)′=sech²u·u′ &nbsp; | &nbsp; (coth u)′=−csch²u·u′<br>(sech u)′=−sech u tanh u·u′ &nbsp; | &nbsp; (csch u)′=−csch u coth u·u′</div>
          <p><strong>Memory pattern:</strong> sinh and cosh swap with no minus; tanh acts like tan; the reciprocal-side functions coth, sech and csch carry negative signs. In particular, cosh′=+sinh — do not import the minus from ordinary cosine.</p>
          <div class="micro-example"><strong>Fast chain example</strong><p>cosh(x²) becomes sinh(x²), then multiply by 2x.</p><div class="answer-line">d/dx[cosh(x²)]=2x sinh(x²).</div></div>`
        },
        {
          title: "One worked example for every rule",
          html: `<div class="worked-example-grid">
            <div class="micro-example"><strong>sinh(3x)</strong><p>sinh→cosh; inside gives 3.</p><div class="answer-line">3cosh(3x)</div></div>
            <div class="micro-example"><strong>cosh(x²)</strong><p>cosh→sinh; no minus; inside gives 2x.</p><div class="answer-line">2x sinh(x²)</div></div>
            <div class="micro-example"><strong>tanh(4x)</strong><p>tanh→sech²; inside gives 4.</p><div class="answer-line">4sech²(4x)</div></div>
            <div class="micro-example"><strong>coth(2x)</strong><p>coth→−csch²; inside gives 2.</p><div class="answer-line">−2csch²(2x)</div></div>
            <div class="micro-example"><strong>sech(ln x)</strong><p>sech→−sech tanh; (ln x)′=1/x.</p><div class="answer-line">−sech(ln x)tanh(ln x)/x, x&gt;0</div></div>
            <div class="micro-example"><strong>csch(eˣ)</strong><p>csch→−csch coth; (eˣ)′=eˣ.</p><div class="answer-line">−eˣcsch(eˣ)coth(eˣ)</div></div>
          </div>`,
          optional: true
        },
        {
          title: "Why sinh and cosh swap",
          html: `<p>Differentiate their exponential definitions. In sinh x=(eˣ−e⁻ˣ)/2, differentiating −e⁻ˣ produces +e⁻ˣ, so the result becomes cosh x. In cosh x, differentiating +e⁻ˣ produces −e⁻ˣ, so the result becomes sinh x.</p>
          <div class="micro-example"><strong>From the end of your notes</strong><p>y=cosh(ln(3x)); u′=1/x.</p><div class="answer-line">y′=sinh(ln(3x))/x=(9x²−1)/(6x²), x&gt;0.</div></div>`,
          optional: true
        },
        {
          title: "Inverse hyperbolic derivatives — extension only",
          html: `<p>Your photographed notes introduce inverse hyperbolic functions but do not develop these derivatives. Read this section only if your lecturer includes them. Write <strong>arsinh</strong> rather than sinh⁻¹ when you need to avoid confusing an inverse with 1/sinh=csch.</p>
          <div class="formula-display">(arsinh u)′=u′/√(1+u²) &nbsp; | &nbsp; (arcosh u)′=u′/√(u²−1)<br>(artanh u)′=u′/(1−u²) &nbsp; | &nbsp; (arcoth u)′=u′/(1−u²)<br>(arsech u)′=−u′/[u√(1−u²)] &nbsp; | &nbsp; (arcsch u)′=−u′/[|u|√(1+u²)]</div>`,
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
        ["(sin u)′=cos u·u′", "Sine + chain rule"],
        ["(cos u)′=−sin u·u′", "Cosine — note the minus"],
        ["(tan u)′=sec²u·u′", "Tangent + chain rule"],
        ["(cot u)′=−cosec²u·u′", "Cotangent — note the minus"],
        ["(sec u)′=sec u tan u·u′", "Secant + chain rule"],
        ["(cosec u)′=−cosec u cot u·u′", "Cosecant (csc) — note the minus"]
      ]
    },
    {
      title: "Inverse trigonometric derivatives", icon: "⁻¹", color: "var(--blue-soft)", items: [
        ["(arcsin u)′=u′/√(1−u²)", "Inverse sine; |u|<1 for a finite derivative"],
        ["(arccos u)′=−u′/√(1−u²)", "Inverse cosine; note the minus"],
        ["(arctan u)′=u′/(1+u²)", "Inverse tangent"],
        ["(arccot u)′=−u′/(1+u²)", "Using the convention in your notes"],
        ["(arcsec u)′=u′/(|u|√(u²−1))", "Inverse secant; |u|>1"],
        ["(arccosec u)′=−u′/(|u|√(u²−1))", "Inverse cosecant; |u|>1"]
      ]
    },
    {
      title: "Exponential & logarithmic", icon: "e", color: "var(--lime-soft)", items: [
        ["(eˣ)′=eˣ", "Natural exponential"],
        ["(eᵘ)′=eᵘu′", "With chain rule"],
        ["(aᵘ)′=aᵘ ln(a)·u′", "Base a>0, a≠1"],
        ["(ln x)′=1/x", "For x>0"],
        ["(ln u)′=u′/u", "With chain rule"],
        ["(logₐu)′=u′/[u ln(a)]", "Base a>0, a≠1"]
      ]
    },
    {
      title: "Hyperbolic functions", icon: "h", color: "var(--yellow-soft)", items: [
        ["sinh x=(eˣ−e⁻ˣ)/2", "Definition"],
        ["cosh x=(eˣ+e⁻ˣ)/2", "Definition"],
        ["cosh²x−sinh²x=1", "Main identity"],
        ["sech²x+tanh²x=1", "Divide the main identity by cosh²x"],
        ["coth²x−csch²x=1", "Rearranged hyperbolic identity"],
        ["(sinh u)′=cosh u·u′", "Hyperbolic sine + chain rule"],
        ["(cosh u)′=sinh u·u′", "Hyperbolic cosine; no minus"],
        ["(tanh u)′=sech²u·u′", "Hyperbolic tangent + chain rule"],
        ["(coth u)′=−csch²u·u′", "Hyperbolic cotangent"],
        ["(sech u)′=−sech u tanh u·u′", "Hyperbolic secant"],
        ["(csch u)′=−csch u coth u·u′", "Hyperbolic cosecant"]
      ]
    },
    {
      title: "Inverse hyperbolic — extension", icon: "h⁻¹", color: "var(--orange-soft)", items: [
        ["(arsinh u)′=u′/√(1+u²)", "Also written as asinh; all real u"],
        ["(arcosh u)′=u′/√(u²−1)", "Also written as acosh; finite for u>1"],
        ["(artanh u)′=u′/(1−u²)", "Also written as atanh; |u|<1"],
        ["(arcoth u)′=u′/(1−u²)", "Also written as acoth; |u|>1"],
        ["(arsech u)′=−u′/[u√(1−u²)]", "Also written as asech; 0<u<1"],
        ["(arcsch u)′=−u′/[|u|√(1+u²)]", "Also written as acsch; u≠0"]
      ]
    }
  ];

  const derivativeDeck = [
    { id: "d-sin", family: "Core trig", prompt: "(sin u)′", answer: "cos u · u′", cue: "Sine becomes cosine.", example: "sin(7x) → 7cos(7x)", must: true },
    { id: "d-cos", family: "Core trig", prompt: "(cos u)′", answer: "−sin u · u′", cue: "Cosine carries a minus.", example: "cos(x²) → −2x sin(x²)", must: true },
    { id: "d-tan", family: "Core trig", prompt: "(tan u)′", answer: "sec²u · u′", cue: "Tangent produces secant squared.", example: "tan(3x−1) → 3sec²(3x−1)", must: true },
    { id: "d-cot", family: "Core trig", prompt: "(cot u)′", answer: "−cosec²u · u′", cue: "Cotangent is the negative partner.", example: "cot(4x) → −4cosec²(4x)", must: true },
    { id: "d-sec", family: "Core trig", prompt: "(sec u)′", answer: "sec u tan u · u′", cue: "Secant copies itself, then attaches tan.", example: "sec(3x) → 3sec(3x)tan(3x)", must: true },
    { id: "d-cosec", family: "Core trig", prompt: "(cosec u)′", answer: "−cosec u cot u · u′", cue: "Cosec (csc) copies itself and brings a minus.", example: "cosec(2x) → −2cosec(2x)cot(2x)", must: true },

    { id: "d-arcsin", family: "Inverse trig", prompt: "(arcsin u)′", answer: "u′/√(1−u²)", cue: "The sine pair uses the 1−u² root.", example: "arcsin(2x) → 2/√(1−4x²)", must: true },
    { id: "d-arccos", family: "Inverse trig", prompt: "(arccos u)′", answer: "−u′/√(1−u²)", cue: "Same root as arcsin, but negative.", example: "arccos(3x) → −3/√(1−9x²)", must: true },
    { id: "d-arctan", family: "Inverse trig", prompt: "(arctan u)′", answer: "u′/(1+u²)", cue: "Tangent pair uses 1+u².", example: "arctan(x³) → 3x²/(1+x⁶)", must: true },
    { id: "d-arccot", family: "Inverse trig", prompt: "(arccot u)′", answer: "−u′/(1+u²)", cue: "Same denominator as arctan, but negative.", example: "arccot(2x²) → −4x/(1+4x⁴)", must: true },
    { id: "d-arcsec", family: "Inverse trig", prompt: "(arcsec u)′", answer: "u′/[|u|√(u²−1)]", cue: "Keep the absolute value around u.", example: "arcsec(2x) → 2/[|2x|√(4x²−1)]", must: true },
    { id: "d-arccosec", family: "Inverse trig", prompt: "(arccosec u)′", answer: "−u′/[|u|√(u²−1)]", cue: "Arcsec's negative partner; cosec is also csc.", example: "arccosec(3x) → −3/[|3x|√(9x²−1)]", must: true },

    { id: "d-exp", family: "Exp & log", prompt: "(eᵘ)′", answer: "eᵘ · u′", cue: "e copies itself, then chain rule.", example: "e^(sin x) → e^(sin x)cos x", must: true },
    { id: "d-base-exp", family: "Exp & log", prompt: "(aᵘ)′", answer: "aᵘ ln(a) · u′", cue: "A base other than e adds ln(a).", example: "2^(x²) → 2x·2^(x²)ln2", must: true },
    { id: "d-ln", family: "Exp & log", prompt: "(ln u)′", answer: "u′/u", cue: "Inside derivative over unchanged inside.", example: "ln(x²+1) → 2x/(x²+1)", must: true },
    { id: "d-log", family: "Exp & log", prompt: "(logₐu)′", answer: "u′/[u ln(a)]", cue: "Natural-log rule plus the base factor ln(a).", example: "log₂(3x−1) → 3/[(3x−1)ln2]", must: true },

    { id: "d-sinh", family: "Hyperbolic", prompt: "(sinh u)′", answer: "cosh u · u′", cue: "Sinh and cosh swap.", example: "sinh(3x) → 3cosh(3x)", must: true },
    { id: "d-cosh", family: "Hyperbolic", prompt: "(cosh u)′", answer: "sinh u · u′", cue: "No minus: hyperbolic cosine stays positive.", example: "cosh(5x²) → 10x sinh(5x²)", must: true },
    { id: "d-tanh", family: "Hyperbolic", prompt: "(tanh u)′", answer: "sech²u · u′", cue: "Same shape as tan → sec².", example: "tanh(4x) → 4sech²(4x)", must: true },
    { id: "d-coth", family: "Hyperbolic", prompt: "(coth u)′", answer: "−csch²u · u′", cue: "Coth is a negative reciprocal-side rule.", example: "coth(2x) → −2csch²(2x)", must: true },
    { id: "d-sech", family: "Hyperbolic", prompt: "(sech u)′", answer: "−sech u tanh u · u′", cue: "Copy sech, attach tanh, then a minus.", example: "sech(ln x) → −sech(ln x)tanh(ln x)/x", must: true },
    { id: "d-csch", family: "Hyperbolic", prompt: "(csch u)′", answer: "−csch u coth u · u′", cue: "Copy csch, attach coth, then a minus.", example: "csch(eˣ) → −eˣcsch(eˣ)coth(eˣ)", must: true },

    { id: "d-arsinh", family: "Inverse hyperbolic", prompt: "(arsinh u)′", answer: "u′/√(1+u²)", cue: "Extension: inverse hyperbolic sine.", example: "arsinh(3x) → 3/√(1+9x²)", must: false },
    { id: "d-arcosh", family: "Inverse hyperbolic", prompt: "(arcosh u)′", answer: "u′/√(u²−1)", cue: "Extension: finite for u>1.", example: "arcosh(2x) → 2/√(4x²−1)", must: false },
    { id: "d-artanh", family: "Inverse hyperbolic", prompt: "(artanh u)′", answer: "u′/(1−u²)", cue: "Extension: the denominator has 1−u².", example: "artanh(2x) → 2/(1−4x²)", must: false },
    { id: "d-arcoth", family: "Inverse hyperbolic", prompt: "(arcoth u)′", answer: "u′/(1−u²)", cue: "Extension: same algebraic rule as artanh, different domain.", example: "arcoth(3x) → 3/(1−9x²)", must: false },
    { id: "d-arsech", family: "Inverse hyperbolic", prompt: "(arsech u)′", answer: "−u′/[u√(1−u²)]", cue: "Extension: real for 0<u≤1.", example: "arsech(x) → −1/[x√(1−x²)]", must: false },
    { id: "d-arcsch", family: "Inverse hyperbolic", prompt: "(arcsch u)′", answer: "−u′/[|u|√(1+u²)]", cue: "Extension: keep |u| and the minus.", example: "arcsch(2x) → −2/[|2x|√(1+4x²)]", must: false }
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
    { label: "CASIO fx-82EX / fx-85EX / fx-350EX User’s Guide", detail: "Official key sequences and model limitations, guide RJA532417-001V01", href: "https://www.casio.com/content/dam/casio/global/support/manuals/calculators/pdf/004-en/f/fx-82_85_350EX_EN.pdf" }
  ];

  return { lessons, practice, formulaGroups, derivativeDeck, checkpoints, sources };
})();

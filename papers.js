(() => {
  "use strict";

  const cat1Solved = {
    id: "cat1",
    tab: "CAT 1 solved",
    title: "Your CAT 1 — complete solutions",
    badge: "Past paper • 5 August 2026",
    disclaimer:
      "This is a faithful transcription of the uploaded ICS 1103 CAT 1. The paper labels the last part of Question 2 as (a), which is probably a numbering typo. In that part, the radical covers x only: √x − 2. Question 1 does not give enough information to determine A; continuity fixes only B.",
    duration: "1 hour",
    marks: 30,
    instructions: [
      "Answer all the questions.",
      "Show all your workings clearly.",
      "Try each question under exam conditions before revealing its solution."
    ],
    timePlan: [
      { label: "Read and choose an order", minutes: 3, note: "Circle the limits that need algebra before substitution." },
      { label: "Question 1", minutes: 8, note: "Write the left limit, right limit and function value separately." },
      { label: "Question 2", minutes: 20, note: "About five minutes per limit; never hide one-sided behaviour." },
      { label: "Question 3", minutes: 18, note: "Plot endpoint dots before drawing each branch." },
      { label: "Question 4", minutes: 8, note: "Factor first, but keep restrictions from the original denominator." },
      { label: "Final check", minutes: 3, note: "Check signs, domains, open circles and final answers." }
    ],
    questions: [
      {
        id: "cat1-q1",
        number: "1",
        title: "Continuity of a piecewise function",
        topic: "Continuity",
        marks: 5,
        priority: "must-read",
        provenance: "Transcribed from your uploaded CAT 1 paper.",
        source: "Strathmore University ICS 1103 CAT 1, 5 August 2026",
        prompt: `Find the values <em>A</em> and <em>B</em> that make the function continuous at <em>x</em> = 0:
          <div class="paper-math piecewise"><span>f(x) =</span><span class="brace">{</span><span>
            2x<sup>3</sup> + 1, &nbsp; x ≥ 0<br>
            A sin(3x) + B cos(3x), &nbsp; x &lt; 0
          </span></div>`,
        steps: [
          {
            work: "Use the branch containing x = 0: f(0) = 2(0)³ + 1 = 1.",
            marks: 1
          },
          {
            work: "Right-hand limit: lim<sub>x→0⁺</sub>(2x³ + 1) = 1.",
            marks: 1
          },
          {
            work: "Left-hand limit: lim<sub>x→0⁻</sub>[A sin(3x) + B cos(3x)] = A(0) + B(1) = B.",
            marks: 1
          },
          {
            work: "Continuity requires left limit = right limit = f(0), so B = 1.",
            marks: 1
          },
          {
            work: "A is multiplied by sin(3x), whose limit is 0. Therefore continuity places no restriction on A: A may be any real number.",
            marks: 1
          }
        ],
        answer: "B = 1 and A may be any real number.",
        finalAnswer: "B = 1; A ∈ ℝ (underdetermined by continuity alone).",
        marker: "Do not invent a second condition. If the question had asked for differentiability as well, then A = 0, but it asks only for continuity.",
        markerNote: "Full-credit logic must compare both one-sided limits with f(0) and state explicitly why A is free.",
        commonTraps: [
          "Setting A = 1 simply because the question asks for A and B.",
          "Using the x &lt; 0 formula to calculate f(0).",
          "Writing only B = 1 without explaining that every real A works."
        ],
        calculatorCheck: [
          "A calculator can only support the result; it cannot prove continuity.",
          "With B = 1, try A = 0 and A = 7 at x = −0.001. Both outputs sit close to 1.",
          "On the fx-82EX, use ordinary Calculate mode and the S⇔D key if you want a decimal."
        ]
      },
      {
        id: "cat1-q2",
        number: "2",
        title: "Four limits",
        topic: "Limits",
        marks: 10,
        priority: "must-read",
        provenance: "Transcribed from your uploaded CAT 1 paper; the original labels the fourth item (a).",
        source: "Strathmore University ICS 1103 CAT 1, 5 August 2026",
        prompt: `<p>Compute:</p>
          <ol class="paper-parts" type="i">
            <li>lim<sub>x→0</sub> x / [√(1 − x) − √(1 + x)] <strong>[3 marks]</strong></li>
            <li>lim<sub>x→0</sub> tan(5x) / [x cos(x)] <strong>[3 marks]</strong></li>
            <li>lim<sub>x→3</sub> (x² − 6x + 9) / (x² − 9) <strong>[2 marks]</strong></li>
            <li>lim<sub>x→2</sub> (√x − 2) / (x² − 4) <strong>[2 marks]</strong><br><small>The printed paper calls this part “(a)”. The radical covers x only.</small></li>
          </ol>`,
        steps: [
          {
            work: "(i) Direct substitution gives 0/0. Multiply numerator and denominator by √(1 − x) + √(1 + x).",
            marks: 1
          },
          {
            work: "(i) The denominator becomes (1 − x) − (1 + x) = −2x, so the expression is −[√(1 − x) + √(1 + x)]/2.",
            marks: 1
          },
          {
            work: "(i) Substitute x = 0 after simplifying: −(1 + 1)/2 = −1.",
            marks: 1
          },
          {
            work: "(ii) Work in radians and rearrange: [tan(5x)/(5x)] · [5/cos(x)].",
            marks: 2
          },
          {
            work: "(ii) Since lim<sub>u→0</sub> tan u/u = 1 and cos(0) = 1, the limit is 1 · 5/1 = 5.",
            marks: 1
          },
          {
            work: "(iii) Factor: (x² − 6x + 9)/(x² − 9) = (x − 3)²/[(x − 3)(x + 3)] = (x − 3)/(x + 3), for x ≠ 3.",
            marks: 1
          },
          {
            work: "(iii) Now let x → 3: (3 − 3)/(3 + 3) = 0.",
            marks: 1
          },
          {
            work: "(a) Read the printed expression exactly. Near x = 2, √x − 2 stays negative, while x² − 4 = (x − 2)(x + 2) changes sign. Thus the left-hand limit is +∞ and the right-hand limit is −∞.",
            marks: 1
          },
          {
            work: "(a) The one-sided limits are different, so the two-sided limit does not exist.",
            marks: 1
          }
        ],
        answer: "(i) −1; (ii) 5; (iii) 0; (a) does not exist: +∞ from the left and −∞ from the right.",
        finalAnswer: "(i) −1, (ii) 5, (iii) 0, (a) DNE because lim(x→2⁻) = +∞ and lim(x→2⁺) = −∞.",
        marker: "For part (a), a direct Math ERROR is not an answer. The signs on both sides are the mathematical reason the two-sided limit fails.",
        markerNote: "Use radians in part (ii). In part (a), do not silently replace √x − 2 with √(x − 2) or √x − √2.",
        commonTraps: [
          "Stopping at 0/0 instead of simplifying parts (i) and (iii).",
          "Using degree mode for the standard trigonometric limit in part (ii).",
          "Cancelling x in part (i) before rationalising correctly.",
          "Assuming every denominator tending to zero gives one common infinity.",
          "Misreading √x − 2 as √(x − 2)."
        ],
        calculatorCheck: [
          "Set radians: SHIFT → SETUP → Angle Unit → Radian before checking part (ii).",
          "For (i), enter nearby values such as x = ±0.001; both should be close to −1. Very tiny x can cause rounding cancellation.",
          "For (ii), x = 0.001 should give a value close to 5.",
          "For (iii), values just below and above 3 should be small and approach 0.",
          "For (a), try x = 1.999 and x = 2.001. You should get a large positive number and a large negative number, confirming DNE."
        ]
      },
      {
        id: "cat1-q3",
        number: "3",
        title: "Piecewise graph and types of discontinuity",
        topic: "Graphs and continuity",
        marks: 10,
        priority: "must-read",
        provenance: "Transcribed from your uploaded CAT 1 paper.",
        source: "Strathmore University ICS 1103 CAT 1, 5 August 2026",
        prompt: `<p>Sketch the graph of the following function:</p>
          <div class="paper-math piecewise"><span>f(x) =</span><span class="brace">{</span><span>
            x + 4, &nbsp; if x ≤ −2<br>
            1/(x − 1) + 2, &nbsp; if −2 &lt; x &lt; 1<br>
            4, &nbsp; if 1 ≤ x ≤ 3<br>
            x² − 5, &nbsp; if x &gt; 3
          </span></div>
          <p>Discuss the continuity of this function. State the points of discontinuity and classify them. <strong>[4 + 6 marks]</strong></p>`,
        visual: "cat1-piecewise",
        steps: [
          {
            work: "Sketch y = x + 4 only for x ≤ −2. Put a filled dot at (−2, 2).",
            marks: 1
          },
          {
            work: "Sketch y = 1/(x − 1) + 2 only on −2 &lt; x &lt; 1. Put an open dot at (−2, 5/3); as x → 1⁻, this branch falls to −∞.",
            marks: 1
          },
          {
            work: "Sketch the horizontal segment y = 4 from x = 1 to x = 3 with filled endpoints. Then sketch y = x² − 5 for x &gt; 3; its endpoint (3, 4) is open but lies on the filled endpoint already supplied by the third branch.",
            marks: 2
          },
          {
            work: "At x = −2: left limit = f(−2) = 2, while right limit = 1/(−3) + 2 = 5/3. The finite one-sided limits differ, so this is a jump discontinuity.",
            marks: 2
          },
          {
            work: "At x = 1: lim<sub>x→1⁻</sub>[1/(x − 1) + 2] = −∞, while lim<sub>x→1⁺</sub> f(x) = f(1) = 4. This is an infinite discontinuity.",
            marks: 2
          },
          {
            work: "At x = 3: left limit = 4, f(3) = 4, and right limit = 3² − 5 = 4. Therefore the function is continuous at x = 3.",
            marks: 1
          },
          {
            work: "Each formula is continuous inside its assigned interval. Hence the only discontinuities are x = −2 and x = 1.",
            marks: 1
          }
        ],
        answer: "Jump discontinuity at x = −2; infinite discontinuity at x = 1; continuous at x = 3 and everywhere else in its domain.",
        finalAnswer: "Discontinuous only at x = −2 (jump) and x = 1 (infinite). It is continuous at x = 3 because both sides and f(3) equal 4.",
        marker: "Endpoint dots carry marks. Test every change-point (−2, 1 and 3); do not call x = 3 discontinuous just because the formula changes there.",
        markerNote: "A formula change is only a warning to test continuity. It is not automatically a discontinuity.",
        commonTraps: [
          "Drawing every formula for all x instead of restricting it to its interval.",
          "Missing that the second branch is 1/(x − 1) + 2.",
          "Calling x = −2 removable even though its one-sided limits are different.",
          "Calling x = 3 a jump even though both branches meet at (3, 4)."
        ],
        calculatorCheck: [
          "The fx-82EX is not a graphing calculator, so the sketch must be done by hand.",
          "Use TABLE mode on one formula at a time to check useful points such as x = −2, x = 0, x = 0.9 and x = 3.001.",
          "The table supports your endpoint work, but open/filled dots and interval restrictions must come from the definition."
        ]
      },
      {
        id: "cat1-q4",
        number: "4",
        title: "Asymptotes and domain",
        topic: "Rational functions",
        marks: 5,
        priority: "must-read",
        provenance: "Transcribed from your uploaded CAT 1 paper.",
        source: "Strathmore University ICS 1103 CAT 1, 5 August 2026",
        prompt: `Consider f(x) = (x² − 1)/(x² − 6x + 5). Calculate the horizontal and vertical asymptotes. Finally, state its domain.`,
        steps: [
          {
            work: "Factor first: f(x) = [(x − 1)(x + 1)]/[(x − 1)(x − 5)]. The original denominator is zero at x = 1 and x = 5.",
            marks: 1
          },
          {
            work: "For x ≠ 1, simplify to (x + 1)/(x − 5). Because the factor at x = 1 cancelled, x = 1 is a removable hole, not a vertical asymptote. Its missing y-value would be (1 + 1)/(1 − 5) = −1/2.",
            marks: 1
          },
          {
            work: "The uncancelled denominator is zero at x = 5, so the vertical asymptote is x = 5.",
            marks: 1
          },
          {
            work: "The numerator and denominator of the original function have the same degree and equal leading coefficients. Therefore the horizontal asymptote is y = 1.",
            marks: 1
          },
          {
            work: "Keep both restrictions from the original denominator: domain = ℝ \\ {1, 5} = (−∞,1) ∪ (1,5) ∪ (5,∞).",
            marks: 1
          }
        ],
        answer: "Vertical asymptote x = 5; horizontal asymptote y = 1; domain ℝ \\ {1, 5}. There is a hole at (1, −1/2).",
        finalAnswer: "VA: x = 5. HA: y = 1. Domain: ℝ \\ {1, 5}. Removable hole: (1, −1/2).",
        marker: "Cancellation simplifies the formula, not the original domain. A cancelled denominator zero is a hole; an uncancelled one is a vertical asymptote.",
        markerNote: "State x = 5 for the vertical asymptote and y = 1 for the horizontal asymptote; swapping x and y loses easy marks.",
        commonTraps: [
          "Calling both x = 1 and x = 5 vertical asymptotes.",
          "Putting x = 1 back into the domain after cancelling.",
          "Writing the horizontal asymptote as x = 1 instead of y = 1."
        ],
        calculatorCheck: [
          "Enter the original expression and test x = 1: Math ERROR supports that x = 1 is excluded, but it does not tell you whether it is a hole or asymptote.",
          "Test values close to 5, such as 4.999 and 5.001; the large opposite-signed outputs support x = 5 as a vertical asymptote.",
          "Test a large value such as x = 10000; the output should be close to 1, supporting the horizontal asymptote.",
          "The algebraic factor check is still required for full marks."
        ]
      }
    ],
    sources: [
      {
        label: "Uploaded CAT 1 paper",
        url: "",
        note: "Primary source for every question, mark allocation and instruction on this paper."
      },
      {
        label: "OpenStax Calculus Volume 1 — Limits",
        url: "https://openstax.org/books/calculus-volume-1/pages/2-introduction",
        note: "Free reference for reviewing limits, continuity and asymptotes; not the source of the past-paper wording."
      }
    ],
    finalCheck: [
      "Every answer has working, not just a calculator result.",
      "Question 1 says A is arbitrary and B = 1.",
      "Question 2(ii) was done in radians.",
      "Question 2(a) records both one-sided signs before saying DNE.",
      "Question 3 shows open and filled endpoint dots and checks −2, 1 and 3.",
      "Question 4 keeps x = 1 and x = 5 out of the original domain.",
      "Asymptotes use the correct variable: vertical x = 5; horizontal y = 1."
    ]
  };

  const cat2Mock = {
    id: "cat2-mock",
    tab: "Possible CAT 2",
    title: "Possible CAT 2 — Differentiation",
    badge: "Practice prediction • 30 marks",
    disclaimer:
      "This is an original practice prediction based on the later class notes, not an official or leaked Strathmore paper. Internet exercise patterns were reworked and the constants and functions were changed.",
    duration: "1 hour",
    marks: 30,
    instructions: [
      "Answer all four questions.",
      "Show every important step. A correct final answer alone may lose method marks.",
      "Give exact answers unless a decimal is requested.",
      "Use radians for trigonometric functions.",
      "Where first principles is requested, do not use a memorised differentiation rule."
    ],
    timePlan: [
      { label: "Question 1", minutes: 12 },
      { label: "Question 2", minutes: 14 },
      { label: "Question 3", minutes: 12 },
      { label: "Question 4", minutes: 15 },
      { label: "Check signs, brackets and chain factors", minutes: 7 }
    ],
    questions: [
      {
        id: "cat2-q1",
        number: "1",
        title: "Derivative from first principles",
        topic: "First principles",
        marks: 6,
        priority: "must-read",
        provenance: "Reworked from derivative-definition exercise patterns in MIT OpenCourseWare and OpenStax; the function is newly chosen.",
        prompt: "Using first principles only, find f′(x) if f(x) = 1/(2x − 1).",
        steps: [
          {
            work: "Start with the definition: f′(x) = lim<sub>h→0</sub>[f(x+h) − f(x)]/h.",
            marks: 1
          },
          {
            work: "Substitute the function: f′(x) = lim<sub>h→0</sub>{1/(2x+2h−1) − 1/(2x−1)}/h.",
            marks: 1
          },
          {
            work: "Combine the two fractions. Their numerator is (2x−1) − (2x+2h−1) = −2h.",
            marks: 1
          },
          {
            work: "Therefore f′(x) = lim<sub>h→0</sub>[−2h]/[h(2x+2h−1)(2x−1)].",
            marks: 1
          },
          {
            work: "For h ≠ 0, cancel h: f′(x) = lim<sub>h→0</sub>−2/[(2x+2h−1)(2x−1)].",
            marks: 1
          },
          {
            work: "Now let h → 0: f′(x) = −2/(2x−1)², for x ≠ 1/2.",
            marks: 1
          }
        ],
        finalAnswer: "f′(x) = −2/(2x−1)², x ≠ 1/2.",
        markerNote: "The words “first principles” mean the limit definition must appear. Using only the chain or power rule earns little or no method credit.",
        commonTraps: [
          "Writing f(x+h) = 1/(2x+h−1); the 2 must multiply h too.",
          "Substituting h = 0 before cancelling h.",
          "Losing the negative sign when combining the fractions.",
          "Forgetting that the original function is undefined at x = 1/2."
        ],
        calculatorCheck: [
          "A numerical check supports the algebra but cannot replace first principles.",
          "At x = 1, calculate [f(1.001)−f(0.999)]/0.002. The result is about −2, matching f′(1) = −2."
        ]
      },
      {
        id: "cat2-q2",
        number: "2",
        title: "Differentiation rules",
        topic: "Product, quotient and chain rules",
        marks: 8,
        priority: "must-read",
        provenance: "Original synthesis questions built from the rule combinations emphasised in the class notes.",
        prompt: `<p>Differentiate:</p>
          <ol class="paper-parts" type="a">
            <li>y = (x² + 1)³ sin(2x). Give the answer in a factorised form where possible. <strong>[5 marks]</strong></li>
            <li>y = (3x − 1)/(x² + 4). <strong>[3 marks]</strong></li>
          </ol>`,
        steps: [
          {
            work: "(a) This is a product. Let u = (x²+1)³ and v = sin(2x), so y′ = u′v + uv′.",
            marks: 1
          },
          {
            work: "(a) Differentiate the outer power: u′ = 3(x²+1)²·d(x²+1)/dx.",
            marks: 1
          },
          {
            work: "(a) Therefore u′ = 3(x²+1)²(2x) = 6x(x²+1)².",
            marks: 1
          },
          {
            work: "(a) By the chain rule, v′ = 2cos(2x).",
            marks: 1
          },
          {
            work: "(a) Hence y′ = 6x(x²+1)²sin(2x) + 2(x²+1)³cos(2x) = 2(x²+1)²[3x sin(2x) + (x²+1)cos(2x)].",
            marks: 1
          },
          {
            work: "(b) Use the quotient rule: y′ = [(x²+4)(3) − (3x−1)(2x)]/(x²+4)².",
            marks: 1
          },
          {
            work: "(b) Expand the numerator: 3x² + 12 − 6x² + 2x.",
            marks: 1
          },
          {
            work: "(b) Simplify: y′ = (−3x²+2x+12)/(x²+4)².",
            marks: 1
          }
        ],
        finalAnswer: "(a) y′ = 2(x²+1)²[3x sin(2x)+(x²+1)cos(2x)]. (b) y′ = (−3x²+2x+12)/(x²+4)².",
        markerNote: "Name the rule through your layout: two terms for a product and a squared denominator for a quotient. Then show every inside derivative.",
        commonTraps: [
          "Using the product rule but missing one or both chain-rule factors.",
          "Writing d[sin(2x)]/dx = cos(2x) instead of 2cos(2x).",
          "Differentiating (x²+1)³ as 3(x²+1)² without multiplying by 2x.",
          "Reversing the quotient-rule numerator or forgetting to square its denominator."
        ],
        calculatorCheck: [
          "For part (a), the curve has y = 0 at x = 0 and your derivative formula gives y′(0) = 2.",
          "A symmetric estimate [y(0.001)−y(−0.001)]/0.002 should also be close to 2."
        ]
      },
      {
        id: "cat2-q3",
        number: "3",
        title: "Function-family speed round",
        topic: "Inverse trig, logs, exponentials and hyperbolic functions",
        marks: 8,
        priority: "must-read",
        provenance: "Reworked exercise patterns from OpenStax; every constant and composition was changed.",
        prompt: `<p>Differentiate each function:</p>
          <ol class="paper-parts" type="a">
            <li>y = sin<sup>−1</sup>(3x) <strong>[2 marks]</strong></li>
            <li>y = log<sub>2</sub>(x² + 1) <strong>[2 marks]</strong></li>
            <li>y = 5<sup>sin x</sup> <strong>[2 marks]</strong></li>
            <li>y = sech(2x) <strong>[2 marks]</strong></li>
          </ol>`,
        steps: [
          {
            work: "(a) Use d[sin<sup>−1</sup>u]/dx = u′/√(1−u²), with u = 3x.",
            marks: 1
          },
          {
            work: "(a) Since u′ = 3, y′ = 3/√(1−9x²).",
            marks: 1
          },
          {
            work: "(b) Use d[log<sub>a</sub>u]/dx = u′/(u ln a).",
            marks: 1
          },
          {
            work: "(b) Here u = x²+1 and u′ = 2x, so y′ = 2x/[(x²+1)ln2].",
            marks: 1
          },
          {
            work: "(c) Use d[a<sup>u</sup>]/dx = a<sup>u</sup>ln(a)·u′.",
            marks: 1
          },
          {
            work: "(c) Since u = sin x and u′ = cos x, y′ = 5<sup>sin x</sup>ln5 cos x.",
            marks: 1
          },
          {
            work: "(d) Use d[sech u]/dx = −sech(u)tanh(u)·u′.",
            marks: 1
          },
          {
            work: "(d) Since u = 2x and u′ = 2, y′ = −2sech(2x)tanh(2x).",
            marks: 1
          }
        ],
        finalAnswer: "(a) 3/√(1−9x²). (b) 2x/[(x²+1)ln2]. (c) 5<sup>sin x</sup>ln5 cos x. (d) −2sech(2x)tanh(2x).",
        markerNote: "For every composite function, write the family formula and then multiply by the derivative of the inside.",
        commonTraps: [
          "Treating sin<sup>−1</sup>x as 1/sin x instead of arcsine.",
          "Leaving out ln2 in part (b) or ln5 in part (c).",
          "Forgetting the negative sign in the sech derivative.",
          "Forgetting the inside factors 3, 2x, cos x or 2."
        ],
        calculatorCheck: [
          "Keep the calculator in radians when numerically checking parts (a) and (c).",
          "For any part, compare a small symmetric difference [f(x+0.001)−f(x−0.001)]/0.002 with your derivative at the same safe x.",
          "Do not test part (a) outside |x| < 1/3; the real-valued derivative is not defined there."
        ]
      },
      {
        id: "cat2-q4",
        number: "4",
        title: "Stationary point application",
        topic: "Logarithms and stationary points",
        marks: 8,
        priority: "must-read",
        provenance: "Original question written to combine several likely CAT 2 skills in one exam-style application.",
        prompt: "The curve is y = x²ln x, where x > 0. Find its stationary point and determine its nature.",
        steps: [
          {
            work: "Differentiate using the product rule: y′ = x²(1/x) + (ln x)(2x) = x + 2x ln x.",
            marks: 1
          },
          {
            work: "Factorise: y′ = x(2ln x + 1).",
            marks: 1
          },
          {
            work: "At a stationary point, x(2ln x + 1) = 0.",
            marks: 1
          },
          {
            work: "Because x > 0, x = 0 is not allowed. Therefore 2ln x + 1 = 0.",
            marks: 1
          },
          {
            work: "Thus ln x = −1/2, so x = e<sup>−1/2</sup> = 1/√e.",
            marks: 1
          },
          {
            work: "At this x, y = x²ln x = e<sup>−1</sup>(−1/2) = −1/(2e). The stationary point is (e<sup>−1/2</sup>, −1/(2e)).",
            marks: 1
          },
          {
            work: "Differentiate again: y″ = d[x(2ln x+1)]/dx = 2ln x + 3.",
            marks: 1
          },
          {
            work: "At x = e<sup>−1/2</sup>, y″ = 2(−1/2)+3 = 2 > 0. Therefore the point is a local minimum.",
            marks: 1
          }
        ],
        finalAnswer: "The stationary point is (e<sup>−1/2</sup>, −1/(2e)), and it is a local minimum.",
        markerNote: "A stationary point needs both coordinates. Its nature needs evidence from a sign test or the second derivative, not a guess from the sketch.",
        commonTraps: [
          "Accepting x = 0 even though ln0 is undefined and the question states x > 0.",
          "Giving only the x-coordinate instead of the full point.",
          "Solving ln x = −1/2 as x = −e<sup>1/2</sup>.",
          "Calling it a minimum without showing a sign test or second-derivative test."
        ],
        calculatorCheck: [
          "The exact result is required. Decimal values are only a check: e<sup>−1/2</sup> ≈ 0.6065 and −1/(2e) ≈ −0.1839.",
          "In TABLE mode, values just below and above x ≈ 0.6065 should be slightly higher, supporting a local minimum."
        ]
      }
    ],
    sources: [
      {
        label: "MIT OpenCourseWare — Definition and Basic Rules",
        url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/1.-differentiation/part-a-definition-and-basic-rules/",
        note: "First-principles and basic differentiation exercise patterns."
      },
      {
        label: "MIT OpenCourseWare — Inverse Functions",
        url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/1.-differentiation/part-b-implicit-differentiation-and-inverse-functions/",
        note: "Inverse-function differentiation patterns."
      },
      {
        label: "OpenStax Calculus Volume 1 — §3.9",
        url: "https://openstax.org/books/calculus-volume-1/pages/3-9-derivatives-of-exponential-and-logarithmic-functions",
        note: "Exponential and logarithmic question styles."
      },
      {
        label: "OpenStax Calculus Volume 1 — §6.9",
        url: "https://openstax.org/books/calculus-volume-1/pages/6-9-calculus-of-the-hyperbolic-functions",
        note: "Hyperbolic derivative identities and exercise patterns."
      }
    ],
    finalCheck: [
      "Question 1 begins with the limit definition, not a memorised rule.",
      "Every composite derivative includes the derivative of its inside function.",
      "Every aˣ-style derivative includes ln(a).",
      "sin⁻¹x was treated as arcsine, not csc x.",
      "The quotient-rule denominator was squared.",
      "The stationary point includes both coordinates and a justified classification.",
      "The four question totals add to 30 marks."
    ]
  };

  const mainExamMock = {
    id: "main-exam-mock-a",
    tab: "Main exam mock",
    title: "Differential Calculus — Main Exam Mock A",
    badge: "Practice prediction • 60 marks",
    disclaimer:
      "This is an original revision paper based on your course scope and common university-calculus question patterns. It is not an official, leaked or guaranteed exam paper. The linked sources informed topic coverage and question style; every question below was newly composed.",
    duration: "2 hours",
    marks: 60,
    questionCount: 7,
    instructions: [
      "Answer every question.",
      "Show all working. Answer-only responses may lose method marks.",
      "Use radians for trigonometric limits and derivatives.",
      "Give exact answers unless a decimal is requested.",
      "Attempt the paper before opening the solutions."
    ],
    timePlan: [
      { label: "Read and scan the paper", minutes: 5, note: "Mark the questions you can start immediately and check that the calculator is in radians." },
      { label: "Question 1 — Limits", minutes: 17, note: "Identify substitution, rationalisation, standard-limit and end-behaviour patterns." },
      { label: "Question 2 — Continuity and asymptotes", minutes: 14, note: "Keep restrictions from every original denominator." },
      { label: "Question 3 — First principles and tangent", minutes: 16, note: "Show the limit definition, expansion and cancellation." },
      { label: "Question 4 — Differentiation rules", minutes: 20, note: "Name u and v before product or quotient rule." },
      { label: "Question 5 — Inverse trig, exponential and log", minutes: 17, note: "Watch domains, inner derivatives and logarithmic factors." },
      { label: "Question 6 — Stationary points", minutes: 18, note: "Give coordinates, classification and sign intervals." },
      { label: "Question 7 — Hyperbolic functions", minutes: 8, note: "Keep the trig and hyperbolic derivative families separate." },
      { label: "Final check", minutes: 5, note: "Check signs, brackets, domains, chain factors and boxed answers." }
    ],
    questions: [
      {
        id: "main-q1a",
        number: "1(a)",
        title: "A radical limit",
        topic: "Limits",
        marks: 4,
        priority: "must-read",
        provenance: "Original synthesis based on the rationalisation patterns in OpenStax Calculus Volume 1, Chapter 2.",
        prompt: "Evaluate lim<sub>x→4</sub> [√(x+5)−3]/(x−4).",
        steps: [
          {
            work: "Direct substitution gives 0/0, so rationalise using the conjugate.",
            marks: 1
          },
          {
            work: "Multiply by [√(x+5)+3]/[√(x+5)+3]. The numerator becomes (x+5)−9=x−4.",
            marks: 1
          },
          {
            work: "For x ≠ 4, cancel x−4 to obtain 1/[√(x+5)+3].",
            marks: 1
          },
          {
            work: "Now let x→4: 1/(3+3)=1/6.",
            marks: 1
          }
        ],
        finalAnswer: "1/6.",
        markerNote: "The conjugate, simplification and cancellation are the method marks. Keep the limit sign until the expression is safe to substitute into.",
        commonTraps: [
          "Stopping at 0/0 instead of recognising it as a signal to simplify.",
          "Using √(x+5)−3 as its own conjugate.",
          "Cancelling x−4 before the factor has been created."
        ],
        calculatorCheck: [
          "Enter the original expression at x=3.999 and x=4.001. Both values should be close to 0.16667.",
          "A Math ERROR at exactly x=4 is expected and does not prevent the limit from existing."
        ]
      },
      {
        id: "main-q1b",
        number: "1(b)",
        title: "A standard trigonometric limit",
        topic: "Trigonometric limits",
        marks: 3,
        priority: "must-read",
        provenance: "Original synthesis based on standard-limit patterns used by OpenStax and MIT OpenCourseWare.",
        prompt: "Evaluate lim<sub>x→0</sub> tan(3x)/sin(5x).",
        steps: [
          {
            work: "Rewrite the expression as [tan(3x)/(3x)]·[5x/sin(5x)]·3/5.",
            marks: 1
          },
          {
            work: "In radians, tan(3x)/(3x)→1 and sin(5x)/(5x)→1, so its reciprocal also approaches 1.",
            marks: 1
          },
          {
            work: "Therefore the limit is 1·1·3/5=3/5.",
            marks: 1
          }
        ],
        finalAnswer: "3/5.",
        markerNote: "The standard trigonometric limits are valid in radians. Display the two standard-limit factors instead of quoting the answer.",
        commonTraps: [
          "Checking in degree mode and trusting the resulting decimal.",
          "Treating 0/0 as the final answer.",
          "Reversing the ratio to 5/3."
        ],
        calculatorCheck: [
          "Set RAD, then substitute x=0.001 into the original expression. The result should be approximately 0.60000.",
          "This numerical agreement supports the exact answer 3/5 but does not prove the limit."
        ]
      },
      {
        id: "main-q1c",
        number: "1(c)",
        title: "End behaviour of a rational function",
        topic: "Limits at infinity",
        marks: 3,
        priority: "must-read",
        provenance: "Original synthesis based on OpenStax end-behaviour exercise patterns.",
        prompt: "Evaluate lim<sub>x→∞</sub> (4x²−x+2)/(2x²+7).",
        steps: [
          {
            work: "Divide the numerator and denominator by x², the highest power present.",
            marks: 1
          },
          {
            work: "This gives [4−1/x+2/x²]/[2+7/x²].",
            marks: 1
          },
          {
            work: "As x→∞, the reciprocal terms approach 0. The limit is 4/2=2.",
            marks: 1
          }
        ],
        finalAnswer: "2.",
        markerNote: "The numerator and denominator have the same degree, so the answer agrees with the ratio of their leading coefficients.",
        commonTraps: [
          "Substituting the symbol ∞ as though it were a number.",
          "Using the ratio of constant terms instead of leading coefficients.",
          "Writing y=2 when the question asks for a limit value."
        ],
        calculatorCheck: [
          "Substitute x=10000. The result should be very close to 2.",
          "Trying several increasingly large positive x-values gives a stronger sanity check than using only one value."
        ]
      },
      {
        id: "main-q2a",
        number: "2(a)",
        title: "Repairing continuity",
        topic: "Continuity",
        marks: 4,
        priority: "must-read",
        provenance: "Original synthesis based on OpenStax piecewise-continuity patterns.",
        prompt: `<p>Find k so that f is continuous at x=1:</p>
          <div class="paper-math piecewise"><span>f(x) =</span><span class="brace">{</span><span>
            (x²−1)/(x−1), &nbsp; x&lt;1<br>
            kx+1, &nbsp; x≥1
          </span></div>`,
        steps: [
          {
            work: "For x ≠ 1, (x²−1)/(x−1)=(x−1)(x+1)/(x−1)=x+1.",
            marks: 1
          },
          {
            work: "Therefore lim<sub>x→1⁻</sub>f(x)=1+1=2.",
            marks: 1
          },
          {
            work: "The second branch contains x=1, so lim<sub>x→1⁺</sub>f(x)=f(1)=k+1.",
            marks: 1
          },
          {
            work: "Continuity requires k+1=2. Hence k=1.",
            marks: 1
          }
        ],
        finalAnswer: "k=1.",
        markerNote: "A complete continuity argument compares the left limit, right limit and defined function value.",
        commonTraps: [
          "Substituting x=1 directly into the first formula and stopping at 0/0.",
          "Using the first branch to calculate f(1), even though its interval is x&lt;1.",
          "Finding the common limit but not solving for k."
        ],
        calculatorCheck: [
          "After finding k=1, compare values of the two branches close to 1 in TABLE mode. Both sides should approach 2.",
          "The table supports your algebra; equality of the symbolic limits is the proof."
        ]
      },
      {
        id: "main-q2b",
        number: "2(b)",
        title: "Domain, hole and asymptotes",
        topic: "Rational functions",
        marks: 4,
        priority: "must-read",
        provenance: "Original synthesis based on OpenStax rational-function and asymptote patterns.",
        prompt: "For r(x)=(x²−4)/(x²−5x+6), state the domain, removable discontinuity, vertical asymptote and horizontal asymptote.",
        steps: [
          {
            work: "Factor: r(x)=(x−2)(x+2)/[(x−2)(x−3)]. From the original denominator, the domain excludes x=2 and x=3.",
            marks: 1
          },
          {
            work: "For x≠2,3 the function simplifies to (x+2)/(x−3). The cancelled factor gives a hole at x=2, with missing y-value (2+2)/(2−3)=−4.",
            marks: 1
          },
          {
            work: "The remaining denominator is zero at x=3, so the vertical asymptote is x=3.",
            marks: 1
          },
          {
            work: "The original polynomials have equal degree and equal leading coefficients, so the horizontal asymptote is y=1.",
            marks: 1
          }
        ],
        finalAnswer: "Domain: ℝ excluding {2,3}; hole: (2,−4); vertical asymptote: x=3; horizontal asymptote: y=1.",
        markerNote: "Cancellation simplifies the formula but never restores an excluded value to the original domain.",
        commonTraps: [
          "Calling both denominator zeros vertical asymptotes.",
          "Forgetting that the hole needs a y-coordinate.",
          "Writing x=1 for the horizontal asymptote instead of y=1."
        ],
        calculatorCheck: [
          "In two-column TABLE mode, compare the original function with (x+2)/(x−3). At x=2 the original gives an error while the simplified expression gives −4.",
          "Values close to x=3 grow very large, while a large x such as 10000 gives a value close to 1."
        ]
      },
      {
        id: "main-q3",
        number: "3",
        title: "First principles and a tangent",
        topic: "First principles",
        marks: 8,
        priority: "must-read",
        provenance: "Original synthesis based on the derivative-definition work in OpenStax Section 3.1 and MIT OpenCourseWare.",
        prompt: "Using first principles, find the derivative of f(x)=x²−3x. Hence find the equation of the tangent at x=2.",
        steps: [
          {
            work: "Start with f′(x)=lim<sub>h→0</sub>[f(x+h)−f(x)]/h.",
            marks: 1
          },
          {
            work: "f(x+h)=(x+h)²−3(x+h)=x²+2xh+h²−3x−3h.",
            marks: 1
          },
          {
            work: "Subtract f(x): f(x+h)−f(x)=2xh+h²−3h.",
            marks: 1
          },
          {
            work: "Divide by h and cancel the common factor: [2xh+h²−3h]/h=2x+h−3.",
            marks: 1
          },
          {
            work: "Let h→0. Therefore f′(x)=2x−3.",
            marks: 1
          },
          {
            work: "At x=2, the tangent gradient is f′(2)=1.",
            marks: 1
          },
          {
            work: "The point on the curve is (2,f(2))=(2,−2).",
            marks: 1
          },
          {
            work: "Use y−(−2)=1(x−2): y+2=x−2, hence y=x−4.",
            marks: 1
          }
        ],
        finalAnswer: "f′(x)=2x−3, and the tangent at x=2 is y=x−4.",
        markerNote: "Because the question says first principles, the expansion and cancellation are essential. Then use both the point and gradient for the tangent.",
        commonTraps: [
          "Using the power rule without showing the definition.",
          "Expanding −3(x+h) as −3x+h.",
          "Giving the slope only instead of the tangent equation.",
          "Using (2,1) as the point by confusing the gradient with the y-coordinate."
        ],
        calculatorCheck: [
          "Check the slope at x=2 with [f(2.001)−f(1.999)]/0.002. The result should be 1.",
          "Substitute x=2 into both the curve and y=x−4; both give y=−2."
        ]
      },
      {
        id: "main-q4a",
        number: "4(a)",
        title: "Product and chain rules together",
        topic: "Product and chain rules",
        marks: 5,
        priority: "must-read",
        provenance: "Original synthesis based on OpenStax Chapter 3 differentiation patterns.",
        prompt: "Differentiate y=(x²+1)⁴cos(3x).",
        steps: [
          {
            work: "Let u=(x²+1)⁴ and v=cos(3x), then use y′=u′v+uv′.",
            marks: 1
          },
          {
            work: "By the chain rule, u′=4(x²+1)³(2x)=8x(x²+1)³.",
            marks: 1
          },
          {
            work: "Also by the chain rule, v′=−3sin(3x).",
            marks: 1
          },
          {
            work: "Substitute both derivatives: y′=8x(x²+1)³cos(3x)+(x²+1)⁴[−3sin(3x)].",
            marks: 1
          },
          {
            work: "Therefore y′=8x(x²+1)³cos(3x)−3(x²+1)⁴sin(3x).",
            marks: 1
          }
        ],
        finalAnswer: "y′=8x(x²+1)³cos(3x)−3(x²+1)⁴sin(3x).",
        markerNote: "Two changing factors require two product-rule terms. Each factor also contains an inside function that must be differentiated.",
        commonTraps: [
          "Multiplying u′ and v′ instead of using u′v+uv′.",
          "Missing the factor 2x from (x²+1)⁴.",
          "Missing either the negative sign or factor 3 from cos(3x)."
        ],
        calculatorCheck: [
          "Set RAD. At x=0.5, compare your derivative value with [f(0.501)−f(0.499)]/0.002.",
          "Use brackets around the whole function each time you evaluate it."
        ]
      },
      {
        id: "main-q4b",
        number: "4(b)",
        title: "A trigonometric quotient",
        topic: "Quotient rule",
        marks: 5,
        priority: "must-read",
        provenance: "Original synthesis based on OpenStax Chapter 3 differentiation patterns.",
        prompt: "Differentiate y=(x²+1)/sin x.",
        steps: [
          {
            work: "Let u=x²+1 and v=sin x.",
            marks: 1
          },
          {
            work: "Then u′=2x and v′=cos x.",
            marks: 1
          },
          {
            work: "Apply y′=(vu′−uv′)/v².",
            marks: 1
          },
          {
            work: "Substitute: y′=[sin x(2x)−(x²+1)cos x]/sin²x.",
            marks: 1
          },
          {
            work: "Hence y′=[2x sin x−(x²+1)cos x]/sin²x, where sin x≠0.",
            marks: 1
          }
        ],
        finalAnswer: "y′=[2x sin x−(x²+1)cos x]/sin²x, where sin x≠0.",
        markerNote: "Keep brackets around the whole second product in the quotient-rule numerator and square the entire denominator.",
        commonTraps: [
          "Reversing the subtraction order in the numerator.",
          "Writing sin(x²) in the denominator instead of sin²x.",
          "Ignoring the original restriction sin x≠0."
        ],
        calculatorCheck: [
          "In RAD mode, use a symmetric difference at x=1 and compare it with your derivative formula evaluated at x=1.",
          "Do not test at a multiple of π because the original function is undefined there."
        ]
      },
      {
        id: "main-q5a",
        number: "5(a)",
        title: "Inverse sine and its domain",
        topic: "Inverse trigonometry",
        marks: 4,
        priority: "must-read",
        provenance: "Original synthesis based on OpenStax inverse-function differentiation patterns.",
        prompt: "Differentiate y=sin<sup>−1</sup>(2x−1). State the domain of the function and where its derivative is real and finite.",
        steps: [
          {
            work: "For y=sin<sup>−1</sup>u, y′=u′/√(1−u²).",
            marks: 1
          },
          {
            work: "Here u=2x−1 and u′=2, so y′=2/√[1−(2x−1)²].",
            marks: 1
          },
          {
            work: "The function requires −1≤2x−1≤1. Solving gives the function domain 0≤x≤1.",
            marks: 1
          },
          {
            work: "For the derivative to be real and finite, the square-root denominator must be positive. Hence 0&lt;x&lt;1.",
            marks: 1
          }
        ],
        finalAnswer: "y′=2/√[1−(2x−1)²]; function domain [0,1]; derivative real and finite on (0,1).",
        markerNote: "The function exists at the endpoints, but its displayed derivative has a zero denominator there.",
        commonTraps: [
          "Treating sin<sup>−1</sup> as cosecant instead of inverse sine.",
          "Forgetting the chain-rule factor 2.",
          "Giving [0,1] as the interval where the derivative is finite."
        ],
        calculatorCheck: [
          "Set RAD and use a symmetric difference at x=0.25. The slope should be approximately 2.3094.",
          "Values outside 0≤x≤1 give a real-domain error, which supports the domain calculation."
        ]
      },
      {
        id: "main-q5b",
        number: "5(b)",
        title: "Exponential-logarithmic product",
        topic: "Exponential and logarithmic derivatives",
        marks: 4,
        priority: "must-read",
        provenance: "Original synthesis based on OpenStax exponential and logarithmic derivative patterns.",
        prompt: "Differentiate y=3<sup>sin x</sup>ln(x²+1).",
        steps: [
          {
            work: "Use the product rule with u=3<sup>sin x</sup> and v=ln(x²+1).",
            marks: 1
          },
          {
            work: "u′=3<sup>sin x</sup>ln(3)cos x.",
            marks: 1
          },
          {
            work: "v′=2x/(x²+1).",
            marks: 1
          },
          {
            work: "Therefore y′=3<sup>sin x</sup>[ln(3)cos x·ln(x²+1)+2x/(x²+1)].",
            marks: 1
          }
        ],
        finalAnswer: "y′=3<sup>sin x</sup>[ln(3)cos x·ln(x²+1)+2x/(x²+1)].",
        markerNote: "A base other than e contributes ln(base). The two changing factors also require the product rule.",
        commonTraps: [
          "Leaving out ln3 from the derivative of 3<sup>sin x</sup>.",
          "Leaving out cos x from the exponent’s chain rule.",
          "Differentiating ln(x²+1) as 1/(x²+1) without the factor 2x."
        ],
        calculatorCheck: [
          "In RAD mode, compare the derivative formula with [f(0.501)−f(0.499)]/0.002.",
          "Use the calculator only after writing the exact derivative."
        ]
      },
      {
        id: "main-q6",
        number: "6",
        title: "Stationary points and monotonicity",
        topic: "Applications of derivatives",
        marks: 10,
        priority: "must-read",
        provenance: "Original synthesis based on derivative-application patterns in OpenStax and Paul’s Online Math Notes.",
        prompt: "For f(x)=x³−3x²−9x+5: (i) find all stationary points and classify them; (ii) state the intervals where f is increasing and decreasing.",
        steps: [
          {
            work: "Differentiate and factor: f′(x)=3x²−6x−9=3(x−3)(x+1).",
            marks: 2
          },
          {
            work: "Set f′(x)=0. The stationary x-values are x=−1 and x=3.",
            marks: 1
          },
          {
            work: "f(−1)=−1−3+9+5=10, giving the point (−1,10).",
            marks: 1
          },
          {
            work: "f(3)=27−27−27+5=−22, giving the point (3,−22).",
            marks: 1
          },
          {
            work: "Differentiate again: f″(x)=6x−6.",
            marks: 1
          },
          {
            work: "f″(−1)=−12&lt;0, so (−1,10) is a local maximum.",
            marks: 1
          },
          {
            work: "f″(3)=12&gt;0, so (3,−22) is a local minimum.",
            marks: 1
          },
          {
            work: "The sign of 3(x−3)(x+1) is positive outside the roots and negative between them. Thus f increases on (−∞,−1) and (3,∞), and decreases on (−1,3).",
            marks: 2
          }
        ],
        finalAnswer: "Local maximum: (−1,10). Local minimum: (3,−22). Increasing on (−∞,−1)∪(3,∞); decreasing on (−1,3).",
        markerNote: "A stationary point needs both coordinates. Its classification and increasing/decreasing intervals need a second-derivative or sign argument.",
        commonTraps: [
          "Giving only x=−1 and x=3 instead of full coordinates.",
          "Calling f″&lt;0 a minimum and f″&gt;0 a maximum.",
          "Including stationary endpoints in open increasing/decreasing intervals.",
          "Guessing the intervals without checking the sign of f′."
        ],
        calculatorCheck: [
          "Use TABLE for f(x) from −2 to 4 with step 1. The values should turn near x=−1 and x=3.",
          "You can also table f′(x)=3(x−3)(x+1) to check that its signs are +, then −, then +."
        ]
      },
      {
        id: "main-q7a",
        number: "7(a)",
        title: "Hyperbolic and logarithmic chain rule",
        topic: "Hyperbolic functions",
        marks: 3,
        priority: "must-read",
        provenance: "Original synthesis based on the hyperbolic-function scope in the class notes and OpenStax Section 6.9.",
        prompt: "Differentiate y=cosh(ln(2x)) and simplify the answer algebraically.",
        steps: [
          {
            work: "Let u=ln(2x). Then y′=sinh(u)u′ and u′=2/(2x)=1/x.",
            marks: 1
          },
          {
            work: "Hence y′=sinh(ln(2x))/x.",
            marks: 1
          },
          {
            work: "Since sinh(ln(2x))=[2x−1/(2x)]/2, y′=1−1/(4x²), for x&gt;0.",
            marks: 1
          }
        ],
        finalAnswer: "y′=sinh(ln(2x))/x=1−1/(4x²), x&gt;0.",
        markerNote: "Unlike cosine, cosh differentiates to positive sinh. The domain x&gt;0 comes from ln(2x).",
        commonTraps: [
          "Adding a negative sign because d(cos x)/dx is negative.",
          "Writing d[ln(2x)]/dx as 1/(2x).",
          "Losing the factor 1/2 in the definition of sinh."
        ],
        calculatorCheck: [
          "Use Calculate mode → OPTN → Hyperbolic Func. At x=1, compare a symmetric difference with 1−1/4=0.75.",
          "Do not try x≤0 because ln(2x) is not real there."
        ]
      },
      {
        id: "main-q7b",
        number: "7(b)",
        title: "Nested exponential and hyperbolic functions",
        topic: "Hyperbolic functions",
        marks: 3,
        priority: "must-read",
        provenance: "Original synthesis based on the chain-rule and hyperbolic-function scope in the class notes.",
        prompt: "Differentiate y=e<sup>tanh(3x)</sup>.",
        steps: [
          {
            work: "For e<sup>u</sup>, copy e<sup>u</sup> and multiply by u′.",
            marks: 1
          },
          {
            work: "If u=tanh(3x), then u′=3sech²(3x).",
            marks: 1
          },
          {
            work: "Therefore y′=3e<sup>tanh(3x)</sup>sech²(3x).",
            marks: 1
          }
        ],
        finalAnswer: "y′=3e<sup>tanh(3x)</sup>sech²(3x).",
        markerNote: "There are two chain-rule layers: the outer exponential and the inner tanh(3x).",
        commonTraps: [
          "Dropping the exponential after differentiating it.",
          "Using sec² instead of hyperbolic sech².",
          "Forgetting the inner factor 3."
        ],
        calculatorCheck: [
          "Use the hyperbolic menu and a symmetric difference at x=0.2 to check the numerical slope.",
          "Calculator agreement is only a check; the exact chain-rule line earns the marks."
        ]
      }
    ],
    sources: [
      {
        label: "OpenStax Calculus Volume 1 — Chapter 2 Review",
        url: "https://openstax.org/books/calculus-volume-1/pages/2-review-exercises",
        note: "Limits, continuity and rational-function review patterns."
      },
      {
        label: "OpenStax Calculus Volume 1 — Chapter 3 Review",
        url: "https://openstax.org/books/calculus-volume-1/pages/3-review-exercises",
        note: "Derivative definitions, rules and applications review patterns."
      },
      {
        label: "MIT OpenCourseWare — Single Variable Calculus Exams",
        url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/exams/",
        note: "University-level exam structure and skills coverage."
      },
      {
        label: "Paul’s Online Math Notes — Calculus I Practice",
        url: "https://tutorial.math.lamar.edu/Problems/CalcI/CalcI.aspx",
        note: "Additional practice patterns for limits, derivatives and applications."
      }
    ],
    finalCheck: [
      "All seven question groups were attempted and their marks total 60.",
      "Every 0/0 limit was simplified before substitution.",
      "Trigonometric work and calculator checks used radians.",
      "Cancelled denominator factors were recorded as domain exclusions and holes.",
      "The first-principles answer includes the definition, expansion, cancellation and limit.",
      "Every product has two derivative terms and every composite function has its inner derivative.",
      "Inverse-trig domains and original function restrictions were stated.",
      "Stationary points include coordinates, classification and increasing/decreasing intervals.",
      "Final answers are exact, clearly labelled and checked for missing signs or brackets."
    ]
  };

  window.EXAM_PAPERS = [cat1Solved, cat2Mock, mainExamMock];
})();

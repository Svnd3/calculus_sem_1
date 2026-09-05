/* Course content is kept separate from the interface so it is easy to extend
   when the next batch of class notes arrives. */
(function () {
  const commonVideos = {
    discretePlaylist: {
      title: "Discrete Mathematics I playlist",
      channel: "Kimberly Brehm",
      url: "https://www.youtube.com/playlist?list=PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz",
    },
    mit: {
      title: "Mathematics for Computer Science",
      channel: "MIT OpenCourseWare",
      url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/video_galleries/video-lectures/",
    },
  };

  const lessons = [
    {
      id: "number-systems",
      number: 1,
      navTitle: "Numbers & proof",
      title: "Number families & proof by contradiction",
      symbol: "ℝ",
      minutes: 28,
      summary: "Know where every kind of number lives, read the discriminant, and prove that roots such as √2 are irrational.",
      goals: [
        "Classify a number as natural, whole, integer, rational, irrational, real, or complex.",
        "Use b² − 4ac to predict the roots of a quadratic.",
        "Write a clean contradiction proof for √2 or √3.",
      ],
      keywords: "natural whole integers rational irrational real complex number line quadratic discriminant contradiction square root",
      sections: [
        {
          id: "number-family",
          title: "1. The number-family map",
          html: `
            <p>A number can belong to more than one family. Think of the families as boxes placed inside larger boxes.</p>
            <span class="math-block">ℕ ⊂ W ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ</span>
            <div class="plain-table-wrap"><table class="plain-table">
              <thead><tr><th>Family</th><th>Meaning</th><th>Examples</th></tr></thead>
              <tbody>
                <tr><td><span class="math-inline">ℕ</span> natural</td><td>Counting numbers. In these class notes, 0 is not included.</td><td>1, 2, 3, …</td></tr>
                <tr><td><span class="math-inline">W</span> whole</td><td>Natural numbers together with zero.</td><td>0, 1, 2, 3, …</td></tr>
                <tr><td><span class="math-inline">ℤ</span> integers</td><td>Whole numbers and their negatives.</td><td>…, −2, −1, 0, 1, 2, …</td></tr>
                <tr><td><span class="math-inline">ℚ</span> rational</td><td>Can be written as a/b, where a,b ∈ ℤ and b ≠ 0.</td><td>½, −3, 0.75, 0.333…</td></tr>
                <tr><td><span class="math-inline">ℝ∖ℚ</span> irrational</td><td>Cannot be written as an integer fraction.</td><td>√2, √3, π, e</td></tr>
                <tr><td><span class="math-inline">ℝ</span> real</td><td>All rational and irrational numbers; every point on the number line.</td><td>−6, ⅓, √5, π</td></tr>
                <tr><td><span class="math-inline">ℂ</span> complex</td><td>Numbers a + bi, where a,b ∈ ℝ and i² = −1.</td><td>2 + 3i, −i, 7</td></tr>
              </tbody>
            </table></div>
            <p><strong>Decimal test:</strong> a rational decimal terminates (0.625) or eventually repeats (0.272727…). An irrational decimal continues without an eventual repeating pattern.</p>
          `,
        },
        {
          id: "quadratics",
          title: "2. Quick quadratic refresher",
          html: `
            <p>A quadratic has the form <span class="math-inline">ax² + bx + c = 0</span>, with <span class="math-inline">a ≠ 0</span>. You may solve it by factorising, graphing, or the quadratic formula.</p>
            <span class="math-block">x = (−b ± √(b² − 4ac)) / (2a)</span>
            <p>The part <span class="math-inline">D = b² − 4ac</span> is the <strong>discriminant</strong>. It tells you the kind of roots before you solve:</p>
            <div class="definition-grid">
              <div class="definition-card"><strong>D &gt; 0</strong><span>Two distinct real roots.</span></div>
              <div class="definition-card"><strong>D = 0</strong><span>One repeated real root.</span></div>
              <div class="definition-card"><strong>D &lt; 0</strong><span>Two non-real complex roots.</span></div>
            </div>
            <p>Example: <span class="math-inline">x² − 11x + 28 = 0</span> factorises to <span class="math-inline">(x−4)(x−7)=0</span>, so the integer solution set is <span class="math-inline">{4,7}</span>.</p>
          `,
        },
        {
          id: "contradiction",
          title: "3. Proof by contradiction",
          html: `
            <p>To prove a claim by contradiction, temporarily assume its opposite. Follow that assumption until it forces something impossible. Therefore the assumption was wrong and the original claim is true.</p>
            <ol>
              <li>State the opposite assumption clearly.</li>
              <li>Use definitions and valid algebra.</li>
              <li>Reach a contradiction.</li>
              <li>Reject the assumption and state the conclusion.</li>
            </ol>
            <p>For irrational-root proofs, write the assumed fraction in <strong>lowest terms</strong>. That phrase is what creates the final contradiction.</p>
          `,
        },
      ],
      memory: [
        { title: "Memorise the nesting", body: "ℕ ⊂ W ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ. A smaller-family number automatically belongs to every family on its right.", tone: "yellow" },
        { title: "Do not skip this", body: "In √p proofs, say gcd(a,b)=1. Showing both a and b are divisible by p only contradicts the fact that a/b was already simplified.", tone: "coral" },
      ],
      examples: [
        {
          title: "Worked proof: √2 is irrational",
          source: "From the first class-note page, corrected rigorously",
          question: "Prove by contradiction that √2 is irrational.",
          steps: [
            "Assume the opposite: √2 is rational. Then √2 = a/b for integers a,b with b ≠ 0 and gcd(a,b)=1.",
            "Square both sides: 2 = a²/b², so a² = 2b². Therefore a² is even, which means a is even.",
            "Write a = 2k. Substitute: (2k)² = 2b², so 4k² = 2b² and b² = 2k². Therefore b is also even.",
            "Now 2 divides both a and b. That contradicts gcd(a,b)=1.",
          ],
          answer: "The assumption was false, so √2 is irrational. The same structure works for √3 using divisibility by 3.",
        },
        {
          title: "Worked proof: finish the √3 argument",
          source: "Class-note proof completed with the missing gcd step",
          question: "Prove by contradiction that √3 is irrational.",
          steps: [
            "Assume √3=a/b for integers a,b in lowest terms, so gcd(a,b)=1.",
            "Squaring gives a²=3b². Therefore 3 divides a², and because 3 is prime, 3 divides a. Write a=3k.",
            "Substitute: 9k²=3b², so b²=3k². Hence 3 also divides b.",
            "Now 3 divides both a and b, contradicting gcd(a,b)=1.",
          ],
          answer: "The rational assumption creates a common factor, so √3 is irrational.",
        },
      ],
      quiz: [
        { q: "Which is the smallest listed family containing −7?", options: ["ℕ", "W", "ℤ", "ℚ only"], answer: 2, explain: "−7 is an integer. It is also rational, real and complex, but ℤ is the smallest matching family." },
        { q: "What does D = b² − 4ac &lt; 0 tell you?", options: ["Two real roots", "One repeated root", "Two non-real complex roots", "No roots of any kind"], answer: 2, explain: "A negative discriminant has no real square root, so the quadratic has a complex-conjugate pair." },
        { q: "Why must a/b be in lowest terms in the √2 proof?", options: ["To make b positive", "So even a and b create a contradiction", "To make a = b", "To avoid squaring"], answer: 1, explain: "If gcd(a,b)=1 but the proof forces both to be even, the assumption cannot be true." },
        { q: "Which decimal is irrational?", options: ["0.125", "0.272727…", "3.14159265… with no repeating block", "−4"], answer: 2, explain: "Terminating or repeating decimals are rational. A non-terminating, non-repeating decimal is irrational." },
        { q: "A proof assumes √3=a/b but never says the fraction is simplified. What is missing?", options: ["A decimal estimate", "The condition gcd(a,b)=1", "A graph", "The quadratic formula"], answer: 1, explain: "The final common-factor contradiction only works after declaring a/b to be in lowest terms." },
      ],
      videos: [
        { title: "Rational and irrational numbers", channel: "Khan Academy", url: "https://www.youtube.com/watch?v=cLP7INqs3JM" },
        commonVideos.mit,
      ],
    },

    {
      id: "set-basics",
      number: 2,
      navTitle: "Set language",
      title: "Sets, subsets & power sets",
      symbol: "⊆",
      minutes: 30,
      summary: "Read and write set notation without mixing up an element, a subset, and a set containing the empty set.",
      goals: [
        "Write sets in roster and set-builder form.",
        "Distinguish ∈ from ⊆ and ⊂.",
        "Build a power set and use |P(A)| = 2ⁿ.",
      ],
      keywords: "set element membership roster set builder cardinality singleton empty null subset proper subset equality power set",
      sections: [
        {
          id: "set-language",
          title: "1. Speaking set language",
          html: `
            <p>A <strong>set</strong> is a well-defined collection of distinct objects. The objects are its <strong>elements</strong> or members.</p>
            <div class="definition-grid">
              <div class="definition-card"><strong>x ∈ A</strong><span>x is an element of A.</span></div>
              <div class="definition-card"><strong>x ∉ A</strong><span>x is not an element of A.</span></div>
              <div class="definition-card"><strong>|A| or n(A)</strong><span>The cardinality: number of distinct elements.</span></div>
              <div class="definition-card"><strong>∅</strong><span>The empty set: a set with no elements.</span></div>
            </div>
            <p>Example: if <span class="math-inline">A={a,1,2,b,c,3}</span>, then <span class="math-inline">a∈A</span>, <span class="math-inline">4∉A</span>, and <span class="math-inline">|A|=6</span>.</p>
            <ul>
              <li>Order does not matter: <span class="math-inline">{1,2,3}={3,1,2}</span>.</li>
              <li>Repetition does not count: <span class="math-inline">{1,1,2}={1,2}</span>.</li>
              <li>A one-element set such as <span class="math-inline">{7}</span> is a <strong>singleton</strong>.</li>
            </ul>
          `,
        },
        {
          id: "set-forms",
          title: "2. Two ways to describe a set",
          html: `
            <h3>Roster/listing form</h3>
            <p>List the elements inside braces: <span class="math-inline">A={3,5}</span>.</p>
            <h3>Set-builder form</h3>
            <p>Give a rule: <span class="math-inline">B={x∈ℤ : x²−8x+15=0}</span>. Read the colon as “such that.” Factorising gives <span class="math-inline">(x−3)(x−5)=0</span>, so <span class="math-inline">B={3,5}</span>.</p>
            <p>The universe matters. <span class="math-inline">{x∈ℤ⁺ : x²=7}=∅</span>, because no positive integer squares to 7.</p>
          `,
        },
        {
          id: "subsets",
          title: "3. Subsets and equality",
          html: `
            <p><span class="math-inline">A ⊆ B</span> means every element of A is in B. Use <span class="math-inline">A ⊂ B</span> when A is a <strong>proper</strong> subset: A sits inside B but A ≠ B.</p>
            <span class="math-block">A ⊆ B ⇔ for every x, x∈A implies x∈B</span>
            <ul>
              <li>Every set is a subset of itself: <span class="math-inline">A⊆A</span>.</li>
              <li>The empty set is a subset of every set: <span class="math-inline">∅⊆A</span>.</li>
              <li><span class="math-inline">A=B</span> exactly when <span class="math-inline">A⊆B</span> and <span class="math-inline">B⊆A</span>.</li>
            </ul>
            <p>Do not mix up <span class="math-inline">3∈A</span> (3 is an element) with <span class="math-inline">{3}⊆A</span> ({3} is a set).</p>
          `,
        },
        {
          id: "power-set",
          title: "4. Power sets",
          html: `
            <p>The power set <span class="math-inline">P(A)</span> is the set of <strong>all subsets</strong> of A, including ∅ and A itself.</p>
            <span class="math-block">If |A|=n, then |P(A)|=2ⁿ.</span>
            <p>For <span class="math-inline">A={1,a,3}</span>:</p>
            <span class="math-block">P(A)={∅,{1},{a},{3},{1,a},{1,3},{a,3},{1,a,3}}</span>
            <p>There are 8 subsets because each of the 3 elements has two choices: included or not included.</p>
          `,
        },
      ],
      memory: [
        { title: "Element vs subset", body: "Use ∈ between an object and a set. Use ⊆ between two sets. Example: 2∈{1,2}, but {2}⊆{1,2}.", tone: "yellow" },
        { title: "The empty-set trap", body: "∅ has 0 elements. {∅} has 1 element. If B={0,∅,{∅}}, then |B|=3 and |P(B)|=8.", tone: "coral" },
      ],
      examples: [
        {
          title: "Worked example: power set without missing anything",
          source: "Adapted from the class notes",
          question: "Write P({p,q,r}) and state its cardinality.",
          steps: [
            "Start with the subset having 0 elements: ∅.",
            "List all 1-element subsets: {p}, {q}, {r}.",
            "List all 2-element subsets: {p,q}, {p,r}, {q,r}.",
            "Finish with the 3-element subset: {p,q,r}.",
          ],
          answer: "P(A)={∅,{p},{q},{r},{p,q},{p,r},{q,r},{p,q,r}} and |P(A)|=2³=8.",
        },
      ],
      quiz: [
        { q: "If A={2,4,6}, which statement is correct?", options: ["2⊆A", "{2}∈A", "2∈A", "∅∈A"], answer: 2, explain: "2 is an element. {2} is a subset, and ∅ is a subset—not an explicitly listed element." },
        { q: "How many elements does P({a,b,c,d}) have?", options: ["4", "8", "16", "24"], answer: 2, explain: "A 4-element set has 2⁴=16 subsets." },
        { q: "Which set has cardinality 1?", options: ["∅", "{∅}", "P(∅) has no elements", "{}"], answer: 1, explain: "{∅} contains one object: the empty set. Also P(∅)={∅}, so it has one element." },
        { q: "What proves A=B?", options: ["|A|=|B| only", "A∈B", "A⊆B and B⊆A", "A⊂B"], answer: 2, explain: "Equal cardinality alone is not enough. Mutual containment proves equality." },
        { q: "What is P(∅)?", options: ["∅", "{∅}", "{{∅}}", "Undefined"], answer: 1, explain: "The empty set has exactly one subset—∅ itself—so its power set is {∅}." },
      ],
      videos: [
        { title: "Introduction to sets", channel: "Kimberly Brehm", url: "https://www.youtube.com/watch?v=dZbbkoYcSOE" },
        commonVideos.discretePlaylist,
      ],
    },

    {
      id: "set-operations",
      number: 3,
      navTitle: "Set operations",
      title: "Set operations & Venn diagrams",
      symbol: "∪",
      minutes: 32,
      summary: "Translate OR, AND, NOT, and ‘but not’ into set notation, then shade or read the matching Venn region.",
      goals: [
        "Compute union, intersection, complement, difference, and symmetric difference.",
        "Translate a set expression into a Venn region.",
        "Use the key set laws to simplify expressions.",
      ],
      keywords: "union intersection complement difference relative symmetric venn universal de morgan laws shade",
      sections: [
        {
          id: "five-operations",
          title: "1. The five operations",
          html: `
            <p>Let <span class="math-inline">A={1,2,3,4}</span>, <span class="math-inline">B={3,4,5,6}</span>, and let U be the universal set.</p>
            <div class="plain-table-wrap"><table class="plain-table">
              <thead><tr><th>Name</th><th>Symbol and meaning</th><th>Result</th></tr></thead>
              <tbody>
                <tr><td>Union</td><td><span class="math-inline">A∪B</span>: in A <strong>or</strong> B (inclusive or)</td><td>{1,2,3,4,5,6}</td></tr>
                <tr><td>Intersection</td><td><span class="math-inline">A∩B</span>: in A <strong>and</strong> B</td><td>{3,4}</td></tr>
                <tr><td>Complement</td><td><span class="math-inline">Aᶜ</span>: in U but not A</td><td>Depends on U</td></tr>
                <tr><td>Difference</td><td><span class="math-inline">A∖B</span>: in A but not B</td><td>{1,2}</td></tr>
                <tr><td>Symmetric difference</td><td><span class="math-inline">A△B</span>: in A or B, but not both</td><td>{1,2,5,6}</td></tr>
              </tbody>
            </table></div>
            <span class="math-block">A △ B = (A∖B) ∪ (B∖A) = (A∪B)∖(A∩B)</span>
          `,
        },
        {
          id: "venn-reading",
          title: "2. Read a Venn expression in layers",
          html: `
            <p>Parentheses tell you what to shade first. For <span class="math-inline">(A∪B)∩C</span>, first imagine everything in A or B; then keep only the part that is also inside C.</p>
            <div class="venn-demo">
              <svg class="venn-svg" viewBox="0 0 240 180" role="img" aria-label="Three intersecting sets A, B and C">
                <rect x="8" y="8" width="224" height="164" rx="10" fill="#fffdf7" stroke="#9ba8a3"/>
                <circle cx="92" cy="78" r="52" fill="#f7d66d" fill-opacity=".5" stroke="#173c35" stroke-width="2"/>
                <circle cx="148" cy="78" r="52" fill="#ef725d" fill-opacity=".36" stroke="#173c35" stroke-width="2"/>
                <circle cx="120" cy="121" r="48" fill="#5f89ae" fill-opacity=".34" stroke="#173c35" stroke-width="2"/>
                <text x="65" y="48" font-size="16" fill="#173c35">A</text><text x="166" y="48" font-size="16" fill="#173c35">B</text><text x="119" y="148" font-size="16" fill="#173c35">C</text>
              </svg>
              <div class="venn-copy"><strong>Always label every set.</strong><p>In an exam, draw the universal rectangle, label the circles, and shade cleanly. Marks can be lost when correct working is not shown on the diagram.</p></div>
            </div>
            <p><strong>Translation shortcuts:</strong> “and” → ∩, inclusive “or” → ∪, “not” → complement, “A but not B” → A∖B, “exactly one of A and B” → A△B.</p>
            <p><strong>Disjoint</strong> means the sets share no elements: <span class="math-inline">A∩B=∅</span>.</p>
          `,
        },
        {
          id: "set-laws",
          title: "3. Laws worth memorising",
          html: `
            <div class="plain-table-wrap"><table class="plain-table">
              <tbody>
                <tr><th>Commutative</th><td>A∪B=B∪A; A∩B=B∩A</td></tr>
                <tr><th>Associative</th><td>(A∪B)∪C=A∪(B∪C), and similarly for ∩</td></tr>
                <tr><th>Distributive</th><td>A∩(B∪C)=(A∩B)∪(A∩C); swap ∩ and ∪ for the other form</td></tr>
                <tr><th>Identity</th><td>A∪∅=A; A∩U=A</td></tr>
                <tr><th>Domination</th><td>A∪U=U; A∩∅=∅</td></tr>
                <tr><th>Complement</th><td>A∪Aᶜ=U; A∩Aᶜ=∅; (Aᶜ)ᶜ=A</td></tr>
                <tr><th>De Morgan</th><td>(A∪B)ᶜ=Aᶜ∩Bᶜ; (A∩B)ᶜ=Aᶜ∪Bᶜ</td></tr>
              </tbody>
            </table></div>
            <p>De Morgan’s memory rule: when the complement crosses brackets, it complements each set and <strong>flips</strong> ∪ ↔ ∩.</p>
          `,
        },
      ],
      memory: [
        { title: "OR is generous", body: "A∪B includes the overlap. Symmetric difference A△B is the one that excludes the overlap.", tone: "yellow" },
        { title: "Difference has direction", body: "A∖B and B∖A are usually different. Start inside the set written first, then remove the second.", tone: "coral" },
      ],
      examples: [
        {
          title: "Worked example: simplify a region",
          source: "Built from the class-note Venn exercises",
          question: "Describe (A∩B)ᶜ ∪ C in words and simplify it.",
          steps: [
            "Apply De Morgan: (A∩B)ᶜ = Aᶜ∪Bᶜ.",
            "Union with C: (Aᶜ∪Bᶜ)∪C.",
            "Use associativity to remove unnecessary brackets: Aᶜ∪Bᶜ∪C.",
            "In words: everything outside at least one of A or B, together with everything in C.",
          ],
          answer: "(A∩B)ᶜ ∪ C = Aᶜ ∪ Bᶜ ∪ C.",
        },
      ],
      quiz: [
        { q: "Which expression means ‘in A but not in B’?", options: ["A∩B", "A∪B", "A∖B", "B∖A"], answer: 2, explain: "Set difference keeps elements from the first set and removes those in the second." },
        { q: "What is (A∪B)ᶜ?", options: ["Aᶜ∪Bᶜ", "Aᶜ∩Bᶜ", "A∩B", "A△B"], answer: 1, explain: "De Morgan flips union to intersection and complements both sets." },
        { q: "If A={1,2,3} and B={3,4}, what is A△B?", options: ["{3}", "{1,2,3,4}", "{1,2,4}", "{1,2}"], answer: 2, explain: "Keep values found in exactly one set, so remove the shared 3." },
        { q: "Which operation is commutative?", options: ["Set difference only", "Union and intersection", "Complement", "None"], answer: 1, explain: "A∪B=B∪A and A∩B=B∩A. Difference is directional." },
        { q: "Which expression is always the empty set?", options: ["A∪Aᶜ", "A∩Aᶜ", "A∪∅", "A∩U"], answer: 1, explain: "No object can be both inside A and outside A at the same time." },
      ],
      videos: [
        { title: "Set operations and Venn diagrams", channel: "Kimberly Brehm", url: "https://www.youtube.com/watch?v=YlKDp03Kg68" },
        commonVideos.discretePlaylist,
      ],
    },

    {
      id: "venn-counting",
      number: 4,
      navTitle: "Counting with Venn",
      title: "Counting with Venn diagrams",
      symbol: "|A|",
      minutes: 38,
      summary: "Turn wordy surveys into seven small Venn regions using inclusion–exclusion and an inside-out filling method.",
      goals: [
        "Apply inclusion–exclusion for two and three sets.",
        "Separate pairwise totals from exactly-two regions.",
        "Translate ‘at least’, ‘exactly’, ‘only’, and ‘none’ correctly.",
      ],
      keywords: "cardinality inclusion exclusion venn survey exactly only at least none fewer pairwise three sets",
      sections: [
        {
          id: "inclusion-exclusion",
          title: "1. The no-double-counting formulas",
          html: `
            <p>Adding |A| and |B| counts their overlap twice. Subtract the overlap once.</p>
            <span class="math-block">|A∪B| = |A| + |B| − |A∩B|</span>
            <p>For three sets, subtract all pairwise overlaps, then add the triple overlap back because it was removed too many times.</p>
            <span class="math-block">|A∪B∪C| = |A|+|B|+|C| − |A∩B|−|A∩C|−|B∩C| + |A∩B∩C|</span>
          `,
        },
        {
          id: "inside-out",
          title: "2. The inside-out method",
          html: `
            <ol>
              <li>Put the <strong>all-three</strong> value in the centre first.</li>
              <li>For each pair, subtract the centre to get “that pair only.”</li>
              <li>For each single set, subtract every region already inside its circle.</li>
              <li>Add all seven inside regions for “at least one.”</li>
              <li>Subtract the union from the universal total for “none.”</li>
            </ol>
            <p>This method is safer than trying to invent one long equation. Every number receives one home.</p>
            <div class="definition-grid">
              <div class="definition-card"><strong>At least one</strong><span>The whole union.</span></div>
              <div class="definition-card"><strong>Exactly two</strong><span>The three pair-only lenses; do not include the centre.</span></div>
              <div class="definition-card"><strong>At least two</strong><span>Exactly two plus all three.</span></div>
              <div class="definition-card"><strong>Only A</strong><span>Inside A and outside every other circle.</span></div>
            </div>
          `,
        },
        {
          id: "fast-relations",
          title: "3. Fast relations for exam wording",
          html: `
            <p>Let e₁ be the number in exactly one set, e₂ in exactly two, and t in all three.</p>
            <span class="math-block">|A∪B∪C| = e₁ + e₂ + t</span>
            <span class="math-block">|A|+|B|+|C| = e₁ + 2e₂ + 3t</span>
            <p>Subtracting the first equation from the second gives <span class="math-inline">e₂ + 2t</span>. This shortcut is excellent when a question gives each set total, the union total, and the all-three value.</p>
          `,
        },
      ],
      memory: [
        { title: "Centre first—always", body: "Pairwise totals normally include people in all three sets. So pair-only = stated pair intersection − centre.", tone: "yellow" },
        { title: "English decoder", body: "‘None’ = outside the union. ‘Fewer than two’ = none + exactly one. ‘Besides’ usually means an intersection, so read the sentence carefully.", tone: "coral" },
      ],
      examples: [
        {
          title: "Worked survey: magazines",
          source: "Class notes · three-set hard problem",
          question: "Of 120 people, |N|=65, |T|=45, |F|=42, |N∩T|=20, |N∩F|=25, |T∩F|=15 and |N∩T∩F|=8. Find at least one, exactly one, N and F but not T, and none.",
          steps: [
            "Centre = 8. Pair-only regions: NT=20−8=12, NF=25−8=17, TF=15−8=7.",
            "Only N=65−12−17−8=28. Only T=45−12−7−8=18. Only F=42−17−7−8=10.",
            "At least one =28+18+10+12+17+7+8=100.",
            "Exactly one =28+18+10=56; N and F but not T=17; none=120−100=20.",
          ],
          answer: "At least one: 100; exactly one: 56; N∩F but not T: 17; none: 20.",
        },
        {
          title: "Past paper: exactly two medals",
          source: "2026 exam · Q1(a)(ii) · 3 marks",
          question: "There were 36 dance, 12 drama and 18 music medals, shared by 45 people; 4 received all three. How many received exactly two?",
          steps: [
            "Total memberships =36+12+18=66. Let e₁=exactly one and e₂=exactly two; t=4.",
            "People in the union: e₁+e₂+4=45.",
            "Count memberships: e₁+2e₂+3(4)=66.",
            "Subtract the union equation: e₂+8=21, so e₂=13.",
          ],
          answer: "13 people received medals in exactly two categories.",
        },
      ],
      quiz: [
        { q: "A pairwise total |A∩B|=14 and all-three total is 5. What goes in the A-and-B-only lens?", options: ["5", "9", "14", "19"], answer: 1, explain: "The pairwise intersection includes the centre, so pair-only =14−5=9." },
        { q: "Which regions make ‘at least two’?", options: ["Only the centre", "Only the three pair-only lenses", "The three pair-only lenses plus the centre", "The whole union"], answer: 2, explain: "At least two means exactly two or exactly three." },
        { q: "If 60 people were surveyed, 50 chose at least one option, how many chose none?", options: ["10", "50", "60", "110"], answer: 0, explain: "None = universal total − union =60−50=10." },
        { q: "For three sets, why is the triple intersection added at the end of inclusion–exclusion?", options: ["It was never counted", "It was counted exactly once", "After pair subtraction it has been removed too many times", "Because it equals the union"], answer: 2, explain: "It is added three times in singles and subtracted three times in pairs, leaving zero; add it once to count it correctly." },
        { q: "Total memberships are 66, the union has 45 people, and 4 are in all three. How many are in exactly two?", options: ["9", "13", "17", "21"], answer: 1, explain: "Memberships−union=e₂+2t, so 66−45=e₂+8 and e₂=13." },
      ],
      videos: [
        { title: "Venn diagrams and inclusion–exclusion", channel: "Kimberly Brehm", url: "https://www.youtube.com/watch?v=YlKDp03Kg68" },
        commonVideos.mit,
      ],
    },

    {
      id: "factorials-combinations",
      number: 5,
      navTitle: "Factorials & choose",
      title: "Factorials & combinations",
      symbol: "n!",
      minutes: 26,
      summary: "Simplify factorials, calculate nCr efficiently, and recognise when a problem is asking you to choose rather than arrange.",
      goals: [
        "Use n!, 0!=1, and factorial cancellation.",
        "Calculate and interpret nCr.",
        "Use symmetry and Pascal’s identity as shortcuts.",
      ],
      keywords: "factorial combination choose ncr binomial coefficient permutation order committee pascal symmetry cancellation",
      sections: [
        {
          id: "factorials",
          title: "1. Factorials without giant numbers",
          html: `
            <p>For a positive integer n, <span class="math-inline">n!</span> means multiply every positive integer from n down to 1.</p>
            <span class="math-block">n! = n(n−1)(n−2)…3·2·1 &nbsp;&nbsp; and &nbsp;&nbsp; 0! = 1</span>
            <p>Examples: <span class="math-inline">5!=120</span>, <span class="math-inline">8!=40320</span>, and <span class="math-inline">(n+1)!=(n+1)n!</span>.</p>
            <p><strong>Cancel before multiplying:</strong> <span class="math-inline">10!/8! = 10·9</span>, not two enormous factorials divided at the end.</p>
          `,
        },
        {
          id: "combinations",
          title: "2. Combinations: choosing without order",
          html: `
            <p>A combination counts ways to choose r objects from n when order does not matter.</p>
            <span class="math-block">ⁿCᵣ = C(n,r) = n! / [(n−r)!r!]</span>
            <p>For example, <span class="math-inline">C(7,5)=7!/(2!5!)=(7·6)/(2·1)=21</span>.</p>
            <div class="definition-grid">
              <div class="definition-card"><strong>C(n,r)=C(n,n−r)</strong><span>Choosing r to keep is the same as choosing n−r to leave out.</span></div>
              <div class="definition-card"><strong>C(n,0)=C(n,n)=1</strong><span>Choose nothing, or choose everything: one way.</span></div>
              <div class="definition-card"><strong>C(n,r)=0</strong><span>When r&lt;0 or r&gt;n; the requested choice is impossible.</span></div>
              <div class="definition-card"><strong>Pascal identity</strong><span>C(n,r)=C(n−1,r−1)+C(n−1,r).</span></div>
            </div>
          `,
        },
        {
          id: "choose-arrange",
          title: "3. Choose or arrange?",
          html: `
            <p>Ask one question: <strong>if I swap the selected people/items, is it a new outcome?</strong></p>
            <ul>
              <li>No → use a combination. A committee {A,B,C} is unchanged when listed {C,A,B}.</li>
              <li>Yes → order matters. An ordered podium (gold, silver, bronze) changes when two people swap.</li>
            </ul>
            <p>The class notes introduce combinations as the coefficients in a binomial expansion. This meaning is the same: <span class="math-inline">C(n,r)</span> chooses which r factors contribute the second term.</p>
          `,
        },
      ],
      memory: [
        { title: "Small-side shortcut", body: "Use C(n,r)=C(n,n−r). C(100,98) is just C(100,2), which needs only 100×99÷2.", tone: "yellow" },
        { title: "Committee clue", body: "Words like choose, select, committee, or subset usually mean order does not matter. Roles, seats, codes, and rankings usually mean order matters.", tone: "coral" },
      ],
      examples: [
        {
          title: "Past paper: committee restriction",
          source: "2026 exam · Q1(h) · 3 marks",
          question: "Choose a committee of 3 from 4 women and 5 men. It must contain both genders, and one married woman–man pair may not serve together.",
          steps: [
            "Count all mixed-gender committees. One woman + two men: C(4,1)C(5,2)=4·10=40.",
            "Two women + one man: C(4,2)C(5,1)=6·5=30. Total so far=70.",
            "Remove committees containing the married pair. Once that pair is selected, the third member can be any of the other 7 people.",
            "Valid committees=70−7=63.",
          ],
          answer: "63 committees.",
        },
      ],
      quiz: [
        { q: "What is 7!/5!?", options: ["2", "42", "210", "5040"], answer: 1, explain: "Cancel 5!: 7!/5!=7·6=42." },
        { q: "Which equals C(12,9)?", options: ["C(12,2)", "C(12,3)", "C(9,3)", "9!"], answer: 1, explain: "By symmetry, C(n,r)=C(n,n−r), so C(12,9)=C(12,3)." },
        { q: "How many 3-person committees can be selected from 8 people?", options: ["24", "56", "336", "512"], answer: 1, explain: "Order does not matter: C(8,3)=8·7·6/(3·2·1)=56." },
        { q: "Why is 0!=1?", options: ["It is an arbitrary typo", "There is one way to choose or arrange zero objects", "0 and 1 are equal", "Every factorial is 1"], answer: 1, explain: "The empty selection/arrangement has one outcome; this also keeps identities like C(n,0)=1 consistent." },
        { q: "What is C(10,8) using the fastest symmetry shortcut?", options: ["C(10,1)=10", "C(10,2)=45", "C(8,2)=28", "10!/8! = 90"], answer: 1, explain: "C(10,8)=C(10,2)=10·9/2=45." },
      ],
      videos: [
        { title: "Permutations and combinations", channel: "Kimberly Brehm", url: "https://www.youtube.com/watch?v=1CTzx89Kzy4" },
        commonVideos.discretePlaylist,
      ],
    },

    {
      id: "binomial-basics",
      number: 6,
      navTitle: "Binomial theorem",
      title: "The finite binomial theorem",
      symbol: "(a+b)ⁿ",
      minutes: 38,
      summary: "Expand a binomial using one reliable general term, keep signs under control, and extend the idea to three terms.",
      goals: [
        "Use Tᵣ₊₁=C(n,r)aⁿ⁻ʳbʳ correctly.",
        "Expand a positive-integer power without missing terms or signs.",
        "Find a chosen coefficient in a trinomial expansion.",
      ],
      keywords: "binomial theorem expansion general term coefficient pascal triangle multinomial trinomial positive integer sign",
      sections: [
        {
          id: "theorem",
          title: "1. One formula runs the chapter",
          html: `
            <p>For a non-negative integer n:</p>
            <span class="math-block">(a+b)ⁿ = Σᵣ₌₀ⁿ C(n,r)aⁿ⁻ʳbʳ</span>
            <p>The term made by a particular r is:</p>
            <span class="math-block">Tᵣ₊₁ = C(n,r)aⁿ⁻ʳbʳ, &nbsp; r=0,1,…,n</span>
            <p>The index is <span class="math-inline">r+1</span> because r starts at 0. So the first term uses r=0, the second uses r=1, and so on.</p>
          `,
        },
        {
          id: "expansion-pattern",
          title: "2. The pattern to check",
          html: `
            <ul>
              <li>There are exactly <strong>n+1 terms</strong>.</li>
              <li>The power of a falls from n to 0.</li>
              <li>The power of b rises from 0 to n.</li>
              <li>Each term has total degree n when a and b are simple variables.</li>
              <li>For <span class="math-inline">(a−b)ⁿ</span>, put the minus sign inside b; odd r values become negative.</li>
            </ul>
            <p>Example:</p>
            <span class="math-block">(x+y)⁶=x⁶+6x⁵y+15x⁴y²+20x³y³+15x²y⁴+6xy⁵+y⁶</span>
            <p>The coefficients 1,6,15,20,15,6,1 are row 6 of Pascal’s triangle.</p>
          `,
        },
        {
          id: "multinomial",
          title: "3. When there are three terms",
          html: `
            <p>In <span class="math-inline">(a+b+c)ⁿ</span>, choose a copies of the first term, b copies of the second, and c copies of the third, where their counts add to n. To avoid confusing counts with the terms themselves, call the counts i,j,k:</p>
            <span class="math-block">term = [n!/(i!j!k!)]aⁱbʲcᵏ, &nbsp; where i+j+k=n</span>
            <p>To find the coefficient of x² in <span class="math-inline">(2x²+3x+1)⁷</span>, x² can be formed in two ways:</p>
            <ul>
              <li>Choose one <span class="math-inline">2x²</span> and six 1s: <span class="math-inline">7!/(1!0!6!)·2=14</span>.</li>
              <li>Choose two <span class="math-inline">3x</span>s and five 1s: <span class="math-inline">7!/(0!2!5!)·3²=189</span>.</li>
            </ul>
            <p>Total coefficient: <strong>14+189=203</strong>.</p>
          `,
        },
      ],
      memory: [
        { title: "Write a and b first", body: "For (2x−3/x)⁵, write a=2x and b=−3/x before using the formula. Keeping the minus inside b prevents sign errors.", tone: "yellow" },
        { title: "Fast error check", body: "A positive-integer power n must produce n+1 terms before like terms combine. Powers move in opposite directions; coefficients are symmetric.", tone: "coral" },
      ],
      examples: [
        {
          title: "Worked expansion: (2x−y)⁵",
          source: "Adapted from Revision on Binomial Theorem · p.1",
          question: "Expand (2x−y)⁵.",
          steps: [
            "Set a=2x, b=−y, n=5. Pascal coefficients are 1,5,10,10,5,1.",
            "Apply C(5,r)(2x)⁵⁻ʳ(−y)ʳ for r=0,…,5.",
            "The signs alternate because (−y)ʳ is negative for odd r.",
            "Simplify each coefficient and check that every term has total degree 5.",
          ],
          answer: "32x⁵ − 80x⁴y + 80x³y² − 40x²y³ + 10xy⁴ − y⁵.",
        },
      ],
      quiz: [
        { q: "Which formula gives the (r+1)th term of (a+b)ⁿ?", options: ["C(n,r)aʳbⁿ⁻ʳ", "C(n,r)aⁿ⁻ʳbʳ", "n!aⁿbⁿ", "C(r,n)aⁿ⁻ʳbʳ"], answer: 1, explain: "The first term’s power falls while the second term’s power rises: C(n,r)aⁿ⁻ʳbʳ." },
        { q: "How many terms are in (p+q)¹² before any combining?", options: ["11", "12", "13", "24"], answer: 2, explain: "r runs from 0 through 12, giving 13 terms." },
        { q: "What is the coefficient of x² in (1+x)⁵?", options: ["5", "10", "20", "25"], answer: 1, explain: "Choose r=2: C(5,2)=10." },
        { q: "In (a−b)⁶, which terms are negative?", options: ["Terms with even r", "Terms with odd r", "All terms", "No terms"], answer: 1, explain: "The factor (−b)ʳ is negative exactly when r is odd." },
        { q: "What is the x²y³ term in (x+y)⁵?", options: ["5x²y³", "10x²y³", "20x²y³", "10x³y²"], answer: 1, explain: "Use r=3 because y has power 3: C(5,3)x²y³=10x²y³." },
      ],
      videos: [
        { title: "Binomial theorem introduction", channel: "Kimberly Brehm", url: "https://www.youtube.com/watch?v=m8TsPMfcasI" },
        commonVideos.discretePlaylist,
      ],
    },

    {
      id: "special-binomial-terms",
      number: 7,
      navTitle: "Special terms",
      title: "Special terms in binomial expansions",
      symbol: "Tᵣ₊₁",
      minutes: 44,
      summary: "Find a requested term, coefficient, constant term, or middle term without expanding the entire expression.",
      goals: [
        "Turn the power of x into a simple equation for r.",
        "Find constant, specified, and middle terms.",
        "Compare coefficients and combine two expansions.",
      ],
      keywords: "constant term independent coefficient specified x power middle term compare coefficients product expansions r integer",
      sections: [
        {
          id: "power-equation",
          title: "1. The exponent-equation method",
          html: `
            <ol>
              <li>Write <span class="math-inline">Tᵣ₊₁=C(n,r)aⁿ⁻ʳbʳ</span>.</li>
              <li>Simplify only the power of x.</li>
              <li>Set that exponent equal to the requested power.</li>
              <li>Solve for r and check that r is an integer from 0 to n.</li>
              <li>Substitute r into the <em>whole</em> term.</li>
            </ol>
            <p>If r is not an allowed integer, that term does not exist. This is a conclusion—not an algebra failure.</p>
          `,
        },
        {
          id: "constant-coefficient",
          title: "2. Constant terms and coefficients",
          html: `
            <p>A term independent of x is a constant term, so set the total exponent of x to 0.</p>
            <p>For <span class="math-inline">(x²−1/x)⁹</span>:</p>
            <span class="math-block">Tᵣ₊₁=C(9,r)(x²)⁹⁻ʳ(−x⁻¹)ʳ = C(9,r)(−1)ʳx¹⁸⁻³ʳ</span>
            <p>Set <span class="math-inline">18−3r=0</span>, giving r=6. The constant is <span class="math-inline">C(9,6)(−1)⁶=84</span>.</p>
            <p>When asked for a <strong>coefficient</strong>, remove only the variables after finding the correct r; keep every numerical and parameter factor.</p>
          `,
        },
        {
          id: "middle-terms",
          title: "3. Middle-term rules",
          html: `
            <p>An expansion of power n contains n+1 terms.</p>
            <div class="definition-grid">
              <div class="definition-card"><strong>n even</strong><span>n+1 is odd, so there is one middle term: term (n/2)+1. Use r=n/2.</span></div>
              <div class="definition-card"><strong>n odd</strong><span>n+1 is even, so there are two middle terms: terms (n+1)/2 and (n+3)/2.</span></div>
            </div>
            <p>Example: power 7 has 8 terms, so its middle terms are the 4th and 5th (r=3 and r=4).</p>
          `,
        },
        {
          id: "coefficient-comparison",
          title: "4. Comparing and combining coefficients",
          html: `
            <p>To compare two coefficients, build each requested term separately and equate their numerical coefficients.</p>
            <p>For <span class="math-inline">(1+kx)⁶</span>, coefficient of x³ is <span class="math-inline">C(6,3)k³=20k³</span>; coefficient of x² is <span class="math-inline">C(6,2)k²=15k²</span>. If the first is twice the second:</p>
            <span class="math-block">20k³=30k² ⇒ k²(20k−30)=0 ⇒ k=0 or k=3/2</span>
            <p>If the question assumes k is non-zero, the intended answer is <span class="math-inline">k=3/2</span>.</p>
            <p>For a product such as <span class="math-inline">P(x)Q(x)</span>, coefficient of xᵐ comes from every pair of powers whose exponents add to m.</p>
            <p><strong>Parity shortcut:</strong> in <span class="math-inline">(a+b)ⁿ+(a−b)ⁿ</span>, odd powers of b cancel and even powers double. In <span class="math-inline">(a+b)ⁿ−(a−b)ⁿ</span>, even powers cancel and odd powers double.</p>
          `,
        },
      ],
      memory: [
        { title: "Solve powers before numbers", body: "Ignore the huge coefficient at first. Find r from the x-exponent, then substitute once. It saves time and stops needless expansion.", tone: "yellow" },
        { title: "The r check", body: "r must be a whole number with 0≤r≤n. If not, the requested term is absent. Never round r.", tone: "coral" },
      ],
      examples: [
        {
          title: "Past paper: coefficient of x¹²",
          source: "2026 exam · Q2(b) · 4 marks",
          question: "Find the coefficient of x¹² in (3x²−1/x)¹⁸.",
          steps: [
            "General term: Tᵣ₊₁=C(18,r)(3x²)¹⁸⁻ʳ(−x⁻¹)ʳ.",
            "The x exponent is 2(18−r)−r=36−3r. Set 36−3r=12, so r=8.",
            "The sign is positive because (−1)⁸=1. The coefficient is C(18,8)·3¹⁰.",
            "C(18,8)=43,758 and 3¹⁰=59,049.",
          ],
          answer: "Coefficient = 43,758×59,049 = 2,583,866,142.",
        },
        {
          title: "Worked middle terms",
          source: "Class notes · (3−x³/6)⁷",
          question: "Find both middle terms of (3−x³/6)⁷.",
          steps: [
            "Power 7 gives 8 terms, so use the 4th and 5th terms: r=3 and r=4.",
            "T₄=C(7,3)3⁴(−x³/6)³ = −(105/8)x⁹.",
            "T₅=C(7,4)3³(−x³/6)⁴ = (35/48)x¹².",
          ],
          answer: "The middle terms are −105x⁹/8 and 35x¹²/48.",
        },
      ],
      quiz: [
        { q: "For a constant term, what x-exponent should you set?", options: ["1", "n", "0", "r+1"], answer: 2, explain: "A constant is x⁰, so the total exponent must be zero." },
        { q: "If solving the exponent equation gives r=5/2, what should you conclude?", options: ["Round r to 3", "Use r=2.5", "The requested term is absent", "Expand everything"], answer: 2, explain: "In a finite binomial expansion r must be an integer from 0 to n." },
        { q: "Which is the middle term of an expansion with n=10?", options: ["5th", "6th", "10th", "11th"], answer: 1, explain: "There are 11 terms; the one middle term is term 6, with r=5." },
        { q: "To get x⁷ in P(x)Q(x), which coefficient pairs matter?", options: ["Only x⁷ and x⁷", "Pairs whose powers multiply to 7", "Pairs whose exponents add to 7", "Only constant terms"], answer: 2, explain: "When monomials multiply, exponents add." },
        { q: "Which r produces the fifth term of a binomial expansion?", options: ["3", "4", "5", "6"], answer: 1, explain: "Term number is r+1, so r+1=5 gives r=4." },
      ],
      videos: [
        { title: "Binomial theorem and the general term", channel: "Kimberly Brehm", url: "https://www.youtube.com/watch?v=m8TsPMfcasI" },
        commonVideos.discretePlaylist,
      ],
    },

    {
      id: "generalised-binomial",
      number: 8,
      navTitle: "Binomial series",
      title: "Generalised binomial series & approximation",
      symbol: "(1+x)ᵅ",
      minutes: 40,
      summary: "Expand negative or fractional powers, normalise the bracket first, and use a few terms to estimate roots and decimals.",
      goals: [
        "Expand (1+x)ᵅ for non-integer or negative α.",
        "State and check the condition |x|<1.",
        "Choose a nearby perfect power for accurate approximation.",
      ],
      keywords: "generalized generalised binomial series fractional negative power approximation roots small x convergence infinite",
      sections: [
        {
          id: "series-formula",
          title: "1. The generalised formula",
          html: `
            <p>When α is not a non-negative integer, the expansion continues forever:</p>
            <span class="math-block">(1+x)ᵅ = 1 + αx + α(α−1)x²/2! + α(α−1)(α−2)x³/3! + …</span>
            <p>This series converges for <span class="math-inline">|x|&lt;1</span>; the endpoints x=±1 must be checked separately. The coefficient may also be written <span class="math-inline">C(α,r)=α(α−1)…(α−r+1)/r!</span>.</p>
            <p>If α is a non-negative integer, a factor eventually becomes zero and the familiar finite expansion stops.</p>
          `,
        },
        {
          id: "normalise",
          title: "2. Put the bracket into 1+x form",
          html: `
            <p>The series formula expects a leading 1. Factor out the constant first:</p>
            <span class="math-block">(a+x)ᵅ = aᵅ(1+x/a)ᵅ</span>
            <p>Example:</p>
            <span class="math-block">(3−x)⁻¹ = 3⁻¹(1−x/3)⁻¹ = ⅓[1+x/3+x²/9+x³/27+…]</span>
            <p>The convergence condition becomes <span class="math-inline">|x/3|&lt;1</span>, or <span class="math-inline">|x|&lt;3</span>.</p>
          `,
        },
        {
          id: "approximations",
          title: "3. Approximating roots",
          html: `
            <p>Choose a nearby perfect square or cube, then make the correction fraction as small as possible.</p>
            <span class="math-block">√24 = √[25(1−1/25)] = 5(1−1/25)¹ᐟ²</span>
            <p>Use α=½ and x=−1/25. The first five terms give approximately <strong>4.89898</strong>, very close to the calculator value.</p>
            <span class="math-block">∛29 = ∛[27(1+2/27)] = 3(1+2/27)¹ᐟ³ ≈ 3.07232</span>
            <p>More terms usually improve accuracy when |x| is small. If |x| is near 1, convergence is slow; if |x|&gt;1, the series diverges, while x=±1 needs a separate test.</p>
          `,
        },
        {
          id: "classic-series",
          title: "4. Two patterns you should recognise",
          html: `
            <span class="math-block">(1−x)⁻¹ = 1+x+x²+x³+… &nbsp; for |x|&lt;1</span>
            <span class="math-block">(1+x)/(1−x) = 1+2x+2x²+2x³+… ≈ 1+2x for very small x</span>
            <p>The approximation sign means higher powers are being ignored because they are much smaller—not because they equal zero.</p>
          `,
        },
      ],
      memory: [
        { title: "Three checks before expanding", body: "Leading term is 1; the exponent α is copied exactly; and |inside x|<1. Missing any one of these can spoil the whole answer.", tone: "yellow" },
        { title: "Best nearby number", body: "For √24 use 25, not 16. The correction −1/25 is much smaller than 1/2, so the truncated series is more accurate.", tone: "coral" },
      ],
      examples: [
        {
          title: "Worked series: (1−2x)⁻¹",
          source: "Class notes · generalised binomial",
          question: "Expand (1−2x)⁻¹ up to the fifth term and give the interval of validity.",
          steps: [
            "Use α=−1 and u=−2x in (1+u)ᵅ.",
            "The coefficients simplify to 1, −1, 1, −1, 1,… before powers of u are inserted.",
            "Substituting u=−2x makes every term positive: 1+2x+4x²+8x³+16x⁴.",
            "Require |u|=|−2x|<1, so |x|<1/2.",
          ],
          answer: "1+2x+4x²+8x³+16x⁴+… for |x|<½.",
        },
      ],
      quiz: [
        { q: "When α is not a non-negative integer, what kind of expansion usually results?", options: ["Exactly α+1 terms", "An infinite series", "No expansion", "Only two terms"], answer: 1, explain: "The coefficients do not terminate, so the generalised expansion is infinite." },
        { q: "What condition is required for the direct series (1+x)ᵅ?", options: ["x>1", "|x|<1", "α must be even", "x must be an integer"], answer: 1, explain: "The binomial series converges for |x|<1 (with special endpoint cases beyond this course)." },
        { q: "How should (4+x)ᵅ be prepared?", options: ["(1+4x)ᵅ", "4ᵅ(1+x/4)ᵅ", "4(1+x)ᵅ", "xᵅ(1+4/x)"], answer: 1, explain: "Factor 4 from the bracket, then raise that factor to α." },
        { q: "Which setup is best for approximating √15?", options: ["√[16(1−1/16)]", "√[9(1+2/3)]", "√[25(1−2/5)]", "√(1+14)"], answer: 0, explain: "16 is the nearest perfect square and gives the smallest correction magnitude, 1/16." },
        { q: "For which x does the series for (1−x/3)⁻¹ᐟ³ converge directly?", options: ["x<3 only", "|x|<1", "|x|<3", "All real x"], answer: 2, explain: "The inner variable is −x/3, so |−x/3|<1 becomes |x|<3." },
      ],
      videos: [
        { title: "Binomial expansion with fractional powers", channel: "ExamSolutions", url: "https://www.youtube.com/watch?v=S70GNLBJpj0" },
        commonVideos.discretePlaylist,
      ],
    },

    {
      id: "propositional-logic",
      number: 9,
      navTitle: "Logic language",
      title: "Propositions & logical connectives",
      symbol: "p→q",
      minutes: 36,
      summary: "Translate normal sentences into symbols and remember exactly when each logical connective is true or false.",
      goals: [
        "Recognise propositions and assign truth values.",
        "Use ¬, ∧, ∨, ⊕, →, and ↔.",
        "Build truth-table input rows in a reliable order.",
      ],
      keywords: "proposition truth value negation conjunction disjunction xor exclusive implication conditional biconditional truth table",
      sections: [
        {
          id: "propositions",
          title: "1. What counts as a proposition?",
          html: `
            <p>A <strong>proposition</strong> is a declarative statement that is either true or false—not both.</p>
            <div class="definition-grid">
              <div class="definition-card"><strong>“5+2=8”</strong><span>A proposition with truth value F.</span></div>
              <div class="definition-card"><strong>“It is raining today.”</strong><span>A proposition; its truth value depends on today.</span></div>
              <div class="definition-card"><strong>“How are you?”</strong><span>Not a proposition; it is a question.</span></div>
              <div class="definition-card"><strong>“x+2=5”</strong><span>Not yet a proposition until x is fixed or quantified.</span></div>
            </div>
            <p>We use letters such as p, q, and r for propositions, then combine them using logical connectives.</p>
          `,
        },
        {
          id: "connectives",
          title: "2. The six connectives",
          html: `
            <div class="plain-table-wrap"><table class="plain-table">
              <thead><tr><th>Symbol</th><th>Read as</th><th>Truth rule</th></tr></thead>
              <tbody>
                <tr><td>¬p</td><td>not p</td><td>Flips p’s truth value.</td></tr>
                <tr><td>p∧q</td><td>p and q</td><td>True only when both are true.</td></tr>
                <tr><td>p∨q</td><td>p or q</td><td>False only when both are false; this OR includes “both.”</td></tr>
                <tr><td>p⊕q</td><td>p exclusive-or q</td><td>True when exactly one is true.</td></tr>
                <tr><td>p→q</td><td>if p, then q</td><td>False only when p is true and q is false.</td></tr>
                <tr><td>p↔q</td><td>p if and only if q</td><td>True when p and q match.</td></tr>
              </tbody>
            </table></div>
          `,
        },
        {
          id: "conditional",
          title: "3. Why implication has one false row",
          html: `
            <p>In <span class="math-inline">p→q</span>, p is the <strong>hypothesis</strong> and q is the <strong>conclusion</strong>. The statement promises: whenever p happens, q follows.</p>
            <p>The promise is broken only by <span class="math-inline">p=T, q=F</span>. If p never happened, the conditional did not make a false prediction; this is called <strong>vacuous truth</strong>.</p>
            <span class="math-block">p→q has values T, F, T, T for rows TT, TF, FT, FF</span>
            <p>Do not use everyday cause-and-effect intuition in a truth table. Use the rule.</p>
          `,
        },
        {
          id: "truth-rows",
          title: "4. Building truth-table rows",
          html: `
            <p>With n proposition letters there are <span class="math-inline">2ⁿ</span> rows. Use a steady pattern so no row is missing:</p>
            <ul>
              <li>For p: half T, then half F.</li>
              <li>For q: alternate blocks half as long.</li>
              <li>For r: alternate even faster.</li>
            </ul>
            <p>With p,q,r, the rows are TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF. Add one column for each inner bracket before evaluating the full statement.</p>
          `,
        },
      ],
      memory: [
        { title: "The implication alarm", body: "p→q is false only at T→F. Think: a promise was made and then broken. Every other row is true.", tone: "yellow" },
        { title: "OR vs XOR", body: "∨ includes the ‘both true’ case. ⊕ excludes it. In a menu, ‘tea or coffee’ may sound exclusive; in formal logic, ∨ is inclusive unless stated otherwise.", tone: "coral" },
      ],
      examples: [
        {
          title: "Worked translation",
          source: "Built from the class-note weather examples",
          question: "Let p: ‘It rains’ and q: ‘physical classes are cancelled.’ Translate ¬p∨q and decide when it is false.",
          steps: [
            "¬p means ‘it does not rain.’",
            "∨ is inclusive OR, so the sentence is ‘It does not rain, or physical classes are cancelled (or both).’",
            "A disjunction is false only when both parts are false.",
            "¬p is false when p is true; q is false when classes are not cancelled.",
          ],
          answer: "It is false only when it rains and physical classes are not cancelled—the same false row as p→q.",
        },
      ],
      quiz: [
        { q: "Which is not a proposition?", options: ["7 is prime", "Close the door", "Nairobi is in Kenya", "2+2=5"], answer: 1, explain: "A command does not have a truth value. A false declarative sentence is still a proposition." },
        { q: "When is p⊕q true?", options: ["Only when both are true", "When at least one is true", "When exactly one is true", "Only when both are false"], answer: 2, explain: "Exclusive OR means one or the other, but not both." },
        { q: "Which row makes p→q false?", options: ["TT", "TF", "FT", "FF"], answer: 1, explain: "The conditional promise is broken when the hypothesis is true but the conclusion is false." },
        { q: "How many rows are needed for p, q, and r?", options: ["3", "6", "8", "9"], answer: 2, explain: "There are 2³=8 possible truth assignments." },
        { q: "Which is an open sentence rather than a proposition?", options: ["11 is prime", "x+1=4 with x unspecified", "4 is odd", "Nairobi is in Kenya"], answer: 1, explain: "Its truth depends on an unspecified x, so it has no fixed truth value yet." },
      ],
      videos: [
        { title: "Propositions and logical operators", channel: "Kimberly Brehm", url: "https://www.youtube.com/watch?v=A3Ffwsnad0k" },
        commonVideos.discretePlaylist,
      ],
    },

    {
      id: "logic-equivalence",
      number: 10,
      navTitle: "Logic equivalence",
      title: "Conditionals, equivalence & truth-table tests",
      symbol: "≡",
      minutes: 45,
      summary: "Transform a conditional correctly, use De Morgan’s laws, and classify statements as tautologies, contradictions, or contingencies.",
      goals: [
        "Write the converse, inverse, and contrapositive.",
        "Test and use standard logical equivalences.",
        "Classify a compound statement from its final column.",
      ],
      keywords: "logical equivalence converse inverse contrapositive de morgan tautology contradiction fallacy contingency truth table precedence",
      sections: [
        {
          id: "conditional-family",
          title: "1. The conditional family",
          html: `
            <p>Start with <span class="math-inline">p→q</span>. There are three related statements:</p>
            <div class="plain-table-wrap"><table class="plain-table">
              <thead><tr><th>Name</th><th>Form</th><th>What changed?</th></tr></thead>
              <tbody>
                <tr><td>Converse</td><td>q→p</td><td>Swap.</td></tr>
                <tr><td>Inverse</td><td>¬p→¬q</td><td>Negate both.</td></tr>
                <tr><td>Contrapositive</td><td>¬q→¬p</td><td>Swap and negate.</td></tr>
              </tbody>
            </table></div>
            <span class="math-block">Conditional ≡ contrapositive &nbsp;&nbsp; | &nbsp;&nbsp; Converse ≡ inverse</span>
            <p>The original is generally <strong>not</strong> equivalent to its converse or inverse.</p>
          `,
        },
        {
          id: "equivalence-laws",
          title: "2. Equivalences worth knowing",
          html: `
            <div class="plain-table-wrap"><table class="plain-table">
              <tbody>
                <tr><th>Implication</th><td>p→q ≡ ¬p∨q</td></tr>
                <tr><th>Contrapositive</th><td>p→q ≡ ¬q→¬p</td></tr>
                <tr><th>Biconditional</th><td>p↔q ≡ (p→q)∧(q→p)</td></tr>
                <tr><th>Exclusive OR</th><td>p⊕q ≡ ¬(p↔q)</td></tr>
                <tr><th>De Morgan 1</th><td>¬(p∧q) ≡ ¬p∨¬q</td></tr>
                <tr><th>De Morgan 2</th><td>¬(p∨q) ≡ ¬p∧¬q</td></tr>
                <tr><th>Double negation</th><td>¬(¬p) ≡ p</td></tr>
                <tr><th>Identity</th><td>p∧T ≡ p; p∨F ≡ p</td></tr>
                <tr><th>Domination</th><td>p∨T ≡ T; p∧F ≡ F</td></tr>
                <tr><th>Idempotent</th><td>p∨p ≡ p; p∧p ≡ p</td></tr>
                <tr><th>Absorption</th><td>p∨(p∧q) ≡ p; p∧(p∨q) ≡ p</td></tr>
              </tbody>
            </table></div>
            <p>Two expressions are logically equivalent when their final truth-table columns match on <strong>every row</strong>.</p>
          `,
        },
        {
          id: "classify",
          title: "3. Read the final column",
          html: `
            <div class="definition-grid">
              <div class="definition-card"><strong>Tautology</strong><span>True on every row, e.g. p∨¬p.</span></div>
              <div class="definition-card"><strong>Contradiction</strong><span>False on every row, e.g. p∧¬p. Some notes say “fallacy,” but contradiction is the standard term.</span></div>
              <div class="definition-card"><strong>Contingency</strong><span>True on some rows and false on others.</span></div>
              <div class="definition-card"><strong>Equivalent</strong><span>Two columns have exactly the same pattern.</span></div>
            </div>
          `,
        },
        {
          id: "truth-strategy",
          title: "4. A truth-table strategy that scales",
          html: `
            <ol>
              <li>Count distinct proposition letters and create 2ⁿ rows.</li>
              <li>Evaluate the deepest negations and brackets first.</li>
              <li>Create one helper column per operation; do not do the whole expression mentally.</li>
              <li>Evaluate the outermost connective last.</li>
              <li>Read only the final column to classify the statement.</li>
            </ol>
            <p>Usual precedence when brackets are absent: <span class="math-inline">¬</span>, then <span class="math-inline">∧</span>, then <span class="math-inline">∨/⊕</span>, then <span class="math-inline">→</span>, then <span class="math-inline">↔</span>. In an exam, add brackets whenever meaning could be disputed.</p>
          `,
        },
      ],
      memory: [
        { title: "Switch & negate", body: "Contrapositive = switch the two sides and negate both. It is the only transformation guaranteed equivalent to the original conditional.", tone: "yellow" },
        { title: "De Morgan flips the join", body: "Push NOT through brackets, negate each part, and swap AND↔OR. The exact same move appears in set complements.", tone: "coral" },
      ],
      examples: [
        {
          title: "Past paper: which statements are equivalent?",
          source: "2026 exam · Q1(b) · 3 marks",
          question: "For p: ‘It rains’ and q: ‘classes are cancelled,’ is a conditional equivalent to its converse, or is its contrapositive equivalent to its inverse?",
          steps: [
            "Write final columns in TT, TF, FT, FF order. p→q gives T,F,T,T.",
            "Converse q→p gives T,T,F,T, so it does not match the conditional.",
            "Contrapositive ¬q→¬p gives T,F,T,T, so it matches the conditional.",
            "Inverse ¬p→¬q gives T,T,F,T, so it matches the converse—not the contrapositive.",
          ],
          answer: "Both suggested pairings are false. Correct pairs: conditional≡contrapositive; converse≡inverse.",
        },
        {
          title: "Past paper: XOR identity",
          source: "2026 exam · Q1(c) · 3 marks",
          question: "Is p⊕q ≡ ¬(p↔q)?",
          steps: [
            "p⊕q is false, true, true, false on TT, TF, FT, FF.",
            "p↔q is true, false, false, true because it checks whether values match.",
            "Negating that gives false, true, true, false.",
            "The columns match in all four rows.",
          ],
          answer: "Yes. Exclusive OR means exactly that the two truth values do not match.",
        },
      ],
      quiz: [
        { q: "What is the contrapositive of p→q?", options: ["q→p", "¬p→¬q", "¬q→¬p", "p→¬q"], answer: 2, explain: "Swap and negate: ¬q→¬p." },
        { q: "Which is equivalent to ¬(p∨q)?", options: ["¬p∨¬q", "¬p∧¬q", "p∧q", "p→q"], answer: 1, explain: "De Morgan negates each part and flips OR to AND." },
        { q: "A final truth-table column is T,F,T,F. What is it?", options: ["Tautology", "Contradiction", "Contingency", "Not a proposition"], answer: 2, explain: "It is true on some rows and false on others, so it is a contingency." },
        { q: "Which expression is equivalent to p→q?", options: ["p∨q", "¬p∨q", "p∧¬q", "q→p"], answer: 1, explain: "The implication law is p→q ≡ ¬p∨q." },
        { q: "What is ¬(p→q) equivalent to?", options: ["¬p∨q", "p∧¬q", "¬p∧q", "q→p"], answer: 1, explain: "Negate ¬p∨q and apply De Morgan: ¬(¬p∨q)=p∧¬q." },
      ],
      videos: [
        { title: "Truth tables and equivalence", channel: "Kimberly Brehm", url: "https://www.youtube.com/watch?v=tj_98IO-lCk" },
        { title: "Conditionals and contrapositives", channel: "Kimberly Brehm", url: "https://www.youtube.com/watch?v=rAxXcX_w5fE" },
      ],
    },

    {
      id: "induction",
      number: 11,
      navTitle: "Induction",
      title: "Mathematical induction",
      symbol: "P(k)",
      minutes: 46,
      summary: "Prove an infinite sequence of statements with one base case and one carefully written domino step.",
      goals: [
        "Separate the base case, hypothesis, and induction step.",
        "Prove summation identities by induction.",
        "Prove divisibility statements by exposing a known multiple.",
      ],
      keywords: "mathematical induction proof base case hypothesis step k k+1 sums divisibility domino",
      sections: [
        {
          id: "induction-engine",
          title: "1. The domino engine",
          html: `
            <p>Induction proves a statement P(n) for every integer from a starting value n₀ onward.</p>
            <ol>
              <li><strong>Base case:</strong> verify P(n₀) directly.</li>
              <li><strong>Induction hypothesis:</strong> assume P(k) is true for an arbitrary k≥n₀.</li>
              <li><strong>Induction step:</strong> use that assumption to prove P(k+1).</li>
              <li><strong>Conclusion:</strong> therefore P(n) holds for every n≥n₀.</li>
            </ol>
            <p>The hypothesis is a temporary tool. You may not simply assume P(k+1); that is the exact statement you must prove.</p>
          `,
        },
        {
          id: "sum-proofs",
          title: "2. Pattern for summation proofs",
          html: `
            <p>For <span class="math-inline">1+2+…+n=n(n+1)/2</span>:</p>
            <ul>
              <li>Base: n=1 gives 1=1(2)/2.</li>
              <li>Assume <span class="math-inline">1+…+k=k(k+1)/2</span>.</li>
              <li>For k+1, start with the <strong>left side</strong> and split off the new term.</li>
            </ul>
            <span class="math-block">1+…+k+(k+1) = k(k+1)/2 +(k+1) = (k+1)(k+2)/2</span>
            <p>The final expression is the right-hand formula with n replaced by k+1. That completes the step.</p>
          `,
        },
        {
          id: "divisibility-proofs",
          title: "3. Pattern for divisibility proofs",
          html: `
            <p>Translate “divisible by m” into algebra: the expression equals <span class="math-inline">m×(an integer)</span>.</p>
            <p><strong>Claim:</strong> for n≥0, prove <span class="math-inline">8∣(3²ⁿ−1)</span>. Base n=0: <span class="math-inline">3⁰−1=0</span>, which is divisible by 8.</p>
            <p>Assuming <span class="math-inline">3²ᵏ−1</span> is divisible by 8 means you may write <span class="math-inline">3²ᵏ−1=8t</span> for some integer t. Then:</p>
            <span class="math-block">3²⁽ᵏ⁺¹⁾−1 = 9·3²ᵏ−1 = 8·3²ᵏ +(3²ᵏ−1)</span>
            <p>The first part is visibly divisible by 8, and the second is divisible by 8 by the induction hypothesis. Their sum is divisible by 8.</p>
          `,
        },
        {
          id: "induction-pitfalls",
          title: "4. Marks students commonly lose",
          html: `
            <ul>
              <li>Using the wrong starting value. If the claim says n&gt;1, start at n=2.</li>
              <li>Checking n=1,2,3 and calling that a proof. Examples suggest a pattern; they do not prove every case.</li>
              <li>Writing “assume true for all n.” Assume only P(k), then prove P(k+1).</li>
              <li>Changing both sides at once. Start with one side of P(k+1), use P(k), and arrive at the other.</li>
              <li>Forgetting the final sentence that invokes induction.</li>
            </ul>
          `,
        },
      ],
      memory: [
        { title: "BAH → Step → Therefore", body: "Base case. Assume P(k). Handle P(k+1). Then conclude. Write these labels; they help both your brain and the marker.", tone: "yellow" },
        { title: "Expose the old expression", body: "In divisibility proofs, add and subtract strategically until part of P(k+1) is exactly the expression from P(k).", tone: "coral" },
      ],
      examples: [
        {
          title: "Past paper: n³−n is divisible by 6",
          source: "2026 exam · Q1(f) · 3 marks",
          question: "Use induction to prove that n³−n is a multiple of 6 for every integer n>1.",
          steps: [
            "Base n=2: 2³−2=6, which is divisible by 6.",
            "Assume k³−k=6m for some integer m.",
            "For k+1: (k+1)³−(k+1) = k³−k+3k(k+1).",
            "The first part is divisible by 6 by the hypothesis. Also k(k+1) is even, so 3k(k+1) is divisible by 6.",
            "Therefore their sum is divisible by 6, proving P(k+1).",
          ],
          answer: "By mathematical induction, 6 divides n³−n for every integer n>1.",
        },
        {
          title: "Worked sum of odd numbers",
          source: "Class notes · induction example 2",
          question: "Prove 1+3+5+…+(2n−1)=n² for n≥1.",
          steps: [
            "Base n=1: left=1 and right=1²=1.",
            "Assume 1+3+…+(2k−1)=k².",
            "The next odd number is 2(k+1)−1=2k+1.",
            "So the k+1 sum is k²+(2k+1)=(k+1)².",
          ],
          answer: "The base and step hold, so the identity is true for all n≥1.",
        },
      ],
      quiz: [
        { q: "What may you assume in the induction hypothesis?", options: ["P(k) for an arbitrary k", "P(k+1)", "The result for every n", "Only the base case"], answer: 0, explain: "Assume P(k), then use it to prove the next case P(k+1)." },
        { q: "If a claim is stated for n>1, what is the first base value?", options: ["0", "1", "2", "k"], answer: 2, explain: "For integer n>1, the smallest allowed value is 2." },
        { q: "In a sum proof, what is the left side for n=k+1?", options: ["The k-sum only", "The k-sum plus the new (k+1)th term", "The right side at k", "P(k+2)"], answer: 1, explain: "Split the new sum into the familiar k-sum plus exactly one new term." },
        { q: "Why is 3k(k+1) divisible by 6?", options: ["k is always even", "k+1 is always odd", "One of two consecutive integers is even, then multiply by 3", "Every product is divisible by 6"], answer: 2, explain: "k(k+1) contains a factor 2; the outside 3 supplies the other factor of 6." },
        { q: "A student checks P(1), P(2), and P(3), then says the claim is proved. What is missing?", options: ["A calculator", "The step P(k)⇒P(k+1)", "Another three examples", "A truth table"], answer: 1, explain: "Finite checks do not cover infinitely many cases. The induction step is the bridge to every later integer." },
      ],
      videos: [
        { title: "Induction for divisibility", channel: "Kimberly Brehm", url: "https://www.youtube.com/watch?v=OP3l8VUEE-8" },
        { title: "Lecture 2: induction", channel: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/resources/lecture-2-induction/" },
      ],
    },

    {
      id: "function-foundations",
      number: 12,
      navTitle: "Functions",
      title: "Functions, domain & range",
      symbol: "f(x)",
      minutes: 42,
      summary: "Decide whether a mapping is a function, separate domain from codomain and range, and classify one-to-one and many-to-one rules.",
      goals: [
        "Identify the domain, codomain, image, range, and preimage of a mapping.",
        "Test whether a relation is a function and classify valid functions as one-to-one or many-to-one.",
        "Decide whether a function is onto by comparing its range with its codomain.",
        "Find the real domain and range of linear, quadratic, square-root, and reciprocal-square rules.",
      ],
      keywords: "function mapping relation domain codomain range image preimage one to one injective many to one onto surjective linear quadratic square root reciprocal",
      sections: [
        {
          id: "function-rule",
          title: "1. The one-output rule",
          html: `
            <p>A function from a set A to a set B assigns <strong>every</strong> input in A to <strong>exactly one</strong> output in B. We write <span class="math-inline">f:A→B</span>.</p>
            <span class="math-block">each input → exactly one output</span>
            <ul>
              <li>Two different inputs may share one output. That is still a function.</li>
              <li>One input pointing to two outputs is <strong>not</strong> a function.</li>
              <li>A listed input with no output is also <strong>not</strong> a function.</li>
            </ul>
            <p>In ordered pairs, inspect the first coordinate. A repeated first coordinate with different second coordinates breaks the function rule. Repeated second coordinates are allowed.</p>
          `,
        },
        {
          id: "domain-codomain-range",
          title: "2. Domain, codomain, images & range",
          html: `
            <div class="plain-table-wrap"><table class="plain-table">
              <thead><tr><th>Word</th><th>Meaning</th></tr></thead>
              <tbody>
                <tr><td>Domain</td><td>The complete set of allowed inputs.</td></tr>
                <tr><td>Codomain</td><td>The declared destination set containing all permitted outputs.</td></tr>
                <tr><td>Image</td><td>The output f(x) assigned to one input x.</td></tr>
                <tr><td>Range</td><td>The outputs actually produced: <span class="math-inline">{f(x):x is in the domain}</span>.</td></tr>
                <tr><td>Preimage</td><td>The set of all inputs that produce a specified output or set of outputs.</td></tr>
              </tbody>
            </table></div>
            <p>From today's marks example, <span class="math-inline">A→3, B→4, C→1, D→3, E→5</span>. Therefore:</p>
            <span class="math-block">Domain={A,B,C,D,E}<br>Codomain={1,2,3,4,5}<br>Range={1,3,4,5}</span>
            <p>The score 2 belongs to the codomain but not the range because nobody received it. Thus the range is always a subset of the codomain. When range = codomain, the function is called <strong>onto</strong> or <strong>surjective</strong>.</p>
            <p>This tutorial uses the usual course convention that a function assigns every element of its stated domain. Some advanced texts also discuss <em>partial functions</em>, which may be undefined on part of a larger ambient set.</p>
          `,
        },
        {
          id: "one-to-one",
          title: "3. One-to-one versus many-to-one",
          html: `
            <p>A function is <strong>one-to-one</strong> (injective) when different inputs always give different outputs. An exam-safe algebra test is:</p>
            <span class="math-block">f(u)=f(v) ⇒ u=v</span>
            <p>A function is <strong>many-to-one</strong> when at least two different inputs have the same image. In the marks example, A and D both map to 3, so it is many-to-one.</p>
            <div class="definition-grid">
              <div class="definition-card"><strong>One-to-one</strong><span>No output is shared by two different inputs.</span></div>
              <div class="definition-card"><strong>Many-to-one</strong><span>At least two inputs share an output; still a valid function.</span></div>
              <div class="definition-card"><strong>One-to-many</strong><span>One input has several outputs; not a function.</span></div>
            </div>
            <p>For a graph, the vertical-line test checks whether it is a function; the horizontal-line test checks whether a function is one-to-one.</p>
          `,
        },
        {
          id: "formula-domains",
          title: "4. Finding a real domain",
          html: `
            <p>Unless a domain is supplied, start with all real numbers and remove inputs that make the formula invalid.</p>
            <ul>
              <li><strong>Polynomial:</strong> no restriction. For example, <span class="math-inline">x+3</span> and <span class="math-inline">x²</span> have domain ℝ.</li>
              <li><strong>Even root:</strong> require the expression inside the root to be at least zero. For <span class="math-inline">√(2x−6)</span>, require <span class="math-inline">2x−6≥0</span>, so <span class="math-inline">x≥3</span>.</li>
              <li><strong>Denominator:</strong> exclude values that make it zero. For <span class="math-inline">1/(x−2)²</span>, require <span class="math-inline">x≠2</span>.</li>
            </ul>
            <p>A restriction written in the question overrides the natural domain. The same formula can have a different range or one-to-one classification when its domain changes.</p>
          `,
        },
        {
          id: "finding-ranges",
          title: "5. Finding the range without guessing",
          html: `
            <ol>
              <li>Write the domain first, including all endpoints.</li>
              <li>Find any minimum, maximum, forbidden value, or turning point.</li>
              <li>Check whether each boundary is included.</li>
              <li>Write the result as an inequality or interval.</li>
            </ol>
            <p>For <span class="math-inline">g(x)=x²</span> on <span class="math-inline">[−2,3]</span>, the interval crosses 0, so the minimum is <span class="math-inline">g(0)=0</span>. The endpoint with the largest magnitude is 3, giving maximum <span class="math-inline">g(3)=9</span>. Hence the range is <span class="math-inline">[0,9]</span>.</p>
            <p>For <span class="math-inline">h(x)=1/x²</span>, outputs are always positive, can grow without bound near 0, and approach but never equal 0. Its range is <span class="math-inline">(0,∞)</span>.</p>
          `,
        },
        {
          id: "counting-functions",
          title: "6. Counting functions between finite sets",
          html: `
            <p>If a domain has <span class="math-inline">n</span> elements and a codomain has <span class="math-inline">m</span> elements, each input independently chooses one of <span class="math-inline">m</span> images. Therefore:</p>
            <span class="math-block">number of functions A→B = mⁿ</span>
            <p>For a one-to-one function, images cannot repeat. When <span class="math-inline">n≤m</span>, there are <span class="math-inline">m(m−1)···(m−n+1)</span> injective functions. When <span class="math-inline">n>m</span>, there are none: more inputs than available outputs force a repeated image.</p>
          `,
        },
      ],
      memory: [
        { title: "The function test", body: "Every domain element must have exactly one image. Shared outputs are allowed; missing or multiple outputs for one input are not.", tone: "yellow" },
        { title: "Codomain is the target", body: "The range contains outputs actually reached. Therefore range ⊆ codomain, and equality means the function is onto.", tone: "blue" },
        { title: "Domain danger signs", body: "For real functions: keep an even-root radicand ≥0 and a denominator ≠0. Polynomials allow every real input.", tone: "coral" },
      ],
      examples: [
        {
          title: "Class notes: the two restricted ranges",
          source: "Class notes · 26 Aug 2026 · pages 1–2",
          question: "Find the range of f(x)=x+3 for x≥0 and g(x)=x² for −2≤x≤3.",
          steps: [
            "For f, the least allowed input is 0, so the least output is f(0)=3. As x increases without bound, so does f(x).",
            "Therefore the range of f is {y∈ℝ:y≥3}=[3,∞).",
            "For g, the domain contains 0, so the minimum squared value is 0.",
            "Compare the endpoints: g(−2)=4 and g(3)=9. The maximum is 9.",
          ],
          answer: "Range(f)=[3,∞) and Range(g)=[0,9].",
        },
        {
          title: "Class notes: classify three rules",
          source: "Class notes · 26 Aug 2026 · pages 2–3",
          question: "State the natural real domain, range, and type of x+3, √x, and x⁻².",
          steps: [
            "For x+3, every real input and output is possible. Equal outputs give x₁+3=x₂+3, hence x₁=x₂.",
            "For √x, inputs and outputs must be non-negative. The rule increases, so different allowed inputs have different outputs.",
            "For x⁻²=1/x², exclude x=0. Every output is positive, and h(t)=h(−t), so pairs of non-zero opposite inputs share an output.",
          ],
          answer: "x+3: D=ℝ, R=ℝ, one-to-one. √x: D=[0,∞), R=[0,∞), one-to-one. x⁻²: D=ℝ∖{0}, R=(0,∞), many-to-one.",
        },
        {
          title: "Worked method: a shifted reciprocal square",
          source: "Likely exam pattern · researched practice",
          question: "For h(x)=1/(x−2)², find the domain and range and decide whether h is one-to-one.",
          steps: [
            "The denominator is zero at x=2, so D=ℝ∖{2}.",
            "A non-zero square is positive, so its reciprocal is positive. Values approach 0 but never reach it, and grow without bound near x=2.",
            "Thus R=(0,∞).",
            "For any t≠0, h(2+t)=1/t²=h(2−t). Distinct inputs share an output.",
          ],
          answer: "Domain ℝ∖{2}; range (0,∞); many-to-one.",
        },
      ],
      quiz: [
        { q: "Which condition must every function satisfy?", options: ["Every output is used", "Every input has exactly one output", "Every output has exactly one input", "The domain equals the codomain"], answer: 1, explain: "A function assigns each domain element exactly one image. Outputs may be unused or shared." },
        { q: "In the marks mapping, which set is the range?", options: ["{A,B,C,D,E}", "{1,2,3,4,5}", "{1,3,4,5}", "{2}"], answer: 2, explain: "The range contains the scores actually reached. Score 2 is in the codomain but is not an image." },
        { q: "With domain {a,b}, which relation is not a function?", options: ["a→1, b→1", "a→1, b→2", "a→1 and a→2, b→1", "a→2, b→2"], answer: 2, explain: "The single input a has two different outputs, breaking the exactly-one-output rule." },
        { q: "What is the range of f(x)=x+3 on x≥0?", options: ["ℝ", "[0,∞)", "[3,∞)", "(3,∞)"], answer: 2, explain: "The minimum occurs at the included endpoint x=0 and equals 3." },
        { q: "What is the natural real domain of √(x−5)?", options: ["ℝ", "x>5", "x≥5", "x≠5"], answer: 2, explain: "An even-root radicand may be zero, so x−5≥0 and x≥5." },
        { q: "What is the range of 1/x²?", options: ["ℝ", "[0,∞)", "(0,∞)", "ℝ∖{0}"], answer: 2, explain: "Every output is positive, while 0 is approached but never attained." },
        { q: "Why is x² on ℝ many-to-one?", options: ["It has no output at 0", "It has two formulas", "x and −x have the same square", "Its range is all real numbers"], answer: 2, explain: "For example, 2 and −2 are different inputs but both give 4." },
        { q: "If the range equals the codomain, what is the function called?", options: ["Undefined", "Onto", "One-to-many", "Constant"], answer: 1, explain: "Onto, or surjective, means every codomain element is reached." },
      ],
      videos: [commonVideos.discretePlaylist],
    },

    {
      id: "function-composition-inverses",
      number: 13,
      navTitle: "Composition & inverses",
      title: "Function composition & inverse functions",
      symbol: "f∘g",
      minutes: 48,
      summary: "Build functions in the correct order, carry domain restrictions through a composition, and find an inverse only after checking that one can exist.",
      goals: [
        "Evaluate (f∘g)(x) and explain why the function nearest x acts first.",
        "Find the domain and range of a composition instead of merely simplifying its formula.",
        "Decide whether an inverse function exists and restrict a domain when necessary.",
        "Verify an inverse using both compositions and their correct identity domains.",
      ],
      keywords: "function composition composite inverse domain range one to one bijection identity restriction f circle g",
      sections: [
        {
          id: "composition-order",
          title: "1. Composition: work from the inside out",
          html: `
            <p><span class="math-inline">(f∘g)(x)</span> means <span class="math-inline">f(g(x))</span>. The function beside x, which is g, acts first. Its output becomes the input of f.</p>
            <span class="math-block">x → g(x) → f(g(x))</span>
            <p>For <span class="math-inline">f(x)=x²+1</span> and <span class="math-inline">g(x)=3x−2</span>,</p>
            <span class="math-block">(f∘g)(x)=(3x−2)²+1=9x²−12x+5.</span>
            <p>Reversing the order gives <span class="math-inline">(g∘f)(x)=3(x²+1)−2=3x²+1</span>. Composition is therefore usually <strong>not commutative</strong>: <span class="math-inline">f∘g≠g∘f</span>.</p>
          `,
        },
        {
          id: "composition-domain",
          title: "2. A composite has two domain checks",
          html: `
            <p>An input x belongs to the domain of <span class="math-inline">f∘g</span> only when:</p>
            <ol>
              <li>x is allowed by g, and</li>
              <li>the output g(x) is allowed as an input of f.</li>
            </ol>
            <span class="math-block">Dom(f∘g)={x∈Dom(g):g(x)∈Dom(f)}</span>
            <p>Example: let <span class="math-inline">f(t)=√t</span> and <span class="math-inline">g(x)=x−5</span>. Although g accepts every real x, f accepts only non-negative inputs. Therefore <span class="math-inline">x−5≥0</span>, so <span class="math-inline">Dom(f∘g)=[5,∞)</span>.</p>
            <p><strong>Exam habit:</strong> write the domain beside the simplified composite. The formula alone does not carry all the information.</p>
          `,
        },
        {
          id: "inverse-existence",
          title: "3. An inverse function must undo without guessing",
          html: `
            <p>An inverse reverses the original mapping: if <span class="math-inline">f(a)=b</span>, then <span class="math-inline">f⁻¹(b)=a</span>. The superscript −1 does <strong>not</strong> mean reciprocal:</p>
            <span class="math-block">f⁻¹(x) ≠ 1/f(x)</span>
            <p>A global inverse function exists only if each output points back to exactly one input. That means f must be <strong>one-to-one</strong> on its domain. If the codomain of the inverse is also meant to be the full original domain, f should be bijective between its stated domain and range.</p>
            <p>For example, <span class="math-inline">f(x)=x²</span> has no inverse function on ℝ because 2 and −2 both map to 4. Restricting the domain to <span class="math-inline">[0,∞)</span> gives the inverse <span class="math-inline">f⁻¹(x)=√x</span>.</p>
          `,
        },
        {
          id: "find-check-inverse",
          title: "4. Find it, state it, then check it",
          html: `
            <ol>
              <li>Write <span class="math-inline">y=f(x)</span>.</li>
              <li>Solve the equation for x.</li>
              <li>Swap the roles of x and y, or write the solved expression as <span class="math-inline">f⁻¹(x)</span>.</li>
              <li>Swap the original domain and range.</li>
              <li>Check <span class="math-inline">f(f⁻¹(x))=x</span> and <span class="math-inline">f⁻¹(f(x))=x</span> on the stated domains.</li>
            </ol>
            <p>For <span class="math-inline">f(x)=3x−5</span>, solve <span class="math-inline">y=3x−5</span> to obtain <span class="math-inline">x=(y+5)/3</span>. Hence <span class="math-inline">f⁻¹(x)=(x+5)/3</span>.</p>
          `,
        },
        {
          id: "composition-provenance",
          title: "5. Reading the practice labels",
          html: `
            <p><strong>July 2026 paper-derived</strong> means the question comes from the uploaded July paper, but the explanation and working here are newly written. <strong>Original practice</strong> means the question was created for this site to train the same skill.</p>
            <p>The July paper prints the domain of g in Question 1(d) as <span class="math-inline">(6,0)</span>, which is not a valid increasing interval. The working below uses the mathematically consistent intended interval <span class="math-inline">(6,∞)</span> and says so openly.</p>
          `,
        },
      ],
      memory: [
        { title: "Inside → outside", body: "For f∘g, do g first and f second. Read from x outward: x → g(x) → f(g(x)).", tone: "yellow" },
        { title: "DODO domain check", body: "Domain of inner → Output of inner → Domain of outer → Output. The middle two must fit.", tone: "blue" },
        { title: "Inverse = undo", body: "ONE before UNDO: prove the function is one-to-one before trying to build a global inverse.", tone: "coral" },
      ],
      examples: [
        {
          title: "July paper: composition with a corrected interval",
          source: "July 2026 examination · Q1(d) · paper-derived; printed interval repaired explicitly",
          question: "Let f(x)=x²−19 on (−∞,0), and g(x)=1−x/2 on the intended domain (6,∞). Find the ranges, the domain and range of f∘g, then solve (f∘g)(x)=−26+2x within that domain.",
          steps: [
            "For x<0, x² is positive but never 0. Therefore Range(f)=(−19,∞).",
            "For x>6, g(x)=1−x/2 is less than −2 and decreases without bound. Therefore Range(g)=(−∞,−2).",
            "Every g-output is negative, so it lies in Dom(f). Thus Dom(f∘g)=(6,∞).",
            "Compose: (f∘g)(x)=(1−x/2)²−19=x²/4−x−18.",
            "On x>6 this quadratic increases. Its limiting value at 6 is −15, which is excluded, so Range(f∘g)=(−15,∞).",
            "Solve x²/4−x−18=−26+2x. Multiplying by 4 gives x²−12x+32=0=(x−4)(x−8).",
            "The algebra gives x=4 or x=8, but only x=8 lies in (6,∞).",
          ],
          answer: "Range(f)=(−19,∞), Range(g)=(−∞,−2), Dom(f∘g)=(6,∞), Range(f∘g)=(−15,∞), and the valid solution is x=8.",
        },
        {
          title: "Build and verify a restricted inverse",
          source: "Original practice · inverse-function skill",
          question: "Let h(x)=(x−2)²+1 with domain [2,∞). Find h⁻¹ and state its domain and range.",
          steps: [
            "Because x≥2, h increases from its minimum value 1, so it is one-to-one and has range [1,∞).",
            "Write y=(x−2)²+1, so y−1=(x−2)².",
            "Taking square roots gives x−2=±√(y−1). The original restriction x≥2 forces x−2≥0, so choose the positive branch.",
            "Therefore x=2+√(y−1), and h⁻¹(x)=2+√(x−1).",
            "The inverse swaps the sets: Dom(h⁻¹)=[1,∞) and Range(h⁻¹)=[2,∞).",
            "Check: h(h⁻¹(x))=(√(x−1))²+1=x; and for x≥2, h⁻¹(h(x))=2+√((x−2)²)=2+|x−2|=x.",
          ],
          answer: "h⁻¹(x)=2+√(x−1), with domain [1,∞) and range [2,∞). Both compositions return the correct identity.",
        },
      ],
      quiz: [
        { q: "If f(x)=x+4 and g(x)=2x, what is (f∘g)(3)?", options: ["10", "14", "18", "20"], answer: 0, explain: "Do g first: g(3)=6, then f(6)=10." },
        { q: "For f(t)=√t and g(x)=x−7, what is Dom(f∘g)?", options: ["ℝ", "x>7", "x≥7", "x≤7"], answer: 2, explain: "The outer square root requires g(x)=x−7≥0, so x≥7." },
        { q: "Why does x² have no inverse function on all real numbers?", options: ["Its range is positive", "It is not one-to-one", "It has no domain", "It is a polynomial"], answer: 1, explain: "Opposite inputs such as −3 and 3 share the output 9, so an inverse would assign 9 to two outputs." },
        { q: "What is the inverse of f(x)=5x−2?", options: ["5x+2", "(x−2)/5", "(x+2)/5", "1/(5x−2)"], answer: 2, explain: "Solve y=5x−2: x=(y+2)/5." },
        { q: "Which pair verifies that g is the inverse of f?", options: ["f+g=0 and fg=1", "f(g(x))=x and g(f(x))=x", "f(x)=g(x)", "Dom(f)=Dom(g) always"], answer: 1, explain: "Inverse functions undo each other in both orders, on their correctly stated domains." },
      ],
      videos: [
        { title: "Functions, composition and inverses", channel: "Discrete Mathematics: An Open Introduction", url: "https://discrete.openmathbooks.org/dmoi4/sec_structures-functions.html" },
        { title: "Session 7: Functions", channel: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_session7/" },
      ],
    },

    {
      id: "permutations-counting",
      number: 14,
      navTitle: "Counting strategies",
      title: "Permutations, combinations & counting strategy",
      symbol: "nPr",
      minutes: 52,
      summary: "Choose the correct counting engine—add, multiply, arrange, select, block, gap, or complement—and show why it fits.",
      goals: [
        "Use the addition and multiplication principles without double-counting.",
        "Distinguish an ordered arrangement from an unordered selection.",
        "Count repeated objects, blocks, forbidden adjacency, and committee restrictions.",
        "Recognise when complement counting is shorter than direct casework.",
      ],
      keywords: "counting addition product permutation combination arrangements selections repeated letters block gap complement committee pigeonhole",
      sections: [
        {
          id: "counting-principles",
          title: "1. First choose: add or multiply?",
          html: `
            <p>Use the <strong>addition principle</strong> when a result can happen by one of several non-overlapping routes. Use the <strong>multiplication principle</strong> when a result is built through consecutive choices.</p>
            <div class="definition-grid">
              <div class="definition-card"><strong>OR → add</strong><span>Choose one snack from 4 fruits or 3 cakes: 4+3=7.</span></div>
              <div class="definition-card"><strong>AND → multiply</strong><span>Choose 1 shirt and 1 trouser: 5·3=15 outfits.</span></div>
            </div>
            <p>If the “or” cases overlap, separate them or correct the overlap. If later choices depend on earlier choices, update the number of available options at every stage.</p>
          `,
        },
        {
          id: "perm-or-comb",
          title: "2. Does order create a new outcome?",
          html: `
            <p>A <strong>permutation</strong> records order; a <strong>combination</strong> records only membership.</p>
            <span class="math-block">nPᵣ=n!/(n−r)!      nCᵣ=n!/[r!(n−r)!]</span>
            <p>A president, secretary, and treasurer chosen from 10 people is ordered because the roles differ: <span class="math-inline">10P3</span>. An ordinary 3-person committee is unordered: <span class="math-inline">10C3</span>.</p>
            <p>Quick test: if swapping two selected people produces a new result, order matters.</p>
          `,
        },
        {
          id: "repeated-blocks",
          title: "3. Repeated objects and together-blocks",
          html: `
            <p>If n objects include repeated groups of sizes <span class="math-inline">a,b,…</span>, divide out the invisible swaps:</p>
            <span class="math-block">distinct arrangements = n!/(a!b!···)</span>
            <p>When named objects must stay together, tie them into one temporary block. Arrange the block with the remaining objects, then arrange inside the block.</p>
            <p>Example: arrangements of BANANA are <span class="math-inline">6!/(3!2!)=60</span>. If B and N must sit together as a named pair, treat BN or NB as a block, then account for its two internal orders.</p>
          `,
        },
        {
          id: "not-together-restrictions",
          title: "4. For “not together,” complement is often cleaner",
          html: `
            <span class="math-block">wanted = all arrangements − forbidden arrangements</span>
            <p>For six distinct books, total arrangements are <span class="math-inline">6!</span>. If C and D may not be adjacent, subtract the cases where CD is one block: <span class="math-inline">2·5!</span>. So the answer is <span class="math-inline">6!−2·5!</span>.</p>
            <p>For “no two selected people adjacent,” the <strong>gap method</strong> can be better: arrange one group first, identify the gaps around them, then choose gaps for the other group.</p>
          `,
        },
        {
          id: "committee-cases",
          title: "5. Committees: translate every condition",
          html: `
            <p>Write allowed cases before calculating. “At least one from each group” can be handled by valid splits or by subtracting all-one-group selections from all committees.</p>
            <p>A forbidden pair can be removed after the broad condition is counted, provided every removed case was included once. Always ask: <em>am I counting people, roles, or visible arrangements?</em></p>
            <p><strong>Practice labels:</strong> examples marked “July 2026 paper-derived” reproduce the mathematical task in the uploaded paper using newly written solutions. “Original practice” questions were created for extra mastery.</p>
          `,
        },
      ],
      memory: [
        { title: "PAUSE before counting", body: "P: parts or stages? A: add for OR. U: use multiply for AND. S: swap test for order. E: exclude forbidden cases.", tone: "yellow" },
        { title: "Arrange vs choose", body: "LINE-UP = permutation; TEAM-UP = combination. If swapping names changes nothing, divide by r! and use nCr.", tone: "blue" },
        { title: "Together / apart", body: "Together: BLOCK it. Not together: ALL − BLOCK. Repeated objects: divide by each repeat factorial.", tone: "coral" },
      ],
      examples: [
        {
          title: "July paper: committee with a forbidden couple",
          source: "July 2026 examination · Q1(h) · paper-derived",
          question: "Choose a 3-person committee from 4 women and 5 men. It must contain both genders, and one specified married woman and man may not serve together. How many committees are possible?",
          steps: [
            "Start with every 3-person committee from 9 people: C(9,3)=84.",
            "Remove all-women committees: C(4,3)=4.",
            "Remove all-men committees: C(5,3)=10. This leaves 84−4−10=70 committees containing both genders.",
            "Now count committees containing the married pair. Once that pair is chosen, the third member can be any of the other 7 people.",
            "Those 7 committees already contain both genders, so all must be removed exactly once.",
          ],
          answer: "70−7=63 valid committees.",
        },
        {
          title: "July paper: two adjacency conditions",
          source: "July 2026 examination · Q3(b) · paper-derived",
          question: "Arrange six distinct books A,B,C,D,E,F. Find (i) arrangements with A and B together, (ii) arrangements with C and D not together, and (iii) arrangements with A,B together but C,D not together.",
          steps: [
            "(i) Treat A,B as one block. There are 5 objects to arrange and 2 orders inside the block: 2·5!=240.",
            "(ii) There are 6!=720 total arrangements. The forbidden C,D-together cases number 2·5!=240, so 720−240=480.",
            "(iii) Begin with the 240 A,B-together arrangements.",
            "Subtract arrangements where both pairs are together. The blocks AB and CD plus E,F make 4 objects, with 2 orders inside each pair: 4!·2·2=96.",
          ],
          answer: "(i) 240, (ii) 480, and (iii) 240−96=144.",
        },
        {
          title: "Choose positions with no adjacent selections",
          source: "Original practice · gap-method skill",
          question: "In how many ways can 4 of 9 seats in a row be selected so that no two selected seats are adjacent?",
          steps: [
            "Think of the 4 selected seats as S S S S. To keep them apart, place at least one unselected seat in each of the 3 internal gaps.",
            "After reserving those 3 unselected seats, 9−4−3=2 unselected seats remain free.",
            "Distribute those 2 identical extra spaces among the 5 gaps: before the first S, the 3 internal gaps, and after the last S.",
            "Equivalently use the standard gap result C(n−r+1,r)=C(9−4+1,4).",
          ],
          answer: "C(6,4)=15 selections.",
        },
      ],
      quiz: [
        { q: "Which expression counts a president, secretary, and treasurer chosen from 8 people?", options: ["8C3", "8P3", "3⁸", "8!/3!"], answer: 1, explain: "The three roles are different, so assigning the same people to different roles creates a new outcome." },
        { q: "How many distinct arrangements does LEVEL have?", options: ["120", "60", "30", "20"], answer: 2, explain: "There are 5 letters with L repeated twice and E repeated twice: 5!/(2!2!)=30." },
        { q: "For 7 distinct people in a row, how many arrangements keep A and B together?", options: ["2·6!", "7!−2!", "6!", "2·5!"], answer: 0, explain: "The AB block plus five others make 6 objects, and AB can be ordered in 2 ways." },
        { q: "What is the cleanest first move for ‘C and D are not adjacent’ among distinct objects?", options: ["Divide by 2", "Count all minus C,D together", "Use a power set", "Use nCr only"], answer: 1, explain: "The complement of not-adjacent is the easy block case where the pair is together." },
        { q: "A 4-person committee is chosen from 10 people. Why is 10C4 used?", options: ["The order of committee members is irrelevant", "There are four jobs", "People may repeat", "Ten is smaller than four"], answer: 0, explain: "A committee is just a selected set unless named roles are assigned." },
      ],
      videos: [
        { title: "Combinations and permutations", channel: "Discrete Mathematics: An Open Introduction", url: "https://discrete.openmathbooks.org/dmoi4/sec_counting-combperm.html" },
        commonVideos.mit,
      ],
    },

    {
      id: "relations-equivalence",
      number: 15,
      navTitle: "Relations",
      title: "Relations & equivalence classes",
      symbol: "aRb",
      minutes: 46,
      summary: "Treat a relation as a set of ordered pairs, test its properties without guessing, and understand how an equivalence relation partitions a set.",
      goals: [
        "Write and read a relation as a subset of a Cartesian product.",
        "Test reflexive, symmetric, antisymmetric, and transitive properties from definitions.",
        "Prove that a divisibility relation is an equivalence relation.",
        "Find equivalence classes and connect them to partitions.",
      ],
      keywords: "relation ordered pairs cartesian product reflexive symmetric antisymmetric transitive equivalence class partition modulo",
      sections: [
        {
          id: "relation-as-pairs",
          title: "1. A relation records which pairs are connected",
          html: `
            <p>A relation R from A to B is any subset of <span class="math-inline">A×B</span>. Writing <span class="math-inline">aRb</span> means exactly that <span class="math-inline">(a,b)∈R</span>.</p>
            <p>If A={1,2,3}, then <span class="math-inline">R={(1,1),(1,2),(2,3)}</span> is a relation on A. A relation need not give every input one output, so it is more general than a function.</p>
            <p>You can display a finite relation as ordered pairs, a zero-one matrix, or a directed graph. These are different pictures of the same information.</p>
          `,
        },
        {
          id: "relation-properties",
          title: "2. Four properties—four exact tests",
          html: `
            <div class="plain-table-wrap"><table class="plain-table">
              <thead><tr><th>Property</th><th>Definition on A</th><th>Plain-language check</th></tr></thead>
              <tbody>
                <tr><td>Reflexive</td><td>For every a, aRa.</td><td>Every vertex has its self-loop.</td></tr>
                <tr><td>Symmetric</td><td>aRb ⇒ bRa.</td><td>Every arrow has a reverse arrow.</td></tr>
                <tr><td>Antisymmetric</td><td>aRb and bRa ⇒ a=b.</td><td>Two-way arrows between distinct points are forbidden.</td></tr>
                <tr><td>Transitive</td><td>aRb and bRc ⇒ aRc.</td><td>Every two-step path has the shortcut edge.</td></tr>
              </tbody>
            </table></div>
            <p><strong>Symmetric and antisymmetric are not opposites.</strong> Equality is both: reversing an equality is valid, and two-way equality forces the same object.</p>
          `,
        },
        {
          id: "disprove-properties",
          title: "3. Prove universally; disprove with one witness",
          html: `
            <p>To prove a property, start with arbitrary elements and use the relation's definition. To show a property fails, one clear counterexample is enough.</p>
            <ul>
              <li>Not reflexive: find an a for which (a,a) is missing.</li>
              <li>Not symmetric: find aRb but not bRa.</li>
              <li>Not transitive: find aRb and bRc but not aRc.</li>
            </ul>
            <p>A finite checklist is useful, but in a relation on infinitely many integers you need an algebraic proof, not a few tested values.</p>
          `,
        },
        {
          id: "equivalence-classes",
          title: "4. Equivalence relations make clean groups",
          html: `
            <p>An <strong>equivalence relation</strong> is reflexive, symmetric, and transitive. The equivalence class of a is</p>
            <span class="math-block">[a]={x∈A:xRa}.</span>
            <p>Equivalence classes never partly overlap: two classes are either identical or disjoint. Together they cover A, so they form a <strong>partition</strong>.</p>
            <p>For congruence modulo 3, every integer belongs to exactly one class according to its remainder: <span class="math-inline">[0],[1],[2]</span>.</p>
          `,
        },
        {
          id: "relation-exam-proof",
          title: "5. Exam proof template",
          html: `
            <ol>
              <li>Name the set and restate what aRb means.</li>
              <li><strong>Reflexive:</strong> substitute b=a.</li>
              <li><strong>Symmetric:</strong> assume aRb and reverse the defining equation or divisibility.</li>
              <li><strong>Transitive:</strong> assume aRb and bRc, then combine them to reach aRc.</li>
              <li>Only then conclude that R is an equivalence relation.</li>
            </ol>
            <p><strong>Practice labels:</strong> “July 2026 paper-derived” identifies a transformed question from the uploaded paper; “Original practice” identifies a newly made training question.</p>
          `,
        },
      ],
      memory: [
        { title: "RST = same-kind test", body: "An equivalence relation needs R-S-T: Reflexive, Symmetric, Transitive. Antisymmetric is not part of this trio.", tone: "yellow" },
        { title: "Loops, reverses, shortcuts", body: "Reflexive = every loop. Symmetric = reverse every arrow. Transitive = complete every two-step shortcut.", tone: "blue" },
        { title: "Class rule", body: "SAME or SEPARATE: equivalence classes are identical or disjoint—never partly overlapping.", tone: "coral" },
      ],
      examples: [
        {
          title: "July paper: divisibility by 3",
          source: "July 2026 examination · Q3(d) · paper-derived",
          question: "On ℤ define mRn when 3 divides m−n. Prove that R is an equivalence relation and describe its classes.",
          steps: [
            "Reflexive: m−m=0=3·0, so 3 divides m−m and mRm.",
            "Symmetric: if 3 divides m−n, then m−n=3k. Hence n−m=−3k=3(−k), so nRm.",
            "Transitive: if m−n=3k and n−p=3ℓ, then m−p=(m−n)+(n−p)=3(k+ℓ), so mRp.",
            "R is reflexive, symmetric, and transitive, hence an equivalence relation.",
            "Two integers are related exactly when they have the same remainder after division by 3.",
          ],
          answer: "The classes are [0]={…,−6,−3,0,3,6,…}, [1]={…,−5,−2,1,4,7,…}, and [2]={…,−4,−1,2,5,8,…}.",
        },
        {
          title: "Classify a finite relation carefully",
          source: "Original practice · property-testing skill",
          question: "On A={1,2,3}, let R={(1,1),(2,2),(3,3),(1,2),(2,1)}. Determine its four standard properties and its equivalence classes.",
          steps: [
            "All three diagonal pairs are present, so R is reflexive.",
            "The only off-diagonal pair (1,2) has its reverse (2,1), so R is symmetric.",
            "R is not antisymmetric because 1R2 and 2R1 while 1≠2.",
            "For transitivity, 1 and 2 connect only within {1,2}, and every needed pair inside that block is present. The element 3 connects only to itself. Therefore R is transitive.",
            "Reflexive + symmetric + transitive makes R an equivalence relation.",
          ],
          answer: "R is reflexive, symmetric and transitive, but not antisymmetric. Its distinct classes are {1,2} and {3}.",
        },
      ],
      quiz: [
        { q: "A relation from A to B is a subset of which set?", options: ["A∪B", "A∩B", "A×B", "P(A) only"], answer: 2, explain: "A relation is a chosen collection of ordered pairs from the Cartesian product A×B." },
        { q: "Which condition describes symmetry?", options: ["aRa for every a", "aRb implies bRa", "aRb and bRa imply a=b", "aRb and bRc imply aRc"], answer: 1, explain: "Symmetry requires each related pair to remain related when its order is reversed." },
        { q: "What single fact disproves transitivity?", options: ["One missing self-loop", "aRb and bRc but not aRc", "aRb and bRa", "Two disjoint classes"], answer: 1, explain: "A two-step path without the required shortcut is a counterexample to transitivity." },
        { q: "Which properties define an equivalence relation?", options: ["Reflexive, antisymmetric, transitive", "Symmetric and antisymmetric", "Reflexive, symmetric, transitive", "Only transitive"], answer: 2, explain: "Equivalence means RST: reflexive, symmetric and transitive." },
        { q: "For congruence modulo 4, how many distinct equivalence classes of integers are there?", options: ["2", "3", "4", "Infinitely many"], answer: 2, explain: "The possible remainders are 0,1,2,3, giving four classes." },
      ],
      videos: [
        { title: "Relations and equivalence classes", channel: "Discrete Mathematics: An Open Introduction", url: "https://discrete.openmathbooks.org/dmoi4/sec_gt-relations.html" },
        commonVideos.mit,
      ],
    },

    {
      id: "recurrence-relations",
      number: 16,
      navTitle: "Recurrences",
      title: "Recurrence relations",
      symbol: "aₙ",
      minutes: 54,
      summary: "Generate terms from initial values, solve linear homogeneous recurrences with characteristic roots, and handle repeated roots without losing powers of n.",
      goals: [
        "Identify the order of a recurrence and use enough initial values.",
        "Generate requested terms by substituting indices carefully.",
        "Build and solve the characteristic equation for constant-coefficient homogeneous recurrences.",
        "Write the correct general form for distinct and repeated characteristic roots.",
      ],
      keywords: "recurrence recursive sequence initial conditions order characteristic equation roots repeated roots homogeneous solution",
      sections: [
        {
          id: "recurrence-language",
          title: "1. A recurrence defines today from earlier days",
          html: `
            <p>A recurrence relation defines a term using earlier terms. Initial values start the process.</p>
            <p>For <span class="math-inline">aₙ=3aₙ₋₁−2aₙ₋₂</span>, the furthest look-back is two places, so this is a second-order recurrence and normally needs two initial values.</p>
            <p>Index first, substitute second. To find <span class="math-inline">a₃</span>, write the recurrence with n=3 before inserting numbers; this prevents mixing up <span class="math-inline">a₂,a₁,a₀</span>.</p>
          `,
        },
        {
          id: "characteristic-equation",
          title: "2. Turn shifts into powers",
          html: `
            <p>For a linear homogeneous recurrence with constant coefficients, try <span class="math-inline">aₙ=rⁿ</span>. Divide by the smallest power of r to obtain a polynomial called the characteristic equation.</p>
            <p>For <span class="math-inline">aₙ=5aₙ₋₁−6aₙ₋₂</span>:</p>
            <span class="math-block">r²=5r−6 ⇒ r²−5r+6=0 ⇒ (r−2)(r−3)=0.</span>
            <p>Distinct roots 2 and 3 give <span class="math-inline">aₙ=A·2ⁿ+B·3ⁿ</span>. Use the initial conditions to find A and B.</p>
          `,
        },
        {
          id: "repeated-roots",
          title: "3. Repeated roots need powers of n",
          html: `
            <p>If a root r occurs m times, attach a polynomial in n of degree m−1:</p>
            <span class="math-block">(C₀+C₁n+···+Cₘ₋₁nᵐ⁻¹)rⁿ</span>
            <div class="plain-table-wrap"><table class="plain-table"><thead><tr><th>Multiplicity</th><th>Contribution</th></tr></thead><tbody><tr><td>1</td><td>C₀rⁿ</td></tr><tr><td>2</td><td>(C₀+C₁n)rⁿ</td></tr><tr><td>3</td><td>(C₀+C₁n+C₂n²)rⁿ</td></tr><tr><td>4</td><td>(C₀+C₁n+C₂n²+C₃n³)rⁿ</td></tr></tbody></table></div>
            <p>Each separate root gets its own constants. Do not merge coefficients belonging to different roots.</p>
          `,
        },
        {
          id: "solve-constants",
          title: "4. Initial conditions pin down the constants",
          html: `
            <ol>
              <li>Move every recurrence term to one side.</li>
              <li>Write and factor the characteristic polynomial.</li>
              <li>Write the general form, respecting multiplicities.</li>
              <li>Substitute n=0,1,2,… using all given initial values.</li>
              <li>Solve the resulting simultaneous equations.</li>
              <li>Check at least one later term in the original recurrence.</li>
            </ol>
            <p>A formula can satisfy the initial values yet still be wrong if the characteristic form was copied incorrectly, so the final recurrence check matters.</p>
          `,
        },
        {
          id: "recurrence-provenance",
          title: "5. Paper tasks and fresh drills",
          html: `
            <p>The July 2026 paper tests direct term generation, a full repeated-root solution, and the form created by listed repeated roots. Those items below are marked <strong>July 2026 paper-derived</strong>.</p>
            <p>Questions marked <strong>Original practice</strong> are newly written variations. They are not presented as past-paper questions, but they use the same characteristic-root method.</p>
          `,
        },
      ],
      memory: [
        { title: "ORDER = initials needed", body: "Look at the furthest step back. A third-order recurrence normally needs a₀, a₁ and a₂.", tone: "yellow" },
        { title: "ROOT recipe", body: "Rearrange → r-polynomial → roots → write form → use initial values → test.", tone: "blue" },
        { title: "Repeat? Raise n", body: "A root repeated m times gets 1,n,…,nᵐ⁻¹ in front. Triple root r: (A+Bn+Cn²)rⁿ.", tone: "coral" },
      ],
      examples: [
        {
          title: "July paper: solve a triple-root recurrence",
          source: "July 2026 examination · Q1(g)(i) · paper-derived",
          question: "Solve aₙ=−aₙ₋₃−3aₙ₋₂−3aₙ₋₁ with a₀=1, a₁=−2, a₂=−1.",
          steps: [
            "Move all terms to one side: aₙ+3aₙ₋₁+3aₙ₋₂+aₙ₋₃=0.",
            "The characteristic equation is r³+3r²+3r+1=0=(r+1)³, so r=−1 has multiplicity 3.",
            "Write aₙ=(A+Bn+Cn²)(−1)ⁿ.",
            "At n=0: A=1.",
            "At n=1: −(A+B+C)=−2, so B+C=1.",
            "At n=2: A+2B+4C=−1, so B+2C=−1 after using A=1.",
            "Subtracting the equations gives C=−2, then B=3.",
          ],
          answer: "aₙ=(1+3n−2n²)(−1)ⁿ. Substitution reproduces a₀=1, a₁=−2, and a₂=−1.",
        },
        {
          title: "Solve a recurrence with two distinct roots",
          source: "Original practice · characteristic-root skill",
          question: "Solve uₙ=5uₙ₋₁−6uₙ₋₂ for n≥2, given u₀=2 and u₁=5.",
          steps: [
            "The characteristic equation is r²−5r+6=0=(r−2)(r−3).",
            "The distinct roots are 2 and 3, so uₙ=A·2ⁿ+B·3ⁿ.",
            "At n=0: A+B=2.",
            "At n=1: 2A+3B=5.",
            "Subtract twice the first equation from the second: B=1. Hence A=1.",
            "Check n=2: the formula gives 4+9=13, while the recurrence gives 5·5−6·2=13.",
          ],
          answer: "uₙ=2ⁿ+3ⁿ.",
        },
      ],
      quiz: [
        { q: "What is the order of aₙ=2aₙ₋₁+aₙ₋₄?", options: ["1", "2", "3", "4"], answer: 3, explain: "The furthest referenced term is four steps back, aₙ₋₄, so the order is 4." },
        { q: "What is the characteristic equation of aₙ=4aₙ₋₁−4aₙ₋₂?", options: ["r²+4r−4=0", "r²−4r+4=0", "r−4=0", "r²−4=0"], answer: 1, explain: "Substitute rⁿ and move all terms left: r²−4r+4=0." },
        { q: "A characteristic root r=3 has multiplicity 2. Which term belongs in the general solution?", options: ["A·3ⁿ", "(A+Bn)3ⁿ", "A·n³", "A·3ⁿ+B·2ⁿ"], answer: 1, explain: "A double root requires the factors 1 and n: (A+Bn)3ⁿ." },
        { q: "Roots are 2,2 and −1. What is the correct general form?", options: ["A2ⁿ+B(−1)ⁿ", "(A+Bn)2ⁿ+C(−1)ⁿ", "A2²ⁿ+C", "(A+Bn+Cn²)2ⁿ"], answer: 1, explain: "The double root 2 contributes (A+Bn)2ⁿ; the single root −1 contributes C(−1)ⁿ." },
        { q: "Why should a closed formula be checked in the original recurrence?", options: ["To choose the order", "To catch algebra or root-form errors", "To create new initial values", "Because initial values never matter"], answer: 1, explain: "A quick substitution checks both the recurrence structure and the constants." },
      ],
      videos: [
        { title: "Recursive sequences and characteristic patterns", channel: "Discrete Mathematics: An Open Introduction", url: "https://discrete.openmathbooks.org/dmoi4/sec_seq-exponential.html" },
        commonVideos.mit,
      ],
    },
  ];

  const examBank = [
    {
      id: "exam-sets-01",
      topic: "Sets",
      difficulty: "Easy",
      source: "July 2026 exam · Q1(a)(i)",
      marks: 2,
      question: "Two sets satisfy |A|=3 and |B|=6. Find (i) the minimum possible value of |A∪B| and (ii) the maximum possible value of |A∩B|.",
      hint: "Make the smaller set sit completely inside the larger set.",
      solution: "<p>The greatest possible overlap happens when <span class='math-inline'>A⊆B</span>. Then the union is just B and the intersection is A.</p><p><strong>Answer:</strong> minimum <span class='math-inline'>|A∪B|=6</span>; maximum <span class='math-inline'>|A∩B|=3</span>.</p>",
    },
    {
      id: "exam-sets-02",
      topic: "Sets",
      difficulty: "Medium",
      source: "July 2026 exam · Q1(a)(ii)",
      marks: 3,
      question: "A school awarded 36 dance medals, 12 drama medals, and 18 music medals to 45 people. Four people received medals in all three categories. How many people received medals in exactly two categories?",
      hint: "Let e₁ be exactly one and e₂ exactly two. Count people once, then count medal-category memberships.",
      solution: "<p>Counting people: <span class='math-inline'>e₁+e₂+4=45</span>. Counting memberships: <span class='math-inline'>e₁+2e₂+3(4)=36+12+18=66</span>.</p><p>Subtracting the first equation from the second gives <span class='math-inline'>e₂+8=21</span>, hence <strong>e₂=13</strong>.</p>",
    },
    {
      id: "exam-sets-03",
      topic: "Sets",
      difficulty: "Hard",
      source: "July 2026 exam · Q2(a)",
      marks: 4,
      question: "Of 60 investors, 20 own shares (S), 35 own CDs (C), and 34 own bonds (B). Also |S∩C|=13, |C∩B|=23, |B∩S|=13, and 10 own none. Find the number owning all three and the number owning CDs only.",
      hint: "First use the three-set inclusion–exclusion formula. The union is 60−10.",
      solution: "<p><span class='math-block'>50=20+35+34−13−23−13+x</span></p><p>Thus <span class='math-inline'>x=10</span>. For CDs only, subtract the two C pair-only regions and the triple: <span class='math-inline'>35−(13−10)−(23−10)−10=9</span>.</p><p><strong>Answer:</strong> all three = 10; CDs only = 9.</p>",
    },
    {
      id: "exam-sets-04",
      topic: "Sets",
      difficulty: "Medium",
      source: "July 2026 exam · Q2(d)",
      marks: 2,
      question: "Describe the regions to shade for (i) (A∩B)∩C′ and (ii) (A∩B)′∪C.",
      hint: "C′ means outside C. For (ii), use De Morgan: (A∩B)′=A′∪B′.",
      solution: "<p>(i) Shade the A-and-B overlap that lies <strong>outside C</strong>; do not shade the triple intersection.</p><p>(ii) Shade every region except the part that is in both A and B but outside C. Equivalently, shade <span class='math-inline'>A′∪B′∪C</span>.</p>",
    },
    {
      id: "exam-sets-05",
      topic: "Sets",
      difficulty: "Easy",
      source: "July 2026 exam · Q4(a)",
      marks: 3,
      question: "Let U={40,41,…,49}. Let A be the prime numbers in U and B the odd numbers in U. List A and B, then state their relationship.",
      hint: "Check divisibility before calling a number prime. Every even number above 2 is not prime.",
      solution: "<p><span class='math-inline'>A={41,43,47}</span> and <span class='math-inline'>B={41,43,45,47,49}</span>.</p><p>Every member of A is in B, but B has extra members. Therefore <span class='math-inline'>A⊂B</span>.</p>",
    },
    {
      id: "exam-sets-06",
      topic: "Sets",
      difficulty: "Hard",
      source: "July 2026 exam · Q4(b), selected",
      marks: 5,
      question: "Of 145 people surveyed about orange (O), apple (A), and grape (G) juice, 15 chose none. Also |O|=75, |A|=80, |G|=55, |O∩A|=35, |O∩G|=20, and |A∩G|=30. Find (i) all three, (ii) exactly two juices, and (iii) the number who did not choose orange.",
      hint: "The union is 145−15. Use inclusion–exclusion to find the centre before turning each pair total into a pair-only region.",
      solution: "<p>The union is <span class='math-inline'>145−15=130</span>. Let the all-three value be t. Inclusion–exclusion gives <span class='math-inline'>130=75+80+55−35−20−30+t</span>, so <strong>t=5</strong>.</p><p>Exactly two = <span class='math-inline'>(35−5)+(20−5)+(30−5)=70</span>.</p><p>Not orange = <span class='math-inline'>145−75=70</span>.</p>",
    },
    {
      id: "exam-sets-07",
      topic: "Sets",
      difficulty: "Medium",
      source: "Madaraka Day revision · Q10",
      marks: 4,
      question: "In a fruit survey, 15 bought mangoes, 15 bought oranges, and 20 bought bananas. Eight bought at least two kinds, including 2 who bought all three. How many bought at least one kind?",
      hint: "Exactly two is 8−2=6. Total memberships count an exactly-two buyer twice and a triple buyer three times.",
      solution: "<p>Exactly two = 6. Let e₁ be exactly one. Then <span class='math-inline'>50=e₁+2(6)+3(2)</span>, so <span class='math-inline'>e₁=32</span>.</p><p>The union is <span class='math-inline'>32+6+2=40</span>. Shortcut: total memberships − exactly-two − 2(triple) = <span class='math-inline'>50−6−4=40</span>.</p>",
    },
    {
      id: "exam-sets-08",
      topic: "Sets",
      difficulty: "Medium",
      source: "Madaraka Day revision · Q11–12",
      marks: 4,
      question: "A supplied Venn diagram has disjoint regions: football only 20, football–hockey 30, cricket only 15, hockey only 25, and football–cricket 5, with a total of 100 students. Find basketball only and the total in football.",
      hint: "Treat the numbers shown in the diagram as separate regions, then subtract their sum from 100.",
      solution: "<p>Basketball only = <span class='math-inline'>100−(20+30+15+25+5)=5</span>.</p><p>Football total = <span class='math-inline'>20+30+5=55</span>.</p><p><strong>Answer:</strong> basketball only = 5; football total = 55.</p>",
    },
    {
      id: "exam-logic-01",
      topic: "Logic",
      difficulty: "Easy",
      source: "July 2026 exam · Q1(b)",
      marks: 3,
      question: "Which pairs are always logically equivalent: conditional and converse, conditional and contrapositive, converse and inverse, or inverse and contrapositive?",
      hint: "Write p→q as ¬p∨q.",
      solution: "<p><span class='math-inline'>p→q ≡ ¬q→¬p</span>, so a conditional equals its contrapositive. Also <span class='math-inline'>q→p ≡ ¬p→¬q</span>, so the converse equals the inverse.</p><p>The original is generally not equivalent to its converse or inverse.</p>",
    },
    {
      id: "exam-logic-02",
      topic: "Logic",
      difficulty: "Medium",
      source: "July 2026 exam · Q1(c)",
      marks: 3,
      question: "Show that exclusive OR, p⊕q, is equivalent to the negation of the biconditional, ¬(p↔q).",
      hint: "Compare when each expression is true: same values or different values?",
      solution: "<p><span class='math-inline'>p⊕q</span> is true exactly when p and q have different truth values. <span class='math-inline'>p↔q</span> is true exactly when they match, so its negation is true exactly when they differ.</p><p>Therefore <span class='math-inline'>p⊕q≡¬(p↔q)</span>.</p>",
    },
    {
      id: "exam-logic-03",
      topic: "Logic",
      difficulty: "Hard",
      source: "July 2026 exam · Q3(a)",
      marks: 5,
      question: "Classify [(p∧q)→r] → [(q∧¬r)→¬p] as a tautology, contradiction, or contingency.",
      hint: "Rewrite both implications using a→b ≡ ¬a∨b.",
      solution: "<p>The first bracket is <span class='math-inline'>¬p∨¬q∨r</span>. The second is <span class='math-inline'>¬q∨r∨¬p</span>—the same expression in a different order.</p><p>The whole statement is therefore <span class='math-inline'>A→A</span>, which is always true. It is a <strong>tautology</strong>.</p>",
    },
    {
      id: "exam-logic-04",
      topic: "Logic",
      difficulty: "Easy",
      source: "July 2026 exam · Q3(c)",
      marks: 3,
      question: "For ‘If there is snow on the ground, then flowers are not in bloom,’ write the converse, inverse, and contrapositive.",
      hint: "Let p = there is snow on the ground and q = flowers are not in bloom.",
      solution: "<p>Converse <span class='math-inline'>q→p</span>: If flowers are not in bloom, then there is snow on the ground.</p><p>Inverse <span class='math-inline'>¬p→¬q</span>: If there is no snow on the ground, then flowers are in bloom.</p><p>Contrapositive <span class='math-inline'>¬q→¬p</span>: If flowers are in bloom, then there is no snow on the ground.</p>",
    },
    {
      id: "exam-logic-05",
      topic: "Logic",
      difficulty: "Easy",
      source: "July 2026 exam · Q3(e)",
      marks: 2,
      question: "Is the statement ‘Every real number is rational’ true or false? Justify your answer in one line.",
      hint: "One counterexample is enough to disprove a universal claim.",
      solution: "<p><strong>False.</strong> For example, <span class='math-inline'>√2</span> is real but irrational. A universal statement fails as soon as one counterexample exists.</p>",
    },
    {
      id: "exam-logic-06",
      topic: "Logic",
      difficulty: "Medium",
      source: "July 2026 exam · Q5(d), adapted",
      marks: 4,
      question: "Let f = ‘the fish is cooked,’ r = ‘dinner is ready,’ and h = ‘I am hungry.’ Translate (i) f→(r∧h) and (ii) (f→r)∧h. Are they equivalent?",
      hint: "In (ii), h must be true on its own. Test f=F and h=F.",
      solution: "<p>(i) If the fish is cooked, then dinner is ready and I am hungry.</p><p>(ii) If the fish is cooked then dinner is ready, and I am hungry.</p><p>They are not equivalent. When <span class='math-inline'>f=F,h=F</span>, (i) is true because its implication has a false antecedent, while (ii) is false because it is joined with h.</p>",
    },
    {
      id: "exam-binomial-01",
      topic: "Binomial",
      difficulty: "Medium",
      source: "July 2026 exam · Q1(e)",
      marks: 3,
      question: "The constant term in (√x + k/x²)¹⁰ is 405. Find k.",
      hint: "In Tᵣ₊₁, the x exponent is (10−r)/2−2r. Set it to zero first.",
      solution: "<p><span class='math-inline'>(10−r)/2−2r=0</span> gives <span class='math-inline'>r=2</span>. The constant coefficient is <span class='math-inline'>C(10,2)k²=45k²</span>.</p><p><span class='math-inline'>45k²=405</span>, so <strong>k=±3</strong>. If the question silently assumes k&gt;0, report k=3.</p>",
    },
    {
      id: "exam-binomial-02",
      topic: "Binomial",
      difficulty: "Hard",
      source: "July 2026 exam · Q2(b)",
      marks: 4,
      question: "Find the coefficient of x¹² in (3x²−1/x)¹⁸.",
      hint: "The x exponent in Tᵣ₊₁ is 2(18−r)−r = 36−3r.",
      solution: "<p>Set <span class='math-inline'>36−3r=12</span>, giving <span class='math-inline'>r=8</span>.</p><p>Coefficient = <span class='math-inline'>C(18,8)3¹⁰(−1)⁸ = 2,583,866,142</span>.</p>",
    },
    {
      id: "exam-binomial-03",
      topic: "Binomial",
      difficulty: "Medium",
      source: "July 2026 exam · Q5(e)",
      marks: 4,
      question: "Find the middle term of [2x/3−3/(2x²)]²ⁿ.",
      hint: "A power of 2n has 2n+1 terms, so use the (n+1)th term: r=n.",
      solution: "<p>The single middle term is <span class='math-inline'>Tₙ₊₁</span>. Therefore</p><p><span class='math-block'>Tₙ₊₁=C(2n,n)(2x/3)ⁿ[−3/(2x²)]ⁿ = (−1)ⁿC(2n,n)/xⁿ.</span></p>",
    },
    {
      id: "exam-binomial-04",
      topic: "Binomial",
      difficulty: "Medium",
      source: "Madaraka Day revision · Q1",
      marks: 3,
      question: "In (1+kx)⁶, the coefficient of x³ is twice the coefficient of x². Find every real k.",
      hint: "Do not divide by k² until you have separately checked k=0.",
      solution: "<p><span class='math-inline'>C(6,3)k³=2C(6,2)k²</span>, so <span class='math-inline'>20k³=30k²</span>.</p><p><span class='math-inline'>10k²(2k−3)=0</span>, hence <strong>k=0 or k=3/2</strong>. The sheet prints only 3/2, but k=0 also satisfies the stated equation unless nonzero k was intended.</p>",
    },
    {
      id: "exam-binomial-05",
      topic: "Binomial",
      difficulty: "Medium",
      source: "Madaraka Day revision · Q3",
      marks: 3,
      question: "Find the coefficient of x in (1+2x)⁷(3+2x)⁴.",
      hint: "To make x¹, take x from exactly one factor and a constant from the other.",
      solution: "<p>Take the x-term from the first factor and the constant from the second: <span class='math-inline'>14×81=1134</span>.</p><p>Or take the constant from the first factor and the x-term from the second: <span class='math-inline'>1×[C(4,1)3³·2]=216</span>.</p><p><strong>Coefficient:</strong> <span class='math-inline'>1134+216=1350</span>.</p>",
    },
    {
      id: "exam-binomial-06",
      topic: "Binomial",
      difficulty: "Medium",
      source: "Madaraka Day revision · Q6",
      marks: 3,
      question: "Find the coefficient of x² in (1+3x+2x²)⁷.",
      hint: "There are two routes: choose one 2x², or choose two 3x terms.",
      solution: "<p>One 2x² choice: <span class='math-inline'>C(7,1)·2=14</span>.</p><p>Two 3x choices: <span class='math-inline'>C(7,2)·3²=189</span>.</p><p><strong>Coefficient:</strong> <span class='math-inline'>14+189=203</span>.</p>",
    },
    {
      id: "exam-binomial-07",
      topic: "Binomial",
      difficulty: "Medium",
      source: "Revision on Binomial Theorem · Q5(i)",
      marks: 3,
      question: "Find the fifth term of (2x²−3/x)¹⁰.",
      hint: "Fifth term means r+1=5, so r=4—not r=5.",
      solution: "<p><span class='math-inline'>T₅=C(10,4)(2x²)⁶(−3/x)⁴</span>.</p><p><span class='math-inline'>=210·64·81·x⁸=1,088,640x⁸</span>.</p>",
    },
    {
      id: "exam-binomial-08",
      topic: "Binomial",
      difficulty: "Hard",
      source: "Revision on Binomial Theorem · Q9(i) and Q10(i)",
      marks: 4,
      question: "Find the term independent of x in (i) (x²−1/x)⁹ and (ii) (2x²−1/x)¹².",
      hint: "For (ax²+b/x)ⁿ, the exponent is 2n−3r. Set it to zero.",
      solution: "<p>(i) <span class='math-inline'>18−3r=0⇒r=6</span>; constant = <span class='math-inline'>C(9,6)(−1)⁶=84</span>.</p><p>(ii) <span class='math-inline'>24−3r=0⇒r=8</span>; constant = <span class='math-inline'>C(12,8)2⁴(−1)⁸=495·16=7920</span>.</p>",
    },
    {
      id: "exam-induction-01",
      topic: "Induction",
      difficulty: "Medium",
      source: "July 2026 exam · Q1(f)",
      marks: 3,
      question: "Prove by induction that n³−n is divisible by 6 for every integer n>1.",
      hint: "After expanding (k+1)³−(k+1), create k³−k and use that k(k+1) is even.",
      solution: "<p>Base n=2: <span class='math-inline'>8−2=6</span>.</p><p>Assume <span class='math-inline'>6∣(k³−k)</span>. Then</p><p><span class='math-block'>(k+1)³−(k+1)=(k³−k)+3k(k+1).</span></p><p>The first part is divisible by 6 by the hypothesis. Consecutive integers make k(k+1) even, so 3k(k+1) is also divisible by 6. Hence the result follows.</p>",
    },
    {
      id: "exam-induction-02",
      topic: "Induction",
      difficulty: "Medium",
      source: "July 2026 exam · Q2(e)",
      marks: 4,
      question: "Prove by induction that Σᵏ₌₁ⁿ k(k+1)=n(n+1)(n+2)/3 for n≥1.",
      hint: "For k+1, add the new term (k+1)(k+2) to the assumed k-sum.",
      solution: "<p>Base n=1: <span class='math-inline'>1·2=1·2·3/3=2</span>.</p><p>Assume the formula at n=k. Then</p><p><span class='math-block'>Sₖ₊₁ = k(k+1)(k+2)/3 +(k+1)(k+2)<br>= (k+1)(k+2)(k+3)/3.</span></p><p>This is the required formula with k replaced by k+1.</p>",
    },
    {
      id: "exam-induction-03",
      topic: "Induction",
      difficulty: "Hard",
      source: "July 2026 exam · Q5(c)",
      marks: 4,
      question: "Prove by induction that 15ⁿ−8ⁿ⁻² is divisible by 7 for every integer n>1.",
      hint: "Compare the next expression with 15 times the induction hypothesis.",
      solution: "<p>Base n=2: <span class='math-inline'>15²−8⁰=224=7·32</span>.</p><p>Assume <span class='math-inline'>7∣(15ᵏ−8ᵏ⁻²)</span>. Then</p><p><span class='math-block'>15ᵏ⁺¹−8ᵏ⁻¹ = 15(15ᵏ−8ᵏ⁻²)+7·8ᵏ⁻².</span></p><p>Both terms on the right are divisible by 7, so the k+1 case holds.</p>",
    },
    {
      id: "exam-functions-01",
      topic: "Functions",
      difficulty: "Easy",
      source: "Likely exam practice · mapping fundamentals",
      marks: 3,
      question: "Let f:{a,b,c,d}→{1,2,3,4,5} be given by a→2, b→4, c→2, and d→5. State the domain, codomain, and range, then classify f as one-to-one or many-to-one.",
      hint: "The codomain is the declared target set; the range contains only values that an arrow reaches.",
      solution: "<p>Domain = <span class='math-inline'>{a,b,c,d}</span>; codomain = <span class='math-inline'>{1,2,3,4,5}</span>; range = <span class='math-inline'>{2,4,5}</span>.</p><p>Since the distinct inputs a and c both map to 2, f is <strong>many-to-one</strong>.</p>",
    },
    {
      id: "exam-functions-02",
      topic: "Functions",
      difficulty: "Easy",
      source: "Likely exam practice · OpenStax relation-test pattern",
      marks: 2,
      question: "Is R={(1,2),(2,3),(1,4),(3,5)} a function from {1,2,3} to {2,3,4,5}? Give a reason.",
      hint: "Inspect repeated first coordinates, not repeated second coordinates.",
      solution: "<p><strong>No.</strong> Input 1 is paired with both 2 and 4. A function must give each input exactly one output.</p>",
    },
    {
      id: "exam-functions-03",
      topic: "Functions",
      difficulty: "Easy",
      source: "Class-note example · 26 Aug 2026",
      marks: 4,
      question: "Students A,B,C,D,E receive scores A→3, B→4, C→1, D→3, E→5 from the codomain {1,2,3,4,5}. Find the range, name the unused codomain value, and classify the function.",
      hint: "List each reached score once and look for two students sharing a score.",
      solution: "<p>The reached values are <span class='math-inline'>{1,3,4,5}</span>, so this is the range. The unused codomain value is <strong>2</strong>.</p><p>A and D both map to 3, so the function is <strong>many-to-one</strong>.</p>",
    },
    {
      id: "exam-functions-04",
      topic: "Functions",
      difficulty: "Easy",
      source: "Class-note example · 26 Aug 2026",
      marks: 3,
      question: "For f(x)=x+3 with domain {x∈ℝ:x≥0}, state the range and decide whether f is one-to-one.",
      hint: "Start with the included endpoint x=0 and note that the rule increases.",
      solution: "<p>The minimum output is <span class='math-inline'>f(0)=3</span>, and outputs then increase without bound. Thus the range is <span class='math-inline'>[3,∞)</span>.</p><p>If <span class='math-inline'>f(u)=f(v)</span>, then <span class='math-inline'>u+3=v+3⇒u=v</span>, so f is <strong>one-to-one</strong>.</p>",
    },
    {
      id: "exam-functions-05",
      topic: "Functions",
      difficulty: "Medium",
      source: "Class-note example · 26 Aug 2026",
      marks: 4,
      question: "For g(x)=x² on the restricted domain −2≤x≤3, find the range and classify g as one-to-one or many-to-one.",
      hint: "The interval contains the turning point 0. Compare both endpoints for the maximum.",
      solution: "<p>The minimum is <span class='math-inline'>g(0)=0</span>. At the endpoints, <span class='math-inline'>g(−2)=4</span> and <span class='math-inline'>g(3)=9</span>, so the maximum is 9. Hence the range is <span class='math-inline'>[0,9]</span>.</p><p>Because <span class='math-inline'>g(−1)=g(1)=1</span>, g is <strong>many-to-one</strong> on this domain.</p>",
    },
    {
      id: "exam-functions-06",
      topic: "Functions",
      difficulty: "Medium",
      source: "Likely exam practice · OpenStax domain/range pattern",
      marks: 4,
      question: "Find the natural real domain and range of f(x)=√(2x−6), and determine whether f is one-to-one.",
      hint: "Require the expression under the square root to be at least zero.",
      solution: "<p><span class='math-inline'>2x−6≥0⇒x≥3</span>, so the domain is <span class='math-inline'>[3,∞)</span>.</p><p>A principal square root is non-negative; it begins at 0 and has no upper bound, so the range is <span class='math-inline'>[0,∞)</span>. The function increases throughout its domain, so it is <strong>one-to-one</strong>.</p>",
    },
    {
      id: "exam-functions-07",
      topic: "Functions",
      difficulty: "Medium",
      source: "Likely exam practice · domain/range extension",
      marks: 4,
      question: "For h(x)=1/(x−2)², state the natural real domain and range, then classify h as one-to-one or many-to-one.",
      hint: "Exclude the zero denominator; compare inputs equally far from 2.",
      solution: "<p>The denominator vanishes at x=2, so the domain is <span class='math-inline'>ℝ∖{2}</span>. The denominator is otherwise positive, so outputs are positive; they can be arbitrarily small or large but never 0. Thus the range is <span class='math-inline'>(0,∞)</span>.</p><p>For t≠0, <span class='math-inline'>h(2+t)=h(2−t)</span>. Therefore h is <strong>many-to-one</strong>.</p>",
    },
    {
      id: "exam-functions-08",
      topic: "Functions",
      difficulty: "Medium",
      source: "Likely exam practice · completing-the-square pattern",
      marks: 4,
      question: "For q(x)=x²−4x+7 on ℝ, find the range and decide whether q is one-to-one.",
      hint: "Complete the square to expose the minimum value.",
      solution: "<p><span class='math-inline'>q(x)=(x−2)²+3</span>. Since a square is at least 0, the minimum output is 3 at x=2. Hence the range is <span class='math-inline'>[3,∞)</span>.</p><p>Also <span class='math-inline'>q(1)=q(3)=4</span>, so q is <strong>many-to-one</strong> on ℝ.</p>",
    },
    {
      id: "exam-functions-09",
      topic: "Functions",
      difficulty: "Medium",
      source: "Likely exam practice · DMOI image/preimage pattern",
      marks: 4,
      question: "Let A={−3,−1,0,2,3} and f:A→ℤ be defined by f(x)=x². Find f(A), find f⁻¹({9}), and classify f as one-to-one or many-to-one.",
      hint: "Evaluate the rule on every element of the finite domain; list repeated outputs only once in the range.",
      solution: "<p>The outputs are 9,1,0,4,9, so <span class='math-inline'>f(A)={0,1,4,9}</span>.</p><p>The inputs producing 9 are −3 and 3, so the preimage of 9 is <span class='math-inline'>{−3,3}</span>. Since these distinct inputs share an image, f is <strong>many-to-one</strong>.</p>",
    },
    {
      id: "exam-functions-10",
      topic: "Functions",
      difficulty: "Medium",
      source: "Likely exam practice · one-to-one restriction",
      marks: 3,
      question: "The rule f(x)=x² is not one-to-one on ℝ. Give a maximal standard interval on which it is one-to-one, and state the range on that interval.",
      hint: "Keep only one side of the turning point x=0.",
      solution: "<p>Either restriction <span class='math-inline'>[0,∞)</span> or <span class='math-inline'>(−∞,0]</span> works. On either interval, x² changes in only one direction and no output is repeated.</p><p>The range is <span class='math-inline'>[0,∞)</span>.</p>",
    },
    {
      id: "exam-functions-11",
      topic: "Functions",
      difficulty: "Medium",
      source: "Likely exam practice · parameter classification",
      marks: 4,
      question: "For fₐ:ℝ→ℝ defined by fₐ(x)=ax+5, determine all real a for which fₐ is one-to-one. Also state the range when a=0 and when a≠0.",
      hint: "A zero slope makes every input share one output.",
      solution: "<p>If <span class='math-inline'>a=0</span>, then <span class='math-inline'>fₐ(x)=5</span> for every x, so the range is <span class='math-inline'>{5}</span> and the function is not one-to-one.</p><p>If <span class='math-inline'>a≠0</span>, then <span class='math-inline'>au+5=av+5⇒u=v</span>, and every real output y is obtained from <span class='math-inline'>x=(y−5)/a</span>. Thus fₐ is one-to-one exactly when <strong>a≠0</strong>, and its range is then ℝ.</p>",
    },
    {
      id: "exam-functions-12",
      topic: "Functions",
      difficulty: "Medium",
      source: "Likely exam practice · proof of injectivity",
      marks: 4,
      question: "Prove algebraically that f:ℝ→ℝ, f(x)=3x−7, is one-to-one, then find f⁻¹({11}).",
      hint: "Begin by assuming f(u)=f(v).",
      solution: "<p>Suppose <span class='math-inline'>f(u)=f(v)</span>. Then <span class='math-inline'>3u−7=3v−7</span>, hence <span class='math-inline'>3u=3v</span> and <span class='math-inline'>u=v</span>. Therefore f is one-to-one.</p><p>For the preimage, solve <span class='math-inline'>3x−7=11</span>, giving <span class='math-inline'>x=6</span>. Thus <strong>f⁻¹({11})={6}</strong>.</p>",
    },
    {
      id: "exam-functions-13",
      topic: "Functions",
      difficulty: "Hard",
      source: "Likely exam practice · DMOI finite-counting pattern",
      marks: 4,
      question: "If |A|=3 and |B|=2, how many functions A→B exist, and how many of them are one-to-one?",
      hint: "Each element of A independently chooses one image in B; then compare the set sizes for injectivity.",
      solution: "<p>Each of the 3 inputs has 2 choices, so the number of functions is <span class='math-inline'>2³=8</span>.</p><p>No function can be one-to-one because 3 distinct inputs cannot occupy only 2 outputs without a repetition. Thus <strong>0</strong> are one-to-one.</p>",
    },
    {
      id: "exam-functions-14",
      topic: "Functions",
      difficulty: "Hard",
      source: "Likely exam practice · DMOI finite-counting pattern",
      marks: 5,
      question: "If |A|=3 and |B|=5, find (i) the total number of functions A→B and (ii) the number that are one-to-one.",
      hint: "For a one-to-one function, the second and third inputs cannot reuse earlier outputs.",
      solution: "<p>(i) Every input has 5 independent choices, giving <span class='math-inline'>5³=125</span> functions.</p><p>(ii) An injective function has 5 choices for the first image, then 4, then 3: <span class='math-inline'>5·4·3=60</span>.</p><p><strong>Answer:</strong> 125 total; 60 one-to-one.</p>",
    },
    {
      id: "exam-functions-15",
      topic: "Functions",
      difficulty: "Medium",
      source: "Likely exam practice · DMOI range/preimage pattern",
      marks: 5,
      question: "Let f:{−2,−1,0,1,2}→{0,1,4} be defined by f(x)=x². Is f onto? Is it one-to-one? Find the preimage of {1,4}.",
      hint: "Compare the set of actual outputs with the codomain, then collect every input whose output is 1 or 4.",
      solution: "<p>The range is <span class='math-inline'>{0,1,4}</span>, equal to the codomain, so f is <strong>onto</strong>.</p><p>It is not one-to-one because <span class='math-inline'>f(−1)=f(1)</span> and <span class='math-inline'>f(−2)=f(2)</span>.</p><p>The preimage of <span class='math-inline'>{1,4}</span> is <span class='math-inline'>{−2,−1,1,2}</span>.</p>",
    },
    {
      id: "exam-2024-cat-01",
      topic: "Sets",
      difficulty: "Easy",
      source: "June 2024 ICS CAT · Q1",
      sourceUrl: "resources/DOC-20260507-WA0009.pdf#page=1",
      marks: 3,
      question: "Given |A∪B|=49, |A|=27, and |B|=29, find |A∩B|.",
      hint: "Rearrange the two-set inclusion–exclusion formula.",
      solution: "<p>Use <span class='math-inline'>|A∪B|=|A|+|B|−|A∩B|</span>.</p><p><span class='math-block'>49=27+29−|A∩B|</span></p><p>Therefore <span class='math-inline'>|A∩B|=56−49=<strong>7</strong></span>.</p>",
    },
    {
      id: "exam-2024-cat-02",
      topic: "Sets",
      difficulty: "Easy",
      source: "June 2024 ICS CAT · Q2",
      sourceUrl: "resources/DOC-20260507-WA0009.pdf#page=1",
      marks: 2,
      question: "In a town of 351 adults, everyone owns a car, a motorcycle, or both. If 331 own cars and 45 own motorcycles, how many car owners do not own a motorcycle?",
      hint: "Find the overlap first, then subtract it from the number of car owners.",
      solution: "<p>Because everyone is in the union, <span class='math-inline'>351=331+45−|C∩M|</span>, so <span class='math-inline'>|C∩M|=25</span>.</p><p>Car owners without a motorcycle = <span class='math-inline'>331−25=<strong>306</strong></span>.</p>",
    },
    {
      id: "exam-2024-cat-03",
      topic: "Venn",
      difficulty: "Medium",
      source: "June 2024 ICS CAT · Q3 · assumption made explicit",
      sourceUrl: "resources/DOC-20260507-WA0009.pdf#page=1",
      marks: 4,
      question: "Among 41 children, all play at least one of soccer (S), basketball (B), or tennis (T). Given |S|=24, |B|=16, |T|=10, |S∩T|=2|S∩B|, and B∩T=∅, find |S∩T| and |S∩B|.",
      hint: "Let |S∩B|=x. Since B∩T is empty, the triple intersection is also empty.",
      solution: "<p>Let <span class='math-inline'>|S∩B|=x</span>; then <span class='math-inline'>|S∩T|=2x</span>. Also <span class='math-inline'>B∩T=∅</span>, so there is no triple overlap.</p><p><span class='math-block'>41=24+16+10−x−2x=50−3x</span></p><p>Thus <span class='math-inline'>3x=9</span> and <span class='math-inline'>x=3</span>. Therefore <strong>|S∩T|=6</strong> and <strong>|S∩B|=3</strong>.</p><p><em>Source note:</em> the paper omits the all-play-at-least-one assumption; without it, the answer is not unique.</p>",
    },
    {
      id: "exam-2024-cat-04",
      topic: "Binomial",
      difficulty: "Hard",
      source: "June 2024 ICS CAT · Q4",
      sourceUrl: "resources/DOC-20260507-WA0009.pdf#page=1",
      marks: 4,
      question: "Find the term independent of x, if one exists, in (√x/√3 + √x/(2x²))¹⁰.",
      hint: "Write the general term and set its total exponent of x equal to zero.",
      solution: "<p>Selecting the second term r times gives</p><p><span class='math-block'>Tᵣ₊₁=C(10,r)(x¹ᐟ²/√3)¹⁰⁻ʳ(x¹ᐟ²/(2x²))ʳ<br>=C(10,r)/(3⁽¹⁰⁻ʳ⁾ᐟ²2ʳ) · x⁵⁻²ʳ.</span></p><p>A constant requires <span class='math-inline'>5−2r=0</span>, so <span class='math-inline'>r=5/2</span>. Since r must be an integer from 0 to 10, <strong>there is no term independent of x</strong>.</p>",
    },
    {
      id: "exam-2024-cat-05",
      topic: "Binomial",
      difficulty: "Medium",
      source: "June 2024 ICS CAT · Q5",
      sourceUrl: "resources/DOC-20260507-WA0009.pdf#page=1",
      marks: 4,
      question: "Determine the coefficient of x¹⁰ in (x²−2/x)¹⁸, if that term exists.",
      hint: "In the general term, combine the exponent from (x²)¹⁸⁻ʳ with the exponent from (1/x)ʳ.",
      solution: "<p><span class='math-block'>Tᵣ₊₁=C(18,r)(x²)¹⁸⁻ʳ(−2/x)ʳ<br>=C(18,r)(−2)ʳx³⁶⁻³ʳ.</span></p><p>For an <span class='math-inline'>x¹⁰</span> term, <span class='math-inline'>36−3r=10</span>, which gives <span class='math-inline'>r=26/3</span>. This is not an allowed integer index, so the term is absent and its <strong>coefficient is 0</strong>.</p>",
    },
    {
      id: "exam-2024-cat-06",
      topic: "Binomial",
      difficulty: "Hard",
      source: "June 2024 ICS CAT · Q6",
      sourceUrl: "resources/DOC-20260507-WA0009.pdf#page=2",
      marks: 4,
      question: "For an integer n≥8, the non-zero coefficients of x⁷ and x⁸ are equal in (2+x/3)ⁿ. Find n.",
      hint: "Write both coefficients, divide one equation by the other, and use C(n,8)/C(n,7)=(n−7)/8.",
      solution: "<p>The two coefficients are <span class='math-inline'>C(n,7)2ⁿ⁻⁷/3⁷</span> and <span class='math-inline'>C(n,8)2ⁿ⁻⁸/3⁸</span>. Their ratio is</p><p><span class='math-block'>coefficient of x⁸ / coefficient of x⁷<br>=[C(n,8)/C(n,7)]·(1/2)·(1/3)<br>=(n−7)/48.</span></p><p>Equality makes the ratio 1, so <span class='math-inline'>n−7=48</span> and <strong>n=55</strong>.</p>",
    },
    {
      id: "exam-2024-cat-07",
      topic: "Logic",
      difficulty: "Easy",
      source: "June 2024 ICS CAT · Q7",
      sourceUrl: "resources/DOC-20260507-WA0009.pdf#page=2",
      marks: 9,
      question: "Let p mean “There is a full moon tonight” and q mean “I will go for a walk on the beach.” Write the conditional, converse, inverse, and contrapositive in symbols and words, then state which are equivalent.",
      hint: "Start with p→q; swap p and q for the converse, negate both for the inverse, and swap-and-negate for the contrapositive.",
      solution: "<p><strong>Conditional, p→q:</strong> If there is a full moon tonight, then I will go for a walk on the beach.</p><p><strong>Converse, q→p:</strong> If I go for a walk on the beach, then there is a full moon tonight.</p><p><strong>Inverse, ¬p→¬q:</strong> If there is no full moon tonight, then I will not go for a walk on the beach.</p><p><strong>Contrapositive, ¬q→¬p:</strong> If I do not go for a walk on the beach, then there is no full moon tonight.</p><p>The <strong>conditional and contrapositive</strong> are equivalent; the <strong>converse and inverse</strong> are equivalent.</p>",
    },
    {
      id: "exam-2024-cat-08",
      topic: "Logic",
      difficulty: "Easy",
      source: "June 2024 ICS CAT · Q8",
      sourceUrl: "resources/DOC-20260507-WA0009.pdf#page=2",
      marks: 3,
      question: "Given p=true, q=false, r=true, and s=true, find the truth value of ¬(p∨q)→(r∧¬s).",
      hint: "Evaluate the two sides of the implication separately; remember that an implication with a false antecedent is true.",
      solution: "<p><span class='math-inline'>p∨q=T∨F=T</span>, so <span class='math-inline'>¬(p∨q)=F</span>. Also <span class='math-inline'>r∧¬s=T∧F=F</span>.</p><p>The statement is therefore <span class='math-inline'>F→F</span>, which is <strong>true</strong>.</p>",
    },
    {
      id: "exam-2024-cat-09",
      topic: "Logic",
      difficulty: "Medium",
      source: "June 2024 ICS CAT · Q9",
      sourceUrl: "resources/DOC-20260507-WA0009.pdf#page=2",
      marks: 5,
      question: "Construct a truth table for (p→q)↔¬(q∧r), and classify the statement.",
      hint: "Build the implication and negated conjunction columns before comparing them with the biconditional.",
      solution: "<div class='plain-table-wrap'><table class='plain-table'><thead><tr><th>p</th><th>q</th><th>r</th><th>p→q</th><th>¬(q∧r)</th><th>↔</th></tr></thead><tbody><tr><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td></tr><tr><td>T</td><td>T</td><td>F</td><td>T</td><td>T</td><td>T</td></tr><tr><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td></tr><tr><td>T</td><td>F</td><td>F</td><td>F</td><td>T</td><td>F</td></tr><tr><td>F</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td></tr><tr><td>F</td><td>T</td><td>F</td><td>T</td><td>T</td><td>T</td></tr><tr><td>F</td><td>F</td><td>T</td><td>T</td><td>T</td><td>T</td></tr><tr><td>F</td><td>F</td><td>F</td><td>T</td><td>T</td><td>T</td></tr></tbody></table></div><p>The final column contains both T and F, so the statement is a <strong>contingency</strong>.</p>",
    },
    {
      id: "exam-2024-cat-10",
      topic: "Induction",
      difficulty: "Medium",
      source: "June 2024 ICS CAT · Q10",
      sourceUrl: "resources/DOC-20260507-WA0009.pdf#page=2",
      marks: 4,
      question: "Prove by induction that 2²ⁿ−1 is divisible by 3 for every positive integer n.",
      hint: "In the induction step, write 2²⁽ᵏ⁺¹⁾−1 as 4·2²ᵏ−1, then create the induction-hypothesis expression.",
      solution: "<p><strong>Base n=1:</strong> <span class='math-inline'>2²−1=3</span>, divisible by 3.</p><p><strong>Assume</strong> <span class='math-inline'>2²ᵏ−1=3m</span> for some integer m. Then</p><p><span class='math-block'>2²⁽ᵏ⁺¹⁾−1=4·2²ᵏ−1<br>=4(2²ᵏ−1)+3<br>=12m+3=3(4m+1).</span></p><p>The k+1 expression is divisible by 3, so the claim follows by induction.</p>",
    },
    {
      id: "exam-2024-cat-11",
      topic: "Functions",
      difficulty: "Hard",
      source: "June 2024 ICS CAT · Q11",
      sourceUrl: "resources/DOC-20260507-WA0009.pdf#page=2",
      scope: "Next topic",
      sourceWarning: "The paper omits a domain restriction, so no global inverse exists as printed.",
      marks: 6,
      question: "Given f(x)=x+1/x, find f∘f and f⁻¹, then prove that the inverse is correct.",
      hint: "Before finding an inverse, test whether f is one-to-one on its natural real domain. Then repair the question with a suitable restricted domain.",
      solution: "<p>On the natural real domain <span class='math-inline'>ℝ∖{0}</span>,</p><p><span class='math-block'>(f∘f)(x)=x+1/x+x/(x²+1)<br>=(x⁴+3x²+1)/[x(x²+1)].</span></p><p>However, <span class='math-inline'>f(x)=f(1/x)</span>; for example, <span class='math-inline'>f(2)=f(1/2)=5/2</span>. Therefore f is not one-to-one and <strong>has no global inverse function as printed</strong>.</p><p>A valid repair is <span class='math-inline'>f:[1,∞)→[2,∞)</span>. Solving <span class='math-inline'>y=x+1/x</span> gives <span class='math-inline'>x=(y±√(y²−4))/2</span>; the restricted domain selects</p><p><span class='math-block'>f⁻¹(y)=[y+√(y²−4)]/2,   y≥2.</span></p><p>Let <span class='math-inline'>g(y)=f⁻¹(y)</span>. Since <span class='math-inline'>g²−yg+1=0</span>, dividing by g gives <span class='math-inline'>g+1/g=y</span>, so <span class='math-inline'>f(g(y))=y</span>. For x≥1, <span class='math-inline'>√[(x+1/x)²−4]=x−1/x</span>, hence <span class='math-inline'>g(f(x))=x</span>. Both compositions are identities on their stated domains.</p>",
    },
    {
      id: "exam-2026-v1-01",
      topic: "Venn",
      difficulty: "Medium",
      source: "June 2026 CAT One · Version 1 · Q1",
      sourceUrl: "resources/VERSION%20ONE%20SOLUTIONS.pdf#page=1",
      marks: 3,
      question: "Using the linked source diagram—triangle T for tennis, rectangle H for hockey, and oval C for chess—find (a) |T∖H|, (b) the number of non-chess players, and (c) |H∖C|.",
      hint: "Follow the printed shape boundaries, not the supplied handwritten totals. Treat the displayed regions as the whole population.",
      solution: "<p>(a) Tennis but not hockey contains the regions <span class='math-inline'>5+11+14+5</span>, so <strong>|T∖H|=35</strong>.</p><p>(b) Outside the chess oval are the top tennis-only 5, left hockey-only 5, right hockey-only 20, and bottom tennis-only 5. Their total is <strong>35 non-chess players</strong>.</p><p>(c) Hockey but not chess contains only the left and right rectangle-only regions: <span class='math-inline'>5+20=<strong>25</strong></span>.</p><p><em>Source correction:</em> all three supplied handwritten answers misread the printed set boundaries.</p>",
    },
    {
      id: "exam-2026-v1-02",
      topic: "Binomial",
      difficulty: "Hard",
      source: "June 2026 CAT One · Version 1 · Q2",
      sourceUrl: "resources/VERSION%20ONE%20SOLUTIONS.pdf#page=1",
      marks: 6,
      question: "In (1+ax)ᵏ, a and k are non-zero constants. The coefficients of x and x² are 8 and 30. Find a and k, then find the coefficient of x³.",
      hint: "Use ka=8 and C(k,2)a²=30, then eliminate a.",
      solution: "<p>The first two conditions give <span class='math-inline'>ka=8</span> and <span class='math-inline'>k(k−1)a²/2=30</span>. From <span class='math-inline'>a=8/k</span>,</p><p><span class='math-block'>k(k−1)/2 · 64/k²=30<br>32(k−1)/k=30.</span></p><p>Thus <span class='math-inline'>32k−32=30k</span>, so <strong>k=16</strong> and <strong>a=1/2</strong>.</p><p>The coefficient of x³ is <span class='math-inline'>C(16,3)(1/2)³=560/8=<strong>70</strong></span>.</p>",
    },
    {
      id: "exam-2026-v1-03",
      topic: "Series",
      difficulty: "Medium",
      source: "June 2026 CAT One · Version 1 · Q3",
      sourceUrl: "resources/VERSION%20ONE%20SOLUTIONS.pdf#page=2",
      marks: 4,
      question: "Find the first four terms of f(x)=15/√(1−2x).",
      hint: "Write f(x)=15(1−2x)⁻¹ᐟ² and use the generalised binomial expansion with u=−2x.",
      solution: "<p>Using <span class='math-inline'>(1+u)ᵅ=1+αu+α(α−1)u²/2!+α(α−1)(α−2)u³/3!+···</span> with <span class='math-inline'>α=−1/2</span> and <span class='math-inline'>u=−2x</span> gives</p><p><span class='math-block'>f(x)=15[1+x+(3/2)x²+(5/2)x³+···]<br>=15+15x+(45/2)x²+(75/2)x³+···.</span></p>",
    },
    {
      id: "exam-2026-v1-04a",
      topic: "Functions",
      difficulty: "Easy",
      source: "June 2026 CAT One · Version 1 · Q4(a)",
      sourceUrl: "resources/VERSION%20ONE%20SOLUTIONS.pdf#page=2",
      marks: 2,
      question: "The function f has domain [1,∞) and is defined by f(x)=3x+k. Give the range of f in terms of k.",
      hint: "The rule has positive slope, so its least output occurs at the included left endpoint.",
      solution: "<p>Since <span class='math-inline'>3&gt;0</span>, f increases on its domain. Its minimum occurs at <span class='math-inline'>x=1</span>:</p><p><span class='math-block'>f(1)=3+k.</span></p><p>There is no upper bound, so the range is <strong>[3+k,∞)</strong>.</p>",
    },
    {
      id: "exam-2026-v1-07",
      topic: "Logic",
      difficulty: "Medium",
      source: "June 2026 CAT One · Version 1 · Q7",
      sourceUrl: "resources/VERSION%20ONE%20SOLUTIONS.pdf#page=2",
      marks: 5,
      question: "Which, if any, is logically equivalent to ¬(p→q): (a) ¬p→q, (b) p→¬q, or (c) ¬p→¬q? Justify your answer.",
      hint: "First rewrite the negation of an implication without using →.",
      solution: "<p><span class='math-inline'>p→q≡¬p∨q</span>, so</p><p><span class='math-block'>¬(p→q)≡¬(¬p∨q)≡p∧¬q.</span></p><p>The options simplify to (a) <span class='math-inline'>p∨q</span>, (b) <span class='math-inline'>¬p∨¬q</span>, and (c) <span class='math-inline'>p∨¬q</span>. None equals <span class='math-inline'>p∧¬q</span>. Therefore <strong>none of (a)–(c)</strong> is equivalent.</p>",
    },
    {
      id: "exam-2026-v1-08",
      topic: "Counting",
      difficulty: "Medium",
      source: "June 2026 CAT One · Version 1 · Q8",
      sourceUrl: "resources/VERSION%20ONE%20SOLUTIONS.pdf#page=2",
      marks: 3,
      question: "Sections B and C contain 6 and 7 questions. In how many ways can a student choose 10 questions from B and C while choosing at least 4 from each section?",
      hint: "The only possible (B,C) splits are (4,6), (5,5), and (6,4).",
      solution: "<p>Count each allowed split:</p><p><span class='math-block'>C(6,4)C(7,6)+C(6,5)C(7,5)+C(6,6)C(7,4)<br>=15·7+6·21+1·35<br>=105+126+35=<strong>266</strong>.</span></p><p>The two compulsory Section A questions mentioned in the paper do not affect this count because the prompt explicitly asks for 10 chosen from B and C.</p>",
    },
    {
      id: "exam-july26-functions-01",
      topic: "Functions",
      difficulty: "Hard",
      source: "July 2026 examination · Q1(d) · interval typo repaired",
      sourceUrl: "resources/DOC-20260728-WA0038.pdf#page=2",
      sourceWarning: "The printed domain (6,0) is not a valid interval. The solution uses the consistent intended domain (6,∞).",
      marks: 8,
      question: "Let f(x)=x²−19 on (−∞,0), and g(x)=1−x/2 on the intended domain (6,∞). Find the ranges of f and g, the domain and range of f∘g, and solve (f∘g)(x)=−26+2x within that domain.",
      hint: "Find each range from its stated domain; then require both x∈Dom(g) and g(x)∈Dom(f).",
      solution: "<p>For x&lt;0, x²&gt;0, so <span class='math-inline'>Range(f)=(−19,∞)</span>. For x&gt;6, <span class='math-inline'>g(x)&lt;−2</span>, so <span class='math-inline'>Range(g)=(−∞,−2)</span>.</p><p>Every g-output is accepted by f, hence <span class='math-inline'>Dom(f∘g)=(6,∞)</span>. Also</p><p><span class='math-block'>(f∘g)(x)=(1−x/2)²−19=x²/4−x−18.</span></p><p>This increases for x&gt;6 and approaches −15 at the excluded endpoint, so its range is <span class='math-inline'>(−15,∞)</span>.</p><p>Solving <span class='math-inline'>x²/4−x−18=−26+2x</span> gives <span class='math-inline'>(x−4)(x−8)=0</span>. Only <strong>x=8</strong> belongs to (6,∞).</p>",
    },
    {
      id: "exam-july26-functions-02",
      topic: "Functions",
      difficulty: "Hard",
      source: "July 2026 examination · Q2(c) · source inconsistency exposed",
      sourceUrl: "resources/DOC-20260728-WA0038.pdf#page=3",
      sourceWarning: "Part (iii) has no real positive k as printed; the negative discriminant is the mathematically correct conclusion.",
      marks: 6,
      question: "Let f(x)=x²+kx+8 on [−2,∞) and g(x)=kx−4 on [2,∞), where k>0. Find Range(g), the least k that allows f∘g on all of Dom(g), and investigate the printed condition (f∘g)(3)=0.",
      hint: "The minimum g-output occurs at x=2. For the final part, substitute g(3)=3k−4 into f and inspect the resulting quadratic in k.",
      solution: "<p>Because k&gt;0, g increases and its minimum is <span class='math-inline'>g(2)=2k−4</span>. Thus <span class='math-inline'>Range(g)=[2k−4,∞)</span>.</p><p>For every g-output to enter f, require <span class='math-inline'>2k−4≥−2</span>, giving <span class='math-inline'>k≥1</span>; the least value is <strong>1</strong>.</p><p>For the printed last part,</p><p><span class='math-block'>(f∘g)(3)=(3k−4)²+k(3k−4)+8<br>=12k²−28k+24=4(3k²−7k+6).</span></p><p>The discriminant of <span class='math-inline'>3k²−7k+6</span> is <span class='math-inline'>49−72=−23</span>. Therefore <strong>no real k</strong>, and hence no positive real k, satisfies the printed condition.</p>",
    },
    {
      id: "exam-original-functions-inverse",
      topic: "Functions",
      difficulty: "Medium",
      source: "Original practice · inverse and composition",
      marks: 6,
      question: "Let f(x)=4x−7 on ℝ and g(x)=(x+7)/4 on ℝ. Show that g=f⁻¹. Then find (f∘f)(x) and solve (f∘f)(x)=29.",
      hint: "Check both compositions before using the inverse notation.",
      solution: "<p><span class='math-inline'>f(g(x))=4[(x+7)/4]−7=x</span>, while <span class='math-inline'>g(f(x))=[(4x−7)+7]/4=x</span>. Therefore <span class='math-inline'>g=f⁻¹</span>.</p><p>Also <span class='math-inline'>(f∘f)(x)=4(4x−7)−7=16x−35</span>. Solve <span class='math-inline'>16x−35=29</span>: <span class='math-inline'>16x=64</span>, so <strong>x=4</strong>.</p>",
    },
    {
      id: "exam-july26-counting-01",
      topic: "Counting",
      difficulty: "Medium",
      source: "July 2026 examination · Q1(h)",
      sourceUrl: "resources/DOC-20260728-WA0038.pdf#page=2",
      marks: 3,
      question: "A 3-person committee is selected from 4 women and 5 men. It must include both genders, and one specified married woman and man cannot both serve. How many committees are possible?",
      hint: "Count all mixed-gender committees, then remove committees containing the married pair.",
      solution: "<p>All committees: <span class='math-inline'>C(9,3)=84</span>. Remove all-women and all-men choices:</p><p><span class='math-block'>84−C(4,3)−C(5,3)=84−4−10=70.</span></p><p>A committee containing the married pair has any one of the other 7 people as its third member. All 7 are mixed-gender committees, so remove them: <strong>70−7=63</strong>.</p>",
    },
    {
      id: "exam-july26-counting-02",
      topic: "Counting",
      difficulty: "Hard",
      source: "July 2026 examination · Q3(b)",
      sourceUrl: "resources/DOC-20260728-WA0038.pdf#page=4",
      marks: 5,
      question: "Six distinct books A,B,C,D,E,F are arranged on a shelf. Find the numbers of arrangements where (i) A,B are together, (ii) C,D are not together, and (iii) A,B are together while C,D are not together.",
      hint: "Use a two-order block for together. For not together, subtract the blocked cases from the relevant total.",
      solution: "<p>(i) AB is one object among 5, with 2 internal orders: <span class='math-inline'>2·5!=<strong>240</strong></span>.</p><p>(ii) Subtract C,D-together from all arrangements: <span class='math-inline'>6!−2·5!=720−240=<strong>480</strong></span>.</p><p>(iii) Begin with 240 A,B-together cases. Cases where both AB and CD are blocks number <span class='math-inline'>4!·2·2=96</span>. Therefore <span class='math-inline'>240−96=<strong>144</strong></span>.</p>",
    },
    {
      id: "exam-july26-counting-03",
      topic: "Counting",
      difficulty: "Medium",
      source: "July 2026 examination · Q5(b)",
      sourceUrl: "resources/DOC-20260728-WA0038.pdf#page=5",
      marks: 4,
      question: "The letters of BANANAS are on seven cards. Find arrangements using all cards when (i) there is no restriction, (ii) the three vowels stay together, and (iii) all vowels stay together and all consonants stay together. Finally, how many physical 4-card selections are possible?",
      hint: "Account for three identical A's and two identical N's. A together-group becomes one block.",
      solution: "<p>(i) BANANAS has A repeated 3 times and N repeated twice, so <span class='math-inline'>7!/(3!2!)=<strong>420</strong></span>.</p><p>(ii) Treat AAA as one block with B,N,N,S: five objects with N repeated, giving <span class='math-inline'>5!/2!=<strong>60</strong></span>.</p><p>(iii) Treat AAA as one block and BNNS as another. The two blocks can swap, and BNNS has <span class='math-inline'>4!/2!=12</span> internal arrangements: <span class='math-inline'>2·12=<strong>24</strong></span>.</p><p>(iv) Because the question describes seven physical cards, select 4 cards in <span class='math-inline'>C(7,4)=<strong>35</strong></span> ways.</p>",
    },
    {
      id: "exam-july26-relations-01",
      topic: "Relations",
      difficulty: "Medium",
      source: "July 2026 examination · Q3(d)",
      sourceUrl: "resources/DOC-20260728-WA0038.pdf#page=4",
      marks: 5,
      question: "On ℤ, define mRn if 3 divides m−n. Prove that R is an equivalence relation.",
      hint: "For transitivity, add the equations m−n=3a and n−p=3b.",
      solution: "<p><strong>Reflexive:</strong> <span class='math-inline'>m−m=0=3·0</span>, so mRm.</p><p><strong>Symmetric:</strong> if <span class='math-inline'>m−n=3a</span>, then <span class='math-inline'>n−m=3(−a)</span>, so nRm.</p><p><strong>Transitive:</strong> if <span class='math-inline'>m−n=3a</span> and <span class='math-inline'>n−p=3b</span>, then <span class='math-inline'>m−p=3(a+b)</span>, so mRp.</p><p>R is reflexive, symmetric, and transitive; therefore it is an <strong>equivalence relation</strong>. Its three classes are integers congruent to 0, 1, or 2 modulo 3.</p>",
    },
    {
      id: "exam-original-relations-01",
      topic: "Relations",
      difficulty: "Medium",
      source: "Original practice · finite-property test",
      marks: 5,
      question: "On A={1,2,3}, let R={(1,1),(2,2),(3,3),(1,2),(2,1)}. State whether R is reflexive, symmetric, antisymmetric, and transitive. Is it an equivalence relation?",
      hint: "Check all diagonal pairs first, then the reversed off-diagonal pair, then possible two-step paths.",
      solution: "<p>Every diagonal pair is present, so R is reflexive. Since (1,2) and (2,1) both occur, every arrow has its reverse, so R is symmetric. Those same two pairs with 1≠2 show that R is <strong>not antisymmetric</strong>.</p><p>The set {1,2} contains every pair needed for paths within it, while 3 only relates to itself, so R is transitive. Thus R is <strong>an equivalence relation</strong>, with classes {1,2} and {3}.</p>",
    },
    {
      id: "exam-original-relations-02",
      topic: "Relations",
      difficulty: "Hard",
      source: "Original practice · congruence classes",
      marks: 6,
      question: "On ℤ define aRb when 4 divides a−b. Prove R is an equivalence relation, then list the distinct classes using remainders.",
      hint: "The proof is algebraic; the classes are determined by the possible remainders on division by 4.",
      solution: "<p><strong>Reflexive:</strong> <span class='math-inline'>a−a=0</span> is divisible by 4. <strong>Symmetric:</strong> if <span class='math-inline'>a−b=4k</span>, then <span class='math-inline'>b−a=4(−k)</span>. <strong>Transitive:</strong> if <span class='math-inline'>a−b=4k</span> and <span class='math-inline'>b−c=4ℓ</span>, then <span class='math-inline'>a−c=4(k+ℓ)</span>.</p><p>Therefore R is an equivalence relation. Its distinct classes are <strong>[0], [1], [2], [3]</strong>, containing integers whose remainder modulo 4 is 0,1,2,3 respectively.</p>",
    },
    {
      id: "exam-july26-recurrence-01",
      topic: "Recurrence",
      difficulty: "Hard",
      source: "July 2026 examination · Q1(g)(i)",
      sourceUrl: "resources/DOC-20260728-WA0038.pdf#page=2",
      marks: 3,
      question: "Solve aₙ=−aₙ₋₃−3aₙ₋₂−3aₙ₋₁ given a₀=1, a₁=−2, and a₂=−1.",
      hint: "The characteristic polynomial is the cube of a binomial; a triple root needs 1,n,n².",
      solution: "<p>Rearrange to <span class='math-inline'>aₙ+3aₙ₋₁+3aₙ₋₂+aₙ₋₃=0</span>. The characteristic equation is</p><p><span class='math-block'>r³+3r²+3r+1=(r+1)³=0.</span></p><p>Thus <span class='math-inline'>aₙ=(A+Bn+Cn²)(−1)ⁿ</span>. From n=0, A=1. From n=1, B+C=1. From n=2, B+2C=−1. Hence C=−2 and B=3.</p><p><strong>aₙ=(1+3n−2n²)(−1)ⁿ.</strong></p>",
    },
    {
      id: "exam-july26-recurrence-02",
      topic: "Recurrence",
      difficulty: "Medium",
      source: "July 2026 examination · Q1(g)(ii)",
      sourceUrl: "resources/DOC-20260728-WA0038.pdf#page=2",
      marks: 1,
      question: "A linear homogeneous recurrence has characteristic roots 2,2,2,2,5,5,9. Write the form of its general solution.",
      hint: "A root of multiplicity m receives a polynomial in n of degree m−1.",
      solution: "<p>Root 2 has multiplicity 4, root 5 has multiplicity 2, and root 9 has multiplicity 1. Therefore</p><p><span class='math-block'>aₙ=(C₁+C₂n+C₃n²+C₄n³)2ⁿ<br>+(C₅+C₆n)5ⁿ+C₇9ⁿ.</span></p><p>Each characteristic root gets its own independent constants.</p>",
    },
    {
      id: "exam-july26-recurrence-03",
      topic: "Recurrence",
      difficulty: "Easy",
      source: "July 2026 examination · Q5(a)",
      sourceUrl: "resources/DOC-20260728-WA0038.pdf#page=5",
      marks: 4,
      question: "Given Tₙ=6Tₙ₋₁−11Tₙ₋₂+6Tₙ₋₃ with T₀=2, T₁=5, and T₂=15, find T₃.",
      hint: "Write the n=3 line first: the needed terms are T₂, T₁, and T₀.",
      solution: "<p>Substitute n=3:</p><p><span class='math-block'>T₃=6T₂−11T₁+6T₀<br>=6(15)−11(5)+6(2)<br>=90−55+12=<strong>47</strong>.</span></p><p>No characteristic equation is needed when only the next term is requested.</p>",
    },
  ];

  const practiceCollections = [
    {
      id: "past-paper",
      label: "Past papers",
      eyebrow: "Uploaded assessments",
      description: "Only questions taken from formal uploaded CATs and examinations.",
    },
    {
      id: "revision-material",
      label: "Revision sheets",
      eyebrow: "Uploaded worksheets",
      description: "Questions taken from the uploaded revision handouts, kept apart from formal papers.",
    },
    {
      id: "extra-practice",
      label: "Likely exam practice",
      eyebrow: "Generated & researched",
      description: "Original practice built from class notes and checked open-learning question patterns.",
    },
  ];

  const practiceCollectionIds = {
    "past-paper": [
      "exam-sets-01", "exam-sets-02", "exam-sets-03", "exam-sets-04", "exam-sets-05", "exam-sets-06",
      "exam-logic-01", "exam-logic-02", "exam-logic-03", "exam-logic-04", "exam-logic-05", "exam-logic-06",
      "exam-binomial-01", "exam-binomial-02", "exam-binomial-03",
      "exam-induction-01", "exam-induction-02", "exam-induction-03",
      "exam-2024-cat-01", "exam-2024-cat-02", "exam-2024-cat-03", "exam-2024-cat-04", "exam-2024-cat-05", "exam-2024-cat-06",
      "exam-2024-cat-07", "exam-2024-cat-08", "exam-2024-cat-09", "exam-2024-cat-10", "exam-2024-cat-11",
      "exam-2026-v1-01", "exam-2026-v1-02", "exam-2026-v1-03", "exam-2026-v1-04a", "exam-2026-v1-07", "exam-2026-v1-08",
      "exam-july26-functions-01", "exam-july26-functions-02",
      "exam-july26-counting-01", "exam-july26-counting-02", "exam-july26-counting-03",
      "exam-july26-relations-01",
      "exam-july26-recurrence-01", "exam-july26-recurrence-02", "exam-july26-recurrence-03",
    ],
    "revision-material": [
      "exam-sets-07", "exam-sets-08", "exam-binomial-04", "exam-binomial-05", "exam-binomial-06", "exam-binomial-07", "exam-binomial-08",
    ],
    "extra-practice": [
      "exam-functions-01", "exam-functions-02", "exam-functions-03", "exam-functions-04", "exam-functions-05",
      "exam-functions-06", "exam-functions-07", "exam-functions-08", "exam-functions-09", "exam-functions-10",
      "exam-functions-11", "exam-functions-12", "exam-functions-13", "exam-functions-14", "exam-functions-15",
      "exam-original-functions-inverse", "exam-original-relations-01", "exam-original-relations-02",
    ],
  };

  const collectionByQuestionId = new Map(
    Object.entries(practiceCollectionIds).flatMap(([collection, ids]) => ids.map((id) => [id, collection]))
  );
  const categorizedExamBank = examBank.map((question) => ({
    ...question,
    collection: collectionByQuestionId.get(question.id) || "unclassified",
  }));

  const flashcards = [
    { topic: "Numbers", front: "Number-family nesting", back: "ℕ ⊂ W ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ" },
    { topic: "Numbers", front: "Rational decimal test", back: "It terminates or eventually repeats. Non-terminating and non-eventually-repeating means irrational." },
    { topic: "Proof", front: "Contradiction proof skeleton", back: "Assume the opposite → use definitions → reach an impossibility → reject the assumption." },
    { topic: "Sets", front: "∈ versus ⊆", back: "∈ joins an object to a set; ⊆ joins one set to another set." },
    { topic: "Sets", front: "∅ versus {∅}", back: "∅ has 0 elements. {∅} has 1 element." },
    { topic: "Sets", front: "Power-set size", back: "If |A|=n, then |P(A)|=2ⁿ." },
    { topic: "Sets", front: "Disjoint sets", back: "They have no shared elements: A∩B=∅." },
    { topic: "Sets", front: "Two-set inclusion–exclusion", back: "|A∪B|=|A|+|B|−|A∩B|." },
    { topic: "Sets", front: "Three-set inclusion–exclusion", back: "Add singles, subtract pair totals, add the triple back once." },
    { topic: "Venn", front: "Exactly two", back: "Add pair-only regions. If pair totals include all three, subtract the triple from every pair first." },
    { topic: "Counting", front: "Factorial and 0!", back: "n!=n(n−1)…1 and 0!=1." },
    { topic: "Counting", front: "Combination", back: "nCr=n!/[r!(n−r)!]; use it when order does not matter." },
    { topic: "Binomial", front: "General finite-binomial term", back: "Tᵣ₊₁=C(n,r)aⁿ⁻ʳbʳ. Term number is r+1." },
    { topic: "Binomial", front: "Find a requested power", back: "Write Tᵣ₊₁, combine its variable exponent, set that exponent equal to the target, then solve r." },
    { topic: "Binomial", front: "Constant term", back: "Set the variable's total exponent equal to 0." },
    { topic: "Binomial", front: "Middle-term rule", back: "n even: one middle, n/2+1. n odd: two middles, (n+1)/2 and (n+3)/2." },
    { topic: "Binomial", front: "Parity shortcut", back: "Adding (a+b)ⁿ and (a−b)ⁿ keeps even b-powers; subtracting them keeps odd b-powers." },
    { topic: "Series", front: "Generalised binomial validity", back: "(1+x)^α is infinite whenever α is not a non-negative integer. It converges for |x|<1; endpoints need separate tests." },
    { topic: "Logic", front: "Implication rewrite", back: "p→q ≡ ¬p∨q. It is false only when p is true and q is false." },
    { topic: "Logic", front: "Equivalent conditional pair", back: "A conditional equals its contrapositive. Its converse equals its inverse." },
    { topic: "Logic", front: "De Morgan's laws", back: "¬(p∧q)≡¬p∨¬q and ¬(p∨q)≡¬p∧¬q." },
    { topic: "Logic", front: "Absorption laws", back: "p∨(p∧q)≡p and p∧(p∨q)≡p." },
    { topic: "Logic", front: "Tautology / contradiction / contingency", back: "Always true / always false / sometimes true and sometimes false." },
    { topic: "Induction", front: "Induction template", back: "Base case → assume P(k) → prove P(k+1) using that assumption → conclude." },
    { topic: "Induction", front: "Induction sum shortcut", back: "At k+1, write the old k-sum plus exactly the new (k+1)th term." },
    { topic: "Functions", front: "Function test", back: "Every input in the domain must be assigned exactly one output. Shared outputs are allowed." },
    { topic: "Functions", front: "Domain / codomain / range", back: "Domain = allowed inputs; codomain = declared target; range = outputs actually reached. Range ⊆ codomain." },
    { topic: "Functions", front: "One-to-one test", back: "Different inputs give different outputs. Algebraically: f(u)=f(v) must force u=v." },
    { topic: "Functions", front: "Many-to-one versus one-to-many", back: "Many-to-one is a valid function; one-to-many is not a function." },
    { topic: "Functions", front: "Real-domain restrictions", back: "Even-root radicand ≥0; denominator ≠0; polynomials allow all real inputs unless restricted." },
    { topic: "Functions", front: "Onto function", back: "Every element of the codomain is reached, so range = codomain." },
    { topic: "Functions", front: "Composition order", back: "(f∘g)(x)=f(g(x)): g acts first because it is nearest x." },
    { topic: "Functions", front: "Composite-domain test", back: "x must be in Dom(g), and g(x) must be in Dom(f)." },
    { topic: "Functions", front: "Inverse existence", back: "A function needs to be one-to-one on its domain before it can have an inverse function." },
    { topic: "Functions", front: "Inverse verification", back: "Check f(f⁻¹(x))=x and f⁻¹(f(x))=x on the correctly swapped domains." },
    { topic: "Counting", front: "Addition or multiplication?", back: "Mutually exclusive OR cases add; consecutive AND choices multiply." },
    { topic: "Counting", front: "Permutation versus combination", back: "If swapping selected items changes the result, use an ordered count (nPr); otherwise use nCr." },
    { topic: "Counting", front: "Repeated-object arrangements", back: "For n objects with repeats of sizes a,b,…, use n!/(a!b!···)." },
    { topic: "Counting", front: "Forbidden adjacency", back: "Often count all arrangements minus the arrangements where the forbidden pair is one block." },
    { topic: "Relations", front: "Relation on A", back: "Any subset of A×A. Writing aRb means (a,b) belongs to the relation." },
    { topic: "Relations", front: "Equivalence relation", back: "RST: reflexive, symmetric, and transitive." },
    { topic: "Relations", front: "Antisymmetric", back: "If aRb and bRa, then a=b. It does not mean 'not symmetric'." },
    { topic: "Relations", front: "Equivalence classes", back: "They cover the set and are either identical or disjoint, so they form a partition." },
    { topic: "Recurrence", front: "Order of a recurrence", back: "The furthest look-back determines the order and normally the number of initial values needed." },
    { topic: "Recurrence", front: "Characteristic equation", back: "Try aₙ=rⁿ, move every term to one side, and divide by the lowest power of r." },
    { topic: "Recurrence", front: "Repeated characteristic root", back: "Multiplicity m gives (C₀+C₁n+···+Cₘ₋₁nᵐ⁻¹)rⁿ." },
    { topic: "Recurrence", front: "Recurrence solution check", back: "Verify the initial values and at least one later term in the original recurrence." },
  ];

  const learningResources = [
    { group: "Start here", title: "Discrete Mathematics I", author: "Kimberly Brehm", description: "Friendly, worked-example video playlist for the topics in your notes.", url: "https://www.youtube.com/playlist?list=PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz" },
    { group: "Start here", title: "Discrete Math · Part 1", author: "TrevTutor", description: "Short revision videos when you want a second explanation.", url: "https://www.youtube.com/playlist?list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz" },
    { group: "Read & practise", title: "Discrete Mathematics: An Open Introduction", author: "Oscar Levin", description: "Free first-year textbook with clear explanations and exercises.", url: "https://discrete.openmathbooks.org/dmoi4/" },
    { group: "Read & practise", title: "Functions in discrete mathematics", author: "Oscar Levin", description: "Focused reading and exercises on domain, codomain, range, images, one-to-one, onto, and counting functions.", url: "https://discrete.openmathbooks.org/dmoi4/sec_structures-functions.html" },
    { group: "Read & practise", title: "Permutations and combinations", author: "Oscar Levin", description: "Free, verified open-textbook section on ordered sequences, combinations, repeated outcomes, and practice problems.", url: "https://discrete.openmathbooks.org/dmoi4/sec_counting-combperm.html" },
    { group: "Read & practise", title: "Relations and equivalence classes", author: "Oscar Levin", description: "Free, verified section covering relation properties, equivalence relations, classes, and partitions.", url: "https://discrete.openmathbooks.org/dmoi4/sec_gt-relations.html" },
    { group: "Read & practise", title: "Recursive and exponential sequences", author: "Oscar Levin", description: "Free, verified reading with recursive definitions, closed forms, examples, and exercises.", url: "https://discrete.openmathbooks.org/dmoi4/sec_seq-exponential.html" },
    { group: "Read & practise", title: "Functions and function notation", author: "OpenStax", description: "Worked examples on relation tests, function values, domain, range, and one-to-one functions.", url: "https://openstax.org/books/precalculus-2e/pages/1-1-functions-and-function-notation" },
    { group: "Read & practise", title: "Domain and range", author: "OpenStax", description: "A focused guide to domains and ranges of polynomial, radical, and rational functions.", url: "https://openstax.org/books/precalculus-2e/pages/1-2-domain-and-range" },
    { group: "Read & practise", title: "Function definition", author: "Paul's Online Math Notes", description: "Extra worked examples for deciding whether relations are functions and evaluating function notation.", url: "https://tutorial.math.lamar.edu/Classes/Alg/FunctionDefn.aspx" },
    { group: "Go deeper", title: "Mathematics for Computer Science", author: "MIT OpenCourseWare", description: "University-level lectures showing why discrete maths matters in CS.", url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/video_galleries/video-lectures/" },
    { group: "Go deeper", title: "Session 7: Functions", author: "MIT OpenCourseWare", description: "Discrete-mathematics notes on images, composition, injective and surjective functions, and cardinality.", url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_session7/" },
    { group: "Go deeper", title: "Mathematics for Computer Science readings", author: "MIT OpenCourseWare", description: "Verified free textbook and chapter downloads for counting, relations, and recurrences; use the relevant chapter after this site's plain-language lesson.", url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/readings/" },
    { group: "Go deeper", title: "Discrete Mathematics playlist", author: "Neso Academy", description: "A complete visual course; this is the verified discrete-maths playlist.", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3" },
    { group: "Tools", title: "Interactive truth-table tool", author: "Stanford CS103", description: "Check a formula after you have built its table yourself.", url: "https://web.stanford.edu/class/cs103/tools/truth-table-tool/" },
    { group: "Topic video", title: "Introduction to sets", author: "Kimberly Brehm", description: "Set language, membership, and notation.", url: "https://www.youtube.com/watch?v=dZbbkoYcSOE" },
    { group: "Topic video", title: "Venn diagrams & inclusion–exclusion", author: "Kimberly Brehm", description: "Worked counting with overlapping sets.", url: "https://www.youtube.com/watch?v=YlKDp03Kg68" },
    { group: "Topic video", title: "Propositions and operators", author: "Kimberly Brehm", description: "A clear start to propositional logic.", url: "https://www.youtube.com/watch?v=A3Ffwsnad0k" },
    { group: "Topic video", title: "Converse, inverse, contrapositive", author: "Kimberly Brehm", description: "Learn which conditional forms are equivalent.", url: "https://www.youtube.com/watch?v=rAxXcX_w5fE" },
    { group: "Topic video", title: "Truth tables & equivalence", author: "Kimberly Brehm", description: "Build tables and compare final columns.", url: "https://www.youtube.com/watch?v=tj_98IO-lCk" },
    { group: "Topic video", title: "Binomial theorem", author: "Kimberly Brehm", description: "Finite expansions and the general term.", url: "https://www.youtube.com/watch?v=m8TsPMfcasI" },
    { group: "Topic video", title: "Negative and fractional binomial", author: "ExamSolutions", description: "Generalised expansion and its convergence condition.", url: "https://www.youtube.com/watch?v=S70GNLBJpj0" },
    { group: "Topic video", title: "Induction for divisibility", author: "Kimberly Brehm", description: "The exact proof pattern used by your exam.", url: "https://www.youtube.com/watch?v=OP3l8VUEE-8" },
  ];

  const sourceMaterials = [
    { title: "Class-note photograph gallery", meta: "32 unique handwritten pages · numbers through functions", url: "notes-gallery.html" },
    { title: "July 2026 examination", meta: "5-page exam · source of the past-paper questions", url: "resources/DOC-20260728-WA0038.pdf" },
    { title: "June 2024 ICS 1105 CAT", meta: "2-page past paper · all 11 questions covered · latest upload checked against the earlier copy", url: "resources/DOC-20260507-WA0009.pdf" },
    { title: "June 2026 CAT One · Version 1", meta: "2-page paper plus 3 supplied-solution pages · independently checked", url: "resources/VERSION ONE SOLUTIONS.pdf" },
    { title: "Madaraka Day Edition", meta: "Revision sheet · Venn, binomial, and future-course questions", url: "resources/Madaraka Day Edition.pdf" },
    { title: "Revision on Binomial Theorem", meta: "Scanned exercise sheet · direct terms, coefficients, and constants", url: "resources/Revision on Binomial Theorem.pdf" },
  ];

  const sourceCorrections = [
    "The handwritten √3 contradiction stops too early; a lowest-terms/gcd step is required.",
    "The set {x∈ℤ : x²+11x+28=0} is not empty: its roots are −4 and −7.",
    "A 3-element set has 2³=8 subsets, including ∅ and the original set.",
    "For (x²+x/2)¹⁵, the stated x²⁸ coefficient misses a factor; the corrected coefficient is 105/4.",
    "The generalised binomial series needs |x|<1 after normalisation; it is not merely a rule for n<1.",
    "The first-order approximation (1+x)/(1−x) is 1+2x, not 1−2x.",
    "July exam Q1(d) prints the impossible interval (6,0); the intended domain is almost certainly (6,∞).",
    "July exam Q2(c)(iii) has no positive real k as printed, and Q3(d) reverses its divisibility notation. Treat both as source typos.",
    "Madaraka Q1's key omits k=0 unless k≠0 was intended; this site's solution shows both algebraic roots.",
    "Binomial sheet Q1(iii) should contain −16x/y³, not −6x/y³; Q1(vi)'s key answers power 8 although the prompt says power 4.",
    "Binomial sheet Q2(i–ii) round to 1.08 and 0.89, not 1.14 and 0.88.",
    "Binomial sheet Q7(v), Q8(ii), and Q8(iii) also have faulty printed answers. This site recomputes answers rather than copying the key.",
    "The function notes briefly write the range of √x using y>0. Since √0=0, the complete real range is [0,∞).",
    "June 2024 CAT Q3 needs the unstated assumption that all 41 children play at least one listed sport; the adapted practice question states it explicitly.",
    "June 2024 CAT Q4 and Q5 contain no requested term as printed: their required binomial indices are not integers.",
    "June 2024 CAT Q6 implicitly needs n≥8 so both stated powers occur; otherwise smaller degrees can make both absent coefficients zero. The adapted question states the intended restriction.",
    "June 2024 CAT Q11 asks for an inverse of x+1/x without restricting its domain, but f(2)=f(1/2), so no global inverse function exists as printed.",
    "The supplied Version 1 solution misreads the Q1 Venn diagram. The corrected totals are 35 tennis-not-hockey, 35 non-chess, and 25 hockey-not-chess.",
    "The supplied Version 1 solution says Q4(d) is impossible; with k=−3 and domain x≥1, the preimage of 3 under g∘f is {2}.",
  ];

  const roadmap = [
    { title: "Quantifiers & more proof methods", reason: "Negating ∀/∃, direct proof, contrapositive, existence, and counterexamples." },
    { title: "Modular arithmetic, graphs & trees", reason: "Core CS tools for cryptography, networks, search, and data structures." },
    { title: "Growth, probability & asymptotics", reason: "The language of algorithm runtime and uncertainty." },
  ];

  window.COURSE_DATA = {
    course: {
      code: "ICS 1104",
      title: "Discrete Mathematics",
      currentStop: "July 2026 exam coverage through relations & recurrences",
      masteryPercent: 92,
    },
    lessons,
    examBank: categorizedExamBank,
    practiceCollections,
    flashcards,
    learningResources,
    sourceMaterials,
    sourceCorrections,
    roadmap,
  };
})();

/* Original study notes synthesised from Hezron's 46 supplied course files.
   The source books/slides are not republished here; ideas are explained afresh. */
(() => {
  "use strict";

  const lessons = [
    {
      id: "introduction-being",
      number: 1,
      navTitle: "Introduction & being",
      title: "Philosophical Anthropology: asking ‘Who am I?’",
      minutes: 48,
      summary: "Learn what PA studies, why it looks for ultimate causes, and the Aristotelian tools used throughout the whole course.",
      question: "What is a human being when we look beneath changing appearances?",
      catch: [
        "Material object = the human person; formal object = the person’s deepest or ontological foundations.",
        "Philosophy asks for ultimate explanations by reason; a particular science normally studies nearer, measurable causes.",
        "The six lenses are Transcendentals, Substance, Act, Matter, Esse and Causes — T-S-A-M-E-C.",
        "The first principles are identity, non-contradiction and excluded middle."
      ],
      mnemonic: { letters: "OMP + TSAMEC", line: "Object, Method, Principles — then Truthful Students Always Make Excellent Choices.", meaning: "Use OMP to define a discipline and TSAMEC to recall the six views of being." },
      sections: [
        {
          title: "1. What exactly is Philosophical Anthropology?",
          priority: "must",
          html: `<p><strong>Philosophical Anthropology (PA)</strong> is the rational study of the human person through the deepest causes and principles of human existence. Psychology may measure behaviour, biology may study organs and sociology may study groups. PA asks the more basic questions behind all three: <em>What kind of being acts, knows, chooses and lives with others?</em></p>
          <p>Every discipline has a <strong>material object</strong> (the thing studied) and a <strong>formal object</strong> (the angle from which it is studied). Here, the material object is the human person. The formal object is the person’s ontological structure: what makes a human being the kind of being they are.</p>
          <aside class="course-position"><strong>Language check</strong><p>When the notes call philosophy a “science”, they use the classical word <em>scientia</em>: organised knowledge through causes. This is wider than modern experimental science.</p></aside>`,
          example: "A neurologist and a philosopher can study the same choice. One asks which brain systems were active; the other asks whether the act was free and responsible. Same material object, different formal object.",
          examTip: "A complete definition earns more when you include both the object and the phrase ‘ultimate causes/principles by reason’."
        },
        {
          title: "2. Proximate and ultimate explanations",
          priority: "must",
          html: `<p>A <strong>proximate cause</strong> explains the nearest mechanism. An <strong>ultimate cause</strong> asks why the whole reality has this nature, purpose or intelligibility. They are not enemies. An aircraft flies because of lift and thrust (proximate explanation), while questions about its designer, purpose and the intelligibility of engineering move toward deeper causes.</p>
          <p>PA therefore listens to empirical evidence but does not stop at it. A brain scan can show what happens while someone decides; it does not by itself settle what truth, goodness, responsibility or personal dignity mean.</p>
          <div class="contrast"><div><strong>Near question</strong><p>Which hormone or neuron changed?</p></div><div><strong>Deep question</strong><p>What is an act of knowing or choosing?</p></div></div>`,
          examTip: "Do not say philosophy replaces science. Say their questions and methods differ but can inform one another."
        },
        {
          title: "3. Six ways of looking at being",
          priority: "must",
          html: `<p><strong>Transcendentals</strong> are features said of every being insofar as it exists: unity, truth, goodness and beauty. <strong>Substance</strong> is what exists in itself; an <strong>accident</strong> is a changeable feature existing in a substance. Hezron remains the same person while his location, mood or hairstyle changes.</p>
          <p><strong>Act and potency</strong> explain change. Potency is a real capacity; act is its fulfilment. A student who can understand logic has the potency; actual understanding fulfils it. <strong>Matter and form</strong> explain a material being as organised stuff, not a pile of parts. In the course’s hylomorphic account, the soul is the substantial form of a living body.</p>
          <p><strong>Essence and existence</strong> answer different questions: essence answers “what is it?”; existence answers “is it?”. Finally, the <strong>four causes</strong> ask what it is made from (material), what structure/nature it has (formal), what produced it (efficient), and what it is for (final).</p>
          <div class="memory-grid"><span><b>T</b>ranscendentals</span><span><b>S</b>ubstance/accident</span><span><b>A</b>ct/potency</span><span><b>M</b>atter/form</span><span><b>E</b>sse/essence</span><span><b>C</b>auses</span></div>`,
          example: "For a wooden desk: wood is material cause; its desk-structure is formal cause; the carpenter is efficient cause; supporting study is its final cause.",
          examTip: "Definitions plus one accurate example beat a list of six unexplained words."
        },
        {
          title: "4. Substance, accidents and equal dignity",
          priority: "useful",
          html: `<p>The traditional nine categories of accident in the notes are quantity, quality, relation, place, position, possession/state, time, action and passion (being acted upon). Accidents are real, but none is the whole person.</p>
          <p>This becomes ethically important. Intelligence score, health, wealth, nationality and ability differ; they are not the ground of basic human worth in the course framework. Dignity belongs to the person as a person, so it does not rise and fall with performance.</p>
          <aside class="sticky-insight"><strong>Sticky thought</strong><p>“Different accidents” does not mean “different amount of humanity”. Never describe a person as if one measurable feature exhausts who they are.</p></aside>`,
          example: "Losing the ability to walk changes a real accident or capacity in use; it does not turn someone into a smaller percentage of a person."
        },
        {
          title: "5. First principles and sound reasoning",
          priority: "must",
          html: `<p><strong>Identity:</strong> a thing is what it is (A is A). <strong>Non-contradiction:</strong> the same claim cannot be true and false at the same time and in the same respect. <strong>Excluded middle:</strong> for a definite proposition, either it or its negation is true.</p>
          <p>The qualifiers matter. “Hezron is seated and not seated” is contradictory only if both refer to the same time and respect. He can be seated now and not seated later without contradiction.</p>
          <p>Critical thinking then asks: What exactly is being claimed? What evidence or premise supports it? Does the conclusion follow? A <strong>valid</strong> argument has correct logical structure. A <strong>sound</strong> argument is valid <em>and</em> has true premises.</p>`,
          examTip: "Correct a common notes error: validity concerns form, not whether every sentence happens to be true."
        },
        {
          title: "6. The historical conversation",
          priority: "deep",
          html: `<p>Ancient thinkers asked about nature, soul, virtue and the good life. Plato highlighted the intelligible and sometimes described body and soul in strong tension. Aristotle developed hylomorphism: a living human is one substance composed of matter and form. Medieval thinkers such as Aquinas developed this account in conversation with theology. Modern thinkers shifted attention toward consciousness, method and the knowing subject; contemporary debates add language, embodiment, culture, evolution and neuroscience.</p>
          <p>Do not memorise history as isolated names. Track the repeating questions: Is body-soul unity real? Can intellect reach truth? What makes an act free? Is the person essentially relational? Each later topic is an attempted answer.</p>`
        }
      ],
      cases: [
        { title: "Four causes in a real action", prompt: "Apply the four causes to a student writing an anthropology essay.", answer: ["Material: the bodily/material conditions and writing medium.", "Formal: the organised argument that makes it this essay.", "Efficient: the student acting through their abilities and tools.", "Final: communicating a justified answer and, immediately, completing the assessment."] },
        { title: "The taxi dilemma", prompt: "A driver says, ‘Everyone lies about fares, so lying is fine.’ Identify the reasoning problem.", answer: ["The frequency of an action does not determine its moral goodness.", "The claim also needs evidence; ‘everyone’ is an unsupported generalisation.", "PA asks what truthful action perfects or damages in the acting person, not only what others do."] }
      ],
      recall: ["Define PA without looking.", "Give the material and formal objects.", "Expand TSAMEC.", "Invent one act/potency example.", "Distinguish valid from sound."],
      quiz: [
        { q: "The formal object of PA is…", options: ["Every human body", "The human person under ontological principles", "Only human behaviour", "Ancient history"], answer: 1, explain: "The material object is the human person; the formal object is the ontological angle." },
        { q: "A student’s changing location is best described as…", options: ["Substance", "Accident", "Essence", "Final cause"], answer: 1, explain: "Place changes while the same person remains." },
        { q: "Which pair explains change?", options: ["Act and potency", "Truth and beauty", "Matter and cause", "Identity and relation"], answer: 0, explain: "Potency is capacity; act is fulfilment." },
        { q: "A sound argument is…", options: ["Popular", "Valid with true premises", "Emotional", "Any true conclusion"], answer: 1, explain: "Truth of the conclusion alone does not guarantee sound reasoning." },
        { q: "Which is a final-cause question?", options: ["What material?", "Who made it?", "What is it for?", "How heavy is it?"], answer: 2, explain: "The final cause concerns end or purpose." }
      ]
    },
    {
      id: "life-levels",
      number: 2,
      navTitle: "Life & its levels",
      title: "Life: what living things do from within",
      minutes: 42,
      summary: "Distinguish life from mere motion, reconcile the course's four- and five-sign lists, and compare vegetative, sensitive and rational operations.",
      question: "Why is a growing plant alive while a moving flame or car is not alive in the same sense?",
      catch: [
        "Soul means the first intrinsic principle of life — not a ghost placed inside a machine.",
        "The older chapter uses URIS: Unity, Rhythm, Immanence and Self-movement; the later Life deck adds self-development as a fifth sign.",
        "VSR: vegetative powers support organic life; sensitive powers add sensation and appetite; rational life adds intellect and will.",
        "Higher life includes lower operations: a human nourishes, senses and reasons through one living unity."
      ],
      mnemonic: { letters: "URIS + D · VSR", line: "Unity, Rhythm, Immanence, Self-movement — plus Development; Vegetative, Sensitive, Rational.", meaning: "URIS recalls the older four-sign list, +D reconciles the later five-sign deck, and VSR recalls the ascending levels." },
      sections: [
        {
          title: "1. Soul as a principle of life",
          priority: "must",
          html: `<p>In this course, <strong>soul</strong> translates the classical idea of the first internal principle by which a body is alive. It is not one organ and not a second little person hiding in the body. Calling soul the body’s <strong>substantial form</strong> means it is the organising principle by which this matter is one living organism with characteristic operations.</p>
          <p>We first recognise life through activities: nutrition, growth, self-repair, perception, desire, movement, understanding and choice. Different living things possess different ranges of operation.</p>`,
          examTip: "Define soul in the course’s technical sense before discussing immortality; the two claims are related but not identical."
        },
        {
          title: "2. URIS: the older four-sign list",
          priority: "must",
          html: `<p><strong>Unity:</strong> the living being acts as a whole; injury to one part affects the organism. <strong>Rhythm:</strong> living activity has ordered cycles such as sleep, growth and metabolism. <strong>Immanence:</strong> an action begins in the living agent and perfects or changes that agent — learning remains in the learner. <strong>Self-movement:</strong> the source of activity is internal, even though the environment supplies conditions and stimuli.</p>
          <p>Self-movement does not mean “moves location without any outside influence”. Plants do not walk, yet growth is internally organised. A pushed stone changes place, but the push is wholly external.</p>
          <div class="memory-grid four"><span><b>U</b>nity</span><span><b>R</b>hythm</span><span><b>I</b>mmanence</span><span><b>S</b>elf-movement</span></div>`,
          example: "A lecture changes the learner only if the learner’s own powers receive and process it. The teacher causes something, but understanding is an immanent act in the student."
        },
        {
          title: "3. Vegetative life: NGR",
          priority: "must",
          html: `<p>The classical vegetative powers are <strong>nutrition, growth and reproduction</strong> — NGR. Nutrition transforms external material into part of the organism. Growth is internally directed development toward maturity, not merely material stuck on the outside. Reproduction continues the kind, though an individual remains alive without personally exercising it.</p>
          <p>Respiration and excretion are biological processes serving these powers; they are not usually listed as additional primary powers in the Aristotelian classification.</p>
          <aside class="accuracy-note"><strong>Accuracy repair</strong><p>The supplied map sometimes mixes processes with powers. For exams, use the classical three: nutrition, growth and reproduction.</p></aside>`
        },
        {
          title: "4. Sensitive and rational life",
          priority: "must",
          html: `<p><strong>Sensitive life</strong> includes the vegetative level and adds awareness of particular sensible things, sensitive appetite and, in many animals, local movement. An animal can perceive this danger or this food and respond.</p>
          <p><strong>Rational life</strong> includes lower operations but adds intellect and will: grasping universal meanings, judging truth, reasoning, deliberating about goods and choosing. Saying that the human level is higher does not make the body irrelevant; human thinking and choosing belong to an embodied person.</p>
          <div class="ladder"><div><b>Rational</b><span>intellect + will + sensitive + vegetative</span></div><div><b>Sensitive</b><span>senses + appetites + vegetative</span></div><div><b>Vegetative</b><span>nutrition + growth + reproduction</span></div></div>`,
          examTip: "Use ‘includes and exceeds’, not ‘replaces’. A rational living being still has vegetative and sensitive powers."
        },
        {
          title: "5. Do not confuse motion with life",
          priority: "useful",
          html: `<p>A flame spreads, consumes fuel and seems to grow; a self-driving car changes direction; a crystal increases in size. These similarities do not prove biological life. Ask whether there is a stable organic unity whose internally coordinated activities preserve and develop the same organism.</p>
          <p>Modern biology uses operational criteria and evolutionary explanations; classical philosophy asks what kind of unity makes those processes the acts of one living subject. The two approaches can be compared without pretending their vocabulary is identical.</p>`,
          example: "A Subaru detects an obstacle through sensors and stops. Its behaviour can mimic perception, but its organisation and purpose come from designers and programmed systems rather than a biological power of sensation."
        },
        {
          title: "6. Are animals merely machines?",
          priority: "deep",
          html: `<p>The course contrasts animal sensitive cognition with human universal reasoning. Keep the distinction careful. Many animals communicate, solve limited problems, form attachments and use tools. The philosophical question is whether these acts involve universal concepts and free rational deliberation in the same way human acts do.</p>
          <p>In an essay, state the course distinction, offer observable examples, and avoid absolute claims that modern animal research can easily disprove.</p>`
        }
      ],
      cases: [
        { title: "Plant, fire and phone", prompt: "Use URIS to compare a bean plant, a flame and a phone running an app.", answer: ["The plant has internally coordinated growth and nutrition and maintains one organic life.", "The flame depends on combustion and spreads, but it is not an organism organising itself toward biological maturity.", "The phone executes designed processes; its goal-directed appearance depends on human manufacture and programming.", "Movement or complexity alone is therefore not enough to establish life."] },
        { title: "One person, three levels", prompt: "Hezron eats, notices smoke and decides to leave. Identify the levels.", answer: ["Nutrition belongs to vegetative life.", "Seeing or smelling smoke belongs to sensitive life.", "Judging danger and choosing to leave are rational operations.", "One human person performs all of them; there are not three separate souls."] }
      ],
      recall: ["Define soul as used in this course.", "Expand URIS.", "Name the three vegetative powers.", "Explain immanence with your own example.", "Why is mere local motion not enough for life?"],
      quiz: [
        { q: "Which is not one of the classical vegetative powers?", options: ["Nutrition", "Growth", "Reasoning", "Reproduction"], answer: 2, explain: "Reasoning belongs to rational life." },
        { q: "An immanent action…", options: ["Never changes the agent", "Begins and remains perfecting the agent", "Must be visible", "Is always involuntary"], answer: 1, explain: "Understanding is a clear example: its result is in the knower." },
        { q: "The best account of self-movement is…", options: ["No environmental input", "Only walking", "An internal principle coordinates activity", "Random motion"], answer: 2, explain: "External conditions may matter; the living source of coordinated activity is intrinsic." },
        { q: "Which level includes the others?", options: ["Vegetative", "Sensitive only", "Rational", "None"], answer: 2, explain: "Human rational life retains vegetative and sensitive operations." },
        { q: "URIS stands for…", options: ["Unity, Rhythm, Immanence, Self-movement", "Use, Reason, Intellect, Soul", "Unity, Reproduction, Identity, Sense", "Universal, Rational, Internal, Social"], answer: 0, explain: "These are the older chapter's four signs; the later Life deck adds self-development as a fifth." }
      ]
    },
    {
      id: "human-person",
      number: 3,
      navTitle: "Human person & body",
      title: "The human person: one embodied subject",
      minutes: 50,
      summary: "Understand hylomorphism, body–soul unity, personhood, one soul with many powers and dignity that is deeper than ability.",
      question: "Do I have a body like a possession, or am I an embodied person?",
      catch: [
        "Hylomorphism: a human is one substance composed of matter and substantial form, not two complete beings glued together.",
        "Duality means real dimensions can be distinguished; substance dualism treats mind and body as ontologically distinct substances capable, in principle, of separate existence.",
        "Boethius: a person is an individual substance of a rational nature.",
        "The one human soul grounds vegetative, sensitive and rational powers; dignity belongs to the person, not performance."
      ],
      mnemonic: { letters: "ONE", line: "One subject, Not two roommates, Embodied throughout.", meaning: "Use ONE whenever an essay asks about body–soul unity or dualism." },
      sections: [
        {
          title: "1. Hylomorphism, without the fog",
          priority: "must",
          html: `<p><strong>Hylomorphism</strong> comes from the Greek for matter and form. Matter is the bodily principle capable of being organised; substantial form is the principle by which it is this living kind of body. Neither is a complete human person on its own in ordinary embodied life.</p>
          <p>A statue’s shape is an external arrangement imposed on material. A living form is deeper: the organism builds, repairs and coordinates its parts as one. The eye sees only as a living part of the person; separated from the organism, it soon ceases to be an eye in the full functional sense.</p>
          <aside class="plain-box"><strong>Plain language</strong><p>You are not a ghost driving a body-car. The “you” who thinks is also the “you” who gets tired, smiles and reaches for a pen.</p></aside>`,
          examTip: "State unity first, then distinguish body and soul without separating the person into two complete beings."
        },
        {
          title: "2. Duality is not dualism",
          priority: "must",
          html: `<p><strong>Duality</strong> means two principles or dimensions are genuinely distinguishable: bodily and spiritual operations are not identical. <strong>Dualism</strong>, especially substance dualism, treats mind/soul and body as ontologically distinct substances capable, in principle, of separate existence; explaining their interaction then becomes difficult.</p>
          <p><strong>Reductive materialism (or reductive physicalism)</strong> explains every human act completely in terms of physical events alone. A hylomorphic view rejects both this reduction and a divided person: bodily conditions genuinely affect thinking, yet meaning, truth and universal understanding are not adequately described only in physical or neural terms.</p>
          <div class="contrast"><div><strong>Dualism</strong><p>Two complete things somehow interact.</p></div><div><strong>Hylomorphism</strong><p>Two principles constitute one living person.</p></div></div>`
        },
        {
          title: "3. What ‘person’ means",
          priority: "must",
          html: `<p>Boethius’s classic definition is: <strong>an individual substance of a rational nature</strong>. “Individual” means this unrepeatable someone. “Substance” is a metaphysical term: the person exists in themselves rather than inhering in another as an accident. “Rational nature” identifies the kind of being, even when a person is asleep, very young or unable to exercise reasoning.</p>
          <p>Person answers <em>who?</em>, not only <em>what?</em>. Human nature is shared; personal existence is unrepeatable. This supports the ethical conclusion that a person has intrinsic dignity and must never be treated merely as somebody else’s property.</p>`,
          example: "An unconscious patient is not currently reasoning, but still has a rational nature and remains a person. Operation and underlying capacity are not the same."
        },
        {
          title: "4. One soul, many powers",
          priority: "must",
          html: `<p>A person does not have a plant-soul, animal-soul and thinking-soul stacked together. The course follows Aristotle and Aquinas: one rational soul is the form of the body and possesses lower as well as higher powers.</p>
          <p>The notes use a geometric analogy: a pentagon contains the possibilities of simpler shapes without literally being several separate figures. Likewise, one higher living unity supports nutrition, sensation and intellect.</p>
          <p>A <strong>power</strong> is a stable capacity; an <strong>act</strong> is its exercise. Sight remains a power when the eyes are closed. Intellect remains a power while you sleep.</p>`
        },
        {
          title: "5. The body reveals and limits",
          priority: "useful",
          html: `<p>The body is personal expression: face, hands, voice, posture and gesture make an interior life present to others. We do not encounter a hidden mind first and later infer a body-person; we meet someone through embodied action.</p>
          <p>Embodiment also means vulnerability, dependence, location and time. These are not embarrassing defects added to “real” personhood. They shape learning, relationships, care and moral responsibility. Fatigue may reduce attention without erasing freedom entirely; injury can restrict choices without reducing dignity.</p>`
        },
        {
          title: "6. Dignity, equality and difference",
          priority: "deep",
          html: `<p>If dignity depended on currently displayed intelligence, independence or social usefulness, it would disappear whenever those accidents changed. The course grounds equality more deeply in shared human nature and personal being.</p>
          <p>This does not erase individual differences. Equality of dignity and diversity of abilities can both be true. Ethical systems must therefore respect persons as ends, while also responding realistically to different needs and responsibilities.</p>
          <aside class="modern-context"><strong>Modern context</strong><p>Human-rights language offers a public legal expression of equal dignity. The explicit right to life is found in Article 3 of the Universal Declaration of Human Rights, not as a line in the UN Charter.</p></aside>`
        }
      ],
      cases: [
        { title: "The injured athlete", prompt: "A runner loses the use of a leg and says, ‘I am no longer myself.’ Respond using substance and accidents.", answer: ["The loss is real and may reshape projects, emotions and self-image.", "Bodily ability is not the whole ground of personal identity or dignity.", "The same individual person undergoes a serious change in capacities/accidents.", "A sensitive answer acknowledges grief before giving the metaphysical distinction."] },
        { title: "Three souls?", prompt: "Someone says eating is done by one soul, seeing by a second and reasoning by a third.", answer: ["That fragments the unified subject.", "The same ‘I’ eats, sees and reasons.", "The hylomorphic account attributes several powers to one rational soul/form.", "Higher life includes lower operations rather than adding separate living substances."] }
      ],
      recall: ["Define hylomorphism.", "Contrast duality and dualism.", "Explain every word of Boethius’s definition.", "Why does one soul have several powers?", "Ground dignity without using achievement."],
      quiz: [
        { q: "Hylomorphism describes the person as…", options: ["A mind trapped in matter", "One substance of matter and form", "Only organised matter", "Three souls"], answer: 1, explain: "Matter and substantial form are principles of one embodied substance." },
        { q: "In Boethius’s definition, rational nature means…", options: ["Constantly solving problems", "The kind of being with rational capacities", "High IQ", "Living alone"], answer: 1, explain: "A person retains rational nature when the operation is not presently exercised." },
        { q: "Which claim is dualist?", options: ["Body and soul are distinguishable principles", "A person is one embodied unity", "Mind and body are two complete substances", "Bodily states affect attention"], answer: 2, explain: "Dualism separates what hylomorphism holds together as principles." },
        { q: "A power differs from an act because…", options: ["A power is a capacity; an act exercises it", "A power is visible", "An act never changes", "They are synonyms"], answer: 0, explain: "Closed eyes retain the power of sight even when seeing is not occurring." },
        { q: "On the course account, dignity is primarily grounded in…", options: ["Academic results", "Independence", "Personal human being", "Popularity"], answer: 2, explain: "Changing achievements and abilities are not the measure of basic personhood." }
      ]
    },
    {
      id: "senses-memory",
      number: 4,
      navTitle: "Senses & memory",
      title: "Sensitive knowledge: from stimulus to meaningful perception",
      minutes: 46,
      summary: "Trace knowledge through the five external senses and the inner senses: common sense, imagination, memory and estimation/cogitation.",
      question: "How do separate colours, sounds and past experiences become one meaningful scene?",
      catch: [
        "Sensation receives a sensible quality; perception organises it as a meaningful whole.",
        "External senses have proper objects: sight-colour/light, hearing-sound, smell-odour, taste-flavour, touch-pressure/temperature and related qualities.",
        "CIMC: Common sense unifies; Imagination keeps/forms images; Memory recognises the past; Cogitative power evaluates concrete meaning for humans.",
        "Sensitive knowledge deals with particular things; intellect can grasp universal natures."
      ],
      mnemonic: { letters: "CIMC", line: "Combine, Imagine, Memorise, Consider.", meaning: "Common sense combines; imagination images; memory marks pastness; cogitative power considers concrete significance." },
      sections: [
        {
          title: "1. Sensation is not yet the whole perception",
          priority: "must",
          html: `<p>A sense organ is changed by a suitable stimulus: light reaches the visual system, sound waves the auditory system. <strong>Sensation</strong> refers to receiving sensible qualities. <strong>Perception</strong> is the organised awareness of a meaningful object or event.</p>
          <p>You do not normally experience disconnected patches of colour plus separate sounds. You perceive “my friend waving”. Past learning, attention and context influence this organisation; that is why perception can sometimes mislead without being generally useless.</p>`,
          example: "In the McGurk effect, seeing one lip movement while hearing another sound can alter what a person reports hearing. The senses cooperate; perception is not a camera dump."
        },
        {
          title: "2. Five external senses and proper objects",
          priority: "must",
          html: `<p>Each external sense has a <strong>proper object</strong>, the quality it is specially fitted to receive: sight receives colour/light; hearing receives sound; smell receives odour; taste receives flavour; touch receives tactile qualities such as pressure, texture and temperature.</p>
          <p>Some features, such as movement, number, shape and size, can be perceived through more than one sense and are traditionally called common sensibles. The same round cup can be seen and touched.</p>
          <aside class="sticky-insight"><strong>Exam trap</strong><p>The “object of sight” does not mean the whole physical thing. It means the sensible quality through which sight knows it.</p></aside>`
        },
        {
          title: "3. The internal senses: CIMC",
          priority: "must",
          html: `<p><strong>Common sense</strong> here is a technical faculty, not ordinary good judgement. It unifies simultaneous inputs and lets us distinguish seeing from hearing. <strong>Imagination</strong> retains and recombines sensory forms when the object is absent.</p>
          <p><strong>Sensitive memory</strong> retains an experience as past and helps recognition. The animal <strong>estimative</strong> power grasps concrete significance such as “dangerous to me”. In humans, the <strong>cogitative</strong> power evaluates particular situations with influence from reason: “this person’s silence may mean distress”.</p>
          <div class="memory-grid four"><span><b>C</b>ombine</span><span><b>I</b>mage</span><span><b>M</b>ark past</span><span><b>C</b>onsider meaning</span></div>`,
          examTip: "Give the operation and an example for each inner sense; lists alone are easy to confuse."
        },
        {
          title: "4. Memory is reconstructive",
          priority: "useful",
          html: `<p>Memory is not a perfect video stored in the brain. Attention, meaning, later information and retrieval cues affect what is encoded and reconstructed. Firsthand memory concerns what one experienced; testimonial knowledge is learned from others and is not the same thing as remembering the event oneself.</p>
          <p>Memory contributes to personal continuity because past experiences inform current projects and relationships. But a person is not reducible to accessible memories: forgetting does not automatically create a numerically different human being.</p>
          <aside class="modern-context"><strong>Study link</strong><p>Retrieval practice strengthens access: close the page and reconstruct CIMC. Rereading feels smooth because the words are present; recall tests whether they are available without the page.</p></aside>`
        },
        {
          title: "5. Thresholds, attention and illusion",
          priority: "useful",
          html: `<p>An <strong>absolute threshold</strong> is the weakest stimulus detected about 50% of the time under stated conditions; a <strong>difference threshold</strong> is the smallest change detected about 50% of the time. These are statistical psychological measures, not fixed metaphysical borders.</p>
          <p>Attention selects from more stimulation than conscious awareness can handle. Illusions show that perception involves interpretation; they do not prove every perception is false. Dreaming and sensory impairment also require careful empirical evidence, so unsupported percentages from student notes are not treated as settled facts here.</p>`
        },
        {
          title: "6. Particular knowledge and universal thought",
          priority: "deep",
          html: `<p>The senses know this red surface, this voice and this individual person under sensible features. Imagination can form a picture of a triangle, but any picture has a particular size and shape. Intellect can grasp “triangle” universally, applying to every three-sided polygon.</p>
          <p>This distinction prepares the argument that intellectual acts cannot be fully identified with one sensory image. It does not imply we learn without the senses; abstraction normally begins from embodied experience.</p>`
        }
      ],
      cases: [
        { title: "The friend across the road", prompt: "You see a coat, hear a familiar voice and recognise your friend. Map the powers involved.", answer: ["Sight and hearing receive their proper sensible qualities.", "Common sense unifies the simultaneous sensory field.", "Memory supplies recognition from past encounters.", "Cogitative judgement reads the concrete significance: ‘that is my friend’. Intellect can then make universal or propositional judgements."] },
        { title: "The imagined purple lion", prompt: "How can you picture something never seen?", answer: ["Imagination can retain and recombine sensory forms.", "Purple and lion-shape were experienced separately and are recombined.", "This does not mean imagination creates concepts without all prior sensible material.", "Intellect judges the imagined object and knows it need not exist."] }
      ],
      recall: ["Sensation versus perception?", "Name five proper objects.", "Expand CIMC by function.", "Estimative versus cogitative?", "Why does an illusion not prove total scepticism?"],
      quiz: [
        { q: "Which inner sense unifies simultaneous sensory inputs?", options: ["Memory", "Common sense", "Will", "Agent intellect"], answer: 1, explain: "This is the technical classical meaning of common sense." },
        { q: "Imagination primarily…", options: ["Chooses moral goods", "Retains and recombines sensory forms", "Proves arguments", "Produces sound"], answer: 1, explain: "It can represent an absent object and recombine images." },
        { q: "The proper object of hearing is…", options: ["Meaning", "Sound", "Distance", "A whole substance"], answer: 1, explain: "Hearing receives sound; meaning requires further processing." },
        { q: "The McGurk effect best shows that…", options: ["Hearing is useless", "Perception integrates senses and context", "Memory is exact", "Vision always wins"], answer: 1, explain: "Visual and auditory information interact in speech perception." },
        { q: "A universal concept differs from an image because…", options: ["It has one fixed colour", "It applies beyond one pictured instance", "It is always false", "It needs no experience"], answer: 1, explain: "Every image is particular; the concept can apply universally." }
      ]
    },
    {
      id: "affectivity-character",
      number: 5,
      navTitle: "Affectivity & character",
      title: "Appetites, emotions, temperament and character",
      minutes: 52,
      summary: "Understand what emotions are for, distinguish the two sensitive appetites, and learn how reason and virtue can integrate feelings without crushing them.",
      question: "Are emotions enemies of reason, or intelligent signals that need education?",
      catch: [
        "Appetite is a tendency toward a perceived good or away from a perceived evil.",
        "Concupiscible concerns an easy/near sensible good or evil; irascible concerns something difficult, threatening or worth struggling for.",
        "Emotion is information and energy, not an automatic moral verdict.",
        "Temperament is a starting tendency; character is shaped through repeated choices and habits."
      ],
      mnemonic: { letters: "IED + 5 Ps", line: "Interpret, Evaluate, Direct — Person, Proportion, Point in time, Purpose, Presentation.", meaning: "IED is the mature emotion sequence; the five Ps test whether anger is fitting." },
      sections: [
        {
          title: "1. Appetite means attraction or resistance",
          priority: "must",
          html: `<p>Knowledge makes something present to a knower; <strong>appetite</strong> inclines the subject toward a known good or away from an apprehended evil. A stone’s tendency downward is natural inclination. An animal’s pursuit of food is sensitive appetite. The will is rational appetite because it follows a good known by intellect.</p>
          <p><strong>Concupiscible appetite</strong> concerns sensible good or evil considered simply or as readily obtainable: love, desire, pleasure, hatred, aversion and sadness. <strong>Irascible appetite</strong> responds when difficulty enters: hope or despair toward an arduous good, fear or daring toward a threatening evil, and anger toward a present injury.</p>`,
          examTip: "The distinction is not ‘sexual versus angry’. Ask whether the object is easy/straightforward or difficult/obstructed."
        },
        {
          title: "2. Map the passions by object and time",
          priority: "must",
          html: `<p>Use three questions: Is the object seen as good or evil? Is it absent or present? Is it easy or difficult? A good simply considered awakens love; absent good, desire; possessed good, joy. Evil simply considered awakens hatred; absent evil, aversion; present evil, sorrow.</p>
          <p>With difficulty, an attainable future good produces hope; one judged impossible produces despair. A future evil that seems overpowering produces fear; one judged resistible can produce daring. Anger answers an experienced injury with a desire to set it right.</p>
          <aside class="sticky-insight"><strong>Fast exam method</strong><p>Name the perceived object first. “I feel hope” makes sense only when a difficult but possible good is ahead.</p></aside>`
        },
        {
          title: "3. Feel, then IED",
          priority: "must",
          html: `<p>Feelings arise partly without direct choice, so having an emotion is not identical to choosing an action. But people can influence attention, interpretation, expression and repeated habits. Mature affectivity does not mean feeling nothing; it means feelings increasingly support reality and worthwhile action.</p>
          <p><strong>Interpret:</strong> what am I feeling and what object do I perceive? <strong>Evaluate:</strong> is my reading of the situation accurate and proportionate? <strong>Direct:</strong> what truthful and good response should I choose?</p>
          <div class="memory-grid"><span><b>I</b>nterpret</span><span><b>E</b>valuate</span><span><b>D</b>irect</span></div>`,
          example: "An advert creates urgency and belonging. IED asks what desire it awakens, whether scarcity is real, and whether buying supports my actual good."
        },
        {
          title: "4. Anger and the five Ps",
          priority: "useful",
          html: `<p>Aristotle’s test is not “never be angry”. Fitting anger is directed toward the right <strong>Person</strong>, in the right <strong>Proportion</strong>, at the right <strong>Point in time</strong>, for the right <strong>Purpose</strong>, and in the right <strong>Presentation</strong> or manner.</p>
          <p>Anger can reveal perceived injustice and energise protection. It becomes destructive when the judgement is false, the response is excessive, or punishment replaces restoration. Reason should hear the signal without handing it the steering wheel.</p>`
        },
        {
          title: "5. Temperament, habit, character, personality",
          priority: "must",
          html: `<p><strong>Temperament</strong> is a relatively spontaneous pattern of emotional reactivity. <strong>Habit</strong> is a stable disposition strengthened by repeated acts. <strong>Character</strong> is the moral shape built through habits and choices. <strong>Personality</strong> is broader: the recognisable pattern of traits, expression and behaviour.</p>
          <p>The supplied material presents sanguine, choleric, melancholic and phlegmatic temperaments. Treat this as a historical self-reflection tool, not established biological diagnosis. People are more complex than four boxes, and MBTI-style categories also have contested scientific validity.</p>
          <aside class="accuracy-note"><strong>Say this in an essay</strong><p>“The classical scheme can name tendencies, but it does not determine destiny. Virtue and deliberate habits can educate temperament.”</p></aside>`
        },
        {
          title: "6. Virtue integrates the powers",
          priority: "deep",
          html: `<p>The course pairs <strong>temperance</strong> with concupiscible desire, <strong>fortitude</strong> with difficult goods and fears, <strong>prudence</strong> with practical judgement, and <strong>justice</strong> with giving others what is due. Virtue is not a one-off heroic mood; it is a stable readiness to act well.</p>
          <p>Emotion and virtue can reinforce each other. At first, studying may conflict with desire for entertainment. Repeated truthful choices can form habits, make attention easier and produce appropriate satisfaction in worthwhile work.</p>`
        }
      ],
      cases: [
        { title: "The advert that knows your feelings", prompt: "A phone advert says ‘Everyone has upgraded — only two left!’ Analyse it using affectivity.", answer: ["It presents belonging/status as a sensible good and exclusion as an evil.", "Urgency intensifies desire and may trigger fear of missing out.", "IED: name the emotion, test the truth of scarcity/social proof, then direct the choice toward a real rather than merely apparent good.", "The emotion is not itself irrational; accepting its first interpretation without judgement is the risk."] },
        { title: "Batman and Bruce Wayne", prompt: "Use the character material to distinguish temperament, personality and character in a fictional hero.", answer: ["Temperament concerns spontaneous emotional tendencies.", "Personality includes the wider recognisable presentation in different social settings.", "Character concerns stable moral habits expressed in choices.", "A persona or mood does not alone prove virtue; analyse repeated free acts and ends."] }
      ],
      recall: ["Concupiscible versus irascible?", "Map hope, fear and anger by object.", "Expand IED.", "State the five Ps of anger.", "Temperament versus character?", "Name four cardinal virtues and linked powers."],
      quiz: [
        { q: "Hope concerns…", options: ["A present easy good", "A difficult but possible future good", "Any past evil", "A completed choice"], answer: 1, explain: "Difficulty distinguishes irascible appetite; possibility distinguishes hope from despair." },
        { q: "Which best describes character?", options: ["An unchangeable mood", "Moral shape formed through habits and choices", "A four-letter test", "Physical appearance"], answer: 1, explain: "Temperament influences a starting point; character is cultivated." },
        { q: "IED asks us to…", options: ["Ignore every feeling", "Interpret, evaluate and direct", "Indulge, express and defend", "Identify, erase and deny"], answer: 1, explain: "Maturity listens to emotion, judges its reading and chooses a fitting response." },
        { q: "The historical four temperaments should be treated as…", options: ["A proven diagnosis", "Destiny", "A limited reflection tool", "Four virtues"], answer: 2, explain: "The scheme is historically influential but not modern biological science." },
        { q: "Which virtue especially steadies action toward a difficult good?", options: ["Fortitude", "Temperance", "Humour", "Memory"], answer: 0, explain: "Fortitude helps face fear and persist in arduous good." }
      ]
    },
    {
      id: "human-soul",
      number: 6,
      navTitle: "Soul & immortality",
      title: "The human soul: form, subsistence and the immortality argument",
      minutes: 48,
      summary: "Build the course argument about the soul carefully, separating what follows philosophically from what is assumed, objected to or known by revelation.",
      question: "What does the kind of action a person performs tell us about the kind of principle they possess?",
      catch: [
        "Soul is the substantial form and first life-principle of the body.",
        "The course argues from universal intellectual acts to an immaterial principle; it does not treat the soul as a measurable object.",
        "Subsistence means possessing being in itself; the course infers it from intellectual operation not intrinsically performed through a bodily organ.",
        "Immortality is a philosophical conclusion in this framework; resurrection is a theological claim and must be labelled differently."
      ],
      mnemonic: { letters: "A-O-I", line: "Act → Object → Instrument.", meaning: "Identify the intellectual act, its universal object, then ask whether a bodily instrument can fully account for that object." },
      sections: [
        {
          title: "1. Start from the definition, not from ghosts",
          priority: "must",
          html: `<p>Soul is the first intrinsic principle of life and the substantial form of a living body. Plant and animal souls organise their characteristic living operations. The human soul is called rational because human life includes intellect and will.</p>
          <p>This vocabulary avoids imagining the soul as a transparent body. A form is not another piece of matter. It is what makes matter one actual living substance of a certain kind.</p>`,
          examTip: "If asked ‘Is the soul a body?’, begin: a body is alive through the soul; therefore the life-principle cannot simply be the same as the organised body it actualises."
        },
        {
          title: "2. The argument from intellectual operation",
          priority: "must",
          html: `<p>The argument runs from an operation to its principle. Intellect knows universal meanings: triangle as such, justice as such, being as such. A bodily organ receives particular physical conditions; a sensory image is always this size, colour and viewpoint. Therefore, the course argues, intellectual understanding is not wholly the act of a bodily organ.</p>
          <ol><li>We perform acts with universal, non-material objects.</li><li>A power’s mode must be proportionate to its object.</li><li>No particular bodily organ, precisely as material, contains a universal as universal.</li><li>Therefore intellectual power has an immaterial mode of operation.</li></ol>
          <p>This is a philosophical argument, not a laboratory measurement. Its force depends on the premises about universality and the relation between acts and powers.</p>`
        },
        {
          title: "3. Subsistent does not mean ‘separate person’",
          priority: "must",
          html: `<p>To be <strong>subsistent</strong> means to possess being in itself rather than to inhere in another as an accident. In the Thomistic argument, intellectual activity is not intrinsically exercised through one bodily organ in the way sight is exercised through eyes; this organ-independent operation is the reason offered for inferring that the rational soul subsists. The soul is still the form of the body, and the human person is naturally embodied.</p>
          <p>Death is therefore not described as the body escaping from an evil prison. It is a rupture of natural unity. The course can hold that the soul survives while also holding that a separated soul is not the complete embodied human condition.</p>
          <aside class="course-position"><strong>Course position</strong><p>This is the Aristotelian–Thomistic account used in the supplied notes. Other philosophical traditions reject or revise its premises.</p></aside>`
        },
        {
          title: "4. Why the course concludes incorruptibility",
          priority: "deep",
          html: `<p>Material things corrupt through the separation or reorganisation of parts. If an intellectual principle is not composed of material parts and subsists — possesses being in itself — bodily decomposition would not directly decompose that principle. The notes also argue that form is not separated from itself and that intellectual desire naturally reaches beyond limited goods.</p>
          <p>The careful conclusion is conditional: <em>if</em> intellectual operation is genuinely immaterial and its subject subsists, then bodily death is not sufficient to destroy it. Avoid claiming that a scan or feeling of spirituality proves immortality.</p>`
        },
        {
          title: "5. Brain dependence: serious objection, not instant refutation",
          priority: "useful",
          html: `<p>Brain injury, sleep, medication and development clearly affect thinking. That evidence establishes dependence of human intellectual activity on bodily conditions during life. It challenges any picture of a mind operating normally without embodiment.</p>
          <p>The hylomorphic reply is that one embodied person thinks; damage to a necessary condition can obstruct an operation without proving the operation is nothing but that condition. Whether this reply succeeds needs argument. Do not use unsupported claims about “free neurons”, vision loss erasing all memory or thoughts continuing unchanged after brain death.</p>
          <div class="argument-box"><b>Objection:</b> mental acts vary with brain states.<br><b>Reply:</b> correlation and embodied dependence do not alone settle the metaphysical identity claim.<br><b>Open work:</b> defend the account of universal objects and causal dependence.</div>`
        },
        {
          title: "6. Philosophy and revelation are not the same claim",
          priority: "useful",
          html: `<p>Philosophy can propose arguments about immateriality and survival using publicly discussable premises. Christian theology adds revealed claims such as resurrection and the final destiny of the whole person. Even when a thinker accepts both, the reasons offered are not identical.</p>
          <p>In an exam, label the level: “the philosophical argument concludes…” or “within Christian revelation, the course holds…”. That distinction makes the answer stronger, not weaker.</p>`
        }
      ],
      cases: [
        { title: "The triangle image", prompt: "You picture a wonky blue triangle but understand the definition of every triangle. Use this in the immateriality argument.", answer: ["The image is particular: blue, sized and imperfect.", "The concept applies universally to every three-sided polygon.", "The course argues that a universal object exceeds any single material image.", "Therefore it attributes abstraction to an intellectual rather than merely imaginative power. The conclusion still requires the act–power premise."] },
        { title: "Brain injury objection", prompt: "A classmate says brain injury changes thought, so soul is disproved. Give a balanced response.", answer: ["Accept the empirical fact that intellectual performance depends greatly on the living brain.", "Clarify that hylomorphism already treats the thinker as embodied, not a detached mind.", "Dependence on a condition does not by itself prove strict identity with that condition.", "The debate turns on what intellectual objects/acts are and whether physical explanation is complete."] }
      ],
      recall: ["Define soul and substantial form.", "Rebuild the act-object-instrument argument.", "What does subsistent mean here?", "Why is death still a rupture?", "State the brain objection and reply fairly.", "Immortality versus resurrection?"],
      quiz: [
        { q: "The course calls the soul substantial form because it…", options: ["Has physical size", "Makes matter one living body of this kind", "Is an emotion", "Replaces every organ"], answer: 1, explain: "Form is the intrinsic organising actuality of the living substance." },
        { q: "The immateriality argument focuses especially on intellect’s…", options: ["Speed", "Universal objects", "Location", "Colour"], answer: 1, explain: "A universal concept is not restricted to one material image." },
        { q: "Subsistence in the argument means…", options: ["The soul is a complete person alone", "It possesses being in itself rather than inhering in another as an accident", "It eats", "It has mass"], answer: 1, explain: "An intellectual operation not intrinsically performed through a bodily organ is the course’s reason for inferring subsistence; it is not the definition itself." },
        { q: "Brain dependence should be…", options: ["Denied", "Accepted as evidence requiring a careful metaphysical account", "Called imaginary", "Used as proof of resurrection"], answer: 1, explain: "The evidence is real; what it ultimately implies is philosophically disputed." },
        { q: "Which is specifically theological?", options: ["Universal concepts exist", "The body has organs", "Resurrection", "Perception combines senses"], answer: 2, explain: "The course must distinguish revealed resurrection from a philosophical immortality argument." }
      ]
    },
    {
      id: "intellect-truth",
      number: 7,
      navTitle: "Intellect & truth",
      title: "Human intellect: abstraction, judgement and truth",
      minutes: 54,
      summary: "Follow the movement from experience to universal concepts, propositions and reasoning, then learn exactly what truth, validity and error mean.",
      question: "How can a particular embodied person know a universal truth?",
      catch: [
        "AJR: intellect Apprehends, Judges and Reasons; abstraction helps simple apprehension form universal concepts.",
        "Abstraction grasps an intelligible feature without claiming the individual does not exist.",
        "Logical truth is in a judgement matching reality; ontological truth is a being’s intelligibility/conformity to what it is.",
        "Valid = conclusion follows; sound = valid plus true premises."
      ],
      mnemonic: { letters: "S → C → R; AJR", line: "Sense gives material; Concept catches meaning; Reflection knows that I know. Apprehend, Judge, Reason.", meaning: "Use the first chain for levels of knowledge and AJR for the three acts of intellect. Abstraction is how simple apprehension forms a universal concept from experience." },
      sections: [
        {
          title: "1. Knowledge begins with experience",
          priority: "must",
          html: `<p>Human knowledge normally begins with the senses. External and internal senses present particular, meaningful experience. Intellect then grasps an intelligible nature that can apply beyond the individual case.</p>
          <p>This avoids two extremes: empiricism that reduces knowledge to sensory impressions alone, and an account that makes embodied experience irrelevant. The person who understands is the same person who sees and imagines.</p>`
        },
        {
          title: "2. AJR: three acts of intellect",
          priority: "must",
          html: `<p><strong>Simple apprehension</strong> grasps a concept such as “human”, without yet affirming or denying. <strong>Abstraction</strong> helps this first act by drawing a universal intelligible feature from particular experience. <strong>Judgement</strong> joins or separates concepts in a proposition: “All humans are mortal.” Only here do truth and falsity strictly appear. <strong>Reasoning</strong> moves from known propositions to a conclusion.</p>
          <div class="memory-grid"><span><b>A</b>pprehend: what?</span><span><b>J</b>udge: is it?</span><span><b>R</b>eason: therefore?</span></div>
          <p>Terms are not arguments; one proposition is not yet an inference. Label the level before analysing an error.</p>`,
          examTip: "For full marks, give one connected example: HUMAN → humans are mortal → Socrates is human, therefore Socrates is mortal."
        },
        {
          title: "3. Universal, particular and singular",
          priority: "must",
          html: `<p>A <strong>universal</strong> concept can be predicated of many: person, tree, triangle. A <strong>particular</strong> proposition refers to some members: “some students revise early”. A <strong>singular</strong> concept or judgement concerns this individual: “Bianca is on the screen”.</p>
          <p>Abstraction does not manufacture a floating object. It attends to an intelligible aspect while leaving aside individuating details. Understanding “pen” does not erase the blue pen; it makes classification and reasoning possible.</p>`,
          example: "Every drawn ten looks different, yet you can understand the number ten independently of font, colour and size."
        },
        {
          title: "4. Agent and possible intellect",
          priority: "useful",
          html: `<p>The classical account distinguishes <strong>agent intellect</strong>, which makes the intelligible aspect available by abstraction, and <strong>possible/passive intellect</strong>, which receives and possesses the concept. These are powers or functions of one knower, not two minds.</p>
          <p>Think of “lighting up what can be understood” and “becoming informed by it”. The analogy helps memory but should not be mistaken for literal light or a brain diagram.</p>`
        },
        {
          title: "5. Truth: logical and ontological",
          priority: "must",
          html: `<p><strong>Logical truth</strong> is the conformity of a judgement with reality. “Nairobi is in Kenya” is true because what the judgement affirms is the case. <strong>Ontological truth</strong> speaks of a being as intelligible and as conforming to its nature or an intellect’s exemplar — a genuine painting can be a “true” work of its artist.</p>
          <p>Truth is not the same as sincerity. A sincere speaker can be mistaken. Nor is every perspective equally accurate: perspective affects access, while reality still provides the measure.</p>
          <aside class="accuracy-note"><strong>Logic repair</strong><p>Validity is structural. “All cats are planets; Tion is a cat; therefore Tion is a planet” is valid but unsound because a premise is false.</p></aside>`
        },
        {
          title: "6. Reflexive knowledge and intellectual humility",
          priority: "deep",
          html: `<p>Intellect can return upon its own acts: I know, and I can recognise that I know or doubt. This reflexivity supports self-correction and responsibility. It does not make introspection infallible; people can misdescribe motives or overestimate certainty.</p>
          <p>Intellectual humility is not “nothing can be known”. It is proportioning confidence to reasons, distinguishing fact from interpretation, and changing judgement when better evidence appears.</p>`
        }
      ],
      cases: [
        { title: "A valid bad argument", prompt: "Analyse: All lecturers are robots. Caroline is a lecturer. Therefore Caroline is a robot.", answer: ["The form is valid: All L are R; C is L; therefore C is R.", "The first premise is false, so the argument is not sound.", "The example proves why validity and truth must not be confused."] },
        { title: "The Mona Lisa", prompt: "Explain logical and ontological truth using a statement and an artwork.", answer: ["Logical truth belongs to a judgement such as ‘The Mona Lisa was painted by Leonardo’ when it matches reality.", "Ontological truth concerns the work’s intelligibility or conformity to what it is/authentic exemplar.", "Do not describe the painting itself as making a proposition; the senses of truth are analogous, not identical."] }
      ],
      recall: ["Expand AJR.", "At which act do true/false first appear?", "Concept versus image?", "Agent versus possible intellect?", "Logical versus ontological truth?", "Valid versus sound?"],
      quiz: [
        { q: "Which act forms a concept without asserting?", options: ["Judgement", "Simple apprehension", "Reasoning", "Choice"], answer: 1, explain: "Simple apprehension forms a concept, normally through abstraction; truth or falsity enters when judgement affirms or denies." },
        { q: "Agent and possible intellect are…", options: ["Two people", "Two powers/functions of one knower", "External senses", "Emotions"], answer: 1, explain: "The distinction explains making intelligible and receiving the concept." },
        { q: "A valid argument with a false premise is necessarily…", options: ["Sound", "Unsound", "Invalid", "Emotionally true"], answer: 1, explain: "Soundness requires validity and true premises." },
        { q: "Logical truth primarily belongs to…", options: ["A judgement", "A colour", "An appetite", "A muscle"], answer: 0, explain: "A judgement is true when it conforms to reality." },
        { q: "Intellectual humility means…", options: ["Believing nothing", "Matching confidence to reasons and correcting error", "Following popularity", "Avoiding judgement forever"], answer: 1, explain: "Humility supports rather than cancels serious truth-seeking." }
      ]
    },
    {
      id: "will-human-acts",
      number: 8,
      navTitle: "Will & human acts",
      title: "The will: choosing goods and shaping a life",
      minutes: 50,
      summary: "See the will as rational appetite, distinguish real from apparent goods, and map the movement from understanding to deliberate action.",
      question: "Why can I know a better option and still choose something else?",
      catch: [
        "Intellect presents a good; will tends toward it, accepts it or rejects it.",
        "Every deliberate choice seeks something under an aspect of good, but the perceived good may be incomplete or apparent.",
        "Hedonia is felt pleasure; eudaimonia is flourishing through a genuinely good life.",
        "Elicited acts occur in the will; commanded acts are carried out by other powers under the will’s direction."
      ],
      mnemonic: { letters: "K-J-C-D", line: "Know, Judge, Choose, Do.", meaning: "A simplified exam map: understand options, judge a suitable good, choose it, then command execution." },
      sections: [
        {
          title: "1. Will as rational appetite",
          priority: "must",
          html: `<p>The <strong>will</strong> is the appetite responding to a good known by intellect. Sensitive appetite reaches a particular sensible good; will can seek goods under universal descriptions such as justice, friendship or a meaningful career.</p>
          <p>Intellect and will cooperate. I cannot deliberately choose what is entirely unknown; intellect proposes and evaluates. Yet knowing does not mechanically force choice, because several limited goods can attract from different angles.</p>`,
          examTip: "Avoid saying intellect chooses. Intellect knows/judges; will chooses, while the whole person acts."
        },
        {
          title: "2. Real and apparent good",
          priority: "must",
          html: `<p>A person always chooses under some <em>aspect</em> of good: pleasure, relief, belonging, revenge, money or excellence. An <strong>apparent good</strong> attracts but conflicts with the person’s fuller good or the good of others. This explains wrongdoing without claiming people choose “evil simply because it is evil”.</p>
          <p>Intellect may misjudge; passion may narrow attention; habit can make one option feel inevitable. Responsibility can therefore vary, but influence is not automatically compulsion.</p>`,
          example: "Cheating may appear good as quick marks and relief. It is not a complete good because it attacks truth, fairness, learning and the student’s character."
        },
        {
          title: "3. Hedonia and eudaimonia",
          priority: "must",
          html: `<p><strong>Hedonia</strong> emphasises pleasurable experience and the absence of pain. <strong>Eudaimonia</strong> means human flourishing: living and acting well across a whole life. Pleasure can accompany flourishing, but a pleasant moment may damage a larger good; difficult effort may form excellence.</p>
          <p>The contrast is not “pleasure bad, suffering good”. Ask whether pleasure fits and completes a worthwhile activity. Joy after honest mastery is different from relief produced by avoiding every challenge.</p>`
        },
        {
          title: "4. The anatomy of a deliberate act",
          priority: "must",
          html: `<p>The long traditional account distinguishes many moments, but use a clear chain: awareness of a possible good → initial attraction → deliberation about means → practical judgement → choice → command → execution → enjoyment or disappointment.</p>
          <p>Real life is not always slow or conscious. Habits compress the sequence. That is exactly why character matters: repeated choices train what we notice and how readily we act.</p>
          <div class="process-line"><span>See good</span><span>Deliberate</span><span>Judge</span><span>Choose</span><span>Command</span><span>Act</span><span>Rest/learn</span></div>`
        },
        {
          title: "5. Elicited and commanded acts",
          priority: "must",
          html: `<p><strong>Elicited acts</strong> are acts of will itself: desire, intention, consent and choice. <strong>Commanded acts</strong> are acts of another power set in motion under voluntary direction: opening a book, speaking, walking to class.</p>
          <p>Some bodily acts are not directly commandable. You may choose conditions that encourage sleep, but you cannot simply command instant sleep. This limits simplistic claims that every internal event is chosen.</p>`
        },
        {
          title: "6. Love, liking and self-gift",
          priority: "useful",
          html: `<p><strong>Liking</strong> often names attraction or pleasant compatibility. <strong>Love</strong> in the course’s stronger sense wills the good of another and can involve stable self-gift. Emotion may support it but does not exhaust it.</p>
          <p>Concupiscible love seeks a good for oneself; benevolent love seeks the other’s good. They can coexist — friendship is good for me and I want my friend to flourish — but using a person only as a benefit contradicts benevolence.</p>`
        }
      ],
      cases: [
        { title: "Study or football", prompt: "You have a test tomorrow but friends invite you to a match. Map a deliberate choice.", answer: ["Intellect knows both goods: friendship/recreation and preparation.", "Deliberation considers urgency, promises, alternatives and consequences.", "Practical judgement identifies the fitting plan — perhaps study first and join later.", "Will chooses; command directs attention and bodily action; later satisfaction or regret feeds future habits."] },
        { title: "The apparent good of revenge", prompt: "Someone posts an insult and immediate retaliation feels good. Explain.", answer: ["Retaliation appears good as restored status or relief.", "Passion can narrow attention to that partial good.", "Reason asks about truth, proportion, the other’s dignity and longer consequences.", "The will can choose a firmer but non-destructive response; repeated restraint forms character."] }
      ],
      recall: ["Define will.", "How do intellect and will cooperate?", "Real versus apparent good?", "Hedonia versus eudaimonia?", "Map K-J-C-D.", "Elicited versus commanded acts?"],
      quiz: [
        { q: "The object of will is…", options: ["Sound", "Good known by intellect", "Only pleasure", "A universal image"], answer: 1, explain: "Will is rational appetite, tending toward an intellectually apprehended good." },
        { q: "An apparent good…", options: ["Has no attractive feature", "Attracts under a partial aspect but conflicts with fuller good", "Is always material", "Cannot be chosen"], answer: 1, explain: "Wrong choices still seek some perceived benefit." },
        { q: "Eudaimonia refers to…", options: ["A momentary thrill", "Human flourishing through a good life", "Fear", "External pressure"], answer: 1, explain: "Pleasure may accompany it but does not define the whole." },
        { q: "Which is an elicited act?", options: ["Choosing to speak", "The spoken sound", "A knee reflex", "Digestion"], answer: 0, explain: "Choice belongs to will itself; speaking is commanded through other powers." },
        { q: "Which phrase best captures benevolent love?", options: ["You make me feel good", "I will your genuine good", "I own you", "I never disagree"], answer: 1, explain: "Benevolence seeks the other’s good rather than reducing them to usefulness." }
      ]
    },
    {
      id: "human-freedom",
      number: 9,
      navTitle: "Human freedom",
      title: "Freedom, responsibility, virtue and conscience",
      minutes: 55,
      summary: "Move beyond ‘doing whatever I want’: compare kinds of freedom, understand responsibility and learn why conscience must be both followed and formed.",
      question: "Does freedom grow when every limit disappears, or when I become able to choose the good well?",
      catch: [
        "Freedom of exercise: act or do not act. Freedom of specification: choose this option or that one.",
        "Constitutive freedom belongs to rational agency; effective/instrumental freedom concerns real opportunities and means.",
        "Choice freedom selects; moral freedom grows as good action becomes stable; social freedom needs just conditions.",
        "Conscience binds the agent but can be mistaken, so it must be sincerely formed in truth."
      ],
      mnemonic: { letters: "C-M-S + FER", line: "Choose, Mature, Share — Freedom, Evidence, Responsibility.", meaning: "Recall choice, moral and social dimensions; test a choice through freedom, evidence/truth and responsibility." },
      sections: [
        {
          title: "1. Two immediate dimensions of choice",
          priority: "must",
          html: `<p><strong>Freedom of exercise</strong> is the ability to act or refrain: revise or not revise. <strong>Freedom of specification</strong> is the ability to select among objects or means: revise anthropology or calculus; use flashcards or an essay plan.</p>
          <p>Neither means choices have no causes or motives. A free act can have reasons; indeed reasons help make it intelligible. The issue is whether the person can own the judgement and choice rather than being externally forced.</p>`
        },
        {
          title: "2. Constitutive and instrumental freedom",
          priority: "must",
          html: `<p><strong>Constitutive freedom</strong> names a basic dimension of rational personal agency. <strong>Instrumental/effective freedom</strong> concerns actual capabilities and opportunities: education, health, legal protection, money and social access can expand or restrict what a person can really do.</p>
          <p>This distinction prevents two errors. Poverty or coercion does not erase personhood; yet saying “everyone is internally free” must not hide serious social barriers.</p>`,
          example: "Two students may both possess agency, but only one has electricity, time and a safe study space. Their effective opportunities are unequal."
        },
        {
          title: "3. Choice, moral and social freedom",
          priority: "must",
          html: `<p><strong>Choice freedom</strong> is the immediate capacity to select. <strong>Moral freedom</strong> is the developed ability to act well and not be ruled by destructive habits. <strong>Social freedom</strong> is a just public space in which people can pursue genuine goods while respecting others.</p>
          <p>On the course’s perfection-oriented view, freedom is not perfected by the sheer number of options. Addiction may involve repeated choices while reducing self-mastery. Commitment closes some options but can create deeper capacities — a musician’s disciplined practice enables freer performance.</p>`
        },
        {
          title: "4. Responsibility and obstacles",
          priority: "must",
          html: `<p>Responsibility tracks knowledge and voluntariness. Ignorance, fear, force, habit, severe psychological disturbance and social pressure can affect it differently. They do not all erase responsibility automatically.</p>
          <p>Ask: Did the person know what they were doing? Could they reasonably have known? Was consent present? How strong was coercion? Did earlier free choices build the habit? A careful judgement uses degrees rather than a lazy all-or-nothing answer.</p>
          <div class="memory-grid"><span><b>K</b>nowledge</span><span><b>C</b>onsent</span><span><b>C</b>ircumstances</span></div>`
        },
        {
          title: "5. Foreknowledge does not cause the act",
          priority: "useful",
          html: `<p>Knowing that an event occurs is not the same as causing it. If a teacher knows a habitual latecomer will arrive late, the teacher’s knowledge does not make the student late. The theological question of divine foreknowledge is harder because divine knowledge is not ordinary prediction, but the basic logical point remains: certainty in the knower is not automatically coercion in the agent.</p>
          <p>An exam answer should state the objection honestly: if an outcome cannot be otherwise, in what sense is it free? Then distinguish causal necessity, logical truth and the mode of knowledge rather than dismissing the concern.</p>`
        },
        {
          title: "6. Conscience: authoritative and formable",
          priority: "must",
          html: `<p><strong>Conscience</strong> is practical judgement applying moral knowledge to a particular act: “this is what I ought to do now”. It is not simply a feeling, preference or private permission slip.</p>
          <p>One should not deliberately act against a certain conscience, because that means choosing what one judges wrong. Yet conscience can err, so the person also has a duty to form it through truth, evidence, wise counsel, reflection and correction. Cormac Burke’s notes stress both authority and fallibility.</p>
          <aside class="sticky-insight"><strong>Memory sentence</strong><p>Follow conscience; do not worship your first opinion. Form it before, examine it after, correct it when truth demands.</p></aside>`
        },
        {
          title: "7. Freedom grows through truth and virtue",
          priority: "deep",
          html: `<p>Truth gives freedom direction; virtue gives it stable strength. If I misidentify what will fulfil me, choice can become self-defeating. If I repeatedly choose well, good action can become more ready, joyful and integrated.</p>
          <p>Commitment is therefore not necessarily freedom’s enemy. Promises in friendship, professional ethics and family life remove arbitrary options while expressing a chosen good across time. Freedom becomes authorship of a coherent life.</p>`
        }
      ],
      cases: [
        { title: "The pressured group assignment", prompt: "A group threatens to exclude a student unless they falsify data. Analyse freedom and responsibility.", answer: ["The student retains constitutive agency, but social pressure narrows effective freedom.", "Knowledge of falsity and the seriousness of the threat affect responsibility.", "The choice still concerns truth, justice to classmates and possible alternatives such as reporting the pressure.", "Do not simply say ‘free’ or ‘not free’; explain the degree and relevant circumstances."] },
        { title: "A mistaken conscience", prompt: "Someone sincerely believes copying homework is fair because ‘everyone shares’. Is sincerity enough?", answer: ["Sincerity explains the subjective judgement but does not make the act objectively right.", "Conscience can be mistaken and needs formation in truth and justice.", "The student should examine authorship, learning, rules and fairness.", "Culpability may depend on whether the ignorance was avoidable, but error still needs correction."] }
      ],
      recall: ["Exercise versus specification?", "Constitutive versus effective freedom?", "Choice versus moral freedom?", "Name three factors affecting responsibility.", "Why does foreknowledge not automatically cause?", "Why follow and form conscience?"],
      quiz: [
        { q: "Choosing between two subjects is freedom of…", options: ["Exercise", "Specification", "Biology", "Memory"], answer: 1, explain: "Specification selects which object or means; exercise is acting versus not acting." },
        { q: "Effective freedom concerns…", options: ["Basic personhood only", "Real opportunities and capabilities", "No limits", "Feelings alone"], answer: 1, explain: "Social and material conditions affect what a person can practically do." },
        { q: "A habit can…", options: ["Never affect responsibility", "Reduce ease of control while earlier choices may still matter", "Erase personhood", "Make every act free"], answer: 1, explain: "Responsibility needs a concrete, degree-sensitive analysis." },
        { q: "Conscience is best described as…", options: ["Any strong feeling", "Practical moral judgement about an act", "Public opinion", "Fear of punishment"], answer: 1, explain: "It applies moral knowledge to a particular choice." },
        { q: "On the course view, commitment can…", options: ["Only destroy freedom", "Express and deepen a freely chosen good", "Remove responsibility", "Make truth irrelevant"], answer: 1, explain: "Stable promises can make freedom coherent across time." }
      ]
    },
    {
      id: "human-sexuality",
      number: 10,
      navTitle: "Human sexuality",
      title: "Human sexuality: embodiment, relation and self-gift",
      minutes: 45,
      summary: "Study the course’s personalist account of sexuality while clearly separating philosophical reasoning, normative commitments and empirical claims.",
      question: "What changes when sexuality is understood as a dimension of a whole person rather than only a biological act?",
      catch: [
        "Sex refers especially to bodily differentiation; sexuality concerns the embodied person across biological, psychological, relational and social dimensions.",
        "The course’s personalist framework emphasises complementarity, reciprocal acceptance and free self-gift.",
        "A person must never be reduced to pleasure, function, stereotype or usefulness.",
        "State the course position accurately, then give its reason; do not present contested cultural or gender claims as neutral science."
      ],
      mnemonic: { letters: "BPRS", line: "Body, Psyche, Relation, Society.", meaning: "Use BPRS to remember that sexuality is treated across the whole person, not as anatomy alone." },
      sections: [
        {
          title: "1. Sex and sexuality",
          priority: "must",
          html: `<p>In the supplied course, <strong>sex</strong> names bodily differentiation and related acts, while <strong>sexuality</strong> is a dimension of the whole embodied person. It touches biological reality, self-understanding, attraction, relationships, family and society.</p>
          <p>This rejects reductionism. A biological account is necessary but not the whole personal meaning; a purely subjective account may ignore embodiment. PA asks how the dimensions form one human reality.</p>`
        },
        {
          title: "2. The four-part course structure",
          priority: "must",
          html: `<ol><li><strong>Sexual differentiation:</strong> bodily sex is meaningful within personal embodiment.</li><li><strong>Attraction and complementarity:</strong> difference can open a person toward another.</li><li><strong>Conjugal/family community:</strong> the material presents marriage and family as a stable communion.</li><li><strong>Free self-gift:</strong> personal union requires knowledge, consent, fidelity and concern for the other’s good.</li></ol>
          <p>These are connected claims in a Catholic/Thomistic personalist framework. In an exam, show the links instead of listing four headings.</p>`,
          examTip: "Use ‘the course argues’ for normative conclusions, then state the reason: bodily meaning, unity of the person, good of the other and common good."
        },
        {
          title: "3. Self-gift versus use",
          priority: "must",
          html: `<p>A gift must be free and accepted; coercion contradicts personal communion. Reciprocal self-gift treats the other as a person whose good matters, not as an instrument for pleasure, status or validation.</p>
          <p>Consent is necessary, but the course asks a further question: what kind of good is being chosen, and does the act truthfully express stable care for the whole person? This is where freedom, will, virtue and embodiment meet.</p>
          <aside class="sticky-insight"><strong>Personalist test</strong><p>Am I receiving a person or consuming an experience? Does this choice tell the truth, respect freedom and seek the other’s real good?</p></aside>`
        },
        {
          title: "4. Family and its ends",
          priority: "useful",
          html: `<p>The notes present three connected family ends: <strong>unitive</strong> communion of spouses, <strong>procreative</strong> openness to new life, and <strong>educative/nurturing</strong> care through which children are introduced to human and social life.</p>
          <p>Family is treated not merely as a private feeling but as a natural social reality with responsibilities. Later, subsidiarity explains why larger institutions should support rather than absorb functions families and smaller communities can fulfil.</p>`
        },
        {
          title: "5. How to handle disputed claims",
          priority: "must",
          html: `<p>The supplied slides contain broad claims about men, women, cultures and animals. Many are stereotypes or empirically contestable. Learn the lecturer’s conceptual framework without repeating weak generalisations as facts.</p>
          <p>A strong answer separates levels: biological evidence; lived psychological diversity; the course’s philosophical interpretation; its moral conclusion; and a reasoned objection or qualification where asked. Respectful language is essential because the topic concerns real persons, not abstract categories.</p>
          <aside class="accuracy-note"><strong>Do not write</strong><p>“All men are…” or “all women naturally…” unless analysing and criticising such a claim. Universal empirical claims need strong evidence.</p></aside>`
        },
        {
          title: "6. Integration through intellect and will",
          priority: "deep",
          html: `<p>Integration means bodily desire, emotion, reason, freedom and commitment increasingly form one truthful pattern. It does not mean denying attraction. Intellect seeks what is really good; will chooses and sustains it; virtues make respect and self-mastery more stable.</p>
          <p>Because sexuality is personal and relational, actions affect identity, expectations and communities. The course therefore locates sexual ethics inside the wider questions of dignity, love, freedom, responsibility and destiny.</p>`
        }
      ],
      cases: [
        { title: "Consent and the whole good", prompt: "Two people consent, but one deliberately lies about an important commitment. Analyse using the course framework.", answer: ["Consent is necessary, so coercion would already invalidate self-gift.", "Deception prevents fully informed reciprocal acceptance.", "Using another’s consent through a false picture treats the person instrumentally.", "A personalist account asks for truth, freedom, the whole good and responsibility together."] },
        { title: "A stereotype in an essay", prompt: "A source says all women are emotional and all men are rational. How should you handle it?", answer: ["Identify it as an overgeneralised empirical claim, not a demonstrated metaphysical principle.", "Distinguish bodily difference from rigid personality prediction.", "State the course’s unity/personal dignity claims without reproducing the stereotype.", "If relevant, note wide individual and cultural variation and ask for evidence."] }
      ],
      recall: ["Sex versus sexuality?", "Expand BPRS.", "State the four-part structure.", "Self-gift versus use?", "Name three family ends.", "How do you label a normative course position?"],
      quiz: [
        { q: "The course treats sexuality as…", options: ["Only anatomy", "A dimension of the whole embodied person", "Only emotion", "A private product"], answer: 1, explain: "Biological, psychological, relational and social dimensions are integrated." },
        { q: "Which most directly contradicts self-gift?", options: ["Truthful consent", "Treating the other as a tool", "Responsibility", "Reciprocal care"], answer: 1, explain: "Instrumental use ignores personal dignity and the other’s whole good." },
        { q: "Consent is…", options: ["Unnecessary", "Necessary but, in this framework, not the only moral question", "Identical to attraction", "Always permanent"], answer: 1, explain: "The account also asks about truth, good, responsibility and personal meaning." },
        { q: "The family ends in the notes are…", options: ["Pleasure, money, fame", "Unitive, procreative, educative/nurturing", "Political, economic, artistic", "Private, public, digital"], answer: 1, explain: "These ends link spouses, new life and formation." },
        { q: "The best way to use disputed gender claims is to…", options: ["Repeat them as universal fact", "Ignore the whole topic", "Label, examine evidence and avoid stereotypes", "Mock them"], answer: 2, explain: "Accurate study separates philosophical positions from unsupported empirical generalisations." }
      ]
    },
    {
      id: "work-relations",
      number: 11,
      navTitle: "Work & relations",
      title: "Human relations, society, culture and work",
      minutes: 58,
      summary: "See why persons flourish with others, how family and society differ, and why work has objective, subjective, social and transcendent meanings.",
      question: "Is society only a contract between useful individuals, or an expression of persons who already need and give to one another?",
      catch: [
        "The person is relational but is not merely a replaceable part of society.",
        "FIP: Family, Intermediate associations, Political community.",
        "Solidarity says ‘your good concerns us’; subsidiarity says ‘help without taking over’. Both are needed.",
        "Work makes something, shapes the worker, serves society and can carry meaning or vocation; its ecological impact is an added ethical test."
      ],
      mnemonic: { letters: "FIP + EHSP", line: "Family, Intermediate, Political — Expressive, Historical, Symbolic, Productive.", meaning: "FIP maps social levels; EHSP maps dimensions of culture." },
      sections: [
        {
          title: "1. A person is relational, not absorbable",
          priority: "must",
          html: `<p>Humans develop through language, care, friendship, education and cooperation. Calling the human a <em>zoon politikon</em> means social life is not an optional extra added to a finished isolated self.</p>
          <p>Yet the person is not only a social function. Sellés stresses personal coexistence: someone can give, receive and answer another beyond usefulness. Society should serve personal flourishing; it cannot own persons as parts of a machine.</p>
          <div class="contrast"><div><strong>Individualism</strong><p>Society is merely external to self-sufficient individuals.</p></div><div><strong>Collectivism</strong><p>The individual is swallowed by the whole.</p></div></div>
          <p>The course seeks a relational personalism that rejects both reductions.</p>`
        },
        {
          title: "2. Natural and artificial societies",
          priority: "must",
          html: `<p>A <strong>natural society</strong> answers a durable human relation grounded in human life itself; the course gives family and political community central places. An <strong>artificial/voluntary association</strong> is formed for a chosen limited purpose, such as a coding club or company.</p>
          <p><strong>FIP</strong> gives scale: Family first; Intermediate societies such as schools, churches, clubs and firms; Political community coordinating common life. “Natural” does not mean every historical arrangement is automatically just.</p>`,
          examTip: "Define, distinguish, then give one example and purpose for each level."
        },
        {
          title: "3. Common good, solidarity and subsidiarity",
          priority: "must",
          html: `<p>The <strong>common good</strong> is the set of shared conditions and goods through which persons and communities can flourish together. It is not merely the sum of private satisfactions, nor a collective benefit used to crush minorities.</p>
          <p><strong>Solidarity</strong> recognises interdependence and takes responsibility for others’ good. <strong>Subsidiarity</strong> says higher bodies should support lower communities when needed but not seize tasks they can responsibly perform. Solidarity without subsidiarity can become controlling; subsidiarity without solidarity can become abandonment.</p>`
        },
        {
          title: "4. Justice and the social bond",
          priority: "must",
          html: `<p><strong>Commutative justice</strong> regulates exchanges between persons. <strong>Distributive justice</strong> concerns how a community allocates benefits and burdens. <strong>Legal/general justice</strong> concerns what members owe the common good.</p>
          <p>Laws and institutions matter, but Sellés argues that shared goods, money, power or information cannot be society’s deepest bond. Ethics — trustworthy action ordered toward human good — makes cooperation sustainable. Family friendship and love are deeper than mere contractual fairness.</p>
          <aside class="sticky-insight"><strong>Essay line</strong><p>Justice gives each their due; friendship makes another’s good partly one’s own.</p></aside>`
        },
        {
          title: "5. Culture and communication",
          priority: "useful",
          html: `<p>Culture can mean learned interior formation and the shared customs, techniques, symbols and values of a people. Its dimensions are <strong>Expressive</strong> (manifesting interior life), <strong>Historical</strong> (received and handed on), <strong>Symbolic</strong> (carrying meaning) and <strong>Productive</strong> (transforming the environment).</p>
          <p>Language builds shared understanding only when joined to veracity. Manipulation, propaganda and careless reposting use communication while damaging communion.</p>
          <div class="memory-grid four"><span><b>E</b>xpressive</span><span><b>H</b>istorical</span><span><b>S</b>ymbolic</span><span><b>P</b>roductive</span></div>`
        },
        {
          title: "6. Four meanings of work",
          priority: "must",
          html: `<p><strong>Objective:</strong> what is produced or changed. <strong>Subjective:</strong> how work develops or damages the worker. <strong>Social:</strong> how work serves others and contributes to a common world. <strong>Transcendent:</strong> the deeper meaning, service or vocation through which work can point beyond mere output.</p>
          <p><strong>Ecological impact is a further ethical check:</strong> what does this work do to the material world shared with future people? Just remuneration respects both product and worker. Technology can extend human agency, but <strong>technocracy</strong> mistakes technical efficiency for the complete measure of good. The question is never only “Can we?” but “What human good does this serve, for whom, and at what cost?”</p>`
        },
        {
          title: "7. Leisure is not uselessness",
          priority: "deep",
          html: `<p>Leisure makes room for contemplation, celebration, play, friendship and worship — activities not valued only by output. Rest restores work, but its dignity is not limited to making workers productive again.</p>
          <p>A life in which every minute must be monetised treats the person as a production unit. A life with no committed work also misses service and self-development. Healthy rhythm holds work and leisure together.</p>`
        }
      ],
      cases: [
        { title: "The university takes over", prompt: "A university decides every student-club activity because it can organise more efficiently. Apply solidarity and subsidiarity.", answer: ["Solidarity supports safety, resources and inclusion.", "Subsidiarity protects the club’s real competence and initiative.", "The higher body should intervene only to the degree needed for goods the lower group cannot secure alone.", "Efficiency alone is not the complete measure; participation and responsibility also matter."] },
        { title: "The perfect productivity app", prompt: "A company monitors every worker keystroke and raises output. Evaluate the work model.", answer: ["Objective output may increase.", "Subjective effects may include anxiety, loss of trust or reduced development.", "Social questions include consent, privacy, justice and power.", "A technocratic judgement treats measurable efficiency as the whole good; PA asks about persons, meaning and common good."] }
      ],
      recall: ["Why is a person relational but not absorbable?", "Expand FIP.", "Common good versus sum of preferences?", "Solidarity versus subsidiarity?", "Name three forms of justice.", "Expand EHSP.", "Give four meanings of work."],
      quiz: [
        { q: "Subsidiarity says higher bodies should…", options: ["Always take over", "Support lower groups without needlessly absorbing their tasks", "Avoid all help", "Seek profit only"], answer: 1, explain: "It preserves initiative while allowing needed assistance." },
        { q: "Distributive justice concerns…", options: ["Private exchanges only", "Allocation of communal benefits and burdens", "Memory", "Friendship alone"], answer: 1, explain: "Commutative justice focuses more directly on exchange between parties." },
        { q: "The subjective meaning of work concerns…", options: ["Only the product", "What work does to the worker", "Only wages", "Only the environment"], answer: 1, explain: "Work can form skills and character or damage the working subject." },
        { q: "Technocracy reduces decisions to…", options: ["Personal dignity", "Technical efficiency/control", "Leisure", "Friendship"], answer: 1, explain: "Technical possibility must be judged by wider human goods." },
        { q: "EHSP recalls culture as…", options: ["Emotional, hidden, silent, private", "Expressive, historical, symbolic, productive", "Equal, human, social, political", "Economic, heroic, stable, popular"], answer: 1, explain: "These dimensions show how culture expresses, inherits, signifies and makes." }
      ]
    },
    {
      id: "human-destiny",
      number: 12,
      navTitle: "Human destiny",
      title: "Human destiny: time, meaning, death, reason and hope",
      minutes: 54,
      summary: "Bring the course together through temporality, meaning, mortality and the careful boundary between philosophical argument and theological revelation.",
      question: "What kind of end can make a whole human life intelligible?",
      catch: [
        "Memory carries a lived past, action inhabits the present and hope opens a future; human life is biographical, not only chronological.",
        "Meaning is discovered through goods, relationships, work, suffering faced truthfully and self-transcendence — not simply invented by mood.",
        "The course offers philosophical arguments about immortality and a creator; state premises and objections, not only conclusions.",
        "Reason can argue from shared experience; faith receives revelation. They may relate, but they are not interchangeable methods."
      ],
      mnemonic: { letters: "MHD-RF", line: "Memory, Hope, Death — Reason meets Faith.", meaning: "Use this route to structure a destiny essay from human time to ultimate questions." },
      sections: [
        {
          title: "1. Human time is lived as a story",
          priority: "must",
          html: `<p>Clock time measures succession; lived time has meaning. <strong>Memory</strong> makes a past personally present, present action gathers earlier commitments, and <strong>hope</strong> reaches toward a future good. Because persons promise and plan, future possibilities can shape today.</p>
          <p>A human biography is more than a timeline of events. Choices create continuity or fragmentation: today’s action can honour or betray who I have committed to become.</p>`,
          example: "Revision now is intelligible through a future exam and a longer project of becoming competent; the future good acts as a present motive."
        },
        {
          title: "2. Meaning and self-transcendence",
          priority: "must",
          html: `<p>Viktor Frankl’s work is useful here: people often find meaning through creating or serving, loving/encountering another, and choosing a stance toward unavoidable suffering. This does not romanticise preventable suffering or claim attitude solves injustice.</p>
          <p><strong>Self-transcendence</strong> means reaching beyond immediate self-enclosure toward truth, another person or a worthwhile task. Happiness often arrives as a result of meaningful engagement rather than a sensation directly hunted.</p>
          <aside class="sticky-insight"><strong>Meaning check</strong><p>What good is worth this effort? Whom does it serve? What kind of person does the response form?</p></aside>`
        },
        {
          title: "3. Death as biological event and personal limit",
          priority: "must",
          html: `<p>Death ends the organism’s integrated bodily life and confronts a person with finitude. Anticipating death can produce fear, denial or urgency, but also clarify priorities and the value of time.</p>
          <p>In hylomorphism, death is separation of body and soul and therefore a rupture, not the natural perfection of the complete person. The philosophical survival argument rests on the soul material covered earlier; it should not be smuggled in as an unexplained assumption.</p>`
        },
        {
          title: "4. Arguments toward a creator",
          priority: "useful",
          html: `<p>The supplied notes use lines from contingency, degrees of perfection, purpose/order and morality. A serious argument must state its bridge: contingent beings require an adequate explanation; intelligible order invites a cause; objective moral obligation may point beyond preference.</p>
          <p>Objections ask whether the universe needs an external explanation, whether evolution explains apparent design, and whether moral realism entails God. Give the objection before the reply.</p>
          <aside class="accuracy-note"><strong>Name check</strong><p>The list in the Chapter 10 notes is not Aquinas’s canonical Five Ways: it omits his motion and efficient-cause formulations and adds a moral argument. Call it “course arguments toward a creator”, unless you accurately present the historical Five Ways.</p></aside>`
        },
        {
          title: "5. Faith and reason",
          priority: "must",
          html: `<p><strong>Reason</strong> works from experience and intelligible principles toward conclusions open to rational discussion. <strong>Faith</strong>, in the theological meaning used by the course, assents to divine revelation on God’s authority. Faith is not simply a guess; reason is not limited to laboratory measurement.</p>
          <p>They can concern overlapping realities under different formal aspects. A claimed revelation cannot make a contradiction true; reason can examine credibility and interpretive coherence. Theology begins from revealed premises, while philosophy does not use revelation as its formal starting point.</p>
          <div class="contrast"><div><strong>Philosophy</strong><p>Shared rational premises and ultimate natural causes.</p></div><div><strong>Theology</strong><p>Revealed premises understood through reason.</p></div></div>`
        },
        {
          title: "6. Immortality, resurrection and final fulfilment",
          priority: "must",
          html: `<p><strong>Immortality</strong> in the philosophical argument is continued existence of the subsistent rational soul. <strong>Resurrection</strong> is a theological claim about restored embodied life. They are not synonyms.</p>
          <p>The course connects final fulfilment with truth, goodness, beauty, love and relation to God. In an exam, distinguish what philosophy concludes, what remains an argument rather than demonstration accepted by all, and what the religious tradition holds by faith.</p>`,
          examTip: "The sentence ‘philosophy proves resurrection’ loses the key distinction. Philosophy argues; theology receives and develops the revealed claim."
        },
        {
          title: "7. The whole-course answer",
          priority: "deep",
          html: `<p>The course began with “Who am I?” Its integrated answer is: an embodied living person, one body–soul unity, capable of sensing, understanding truth, willing good, freely forming character, giving and receiving in society, working, loving and directing life toward an ultimate end.</p>
          <p>That answer is not a slogan. Every phrase depends on an earlier argument. Final revision should practise rebuilding those links: life → powers → intellect/will → freedom → relation/work → destiny.</p>`
        }
      ],
      cases: [
        { title: "Success without meaning", prompt: "A graduate has money and status but says life feels empty. Analyse without dismissing either material needs or meaning.", answer: ["Material security is a genuine good and should not be trivialised.", "Limited goods may not organise a whole life or answer ‘for what/for whom?’.", "Self-transcendent goods such as truth, service, relationship and worthwhile work can give direction.", "The response should also allow psychological support; philosophical meaning is not a substitute for healthcare."] },
        { title: "Reason versus faith", prompt: "Someone writes: ‘Immortality is true because my religion says so; therefore PA has proved it.’ Correct the answer.", answer: ["The conclusion may be held in faith, but the stated reason is theological, not a philosophical demonstration.", "A PA answer must present premises about intellectual operation, immateriality and subsistence.", "It should name objections and the conditional path to incorruptibility.", "Resurrection remains a distinct revealed claim."] }
      ],
      recall: ["Chronological versus lived time?", "What is self-transcendence?", "State one meaning route in Frankl.", "Give one creator argument and objection.", "Reason versus faith?", "Immortality versus resurrection?", "Give the whole-course answer to ‘Who am I?’"],
      quiz: [
        { q: "Human hope affects the present because…", options: ["The future already happened", "A future good can motivate current action", "Memory disappears", "Time is unreal"], answer: 1, explain: "Personal life is projective: anticipated ends organise present choices." },
        { q: "Self-transcendence means…", options: ["Ignoring yourself entirely", "Reaching toward truth, persons or worthwhile goods beyond immediate self-enclosure", "Escaping the body", "Feeling pleasure"], answer: 1, explain: "It directs the self toward realities worth commitment." },
        { q: "The course’s Chapter 10 list should be called…", options: ["Exactly Aquinas’s Five Ways", "Course arguments toward a creator", "Scientific proofs", "No arguments"], answer: 1, explain: "Its set differs from the historical canonical Five Ways." },
        { q: "Theology formally begins from…", options: ["Revealed premises", "Only experiments", "No reasoning", "Public opinion"], answer: 0, explain: "It uses reason but takes revelation as a starting source." },
        { q: "Resurrection differs from philosophical immortality because it…", options: ["Means the same thing", "Is a revealed claim about restored embodied life", "Rejects embodiment", "Is a memory test"], answer: 1, explain: "Survival of soul and restoration of embodied person are distinct claims." }
      ]
    },
  ];

  /* Extra source-audit blocks. These teach the specialised terms that appear in
     the supplied handouts before asking the learner to retrieve or apply them. */
  const sourceCoverageExpansions = {
    "introduction-being": [
      {
        title: "7. Four approaches and eight critical-thinking checks",
        priority: "useful",
        html: `<p>The course can approach the human person through several connected lenses. A <strong>metaphysical</strong> approach asks what kind of being a person is. A <strong>cultural</strong> approach studies human meaning as expressed in language, customs and institutions. A <strong>transcendental</strong> approach starts from basic human acts such as knowing and choosing and asks what must be true for them to be possible. A <strong>religious</strong> approach considers the person in relation to God and revelation. PA must state which lens and premises it is using instead of quietly mixing them.</p>
        <p>Its method moves in both directions. <strong>Analytical–inductive</strong> reasoning begins with lived experience and searches for its principles; <strong>synthetical–deductive</strong> reasoning begins with established principles and uses them to interpret human phenomena. PA rests on metaphysics, grounds much of ethics, learns from psychology and social science, and remains open to theology without borrowing revealed premises for a purely philosophical proof.</p>
        <p>For a difficult claim, run eight checks: <strong>question, purpose, concepts, assumptions, evidence, arguments, perspectives and implications</strong>. Ask what is being answered, why, what the key words mean, what is being taken for granted, what supports it, whether the conclusion follows, what another view would notice and what accepting the claim would imply.</p>
        <aside class="sticky-insight"><strong>Fast exam use</strong><p>When you meet a bold statement, do not begin with “I agree”. First clarify it, uncover its assumption and test its reason.</p></aside>`,
        example: "Claim: ‘A person is only a brain.’ Clarify ‘only’, ask whether neural dependence proves identity, consider lived embodiment and meaning, then state what would follow for dignity and responsibility."
      },
      {
        title: "8. The course's historical anthropology map",
        priority: "deep",
        html: `<p>One supplied history text organises periods by a dominant “anthropological key”: <strong>Ancient—having</strong>; <strong>Christianity—person</strong>; <strong>Middle Ages—being</strong>; <strong>late medieval/Humanist/Renaissance—practical acting</strong>; <strong>Modern—rational acting</strong>; <strong>Contemporary—voluntary acting</strong>; and recent currents—<strong>productive acting</strong>. This is a study map, not a claim that every thinker in a century said one thing.</p>
        <p>The same source contrasts <strong>myth</strong> as inherited practical interpretation, <strong>magic</strong> as attempted control of an uncertain future, <strong>technique</strong> as practical transformation of the present, and <strong>philosophy</strong> as theoretical inquiry pursued for understanding. Its Greek “having” theme rises from possessions and language to ideas, virtues and intellectual habits.</p>
        <aside class="accuracy-note"><strong>Use critically</strong><p>The map is Sellés' course interpretation. In an essay, explain its organising idea and one limitation instead of treating period labels as complete historical facts.</p></aside>`
      }
    ],
    "life-levels": [
      {
        title: "7. First act, powers and living operations",
        priority: "useful",
        html: `<p>The notes distinguish three levels that are easy to collapse. <strong>First act</strong> is the organism's being alive through its life-principle. A <strong>power</strong> is a stable capacity belonging to that living subject. A <strong>second act</strong> or operation is the power being exercised. Thus a sleeping person remains alive and retains sight even while not actually seeing.</p>
        <p>Life is therefore not a loose collection of processes. Respiration, circulation and excretion serve the organism; the classical primary vegetative powers are <strong>nutrition, growth and reproduction</strong>. The whole organism coordinates its parts, assimilates what is outside and acts from within while still depending on an environment.</p>
        <div class="contrast"><div><strong>Power</strong><p>A capacity that remains when not in use: sight.</p></div><div><strong>Operation</strong><p>The capacity in act: actually seeing this page.</p></div></div>`,
        examTip: "If asked to define life, do not merely list respiration or movement. Explain the intrinsic living principle and then use operations as signs."
      },
      {
        title: "8. Four signs, five signs — and a fuller map of life",
        priority: "must",
        html: `<p>The supplied files use two versions. The older chapter lists four signs remembered here as <strong>URIS</strong>: unity, rhythm, immanence and self-movement. The later <em>PA 2. Life</em> deck explicitly lists <strong>five</strong>: self-motion, immanence, unity, <strong>self-development/self-realisation</strong> and cyclic rhythm. Write <strong>URIS + D</strong> when the question follows that deck. Self-development means actualising capacities toward a living fulfilment or <em>telos</em>; in humans this can include intellectual, moral, social and spiritual growth.</p>
        <p>Lombo and Russo offer a second map: <strong>structural</strong> features are unity and organicity; <strong>dynamic</strong> features are self-movement and adaptation; fundamental directions are <strong>immanence and transcendence</strong>. An immanent act perfects the acting subject, as understanding perfects the knower. A transient action primarily changes an external patient, as cutting changes wood. Living activity can include both.</p>
        <p>Movement also has kinds: generation/corruption concerns coming-to-be or ceasing to be; growth and nutrition change the organism from within; locomotion changes place; voluntary movement proceeds through knowledge and appetite. A plant adjusts growth toward light, an animal learns routes, and a person can transform themselves through reasons and chosen ends.</p>`,
        examTip: "If the paper asks for ‘five characteristics’, include self-development. If it uses the older chapter's four, name URIS and briefly note the expanded deck."
      }
    ],
    "human-person": [
      {
        title: "7. Suppositum, self-conscious unity and emergence",
        priority: "deep",
        html: `<p>A <strong>suppositum</strong> is the concrete individual that exists and acts: not “humanity in general”, but this person. The same subject can truthfully say “I am hungry”, “I see” and “I understand”. This unity of self-consciousness supports the claim that vegetative, sensitive and rational acts belong to one agent rather than three occupants.</p>
        <p><strong>Somaticity</strong> names the person's bodily condition; <strong>spirituality</strong> names capacities such as universal understanding and free self-direction that the course argues cannot be reduced to matter alone. <strong>Emergence</strong> can describe higher operations appearing on a bodily basis, but the word by itself does not explain whether those operations are fully reducible to that basis. An argument is still required.</p>
        <p>The body's face, speech and hands are especially expressive: they reveal a subject who can address another, communicate meanings and transform the world. Bodily dependence and rational transcendence are therefore features of the same person.</p>`
      },
      {
        title: "8. Two course maps: SRSTE and the three levels of the person",
        priority: "must",
        html: `<p><strong>SRSTE</strong> gathers five characteristics from the Human Life file: <strong>Spirituality</strong> (an immaterial form/power in the course account), <strong>Rationality</strong> (knowing and choosing through reasons), <strong>Somaticity</strong> (body and soul affect one lived subject), <strong>Transcendence</strong> (acts such as knowing, loving and worship reaching beyond immediate material need), and <strong>Emergence</strong> (interior rational life becoming outwardly expressed, especially through language and action).</p>
        <p>A different handout speaks of <strong>natural, essential and personal levels</strong>. “Natural” names received organic and sensitive endowments; “essential” names intellect, will, free acts and acquired virtues through which a shared human nature is developed; “personal” names the irreducible, unique source who knows, loves and gives. Corresponding goods can be bodily, intellectual/moral, relational and personal.</p>
        <aside class="course-position"><strong>Terminology warning</strong><p>These are technical uses from that handout. “Essential” here does not mean that only high achievers possess a human essence, and “personal” does not remove the body.</p></aside>`
      },
      {
        title: "9. Why the unity is substantial, not a team of parts",
        priority: "deep",
        html: `<p><strong>Propriosensation</strong> or bodily self-awareness presents my body as mine from within. Common-sense awareness also unifies seeing, hearing and feeling: the same “I” recognises that I see the person whose voice I hear. Reflex awareness and pursuit of a concrete good-for-me again reveal one acting subject across changing states.</p>
        <p>An <strong>accidental unity</strong>, like a football team, is made of already complete members joined for an activity. A living organism is a <strong>substantial or per-se unity</strong>: parts such as tissues act primarily as parts of this whole and cease to function fully when separated. They are <strong>virtually present</strong>—retaining their lower properties inside a higher organised unity—rather than existing as independent substances glued together.</p>
        <p>From this the supplied Unity files describe the living being as one <strong>suppositum</strong>. Personhood adds that this subject is inalienable, unrepeatable, not a mere part, autonomous in action and intentionally open to relation. Completeness-in-self does not mean lonely self-sufficiency.</p>`
      }
    ],
    "senses-memory": [
      {
        title: "7. Instinct, learning and embodied intelligence",
        priority: "deep",
        html: `<p>Animal behaviour can combine inherited patterns with genuine learning. Human action also includes instinctive and learned tendencies, but rational persons can formulate an end, compare means, make the end their own and revise a plan for reasons. Flexible behaviour by itself is not enough to prove conceptual thought; ask what kind of object the agent knows and whether it understands a universal meaning.</p>
        <p>Human intelligence remains embodied. Upright posture frees the hands for varied tools; the face and voice express interior states; language gives public signs to meanings. These bodily conditions enable intellectual life without making a concept identical to its sound, written mark or neural condition.</p>
        <aside class="accuracy-note"><strong>Avoid the old trap</strong><p>“Animals use only instinct” and “humans use only reason” are both too crude. Compare powers and objects of knowledge, not stereotypes.</p></aside>`
      },
      {
        title: "8. The formal architecture of sensitive knowing",
        priority: "must",
        html: `<p>The classical account describes knowing as the <strong>intentional or immaterial possession of a form</strong>: the apple's colour becomes present to sight without the eye becoming a red apple. Natural being is the form as it exists in the thing; intentional being is that form as known.</p>
        <p>A <strong>proper sensible</strong> belongs especially to one sense, such as colour to sight. A <strong>common sensible</strong>, such as motion, number, size or shape, is available through several senses. A <strong>per-accidens sensible</strong> is recognised through more than the immediate sense quality: sight receives white and shape, while experience and inner senses recognise “my lecturer” or “this is Kamau's car”.</p>
        <p>The inner senses can be grouped as <strong>formal/presentational</strong>—common sense unifies current sense data and imagination retains or composes images—and <strong>intentional/evaluative</strong>—estimative or cogitative power grasps concrete usefulness/harm and memory retains experienced intentions. Sensitive memory holds past concrete experiences; intellectual memory concerns meanings, judgements and chosen commitments.</p>
        <p>Imagination serves <strong>oniric</strong> activity in dreams, <strong>aesthetic/artistic</strong> creation, <strong>practical</strong> rehearsal of action and <strong>speculative</strong> modelling. Sensation belongs to the living composite, not to a detached soul or a corpse's organ.</p>`
      }
    ],
    "affectivity-character": [
      {
        title: "7. Emotional intelligence and moral formation",
        priority: "useful",
        html: `<p><strong>Emotional intelligence</strong> is not simply being pleasant or strongly emotional. It includes identifying what is felt, reflecting on its object and cause, monitoring its intensity and pattern, and managing expression so that emotion can cooperate with truth and worthwhile action. The site's <strong>IED</strong> routine—Identify, Evaluate, Direct—is the short version.</p>
        <p>Emotion supplies energy and information, but it can misread a situation. Reason should neither obey every feeling nor crush it. Repeated truthful choices educate the appetites into virtues; repeated surrender to a distorted response can form a vice. Responsibility concerns what a person notices, consents to, cultivates and does—not the mere arrival of an unchosen first feeling.</p>`
      },
      {
        title: "8. From appetite to expression — and three common errors",
        priority: "must",
        html: `<p><strong>Natural appetite</strong> is an inclination not produced by knowing, such as a physical tendency toward a natural state. <strong>Elicited appetite</strong> follows a known object: sensitive appetite responds to a perceived particular good or harm, while rational appetite or will follows good as understood.</p>
        <p>A useful affective sequence is <strong>object/stimulus → mental agitation or appraisal → organic alteration → behaviour/expression</strong>. Imagine noticing a hand near your bag, interpreting danger, feeling pulse and muscle tension, then turning, calling out or stepping away. In humans, intellect can reassess the object and will can redirect the final response. Affectivity evaluates quickly, reinforces convictions and breaks indifference, but can also mislead.</p>
        <p>The handouts distinguish overlapping words: a <strong>sentiment</strong> is an enduring sensitive–mental way of feeling; an <strong>emotion</strong> is a more intense episode with bodily change; an <strong>affection</strong> is an affective relation especially toward persons; a <strong>passion</strong> is a strong movement of sensitive appetite; pleasure, pain and sorrow name different felt responses to perceived good or evil.</p>
        <p>Three reductions fail: <strong>behaviourism</strong> treats outward response as the whole person; a rigid <strong>Kantian opposition</strong> treats emotion as necessarily hostile to morality; <strong>sentimentalism</strong> treats feeling as the final test of truth or goodness. The integrated view asks feelings, reason and will to cooperate.</p>`
      },
      {
        title: "9. The eight-type character grid in the supplied slide",
        priority: "deep",
        html: `<p>The historical course typology crosses three axes: <strong>emotiveness/non-emotiveness</strong>, <strong>activity/non-activity</strong>, and <strong>primary/secondary resonance</strong>. Primary resonance reacts quickly and lets go sooner; secondary resonance reacts more slowly and retains an impression longer.</p>
        <p>Its eight combinations are: emotive–non-active–primary <strong>nervous</strong>; emotive–non-active–secondary <strong>sentimental</strong>; emotive–active–primary <strong>choleric</strong>; emotive–active–secondary <strong>passionate</strong>; non-emotive–active–primary <strong>sanguine</strong>; non-emotive–active–secondary <strong>phlegmatic</strong>; non-emotive–non-active–primary <strong>amorphous</strong>; non-emotive–non-active–secondary <strong>apathetic</strong>.</p>
        <aside class="accuracy-note"><strong>Study, do not diagnose</strong><p>This is the model used in the supplied slide, not a scientifically decisive personality test. Use it to answer a source-specific classification question, never to box a real person, predict an occupation or excuse conduct.</p></aside>`
      }
    ],
    "human-soul": [
      {
        title: "7. Created, spiritual and immortal: label each step",
        priority: "deep",
        html: `<p>The supplied soul handouts gather three connected conclusions: the rational soul is <strong>spiritual</strong> because intellectual knowing is argued to have an immaterial mode; it is <strong>subsistent</strong> because such operation is attributed to a principle not exhausted by an organ; and it is <strong>incorruptible</strong> if it has no material parts whose separation would destroy it. This is the course's philosophical chain, not a claim that every mental act ignores the brain.</p>
        <p>The further claim that each soul is <strong>created</strong> requires an account of causality: matter cannot be the complete productive cause of an immaterial principle, so the course points to a transcendent cause. A moral argument—unfulfilled justice appears to call for a life beyond death—can support hope, but desire for justice alone is not a strict proof.</p>
        <aside class="course-position"><strong>Precision</strong><p>Distinguish a conclusion, the premises offered for it, and an objection. “Invisible” never means “therefore immortal”.</p></aside>`
      }
    ],
    "intellect-truth": [
      {
        title: "7. Intellectual habits, error and competing truth claims",
        priority: "useful",
        html: `<p>An <strong>intellectual habit</strong> is a stable perfection of knowing formed through repeated acts: understanding principles, scientific knowledge, wisdom and practical judgement are not isolated flashes. Study should therefore train accurate acts of definition, judgement and reasoning until they become dependable.</p>
        <p>The course files name several routes into error. <strong>Individual subjectivism</strong> makes the private subject the measure of truth; <strong>social constructivism</strong>, in its strongest form, makes social agreement the whole maker of truth; <strong>structuralism</strong>, when totalised, lets impersonal systems exhaust meaning; and <strong>immanentism</strong> traps knowledge inside consciousness. These labels describe the lecturer's critical map; actual thinkers hold more nuanced versions.</p>
        <p>Objectivity does not require a view from nowhere or an infallible knower. It requires that judgement answer to reality, evidence and valid inference—and remain open to correction when they show an error.</p>`
      }
    ],
    "will-human-acts": [
      {
        title: "7. Two modes of willing and the full act sequence",
        priority: "must",
        html: `<p><strong>Voluntas ut natura</strong> is the will's natural orientation toward good and fulfilment in general; we do not deliberate about whether good as such is desirable. <strong>Voluntas ut ratio</strong> is elective willing: faced with limited goods and possible means, the person judges and chooses this option rather than another. The first gives the horizon; the second explains particular free choices.</p>
        <p>A detailed deliberate act can be mapped as: <strong>simple volition</strong> of an end → <strong>intention</strong> of pursuing it → <strong>counsel/consilium</strong> about means → <strong>practical judgement</strong> → <strong>consent and election</strong> of a means → <strong>command</strong> → bodily or mental <strong>execution</strong> → <strong>fruition/repose</strong> in the attained good. Real decisions can move back and forth, but the map reveals where knowledge, consent or action failed.</p>
        <p>A <strong>human act</strong> proceeds with relevant knowledge and voluntariness and can carry moral responsibility. An <strong>act of a human</strong>, such as a knee reflex or an act done without awareness, occurs in a human but is not chosen in the same way.</p>`,
        examTip: "For a case, do not merely recite the sequence. Point to the exact stage affected by ignorance, fear, habit or coercion."
      }
    ],
    "human-freedom": [
      {
        title: "8. What freedom is not — and three kinds of necessity",
        priority: "must",
        html: `<p><strong>Physical indetermination</strong> is mere lack of a fixed physical outcome; <strong>chance</strong> is an unintended intersection of causes; <strong>vital spontaneity</strong> is acting from an inner impulse. None is yet rational freedom. Freedom requires an understood object and self-owned willing: it is rooted in intellect's presentation of goods and is exercised subjectively through will.</p>
        <p>Not every necessity destroys freedom. <strong>Necessity of nature</strong> describes what follows from what a thing is; <strong>necessity of an end or means</strong> appears when a chosen end requires some condition; <strong>external coercive necessity</strong> forces an act against the agent's will. It is coercion, not every necessity, that directly opposes voluntariness.</p>
        <p>Freedom <em>from</em> obstacles creates room; freedom <em>for</em> truth, service and self-gift gives that room a worthy direction. The course's growth line is <strong>availability → service → self-gift</strong>.</p>`
      },
      {
        title: "9. Intentionality, self-determination and conscience duties",
        priority: "useful",
        html: `<p>Every deliberate act has two directions. <strong>Intentionality</strong> reaches the chosen object and hoped-for result. <strong>Self-determination</strong> returns to the agent: by choosing, I also shape the kind of chooser I am becoming. This is why a successful outward result can still form a dishonest character.</p>
        <p>Conscience does not create truth; it applies a moral judgement to this act. Duties <strong>of</strong> conscience include seeking relevant truth, resolving reasonable doubt and forming judgement well. Duties <strong>toward</strong> conscience include following a certain judgement rather than knowingly choosing what one believes evil. <strong>Synderesis</strong> names the basic practical grasp that good is to be done and evil avoided.</p>
        <p>Family, culture, law, habits and repeated choices can form or deform conscience. A poll cannot take over personal responsibility; sincerity matters, but avoidable ignorance can still be culpable.</p>`
      }
    ],
    "human-sexuality": [
      {
        title: "7. Attraction, integrated love and the course's conjugal ideal",
        priority: "deep",
        html: `<p>The course distinguishes <strong>sensual attraction</strong> toward bodily qualities, <strong>affective attraction</strong> toward emotional closeness, and <strong>rational or personal love</strong> that recognises and wills the whole person's good. These levels need not compete, but attraction becomes mature love only when intellect, will and virtue integrate it truthfully.</p>
        <p>Within its Catholic-personalist account, conjugal love is described as <strong>total, faithful/exclusive, fruitful and enduring/perpetual</strong>. Giving oneself differs from temporarily lending access: a total gift includes the future and assumes reciprocal responsibility. Chastity or self-mastery, humility and charity organise desire toward love; prudence, justice, fortitude and modesty support that work.</p>
        <aside class="course-position"><strong>How to write this</strong><p>Label these as the course's normative claims, explain their reasons, and avoid turning them into empirical stereotypes about every man or woman.</p></aside>`
      }
    ],
    "work-relations": [
      {
        title: "8. Society in full: relation, authority, law and common good",
        priority: "useful",
        html: `<p>In the course, a <strong>society</strong> is a stable union of persons cooperating through shared action and some authority toward a common end. The definition implies plurality, a real bond, coordination or rule, and a good that members can share rather than merely consume separately.</p>
        <p>Use <strong>FIP</strong> as a comparison, not only a list. <strong>Family:</strong> grounded in natural kinship and care, governed by moral duties, ordered to spousal unity, generation and education. <strong>Intermediate associations:</strong> voluntarily organised under statutes or agreements for chosen ends. <strong>Political community:</strong> a natural requirement of complete common life, governed through constitutional, natural and positive law, ordered to the common good. “Natural” never makes every law or arrangement just.</p>
        <p>Communication may be intrapersonal, interpersonal, group or public, and may use speech, writing or other signs. <strong>Veracity</strong> directs every mode toward truthful communion rather than manipulation.</p>`
      },
      {
        title: "9. Work, labour, technology and rest — two source lenses",
        priority: "must",
        html: `<p>Everyday speech uses <strong>work</strong> for an activity, its product, or an assigned task. <strong>Labour/toil</strong> stresses effort, burden and fatigue. Work is a purposeful process involving effort and service; because a person is its subject, labour can never be priced as if the worker were a commodity. Just remuneration, safe conditions, association, rest and meaningful participation protect that priority.</p>
        <p>The course chapter uses <strong>objective, subjective, social and transcendent</strong> meanings. Lombo and Russo offer a different fourfold lens: <strong>subjective, objective, relational and ecological</strong>. They overlap, but should not be falsely presented as one author's exact list. Use either with its source label.</p>
        <p><strong>Technocentrism</strong> makes technology itself the centre or end; <strong>technocracy</strong> lets technical experts, efficiency and control dominate judgement. <strong>Rest</strong> renews the person, often through a change of activity. Play, feast and contemplative leisure overlap but are not identical: play has its own freely enjoyed activity, feast celebrates a shared good, and leisure opens receptive space for meaning.</p>`
      }
    ],
    "human-destiny": [
      {
        title: "8. Three temporalities, history and mature hope",
        priority: "deep",
        html: `<p><strong>Biological/chronological time</strong> marks bodily cycles and measurable succession. <strong>Biographical time</strong> gathers events into the story shaped by memory, decisions and relationships. <strong>Spiritual time</strong> names the person's ability to hold past and future in a meaningful present through understanding, promise and hope.</p>
        <p>History is more than repetition because freedom introduces projects and responsibility. A purely cyclical view can miss novelty; a naïvely linear view can mistake change for automatic progress. <strong>Historicism</strong> dissolves truth or nature into historical change, while <strong>static substantialism</strong> can describe human nature without taking biography and development seriously.</p>
        <p>Hope combines desire with expectation or confidence concerning a difficult future good considered possible. It draws on remembered goods and can sustain present action. It differs from shallow optimism, raw vitality and proof: hope can be reasonable without guaranteeing the outcome.</p>`
      },
      {
        title: "9. Religion and the six course arguments toward a creator",
        priority: "useful",
        html: `<p><strong>Religion</strong> can be studied philosophically as personal and communal relation to what is held ultimate or divine, expressed through belief, moral commitment and acts such as prayer, worship and sacrifice. Theology adds premises received as revelation; PA must keep the methods visible.</p>
        <p>The Chapter 10 material gathers six lines: <strong>necessity–contingency</strong>, <strong>gradation</strong>, <strong>teleology</strong>, <strong>order</strong>, <strong>morality</strong> and an <strong>ontological</strong> argument. Teleology reasons from goal-directedness; order reasons from intelligible coordination, though they overlap. The ontological argument reasons from the concept of a maximally perfect being and faces the classic objection that existence cannot simply be defined into reality.</p>
        <p>Do not present this list as Aquinas's historical Five Ways. For any one argument, give premises, the bridge to its conclusion, at least one objection and a reply limited to what the premises can support.</p>`
      }
    ]
  };

  lessons.forEach(lesson => {
    const additions = sourceCoverageExpansions[lesson.id];
    if (additions) lesson.sections.push(...additions);
  });

  const lessonExpansions = {
    "introduction-being": {
      recall: "State the principle of non-contradiction with its time-and-respect qualifiers.",
      quiz: { q: "The principle of non-contradiction rules out which claim?", options: ["Hezron is seated now and standing later", "Water is warm relative to one hand and cool relative to another", "The same act is wholly voluntary and wholly involuntary at the same time and in the same respect", "A student changes an opinion after new evidence"], answer: 2, explain: "A contradiction affirms and denies the same thing at the same time and in the same respect; the qualifiers prevent fake contradictions." }
    },
    "life-levels": {
      recall: "Distinguish the first act of being alive from the living operations that reveal it.",
      quiz: { q: "Which is a classical primary vegetative power?", options: ["Respiration", "Excretion", "Nutrition", "Local movement"], answer: 2, explain: "The traditional primary powers are nutrition, growth and reproduction; respiration and excretion serve organic life." }
    },
    "human-person": {
      recall: "Map eye, sight and seeing as organ, power and act.",
      quiz: { q: "Which organ–power–act mapping is correct?", options: ["Eye = act; sight = organ; seeing = power", "Eye = organ; sight = power; seeing = act", "All three are separate souls", "Sight = organ; eye = power; seeing = substance"], answer: 1, explain: "The eye is the bodily organ, sight is the stable capacity or power, and seeing is the exercised act." }
    },
    "senses-memory": {
      recall: "Give one proper sensible and one common sensible, explaining the difference.",
      quiz: { q: "Shape is traditionally classified as…", options: ["A proper object only of sight", "A common sensible available through more than one sense", "A concept with no sensory basis", "An act of will"], answer: 1, explain: "Shape can be perceived through sight and touch, unlike a proper sensible such as colour for sight." }
    },
    "affectivity-character": {
      recall: "Use Person, Proportion, Point, Purpose and Presentation to test one angry response.",
      quiz: { q: "Anger is best classified as…", options: ["Joy at a present good", "A response to a present perceived injury or difficult evil", "Fear of a future overpowering evil", "Desire for an easy absent good"], answer: 1, explain: "Anger is the irascible response to a present difficult harm, often understood as an injury requiring an answer." }
    },
    "human-soul": {
      recall: "Explain why subsistence is not the same as being a complete person without a body.",
      quiz: { q: "Why would bodily decomposition not directly destroy an immaterial subsistent principle, on the course argument?", options: ["It is a hidden organ", "It lacks material parts that can separate", "Scans cannot see it", "Every memory must survive"], answer: 1, explain: "The inference is based on absence of material composition, not invisibility or an unsupported claim that every memory survives." }
    },
    "intellect-truth": {
      recall: "Distinguish sensitive, conceptual and reflexive knowledge using one experience.",
      quiz: { q: "‘I know that my judgement may be mistaken’ chiefly exercises…", options: ["Sensitive knowledge", "Conceptual knowledge only", "Reflexive knowledge", "Sensitive appetite"], answer: 2, explain: "The intellect is attending to and evaluating its own act of judging." }
    },
    "will-human-acts": {
      recall: "Contrast voluntas ut natura with voluntas ut ratio.",
      quiz: { q: "Which best illustrates voluntas ut ratio?", options: ["The will's general orientation toward good and happiness", "Choosing one limited means after deliberation", "A knee reflex", "Seeing a colour"], answer: 1, explain: "Ut natura names the will's general natural orientation to good; ut ratio names elective willing of a particular good or means." }
    },
    "human-freedom": {
      recall: "Distinguish an act's intentionality from the self-determination it produces in the chooser.",
      quiz: { q: "Plagiarism changes both the paper and the chooser. These effects are respectively…", options: ["Immanence and threshold", "Intentionality and self-determination", "Constitutive and effective freedom", "Faith and reason"], answer: 1, explain: "Intentionality reaches the chosen object; self-determination names how choosing also forms the acting person." }
    },
    "human-sexuality": {
      recall: "Give two reasons why consent is necessary but not the only ethical test in the course framework.",
      quiz: { q: "Which account is reductionist in the course framework?", options: ["Sexuality integrates body, affectivity, relation and ethics", "Sexuality is nothing but anatomy", "Bodily facts matter but do not exhaust personal meaning", "Freedom requires consent and responsibility"], answer: 1, explain: "Reducing sexuality to one biological feature leaves out its personal, relational, social and ethical dimensions." }
    },
    "work-relations": {
      recall: "Give an example of a natural society and an artificial or voluntary association.",
      quiz: { q: "Which is an artificial or voluntary society in the course classification?", options: ["Family", "Political community", "A coding club", "Humanity as a whole"], answer: 2, explain: "A club is organised for a chosen limited aim; the course classifies family and political community as natural societies." }
    },
    "human-destiny": {
      recall: "State Frankl's three meaning routes and give one concrete example of each.",
      quiz: { q: "Which is not one of Frankl's three meaning routes named in the notes?", options: ["Creating or serving", "Loving or encountering", "Choosing a stance toward unavoidable suffering", "Eliminating every difficulty"], answer: 3, explain: "Meaning does not require the removal of every difficulty; Frankl includes the stance taken toward unavoidable suffering." }
    }
  };

  lessons.forEach(lesson => {
    const expansion = lessonExpansions[lesson.id];
    if (!expansion) return;
    lesson.recall.push(expansion.recall);
    lesson.quiz.push(expansion.quiz);
  });

  const sourceAuditChecks = {
    "introduction-being": { q: "Which direction of PA reasoning begins from lived experience and searches for deeper principles?", options: ["Synthetical–deductive", "Analytical–inductive", "Purely experimental", "Argument from popularity"], answer: 1, explain: "Analytical–inductive reasoning moves from experienced human acts toward their explanatory principles; deduction moves back from principles to phenomena." },
    "life-levels": { q: "What does the later PA 2 Life deck add to the older URIS list?", options: ["Speech", "Self-development or self-realisation", "External force", "Tool use"], answer: 1, explain: "The later deck explicitly gives five signs by adding development toward fulfilment to the older four." },
    "human-person": { q: "In the course-specific three-level map, acquired virtues and free acts belong primarily to which level?", options: ["Natural", "Essential", "Personal", "Accidental only"], answer: 1, explain: "The handout places intellect, will, free acts and virtues at the essential level; its terms must be used in that technical sense." },
    "senses-memory": { q: "Seeing white and recognising ‘my lecturer’ is an example of which sensible when the person is recognised beyond the immediate colour?", options: ["Proper sensible", "Common sensible", "Per-accidens sensible", "Pure concept with no sensation"], answer: 2, explain: "White is directly visible; recognising this meaningful individual draws on experience and inner sensing, so the person is sensible per accidens." },
    "affectivity-character": { q: "Which statement best distinguishes natural from elicited appetite?", options: ["Natural appetite follows a known object; elicited appetite never involves knowledge", "Natural appetite is an inclination without cognition; elicited appetite responds to a known good or harm", "They are identical", "Only rational beings have natural inclinations"], answer: 1, explain: "Elicited appetite follows cognition; natural inclination does not first require that the object be known." },
    "human-soul": { q: "Why does ‘invisible’ fail as a proof that the soul is immortal?", options: ["Only visible things exist", "Invisibility alone says nothing about subsistence or corruptibility", "The soul is a bodily organ", "Every invisible thing is temporary"], answer: 1, explain: "The course conclusion requires a chain from intellectual operation to immateriality, subsistence and incorruptibility—not a jump from invisibility." },
    "intellect-truth": { q: "An intellectual habit is…", options: ["One memorised fact", "A stable perfection of knowing formed by repeated acts", "Any strong feeling", "A sensory reflex"], answer: 1, explain: "Repeated acts can strengthen an enduring capacity to understand and judge well." },
    "will-human-acts": { q: "In the detailed deliberate-act sequence, consilium means…", options: ["Enjoyment after attaining the end", "Counsel or deliberation about possible means", "Bodily execution", "An involuntary reflex"], answer: 1, explain: "Counsel compares available means before practical judgement and election." },
    "human-freedom": { q: "Which directly opposes voluntariness?", options: ["The necessity of having a human nature", "A means required by an end I freely chose", "External coercion against the will", "An action arising from an inner impulse"], answer: 2, explain: "Coercive necessity acts against the will; nature and required means must be analysed differently." },
    "human-sexuality": { q: "Which is not one of the four marks in the course's conjugal-love account?", options: ["Total", "Faithful or exclusive", "Fruitful", "Temporary when inconvenient"], answer: 3, explain: "The supplied framework presents conjugal love as total, faithful/exclusive, fruitful and enduring." },
    "work-relations": { q: "Which fourfold work lens is specifically attributed here to Lombo and Russo?", options: ["Objective, subjective, social, transcendent", "Subjective, objective, relational, ecological", "Paid, unpaid, skilled, unskilled", "Private, public, digital, manual"], answer: 1, explain: "The course chapter uses the first list; Lombo and Russo's source-labelled list is subjective, objective, relational and ecological." },
    "human-destiny": { q: "Which temporality gathers events into a person's lived story?", options: ["Only clock time", "Biographical time", "Mechanical time", "No form of time"], answer: 1, explain: "Biographical time gives events personal continuity through memory, choices, relations and projects." }
  };

  lessons.forEach(lesson => {
    const check = sourceAuditChecks[lesson.id];
    if (check) lesson.quiz.push(check);
  });

  const questions = [
    {
      id: "q-intro-1", topic: "Introduction", type: "Short answer", marks: 6,
      prompt: "Define Philosophical Anthropology and distinguish its material object from its formal object.",
      plan: ["Define the discipline", "Name the material object", "Name the formal object", "Give one contrast with a particular science"],
      answer: [
        "Philosophical Anthropology is the rational study of the human person through the person's deepest causes and principles.",
        "Its material object is the human person: the reality being studied. Its formal object is the ontological point of view: what makes a human being the kind of being that knows, chooses, relates and acts.",
        "Biology can explain bodily mechanisms and psychology can measure behaviour. PA does not compete with them; it asks more basic questions about personhood, truth, freedom and dignity."
      ], source: "Course files: Chapter 1; PA 1 Introduction"
    },
    {
      id: "q-intro-2", topic: "Introduction", type: "Essay", marks: 12,
      prompt: "Using examples, explain TSAMEC as six Aristotelian ways of examining being.",
      plan: ["Open with what the mnemonic does", "Define all six pairs or lenses", "Use one connected example", "Conclude with their value"],
      answer: [
        "TSAMEC stands for Transcendentals, Substance, Act, Matter, Esse and Causes. Transcendentals describe being as one, true, good and beautiful. Substance exists in itself, while accidents such as place or size exist in a substance.",
        "Act and potency explain change: a capacity becomes fulfilled. Matter and form explain a material being as organised material rather than a heap. Essence answers what something is; esse or existence answers whether it is. The four causes ask about material, form, producer and purpose.",
        "For a student writing an essay, bodily tools are material conditions, the ordered argument gives form, the student is an efficient cause, and communicating a justified answer is the end. Together the lenses prevent a one-dimensional explanation of reality."
      ], source: "Course files: Aristotelian Views of Being"
    },
    {
      id: "q-intro-3", topic: "Introduction", type: "Case", marks: 8,
      prompt: "A scan shows brain activity while Amina chooses. Her friend says, ‘The scan has completely explained the choice, so freedom is meaningless.’ Evaluate.",
      plan: ["Grant what the scan shows", "Distinguish levels of explanation", "Name the philosophical questions left open", "Reach a balanced conclusion"],
      answer: [
        "The scan supplies relevant empirical evidence about the bodily conditions and neural processes accompanying the choice.",
        "It does not by itself define a reason, a good, voluntariness or responsibility. Moving from neural correlation to ‘freedom is meaningless’ adds a philosophical conclusion that the image alone cannot establish.",
        "A full account should integrate, rather than confuse, biological and philosophical explanations."
      ], source: "Original applied question based on the course method"
    },
    {
      id: "q-life-1", topic: "Life", type: "Short answer", marks: 10,
      prompt: "Explain the older four signs of life remembered by URIS and reconcile them with the later five-sign Life deck.",
      plan: ["Expand URIS", "Define each sign", "Add self-development", "Explain why the files differ", "Give an example and caution"],
      answer: [
        "Unity means the organism acts as an integrated whole. Rhythm means its activity unfolds in coordinated cycles. Immanence means a living operation remains in and perfects the agent, as knowing perfects the knower. Self-movement means activity arises from an inner principle, though the organism still depends on an environment.",
        "The later PA 2 Life deck adds self-development/self-realisation: a living being actualises capacities toward its characteristic fulfilment. So write URIS for the older Chapter 2 list and URIS + D when five characteristics are requested.",
        "These are philosophical course frameworks, not a single laboratory checklist universally accepted as the definition of life. A plant displays them by assimilating nutrients, coordinating growth, adapting and developing from within."
      ], source: "Course files: Chapter 2; PA 2 Life"
    },
    {
      id: "q-life-2", topic: "Life", type: "Essay", marks: 12,
      prompt: "Compare vegetative, sensitive and rational life without treating them as three separate souls in a human being.",
      plan: ["State the hierarchy", "Explain each level and powers", "Apply virtual inclusion", "Conclude with unity"],
      answer: [
        "Vegetative life has nutrition, growth and reproduction. Sensitive life adds external and internal sensation, sensitive appetite and, in many animals, locomotion. Rational life adds intellect and will.",
        "The higher level does not discard the lower. A human being still digests and senses, but all these are operations of one living subject. In the hylomorphic account, one rational soul is the form of the human body and virtually includes lower powers.",
        "The hierarchy concerns kinds of operation, not the moral worth of species or an evolutionary ladder."
      ], source: "Course files: Levels of Life; Vegetative Soul"
    },
    {
      id: "q-life-3", topic: "Life", type: "Case", marks: 8,
      prompt: "A flame grows, consumes fuel and moves. Is it alive? Use the course framework and a modern caution.",
      plan: ["Notice the resemblance", "Test organisation and intrinsic unity", "Explain metabolism/reproduction cautiously", "Conclude"],
      answer: [
        "A flame resembles life because it spreads, consumes fuel and moves. Similar outward behaviour, however, is not enough.",
        "It lacks the stable organic unity that regulates parts for the good of a living whole; its growth is combustion rather than nutrition and development by an organism.",
        "The course therefore does not classify fire as alive. Modern philosophy of biology still debates precise definitions, so URIS should be used as an explanatory framework, not an infallible biological test."
      ], source: "Original comparison; enriched by SEP Life"
    },
    {
      id: "q-person-1", topic: "Human Person", type: "Short answer", marks: 10,
      prompt: "Explain Boethius's definition of person and show why dignity is not earned by performance.",
      plan: ["State the definition", "Explain individual, substance and rational nature", "Connect nature to dignity", "Give an example"],
      answer: [
        "Boethius describes a person as an individual substance of a rational nature. ‘Individual’ means this unrepeatable subject; ‘substance’ means one who exists in oneself rather than inhering in another as an accident; ‘rational nature’ names the kind of being with intellectual and volitional powers. The metaphysical meaning of substance then supports the ethical conclusion that a person must never be treated merely as somebody's property.",
        "A power can be asleep, undeveloped or blocked without erasing the nature of its subject. Therefore illness, infancy or low performance does not cancel personal dignity. Basic dignity belongs to the person, not to an exam score or current usefulness."
      ], source: "Course files: Chapter 3; Human Life"
    },
    {
      id: "q-person-2", topic: "Human Person", type: "Essay", marks: 15,
      prompt: "Explain hylomorphism and compare it with reductive materialism and Cartesian substance dualism.",
      plan: ["Define matter and form", "Explain one human substance", "Contrast materialism", "Contrast Cartesian dualism", "Evaluate"],
      answer: [
        "Hylomorphism says a living human is one substance composed of matter and substantial form. The soul is the first intrinsic principle by which this body is alive and performs human operations; it is not a second person piloting a body.",
        "Reductive materialism attempts to explain the person entirely in physical terms. Hylomorphism accepts bodily dependence but argues that meaning, universality and rational agency cannot simply be restated as quantities. Cartesian substance dualism treats mind and extended body as two complete substances, creating an interaction and unity problem.",
        "Hylomorphism preserves real duality of principles without dividing the person into two independent beings. Its strength is integration; its metaphysical claims still require argument and are not measurements supplied by neuroscience."
      ], source: "Course files: Dualism and Duality; Unity of Man"
    },
    {
      id: "q-person-3", topic: "Human Person", type: "Case", marks: 10,
      prompt: "After severe memory loss, Kamau says, ‘I am no longer the same person.’ Distinguish three possible meanings.",
      plan: ["Distinguish numerical identity", "Discuss psychological continuity", "Discuss body-soul/animal continuity", "Add practical compassion"],
      answer: [
        "Kamau may mean that his personality and remembered life feel discontinuous; that is a serious psychological change. A psychological-continuity theory gives memory and connected mental states central weight.",
        "An animalist account stresses continuity of the living human organism. The course's hylomorphic account says the same embodied subject remains through accidental changes, even when powers cannot currently be exercised.",
        "Personal identity and personhood must not be confused. Whatever theory is defended, the case demands respect and care rather than treating memory loss as loss of human worth."
      ], source: "Original case; enriched by SEP Personal Identity"
    },
    {
      id: "q-senses-1", topic: "Senses", type: "Essay", marks: 12,
      prompt: "Trace seeing and recognising a mango through the external and internal senses.",
      plan: ["Name the proper sensible", "Explain common sense", "Add imagination and memory", "Add cogitative power", "Keep intellect distinct"],
      answer: [
        "Sight receives colour as its proper sensible and visually perceives shape, which is a common sensible available through more than one sense; touch receives qualities such as texture and temperature. The internal common sense unifies simultaneous sensory inputs as one perceived mango. Imagination retains or recombines the sensible image when the fruit is absent, while sensitive memory retains the experienced past.",
        "The cogitative or estimative power grasps a concrete meaning such as ‘this fruit is ripe and good to eat’. Intellect then abstracts the universal concept mango from particular experience.",
        "The account is a map of powers, not a claim that every stage is a tiny person inside the head."
      ], source: "Course files: Sensitive Knowledge; student notes"
    },
    {
      id: "q-senses-2", topic: "Senses", type: "Case", marks: 10,
      prompt: "A video seems to make a speaker's sound change when the lip movement changes. What does this teach about perception and truth?",
      plan: ["Describe multisensory integration", "Distinguish appearance from reality", "Explain correction", "Avoid scepticism"],
      answer: [
        "The case shows that perception is an active integration of inputs rather than a camera copying isolated data. Visual context can alter what sound seems to be heard.",
        "An occasional perceptual error does not prove that all knowledge is false. We detect the illusion by repeated observation, controlled comparison and other perceivers.",
        "The lesson is critical realism: our senses genuinely connect us with reality, but their reports can require checking and interpretation."
      ], source: "Original application using a standard audiovisual illusion"
    },
    {
      id: "q-senses-3", topic: "Senses", type: "Short answer", marks: 8,
      prompt: "Distinguish a sense image from an intellectual concept.",
      plan: ["Define image", "Define concept", "Contrast particular and universal", "Give an example"],
      answer: [
        "A sense image or phantasm is particular and retains sensible features: this mango at this size and colour. A concept is an intellectual grasp of what is common or intelligible, such as mango or triangle as universal.",
        "A drawn triangle always has a particular thickness and shape, but the concept applies to every three-sided polygon. Intellectual knowledge begins from sensory experience without being identical to an image."
      ], source: "Course files: Sensitive and Intellectual Knowledge"
    },
    {
      id: "q-affect-1", topic: "Affectivity", type: "Essay", marks: 12,
      prompt: "Explain sensitive appetites and classify the principal passions.",
      plan: ["Define appetite", "Concupiscible versus irascible", "List paired passions", "Explain their moral role"],
      answer: [
        "Sensitive appetite is inclination toward a concretely perceived good or away from a perceived harm. The concupiscible appetite concerns goods or harms taken simply: love and hatred, desire and aversion, joy and sadness.",
        "The irascible appetite concerns a difficult good or threatening harm: hope and despair, daring and fear, with anger responding to a present difficult evil. Passions provide energy and information; they are not automatically virtues, sins or commands. Daring is a passion; fortitude is the corresponding moral virtue, so do not confuse them.",
        "Moral formation teaches emotion and reason to cooperate so that a person responds proportionately to reality."
      ], source: "Course files: Human Appetency; Human Affectivity"
    },
    {
      id: "q-affect-2", topic: "Affectivity", type: "Case", marks: 10,
      prompt: "An advert makes a phone feel necessary for belonging. Analyse the process from perception to choice.",
      plan: ["Name the presented good", "Show appraisal and desire", "Add intellect and will", "Evaluate manipulation"],
      answer: [
        "The advert links the phone with a concrete sensible good: social acceptance. Imagination and memory supply images; appraisal presents ownership as desirable, and sensitive appetite produces attraction.",
        "Intellect can test whether the association is true and compare costs, needs and other goods. The will can consent, delay or refuse. Strong desire influences but need not mechanically determine the decision.",
        "The advert becomes manipulative when it hides relevant facts or exploits insecurity instead of giving reasons."
      ], source: "Original applied question based on Human Appetency"
    },
    {
      id: "q-affect-3", topic: "Affectivity", type: "Short answer", marks: 8,
      prompt: "Distinguish temperament, character and personality, and add one scientific caution.",
      plan: ["Define all three", "Explain stability/change", "State the caution", "Show practical use"],
      answer: [
        "Temperament names relatively spontaneous affective tendencies. Character is the more acquired moral pattern shaped through repeated choices and habits. Personality is the broader organised way a person thinks, feels and behaves.",
        "Ancient four-humour types can be memorable descriptions but are not established modern biological diagnoses, and MBTI categories have psychometric limits. Use types as prompts for self-observation, never as cages or excuses."
      ], source: "Course files: Character and Personality; Temperament Types"
    },
    {
      id: "q-soul-1", topic: "Soul", type: "Essay", marks: 15,
      prompt: "Present the course argument that intellectual activity points to an immaterial power, then state a serious objection.",
      plan: ["Define immaterial carefully", "Build premises from universal knowledge", "Infer the kind of power", "State brain-dependence objection", "Reply modestly"],
      answer: [
        "The argument begins from the intellect's grasp of universal meanings and necessary relations. A concept such as triangularity is not restricted to one coloured image, and a judgement can concern truth as such. The course infers that the power performing this act is not exhausted by a bodily organ in the way sight is exercised by the eye.",
        "A serious objection notes that reasoning changes with injury, drugs, development and fatigue. This demonstrates strong bodily dependence in present human knowing. It may challenge an overly separate mind but does not automatically prove that conceptual content is identical to neural activity.",
        "The defensible conclusion is philosophical and argued: embodiment supplies conditions for thought, while the course claims the intellectual act has an immaterial aspect. Neuroscience alone neither proves nor disproves an immortal soul."
      ], source: "Course material: human soul and immortality"
    },
    {
      id: "q-soul-2", topic: "Soul", type: "Case", marks: 12,
      prompt: "A classmate says, ‘Brain damage changes thought, therefore there is no soul.’ Write an objection-and-reply answer.",
      plan: ["Restate the evidence fairly", "Expose the hidden inference", "Give hylomorphic reply", "State the limit"],
      answer: [
        "Brain damage can change attention, memory, language and judgement. Any adequate anthropology must accept this evidence.",
        "The disputed step is from dependence to identity: needing an organ or bodily condition for operation does not by itself establish that the operation is nothing but that condition. In hylomorphism, the soul is the form of this body, so bodily injury should affect the unified person's powers.",
        "The reply keeps the metaphysical question open; it is not empirical proof of subsistence. Further argument from the character of intellectual acts is still required."
      ], source: "Original objection using course hylomorphism"
    },
    {
      id: "q-soul-3", topic: "Soul", type: "Short answer", marks: 8,
      prompt: "Distinguish soul, immortality and resurrection.",
      plan: ["Define soul", "Define immortality claim", "Define resurrection claim", "Label philosophy versus theology"],
      answer: [
        "Soul is the first intrinsic principle or substantial form by which a living body is alive. In the course's philosophical argument, immortality means continued existence of a subsistent rational soul after bodily death.",
        "Resurrection means restoration of embodied personal life and is a theological claim received in faith. It is not another word for immortality, and philosophy should not claim to demonstrate it from the soul argument alone."
      ], source: "Course files: The Human Soul; Human Destiny"
    },
    {
      id: "q-intellect-1", topic: "Intellect", type: "Short answer", marks: 10,
      prompt: "Use AJR to explain the three acts of the intellect.",
      plan: ["Expand AJR", "Define each act", "Give one continuous example", "Connect each to error"],
      answer: [
        "AJR means Apprehension, Judgement and Reasoning. Simple apprehension grasps a concept, such as freedom. Judgement joins or separates concepts in a claim, such as ‘freedom involves responsibility’. Reasoning moves from judgements to a new conclusion.",
        "A concept is clear or confused rather than true or false in the strict propositional sense. Truth or falsity first appears in judgement; validity concerns whether the conclusion follows in reasoning."
      ], source: "Course files: Human Intellect; Intellectual Knowledge"
    },
    {
      id: "q-intellect-2", topic: "Intellect", type: "Essay", marks: 12,
      prompt: "Distinguish truth, validity and soundness, then evaluate ‘Everyone believes it, therefore it is true.’",
      plan: ["Define three terms", "Represent the reasoning", "Name the fallacy/problem", "Conclude"],
      answer: [
        "Truth is the conformity of a judgement with reality. Validity is structural: if the premises were true, the conclusion would have to follow. Soundness combines valid form with true premises.",
        "‘Everyone believes it, therefore it is true’ appeals to popularity. Even if the popularity premise were established, public agreement does not guarantee correspondence with reality, so the inference is invalid without another defensible bridge premise.",
        "Consensus may be evidence worth investigating, but it cannot replace reasons and reality."
      ], source: "Course files: Chapter 5; original logic application"
    },
    {
      id: "q-intellect-3", topic: "Intellect", type: "Case", marks: 10,
      prompt: "A student says, ‘That may be true for you, but all truth is relative.’ Respond without becoming dogmatic.",
      plan: ["Clarify kinds of claim", "Test self-reference", "Allow perspective", "Defend objective truth modestly"],
      answer: [
        "Preferences can be person-relative and circumstances can change what is prudent. These facts do not show that every proposition lacks objective truth.",
        "The universal claim ‘all truth is relative’ appears to ask for non-relative acceptance and therefore undermines itself. Different perspectives can reveal different aspects of the same reality, while evidence and dialogue help correct error.",
        "Objectivity means answerability to reality, not personal infallibility."
      ], source: "Original exam question based on Knowledge and Truth"
    },
    {
      id: "q-will-1", topic: "Will", type: "Short answer", marks: 10,
      prompt: "Explain how intellect and will cooperate in a free act.",
      plan: ["State each formal object", "Explain mutual influence", "Give sequence", "Reject separation"],
      answer: [
        "The intellect presents an understood good; the will is rational appetite tending toward good as understood. Deliberation compares possible means, judgement recommends, choice commits to one means and execution carries it into action.",
        "The will can direct attention and inquiry, while new understanding can reshape desire. They are distinct powers of one person, not two inner characters fighting for control."
      ], source: "Course files: Human Intellect; Human Will"
    },
    {
      id: "q-will-2", topic: "Will", type: "Essay", marks: 12,
      prompt: "Analyse a complete human act from intention to enjoyment.",
      plan: ["Name the end", "Counsel and judgement", "Choice and command", "Execution and enjoyment", "Add responsibility conditions"],
      answer: [
        "A person first apprehends a possible good and forms an intention toward it. Counsel considers means; practical judgement identifies a suitable option; choice elects that means. Command mobilises powers, execution performs the act, and enjoyment or rest follows possession of the end.",
        "The stages can overlap in real life but reveal points of formation and responsibility. Knowledge, consent, fear, habit and external pressure can change how voluntary the act is. A good exam answer applies the map to one concrete decision."
      ], source: "Course files: Chapter 6; Human Acts"
    },
    {
      id: "q-will-3", topic: "Will", type: "Case", marks: 8,
      prompt: "Brian chooses constant entertainment because it feels good. Compare hedonia and eudaimonia.",
      plan: ["Define both", "Grant pleasure as a good", "Explain hierarchy/integration", "Apply to Brian"],
      answer: [
        "Hedonia emphasises pleasure or positive feeling. Eudaimonia means flourishing through an excellent whole life and the fulfilment of human capacities.",
        "Pleasure is a genuine human good, but one immediate pleasure can conflict with health, friendship, truth or a long-term project. Brian should not reject enjoyment; he should integrate it within goods that organise a whole life.",
        "Freedom grows when he can choose according to a judged hierarchy rather than the loudest present impulse."
      ], source: "Original application based on will and happiness"
    },
    {
      id: "q-freedom-1", topic: "Freedom", type: "Essay", marks: 15,
      prompt: "Explain the main senses of freedom and show why freedom is more than absence of restraint.",
      plan: ["External freedom", "Freedom of choice", "Inner or moral freedom", "Freedom for excellence", "Integrate"],
      answer: [
        "External freedom is absence of coercive barriers. Freedom of choice is self-determination among intelligible alternatives. Inner or moral freedom is mastery that lets a person act from considered judgement rather than domination by fear, addiction or impulse.",
        "Freedom for excellence highlights a positive end: developed capacities make worthwhile action more possible, as trained fingers free a pianist to perform. External options matter, but endless options without truth, ability or direction can leave a person less able to live well.",
        "The course therefore joins freedom from coercion with freedom for goods that perfect the person."
      ], source: "Course files: Chapter 7; Cormac Burke"
    },
    {
      id: "q-freedom-2", topic: "Freedom", type: "Case", marks: 12,
      prompt: "A friend threatens to expose Wanjiku unless she cheats. Is her act free and is she responsible?",
      plan: ["Identify coercion/fear", "Ask whether knowledge remains", "Assess consent and alternatives", "Give a graded conclusion"],
      answer: [
        "The threat is serious external pressure and fear narrows Wanjiku's practical field. If she still understands the act and chooses it, the act is voluntary in some degree, but responsibility may be reduced by the severity and immediacy of the threat.",
        "A good answer avoids both extremes: pressure does not automatically make every response involuntary, and it is unfair to judge as if no pressure existed. Details about alternatives, proportionality and her capacity to seek help matter.",
        "The blackmailer bears direct responsibility for creating the coercive situation."
      ], source: "Original case based on voluntariness"
    },
    {
      id: "q-freedom-3", topic: "Freedom", type: "Short answer", marks: 10,
      prompt: "Compare compatibilist, libertarian and sceptical positions on free will with the course position.",
      plan: ["Define three debate positions", "Locate course account", "Give one tension", "Avoid caricature"],
      answer: [
        "Compatibilists say freedom can coexist with causal determination when action issues from the agent's reasons or desires without the wrong kind of constraint. Libertarians say at least some responsible choices are not fully determined and the agent could genuinely do otherwise. Free-will sceptics doubt the control needed for desert responsibility.",
        "The course's Thomistic account stresses rational self-determination toward perceived goods and is commonly closer to a robust sourcehood account, though its relation to modern labels needs careful argument.",
        "The debate asks both whether alternatives are needed and whether the person is the appropriate source of action."
      ], source: "Course position enriched by SEP Free Will"
    },
    {
      id: "q-sex-1", topic: "Sexuality", type: "Essay", marks: 12,
      prompt: "Explain human sexuality as a whole-person reality in the course framework.",
      plan: ["Begin with embodiment", "Biological dimension", "Affective/relational dimension", "Personal/ethical dimension", "Integrate"],
      answer: [
        "Human sexuality begins with embodied sexed existence and includes biological features, affective experience, personal identity, relationships and social meanings. The course resists reducing it either to anatomy alone or to a feeling detached from embodiment.",
        "Within its personalist and Catholic framework, sexual action has unitive, self-giving and procreative meanings and should express truthful, free, faithful and responsible love.",
        "These are normative philosophical-theological claims taught by the course. They should be explained with reasons and respectful language, while empirical claims and stereotypes require independent evidence."
      ], source: "Course files: Chapter 8; Human Sexuality"
    },
    {
      id: "q-sex-2", topic: "Sexuality", type: "Case", marks: 10,
      prompt: "Someone says, ‘If both people want it, no other ethical question matters.’ Evaluate using personalism.",
      plan: ["Affirm consent as necessary", "Show why it may not be sufficient", "Apply dignity/self-gift", "Conclude"],
      answer: [
        "Free and informed consent is necessary because using another person's body against their will violates agency and dignity. Yet consent alone does not answer whether there is deception, exploitation, an unjust power difference, a broken commitment or foreseeable harm.",
        "Personalism asks whether each person is treated as a subject and an end, whether the act tells the truth about the relationship, and whether responsibility for consequences is accepted.",
        "Therefore consent is necessary but not sufficient in this personalist analysis: it does not automatically prove that every consensual act is good."
      ], source: "Original applied question using personalist principles"
    },
    {
      id: "q-sex-3", topic: "Sexuality", type: "Critical reading", marks: 8,
      prompt: "A supplied handout claims that all men think one way and all women another. How should you use it in an exam?",
      plan: ["Separate course claim from evidence", "Reject absolute generalisation", "Preserve relevant insight carefully", "Use respectful language"],
      answer: [
        "First identify the statement as a generalisation in a course source, not a demonstrated fact about every person. Sex-related averages in some studies never justify assigning a trait to each individual, and cultural effects also matter.",
        "If the underlying point is that embodiment may shape experience, state that modestly and distinguish biological, psychological and social evidence. Do not reproduce stereotypes as definitions.",
        "A critical answer can represent the source fairly while noting its evidential limit."
      ], source: "Editorial correction to supplied Human Sexuality material"
    },
    {
      id: "q-work-1", topic: "Relations & Work", type: "Essay", marks: 12,
      prompt: "Explain why the person is social while neither individualism nor collectivism is adequate.",
      plan: ["Explain natural relationality", "Define individualism", "Define collectivism", "Offer personalist balance", "Example"],
      answer: [
        "Persons develop language, knowledge, identity and practical goods through relations; society is not merely a later contract between complete isolated selves. Individualism forgets dependence and the common good. Collectivism absorbs the concrete person into the group and can sacrifice individual dignity.",
        "A personalist account holds both poles: each person has irreducible worth and becomes more fully themselves through reciprocal gift, justice and participation in shared goods.",
        "A university should therefore serve a genuine learning community without treating a student as only a registration number or treating preference as the only rule."
      ], source: "Course files: Chapter 9; Person and Society"
    },
    {
      id: "q-work-2", topic: "Relations & Work", type: "Short answer", marks: 10,
      prompt: "Distinguish solidarity from subsidiarity and apply both to a struggling class group.",
      plan: ["Define solidarity", "Define subsidiarity", "Show cooperation", "Apply"],
      answer: [
        "Solidarity is a durable commitment to the good of others and the common good: the class does not abandon a struggling member. Subsidiarity says larger or higher bodies should support, not unnecessarily replace, the initiative of persons and smaller communities.",
        "Classmates can share notes and practise together, while the lecturer provides resources the group cannot supply. Neither should do the student's learning for them. Solidarity supplies belonging; subsidiarity protects agency."
      ], source: "Course files: Human Relations"
    },
    {
      id: "q-work-3", topic: "Relations & Work", type: "Case", marks: 12,
      prompt: "Is unpaid care work real work? Answer using four meanings of work and one objection.",
      plan: ["Define objective and subjective dimensions", "Add social and transcendent dimensions", "Apply to care", "Answer employment objection"],
      answer: [
        "Objectively, work produces or maintains something; subjectively, it forms and expresses the worker; socially, it contributes to others and a common world; at its deepest it can participate in meaning and vocation.",
        "Unpaid caregiving maintains lives, households and communities and can develop skill, patience and relationship. It therefore counts as human work even without a wage.",
        "An objector may reserve ‘employment’ for paid contractual labour. That useful legal distinction does not justify reducing all work to employment or ignoring exploitation and unequal burdens in care."
      ], source: "Course files: Human Work; enriched by SEP Work and Labor"
    },
    {
      id: "q-destiny-1", topic: "Destiny", type: "Short answer", marks: 10,
      prompt: "Distinguish chronological time from lived time and connect memory, promise and hope.",
      plan: ["Define clock time", "Define lived time", "Memory", "Promise and hope", "Example"],
      answer: [
        "Chronological time measures succession in equal units. Lived time is experienced within a personal story and carries meaning.",
        "Memory makes past experience personally present; a promise carries a past commitment into future action; hope lets an anticipated good motivate the present. Studying tonight is therefore shaped by remembered goals and a future examination, not only by passing minutes."
      ], source: "Course files: Chapter 10; Human Destiny"
    },
    {
      id: "q-destiny-2", topic: "Destiny", type: "Essay", marks: 15,
      prompt: "Present one argument toward a creator, one objection and a reasoned reply. Do not mislabel the course list as Aquinas's Five Ways.",
      plan: ["State the contingency argument", "Explain the sufficient-reason bridge", "Give brute-universe objection", "Reply", "State the limit"],
      answer: [
        "The contingency argument starts from beings that exist but need not have existed. If every reality were only contingent, the existence of the whole would still call for an adequate explanation. The argument proposes a necessary ground that does not receive existence in the same dependent way.",
        "An objection says the universe may simply be a brute fact or that an infinite explanatory series is possible. The reply asks whether naming a brute fact abandons rather than answers the metaphysical demand for sufficient reason, and whether an infinite chain of dependent causes explains dependence itself.",
        "This is a philosophical argument, not a laboratory measurement, and each premise can be debated. The Chapter 10 set should be called course arguments toward a creator; it is not identical to Aquinas's canonical Five Ways."
      ], source: "Course files: Human Destiny; editorial historical correction"
    },
    {
      id: "q-destiny-3", topic: "Destiny", type: "Essay", marks: 12,
      prompt: "Explain how reason and faith relate, then distinguish immortality from resurrection.",
      plan: ["Define reason", "Define faith", "Explain harmony and limits", "Immortality", "Resurrection"],
      answer: [
        "Reason begins from experience and intelligible principles and offers conclusions for rational examination. In the course's theological usage, faith assents to divine revelation on God's authority; it is not merely guessing without evidence.",
        "Reason can examine coherence and credibility, and a genuine truth cannot contradict another truth in the same respect. Philosophy nevertheless cannot use revelation as its formal premise and still call the conclusion purely philosophical.",
        "Immortality is the philosophical claim that the rational soul survives bodily death. Resurrection is the theological claim of restored embodied life. A careful answer identifies which grounds support each claim."
      ], source: "Course files: Chapter 10; Human Soul"
    }
  ];

  const coverageQuestions = [
    {
      id: "q-intro-4", topic: "Introduction", type: "Short answer", marks: 6,
      prompt: "Distinguish a proximate explanation from an ultimate explanation using a student who chooses to revise.",
      plan: ["Define both levels", "Apply each to the same event", "Show that they can cooperate", "Name the philosophical questions left open"],
      answer: [
        "A proximate explanation identifies a nearby mechanism or condition: the student's timetable, attention, motivation and neural activity while revising. An ultimate explanation asks what knowing and choosing are, what truth is, and what end makes the action worthwhile.",
        "The explanations are complementary. Describing a mechanism does not by itself define responsibility or the good, while philosophical analysis should not deny the bodily and psychological conditions revealed by science."
      ], source: "Course files: Chapter 1; PA 1 Introduction"
    },
    {
      id: "q-intro-5", topic: "Introduction", type: "Essay", marks: 12,
      prompt: "Trace the body–soul question through Plato, Aristotle and the modern turn to the subject. Which approach guides this course?",
      plan: ["Identify the recurring question", "Explain Plato", "Explain Aristotle", "Describe the modern turn", "State and defend the course approach"],
      answer: [
        "Plato strongly distinguished the intelligible soul from the changing sensible body and sometimes described embodiment as a tension. Aristotle answered with hylomorphism: body and soul are matter and substantial form of one living being, not two complete human beings temporarily joined.",
        "Modern philosophy increasingly centred consciousness and the knowing subject; Cartesian substance dualism sharpened the mind–body division, while later materialist accounts often reduced mind to bodily process. Contemporary discussion adds embodiment, evolution and neuroscience.",
        "The supplied course is mainly metaphysical and Aristotelian–Thomistic. It defends one embodied person, distinguishes bodily and spiritual operations, and must still answer objections about interaction, brain dependence and empirical evidence."
      ], source: "Course files: History of Anthropology; In Love With Sophie; Introduction"
    },
    {
      id: "q-life-4", topic: "Life", type: "Short answer", marks: 7,
      prompt: "Why are nutrition, growth and reproduction operations of life rather than definitions of life itself?",
      plan: ["Distinguish first actuality from operations", "Explain the organising subject", "Separate powers from processes", "Give one warning example"],
      answer: [
        "The course calls soul the first intrinsic actuality or principle by which an organised body is alive. Nutrition, growth and reproduction are second acts: activities that reveal powers of an already living subject.",
        "A process can resemble one feature of life without belonging to a living whole. A crystal increases in size by external accretion, whereas an organism assimilates material and develops through internally coordinated activity. Respiration and excretion serve organic life but are not extra primary vegetative powers in the classical NGR list."
      ], source: "Course files: Chapter 2; Vegetative Soul; PA 2 Life"
    },
    {
      id: "q-life-5", topic: "Life", type: "Case", marks: 12,
      prompt: "A seed germinates, a crystal enlarges and an adaptive robot changes its route. Compare them using URIS and VSR.",
      plan: ["Test unity and inner activity", "Explain the seed", "Explain the crystal", "Explain the robot", "State the limit of the framework"],
      answer: [
        "The seed develops as one organism: it assimilates nutrients, regulates parts and grows toward maturity from an intrinsic living principle. It therefore displays vegetative life.",
        "The crystal enlarges by material being added according to physical conditions; outward enlargement is not nutrition or organic self-development. The robot changes route through sensors, software and designed goals. Flexible behaviour alone does not establish sensitive knowledge or rational choice.",
        "URIS and VSR clarify the course's philosophical account, but modern definitions of life and artificial agency remain debated. The conclusion should therefore follow from an argued account of unity and powers, not from appearance alone."
      ], source: "Course files: Life and Levels of Life; original comparative case"
    },
    {
      id: "q-person-4", topic: "Human Person", type: "Short answer", marks: 8,
      prompt: "Explain how the body both reveals and limits the person without reducing human dignity.",
      plan: ["Show bodily expression", "Show bodily dependence", "Distinguish limitation from loss of personhood", "Give an example"],
      answer: [
        "Face, voice, gesture, posture and action make an interior personal life present to others; the body is not merely property carried by a hidden self. Embodiment also brings location, fatigue, vulnerability and dependence.",
        "These conditions can restrict how a power is exercised without changing the person's basic nature or dignity. A stroke may block speech and movement, but inability to express a thought is not proof that no subject remains."
      ], source: "Course files: Chapter 3; Human Body; Unity of Man"
    },
    {
      id: "q-person-5", topic: "Human Person", type: "Case", marks: 12,
      prompt: "A conscious locked-in patient cannot speak or move. A visitor says there is ‘no person left’. Evaluate.",
      plan: ["Separate person, power and present act", "Apply body–soul unity", "Address performance-based dignity", "Draw a practical conclusion"],
      answer: [
        "The visitor confuses the visible exercise of powers with the being who possesses them. An organ or bodily condition may block a commanded act such as speech even when awareness and rational nature remain.",
        "Hylomorphism does not deny bodily dependence: the patient is an embodied subject whose damaged condition matters deeply. It also rejects the inference that reduced expression equals reduced humanity.",
        "Dignity is not measured by productivity or communication speed. The practical response is patient care and serious attempts at accessible communication, not abandonment."
      ], source: "Course files: Human Life; Human Body; Unity of Man"
    },
    {
      id: "q-senses-4", topic: "Senses", type: "Short answer", marks: 8,
      prompt: "Distinguish the estimative power from the human cogitative power and give an example of each.",
      plan: ["Define estimative", "Define cogitative", "Give paired examples", "Keep both distinct from universal intellect"],
      answer: [
        "The estimative power is the animal capacity to grasp concrete significance not given as a bare colour or sound—for example, a sheep perceiving this wolf as dangerous. The human counterpart is usually called cogitative power because rational life can shape how a particular situation is assessed—for example, judging this unfamiliar person as a trustworthy lecturer from context and experience.",
        "Both deal with particular, practical meaning. Neither by itself forms a universal concept such as danger, trust or humanity; that belongs to intellect."
      ], source: "Course files: Sensitive Knowledge; Human Appetency; student notes"
    },
    {
      id: "q-senses-5", topic: "Senses", type: "Case", marks: 12,
      prompt: "An eyewitness becomes more confident after a leading question but changes an important detail. Analyse the testimony.",
      plan: ["Separate sensation and perception", "Explain attention and reconstruction", "Evaluate confidence", "Propose responsible checking", "Avoid scepticism"],
      answer: [
        "The original event was selectively attended to and organised into a meaningful perception. Memory then encoded only part of it; later questions and imagination can alter how the event is reconstructed at retrieval.",
        "Confidence is psychologically important but is not an infallible measure of accuracy. The account should be compared with independent witnesses, recordings and contemporaneous evidence.",
        "Fallible memory supports careful verification, not the conclusion that perception never reaches reality. Detecting and correcting error itself depends on access to evidence."
      ], source: "Course files: Sensitive Knowledge and Memory; enriched by OpenStax memory research"
    },
    {
      id: "q-affect-4", topic: "Affectivity", type: "Short answer", marks: 10,
      prompt: "Use the five Ps of anger to judge whether a correction is appropriate.",
      plan: ["Name all five Ps", "Explain their questions", "Relate anger to reason", "Give one example"],
      answer: [
        "Ask about the right Person, Proportion, Point or timing, Purpose and Presentation. Who should address the wrong? Does the response match its seriousness? Is this the fitting moment? Is the aim restoration rather than revenge? Is the truth communicated firmly but respectfully?",
        "Anger can reveal a perceived injustice and supply energy, but it does not certify that the judgement is correct. Prudence and justice test the facts and direct the passion toward a proportionate good response."
      ], source: "Course files: Human Affectivity; Human Appetency"
    },
    {
      id: "q-affect-5", topic: "Affectivity", type: "Case", marks: 12,
      prompt: "After an insulting group-chat post, Brian feels rage and is about to repost private screenshots. Analyse the moment using IED and virtue.",
      plan: ["Identify the passion and perceived object", "Interpret", "Evaluate", "Direct", "Assess responsibility and propose action"],
      answer: [
        "Brian experiences an irascible response to a present perceived injury. IED first asks him to Interpret what he feels and what actually happened, then Evaluate the evidence, purpose and proportionality, and finally Direct the emotional energy toward a fitting response.",
        "Prudence checks the facts, justice protects what each person is due, temperance restrains impulsive exposure, and fortitude supports a calm confrontation or report. Passion influences action but does not automatically compel it; knowledge and consent still matter.",
        "A pause, preservation of evidence, private clarification and use of an appropriate reporting channel better serve truth and restoration than public retaliation."
      ], source: "Course files: Human Affectivity; original digital-life application"
    },
    {
      id: "q-soul-4", topic: "Soul", type: "Short answer", marks: 10,
      prompt: "Rebuild the exact course chain from intellectual activity to immortality, and identify its limits.",
      plan: ["Start from the intellectual act", "Infer the power's mode", "Explain subsistence", "Explain incorruptibility", "State the conditional limit"],
      answer: [
        "The course begins from acts that grasp universal and non-material objects. It argues that an operation not intrinsically performed by a bodily organ points to an immaterial intellectual power and principle. From this organ-independent operation it argues that the rational soul subsists—possesses being in itself rather than as an accident.",
        "What lacks material parts is not corrupted by the separation of such parts; therefore bodily decomposition would not directly destroy a subsistent immaterial principle. Every arrow requires defence, especially the move from universal content to organ-independent operation.",
        "The conclusion is conditional philosophical reasoning, not something visible on a scan. It does not by itself prove resurrection, detailed memories after death or every religious claim."
      ], source: "Course files: Human Soul; Chapter 3; Lombo and Russo"
    },
    {
      id: "q-soul-5", topic: "Soul", type: "Essay", marks: 12,
      prompt: "If the soul survives, why does the course still call death a rupture rather than liberation from the body?",
      plan: ["Define soul as substantial form", "Explain natural embodied unity", "Clarify subsistence", "Contrast a prison-body view", "Separate resurrection"],
      answer: [
        "The soul is the substantial form of this living body, so the human person is naturally an embodied unity. Subsistence means the rational soul is not an accident and, on the course argument, is not destroyed simply by bodily decomposition; it does not mean the separated soul is another complete human person with a normal embodied life.",
        "Death breaks the body–soul unity through which a human naturally senses, acts and relates. It is therefore deprivation and rupture, not the release of a complete ghost-person from an irrelevant prison.",
        "Theological resurrection answers the hope for restored embodied life. It must be distinguished from the narrower philosophical argument for survival of the rational soul."
      ], source: "Course files: The Human Soul; Unity of Man; Human Destiny"
    },
    {
      id: "q-intellect-4", topic: "Intellect", type: "Short answer", marks: 8,
      prompt: "Distinguish sensitive, conceptual and reflexive knowledge through one connected example.",
      plan: ["Sensitive knowledge", "Conceptual knowledge", "Reflexive knowledge", "Connect the same knower"],
      answer: [
        "Sensitive knowledge receives this visible triangle with a particular size, colour and angle. Conceptual knowledge grasps triangularity as a universal meaning applicable beyond this image. Reflexive knowledge occurs when the knower attends to and evaluates their own act: ‘I understand the definition, but I may have drawn the conclusion too quickly.’",
        "These are not three people inside the mind. They are related acts of one embodied knower, with intellectual knowledge beginning from sensible experience."
      ], source: "Course files: Human Intellect; Intellectual Knowledge"
    },
    {
      id: "q-intellect-5", topic: "Intellect", type: "Case", marks: 12,
      prompt: "A convincing deepfake is widely shared, so a student says it is true because society accepts it. Evaluate using AJR.",
      plan: ["Locate apprehension, judgement and reasoning", "Define truth", "Test popularity as a premise", "Show intellectual humility", "Reach a verdict"],
      answer: [
        "The student apprehends the people and event represented, judges that the video records reality, then reasons from widespread acceptance to truth. The failure lies in the premise: popularity and sincerity do not make a judgement conform to reality.",
        "Social context can shape what evidence people notice, but it does not remove the difference between a manipulated file and the event it claims to record. Check provenance, independent reporting, metadata and internal inconsistencies.",
        "Intellectual humility means proportioning confidence to evidence and correcting a judgement when facts change; it is neither blind certainty nor the claim that nothing is knowable."
      ], source: "Course files: Human Intellect; original media-literacy application"
    },
    {
      id: "q-will-4", topic: "Will", type: "Short answer", marks: 10,
      prompt: "Label the main stages in a deliberate decision to study tonight.",
      plan: ["Present the end", "Deliberate about means", "Judge and choose", "Command and execute", "Finish with fruition or review"],
      answer: [
        "Intellect presents passing the course and understanding the material as possible goods; the will has an initial or simple volition toward the end. Counsel or consilium considers possible means. Practical judgement identifies a suitable plan, and consent/election chooses it.",
        "Command directs the relevant powers; opening the notes, silencing the phone and writing are commanded executions. Fruition or rest follows achievement, while disappointment can prompt a fresh judgement. Real actions may compress several stages, especially through habit."
      ], source: "Course files: Chapter 6; Human Will"
    },
    {
      id: "q-will-5", topic: "Will", type: "Case", marks: 12,
      prompt: "A student cheats to preserve a scholarship. Analyse the choice as a human act.",
      plan: ["Identify the sought good", "Distinguish real and apparent good", "Apply intellect and will", "Name elicited and commanded acts", "Assess pressure and character"],
      answer: [
        "Security, education and family support are genuine goods, but cheating treats marks as a partial or apparent good when obtained against truth and justice. Intellect knows and evaluates the options; the will consents and chooses under the attractive aspect of avoiding loss.",
        "The interior intention, consent and choice are elicited acts of will; copying or typing the answer is commanded through other powers. Scholarship pressure may reduce ease and can mitigate responsibility, but it does not automatically remove knowledge or consent.",
        "The action affects more than the grade: repeated dishonest choices shape the chooser's character. A eudaimonic judgement asks how education, justice and long-term flourishing can be protected together."
      ], source: "Course files: Human Will; original assessment-ethics case"
    },
    {
      id: "q-freedom-4", topic: "Freedom", type: "Short answer", marks: 8,
      prompt: "Explain the statement: human freedom is real but conditioned, not absolute.",
      plan: ["State rational agency", "Name internal conditions", "Name external conditions", "Distinguish influence from compulsion", "Use degrees"],
      answer: [
        "A person can understand reasons, deliberate and own a choice, so freedom is real. Yet bodily condition, knowledge, emotion, habit, resources, coercion, relationships and law shape both the options noticed and the ease of acting.",
        "Conditioning is not identical to total determination. A strong fear may narrow consent without erasing it; direct physical force may remove control of a particular bodily act. Responsibility therefore requires a concrete, degree-sensitive judgement rather than ‘completely free’ or ‘not free at all’."
      ], source: "Course files: Human Freedom; Freedom and Conscience"
    },
    {
      id: "q-freedom-5", topic: "Freedom", type: "Case", marks: 15,
      prompt: "Njeri sincerely thinks copying a friend's assignment is fair because ‘everyone shares’. Must she follow conscience, and is she responsible?",
      plan: ["Define conscience", "Explain why it binds", "Explain why it can err", "Test ignorance and responsibility", "State repair and formation"],
      answer: [
        "Conscience is practical reason judging what ought to be done here and now, not a feeling or private permission slip. A person should not knowingly choose what a certain conscience judges wrong, because that would be willing what they take to be evil.",
        "Sincerity does not make an erroneous judgement true. Njeri must form conscience by checking authorship rules, fairness, the purpose of assessment and trustworthy advice. If the ignorance was reasonably avoidable, it is vincible and may itself carry responsibility.",
        "Distinguish the objective wrong from the degree of personal guilt. The proper response is to stop, acknowledge and repair the act, then form a more truthful habit for future collaboration."
      ], source: "Course files: Freedom and Conscience; Chapter 7"
    },
    {
      id: "q-sex-4", topic: "Sexuality", type: "Short answer", marks: 10,
      prompt: "Explain reciprocal self-gift and why consent is necessary but not sufficient in the course framework.",
      plan: ["Define self-gift", "Explain reciprocity and acceptance", "State what consent secures", "Name further ethical tests", "Label the framework"],
      answer: [
        "Self-gift means freely and truthfully seeking and entrusting one's embodied personal good to another, while receiving the other as a person rather than a tool. Reciprocity requires acceptance, responsibility and concern for the other's genuine good.",
        "Consent is necessary because coercion contradicts gift and agency. Consent alone does not settle deception, exploitation, power imbalance, fidelity, justice or serious harm.",
        "This conclusion belongs to the supplied course's Catholic/personalist normative framework. It should be stated respectfully and distinguished from an empirical description of what every person happens to choose."
      ], source: "Course files: Human Sexuality"
    },
    {
      id: "q-sex-5", topic: "Sexuality", type: "Essay", marks: 12,
      prompt: "Why does the course call family a natural and primary society? Relate its ends to subsidiarity.",
      plan: ["Define natural/primary society", "Explain relational dependence", "State the family ends", "Apply subsidiarity", "Add a rights safeguard"],
      answer: [
        "The course calls family natural because it grows from durable relations of generation, care and belonging rather than being invented only for a temporary chosen task. It is primary because early identity, language, trust and education normally begin there.",
        "Its stated ends are unitive, procreative and educative/nurturing. These should not reduce family members to functions; each remains a person with dignity.",
        "Subsidiarity says larger institutions should support families in tasks they can responsibly perform without needlessly absorbing them. It does not excuse neglect or abuse: public authority must protect rights and assist where a smaller community cannot secure basic goods."
      ], source: "Course files: Human Sexuality; Human Relations"
    },
    {
      id: "q-work-4", topic: "Relations & Work", type: "Short answer", marks: 9,
      prompt: "Distinguish commutative, distributive and legal/general justice with one example of each.",
      plan: ["Define commutative", "Define distributive", "Define legal/general", "Show why friendship is more than justice"],
      answer: [
        "Commutative justice regulates fair exchange between persons: repay a loan or honour a contract. Distributive justice concerns how a community allocates shared benefits and burdens: scholarship criteria or a fair tax burden. Legal/general justice concerns what members owe the common good: obeying just laws and contributing to public safety.",
        "Justice gives each person what is due. Friendship and solidarity can go further by making another's good partly one's own, but they cannot excuse injustice."
      ], source: "Course files: Chapter 9; Human Relations"
    },
    {
      id: "q-work-5", topic: "Relations & Work", type: "Case", marks: 15,
      prompt: "A company's AI monitoring raises output but records every keystroke, penalises breaks and causes burnout. Evaluate.",
      plan: ["Objective work", "Subjective work", "Social and transcendent dimensions", "Justice and technocracy", "Leisure", "Propose a better policy"],
      answer: [
        "Objectively, the system may raise measurable output. Subjectively, it may damage trust, judgement and the worker's health; socially, it changes power, privacy and cooperation; in the transcendent dimension, it may turn service and vocation into pure surveillance.",
        "A technocratic error treats what is measurable and efficient as the complete human good. Justice asks about transparency, consent, due process, remuneration and unequal vulnerability. Genuine leisure and rest are human goods, not defects to eliminate.",
        "A better policy would collect only necessary data, explain its use, include worker participation and appeal, protect breaks, measure quality as well as quantity, and review whether the system serves persons and the common good."
      ], source: "Course files: Human Relations; Human Work; original technology case"
    },
    {
      id: "q-destiny-4", topic: "Destiny", type: "Short answer", marks: 10,
      prompt: "Analyse death as both a biological ending and a personal limit, then distinguish hope from proof of survival.",
      plan: ["Describe biological death", "Explain personal meaning", "Define hope", "State what hope cannot prove", "Link to the soul argument"],
      answer: [
        "Biologically, death ends the integrated operations of the living body. Personally, awareness of finitude changes priorities, promises and the meaning of present action; in the course account it is also the rupture of natural body–soul unity.",
        "Hope is movement toward a difficult future good considered possible, and it can organise courageous present action. Desire and hope alone are not proof that the hoped-for state exists.",
        "A philosophical claim of survival needs the earlier argument from immaterial intellectual operation, subsistence and incorruptibility. Resurrection remains a further theological claim."
      ], source: "Course files: Chapter 10; Human Destiny; Human Soul"
    },
    {
      id: "q-destiny-5", topic: "Destiny", type: "Synthesis essay", marks: 20,
      prompt: "Who am I? Give the connected answer of Philosophical Anthropology rather than a list of topics.",
      plan: ["Give a one-sentence thesis", "Move from life to human powers", "Connect knowledge, will and freedom", "Connect dignity, relation and work", "Address time, death and destiny", "Answer one objection", "Separate reason and faith"],
      answer: [
        "I am an individual embodied person: one living body–soul unity whose rational nature grounds dignity. Vegetative powers sustain organic life; senses and appetites open me to particular goods and harms; intellect reaches meanings and truth; will seeks known good.",
        "Because limited goods do not determine the will completely, I can deliberate and choose. My acts shape character, so freedom is not only choosing anything but growing able to love and act well. I become myself with others through language, family, friendship, society and work, while never becoming a replaceable part of a collective.",
        "Memory, commitment and hope make life biographical. Death exposes bodily finitude; the course then argues—controversially—from intellectual immateriality toward survival and asks about an ultimate creator and end.",
        "Reductive materialism objects that bodily explanation is sufficient; dualism risks dividing the person. Hylomorphism replies that bodily dependence and irreducible meaning belong to one subject. Philosophical conclusions must be argued from reason, while resurrection and revealed destiny are identified as theological claims."
      ], source: "Whole-course synthesis from all supplied topic groups"
    }
  ];

  questions.push(...coverageQuestions);

  const sourceAuditQuestions = [
    {
      id: "q-intro-6", topic: "Introduction", type: "Case", marks: 10,
      prompt: "‘People with low exam scores are less fully human.’ Use the eight critical-thinking checks and the substance–accident distinction to assess this claim.",
      plan: ["Clarify the claim and its purpose", "Define the key concepts", "Expose assumptions", "Ask for evidence and test the inference", "Consider perspectives and implications", "Apply substance and accident"],
      answer: [
        "The claim moves from a measurable performance to degree of personhood. Define ‘exam score’, ‘human’ and ‘less fully’; ask whether the purpose is to predict one academic task or rank human worth.",
        "Its hidden assumption is that current cognitive performance constitutes personal being. Evidence that scores predict some outcomes would not make that metaphysical inference valid. Illness, education, language and test design also offer relevant perspectives.",
        "An exam result is a changeable quality or performance, not the substance of the person. On the course view, rational nature grounds dignity even where a power is immature, blocked or not currently exercised. Accepting the original claim would unjustly make dignity rise and fall with accidents."
      ], source: "Course files: Chapter 1; Aristotelian Views of Being"
    },
    {
      id: "q-life-6", topic: "Life", type: "Structured answer", marks: 9,
      prompt: "Using one sleeping student, distinguish first act, power and operation. Then explain why a list of bodily processes is not a full definition of life.",
      plan: ["Define first act", "Define power", "Define operation", "Apply all three", "Explain organismic unity"],
      answer: [
        "First act is the actuality by which an organised body is alive. A power is a stable capacity of that living subject; an operation is the power currently exercised.",
        "A sleeping student remains alive, retains sight and intellect as powers, but is not presently seeing the room or solving a proof. Non-exercise does not mean loss of the power or life-principle.",
        "Respiration, circulation and excretion are vital processes, but merely naming them misses the subject that coordinates them. The organism assimilates, regulates and acts as one from an intrinsic principle; the processes are signs and services of its life."
      ], source: "Course files: Chapter 2; Vegetative Soul; PA 2 Life"
    },
    {
      id: "q-person-6", topic: "Human Person", type: "Essay", marks: 12,
      prompt: "Explain suppositum and use self-consciousness, somaticity and spirituality to defend the unity of the human person.",
      plan: ["Define suppositum", "Show one subject across acts", "Explain somaticity", "Explain spirituality", "Avoid dualism and reductionism"],
      answer: [
        "A suppositum is the concrete individual that exists and acts. ‘Human nature’ is shared; the suppositum is this unrepeatable person who says ‘I’. Hunger, perception, understanding and choosing are attributed to the same subject.",
        "Somaticity names bodily existence: place, vulnerability, expression and dependence are personal realities, not an outer container. Spirituality names operations that the course argues exceed material description, especially universal knowing and free orientation to good.",
        "Self-conscious unity therefore resists both a ghost-body dualism and a reduction of meaning to mechanism. Body and soul are distinct principles of one acting person; bodily conditions enable and limit the exercise of higher powers without becoming a second subject."
      ], source: "Course files: Unity of Man; Human Body; Notes on the levels of the human person"
    },
    {
      id: "q-senses-6", topic: "Senses", type: "Case", marks: 10,
      prompt: "A crow solves a puzzle, a robot reroutes around traffic and a student invents a new study plan. What may each case show, and what would be needed to infer intellectual knowledge?",
      plan: ["Avoid an instinct-only caricature", "Analyse flexible learning", "Separate programmed adaptation", "Name the object of intellect", "State the evidence limit"],
      answer: [
        "The crow may show perception, memory, estimation and learned problem-solving; it should not be dismissed as a rigid reflex machine. The robot displays designed information-processing and adaptive output, but outward flexibility alone does not establish that it understands the meaning of its goal.",
        "The student can grasp a universal end, compare means as means, explain reasons and revise the end or rule itself. In the course this points toward conceptual and reflexive knowledge.",
        "Behaviour is evidence that requires interpretation. A careful conclusion compares the kinds of object known and the reasons available rather than assuming either that every flexible system thinks or that non-human animals never learn."
      ], source: "Course files: Sensitive Life; Intellectual Knowledge; original comparative case. The LMS-listed Monkey Business file was not supplied locally."
    },
    {
      id: "q-affect-6", topic: "Affectivity", type: "Case", marks: 10,
      prompt: "Maya feels anxious before presenting, labels it ‘proof that I will fail’, and wants to leave. Use emotional intelligence and IED to guide the next action.",
      plan: ["Identify feeling and object", "Separate feeling from judgement", "Evaluate intensity and evidence", "Direct expression/action", "Explain responsibility"],
      answer: [
        "Maya should identify anxiety and its object: possible embarrassment or failure. The emotion is real information about a perceived difficult harm, but ‘I will fail’ is an additional judgement that may be false.",
        "She can reflect on the cause, monitor intensity and pattern, and evaluate evidence: preparation, past performance and the actual stakes. Directing the emotion might include breathing, checking the opening line, asking for support and presenting despite discomfort.",
        "The first feeling is not itself a moral failure. Responsibility grows around the judgements, consent, habits and actions that follow. Courage integrates fear with reason; it does not require feeling no fear."
      ], source: "Course files: Human Affectivity; Chapter 4; original student case"
    },
    {
      id: "q-soul-6", topic: "Soul", type: "Essay", marks: 12,
      prompt: "Distinguish the course claims that the rational soul is spiritual, subsistent, incorruptible and created. How strong is the moral argument for survival?",
      plan: ["Define each term", "Show the inferential order", "Explain the created claim", "Present the moral argument", "State limits and objections"],
      answer: [
        "Spiritual means that intellectual operation is argued to be immaterial in mode. Subsistent means its principle of being is not exhausted by a bodily organ. Incorruptible means it is not destroyed by the separation of material parts; this conclusion follows only if the earlier premises succeed.",
        "The course calls the soul created because an immaterial principle cannot, on its causal account, be produced wholly by matter and therefore requires a transcendent cause. This is an additional argument, not simply another word for spiritual.",
        "The moral argument notes that justice and personal moral development are often unfinished at death and sees this as fitting survival and judgement. It can support a cumulative case or hope, but longing for justice does not by itself demonstrate that survival occurs. Brain dependence and rival accounts of mind remain serious objections to address."
      ], source: "Course files: The Human Soul 1; Human Soul; Human Soul—immortality"
    },
    {
      id: "q-intellect-6", topic: "Intellect", type: "Critical reading", marks: 12,
      prompt: "A class votes that a false quotation is genuine. Analyse the case using intellectual habits, objectivity and the course's map of truth errors.",
      plan: ["Separate agreement from truth", "Use AJR", "Explain intellectual habit", "Apply the source taxonomy carefully", "Describe correction"],
      answer: [
        "Social agreement can explain why a claim spreads, but it does not make the quotation correspond to reality. Apprehension identifies the quotation and source concepts; judgement affirms authenticity; reasoning should connect provenance evidence to that judgement.",
        "A sound intellectual habit checks the primary text, date, context and independent sources. Repeated verification forms stable judgement rather than one lucky answer.",
        "The lecturer's taxonomy would warn against individual subjectivism (‘true for me’) and an extreme social constructivism (‘our vote makes it true’). Those labels should not caricature every theory. Objectivity means the judgement remains answerable to the actual source and can be corrected by evidence."
      ], source: "Course files: Chapter 5; Human Intellect; Topic 3 Knowledge and Truth materials"
    },
    {
      id: "q-will-6", topic: "Will", type: "Essay", marks: 15,
      prompt: "Distinguish voluntas ut natura from voluntas ut ratio, then map the complete deliberate act of applying for an internship.",
      plan: ["Define both modes", "Name the end", "Move through counsel and judgement", "Explain election, command and execution", "End with fruition", "Separate human act from act of a human"],
      answer: [
        "Voluntas ut natura is the will's general and necessary orientation toward good and fulfilment. Voluntas ut ratio is elective willing among limited goods or means under an intellectual judgement.",
        "The student first apprehends the internship as a good and has simple volition; intention directs action toward obtaining it. Counsel or consilium compares applying now, improving the CV or seeking advice. Practical judgement identifies the fitting option; consent accepts it and election chooses a means.",
        "Command sets the chosen action in motion; typing, gathering documents and submitting execute it; fruition or repose follows if the sought good is attained. The deliberately submitted application is a human act. A blink while typing is merely an act of a human unless it too becomes deliberately controlled."
      ], source: "Course files: Chapter 6; Human Will slides"
    },
    {
      id: "q-freedom-6", topic: "Freedom", type: "Essay", marks: 15,
      prompt: "Why are chance, physical indetermination and spontaneity not yet freedom? Relate your answer to necessity, self-determination and conscience.",
      plan: ["Define the three non-freedoms", "Give the positive account", "Distinguish three necessities", "Explain two effects of choice", "State conscience's two duties"],
      answer: [
        "An unpredictable physical event lacks a settled outcome; chance is an unintended meeting of causes; spontaneity arises from an inner impulse. None by itself includes understanding a good, judging reasons and owning a choice. Rational freedom is rooted in intellect's presentation of alternatives and exercised in will.",
        "Necessity of nature and a means required by a freely chosen end do not automatically destroy agency. External coercion directly opposes voluntariness. Each choice has intentionality toward an object and self-determination in the character it forms.",
        "Conscience must seek and verify moral truth, resolve doubt and become well formed—duties of conscience. A person must also respect and follow a certain judgement rather than knowingly choose what they regard as evil—duties toward conscience. Error can reduce responsibility, but avoidable error may itself be culpable."
      ], source: "Course files: Human Freedom slides; Chapter 7; Freedom and Conscience"
    },
    {
      id: "q-sex-6", topic: "Sexuality", type: "Essay", marks: 12,
      prompt: "Explain the three levels of attraction and the four marks of conjugal love in the course's personalist framework. What role do virtues play?",
      plan: ["Label the framework", "Define sensual, affective and rational/personal", "State four marks", "Explain self-gift", "Connect virtues", "Avoid stereotypes"],
      answer: [
        "In the course's Catholic-personalist framework, sensual attraction responds to bodily qualities, affective attraction seeks emotional closeness, and rational or personal love recognises and wills the whole person's real good. Mature love integrates rather than merely suppresses bodily and emotional attraction.",
        "Conjugal love is presented as total, faithful or exclusive, fruitful and enduring. Total self-gift differs from temporary use or ‘lending’ because it joins freedom to truthful reciprocal responsibility over time.",
        "Chastity/self-mastery, humility and charity educate desire toward the whole good; prudence, justice, fortitude and modesty support truthful action. These are normative philosophical/theological claims in the supplied material, not scientific generalisations about every man or woman."
      ], source: "Course files: Chapter 8; Human Sexuality slides"
    },
    {
      id: "q-work-6", topic: "Relations & Work", type: "Comparison", marks: 15,
      prompt: "Compare family, intermediate associations and political community by origin, governing rule and end. Then state four implications of the course definition of society.",
      plan: ["Define society", "Compare the three FIP levels", "State plurality", "State stable bond", "State authority/order", "State shared common end", "Add a qualification"],
      answer: [
        "A society is a stable union of persons cooperating through shared action and authority toward a common end. Family arises through natural kinship and care, is governed by moral duties, and serves unity, generation and formation. Intermediate groups are voluntarily constituted under agreements or statutes for limited chosen ends. Political community answers the natural need for complete common life, is ordered through constitutional, natural and positive law, and serves the common good.",
        "The definition implies more than one person, a durable real bond, coordination or authority, and an end members can share without using one another as tools.",
        "These are course classifications, not automatic moral approvals. A family, club or state can govern unjustly; natural sociality never makes every historical arrangement or positive law right."
      ], source: "Course files: PA 8 Human Relations; Chapter 9"
    },
    {
      id: "q-destiny-6", topic: "Destiny", type: "Essay", marks: 15,
      prompt: "Explain biological, biographical and spiritual time, and show how memory makes mature hope possible without turning hope into proof.",
      plan: ["Define all three temporalities", "Connect past, present and future", "Define hope", "Contrast desire, optimism and proof", "Connect freedom and history", "Apply an example"],
      answer: [
        "Biological or chronological time is measurable succession and bodily rhythm. Biographical time gathers events into the story of a person through choices and relationships. Spiritual time is the capacity to make a remembered past and anticipated future meaningful in present understanding, promise and action.",
        "Memory preserves experienced goods and lessons; hope desires a difficult future good while holding it possible with some confidence. Hope is more structured than a wish and deeper than a cheerful mood, but it does not guarantee or demonstrate the outcome.",
        "Because free persons can promise, repair and begin projects, history contains responsible novelty rather than only cycles. A student who remembers earlier recovery from failure can reasonably hope and revise today; the memory supports action without proving the next result."
      ], source: "Course files: Human Destiny; Lombo & Russo, chapter on temporality"
    }
  ];

  questions.push(...sourceAuditQuestions);

  const memoryDeck = [
    { topic: "Introduction", front: "OMP", back: "Object, Method, Principles — the three things to state when defining a discipline." },
    { topic: "Introduction", front: "TSAMEC", back: "Transcendentals; Substance/accident; Act/potency; Matter/form; Esse/essence; four Causes." },
    { topic: "Introduction", front: "Valid versus sound", back: "Valid: the conclusion follows from the premises. Sound: valid form plus true premises." },
    { topic: "Life", front: "URIS + D", back: "Older chapter: Unity, Rhythm, Immanence and Self-movement. The later Life deck adds self-development/self-realisation as a fifth sign." },
    { topic: "Life", front: "VSR", back: "Vegetative, Sensitive, Rational — nested levels of living operations." },
    { topic: "Life", front: "Vegetative powers", back: "Nutrition, growth and reproduction. Do not replace growth with respiration." },
    { topic: "Human Person", front: "Boethius", back: "An individual substance of a rational nature." },
    { topic: "Human Person", front: "Duality / dualism", back: "Duality distinguishes body and soul as principles; substance dualism treats mind and body as ontologically distinct substances capable, in principle, of separate existence." },
    { topic: "Human Person", front: "Dignity", back: "Intrinsic worth belongs to the person; it is recognised, not awarded by performance." },
    { topic: "Senses", front: "Five external senses", back: "Sight, hearing, smell, taste and touch receive particular sensible qualities." },
    { topic: "Senses", front: "CIMC", back: "Common sense, Imagination, Memory, Cogitative power — the course's internal senses." },
    { topic: "Senses", front: "Image / concept", back: "An image is particular and sensible; a concept is universal and intelligible." },
    { topic: "Affectivity", front: "Concupiscible passions", back: "Love/hate, desire/aversion, joy/sadness: goods or harms considered simply." },
    { topic: "Affectivity", front: "Irascible passions", back: "Hope/despair, daring/fear, anger: difficult goods and harms. Daring is a passion; fortitude is a virtue." },
    { topic: "Affectivity", front: "Temperament / character", back: "Temperament is spontaneous tendency; character is shaped through repeated free acts and habits." },
    { topic: "Soul", front: "Soul", back: "The first intrinsic principle of life; in hylomorphism, the substantial form of the living body." },
    { topic: "Soul", front: "Dependence is not identity", back: "Thought's dependence on brain conditions does not by itself prove thought is identical to those conditions." },
    { topic: "Soul", front: "Immortality / resurrection", back: "Immortality: philosophical survival claim. Resurrection: theological restoration of embodied life." },
    { topic: "Intellect", front: "AJR", back: "Apprehension, Judgement, Reasoning — the intellect's three acts." },
    { topic: "Intellect", front: "Truth", back: "A judgement's conformity with reality; objectivity does not mean that a knower is infallible." },
    { topic: "Intellect", front: "Abstraction", back: "The intellect grasps a universal intelligible feature from particular sensory experience." },
    { topic: "Will", front: "Object of will", back: "Good as understood; intellect presents, will inclines and chooses." },
    { topic: "Will", front: "K-J-C-D", back: "Know, Judge, Choose, Do — a simple map from understanding options to executing a choice." },
    { topic: "Will", front: "Human act", back: "An act proceeding with sufficient knowledge and consent; voluntariness can exist in degrees." },
    { topic: "Freedom", front: "3F", back: "Freedom from constraint, freedom of choice, freedom for excellence." },
    { topic: "Freedom", front: "Habit", back: "A stable disposition formed by repeated acts; it can enlarge or narrow practical freedom." },
    { topic: "Freedom", front: "Conscience", back: "A judgement of practical reason about a concrete act — not simply a feeling or private permission slip." },
    { topic: "Sexuality", front: "Whole-person lens", back: "Biological, affective, personal, relational, social and ethical dimensions must be integrated." },
    { topic: "Sexuality", front: "Consent", back: "Necessary for a voluntary relation, but not alone sufficient to settle truthfulness, justice or harm." },
    { topic: "Sexuality", front: "Course label", back: "Separate empirical claims from the course's personalist/Catholic normative position." },
    { topic: "Relations & Work", front: "I–You", back: "Encounter another as a subject and end, not merely an object or useful It." },
    { topic: "Relations & Work", front: "Solidarity / subsidiarity", back: "Commit to shared good; support smaller agents without unnecessarily replacing them." },
    { topic: "Relations & Work", front: "Four work lenses", back: "Objective product, subjective formation, social contribution, transcendent meaning." },
    { topic: "Destiny", front: "Three meaning routes", back: "Creating/serving, loving/encountering, and choosing a stance toward unavoidable suffering." },
    { topic: "Destiny", front: "Faith / reason", back: "Reason argues from intelligible premises; faith assents to revelation. Distinguish without forcing conflict." },
    { topic: "Destiny", front: "Who am I?", back: "An embodied living person who senses, understands, wills, chooses, relates, works, loves and seeks fulfilment." }
  ];

  memoryDeck.push(
    { topic: "Introduction", front: "A real contradiction", back: "The same claim is affirmed and denied at the same time and in the same respect. Changing time or respect removes the formal contradiction." },
    { topic: "Life", front: "First act / second acts", back: "Soul is the first actuality by which a body is alive; nutrition, sensing and thinking are operations that flow from living powers." },
    { topic: "Human Person", front: "Organ / power / act", back: "Eye / sight / seeing. The material instrument, stable capacity and exercised operation must not be confused." },
    { topic: "Senses", front: "Proper / common sensible", back: "A proper sensible belongs especially to one sense, such as colour to sight; a common sensible, such as shape or motion, is available through more than one sense." },
    { topic: "Affectivity", front: "Five Ps of anger", back: "Person, Proportion, Point or timing, Purpose and Presentation: reason's test for a fitting response." },
    { topic: "Soul", front: "Subsistence is not completeness", back: "Subsistence means possessing being in itself; a surviving rational soul is still naturally ordered to the body and is not the complete embodied condition." },
    { topic: "Intellect", front: "Sensitive / conceptual / reflexive", back: "Know this sensible thing; grasp its universal meaning; then know or examine your own knowing." },
    { topic: "Will", front: "Voluntas ut natura / ut ratio", back: "Natural willing reaches good and happiness in general; elective willing chooses a particular limited good or means after judgement." },
    { topic: "Freedom", front: "Intentionality / self-determination", back: "A free act reaches an object in the world and simultaneously forms the person who chooses it." },
    { topic: "Sexuality", front: "Self-gift test", back: "Is the relation free, truthful, reciprocal, responsible and directed to the person's real good rather than use?" },
    { topic: "Relations & Work", front: "Three forms of justice", back: "Commutative: fair exchange; distributive: shared benefits and burdens; legal/general: duties toward the common good." },
    { topic: "Destiny", front: "Death / immortality / resurrection", back: "Biological rupture of body–soul unity / philosophical survival claim / theological restoration of embodied life." }
  );

  memoryDeck.push(
    { topic: "Introduction", front: "PA's two method directions", back: "Analytical–inductive: experience → principles. Synthetical–deductive: principles → explanation of human phenomena." },
    { topic: "Life", front: "Structure / dynamics / fundamental directions", back: "Unity + organicity / self-movement + adaptation / immanence + transcendence." },
    { topic: "Human Person", front: "SRSTE", back: "Spirituality, Rationality, Somaticity, Transcendence, Emergence—the five characteristics listed in the Human Life file." },
    { topic: "Senses", front: "Proper / common / per-accidens", back: "One sense's special quality / sensed through several senses / a meaningful concrete thing recognised through experience beyond the immediate quality." },
    { topic: "Affectivity", front: "Affective event sequence", back: "Object or stimulus → mental appraisal/agitation → organic alteration → behaviour/expression; intellect and will can reassess and direct the response." },
    { topic: "Soul", front: "Spiritual / subsistent / incorruptible / created", back: "Immaterial mode of operation / has being not exhausted by an organ / not destroyed through material-part separation / requires a cause adequate to an immaterial principle, on the course argument." },
    { topic: "Intellect", front: "Intellectual habit", back: "A stable perfection of knowing formed by repeated truthful acts—not merely one remembered fact." },
    { topic: "Will", front: "Full deliberate-act chain", back: "Simple volition → intention → counsel → practical judgement → consent/election → command → execution → fruition." },
    { topic: "Freedom", front: "Three non-freedoms / three necessities", back: "Indetermination, chance, spontaneity are not yet rational choice. Nature, required means and external coercion are distinct necessities; coercion directly opposes willing." },
    { topic: "Sexuality", front: "3 levels + 4 marks", back: "Sensual, affective, rational/personal attraction; course conjugal ideal: total, faithful/exclusive, fruitful, enduring." },
    { topic: "Relations & Work", front: "Two fourfold work lenses", back: "Course chapter: objective, subjective, social, transcendent. Lombo–Russo: subjective, objective, relational, ecological. Label the source." },
    { topic: "Destiny", front: "Three temporalities", back: "Biological/chronological, biographical and spiritual: measurable succession, lived story, and meaningful presence of past/future in present action." }
  );

  const sourceLedger = [
    {
      topic: "Introduction & history",
      files: [
        "Chapter 1 - INTRODUCTION.doc",
        "PA 1. Introduction to PA.pdf",
        "PA 1. Aristotelian Views of Being.pdf",
        "History of Anthropology - J.F. Selles.pdf",
        "ANNOSCIA C. - In Love With Sophie.pdf"
      ],
      usedFor: "The object and methods of PA, eight critical-thinking checks, four approaches, first principles, six views of being and the historical anthropology map.",
      editorial: "The classical word scientia is explained rather than confused with modern experimental science; Descartes' cogito is not treated as his entire philosophy."
    },
    {
      topic: "Course-wide reference",
      files: [
        "José Angel Lombo, Francesco Russo - Philosophical Anthropology_ An Introduction (2014, Midwest Theological Forum) - libgen.lc.pdf"
      ],
      usedFor: "Cross-checking the order and links between life, knowledge, action, relations and destiny.",
      editorial: "The book's ideas are paraphrased and synthesised; its text and page images are not republished."
    },
    {
      topic: "Life & levels",
      files: [
        "Chapter 2 - LIFE.doc",
        "PA 2. Life.pdf",
        "PA 2, Levels of life.pdf",
        "Vegetative Soul.pdf",
        "Vegetative Soul 2.pdf"
      ],
      usedFor: "Soul as principle of life, the four-versus-five signs, structural/dynamic features, immanence, adaptation, vegetative/sensitive/rational operations and virtual inclusion.",
      editorial: "The older four-sign chapter is explicitly reconciled with the later five-sign deck. Vegetative powers are corrected to nutrition, growth and reproduction; the hierarchy is not presented as an evolutionary ranking or a complete modern biological definition."
    },
    {
      topic: "Human person, body & unity",
      files: [
        "Chapter 3 - HUMAN LIFE.doc",
        "PA 3. Human Life.pdf",
        "PA 3. Human Body.pdf",
        "PA 4. Dualism and Duality.pdf",
        "The Unity of Man.pdf",
        "The Unity of Man (2).pdf",
        "Notes on the levels of the human person.pdf"
      ],
      usedFor: "Person, dignity, embodiment, hylomorphism, substantial unity, suppositum, SRSTE, natural/essential/personal levels, duality, dualism and personal identity.",
      editorial: "Course metaphysics is labelled as a reasoned position. Claims about neurons, fixed sex-chemical effects or eyesight and memory were not repeated without support."
    },
    {
      topic: "Senses, appetites & affectivity",
      files: [
        "Chapter 4 - HUMAN SENSES .  APPETITES.doc",
        "PA 5. Sensitive Knowledge.pdf",
        "Notes by  students on Sensitive Life.doc",
        "Human Appetency.pdf",
        "Human Affectivity-ICS-ACT-FEN-FE-Revised.pdf",
        "Character and Personality B..pdf",
        "Temperament types.pdf"
      ],
      usedFor: "Proper/common/per-accidens sensibles, external and internal senses, imagination and memory functions, appetite, the affective sequence, emotions/passions, temperament, character and personality.",
      editorial: "Four-humour temperament and MBTI material is identified as historical or contested, not presented as settled neuroscience or a diagnosis."
    },
    {
      topic: "Soul, intellect & will",
      files: [
        "Chapter 5 - HUMAN INTELLECT.doc",
        "Chapter 6 - HUMAN WILL.doc",
        "PA 5. Intellectual Knowledge.pdf",
        "PA 6. Human Soul.ppt",
        "PA Human Soul.ppt",
        "PA 6. Human Intellect.ppt",
        "PA 6. Human Will.ppt",
        "The Human Soul 1.pdf"
      ],
      usedFor: "Abstraction, AJR, intellectual habits, truth/error maps, modes of willing, the full human-act sequence, soul-body dependence and immortality arguments.",
      editorial: "Validity is separated from truth and soundness. Neuroscience is not claimed to prove an immaterial soul; immortality is presented as a philosophical argument with objections."
    },
    {
      topic: "Freedom & conscience",
      files: [
        "Chapter 7 - HUMAN FREEDOM.doc",
        "PA 7. Human Freedom.ppt",
        "PA 7. Human Freedom (1).ppt",
        "Philosophical Anthropology I (3,3) - Human Freedom (1).pdf",
        "Cormac Burkes Freedom and Conscience.pdf"
      ],
      usedFor: "Non-freedoms and necessities; external, elective and moral freedom; intentionality, self-determination, habits, voluntariness, conscience formation and responsibility.",
      editorial: "The two PA 7 PowerPoints are exact duplicates, so they were counted once for ideas. Rival free-will positions are included rather than hidden."
    },
    {
      topic: "Human sexuality",
      files: [
        "Chapter 8 - HUMAN SEXUALITY.doc",
        "Philosophical Anthropology - Human Sexuality.pdf"
      ],
      usedFor: "Embodied sexuality, three attraction levels, personalist self-gift, consent, responsibility, virtues, conjugal-love marks and the course's normative framework.",
      editorial: "Catholic/personalist conclusions are labelled as the course position. Absolute claims about men and women are treated as stereotypes unless independently evidenced."
    },
    {
      topic: "Relations, society & work",
      files: [
        "Chapter 9 - HUMAN RELATIONS.doc",
        "PA 8. Human Relations.pdf",
        "On Person and Society. Athropology for rebels. JF Selles.doc",
        "PA. Human work.pdf"
      ],
      usedFor: "Relational personhood, society's definition and FIP comparison, culture/communication, I–You encounter, justice, common good, solidarity, subsidiarity, work/labour, two work lenses, technology and rest.",
      editorial: "Claims about social roles are applied critically and unpaid care is included as work, not made invisible by an employment-only definition."
    },
    {
      topic: "Destiny, death, faith & meaning",
      files: [
        "Chapter 10 - HUMAN DESTINY.doc",
        "PA 10. Human Destiny.pdf"
      ],
      usedFor: "Three temporalities, history, hope, meaning, death, religion, six creator arguments, faith and reason, and the whole-course synthesis.",
      editorial: "The Chapter 10 creator list is not called Aquinas's canonical Five Ways. Immortality and resurrection are separated, and philosophical argument is separated from revealed belief."
    },
    {
      topic: "Completeness note",
      files: [],
      usedFor: "All 46 files physically present in the supplied folder were audited: 28 PDFs, 12 DOC files and 6 PowerPoints.",
      editorial: "The LMS list names a 2026 course outline, Faith and Reason, Monkey Business, group questions and an individual assignment, but those files were not present in the folder. The site does not pretend to have read missing documents."
    }
  ];

  const learningSources = [
    { kind: "Philosophical reference", title: "Aristotle's Psychology", author: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/aristotle-psychology/", use: "Hylomorphism, soul-body unity, nutrition, perception, mind and desire.", caution: "Interpretive scholarship; Aristotle does not fit modern labels neatly." },
    { kind: "Primary text", title: "On the Soul", author: "Aristotle · MIT Internet Classics Archive", url: "https://classics.mit.edu/Aristotle/soul.html", use: "Freely readable primary text on soul as first actuality and living powers.", caution: "Read with guidance: translation and historical context matter." },
    { kind: "Philosophical reference", title: "Thomas Aquinas", author: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/aquinas/", use: "Matter/form, soul/body, perception, knowledge, will and freedom.", caution: "This is the Aristotelian-Thomistic course position, not an empirical finding." },
    { kind: "Philosophical debate", title: "Dualism", author: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/dualism/", use: "Substance dualism, property dualism and interaction problems.", caution: "Duality of principles is not automatically substance dualism." },
    { kind: "Philosophical debate", title: "Human Nature", author: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/human-nature/", use: "Traditional essentialist and evolutionary/species approaches.", caution: "Human nature is debated; do not present one definition as uncontested." },
    { kind: "Philosophical debate", title: "Personal Identity", author: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/identity-personal/", use: "Psychological continuity, animalism and persistence through time.", caution: "Personal identity is not the same question as the conditions for personhood." },
    { kind: "Philosophical reference", title: "Personalism", author: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/personalism/", use: "Dignity, subjectivity, self-determination, relationality and communion.", caution: "Personalism is a family of views, not one uniform system." },
    { kind: "African comparison", title: "Akan Philosophy of the Person", author: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/akan-person/", use: "Community, responsibility, freedom and achieved dimensions of personhood.", caution: "There is no single uniform ‘African view’; compare arguments carefully." },
    { kind: "Philosophical debate", title: "Emotion", author: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/emotion/", use: "Feeling, appraisal, evaluation and motivation theories.", caution: "There is no single consensus definition of emotion." },
    { kind: "Philosophical debate", title: "Free Will", author: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/freewill/", use: "Compatibilism, libertarianism, sourcehood and scepticism.", caution: "The course view belongs in this debate, not outside all objections." },
    { kind: "Philosophical debate", title: "Philosophical Approaches to Work and Labor", author: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/work-labor/", use: "Work, employment, intrinsic goods, alienation, justice and care work.", caution: "Many conclusions are live moral and political disputes." },
    { kind: "Philosophy of biology", title: "Life", author: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/life/", use: "Modern definitions of life and definitional scepticism.", caution: "Do not equate Aristotelian levels with evolutionary taxonomy." },
    { kind: "Philosophical debate", title: "Death", author: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/death/", use: "The harm, timing and meaning of death.", caution: "Different theories of personal identity change parts of the debate." },
    { kind: "Philosophy of religion", title: "Faith", author: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/faith/", use: "Models of faith and the faith-reason relationship.", caution: "Distinguish philosophical analysis from commitment to a revelation." },
    { kind: "Empirical psychology", title: "How Memory Functions", author: "OpenStax Psychology 2e · Rice University", url: "https://openstax.org/books/psychology-2e/pages/8-1-how-memory-functions", use: "Encoding, storage and retrieval.", caution: "Empirical memory science does not settle metaphysical questions about intellect or soul." },
    { kind: "Empirical psychology", title: "Emotion", author: "OpenStax Psychology 2e · Rice University", url: "https://openstax.org/books/psychology-2e/pages/10-4-emotion", use: "Arousal, appraisal and subjective experience.", caution: "Use as an empirical bridge, not as a replacement for the course's philosophical vocabulary." },
    { kind: "Learning science", title: "Strengthening the Student Toolbox", author: "John Dunlosky · American Educator", url: "https://www.aft.org/ae/fall2013/dunlosky", use: "Why practice testing and distributed practice outperform rereading alone.", caution: "Strategies still need accurate feedback and real understanding." },
    { kind: "Learning science", title: "Retrieval Practice", author: "Megan Sumeracki · The Learning Scientists", url: "https://www.learningscientists.org/blog/2016/6/23-1", use: "Close notes, retrieve from memory, then check and correct.", caution: "Retrieval should be effortful but followed by feedback." },
    { kind: "Learning science", title: "Spaced Practice", author: "Yana Weinstein · The Learning Scientists", url: "https://www.learningscientists.org/blog/2016/7/21-1", use: "Revisit ideas over several days; this site turns distributed review into a practical 1–3–7 rhythm.", caution: "The exact 1–3–7 intervals are a useful heuristic, not a uniquely validated protocol; adapt them to the exam date and difficulty." },
    { kind: "Learning science", title: "Dual Coding", author: "The Learning Scientists", url: "https://www.learningscientists.org/blog/2016/9/1-1", use: "Combine words with meaningful soul-power-act maps and contrasts.", caution: "Decorating notes is not dual coding; the diagram must express relationships." }
  ];

  const examChecklist = [
    "I can define PA with its material object, formal object, method and goal.",
    "I can expand TSAMEC, URIS + D, VSR, SRSTE, CIMC, AJR, IED, K-J-C-D, 3F and FIP without mixing their topics.",
    "I can reconcile the older four signs of life with the later five-sign deck and explain self-development.",
    "I can distinguish validity, truth and soundness and test a short argument.",
    "I can explain hylomorphism without describing the soul as a ghost inside a machine.",
    "I can compare vegetative, sensitive and rational powers with an example of each.",
    "I can trace one experience from sensation through internal senses to intellect and will.",
    "I can classify proper, common and per-accidens sensibles and group the inner senses as formal or evaluative.",
    "I can map the passions and explain why an emotion influences but does not always determine action.",
    "I can present the immateriality/immortality argument and a serious brain-dependence objection.",
    "I can analyse voluntariness using knowledge, consent, fear, habit and coercion.",
    "I can contrast voluntas ut natura and ut ratio and name the full stages of a deliberate act.",
    "I can explain freedom from, freedom of choice and freedom for excellence.",
    "I can state the course's sexuality position respectfully and separate norms from empirical claims.",
    "I can contrast individualism, collectivism and relational personalism.",
    "I can apply solidarity and subsidiarity to a fresh case.",
    "I can explain objective, subjective, social and transcendent dimensions of work.",
    "I can label the course work lens separately from Lombo and Russo's subjective, objective, relational and ecological lens.",
    "I can distinguish philosophical immortality from theological resurrection.",
    "For a 10+ mark essay, I write a thesis, define terms, give reasons, use an example, answer an objection and conclude.",
    "I have attempted at least one model question closed-book and corrected it in a different colour.",
    "I can answer the whole-course question ‘Who am I?’ as a connected argument, not a list."
  ];

  window.PA_DATA = {
    course: { code: "HED 1201", title: "Philosophical Anthropology", lecturer: "Ms. Caroline S. Maingi", year: 2026 },
    lessons,
    questions,
    memoryDeck,
    sourceLedger,
    learningSources,
    examChecklist
  };
})();

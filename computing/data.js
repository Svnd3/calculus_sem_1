/* Computing Fundamentals study content, synthesised from Hezron's supplied course pack. */
window.COMPUTING_DATA = (() => {
  "use strict";

  const H = (...parts) => parts.join("");
  const modules = [
    {
      id: "digital-foundations", number: 1, navTitle: "Digital foundations", title: "Computers, data and information systems", minutes: 55,
      summary: "Start with the whole picture: data becomes useful information through an organised system of people, procedures, hardware, software and networks.",
      question: "When does a collection of facts become useful information?",
      catch: [
        "Data are raw facts; information is data processed into meaning for a purpose.",
        "A computer follows IPOSC: Input → Processing → Output → Storage → Communication. Some books call IPOS the core cycle and treat communication as its extension.",
        "An information system is wider than a computer: People, Procedures, Data, Software, Hardware and Networks work together.",
        "Judge information with ACCURATE: Accurate, Complete, Current, Useful, Relevant, Accessible, Timely, Economical."
      ],
      mnemonic: { code: "PPDSHN + ACCURATE", line: "People, Procedures, Data, Software, Hardware, Networks — then test the quality.", note: "A machine can process perfectly and still produce bad information if its input data or procedure is wrong: garbage in, garbage out." },
      sections: [
        { title: "1. Data, information and knowledge", priority: "must", html: `<p><strong>Data</strong> are unprocessed facts such as <em>62, 71, 84</em>. Context and processing turn them into <strong>information</strong>: “the class average is 72.3%.” When a person understands that information and can use it to decide—perhaps arranging revision for a weak topic—it contributes to <strong>knowledge</strong>.</p><p>Processing may involve sorting, classifying, calculating, comparing, summarising or checking. Information is valuable only when it reduces uncertainty or supports an action.</p><div class="plain-box"><strong>Exam contrast:</strong> data are the input facts; information is the meaningful output. Do not define information as merely “processed data” without mentioning meaning, context or usefulness.</div>` },
        { title: "2. The IPOSC cycle and feedback", priority: "must", html: `<p><strong>Input</strong> captures data; <strong>processing</strong> applies instructions; <strong>output</strong> communicates results; <strong>storage</strong> keeps data, programs and results for later; <strong>communication</strong> exchanges them with another device or system. Some sources use <strong>IPOS</strong> for the four core operations and discuss communication separately. In this room, IPOSC keeps the networked step visible.</p><p>In an ATM, the card/PIN/amount are inputs, validation and balance calculations are processing, cash and a message are outputs, the updated transaction record is stored, and the ATM communicates with the bank. A failed balance check feeds back a request for a smaller amount.</p><div class="exam-tip"><strong>Application tip:</strong> for any scenario, name the actual device or data at every IPOSC stage. “Keyboard” is an input device; “the PIN typed through it” is input data.</div>` },
        { title: "3. Computer system versus information system", priority: "must", html: `<p>A <strong>computer system</strong> combines hardware, software, data and users to perform computing tasks. An <strong>information system</strong> is the wider organisational arrangement that collects, processes, stores and distributes information. It includes the people who make decisions and the procedures they follow.</p><table class="comparison"><thead><tr><th>Element</th><th>Question it answers</th><th>Example</th></tr></thead><tbody><tr><td>People</td><td>Who uses/manages it?</td><td>Cashier, technician, manager</td></tr><tr><td>Procedures</td><td>What agreed steps?</td><td>Refund approval process</td></tr><tr><td>Data</td><td>What facts enter?</td><td>Item code, price, date</td></tr><tr><td>Software</td><td>What instructions?</td><td>Point-of-sale app</td></tr><tr><td>Hardware</td><td>What physical equipment?</td><td>Scanner, CPU, printer</td></tr><tr><td>Networks</td><td>How is it connected?</td><td>Store LAN and internet</td></tr></tbody></table>` },
        { title: "4. Computer characteristics, generations and classes", priority: "useful", html: `<p>Computers are valued for <strong>speed, accuracy, diligence/consistency, automation, versatility, storage capacity and reliability</strong>. These are capabilities, not intelligence: a computer has no independent judgement, values or common sense, and accurate processing of bad instructions/data still gives bad output—<strong>GIGO</strong>.</p><p>Generations are conventionally linked to <strong>vacuum tubes</strong>, <strong>transistors</strong>, <strong>integrated circuits</strong>, then <strong>microprocessors</strong>. Many exam schemes call AI, natural-language interfaces and parallel processing “fifth generation,” but there is no single agreed start/end date; modern systems combine several technologies.</p><p>Systems may be classified by purpose (general or special purpose), data handled (digital, analogue or hybrid), or scale/use (embedded device, personal computer, server, mainframe, supercomputer). Categories can overlap: a car contains many special-purpose embedded digital computers.</p><div class="sticky-note"><strong>Sticky fact:</strong> “bigger” is not automatically “faster at everything.” A supercomputer targets huge parallel calculations; a mainframe targets reliable, high-volume transactions and many simultaneous users.</div>` },
        { title: "5. Software categories and acquisition choices", priority: "must", html: `<p><strong>System software</strong> manages or supports the computer: operating systems, drivers and many utilities. <strong>Application software</strong> helps users perform tasks such as accounting or design. <strong>Utilities</strong> maintain, protect or analyse a system; <strong>firmware</strong> is persistent low-level software closely tied to hardware. The same product can cross labels, so explain its main role.</p><p><strong>Off-the-shelf</strong> software is ready-made and usually faster/cheaper to adopt but may not fit every process. <strong>Custom</strong> software can fit closely but costs more, takes time and creates maintenance risk. Open-source describes licence/source-code rights—not automatically zero cost or unlimited permission. Compare perpetual purchase, subscription/lease and in-house build by requirements, fit, total lifecycle cost, support, security, compatibility, data ownership, lock-in and exit.</p><div class="plain-box"><strong>Decision line:</strong> do not ask only “Which is cheapest today?” Ask which safely meets the need across its useful life.</div>` },
        { title: "6. Data-processing stages and modes", priority: "must", html: `<p>A defensible processing path is: collect/capture → prepare and check → input → process → output → store/distribute → review/feedback. <strong>Validation</strong> tests data against a rule (range, type, presence, format); it can accept a believable but wrong value. <strong>Verification</strong> checks that data was copied/entered as the source intended, for example by double entry or visual comparison. Neither alone guarantees truth.</p><table class="comparison"><thead><tr><th>Mode</th><th>Meaning</th><th>Good example</th></tr></thead><tbody><tr><td>Batch</td><td>Accumulate transactions and process them together</td><td>Monthly payroll</td></tr><tr><td>Online/interactive</td><td>User exchanges data directly with a connected system</td><td>Course registration</td></tr><tr><td>Real-time</td><td>Respond within a required deadline as events occur</td><td>Airbag or industrial control</td></tr><tr><td>Centralised</td><td>Main processing/resources concentrated centrally</td><td>One managed university data centre</td></tr><tr><td>Distributed</td><td>Processing/data shared across connected locations</td><td>Cloud edge services</td></tr><tr><td>Client-server</td><td>Clients request a service from managed servers</td><td>Browser and Web server</td></tr></tbody></table><p>“Online” does not automatically mean real-time: an online form can accept data now but process it overnight. Real-time means the deadline is part of correctness.</p>` },
        { title: "7. Information quality and business value", priority: "deep", html: `<p>Organisations use information to coordinate operations, serve customers, control resources, spot patterns and make strategic decisions. Quality is multi-dimensional: a perfectly accurate report delivered after the decision may be useless; a current report missing half the records can mislead.</p><p>Use <strong>ACCURATE</strong>: Accurate, Complete, Current, Useful, Relevant, Accessible to authorised users, Timely and Economical. Security adds confidentiality, integrity and availability. Access should be easy for an authorised user but blocked for an unauthorised one.</p>` }
      ],
      worked: [
        { title: "Hospital appointment system", prompt: "Map a patient booking to IPOSC and the six information-system resources.", answer: ["IPOSC: patient details enter; rules/availability are processed; confirmation is output; the booking/audit trail is stored; the clinic and patient receive communication.", "People: patient, receptionist and clinician. Procedures: booking, triage and cancellation rules.", "Data: patient ID, date, symptoms, clinician, slot and status. Software applies the rules; hardware captures/displays; networks connect participants."] },
        { title: "Bad dashboard", prompt: "A manager receives an accurate sales report three weeks late. Is it high-quality information?", answer: ["It is accurate but not timely for a time-sensitive decision, which can make it unfit for purpose.", "Lateness alone does not prove the underlying data are not current: check the report's data period. Information quality has several independent dimensions."] }
      ],
      recall: ["Data versus information?", "Expand IPOSC—and explain why some texts write IPOS.", "Validation versus verification?", "Batch, online and real-time?", "System versus application software?", "Build, buy or subscribe—which factors?"]
    },
    {
      id: "hardware-architecture", number: 2, navTitle: "Hardware & architecture", title: "Inside a personal computer", minutes: 58,
      summary: "Follow data and power through the motherboard, CPU, memory, storage, buses, ports and peripherals—and learn what each specification really means.",
      question: "What has to happen inside the case between clicking an app and seeing it open?",
      catch: [
        "CPU executes instructions; RAM holds the active working set; storage keeps it when power is off.",
        "The motherboard connects components through sockets, slots, buses, ports and chipset/controller logic.",
        "CPU performance depends on architecture, cores, clock, cache, workload and cooling—not GHz alone.",
        "Compatibility comes before speed: socket, form factor, RAM generation, interface, power and physical clearance must match."
      ],
      mnemonic: { code: "CRuSP + FIT", line: "CPU, RAM, storage, power — then Form factor, Interface, Thermal/power limits.", note: "Use CRuSP to explain the core path, and FIT before recommending an upgrade." },
      sections: [
        { title: "1. Motherboard: the meeting place", priority: "must", html: `<p>The <strong>motherboard</strong> is the main circuit board. It provides the CPU socket, DIMM memory slots, expansion slots, storage connectors, firmware chip, power connectors and external I/O ports. Conductive traces and buses move data, addresses and control signals.</p><p>The board’s form factor—such as ATX, microATX or Mini-ITX—affects case fit, mounting holes, power connections and expansion capacity. A component being electrically good does not make it compatible with every board.</p>` },
        { title: "2. CPU: fetch, decode, execute", priority: "must", html: `<p>The CPU repeatedly <strong>fetches</strong> an instruction from memory, <strong>decodes</strong> what it means, <strong>executes</strong> the operation, and stores the result. The control unit directs activity; arithmetic/logic units perform calculations and comparisons; registers hold the fastest immediate values; cache keeps frequently needed data near the cores.</p><p>More cores help workloads that can run tasks in parallel. Clock rate counts cycles per second, but different architectures complete different work per cycle. Thermal throttling can deliberately slow a hot CPU to protect it.</p><div class="exam-tip"><strong>Do not write:</strong> “the CPU stores all files.” Files live on storage; instructions/data currently in use are copied into RAM and cache.</div>` },
        { title: "3. RAM, ROM/firmware and storage", priority: "must", html: `<p><strong>RAM</strong> is fast, read/write and volatile: its contents disappear when power is removed. More RAM lets more active programs keep working data close to the CPU, reducing slow storage swaps. <strong>Firmware</strong> is persistent low-level code stored in flash/ROM-like memory and starts hardware before the OS.</p><p>An HDD stores bits magnetically on rotating platters; an SSD stores them in flash with no moving parts. SATA and NVMe describe interfaces/protocol paths, not merely brands. NVMe drives typically use PCIe and offer much lower latency.</p><table class="comparison"><thead><tr><th>Place</th><th>Speed</th><th>Volatile?</th><th>Main job</th></tr></thead><tbody><tr><td>Registers/cache</td><td>Fastest</td><td>Yes</td><td>Immediate CPU work</td></tr><tr><td>RAM</td><td>Fast</td><td>Yes</td><td>Active programs/data</td></tr><tr><td>SSD/HDD</td><td>Slower</td><td>No</td><td>Long-term files/apps</td></tr></tbody></table>` },
        { title: "4. Power, cooling and expansion", priority: "must", html: `<p>The PSU converts wall <strong>AC</strong> into regulated <strong>DC</strong> voltages for internal components. Wattage is capacity, not power constantly consumed. The unit must provide the correct connectors and sufficient quality/capacity for peak load.</p><p>Heat moves through a thermal interface material into a heat sink, then air or liquid carries it away. Dust, failed fans, blocked vents or poor contact cause higher temperature, instability and throttling. PCIe slots accept GPUs, network cards and other expansion devices.</p><div class="warning-box"><strong>Safety:</strong> never open a PSU; capacitors may retain dangerous charge after unplugging. Replace the entire unit.</div>` },
        { title: "5. Ports, cables, input and output", priority: "useful", html: `<p>USB carries data and often power; USB-C describes the connector shape, not one guaranteed speed or feature set. HDMI and DisplayPort commonly carry digital audio/video. Ethernet uses an RJ-45-style connector for wired networking. A 3.5 mm jack carries analogue audio; Thunderbolt can tunnel high-speed data/video over USB-C-shaped connectors.</p><p>Input devices capture data (keyboard, mouse, scanner, microphone, camera, sensors). Output devices present results (display, printer, speakers, haptic actuator). A touchscreen and storage device can be both input and output.</p>` },
        { title: "6. Reading a specification", priority: "deep", html: `<p>A good comparison connects a specification to the workload. RAM capacity affects how much active work fits; CPU cores and architecture affect computation; GPU capability affects graphics/parallel tasks; storage type affects boot and load latency; battery watt-hours describe stored energy.</p><p>Do not recommend the highest number blindly. Check bottlenecks, compatibility, total cost, reliability, repairability, energy use and what the user actually does.</p>` }
      ],
      worked: [
        { title: "Why did the app take time to open?", prompt: "Trace a program from SSD to the visible window.", answer: ["The user supplies input by clicking.", "The OS locates executable/data blocks on storage and loads required parts into RAM.", "The CPU fetches instructions through cache/registers and executes them; GPU may render the interface.", "The display receives output. Storage keeps files, while RAM holds the active working set."] },
        { title: "Upgrade advice", prompt: "A laptop with 4 GB RAM and an HDD becomes slow with many browser tabs. What should be checked?", answer: ["Confirm high memory use and disk activity in the system monitor before buying parts.", "Check whether RAM is replaceable, supported type/capacity and free slot.", "Check SSD interface/form factor and cloning/reinstallation plan.", "Explain that added RAM helps multitasking and an SSD helps loading; neither fixes malware, overheating or a weak CPU automatically."] }
      ],
      recall: ["Fetch–decode–execute?", "RAM versus storage?", "What does the motherboard do?", "Six compatibility checks?", "Why is GHz not enough?", "Name four port use-cases."]
    },
    {
      id: "safety-assembly", number: 3, navTitle: "Safety & assembly", title: "Work safely, then build in the right order", minutes: 48,
      summary: "Protect yourself, the components and the data before opening a case; then disassemble, install and verify systematically.",
      question: "Why can a spark too small to feel destroy a component?",
      catch: [
        "Power off, unplug, discharge, remove jewellery, secure clothing and identify hazards before touching components.",
        "ESD can damage chips below the human sensation threshold; use a grounded mat/strap and handle parts by edges.",
        "Photograph, label and document before disassembly; never force a keyed connector.",
        "After assembly: inspect, power on, confirm POST/firmware detection, then test the operating system."
      ],
      mnemonic: { code: "POWER → EDGE → MAP → POST", line: "Remove power; hold edges; map cables/screws; verify POST.", note: "The safe order matters more than memorising a bag of tool names." },
      sections: [
        { title: "1. Personal and electrical safety", priority: "must", html: `<p>Shut down correctly, disconnect mains power and attached devices, and work in a clean, dry, ventilated area. Remove jewellery and secure loose clothing. Some monitors, laser printers and power supplies contain high voltage or heat even after switch-off; only trained personnel service their high-voltage sections.</p><p>Lift heavy devices with the legs, keep liquids away, know the fire extinguisher and exit, and follow local safety/data rules. A fuse or circuit breaker protects a circuit; it does not make unsafe work safe.</p>` },
        { title: "2. ESD and environmental protection", priority: "must", html: `<p><strong>Electrostatic discharge</strong> is a sudden transfer of charge between objects at different electrical potentials. A person may carry thousands of volts without feeling it, while delicate ICs can be damaged by far less. Damage may be immediate or latent.</p><p>Use an antistatic wrist strap attached to an appropriate ground, an ESD mat and antistatic bags. Handle boards by their edges; avoid touching contacts/chips. Keep humidity and dust controlled. Do not wear a grounding strap when working on high-voltage live equipment.</p><div class="sticky-note"><strong>Sticky note:</strong> an antistatic bag protects a part when the part is <em>inside</em>. The outside is not your work mat.</div>` },
        { title: "3. Tools and what they are for", priority: "useful", html: `<p>A technician may use Phillips/flat/Torx drivers, a parts organiser, flashlight, compressed air, cable ties, lint-free cloth, isopropyl alcohol and thermal paste. Diagnostic tools include a multimeter, PSU tester, loopback plug, cable tester and software utilities.</p><p>Choose the correct bit size, keep screws sorted, and use only chemicals intended for the surface. Never use a household vacuum inside a PC because it can generate static; hold fan blades while using compressed air so they do not overspin.</p>` },
        { title: "4. Disassembly and reassembly sequence", priority: "must", html: `<p>Record the symptom and configuration first. Back up data where appropriate. Shut down/unplug, open the case, photograph and label cables, then remove external cables, expansion cards, drives, memory, cooler and CPU as the task requires. Store parts safely.</p><p>For assembly, install in a sequence that preserves access: CPU and cooler, RAM, motherboard, drives, PSU, expansion cards and cables. Exact order varies by case. Align pin 1/notches, apply the correct amount of thermal compound, use standoffs, seat latches and route cables away from fans.</p>` },
        { title: "5. First power-on", priority: "must", html: `<p>Before power, inspect for loose screws, wrong headers, unlatched RAM/GPU, disconnected CPU power and obstructed fans. Connect only essential devices. At power-on, listen/watch for POST indicators and enter UEFI/BIOS to confirm CPU, memory, storage, temperature and boot order.</p><p>If it fails, power off and return to a minimal configuration. Change one variable at a time and document the result.</p><div class="exam-tip"><strong>Exam-safe ending:</strong> every hardware procedure should end with “verify full system functionality and document the work.”</div>` }
      ],
      worked: [
        { title: "No POST after RAM upgrade", prompt: "Fans spin but there is no image immediately after adding RAM. Respond safely.", answer: ["Power off and unplug; use ESD protection.", "Confirm the module type/capacity is supported and in the recommended slot.", "Reseat until both latches engage; try one known-good module/slot.", "Check POST LEDs/beeps and firmware detection; record the result."] },
        { title: "Dusty lab PC", prompt: "A student wants to clean a spinning CPU fan with compressed air.", answer: ["Power down and unplug first.", "Hold the blades still; overspinning can damage the bearing or generate voltage.", "Move dust out of the case in a ventilated space and use ESD-safe handling."] }
      ],
      recall: ["What is ESD?", "Three ESD controls?", "Why hold fan blades?", "Why photograph cables?", "What does POST establish?", "Final two troubleshooting actions?"]
    },
    {
      id: "hardware-support", number: 4, navTitle: "Hardware support", title: "Diagnose hardware and plan compatible upgrades", minutes: 54,
      summary: "Turn symptoms into tests: power, heat, memory, storage, display and peripherals—then recommend upgrades that genuinely fit.",
      question: "How do you prove which component is failing without replacing everything?",
      catch: [
        "Separate no-power, no-POST, no-boot and no-display: they point to different stages.",
        "Use evidence: POST codes, firmware detection, temperatures, SMART data, memory tests and known-good swaps.",
        "Change one thing at a time, retest, and never erase user data without a backup/permission plan.",
        "Upgrade compatibility: motherboard/CPU socket, RAM generation, drive interface, PSU capacity/connectors, case clearance and OS support."
      ],
      mnemonic: { code: "Power → POST → Boot → OS; inspect Display beside it", line: "Follow the startup spine, while treating display as a parallel output path.", note: "No image does not prove no POST or no boot. Use LEDs, sounds, remote access and firmware indicators to separate the paths." },
      sections: [
        { title: "1. Four failures that sound like ‘dead’", priority: "must", html: `<p><strong>No power:</strong> no lights/fans—check outlet, cable, PSU switch, adapter and power connections. <strong>No POST:</strong> power appears but firmware cannot initialise essential hardware—use LEDs/beeps and minimal configuration. <strong>No boot:</strong> POST completes but no bootable OS loads—check boot order, drive detection and loader/filesystem. <strong>No display:</strong> the system may boot but the video path fails—check monitor input/power, cable, port, GPU and display mode.</p>` },
        { title: "2. Heat, RAM and storage evidence", priority: "must", html: `<p>Overheating may cause loud fans, throttling, freezes or shutdowns. Inspect dust/airflow, fan operation, cooler seating, thermal interface and temperatures. Memory faults can cause crashes or failure to POST; reseat and test modules one at a time with a memory diagnostic.</p><p>Storage warning signs include slow reads, errors, missing drive and unusual HDD sounds. Check cables/ports, firmware detection, SMART/diagnostic data and backups. SMART is an indicator, not a guarantee: a drive can fail with no warning.</p>` },
        { title: "3. Peripheral and display isolation", priority: "useful", html: `<p>Test the simplest path: power, physical connection, correct input/port, device recognition, driver, configuration, then known-good cable/device. For printers, separate connectivity, queue/spooler, driver, paper path and print-quality issues. For monitors, distinguish “no power”, “no signal” and “bad image”.</p><p>Windows shortcuts can help: <strong>Win+P</strong> chooses projection mode; <strong>Win+K</strong> opens Cast for compatible wireless displays on supported Windows versions.</p>` },
        { title: "4. Upgrade decision and bottlenecks", priority: "must", html: `<p>Start with the user goal and measured bottleneck. For many active apps, RAM may help. For slow boot/file loading, an SSD may help. For 3D rendering, GPU and PSU may matter. For CPU-heavy compilation, processor performance and cooling matter.</p><p>Confirm physical size, interface, socket, firmware support, power draw/connectors, cooling, warranty and OS/driver support. Plan data migration and e-waste disposal before opening the device.</p>` },
        { title: "5. RAID is not a backup", priority: "deep", html: `<p>RAID combines drives for performance and/or fault tolerance. RAID 0 stripes data for speed but has no redundancy. RAID 1 mirrors data. RAID 5 uses distributed parity and normally tolerates one drive failure; RAID 10 combines mirroring and striping. Exact capacity/performance depends on implementation.</p><p>RAID does not protect against deletion, ransomware, theft, fire or controller mistakes. Keep separate, tested backups—ideally following 3-2-1.</p>` },
        { title: "6. E-waste and responsible upgrades", priority: "useful", html: `<p>Reuse or repair when sensible, erase data securely, remove batteries for approved handling, and send equipment to authorised recyclers. E-waste may contain hazardous material and recoverable metals. “Delete” or quick format usually removes references, not necessarily every recoverable bit.</p>` }
      ],
      worked: [
        { title: "Random shutdowns", prompt: "A gaming PC shuts down after 20 minutes but works again when cool.", answer: ["Reproduce and monitor temperature/load; do not assume the PSU first.", "Inspect fans, dust, airflow and cooler contact; verify rated temperatures.", "Test after one corrective change. If temperature is normal, test power delivery and logs.", "Verify under load and document temperatures before/after."] },
        { title: "Fast but unsafe upgrade", prompt: "A user proposes RAID 0 for the only copy of dissertation files.", answer: ["RAID 0 improves throughput/capacity but any member failure loses the whole array.", "Use an SSD for speed if appropriate and create tested independent backups.", "Classic 3-2-1 keeps three copies on two media with one copy off-site; making a copy offline or immutable adds stronger ransomware protection."] }
      ],
      recall: ["No POST versus no boot?", "What evidence checks heat?", "Why is SMART not proof?", "Six upgrade checks?", "RAID 0/1/5/10?", "Why is RAID not backup?"]
    },
    {
      id: "customer-service", number: 5, navTitle: "Customer service", title: "Support people, not just devices", minutes: 38,
      summary: "Manage tickets, priorities, communication and escalation professionally while protecting trust and confidentiality.",
      question: "What makes a correct technical fix still feel like bad support?",
      catch: [
        "A ticket records ownership, impact, urgency, evidence, actions, status and resolution.",
        "Priority is usually impact × urgency; loudest customer is not automatically highest priority.",
        "Listen, clarify, avoid jargon, set honest expectations and update the user.",
        "Escalate with a useful handover; never hide failed attempts or expose confidential data."
      ],
      mnemonic: { code: "HEAR", line: "Hear → Empathise → Act/agree → Recap.", note: "Use HEAR for the conversation and CLEAR for the ticket: Context, Logs, Evidence, Actions, Result." },
      sections: [
        { title: "1. Help desk and ticket workflow", priority: "must", html: `<p>The help desk is a central contact point for support. A request normally moves through <strong>logging, categorisation, prioritisation, assignment, investigation, resolution, user confirmation and closure</strong>. Some tickets are escalated to specialists or management.</p><p>A good record prevents repeated questions and supports handover, trend analysis, accountability and a knowledge base. Record facts and exact error text—not blame or guesses.</p>` },
        { title: "2. Queue, SLA and priority", priority: "must", html: `<p>A queue controls which request is handled next. <strong>Impact</strong> asks how many/which services or people are affected; <strong>urgency</strong> asks how quickly harm grows. Their combination informs priority. A service-level agreement (SLA) sets agreed response/resolution targets and responsibilities.</p><p>A payroll outage for the whole company can outrank one executive’s cosmetic display issue. Safety, security and critical-service risks may require immediate escalation.</p>` },
        { title: "3. The support conversation", priority: "must", html: `<p>Introduce yourself, let the user explain, acknowledge the inconvenience, ask open questions first and focused questions next, then restate the problem. Avoid acronyms unless explained. Get consent before remote access, disruptive actions or handling personal files.</p><p>Never talk down to the user or promise an impossible deadline. Explain what will happen next and when they should expect an update. After fixing, ask the user to confirm the task works in their real context.</p>` },
        { title: "4. Escalation and handover", priority: "useful", html: `<p>Escalate when the issue exceeds access, authority, expertise, time/SLA or risk limits. Functional escalation sends it to a specialist; hierarchical escalation involves management/authority. The first technician still owns a clear handover.</p><p>Use <strong>CLEAR</strong>: Context and contact; Logs/symptoms; Evidence; Actions already tried; Result/current state. Include business impact and safe next step.</p>` },
        { title: "5. Professional and ethical boundaries", priority: "deep", html: `<p>Use least privilege, view only data needed for the task, protect credentials, lock unattended sessions and follow retention/confidentiality policy. Do not install unlicensed software, bypass controls for convenience, or make unauthorised promises.</p><p>Professionalism includes appearance, respectful language, punctuality, realistic scope, documentation and admitting uncertainty early enough to get help.</p>` }
      ],
      worked: [
        { title: "The loud printer ticket", prompt: "A manager demands immediate help with one printer while 40 staff cannot sign in. Prioritise and communicate.", answer: ["The sign-in outage has higher impact and likely priority.", "Acknowledge the manager, log the printer issue and give an honest update/alternative printer if available.", "Escalate the authentication incident with scope and evidence; do not prioritise job title alone."] },
        { title: "Useful handover", prompt: "Write the core of an escalation for intermittent Wi-Fi.", answer: ["Context: user/device/location/time and business impact.", "Evidence: exact disconnect times, signal, IP settings and whether other devices are affected.", "Actions: reconnect, known-good network, driver check and results.", "Current state and safe next test; remove passwords/personally unnecessary data."] }
      ],
      recall: ["Ticket stages?", "Impact versus urgency?", "Expand HEAR.", "What belongs in CLEAR?", "Two types of escalation?", "Why confirm with the user?"]
    },
    {
      id: "troubleshooting", number: 6, navTitle: "Troubleshooting", title: "A repeatable troubleshooting method", minutes: 46,
      summary: "Replace random clicking with a disciplined evidence loop that protects data, tests one theory at a time and documents the result.",
      question: "How do you move from a vague symptom to a proven root cause?",
      catch: [
        "Define and scope the problem before proposing a cause.",
        "Start with simple/high-probability checks, but consider safety, data and security risk first.",
        "Test one hypothesis with a controlled change; correlation is not proof.",
        "Verify full function, add prevention if appropriate, and document—even when escalation solved it."
      ],
      mnemonic: { code: "I-T-T-P-V-D", line: "Identify/gather → Theory → Test → Plan & implement → Verify/prevent → Document.", note: "Memory line: ‘I Test The Plan, Verify, Document.’ In an exam, name all six stages and keep the plan between testing the theory and changing the system." },
      sections: [
        { title: "1. Define and gather", priority: "must", html: `<p>Clarify the exact symptom, error words, onset, frequency and expected behaviour. Ask what changed. Establish scope: one user, one device, one location or everyone? Reproduce safely if possible. Check logs, status pages, configuration and recent work.</p><p>Use open questions (“What happens after sign-in?”) then closed checks (“Does it work on mobile data?”). Preserve volatile evidence and backups when data loss or security is possible.</p>` },
        { title: "2. Establish and test a theory", priority: "must", html: `<p>Build possible causes from the evidence, not stereotypes. Start with the easiest probable cause unless it risks data or safety. A good test changes one variable and has a predicted outcome: “If DNS is the issue, the IP address may respond while the domain name fails.”</p><p>If the theory fails, reverse the change where possible, record it and form the next theory. If it exceeds your authority, escalate rather than improvise.</p>` },
        { title: "3. Plan and implement the fix", priority: "must", html: `<p>Consider downtime, backup, permissions, dependencies, rollback and user communication. A workaround restores service without removing root cause; a resolution corrects the cause. Both can be useful, but label them honestly.</p><p>For a high-risk fix, schedule a maintenance window and test on a small scope first. Never make several undocumented changes at once—you will not know what worked or what caused a new fault.</p>` },
        { title: "4. Verify, prevent and document", priority: "must", html: `<p>Retest the original task, related functions and stability. Let the user confirm. Where appropriate, prevent recurrence through updates, training, monitoring, replacement or a knowledge-base article. Record symptom, cause, action, result, time and affected assets.</p><div class="exam-tip"><strong>Full-mark close:</strong> “Verify full system functionality and implement preventive measures; document findings, actions and outcomes.”</div>` },
        { title: "5. Useful tools without tool worship", priority: "useful", html: `<p>Tools include Device Manager/system information, Event Viewer/logs, Task Manager/activity monitors, ping, ipconfig/ifconfig/ip, nslookup/dig, tracert/traceroute, cable tester, multimeter, memory/storage diagnostics and vendor tools.</p><p>Each tool answers a question. Ping can test reachability but not prove every application works. A cable tester can identify wiring faults but not prove network authentication. State what evidence you expect before running a tool.</p>` },
        { title: "6. Remote support", priority: "deep", html: `<p>Verify the user and ticket, explain what you will see/control, obtain consent, use an approved encrypted tool and stop when the task ends. Never ask for a user’s password; have them type sensitive credentials while screen sharing is paused or obscured where policy permits.</p>` }
      ],
      worked: [
        { title: "Website name fails, IP works", prompt: "A browser cannot open example.org, but pinging its IP works. Show the troubleshooting logic.", answer: ["Scope and reproduce; confirm other domains/devices.", "The working IP path makes physical link and basic IP routing more likely to be okay.", "Test name resolution with nslookup/dig and inspect DNS configuration/cache.", "Correct the DNS setting/service, retest names and other apps, then document."] },
        { title: "‘It stopped this morning’", prompt: "Turn the complaint into useful questions.", answer: ["What exact action fails and what message appears?", "When did it last work, and what changed since then?", "Is one account/device/location affected or many?", "Can it be reproduced? What is the impact and is any data at risk?"] }
      ],
      recall: ["Expand I-T-T-P-V-D.", "What does scope mean?", "Theory versus test?", "Workaround versus resolution?", "Why one change at a time?", "What must documentation contain?"]
    },
    {
      id: "os-foundations", number: 7, navTitle: "OS foundations", title: "Operating systems, booting and resource control", minutes: 54,
      summary: "See the OS as the manager between users/apps and hardware: processes, memory, files, devices, security and interfaces.",
      question: "What does the operating system do after firmware hands over control?",
      catch: [
        "The OS provides abstraction and manages CPU, memory, files, devices, users, security and interfaces.",
        "A program is stored instructions; a process is a running instance with state and resources.",
        "Boot path: power → POST/firmware → boot device/loader → kernel → services → sign-in/interface.",
        "32-bit/64-bit describes data/address architecture; software, CPU and drivers must be compatible."
      ],
      mnemonic: { code: "PM FUDS", line: "Processes, Memory, Files, Users, Devices, Security.", note: "Say ‘PM FUDS’ whenever asked for OS functions, then explain—not just list—each one." },
      sections: [
        { title: "1. OS role and layers", priority: "must", html: `<p>An operating system is system software that acts between applications/users and hardware. It gives convenient abstractions—files instead of raw disk sectors, processes instead of direct CPU control—and allocates resources fairly and safely.</p><p>The <strong>kernel</strong> performs privileged core work. Device drivers translate generic OS requests for particular hardware. System services run background functions. A shell or GUI lets users and programs request work.</p>` },
        { title: "2. Processes and CPU scheduling", priority: "must", html: `<p>A stored program becomes a <strong>process</strong> when executing. A process has code, data, state, open resources and one or more threads. On one core, the scheduler interleaves runnable threads in short time slices to create responsive multitasking; multiple cores may also run tasks genuinely in parallel. Context switching saves one task’s state and restores another’s, and has overhead.</p><p>Multi-user, multitasking and multiprocessing are different: many accounts, many concurrent tasks, and multiple CPUs/cores respectively.</p>` },
        { title: "3. Memory and virtual memory", priority: "must", html: `<p>The OS assigns and protects memory for processes. <strong>Virtual memory</strong> gives each process an address space and can move less-used pages between RAM and storage. It extends usable working space but storage is far slower than RAM, so heavy paging causes thrashing and lag.</p><p>Memory protection prevents one normal process from casually reading/writing another’s address space. A 64-bit architecture can address vastly more memory than a 32-bit one, though edition/hardware limits still apply.</p>` },
        { title: "4. Files, devices, users and security", priority: "must", html: `<p>A file system names and organises data, tracks metadata/permissions and maps logical files to storage blocks. The OS buffers I/O and uses drivers for devices. User accounts, authentication, permissions, encryption, logging and updates support security.</p><p>Use least privilege: work as a standard user and elevate only when needed. File extension and icon are hints, not proof of actual content.</p>` },
        { title: "5. Boot sequence", priority: "must", html: `<p>Power stabilises, firmware runs POST and initialises hardware, then follows its boot order. UEFI/BIOS loads a boot manager/loader from a bootable device. The loader places the OS kernel in memory; the kernel starts drivers/services and presents sign-in/desktop.</p><p>A fault before POST differs from a boot-loader error; a loader error differs from an OS sign-in fault. Locate the stage before choosing a fix.</p>` },
        { title: "6. Installation, partitions and updates", priority: "useful", html: `<p>Before installation, check requirements/compatibility, licence, backups, partition scheme, filesystem, drivers, accounts, network and recovery plan. A clean install replaces the previous system; an in-place upgrade aims to retain apps/data but still needs backup.</p><p>Patch in tested stages, reboot when required and verify important apps/devices. Recovery points are useful but do not replace file backups.</p>` },
        { title: "7. System calls, interrupts and OS types", priority: "deep", html: `<p>An application normally cannot control hardware directly. It makes a <strong>system call</strong>—for example, open a file or create a process—so the kernel can check permission and perform privileged work. An <strong>interrupt</strong> is a signal that needs CPU attention: a keyboard/device can raise a hardware interrupt, while a timer interrupt lets the scheduler regain control. An exception is raised by the current instruction, such as an invalid operation.</p><p>Operating systems may be single-user or multi-user, single-tasking or multitasking, network/distributed, embedded or mobile. A <strong>real-time OS</strong> is judged by predictable response deadlines, not simply by being fast. Hard real-time systems cannot tolerate a missed critical deadline; soft real-time systems can tolerate occasional misses with reduced quality.</p><div class="plain-box"><strong>Memory hook:</strong> system call = a program asks; interrupt = an event calls the CPU's attention.</div>` }
      ],
      worked: [
        { title: "Boot failure location", prompt: "The vendor logo appears, the SSD is detected, then ‘no bootable device’ appears. What stage and checks?", answer: ["Power and much of POST succeeded; the failure is around boot selection/loader.", "Check boot order/mode, whether the correct drive and boot partition are detected, and recent firmware/storage changes.", "Use approved recovery media to inspect/repair boot records only after protecting data."] },
        { title: "8 GB RAM but constant disk activity", prompt: "Many apps are open and the machine becomes slow. Explain a likely mechanism.", answer: ["The active working set may exceed available RAM.", "The OS pages less-used memory to storage; repeated page-ins/outs can cause heavy disk activity and lag.", "Confirm in a system monitor before closing apps, finding leaks or recommending RAM."] }
      ],
      recall: ["Expand PM FUDS.", "Kernel versus shell?", "Program versus process?", "System call versus interrupt?", "Why can paging slow a PC?", "What makes a real-time OS different?"]
    },
    {
      id: "windows-support", number: 8, navTitle: "Windows support", title: "Troubleshoot Windows without random clicking", minutes: 49,
      summary: "Use Windows settings and evidence to isolate display, power, file, app, account and performance issues safely.",
      question: "Which Windows tool answers the question you actually have?",
      catch: [
        "Check physical/power basics before changing software settings.",
        "Task Manager shows live resource use; Event Viewer records events; Device Manager shows hardware/driver state.",
        "Safe Mode reduces drivers/services to help isolate startup faults.",
        "Back up first; use the least destructive recovery option and verify the user’s real task."
      ],
      mnemonic: { code: "P-C-D-S", line: "Power → Connection → Detection/driver → Settings.", note: "For displays and peripherals, P-C-D-S stops you reinstalling drivers when the cable is simply loose." },
      sections: [
        { title: "1. Displays and projection", priority: "must", html: `<p>Separate no power from no signal and bad image. Check monitor power/indicator, cable/adapter, correct input source and another known-good path. Then use Windows detection and <strong>Win+P</strong> to choose PC screen only, Duplicate, Extend or Second screen only. <strong>Win+K</strong> opens Cast for compatible wireless displays on supported Windows versions.</p><p>Wrong resolution/scaling, refresh rate, orientation or driver can distort output. Change one setting and preserve a path to revert it.</p>` },
        { title: "2. Power, sleep and battery", priority: "must", html: `<p>Power plans trade performance for energy use. Sleep preserves a session in RAM with low power; hibernation writes the session to storage and powers down; shutdown closes the session. Fast startup can change the exact Windows shutdown/start behaviour.</p><p>For unexpected sleep/shutdown, distinguish configured timeout, low battery, thermal protection, lid sensor, adapter/battery fault and crash. Generate evidence rather than disabling every protection.</p>` },
        { title: "3. The right Windows tool", priority: "must", html: `<table class="comparison"><thead><tr><th>Tool</th><th>Best question</th></tr></thead><tbody><tr><td>Task Manager</td><td>Which process/resource is busy now?</td></tr><tr><td>Event Viewer</td><td>What error/warning was recorded around the failure?</td></tr><tr><td>Device Manager</td><td>Is hardware recognised and what driver/state is reported?</td></tr><tr><td>Disk Management</td><td>Are disks/partitions/volumes visible and configured?</td></tr><tr><td>Services</td><td>Is a background service running and how does it start?</td></tr><tr><td>System Configuration/Safe Mode</td><td>Does the problem remain with minimal startup components?</td></tr></tbody></table>` },
        { title: "4. Applications, files and permissions", priority: "useful", html: `<p>For an app fault, capture the error, check scope/account, requirements, available storage, updates, permissions and dependencies. Repair/reset or reinstall only after preserving settings/data. Default apps control which program opens a file type; they do not convert the file.</p><p>“Access denied” may be correct security. Confirm identity, ownership, share permissions and file permissions rather than granting Everyone full control.</p>` },
        { title: "5. Recovery ladder", priority: "must", html: `<p>Move from least to most disruptive: restart/retry; repair setting/driver/app; Safe Mode or clean boot; restore point/uninstall update; startup repair/recovery command; reset; restore image/clean installation. The exact path depends on evidence.</p><p>Before destructive steps, verify backups, encryption recovery keys, licence/access and what the user will lose.</p><div class="warning-box"><strong>Never promise:</strong> “Your files will definitely be safe.” Verify the backup and explain risk.</div>` },
        { title: "6. Performance and updates", priority: "deep", html: `<p>Measure CPU, memory, disk, network, temperature and startup impact. High utilisation is not itself a fault—the responsible process and user task matter. Check free space, malware, drivers and system health. Apply trusted updates, understand restart/compatibility impact and test afterwards.</p>` },
        { title: "7. Accessibility is functional support", priority: "useful", html: `<p>Windows accessibility tools include <strong>Narrator</strong> (screen reader), <strong>Magnifier</strong>, text size and contrast themes, colour filters, captions, Voice Access/speech tools, the on-screen keyboard, and Sticky/Filter Keys. Keyboard navigation and visible focus can be essential, not optional convenience.</p><p>Ask the user what works for them before changing an accessibility setting. Do not disable a feature because it looks unfamiliar; preserve the user's configuration, test the actual task and document changes. Useful shortcuts vary by version, so confirm them in current Microsoft documentation.</p>` }
      ],
      worked: [
        { title: "External monitor says no signal", prompt: "Build a shortest-safe troubleshooting sequence.", answer: ["Confirm monitor power and correct input source.", "Reseat/replace cable or adapter and try a known-good port/display.", "Use Win+P/Display settings to detect and choose a mode.", "Then inspect driver/hardware state, retest full function and document."] },
        { title: "Access denied on a shared folder", prompt: "A user asks for administrator rights. What should support do?", answer: ["Verify identity, business need, scope and whether others are affected.", "Check share and NTFS/file permissions plus group membership.", "Request the least privilege needed through the approved process; do not give blanket admin rights.", "Have the user confirm access and record the approved change."] }
      ],
      recall: ["Win+P and Win+K?", "Three diagnostic tools?", "Narrator/Magnifier/captions help whom?", "Sleep versus hibernate?", "What does Safe Mode isolate?", "Recovery ladder?"]
    },
    {
      id: "linux-macos", number: 9, navTitle: "Linux & macOS", title: "Linux, macOS and virtual machines", minutes: 55,
      summary: "Understand the common Unix ideas beneath two different desktops, then troubleshoot with paths, permissions, processes, disks and logs.",
      question: "How can one mental model help you support both Linux and macOS?",
      catch: [
        "Applications ask through a GUI or shell; system calls reach the kernel, drivers and hardware.",
        "Absolute paths begin at the filesystem root; relative paths begin at the current location.",
        "Permissions are read, write and execute for user, group and others: UGO–RWX.",
        "A Type 1 hypervisor runs on hardware; Type 2 runs as an application on a host OS."
      ],
      mnemonic: { code: "UGO–RWX", line: "User, Group, Others × Read, Write, Execute.", note: "Read a permission string in three groups after the first file-type character." },
      sections: [
        { title: "1. Shared Unix-shaped architecture", priority: "must", html: H("<p>Linux is an open-source kernel; distributions package it with libraries, utilities, a package manager and often a desktop to form complete operating systems. macOS is Apple's proprietary Unix-based operating system. They look different, but both expose hierarchical filesystems, users, groups, processes, permissions and command shells.</p>", "<p>The <strong>shell</strong> interprets commands. The <strong>kernel</strong> schedules CPU time, manages memory, filesystems, devices and system calls. Applications normally request privileged work through the kernel rather than controlling hardware directly.</p>") },
        { title: "2. Paths, files and permissions", priority: "must", html: H("<p>The filesystem root is <code>/</code>. An absolute path such as <code>/home/hezron/report.txt</code> starts there; a relative path such as <code>notes/week1</code> starts in the current directory. <code>pwd</code> shows location; <code>ls -la</code> lists files; <code>cd</code> moves; <code>cp</code>, <code>mv</code> and <code>rm</code> copy, move and remove.</p>", "<p>In <code>-rwxr-x---</code>, the dash means regular file; owner has <code>rwx</code>, group <code>r-x</code>, others none. Binary weights 4,2,1 give mode 750. <code>chmod</code> changes modes and <code>chown</code> changes ownership. Use <code>sudo</code> only for an authorised command.</p>") },
        { title: "3. Processes, packages and scheduled work", priority: "must", html: H("<p><code>ps</code> lists processes; <code>top</code> or Activity Monitor shows live resource use; <code>kill</code> requests process termination. Try a normal quit before a force quit because unsaved data can be lost.</p>", "<p>Modern Debian/Ubuntu systems use <code>apt</code> for packages. <code>ifconfig</code> appears in the slides but is legacy on many systems; prefer <code>ip addr</code>. A cron line has minute, hour, day-of-month, month, day-of-week, then command.</p>") },
        { title: "4. macOS support", priority: "useful", html: H("<p>Use System Settings for display, battery, privacy, security and accessibility; Activity Monitor for live processes; Disk Utility and First Aid for storage structures; Time Machine for versioned backup. AirDrop needs proximity, discoverability, Bluetooth, Wi-Fi and suitable firewall settings.</p>", "<p>iCloud synchronises selected data across devices. Like any sync service, it is not automatically an independent backup: a deletion or damaging change can propagate.</p>") },
        { title: "5. Virtualisation", priority: "must", html: H("<p>A hypervisor presents virtual CPU, RAM, storage and network devices to isolated virtual machines. <strong>Type 1</strong> runs directly on hardware and is common in servers. <strong>Type 2</strong>, such as VirtualBox, runs on a host OS and suits learning or desktop testing.</p>", "<p>Allocate resources without starving the host. Snapshots make rollback convenient but are not a substitute for external backup. Choose NAT, bridged or host-only networking according to the VM's needed exposure.</p>") },
        { title: "6. A disciplined support path", priority: "deep", html: H("<p>Define whether the fault concerns the shell, permissions, storage, process, package, network or hardware. Read the exact message and logs, check free space with <code>df</code>, inspect process and permission state, then test one reversible change. Do not paste commands from the internet into an elevated shell without understanding them.</p>") }
      ],
      worked: [
        { title: "Read a permission string", prompt: "Explain -rw-r----- and give its numeric mode.", answer: ["It is a regular file.", "Owner can read and write: 6.", "Group can read: 4. Others have no permission: 0.", "The numeric mode is 640."] },
        { title: "Monday backup", prompt: "Interpret 30 2 * * 1 /usr/local/bin/backup.sh.", answer: ["Minute 30, hour 2, any day of month, any month, weekday 1.", "It runs the script each Monday at 02:30.", "The script still needs correct permission, environment and logging; scheduling does not prove success."] }
      ],
      recall: ["Kernel versus shell?", "Absolute versus relative path?", "Interpret rwx.", "Modern replacement for ifconfig?", "Cron field order?", "Type 1 versus Type 2?"]
    },
    {
      id: "mobile", number: 10, navTitle: "Mobile devices", title: "Mobile devices, apps and support", minutes: 45,
      summary: "Treat a phone as a compact networked computer with sensors, radios, permissions, cloud links and a battery-constrained operating system.",
      question: "What changes when the computer fits in a pocket and carries identity data everywhere?",
      catch: [
        "Mobile troubleshooting still starts with scope, recent change, connectivity, storage, battery and permissions.",
        "App permissions should match a real feature; deny unnecessary camera, microphone, location and contacts access.",
        "Back up and verify account/recovery details before reset or transfer.",
        "MDM separates organisational policy from personal improvisation."
      ],
      mnemonic: { code: "RAPS", line: "Radios, App permissions, Power, Storage.", note: "When an app misbehaves, RAPS catches four common mobile causes before a reset." },
      sections: [
        { title: "1. Mobile hardware and operating systems", priority: "must", html: H("<p>A smartphone integrates a system-on-chip, RAM, flash storage, touchscreen, cameras, microphones, speakers, battery, biometric sensors and radios such as cellular, Wi-Fi, Bluetooth, NFC and GPS/GNSS. Android and iOS manage apps, files, notifications, power, permissions and secure boot.</p>", "<p>Mobile storage is not the same as RAM. Closing apps may reduce active use, but deleting random apps does not repair a damaged battery and more storage does not automatically make the CPU faster.</p>") },
        { title: "2. Connectivity", priority: "must", html: H("<p>Diagnose one radio at a time. Airplane mode disables selected transmitters; Wi-Fi and Bluetooth may then be re-enabled separately. For cellular faults check coverage, account/SIM or eSIM, data settings and APN policy. For Wi-Fi check network identity, authentication, IP configuration and whether other clients work.</p>", "<p>Bluetooth pairing establishes trust between nearby devices; NFC works at very short range for taps, tags and payments. A hotspot shares a mobile data connection and may consume allowance and battery quickly.</p>") },
        { title: "3. Apps, permissions and stores", priority: "must", html: H("<p>Install from trusted stores or managed catalogues, review publisher and permissions, update supported apps, and remove software that is malicious or no longer needed. Clearing an app cache removes temporary data; clearing app data may sign the user out or erase local state.</p>", "<p>Permission prompts should be evaluated by purpose: a map may need location while a basic calculator should not need contacts. On organisational devices, mobile device management can enforce encryption, screen lock, updates, approved apps, remote lock or wipe.</p>") },
        { title: "4. Battery, heat and physical care", priority: "must", html: H("<p>Brightness, poor signal, background activity, navigation, video and heat can drain a battery. Inspect battery usage before blaming hardware. Use compatible chargers, keep ports dry, stop using a swollen or damaged battery and follow safe disposal procedures.</p>", "<p>Heat can trigger throttling or shutdown. Remove an insulating case only if safe, stop heavy work, move away from heat and let the device cool naturally—never put it in a freezer.</p>") },
        { title: "5. Backup, transfer and reset", priority: "must", html: H("<p>Before migration or factory reset, verify cloud/local backup, synchronised photos/messages where intended, authenticator and recovery methods, encryption credentials and account sign-out requirements. A factory reset erases user data but does not repair every hardware fault.</p>", "<p>For disposal, use the platform's secure erase/reset, remove SIM and removable media, release activation locks, record asset disposition and recycle responsibly.</p>") },
        { title: "6. Mobile incident clues", priority: "deep", html: H("<p>Unexpected heat/data use, pop-ups, unknown profiles/apps, changed settings, login alerts or rapid battery drain may indicate compromise, but each can have benign causes. Isolate when risk is credible, preserve evidence, change credentials from a clean device and follow reporting policy.</p>") }
      ],
      worked: [
        { title: "Maps cannot locate the user", prompt: "Other apps work online, but maps shows no location. Use RAPS.", answer: ["Radios: confirm location services/GPS conditions and any required network connection.", "App permissions: allow the appropriate precise-location access and test another location-aware app.", "Power: check whether battery-saving limits location/background work.", "Storage: confirm free space and app cache/data health; then change one thing, retest and document rather than factory-resetting first."] },
        { title: "Phone transfer", prompt: "List safeguards before replacing a staff phone.", answer: ["Verify owner and backup contents, recovery codes and authenticator transfer.", "Apply MDM/encryption policy and inventory records.", "Transfer and test calls, data and required apps.", "Remove accounts/activation lock, securely erase and recycle or redeploy the old device."] }
      ],
      recall: ["Expand RAPS.", "RAM versus storage?", "Bluetooth versus NFC?", "Cache versus app data?", "Why not reset first?", "Three compromise clues?"]
    },
    {
      id: "services-peripherals", number: 11, navTitle: "Accounts & printers", title: "Directories, shared resources and peripherals", minutes: 52,
      summary: "Connect identity, permissions, network services and physical devices so that support fixes access without weakening security.",
      question: "When a resource fails, is the problem identity, permission, path, service, driver or hardware?",
      catch: [
        "Authentication proves identity; authorisation decides permitted actions.",
        "DNS maps names to addresses; DHCP leases IP settings; a directory manages identities and policy.",
        "Effective access can combine share permissions, filesystem permissions and group membership.",
        "For printers, isolate power, connection, queue, driver, spooler, consumable and mechanism."
      ],
      mnemonic: { code: "I-PASS", line: "Identity → Path → Access → Service → System/device.", note: "Use I-PASS for a shared-drive or network-printer fault before granting broad rights." },
      sections: [
        { title: "1. Identity, MFA and directory services", priority: "must", html: H("<p>Authentication answers ‘who are you?’ using something you <strong>know</strong> (PIN/password), <strong>have</strong> (security key/phone) or <strong>are</strong> (biometric). Authorisation answers ‘what may you do?’ True multi-factor authentication combines different factor categories: a password plus another password is still one factor type.</p>", "<p>A local account is known to one device; a workgroup has decentralised peer accounts; a directory centralises identities, groups, computers and policy. Microsoft Active Directory Domain Services is one directory/domain product; LDAP is a protocol used to access directory information, not a synonym for every directory. Use role-based groups and least privilege, disable departed accounts promptly and audit privileged groups.</p>") },
        { title: "2. Core network services", priority: "must", html: H("<p><strong>DNS</strong> resolves human names to records such as IP addresses. <strong>DHCP</strong> leases an IP address, prefix, gateway and DNS settings. File and print services publish shared resources. Authentication, time and certificate services support trusted access.</p>", "<p>A device can reach an IP while a name fails when DNS is broken. A self-assigned address often hints that DHCP was not reached, but verify rather than assume.</p>") },
        { title: "3. Shared drives and effective permission", priority: "must", html: H("<p>A shared path needs network reachability, name resolution, an available server/service, valid authentication and sufficient <strong>share</strong> plus <strong>filesystem</strong> permissions. Typical levels build from read/list to write/modify and full control. ‘Access denied’ is not an instruction to grant Everyone full control.</p>", "<p>When both share and filesystem rules apply over the network, the effective result cannot be more generous than the more restrictive applicable permission; an explicit deny can override an allow in many systems. Check inherited rules and the user's effective group membership, grant the least level required, and document owner, purpose and review date.</p>") },
        { title: "4. Peripheral signal chain", priority: "must", html: H("<p>For any peripheral, trace: device power → physical/wireless connection → port or network → operating-system detection → correct driver → application selection → successful output. Cross-test one part with a known-good alternative to isolate the failing component.</p>", "<p>An adapter changes physical fit; a converter changes signal or protocol. A loose cable cannot be repaired by reinstalling a driver.</p>") },
        { title: "5. Printers and queues", priority: "must", html: H("<p>A print job moves from application to driver, spooler/queue, transport, printer controller and paper-marking mechanism. Check status/error, paper path, consumables, queue pause/offline state, correct destination, network/USB link, driver and spooler.</p>", "<p>Remove a jam in the documented direction with power safety observed. Repeated jams need inspection for scraps, worn rollers, wrong media or damaged guides—not endless reprints.</p>") },
        { title: "6. Service quality and security", priority: "deep", html: H("<p>Remote shares and printers expose data and attack surface. Patch devices, change default credentials, disable unused services, use encrypted protocols, segment where appropriate, log administrative changes and retire unsupported devices.</p>") }
      ],
      worked: [
        { title: "Name fails, address works", prompt: "A share opens by IP address but not by server name. What does that suggest?", answer: ["Basic IP reachability and the file service are likely working.", "The symptom points toward DNS/name resolution, an alias or cached name—not proof, but a strong testable theory.", "Query DNS, check the configured DNS server/record, correct it and retest by approved name."] },
        { title: "Print jobs remain queued", prompt: "The printer is powered and reports ready. What next?", answer: ["Confirm the correct printer and that its queue is not paused/offline.", "Check connection/reachability, then inspect the spooler and a stuck job.", "Test with a small page from another app/device to isolate driver versus device.", "Clear/restart only through approved steps, verify and document."] }
      ],
      recall: ["Authentication versus authorisation?", "What makes MFA truly multi-factor?", "Local/workgroup versus directory/domain?", "What can combine into effective access?", "Expand I-PASS.", "Print signal chain?"]
    },
    {
      id: "networking", number: 12, navTitle: "Networking", title: "Networks, addressing and packet journeys", minutes: 75,
      summary: "Follow one packet from an app through layers, local switching, routing and remote services—and use that path to troubleshoot logically.",
      question: "What must happen before a browser can receive a page from another network?",
      catch: [
        "A switch forwards frames inside a LAN using MAC addresses; a router forwards packets between IP networks.",
        "DNS resolves names, DHCP leases configuration, TCP provides ordered reliable delivery, UDP keeps overhead low.",
        "The OSI model is a diagnostic map, not seven physical boxes.",
        "Start at scope and link, then IP configuration, gateway, DNS, transport and application."
      ],
      mnemonic: { code: "Please Do Not Throw Sausage Pizza Away", line: "Physical, Data Link, Network, Transport, Session, Presentation, Application.", note: "For troubleshooting, walk upward from signal to service; for encapsulation, data moves downward before transmission." },
      sections: [
        { title: "1. Network purpose, scope and direction", priority: "must", html: H("<p>A network connects devices so they can communicate and share resources. A <strong>PAN</strong> links a person's nearby devices; a <strong>LAN/WLAN</strong> covers a limited site; a <strong>MAN</strong> spans a city/metropolitan area; a <strong>WAN</strong> joins distant networks. Exact size boundaries vary. The internet is a global network of networks; the Web is one application that uses it.</p>", "<p>Communication may be <strong>simplex</strong> (one direction only), <strong>half-duplex</strong> (both directions, not simultaneously) or <strong>full-duplex</strong> (both at once). Client-server centralises service provision; peer-to-peer devices share more directly. A topology describes physical or logical arrangement.</p>") },
        { title: "2. Devices, cabling and performance", priority: "must", html: H("<p>A NIC connects a host. A switch learns source MAC addresses and forwards Ethernet frames within a LAN. A router chooses paths for IP packets between networks and is commonly the default gateway. An access point bridges Wi-Fi clients into a network; a modem/ONT adapts an access-provider medium.</p>", "<p>Twisted-pair copper such as Cat 5e/6/6A is affordable but distance/interference limited; fibre uses light for high rate, long distance and electrical isolation. Multimode fibre commonly serves shorter building links; single-mode supports much longer links. <strong>Power over Ethernet (PoE)</strong> can carry power and data to compatible access points, phones or cameras—both source and device must support the correct standard/budget.</p>", "<p>Radio enables mobility but shares spectrum and needs security. Bandwidth is capacity, latency is delay, throughput is achieved rate and jitter is delay variation; applications care about different combinations.</p>") },
        { title: "3. OSI and TCP/IP layers", priority: "must", html: H("<table class='comparison'><thead><tr><th>Layer</th><th>Main concern</th><th>Examples</th></tr></thead><tbody><tr><td>7 Application</td><td>User-facing network service</td><td>HTTP, DNS, SMTP</td></tr><tr><td>6 Presentation</td><td>Format, compression, encryption</td><td>Representation</td></tr><tr><td>5 Session</td><td>Conversation control</td><td>Session management</td></tr><tr><td>4 Transport</td><td>End-to-end ports/delivery</td><td>TCP, UDP</td></tr><tr><td>3 Network</td><td>Logical addressing/routing</td><td>IP, router</td></tr><tr><td>2 Data Link</td><td>Frames/MAC/local delivery</td><td>Ethernet, switch</td></tr><tr><td>1 Physical</td><td>Bits/signals/media</td><td>Cable, fibre, radio</td></tr></tbody></table>") },
        { title: "4. IPv4 addressing and subnetting", priority: "must", html: H("<p>An IPv4 address has 32 bits. A prefix such as <code>/19</code> says the first 19 bits identify the network and the remaining 13 identify addresses inside it. A host compares the destination with its own prefix: local traffic goes directly; off-subnet traffic goes to the <strong>default gateway</strong>.</p>", "<p><strong>Subnet method:</strong> turn the prefix into a mask; locate the interesting octet; compute its block size as 256 − mask value; find the block containing the address. The block's first address is the network, the next block minus one is broadcast, and the addresses between are normally usable hosts. A /24 leaves 8 host bits, so it has 2<sup>8</sup> total addresses and normally 254 usable.</p>", "<p>Private ranges are <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code> and <code>192.168.0.0/16</code>. <code>169.254.0.0/16</code> is link-local, not another private enterprise range. NAT changes address information at an edge; PAT lets many internal sessions share one public address by distinguishing ports.</p>") },
        { title: "5. TCP, UDP and ports", priority: "must", html: H("<p>TCP establishes a connection, numbers data, acknowledges and retransmits to provide an ordered reliable byte stream. UDP sends datagrams without that delivery machinery, suiting low-overhead or real-time uses where the application handles loss.</p>", "<p>Ports identify application endpoints. Common associations include HTTP 80, HTTPS 443, DNS 53, DHCP 67/68, SSH 22 and SMTP 25, but a port number alone does not guarantee what application is present.</p>") },
        { title: "6. IPv6 and neighbour discovery", priority: "must", html: H("<p>IPv6 uses 128-bit hexadecimal addresses. Remove leading zeros in each group and replace one longest consecutive run of all-zero groups with <code>::</code>; use <code>::</code> only once. Link-local addresses begin <code>fe80::/10</code>. IPv6 has no broadcast: it uses multicast and <strong>Neighbour Discovery</strong> instead of ARP.</p>", "<p>With SLAAC, a host learns the prefix and gateway information from ICMPv6 Router Advertisements and forms an address; DHCPv6 may supply other configuration. Do not block all ICMPv6 blindly—it is essential to normal IPv6 operation.</p>") },
        { title: "7. Wi-Fi, segmentation and network controls", priority: "must", html: H("<p>An SSID names a wireless network. Use WPA2-AES or WPA3 with a strong unique passphrase or enterprise authentication; avoid obsolete WEP. 2.4 GHz generally reaches farther but is crowded; 5/6 GHz often offers more capacity at shorter range. Channel, interference, placement and client capability matter.</p>", "<p>A <strong>VLAN</strong> separates logical Layer-2 broadcast domains on shared switching; traffic between VLANs needs routing and policy. A <strong>VPN</strong> encrypts/authenticates a tunnel but does not make an infected endpoint trustworthy. A firewall permits/blocks traffic by policy; an IDS alerts on suspicious activity; an IPS can actively block. SNMP can monitor/manage devices—use secure versions and protect credentials.</p>") },
        { title: "8. Layered troubleshooting", priority: "must", html: H("<p>Define scope first. Then check power/link/Wi-Fi association; valid IP/prefix; local stack and gateway; remote IP; DNS name; required port; application/authentication. <code>ipconfig</code>/<code>ip addr</code>, <code>ping</code>, <code>tracert</code>/<code>traceroute</code>, <code>nslookup</code>/<code>dig</code> and logs each answer a different question.</p>", "<p>Ping failure does not prove a host is down because ICMP may be filtered. Successful ping does not prove the Web app, credentials or database work.</p>") }
      ],
      worked: [
        { title: "A Web request's journey", prompt: "Outline what happens when a user opens https://example.org from another network.", answer: ["DNS resolves the name to one or more IP addresses.", "The host sees the destination is remote, discovers the gateway's link-layer address (ARP for IPv4 or NDP for IPv6) and sends a local frame.", "Routers forward the IP packet. HTTP/1.1 or HTTP/2 normally uses TCP plus TLS; HTTP/3 uses QUIC over UDP with encryption.", "The server response returns, is de-encapsulated and rendered by the browser."] },
        { title: "One floor is offline", prompt: "Every wired device on one floor loses access; other floors work. Prioritise tests.", answer: ["Confirm scope/time and check the floor switch's power/uplink and indicators.", "Inspect recent change, VLAN/uplink state and switch logs; do not edit every PC.", "Cross-test a known-good port/cable only where safe, escalate network infrastructure evidence, verify recovery."] }
      ],
      recall: ["PAN/LAN/MAN/WAN?", "Simplex/half/full duplex?", "Private ranges and /prefix method?", "IPv6 compression and SLAAC?", "VLAN/NAT/VPN differences?", "Layered test order?"]
    },
    {
      id: "security-ethics", number: 13, navTitle: "Security & ethics", title: "Cybersecurity, privacy and professional ethics", minutes: 70,
      summary: "Protect confidentiality, integrity and availability through layered people, process and technology controls—and make defensible ethical choices.",
      question: "How do you reduce risk without pretending that one tool makes a system safe?",
      catch: [
        "Risk links an asset, threat, vulnerability, likelihood and impact; a control reduces likelihood or impact.",
        "CIA means confidentiality, integrity and availability—not a product list.",
        "Use defence in depth: prevent, detect, respond and recover.",
        "Ethical IT requires permission, privacy, accuracy, accountability, fairness and respect for intellectual property."
      ],
      mnemonic: { code: "CIA + AAA", line: "Confidentiality, Integrity, Availability + Authentication, Authorisation, Accounting.", note: "CIA states what to protect; AAA helps control and trace access." },
      sections: [
        { title: "1. Assets, threats, vulnerabilities and risk", priority: "must", html: H("<p>An asset has value: data, people, devices, services, reputation or safety. A threat could cause harm; a vulnerability is a weakness; risk considers likelihood and impact. A control changes risk but rarely removes it completely.</p>", "<p>Risk treatments include avoid, mitigate, transfer and accept. Acceptance must be informed and authorised, not just ignored.</p>") },
        { title: "2. Security goals and controls", priority: "must", html: H("<p><strong>Confidentiality</strong> prevents unauthorised disclosure; <strong>integrity</strong> protects correctness and authorised change; <strong>availability</strong> keeps services usable. Authenticity, accountability, privacy and safety also matter.</p>", "<p>Administrative controls include policy/training; technical controls include MFA, encryption, firewall, endpoint protection and logging; physical controls include locks and environmental safeguards. Controls can be preventive, detective, corrective, deterrent, compensating or recovery-focused.</p>") },
        { title: "3. Common attacks", priority: "must", html: H("<p>Malware includes viruses, worms, trojans, ransomware, spyware and rootkits. Social engineering exploits people through phishing, pretexting, baiting or tailgating. Password attacks include guessing, credential stuffing and offline cracking. Networks face spoofing, interception, denial of service and insecure configuration.</p>", "<p>A virus attaches to a host; a worm can self-spread; a trojan pretends to be legitimate. Ransomware encrypts or steals data for extortion. Do not label every pop-up a virus—collect evidence.</p>") },
        { title: "4. Defence in depth", priority: "must", html: H("<p>Patch supported systems, harden configuration, remove unused services, apply least privilege and MFA, segment networks, encrypt data in transit and at rest, keep tested 3–2–1 backups, monitor logs and train users. No single layer is perfect.</p>", "<p>Passwords should be long and unique; a password manager helps. MFA reduces password-only risk, though phishing-resistant methods are strongest. Encryption protects content, but keys and endpoints still need protection.</p>") },
        { title: "5. Incident response", priority: "must", html: H("<p>Prepare before trouble. When an incident occurs: identify and triage; contain safely; preserve evidence; eradicate cause; recover from known-good state; monitor; learn and improve. Report through the approved channel.</p>", "<p>Do not casually power off or wipe a suspected system if doing so destroys volatile evidence or disrupts containment. Follow the response plan and authorised specialist direction.</p>") },
        { title: "6. Ethics, privacy and law", priority: "must", html: H("<p>Technical ability is not permission. Access only what the task authorises; minimise collected data; keep it accurate and secure; explain meaningful uses; respect licences and authorship; avoid harmful bias; disclose conflicts; report mistakes.</p>", "<p>When values conflict, identify stakeholders, duties, rights, harms and alternatives; check policy/law; choose the least harmful defensible action; document and escalate uncertainty. ‘The computer allowed me’ is not ethical justification.</p>") },
        { title: "7. Security misconceptions", priority: "deep", html: H("<p>Cloud does not automatically mean secure; provider and customer share responsibilities. Incognito mode does not make a user anonymous to networks or sites. A padlock indicates an encrypted connection to a certificate-identified endpoint, not that the site itself is honest. Backups must be restorable, not merely present.</p>") }
      ],
      worked: [
        { title: "Phishing report", prompt: "A user clicked a fake Microsoft 365 link and typed a password. What now?", answer: ["Report immediately; from a trusted path reset the password, revoke sessions/tokens and enforce/check MFA.", "Contain the account/device as policy requires; inspect mailbox rules, logins and affected data.", "Preserve message/header evidence, notify impacted parties through the incident process, recover and document lessons."] },
        { title: "Curious administrator", prompt: "An admin can open a colleague's private folder and wants to check it without a ticket. Analyse ethically.", answer: ["Capability is not authorisation; privacy, confidentiality and accountability are at risk.", "Do not access it. Require a legitimate purpose, approved authority and minimum necessary scope.", "Use auditable procedure and escalate uncertainty to the data/system owner or security role."] }
      ],
      recall: ["Threat versus vulnerability?", "CIA and AAA?", "Virus/worm/trojan?", "Four risk treatments?", "Incident lifecycle?", "Why capability is not permission?"]
    },
    {
      id: "number-logic", number: 14, navTitle: "Number systems", title: "Number systems, codes and digital logic", minutes: 90,
      summary: "Move confidently between binary, octal, decimal and hexadecimal; represent signed data; then reason through gates, codes and state.",
      question: "How do patterns of bits become numbers, decisions, characters and memory?",
      catch: [
        "A digit's value is digit × base to its position; fractional positions use negative powers.",
        "Octal groups binary in threes; hexadecimal groups in fours.",
        "Two's complement is invert then add one; n-bit range is −2^(n−1) to 2^(n−1)−1.",
        "Combinational output depends on current input; sequential output also depends on stored state."
      ],
      mnemonic: { code: "3–4 / Flip+1", line: "Octal groups 3, hex groups 4; two's complement flips bits then adds 1.", note: "For decimal integers divide and read remainders upward; for fractions multiply and read integer parts downward." },
      sections: [
        { title: "1. Place value and bases", priority: "must", html: H("<p>Base <em>r</em> uses digits 0 through r−1. In 101101.101₂, each position has weight …32,16,8,4,2,1,1/2,1/4,1/8… so the value is 45.625₁₀. Hex digits are 0–9 then A=10, B=11, C=12, D=13, E=14, F=15.</p>", "<p>A bit is one binary digit, a nibble four bits and a byte eight bits. A computer word depends on the architecture—it is not always a fixed number of bytes.</p>") },
        { title: "2. Conversion methods", priority: "must", html: H("<p>Decimal integer to base: repeatedly divide by the new base and read remainders bottom-up. Decimal fraction: repeatedly multiply by the new base and read generated integer parts top-down. A fraction may repeat in another base.</p>", "<p>For binary↔octal group three bits outward from the radix point; for binary↔hex group four. Pad integer groups on the left and fraction groups on the right.</p>") },
        { title: "3. Signed numbers and arithmetic", priority: "must", html: H("<p>For fixed-width two's complement, positive values use ordinary binary with leading 0. To represent a negative value, encode its positive magnitude, invert all bits and add 1. Eight-bit range is −128 to +127.</p>", "<p>Subtract by adding the two's complement. Discard a carry beyond the fixed width. Overflow occurs when adding two same-sign values produces the wrong sign—not simply whenever there is an end carry.</p>") },
        { title: "4. Logic gates and DeMorgan", priority: "must", html: H("<p>NOT inverts. AND is 1 only when all inputs are 1; OR is 1 when any is 1; XOR is 1 when inputs differ. NAND, NOR and XNOR are their inverted outputs. NAND and NOR are universal: either alone can build every Boolean function.</p>", "<p>DeMorgan: the complement of a product becomes the sum of complements, and the complement of a sum becomes the product of complements. Memory line: <strong>break the bar, change the sign</strong>.</p>") },
        { title: "5. Combinational versus sequential", priority: "must", html: H("<p>A combinational circuit has no stored state: current inputs determine output. A sequential circuit combines logic with state, often controlled by a clock. An SR device stores one bit; do not mix active-high NOR and active-low NAND invalid-state conventions.</p>", "<p>JK actions are 00 hold, 01 reset, 10 set, 11 toggle. D captures its input at the active edge. T holds at 0 and toggles at 1. Edge or master-slave design avoids race-around.</p>") },
        { title: "6. Codes and error control", priority: "must", html: H("<p>BCD encodes each decimal digit in four bits: 185 is 0001 1000 0101, not ordinary binary. When a BCD digit sum exceeds 9 or produces carry, add 0110. Gray code changes one bit between adjacent values. ASCII is a 7-bit legacy character standard; Unicode covers far more scripts and symbols.</p>", "<p>Parity detects any odd number of flips but may miss an even number. For m data bits, choose Hamming parity bits r so 2^r ≥ m+r+1. Put parity at positions 1,2,4,8…; assuming at most one flipped bit, a non-zero syndrome locates it for correction. Ordinary Hamming single-error correction can miscorrect multiple errors; SECDED adds an overall parity bit to distinguish/detect double-bit errors.</p>") },
        { title: "7. Source-correction corner", priority: "deep", html: H("<p>The supplied notes contain traps: 14.625₁₀ is 1110.101₂; 128₈ is invalid because octal has no digit 8; 123₈ equals 83₁₀; BCD correction is 0110, not 1110; Hamming uses ≥; and hexadecimal D, E, F are 13, 14, 15. This room uses the corrected values.</p>") }
      ],
      worked: [
        { title: "Convert and cross-check", prompt: "Convert 173₁₀ to binary, octal and hexadecimal.", answer: ["Write 173 = 128+32+8+4+1, so the 128,64,32,16,8,4,2,1 columns are 1 0 1 0 1 1 0 1: 10101101₂.", "Group from the right in threes: 010 101 101₂ = 255₈.", "Group from the right in fours: 1010 1101₂ = AD₁₆.", "Cross-check: 10×16+13=173 and 2×64+5×8+5=173."] },
        { title: "Eight-bit −37", prompt: "Represent −37 in 8-bit two's complement.", answer: ["37 = 00100101.", "Invert: 11011010.", "Add 1: 11011011.", "Check by invert+1 returning 00100101, so magnitude 37."] },
        { title: "BCD 7 + 8", prompt: "Add decimal 7 and 8 in BCD.", answer: ["0111 + 1000 = 1111, which is not a valid BCD digit.", "Add correction 0110: 1111 + 0110 = 1 0101.", "Write two digits as 0001 0101, representing 15."] }
      ],
      recall: ["Hex digit values?", "Integer/fraction conversion rule?", "Two's-complement range?", "State DeMorgan.", "JK actions?", "Hamming inequality?"]
    },
    {
      id: "algorithms", number: 15, navTitle: "Algorithms & IS", title: "Algorithms, programming and information systems", minutes: 68,
      summary: "Turn a human problem into precise inputs, processing and outputs; trace it, test it and place it inside a useful information system.",
      question: "How do we know an algorithm solves the right problem, not merely that it runs?",
      catch: [
        "An algorithm must be finite, definite, effective and have defined inputs/outputs.",
        "Sequence, selection and iteration build structured solutions.",
        "A trace table follows variable state; a test plan includes normal, boundary and invalid cases.",
        "An information system is people, process, data and technology—not software alone."
      ],
      mnemonic: { code: "IPO + SIT", line: "Input–Process–Output; Sequence–If/selection–Iteration.", note: "Use IPO to understand the problem, then SIT to structure the solution." },
      sections: [
        { title: "1. Problem definition and IPO", priority: "must", html: H("<p>State the problem, users, constraints, inputs, processing rules, outputs and success criteria before coding. Data becomes information when processed and interpreted in context. Bad input or a wrong rule produces bad output even when the program executes perfectly.</p>", "<p>Decompose a large problem into smaller modules with clear responsibilities and interfaces. Abstraction hides unnecessary detail while preserving what a user of the module needs.</p>") },
        { title: "2. What makes an algorithm", priority: "must", html: H("<p>An algorithm is a finite ordered set of unambiguous, executable steps that maps allowed inputs to outputs. Correctness asks whether it produces required results; efficiency asks what time and space it uses; robustness asks how it behaves at limits and with bad input.</p>", "<p>Pseudocode communicates logic without one language's exact syntax. A flowchart uses start/end ovals, process rectangles, input/output parallelograms, decision diamonds and arrows.</p>") },
        { title: "3. Control structures", priority: "must", html: H("<p><strong>Sequence</strong> runs steps in order. <strong>Selection</strong> chooses a path based on a Boolean condition. <strong>Iteration</strong> repeats while/until a condition or for a known count. Every loop needs progress toward termination.</p>", "<p>Nested structures are valid but excessive nesting becomes hard to reason about. Name variables and procedures for meaning; comment why a non-obvious decision exists rather than restating each line.</p>") },
        { title: "4. Trace, test and debug", priority: "must", html: H("<p>A trace table records each important variable and output after every step/iteration. Test with typical values, boundaries just below/at/above limits, invalid types or missing values, and empty/minimum/large cases. Know the expected result before executing.</p>", "<p>Syntax errors break language rules; runtime errors occur during execution; logic errors run but give the wrong result. Debug by reproducing, narrowing, inspecting state, correcting one cause and running regression tests.</p>") },
        { title: "5. Languages and translation", priority: "useful", html: H("<p>Machine code runs directly; assembly provides symbolic low-level instructions; high-level languages improve abstraction and portability. A compiler generally translates a program before execution; an interpreter executes through another program, though modern systems often mix compilation and virtual machines.</p>", "<p>Choose languages and tools for the problem, ecosystem, safety, performance, maintainability and team—not because one language is universally best.</p>") },
        { title: "6. Information systems", priority: "must", html: H("<p>An information system combines people, procedures, data, hardware, software and networks to support operations and decisions. Transaction processing handles routine events; management information summarises; decision support analyses choices; executive systems provide strategic views.</p>", "<p>Quality information is accurate, complete enough, relevant, timely, consistent, accessible to authorised users and cost-effective. Feedback lets a system compare outcome with goal and adjust.</p>") },
        { title: "7. Development, acquisition and documentation", priority: "deep", html: H("<p>A practical lifecycle covers planning/feasibility, requirements, design, implementation, testing, deployment, operation and maintenance, with iteration and user feedback. When acquiring technology: define the need and acceptance criteria; study feasibility and total cost; gather requirements; compare build, buy or subscription through an RFP, evidence, demos and a pilot; agree licence/SLA, data and exit terms; procure; migrate and train; acceptance-test; measure through life; then retire securely.</p>", "<p>Documentation includes requirements, design decisions, code/API notes, test evidence, deployment, user guidance and change history. A purchase is not successful merely because it was installed—the intended user task and outcome must work.</p>") }
      ],
      worked: [
        { title: "Trace a loop", prompt: "Trace: total←0; for n from 1 to 4, total←total+n; output total.", answer: ["Start total 0.", "After n=1: 1; n=2: 3; n=3: 6; n=4: 10.", "The loop terminates after four iterations and outputs 10.", "It computes the sum 1+2+3+4."] },
        { title: "Grade validation", prompt: "Design logic that accepts a score 0–100 and outputs Pass for 50 or more.", answer: ["Input score.", "If score is missing/non-numeric or below 0 or above 100, output Invalid.", "Else if score ≥ 50, output Pass; otherwise output Fail.", "Test −1, 0, 49, 50, 100, 101 and a non-number."] }
      ],
      recall: ["Algorithm properties?", "IPO and SIT?", "Flowchart shapes?", "Three error types?", "Test categories?", "IS components?"]
    },
    {
      id: "productivity-emerging", number: 16, navTitle: "Digital tools & trends", title: "Productivity tools, the Web and emerging technology", minutes: 65,
      summary: "Use office and web tools with data discipline, then evaluate cloud, AI, IoT and other trends by evidence, benefit, cost and risk.",
      question: "When is a new technology useful—and what trade-off is hiding behind the demo?",
      catch: [
        "A spreadsheet formula begins with = and should reference cells/data cleanly; validate inputs and audit outputs.",
        "The internet is infrastructure; the Web is a linked-resource service over it.",
        "Cloud shifts ownership/operation boundaries but does not remove customer responsibility.",
        "Evaluate innovations with need, evidence, cost, security, privacy, accessibility, sustainability and exit plan."
      ],
      mnemonic: { code: "N-E-C-S-P-A-S-E", line: "Need, Evidence, Cost, Security, Privacy, Accessibility, Sustainability, Exit.", note: "Use NECSPASE as a technology-evaluation checklist instead of repeating marketing claims." },
      sections: [
        { title: "1. Office, multimedia and home-working tools", priority: "must", html: H("<p>Use heading styles rather than manual formatting, page/section controls deliberately, tables for real tabular data, citations for sources and accessibility checks for structure, contrast and alternative text. Templates improve consistency when styles—not scattered font changes—carry the design. Home/office suites combine documents, spreadsheets, presentations, email/calendar, accounting, conferencing, shared storage and collaboration; choose by the task, file compatibility, access, security and total cost.</p>", "<p>Multimedia combines text, graphics/images, audio, video, animation and interactivity. Resolution, frame rate, bit rate, colour depth, sampling and codec/compression affect size and quality. Lossless compression preserves all original data; lossy compression discards detail for smaller files. A presentation should support the speaker: one clear claim per visual, legible text, meaningful diagrams, captions/alternative text, cited media and rehearsed timing. Animation should explain change, not distract.</p>") },
        { title: "2. Spreadsheet thinking—from entry to checked result", priority: "must", html: H("<p>A workbook contains worksheets arranged in rows, columns and cells. Put one variable in each column, one observation in each row, a clear heading above each field and one consistent data type down a field. Convert ranges to tables where appropriate so sorting, filtering and formulas stay attached to complete records.</p>", "<p>Formulas begin with <code>=</code>. Relative references move when copied; absolute references such as <code>$B$2</code> remain fixed; mixed references lock one dimension. Cross-sheet syntax is <code>Sheet2!B5</code>, or <code>'Sales 2026'!B5</code> when a name contains spaces. Core functions include SUM, AVERAGE, MIN, MAX, COUNT, IF, COUNTIF and ISBLANK. The supplied exercises also practise CONCATENATE/text joining and finance/depreciation functions such as PMT, FV, NPV, IRR, SLN, SYD and DDB—use their documented argument order rather than guessing.</p>", "<p>Audit with a simple known case, boundary values and error checks; use validation to prevent bad entry. Sort/filter the <em>whole table</em>, label charts with a truthful scale, and separate input, calculation and output areas. A polished chart cannot rescue wrong data or a shifted reference.</p>") },
        { title: "3. Database basics and choosing the right tool", priority: "must", html: H("<p>A database stores related data in a controlled structure. A table contains <strong>records</strong> (rows) and <strong>fields</strong> (columns); a primary key uniquely identifies a record, while a foreign key links it to another table. Queries retrieve or change selected data; forms support entry; reports present results. Validation, data types and relationships improve integrity.</p>", "<p>A spreadsheet is excellent for personal/small analytical models; a database is stronger when many users share large related records, need transactions, rules, controlled access and reliable querying. Avoid repeating the same fact in many places: good relational design reduces update anomalies. Backups and permissions matter for both.</p>") },
        { title: "4. Internet, Web and online judgement", priority: "must", html: H("<p>The internet is the interconnected network infrastructure. The Web uses URLs, HTTP(S), browsers and servers to link resources. A search engine indexes and ranks material; ranking is not proof of truth.</p>", "<p>Evaluate online information by author/organisation, evidence, publication/update date, purpose, corroboration and relevance. Cite sources and respect licence. A HTTPS padlock protects the connection; it does not certify that every claim is honest.</p>") },
        { title: "5. Cloud and service models", priority: "must", html: H("<p>IaaS supplies virtual infrastructure, PaaS a managed application platform and SaaS a complete application. In IaaS, the provider manages physical facilities/hardware and virtualisation while the customer normally manages guest operating systems, applications, identities, configuration and data. In PaaS/SaaS, the provider manages more of the stack, but the customer still owns access and data decisions.</p>", "<p>Public, private and hybrid describe deployment arrangements. Benefits can include elasticity, global access and managed services; risks include dependence, cost surprises, outages, residency, lock-in and misconfiguration. Responsibility shifts; it does not vanish.</p>") },
        { title: "6. AI, big data, IoT and automation", priority: "must", html: H("<p>Machine-learning systems infer patterns from data; generative AI creates new content through probabilistic prediction learned from training examples. It does not guarantee truth or human-like understanding. Check accuracy, bias, provenance, privacy, security and human oversight.</p>", "<p>Big data highlights high volume, velocity and variety, but value and veracity matter. IoT connects sensors/actuators to services; weak passwords, long device life and physical impact make security essential. Automation changes tasks and accountability rather than simply ‘replacing everyone.’</p>") },
        { title: "7. Mobile, 5G, telepresence, drones and immersive tech", priority: "useful", html: H("<p>5G is a cellular access technology; it does not mean LAN, MAN, WAN and the Web. Telepresence combines real-time audio/video and collaboration. Drones are remotely piloted or autonomous aircraft with safety, privacy and regulation concerns. AR overlays the world; VR immerses; mixed reality blends interaction.</p>", "<p>For every trend, state a concrete use, required infrastructure, limitation, affected stakeholders and mitigation. ‘Faster and smarter’ earns few exam marks without mechanism and trade-off.</p>") },
        { title: "8. Sustainable and inclusive computing", priority: "deep", html: H("<p>Extend device life through repair and suitable upgrades, reduce idle energy and data waste, purchase for total lifecycle, and use certified e-waste routes. Design for keyboard, screen reader, captions, contrast, language and bandwidth constraints so innovation does not exclude users.</p>") }
      ],
      worked: [
        { title: "Absolute reference", prompt: "Prices are in B2:B20 and tax rate is in E1. Write the gross-price formula in C2 for copying down.", answer: ["Use =B2*(1+$E$1).", "B2 is relative so each row uses its own price.", "$E$1 is absolute so every copied formula uses the one tax-rate cell.", "Test with a simple known price and check percentage format."] },
        { title: "Campus AI attendance", prompt: "Evaluate facial-recognition attendance using NECSPASE.", answer: ["Need: define the attendance problem and compare simpler alternatives.", "Evidence: demand accuracy results across student groups and real lighting; count false matches/non-matches.", "Cost, Security, Privacy and Accessibility: include total ownership, biometric protection, lawful basis and a human alternative/appeal.", "Sustainability and Exit: consider device/energy lifecycle, pilot narrowly with oversight, and define deletion, migration and shutdown before adoption."] }
      ],
      recall: ["Relative, absolute and cross-sheet references?", "Record/field/key/query?", "Spreadsheet versus database?", "IaaS/PaaS/SaaS?", "What does 5G actually mean?", "Expand NECSPASE."]
    }
  ];

  const diagrams = [
    {
      id: "iposc", title: "How a computer turns facts into action", tag: "Core map", type: "flow",
      caption: "IPOSC is a cycle, not a one-way factory: stored results and communication can become fresh input.",
      nodes: [
        { label: "Input", note: "keyboard · sensor · scanner" },
        { label: "Process", note: "CPU follows instructions" },
        { label: "Output", note: "screen · sound · print" },
        { label: "Storage", note: "keep data/results" },
        { label: "Communication", note: "exchange with another system" }
      ], tip: "ATM example: card/PIN/amount → validate balance → cash/message → record transaction → contact bank network."
    },
    {
      id: "anatomy", title: "System unit anatomy", tag: "Hardware", type: "hardware",
      caption: "The motherboard connects parts; compatibility and power determine whether the combination can actually work.",
      nodes: [
        { label: "CPU", note: "fetch · decode · execute · store", zone: "centre" },
        { label: "RAM", note: "volatile working area", zone: "right" },
        { label: "Firmware", note: "UEFI startup code", zone: "top" },
        { label: "PCIe / GPU", note: "expansion and graphics", zone: "bottom" },
        { label: "M.2 slot + SATA ports", note: "form factor/connector; SATA or PCIe/NVMe path", zone: "left" },
        { label: "PSU", note: "AC → regulated DC", zone: "power" },
        { label: "Cooling", note: "moves heat away", zone: "fan" }
      ], tip: "Compatibility check: Socket, Speed/type, Size, Supply, Software/firmware."
    },
    {
      id: "memory", title: "Memory and storage hierarchy", tag: "Speed vs capacity", type: "pyramid",
      caption: "Moving down usually means more capacity and lower cost per byte, but higher access delay.",
      nodes: [
        { label: "Registers", note: "tiny · inside CPU · fastest" },
        { label: "L1 / L2 / L3 cache", note: "frequent CPU data" },
        { label: "RAM", note: "active programs · volatile" },
        { label: "SSD", note: "fast nonvolatile storage" },
        { label: "HDD / tape / remote archive", note: "bulk and backup" }
      ], tip: "Adding storage is not the same as adding RAM; measure the bottleneck before upgrading."
    },
    {
      id: "ticket", title: "Help-desk ticket journey", tag: "Support", type: "branch",
      caption: "A ticket is a record of reasoning, ownership and communication—not a one-line complaint.",
      nodes: [
        { label: "Request", note: "verify user and channel" },
        { label: "Validate", note: "scope · impact · urgency · SLA" },
        { label: "Investigate", note: "evidence and controlled tests" },
        { label: "Resolve", note: "test with the user" },
        { label: "Escalate", note: "functional or hierarchical" },
        { label: "Close & learn", note: "PSORN notes / knowledge base" }
      ], tip: "SLA says the target; KPI keeps score. Priority is not the loudest person's job title."
    },
    {
      id: "boot", title: "From power button to sign-in", tag: "OS", type: "flow",
      caption: "Locate the failed stage before choosing a recovery tool.",
      nodes: [
        { label: "Power", note: "stable rails" },
        { label: "UEFI/BIOS firmware", note: "runs POST and initialises hardware" },
        { label: "Boot manager", note: "select/load OS" },
        { label: "Kernel + drivers", note: "manage resources" },
        { label: "Services", note: "background functions" },
        { label: "Sign-in", note: "user session" }
      ], tip: "Legacy exam path may say BIOS → MBR. Modern systems commonly use UEFI → GPT/EFI System Partition."
    },
    {
      id: "osi", title: "OSI troubleshooting staircase", tag: "Networking", type: "stack",
      caption: "Walk upward while testing. A failure at one layer can make every layer above it appear broken.",
      nodes: [
        { label: "7 Application", note: "HTTP · DNS · SMTP" },
        { label: "6 Presentation", note: "format · encryption" },
        { label: "5 Session", note: "conversation state" },
        { label: "4 Transport", note: "TCP/UDP · ports" },
        { label: "3 Network", note: "IP · routing" },
        { label: "2 Data Link", note: "frame · MAC · switch" },
        { label: "1 Physical", note: "bit · cable · fibre · radio" }
      ], tip: "Mnemonic bottom-up: Please Do Not Throw Sausage Pizza Away."
    },
    {
      id: "packet", title: "A secure Web request: layers working together", tag: "Application", type: "packet",
      caption: "These are nested responsibilities, not a strict one-after-another queue: transport setup packets themselves travel through IP, the gateway and routers.",
      nodes: [
        { label: "URL", note: "user requests a name" },
        { label: "DNS", note: "name → IP" },
        { label: "Gateway", note: "ARP (IPv4) or NDP (IPv6) finds local next hop" },
        { label: "Routers", note: "forward IP packets" },
        { label: "Secure transport", note: "TCP+TLS (HTTP/1.1–2) or QUIC/UDP (HTTP/3)" },
        { label: "Web server", note: "HTTP response" },
        { label: "Browser", note: "render content" }
      ], tip: "The switch uses local MAC addresses; routers make IP forwarding decisions between networks."
    },
    {
      id: "security", title: "Risk to recovery", tag: "Security", type: "branch",
      caption: "A security incident is a chain. Break it early, detect it quickly and retain the ability to recover.",
      nodes: [
        { label: "Asset", note: "what has value?" },
        { label: "Threat", note: "what could cause harm?" },
        { label: "Vulnerability", note: "what weakness exists?" },
        { label: "Exploit / event", note: "how is it abused?" },
        { label: "Impact", note: "CIA and safety" },
        { label: "Controls", note: "prevent · detect · respond · recover" }
      ], tip: "Risk treatment: avoid, mitigate, transfer or knowingly accept."
    },
    {
      id: "logic", title: "From current input to remembered state", tag: "Digital logic", type: "logic",
      caption: "Combinational logic answers now; sequential logic combines now with remembered state.",
      nodes: [
        { label: "AND", note: "all inputs 1" },
        { label: "OR", note: "any input 1" },
        { label: "XOR", note: "inputs differ" },
        { label: "NOT", note: "invert" },
        { label: "JK", note: "00 hold · 01 reset · 10 set · 11 toggle" },
        { label: "D", note: "capture input on active edge" },
        { label: "T", note: "0 hold · 1 toggle" }
      ], tip: "DeMorgan: break the complement bar and change AND ↔ OR."
    },
    {
      id: "cloud", title: "Cloud responsibility ladder", tag: "Emerging tech", type: "stack",
      caption: "As you move from IaaS to SaaS, the provider manages more—but the customer never stops owning identity, data and safe use.",
      nodes: [
        { label: "Your data & users", note: "customer responsibility in every model" },
        { label: "Application", note: "you manage in IaaS/PaaS; provider in SaaS" },
        { label: "Runtime & OS", note: "you manage in IaaS; provider higher up" },
        { label: "Virtualisation", note: "provider foundation" },
        { label: "Servers · storage · network", note: "provider physical layer" }
      ], tip: "SaaS use; PaaS build; IaaS manage. Verify backup, configuration and exit plans."
    },
    {
      id: "algorithm", title: "Problem-to-program loop", tag: "Algorithms", type: "flow",
      caption: "Correct code for the wrong requirement is still a failed solution.",
      nodes: [
        { label: "Define", note: "need · users · constraints" },
        { label: "IPO", note: "inputs · rules · outputs" },
        { label: "Design", note: "pseudocode / flowchart" },
        { label: "Trace", note: "follow state by hand" },
        { label: "Implement", note: "clear modular code" },
        { label: "Test", note: "normal · boundary · invalid" },
        { label: "Document & improve", note: "feedback and maintenance" }
      ], tip: "SIT structures: Sequence, If/selection, Iteration. Every loop needs progress toward termination."
    }
  ];

  const extraQuestions = [
    { module: "digital-foundations", difficulty: "warm", marks: 7, question: "A training centre records names, arrival times and courses. Explain how the data becomes useful information.", answer: ["Raw entries are data; first validate, clean and organise them.", "Group/count attendance by course and date and compare with a goal or earlier period.", "State a meaningful result, for example: Networking attendance fell 20% this week.", "Store source records securely and ensure the result is accurate, current, relevant and complete enough."] },
    { module: "digital-foundations", difficulty: "exam", marks: 10, question: "Choose a suitable computer type for a thermostat, a student writing an assignment with office and Web tools, shared university files, national bank transactions and weather modelling. Justify each.", answer: ["Thermostat: embedded computer—focused control inside a product.", "Student assignment: a laptop/personal computer—portable general-purpose office and Web work.", "Shared files: server—provides a managed shared service.", "Bank transactions: mainframe—very high reliable transaction volume.", "Weather modelling: supercomputer—massive numerical/parallel calculation."] },
    { module: "digital-foundations", difficulty: "exam", marks: 8, question: "Differentiate validation from verification, then choose batch, online or real-time processing for payroll, course registration and an airbag.", answer: ["Validation tests whether input obeys a rule; verification checks whether it matches the intended/source data. Valid data can still be wrong.", "Payroll: batch, because accumulated records can be processed together at a scheduled time.", "Course registration: online/interactive, because a student exchanges data directly with a connected system.", "Airbag: real-time, because responding within the deadline is part of correctness."] },
    { module: "digital-foundations", difficulty: "scenario", marks: 10, question: "A clinic can buy a subscription patient system or commission custom software. Compare the choice and recommend what must be checked before signing.", answer: ["Ready-made/subscription software is quicker and spreads cost but may fit poorly, raise recurring cost or create vendor lock-in.", "Custom software can match workflow and integration but needs more time, budget, testing, maintenance and specialist continuity.", "Check clinical requirements, security/privacy, reliability, compatibility, migration, support/SLA, total lifecycle cost, licences and accessibility.", "Require data ownership/export, backup/recovery and an exit plan; choose only after evidence such as a controlled pilot."] },
    { module: "hardware-architecture", difficulty: "exam", marks: 6, question: "Explain how the CPU performs TOTAL = PRICE × QUANTITY.", answer: ["Fetch the instruction and needed operands from memory/cache.", "Decode the multiplication/store instructions.", "The ALU performs the multiplication while the control unit coordinates.", "Keep intermediate/result in registers, then store TOTAL in the required memory location."] },
    { module: "hardware-architecture", difficulty: "challenge", marks: 8, question: "A video-editing PC has 8 GB RAM and an HDD. Recommend two upgrades without claiming they solve every problem.", answer: ["More compatible RAM can reduce paging when the working set exceeds 8 GB.", "An SSD improves startup, application/project loading and transfers compared with an HDD.", "RAM is volatile working memory; the SSD is nonvolatile storage.", "Measure CPU/GPU, thermal and software bottlenecks too—these upgrades cannot fix every workload limit."] },
    { module: "safety-assembly", difficulty: "exam", marks: 7, question: "State seven compatibility checks before safely installing a powerful graphics card.", answer: ["Confirm the motherboard's PCIe slot, lane support and any lane-sharing limit.", "Measure case length, height, width and occupied-slot clearance.", "Check PSU quality and continuous wattage against the whole system's peak load.", "Check the exact number/type of GPU power connectors and cable guidance.", "Confirm case airflow, cooler clearance and thermal capacity.", "Match the card's display outputs to the monitor or a proven converter path.", "Check firmware, operating-system and driver support. Then de-energise and use correct ESD handling for installation."] },
    { module: "safety-assembly", difficulty: "scenario", marks: 6, question: "Why use an antistatic strap when you cannot feel a spark? Describe correct use.", answer: ["A person often feels static only around thousands of volts; sensitive components can be harmed by far less.", "Disconnect normal equipment power, attach the strap to an approved grounded point/mat, hold boards by edges and keep parts in antistatic bags.", "Never use a strap when working on live high-voltage equipment."] },
    { module: "hardware-support", difficulty: "scenario", marks: 6, question: "A desktop has no lights and no fan movement. Diagnose from the wall inward.", answer: ["Make the area safe, verify the wall outlet and power strip with a known-good test.", "Inspect cable, PSU switch/voltage setting if applicable and external adapter.", "With power disconnected, check motherboard/CPU power leads and front-panel switch connection.", "A qualified technician may cross-test a known-good PSU; never open the PSU enclosure."] },
    { module: "hardware-support", difficulty: "exam", marks: 7, question: "Describe secure disposal of a university SSD.", answer: ["Identify/classify the data and obtain authorisation.", "Maintain asset and chain-of-custody records.", "Use an approved SSD secure erase/crypto erase or physical destruction method suited to media and policy.", "Verify sanitation, retain evidence/certificate and pass the device to a certified recycler."] },
    { module: "customer-service", difficulty: "scenario", marks: 6, question: "A caller claiming to be the CEO demands an urgent password reset. Respond.", answer: ["Do not bypass process because of authority or urgency.", "Record the request and independently contact a known approved number/channel.", "Verify identity using policy and involve the authorised account/security team.", "Report suspicious pressure and document the outcome without exposing secrets."] },
    { module: "customer-service", difficulty: "exam", marks: 4, question: "Differentiate an SLA from a KPI and give a connected example.", answer: ["An SLA is an agreed service target or promise, such as first response within one hour.", "A KPI measures actual performance, such as median first-response time or percentage meeting that SLA."] },
    { module: "troubleshooting", difficulty: "scenario", marks: 8, question: "One laptop lost Wi-Fi after an update; every other device still connects. Apply the full troubleshooting method.", answer: ["Define and gather: one device, exact error, time, update, adapter state and known-good network.", "Form a local driver/configuration theory; plan a reversible test with backup/rollback.", "Test one change such as roll back the exact adapter driver; observe and repeat with a new theory if it fails.", "Verify stable reconnection and related functions, then document evidence, fix and prevention."] },
    { module: "troubleshooting", difficulty: "challenge", marks: 6, question: "Write a safe AI prompt for a printer error and state what must not be included.", answer: ["Include exact model, OS/version, error text, when it began, recent changes, steps/results and request a reversible stepwise response.", "Exclude names, passwords, tokens, documents, addresses and organisational secrets.", "Verify suggestions against current manufacturer/authoritative documentation before applying them."] },
    { module: "os-foundations", difficulty: "exam", marks: 6, question: "Distinguish multitasking, multithreading and multiprocessing with examples.", answer: ["Multitasking lets several processes progress concurrently: one core may time-slice a browser and editor, while several cores may also run work in parallel.", "Multithreading gives one process several execution paths, such as a browser rendering while downloading.", "Multiprocessing uses multiple CPUs/cores for parallel work—for example, rendering different video frames on several cores."] },
    { module: "os-foundations", difficulty: "scenario", marks: 6, question: "After a firmware change, a PC reports No bootable device. What do you check before reinstalling?", answer: ["Confirm the storage device is detected and protect important data.", "Check boot order, UEFI versus legacy mode and the correct GPT/EFI boot entry.", "Restore the safe setting or use approved recovery media to repair the boot manager.", "Reinstallation is more destructive and should not be the first guess."] },
    { module: "windows-support", difficulty: "scenario", marks: 6, question: "A powered monitor says No signal. Give a shortest-safe diagnostic order.", answer: ["Confirm the PC itself powers on and shows POST/activity clues; then check the monitor input and cable seating/damage.", "Cross-test a known-good cable, display or output port to isolate the signal path.", "Only if Windows is actually running, use Detect and Win+P; then inspect display driver/settings and recent changes.", "Verify normal output and document the proven cause/action."] },
    { module: "windows-support", difficulty: "exam", marks: 5, question: "A user deletes a OneDrive folder and it disappears everywhere. Explain and recover safely.", answer: ["Synchronization propagated the deletion; sync is not itself an independent backup.", "Restore from the service recycle bin/version history within retention and verify files.", "Use a separate tested 3–2–1 backup for stronger recovery from deletion or ransomware."] },
    { module: "linux-macos", difficulty: "exam", marks: 5, question: "Interpret -rwxr-x--- and give its numeric mode.", answer: ["Regular file.", "Owner read/write/execute = 7; group read/execute = 5; others none = 0.", "Mode 750."] },
    { module: "linux-macos", difficulty: "scenario", marks: 6, question: "A student wants Ubuntu safely inside Windows. Design an appropriate setup.", answer: ["Use a Type 2 hypervisor such as VirtualBox on the Windows host.", "Confirm CPU virtualisation, allocate only part of CPU/RAM/storage, and install Ubuntu from a trusted image.", "Choose NAT/host-only/bridged networking for the need; use snapshots for experiments but maintain real backups."] },
    { module: "mobile", difficulty: "scenario", marks: 6, question: "A staff phone containing confidential files is stolen. What should support do?", answer: ["Verify/report the incident and use the enrolled locator/MDM.", "Remote-lock, revoke sessions and change exposed credentials from a clean path.", "Authorised remote wipe may be appropriate if recovery is unlikely and prerequisites/connectivity exist.", "Restore from a verified backup and record asset/incident actions."] },
    { module: "mobile", difficulty: "scenario", marks: 5, question: "Email works in a browser but not the phone's mail app. Narrow the cause.", answer: ["Internet and the provider account are partly proven by the browser.", "Check mail-app credentials/MFA, account/server settings, permissions, sync, storage and app update.", "Protect local data before removing/re-adding the account; retest and document."] },
    { module: "services-peripherals", difficulty: "scenario", marks: 6, question: "One employee cannot access a shared drive while colleagues can. Diagnose without granting everyone access.", answer: ["Verify path/network and the user's identity/credentials.", "Inspect group membership, share permission and filesystem/NTFS permission including explicit deny.", "Refresh mapping/policy only where evidence points; apply least privilege.", "Have the user verify and record the approved change."] },
    { module: "services-peripherals", difficulty: "scenario", marks: 5, question: "An external HDD clicks and disconnects. What should you avoid and why?", answer: ["Stop using it and disconnect safely; clicking may indicate mechanical failure.", "Do not run repair writes, defragment, format or repeatedly power-cycle it because more damage/data loss may follow.", "Escalate imaging/professional recovery if data matters, replace the drive and restore backup."] },
    { module: "networking", difficulty: "scenario", marks: 6, question: "A PC has 169.254.25.8 and no internet. Explain the clue and test path.", answer: ["It has an IPv4 link-local/APIPA address, commonly because DHCP was not reached.", "Check cable/Wi-Fi link and inspect full configuration.", "Renew the lease and check DHCP server/scope/path.", "After a valid lease, verify prefix, gateway, DNS and end-to-end service."] },
    { module: "networking", difficulty: "challenge", marks: 5, question: "For 190.240.33.91/19, find the mask, network, broadcast and usable range.", answer: ["/19 mask = 255.255.224.0; third-octet block size is 32.", "33 lies in block 32–63, so network is 190.240.32.0.", "Broadcast is 190.240.63.255; usable range is 190.240.32.1–190.240.63.254."] },
    { module: "security-ethics", difficulty: "scenario", marks: 10, question: "A hospital faces ransomware. Explain the CIA impact and a defensible response.", answer: ["Availability is lost when systems/data cannot be used; integrity is harmed by unauthorised change; confidentiality may be harmed by theft.", "Isolate/contain safely, report and preserve evidence under the response plan.", "Protect accounts and scope the event; eradicate from known cause, rebuild/recover from verified clean backup and monitor.", "Prevent with patching, MFA, least privilege, segmentation, filtering/EDR, training and tested offline/immutable backups."] },
    { module: "security-ethics", difficulty: "exam", marks: 8, question: "An urgent targeted payroll email links to a fake sign-in page. Identify the technique, red flags and response.", answer: ["It is spear phishing using impersonation/pretext and urgency.", "Check sender/domain, unexpected link, wording and request for private information.", "Do not use the supplied link; verify through a separate known channel and report.", "If credentials were entered, reset from a trusted path, revoke sessions, check MFA/logs and follow incident procedure."] },
    { module: "number-logic", difficulty: "exam", marks: 6, question: "Convert 11100101₂ to decimal, octal and hexadecimal and show the shortcut.", answer: ["Decimal: 128+64+32+4+1 = 229₁₀.", "Groups of three: 011 100 101 = 345₈.", "Groups of four: 1110 0101 = E5₁₆."] },
    { module: "number-logic", difficulty: "challenge", marks: 5, question: "For even parity, what bit accompanies 1011001? Can parity miss an error?", answer: ["The word already has four 1s, so the even parity bit is 0.", "Simple parity detects an odd number of flipped bits but can miss an even number.", "It detects a discrepancy; it does not locate/correct the bit like a suitable Hamming code."] },
    { module: "algorithms", difficulty: "exam", marks: 8, question: "Write pseudocode that reads four marks, rejects any outside 0–100, averages them and prints PASS for at least 50.", answer: ["INPUT M1, M2, M3, M4.", "IF M1 < 0 OR M1 > 100 OR M2 < 0 OR M2 > 100 OR M3 < 0 OR M3 > 100 OR M4 < 0 OR M4 > 100 THEN OUTPUT Invalid; STOP.", "AVERAGE ← (M1+M2+M3+M4)/4.", "IF AVERAGE >= 50 THEN OUTPUT PASS ELSE OUTPUT FAIL; test 49, 50, 51 and invalid values."] },
    { module: "algorithms", difficulty: "scenario", marks: 6, question: "Classify a misspelled keyword, attempting division by zero and dividing a four-mark total by three.", answer: ["Misspelled keyword: syntax/translation error—it breaks language grammar.", "Division by zero is normally a runtime/exception case in an introductory language, but exact behaviour depends on type/environment (a spreadsheet may show #DIV/0!, some floating-point systems yield infinity). State the assumed language.", "Dividing by three: logic error—the program can run but its rule/result is wrong."] },
    { module: "productivity-emerging", difficulty: "exam", marks: 10, question: "A startup wants to build an app without managing servers; finance wants ready-made accounting. Select cloud models and explain responsibility.", answer: ["Use PaaS for the custom application and SaaS for the finished accounting tool.", "The provider manages more of runtime/infrastructure, but the customer still manages users, access, data, configuration and lawful use.", "Choose public/private/hybrid from data, control, cost and integration needs.", "Assess backup/export, availability, security, residency, lock-in and exit."] },
    { module: "productivity-emerging", difficulty: "challenge", marks: 8, question: "Design a road-inspection system using a drone/robot, AI and 5G. Include limits.", answer: ["The drone/robot captures road images/sensor data; AI flags likely defects; 5G may transfer data at high capacity/low latency where coverage supports it.", "A human verifies important findings and authorises safety decisions.", "Benefits include faster coverage and consistent triage.", "Risks include false results/bias, privacy, safety, attack, outage, battery and regulatory limits; add controls and fallback."] },
    { module: "productivity-emerging", difficulty: "exam", marks: 8, question: "An invoice has quantity in B2, unit price in C2, line totals in E2:E19 and tax rate in H1. Write a copy-safe line-total formula that stays visually blank when quantity is empty or a formula returns an empty string, then write the tax formula for the subtotal in E20.", answer: ["In E2 use =IF(B2=\"\",\"\",B2*C2). Unlike ISBLANK, this also treats a formula result of an empty string as visually empty.", "In E20 use =SUM(E2:E19); tax can be =E20*$H$1. The tax-rate reference is absolute so it will not shift.", "Total can add the subtotal and tax.", "Test a truly empty cell, a formula returning an empty string, quantity 0, a known result and a copied row; format currency consistently."] },
    { module: "productivity-emerging", difficulty: "scenario", marks: 7, question: "A Registration sheet stores shirt sizes in H5:H58. Write a formula on a Summary sheet to count Large shirts, then explain two data-quality safeguards.", answer: ["Use =COUNTIF(Registration!H5:H58,\"Large\"). If the sheet name has spaces, wrap it in apostrophes.", "Use a validation list so Large is not also entered as L, large or misspelled text.", "Keep the range/table complete when adding rows and verify the result against a filtered count or small known sample."] },
    { module: "productivity-emerging", difficulty: "challenge", marks: 8, question: "A loan principal is in B2, a nominal annual rate compounded monthly is in F1 and years are in F2. Write a monthly repayment formula and explain the signs and fixed references.", answer: ["Use =-PMT($F$1/12,$F$2*12,B2) for an end-of-month payment when future value is zero.", "Because the stated annual rate is nominal and compounded monthly, divide it by 12; multiply years by 12 so rate and periods use the same unit.", "$F$1 and $F$2 stay fixed when copied; B2 can move to each loan row.", "PMT follows cash-flow signs, so the leading minus displays a positive repayment when principal is entered as positive. Different rate conventions require a different conversion."] },
    { module: "number-logic", difficulty: "exam", marks: 8, question: "Use DeMorgan's law to rewrite NOT(A AND B), then prove it with a truth table.", answer: ["DeMorgan: ¬(A·B) = ¬A + ¬B, so a negated AND becomes the OR of the negated inputs.", "For A,B = 0,0: both sides are 1; for 0,1: both are 1.", "For 1,0: both are 1; for 1,1: both are 0.", "Because every output row matches, the expressions are equivalent."] },
    { module: "number-logic", difficulty: "scenario", marks: 6, question: "A clocked circuit must hold or toggle a stored bit. State the JK and T inputs for both actions, and explain what a D flip-flop does.", answer: ["JK: J=0,K=0 holds; J=1,K=1 toggles on the active clock edge.", "T: T=0 holds; T=1 toggles on the active edge.", "D flip-flop captures D as the next Q on its active edge, then stores it until another active edge."] },
    { module: "number-logic", difficulty: "challenge", marks: 8, question: "In 8-bit two's complement, add 100 and 50. Detect overflow. Then state how many Hamming parity bits are needed for 8 data bits.", answer: ["100 = 01100100 and 50 = 00110010; the 8-bit sum is 10010110.", "Two positive operands produced a sign bit of 1; 150 exceeds the 8-bit signed maximum +127, so signed overflow occurred. Interpreted as two's complement, the wrapped pattern is −106.", "For m=8, choose r with 2^r ≥ m+r+1: r=3 gives 8≥12 false; r=4 gives 16≥13 true.", "Four Hamming parity bits support single-error correction under the one-bit-error assumption; SECDED needs an extra overall parity bit."] },
    { module: "networking", difficulty: "exam", marks: 10, question: "A new laptop joins Wi-Fi and opens an HTTPS site by name. Use DORA, OSI/PDU terms and ports to explain the path.", answer: ["DHCP DORA is Discover, Offer, Request, Acknowledge; DHCP normally uses UDP ports 67/68 to lease IP, prefix, gateway and DNS.", "DNS resolves the site name, commonly using port 53 over UDP or TCP as needed.", "At OSI Transport the data unit is a segment (TCP) or datagram (UDP); Network uses IP packets; Data Link uses frames; Physical carries bits/signals.", "HTTPS commonly uses port 443: HTTP/1.1 or HTTP/2 over TCP+TLS, while HTTP/3 uses QUIC over UDP.", "The switch forwards local frames; the router/default gateway forwards packets to other networks."] },
    { module: "networking", difficulty: "scenario", marks: 8, question: "A college wants staff and guest devices on the same switches but guests must not reach internal records. Design the logical control.", answer: ["Place staff and guests in separate VLANs/subnets so they are different Layer-2 broadcast domains.", "Provide controlled inter-VLAN routing through a router or Layer-3 switch rather than connecting them as one LAN.", "Apply firewall/ACL policy that lets guests reach only required services such as the internet/DNS/DHCP and blocks internal records.", "Use separate secure Wi-Fi authentication, least privilege, logging and tests from both sides; a VLAN alone is segmentation, not the entire security policy."] },
    { module: "productivity-emerging", difficulty: "exam", marks: 10, question: "Design a small relational database for students taking many courses. Name tables, primary keys, foreign keys and one useful query.", answer: ["Student(StudentID primary key, Name, Email) stores each student once.", "Course(CourseID primary key, Title) stores each course once.", "Enrollment(StudentID foreign key, CourseID foreign key, Semester, Mark) resolves the many-to-many relationship; StudentID+CourseID+Semester can form a composite primary key.", "Validation can constrain mark to 0–100 and enforce valid referenced students/courses.", "A query could list every student and mark for one course/semester, or calculate course average; permissions should limit who may change marks."] },
    { module: "algorithms", difficulty: "exam", marks: 8, question: "Describe a flowchart that inputs three numbers and outputs the largest. Name the correct shapes and test cases.", answer: ["Use an oval for Start/End and a parallelogram to input A, B and C or output Largest.", "Use a rectangle to set Largest ← A.", "Use a decision diamond: if B > Largest, a Yes branch reaches a process rectangle Largest ← B; both paths rejoin. Repeat for C.", "Output Largest, then End. Test distinct values, a tie, negatives and values where each position is largest."] }
  ];

  const questions = modules.flatMap((module) => module.worked.map((item) => ({
    module: module.id,
    difficulty: "guided",
    marks: null,
    question: item.prompt,
    title: item.title,
    answer: item.answer,
    origin: "guided example"
  }))).concat(extraQuestions.map((item) => ({ ...item, origin: item.origin || "original · course-pack aligned" })));

  const cardSeeds = {
    "digital-foundations": [
      ["What is a computer?", "A programmable electronic device that accepts data, processes it under instructions, produces output, stores results and can communicate."],
      ["Data versus information?", "Data are raw facts; information is processed, organised data with meaning and context."],
      ["Expand IPOSC.", "Input, Processing, Output, Storage, Communication."],
      ["Mainframe versus supercomputer?", "Mainframe: reliable high-volume transactions; supercomputer: extremely intensive numerical/parallel calculation."],
      ["Validation versus verification?", "Validation checks rules/acceptability; verification checks that entered data matches the intended source."],
      ["Batch, online, real-time?", "Batch processes accumulated jobs together; online is direct connected interaction; real-time must meet an event deadline."],
      ["System versus application software?", "System software manages/supports the platform; application software performs a user's task."]
    ],
    "hardware-architecture": [
      ["CPU machine cycle?", "Fetch, Decode, Execute, Store—Fast Dogs Eat Snacks."],
      ["RAM versus storage?", "RAM is fast volatile working memory; storage is nonvolatile long-term retention."],
      ["M.2 versus NVMe?", "M.2 is a physical form factor; NVMe is a PCIe-based storage protocol."],
      ["What determines CPU performance?", "Architecture/IPC, cores, clock, cache, memory, cooling, software and workload—not GHz alone."]
    ],
    "safety-assembly": [
      ["ESD mnemonic?", "BAG: Bag components, Antistatic tools, Bond yourself to an approved ESD common point—only on de-energised low-voltage equipment."],
      ["Why never open a PSU casually?", "Dangerous stored charge can remain even after unplugging."],
      ["Laptop adapter checks?", "Correct voltage, polarity, connector and enough current/wattage."],
      ["Before disassembly?", "Shut down, unplug, protect data, discharge/ground, photograph cables and organise screws."]
    ],
    "hardware-support": [
      ["No power first check?", "Start at the outlet and work inward: supply, cable, switch, PSU/adapter, connections."],
      ["POST means?", "Power-On Self-Test: firmware checks/initialises essential hardware before boot."],
      ["Adapter versus converter?", "Adapter changes physical connection; converter translates signal/protocol."],
      ["SSD sanitation warning?", "Do not assume HDD overwriting works; use approved secure/crypto erase or destruction and verify."]
    ],
    "customer-service": [
      ["SLA versus KPI?", "SLA says the target; KPI measures how well service performs."],
      ["Open versus closed question?", "Open discovers detail; closed confirms a specific fact."],
      ["PSORN documentation?", "Problem, Steps, Observations, Resolution, Next action."],
      ["How is priority chosen?", "Business impact, urgency and SLA risk—not status or volume of shouting."]
    ],
    "troubleshooting": [
      ["Core troubleshooting loop?", "Identify/gather, form a theory, test it, plan and implement, verify/prevent, then document."],
      ["Why one change at a time?", "It preserves cause-and-effect evidence and simplifies rollback."],
      ["Workaround versus resolution?", "A workaround restores service; a resolution removes the root cause."],
      ["Remote support PACE?", "Permission, Agree expectations, Connect securely, Exit completely."]
    ],
    "os-foundations": [
      ["OS functions mnemonic?", "PM FUDS: Processes, Memory, Files, Users, Devices, Security."],
      ["Kernel versus shell?", "Kernel is the privileged core; shell/UI interprets requests and invokes OS services."],
      ["Program versus process?", "A program is stored instructions; a process is a running instance with state/resources."],
      ["Modern boot sequence?", "Power → UEFI/BIOS firmware runs POST/initialisation → boot manager → kernel/drivers → services → sign-in."]
    ],
    "windows-support": [
      ["Win+P versus Win+K?", "Win+P selects projection mode; Win+K opens Cast for compatible wireless displays on supported Windows versions."],
      ["Task Manager versus Event Viewer?", "Task Manager shows current resource/process state; Event Viewer records events over time."],
      ["Safe Mode purpose?", "Load a minimal set of drivers/services to isolate startup and software faults."],
      ["Sync versus backup?", "Sync mirrors changes, including deletion; backup preserves independent recoverable versions/copies."]
    ],
    "linux-macos": [
      ["UGO–RWX?", "User, Group, Others × Read, Write, Execute."],
      ["Absolute versus relative path?", "Absolute starts at /; relative starts from the current directory."],
      ["Modern Linux network commands?", "Use ip addr and ss; ifconfig and netstat are legacy on many systems."],
      ["Type 1 versus Type 2 hypervisor?", "Type 1 runs on hardware; Type 2 runs as an app on a host OS."]
    ],
    "mobile": [
      ["RAPS mobile check?", "Radios, App permissions, Power, Storage."],
      ["NFC versus Bluetooth?", "NFC is very short-range tap-like exchange; Bluetooth pairs nearby devices over longer range."],
      ["What can MDM do?", "Enrol, configure, enforce policy, deploy apps, assess compliance, locate/lock/wipe when authorised."],
      ["Before factory reset?", "Verify backup, recovery/authenticator access, encryption credentials and account/activation-lock state."]
    ],
    "services-peripherals": [
      ["Authentication versus authorisation?", "Authentication proves identity; authorisation decides allowed actions."],
      ["DNS versus DHCP?", "DNS resolves names; DHCP leases IP configuration."],
      ["I-PASS?", "Identity, Path, Access, Service, System/device."],
      ["Printer data path?", "Application → driver → spooler/queue → transport → printer controller → mechanism."]
    ],
    "networking": [
      ["Switch versus router?", "Switch forwards LAN frames using MAC; router forwards packets between IP networks."],
      ["DHCP DORA?", "Discover, Offer, Request, Acknowledge."],
      ["TCP versus UDP?", "TCP offers ordered reliable stream delivery; UDP offers lower-overhead datagrams without that guarantee."],
      ["Private IPv4 ranges?", "10.0.0.0/8; 172.16.0.0/12; 192.168.0.0/16."]
    ],
    "security-ethics": [
      ["CIA triad?", "Confidentiality, Integrity, Availability."],
      ["Threat versus vulnerability?", "Threat can cause harm; vulnerability is a weakness it may exploit."],
      ["Virus, worm, trojan?", "Virus attaches; worm self-spreads; trojan pretends to be legitimate."],
      ["Incident response?", "Prepare, identify, contain, preserve/analyse, eradicate, recover, monitor and learn."]
    ],
    "number-logic": [
      ["Hex D, E, F?", "13, 14, 15—not 14, 15, 16."],
      ["Decimal conversion memory line?", "Integers divide and read up; fractions multiply and read down."],
      ["Two's complement?", "Invert every fixed-width bit, then add 1."],
      ["JK actions?", "00 hold, 01 reset, 10 set, 11 toggle."]
    ],
    "algorithms": [
      ["Algorithm properties?", "Finite, definite/unambiguous, effective, with defined input(s) and output(s)."],
      ["SIT control structures?", "Sequence, selection/If, iteration."],
      ["Three error types?", "Syntax, runtime and logic."],
      ["Essential test classes?", "Normal/typical, boundary and invalid/exceptional, with expected results."]
    ],
    "productivity-emerging": [
      ["Relative versus absolute spreadsheet reference?", "Relative moves when copied; absolute such as $E$1 stays fixed."],
      ["Internet versus Web?", "Internet is the network infrastructure; Web is a linked-resource service using it."],
      ["Cloud models?", "SaaS: use a finished app; PaaS: deploy code on a managed platform; IaaS: manage guest OS/apps/data on provider virtual infrastructure."],
      ["AI caution?", "Model output can be wrong or biased; verify evidence, protect data and keep human oversight for consequential decisions."],
      ["Cross-sheet reference pattern?", "Sheet2!B5, or 'Sales 2026'!B5 when the sheet name contains spaces."],
      ["PMT memory check?", "Keep rate and number of periods in the same unit; use fixed references for shared assumptions and check cash-flow signs."],
      ["Database record, field and key?", "A record is one row/entity instance; a field is one attribute/column; a key identifies or links records."]
    ]
  };

  const flashcards = modules.flatMap((module) => (cardSeeds[module.id] || []).map(([front, back], index) => ({
    id: `${module.id}-${index + 1}`,
    module: module.id,
    front,
    back
  })));

  const sources = [
    { name: "IT Support Essentials Module 01", type: "PPTX · 38 slides", coverage: "Help desk, tickets, SLA/KPI, communication, documentation", status: "used" },
    { name: "IT Support Essentials Module 02", type: "PPTX · 31 slides", coverage: "Structured troubleshooting, remote support, research and applications", status: "used" },
    { name: "IT Support Essentials Module 03", type: "PPTX · 50 slides", coverage: "Windows displays, accessibility, updates, cloud and boot recovery", status: "used" },
    { name: "IT Support Essentials Module 04", type: "PPTX · 41 slides", coverage: "Linux, macOS, permissions, terminal and virtualisation", status: "used" },
    { name: "IT Support Essentials Module 05", type: "PPTX · 56 slides", coverage: "Mobile hardware, security, apps, hotspots and cloud", status: "used" },
    { name: "IT Support Essentials Module 06", type: "PPTX · 63 slides", coverage: "Directories, shared drives, MFA, peripherals and printers", status: "used" },
    { name: "IT Support Essentials Module 07", type: "PPTX · 103 slides", coverage: "Network types, Wi-Fi, IP, DNS/DHCP, firewalls and commands", status: "used" },
    { name: "IT Support Essentials Module 08", type: "PPTX · 64 slides", coverage: "Threats, social engineering, response, passwords and policies", status: "used" },
    { name: "IT Support Essentials Module 09", type: "PPTX · 56 slides", coverage: "Safety, diagnostic tools, cables, adapters and hardware faults", status: "used" },
    { name: "IT Support Essentials Module 10", type: "PPTX · 64 slides", coverage: "Compatibility, components, drivers, disposal and upgrades", status: "used" },
    { name: "Networking ITE Chapter 5", type: "PPTX · 139 slides", coverage: "OSI/TCP-IP, ports, devices, media, NAT, VPN, SNMP and subnetting", status: "used" },
    { name: "OS presentation", type: "PPTX · 45 slides", coverage: "OS roles, boot, interrupts, services, real-time and virtualisation", status: "used" },
    { name: "ITE8 Chapter 1", type: "PPTX · 59 visible slides", coverage: "Safety, PC components and disassembly", status: "used" },
    { name: "Algorithms, Emerging Trends & Security", type: "PPTX · 86 slides", coverage: "Algorithms, programming, IS, security, cloud, IoT, AI and 5G", status: "used" },
    { name: "UNIT 1 AND 2", type: "PDF · 32 pages", coverage: "Number conversion, Boolean gates and flip-flops", status: "corrected" },
    { name: "unit1_7", type: "PDF · 32 pages", coverage: "Complements, signed arithmetic, codes, parity and Hamming", status: "corrected" },
    { name: "number system", type: "PDF · 29 pages", coverage: "Bases plus legacy Web/database material", status: "corrected" },
    { name: "Computing Fundamentals course outline", type: "DOCX + PDF · duplicate content", coverage: "Outcomes, official sequence, grading and schedule", status: "used once" },
    { name: "Chapters 1–4 revision pack", type: "HTML + PDF · duplicate content", coverage: "Fundamentals, hardware, software and operating systems", status: "used once" },
    { name: "IT Fund term project", type: "DOCX · 2 pages", coverage: "Computer Literacy Centre proposal, spreadsheet, slides and AI/robotics brief", status: "used" },
    { name: "Understanding Computers textbook", type: "PDF · 642 pages · two identical copies", coverage: "Broad reference; 2017 product examples treated as dated", status: "derived, not republished" },
    { name: "Learning Videos", type: "PPTX · 3 slides", coverage: "Link index; only directly relevant links retained as research leads", status: "quality checked" },
    { name: "Excel practice workbook set", type: "XLSX · 26 files", coverage: "Tables, sorting/filtering, charts/forms, cross-sheet formulas, COUNTIF, invoices, finance and depreciation", status: "used" },
    { name: "Microsoft Office Excel 2007 Exercises.exe", type: "PE32 self-extractor · 2009", coverage: "Not executed: unsigned/unlicensed-distribution warning", status: "excluded for safety" }
  ];

  const webSources = [
    { title: "NIST Cybersecurity Framework 2.0", org: "NIST", url: "https://www.nist.gov/cyberframework", use: "current security outcomes and risk language" },
    { title: "The NIST Definition of Cloud Computing (SP 800-145)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/145/final", use: "IaaS, PaaS, SaaS and deployment definitions" },
    { title: "Windows command-line reference", org: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands", use: "current Windows diagnostic command reference" },
    { title: "How the Web works", org: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works", use: "browser, DNS, HTTP and server path" },
    { title: "Internet Protocol, Version 6 specification (RFC 8200)", org: "IETF", url: "https://www.rfc-editor.org/rfc/rfc8200", use: "IPv6 behaviour and terminology" },
    { title: "Web Content Accessibility Guidelines (WCAG) 2.2", org: "W3C", url: "https://www.w3.org/TR/WCAG22/", use: "accessible digital content and interaction" }
  ];

  const examSheet = [
    { title: "Foundations", items: ["IPOSC and data vs information", "validation/verification + processing modes", "software categories + build/buy/subscribe", "computer characteristics/types/generations", "information-system components"] },
    { title: "Hardware", items: ["FDE-S CPU cycle", "RAM/cache/storage hierarchy", "motherboard and compatibility", "ESD/electrical safety", "ports and adapter vs converter"] },
    { title: "Support & OS", items: ["ticket fields/SLA/KPI", "full troubleshooting method", "firmware/POST/boot sequence", "PM FUDS + system calls/interrupts", "real-time and other OS types", "accessibility and Windows/Linux/macOS tools"] },
    { title: "Networks", items: ["OSI layers", "switch/router/AP/modem", "IPv4/prefix/gateway", "DNS/DHCP/ARP", "TCP/UDP and key ports", "layered diagnostics"] },
    { title: "Security", items: ["CIA + AAA", "asset/threat/vulnerability/risk", "malware/social engineering", "defence in depth", "incident response", "ethics and permission"] },
    { title: "Math & logic", items: ["base conversion and 3/4 grouping", "two's complement", "gates and DeMorgan", "JK/D/T behaviour", "BCD/parity/Hamming"] },
    { title: "Algorithms & trends", items: ["IPO/SIT and flowchart shapes", "trace/testing/error types", "IS types + acquisition lifecycle", "spreadsheet and database design", "multimedia and cloud models", "AI/IoT/5G evaluation"] }
  ];

  const sourceCorrections = [
    "Hexadecimal D, E, F are 13, 14, 15—not 14, 15, 16.",
    "14.625₁₀ = 1110.101₂; 128₈ is invalid; 123₈ = 83₁₀.",
    "BCD correction is 0110, and the Hamming condition is 2^r ≥ m+r+1.",
    "Cloud synchronisation is not automatically a full independent backup.",
    "ifconfig/netstat are legacy on many Linux systems; ip/ss are modern alternatives.",
    "M.2 describes form factor; SATA or NVMe describes the storage interface/protocol path.",
    "5G is cellular access technology, not a container for LAN, MAN, WAN and the Web.",
    "IPv6 SLAAC uses ICMPv6 multicast, not broadcast; IPv6 has no broadcast.",
    "Classful IPv4 and BIOS/MBR remain in the slides for exam context, but CIDR and UEFI/GPT are current practice.",
    "WEP, Telnet and plain FTP are legacy/insecure; use modern secure alternatives.",
    "Wi-Fi 7 (IEEE 802.11be) was finalised in September 2024; the supplied slide predates that.",
    "Do not execute or distribute the supplied unsigned Excel self-extractor."
  ];

  return { modules, diagrams, questions, flashcards, sources, webSources, examSheet, sourceCorrections };
})();

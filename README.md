# Hezron's Study Room

A responsive, password-gated coursework dashboard with three complete study rooms:

- **Calculus with Tion:** deep lessons, worked examples, tired mode, 34 practice questions, checkpoints, formula and derivative reflex sheets, Casio fx-82EX checking methods, a solved CAT 1, CAT 2 practice and a main-exam mock.
- **Philosophical Anthropology with Bianca:** 12 connected topics synthesised from all 46 supplied files, 97 explanation blocks, 24 applied cases, 84 lesson checks, 72 model exam answers, 60 memory cards, study coaching, random-question practice and a live source/coverage ledger.
- **Discrete Mathematics with Peter:** 16 tutorials, interactive logic/set labs, 69 exam questions and 47 memory cards, including functions and inverses, counting strategy, relations/equivalence and recurrences.

All rooms use the supplied PaperNotes font. The three animated guides react when tapped, make occasional appearances on headings, check for zoning out and share a persistent focus timer. Timer completion cycles through three colours and chooses from 100 break messages. Progress and tired mode are saved locally in the browser.

## Run it

From this folder:

```bash
npm start
```

Then open `http://localhost:4173`.

- Study ID: `SVND3` (shown as fixed text)
- Password: the private study-room password supplied by the owner

No package installation or build step is needed.

## Check the JavaScript

```bash
npm test
```

The password is not stored as plain text, but this remains a client-side convenience gate rather than secure server authentication. Add a backend/auth provider before using it for genuinely private material.

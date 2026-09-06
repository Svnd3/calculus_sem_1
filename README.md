# Hezron's Study Room

A responsive, password-gated coursework dashboard with four complete study rooms:

- **Calculus with Tion:** deep lessons, worked examples, tired mode, 34 practice questions, checkpoints, formula and derivative reflex sheets, Casio fx-82EX checking methods, a solved CAT 1, CAT 2 practice and a main-exam mock.
- **Philosophical Anthropology with Bianca:** 12 connected topics synthesised from all 46 supplied files, 97 explanation blocks, 24 applied cases, 84 lesson checks, 72 model exam answers, 60 memory cards, study coaching, random-question practice and a live source/coverage ledger.
- **Discrete Mathematics with Peter:** 16 tutorials, interactive logic/set labs, 69 exam questions and 47 memory cards, including functions and inverses, counting strategy, relations/equivalence and recurrences.
- **Computing Fundamentals with Woof Woof:** 16 connected modules audited from the supplied course pack, 11 visual system maps, 77 worked/application questions, 70 memory cards and 8 interactive labs covering hardware, operating systems, support, networking, security, number systems, algorithms, spreadsheets, databases, cloud and emerging technology.

All rooms use the supplied PaperNotes font. Tion the fox, Bianca the owl, Peter the raccoon and Woof Woof the dog react when tapped, cycle through squinting, horrified, celebrating, thoughtful and sad expressions, walk across headings, check for zoning out and share a persistent focus timer. Timer completion cycles through three colours and chooses from 100 break messages. Progress and tired mode are saved locally in the browser.

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

# Tion's Calculus Room

A responsive study website built from the photographed notes in `notes/`, the uploaded CAT 1 paper, and the PaperNotes fonts in `papernotes/`.

It includes plain-language lessons with step-by-step examples, tired mode, 34 worked practice questions, checkpoints, a complete formula sheet, an interactive derivative reflex deck, fx-82EX checks, a complete CAT 1 solution, a possible CAT 2, and a 60-mark main-exam mock. The derivative deck covers ordinary trig, inverse trig, exponential/logarithmic, hyperbolic, and clearly labelled inverse-hyperbolic extension rules. The mock papers are original revision predictions—not official or leaked papers—and carry source trails to the public references that informed their exercise styles.

## Run it

From this folder:

```bash
npm start
```

Then open `http://localhost:4173`.

- Study ID: `SVND3` (shown as fixed text)
- Password: the private study-room password supplied by the owner

No package installation or build step is needed. Progress, tired mode, checkpoints, and the exam checklist are saved in the current browser.

## Check the JavaScript

```bash
npm test
```

The password is not stored as plain text, but this remains a client-side study-room gate rather than secure server authentication. Add a backend/auth provider before publishing private material to the public internet.

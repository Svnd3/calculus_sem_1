# Tion's Calculus Room

A responsive study website built from the photographed notes in `notes/` and the PaperNotes fonts in `papernotes/`.

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

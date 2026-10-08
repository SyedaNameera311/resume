# folio. — Resume Studio

A resume maker with an existing Express authentication starter and a new Next.js frontend. The UI is designed as a focused workspace: edit on the left, see your polished resume update live on the right.

## Features

- Responsive Next.js app with an editable sample resume
- Live resume preview with **Editorial**, **Modern**, and **Minimal** templates
- Five accent colors, experience and education entries, and skill quick-add chips
- Browser-local draft persistence (no resume content is sent to the server)
- Print / Save as PDF via the browser’s native print dialog
- Sign-in / registration form wired to the existing Express routes

## Run the frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000. Set `NEXT_PUBLIC_API_URL` in `frontend/.env.local` to the deployed or local Express origin for sign-in and registration. It defaults to `http://localhost:5000` in the example.

## Run the backend

The existing Express starter listens on port 5000 and exposes `POST /api/auth/register` and `POST /api/auth/login`. Configure the MongoDB connection in the root `.env`, then install the backend dependencies and run `node server.js`. The repository's backend is an early starter; review its authentication and database configuration before production use.

## Export

Choose **Download PDF** or **Export PDF**, then select “Save as PDF” in the browser print dialog. The print stylesheet includes only the resume page.

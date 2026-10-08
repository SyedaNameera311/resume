# folio. — Resume Studio

A responsive resume maker built with Next.js and an existing Express authentication starter. Open the branded welcome screen, enter the studio, and edit your resume alongside a live preview.

## Features

- Responsive web experience that can be installed as a home-screen PWA on phones and computers
- Three design collections — **Classic**, **Signature**, and **Creative** — with 12 templates in each
- 12 coordinated accent colors plus a custom color picker; the selected color updates the resume, editor, navigation, buttons, and browser theme color
- Regular, Large, and Extra-large resume type sizes
- Live resume preview, editable experience/education, and skill quick-add chips
- Browser-local draft persistence (resume content remains in the browser)
- PDF export opens a separate **finished resume** page from the latest draft; print output contains the resume only
- Sign-in / registration form wired to the existing Express routes

## Run the frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000. Set `NEXT_PUBLIC_API_URL` in `frontend/.env.local` to the deployed or local Express origin for sign-in and registration. It defaults to `http://localhost:5000` in the example.

### Install it like an app

Open the website on a phone, then choose **Install app** in Chrome/Android or **Share → Add to Home Screen** in Safari/iOS. On desktop, use the browser's install option in the address bar or menu. It launches in a standalone window and keeps its draft on that device.

## Run the backend

The existing Express starter listens on port 5000 and exposes `POST /api/auth/register` and `POST /api/auth/login`. Configure the MongoDB connection in the root `.env`, then install the backend dependencies and run `node server.js`. The repository's backend is an early starter; review its authentication and database configuration before production use.

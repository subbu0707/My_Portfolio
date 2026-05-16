# Premium Portfolio Template (Next.js)

A ready-to-use premium portfolio template built with Next.js and Tailwind CSS.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Customize quickly

- Update name/role and hero content in `components/Hero.jsx`
- Update About section in `components/About.jsx`
- Update skills in `components/Skills.jsx`
- Update project cards in `components/Projects.jsx`
- Update contact links in `components/Footer.jsx` and `components/Hero.jsx`

## Notes

- Replace `/resume.pdf` with your real resume file in the `public` folder.
- Contact form is connected to `app/api/contact/route.js` using Nodemailer.
- Add these values in `.env.local` before running the app:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=your-email@example.com
```

- Restart the dev server after updating environment variables.

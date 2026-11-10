# Mert Kodzhaaslan Portfolio

Personal portfolio for Mert Kodzhaaslan, Business Systems Analyst at Ryanair Labs and co-founder of Postlia.

## Stack

- React 19
- Create React App with CRACO
- CSS and Tailwind CSS

## Local development

```bash
npm install
npm start
```

## Verification

```bash
CI=true npm test -- --watchAll=false --runInBand --testMatch '**/*.test.jsx' --cacheDirectory .superpowers/jest-cache
npm run build
```

The site is designed as a static portfolio. It does not collect visitor data or use a contact form.

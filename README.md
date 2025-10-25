# 🧠 Tensorwave Demo

A modern, Next.js project configured with **PNPM**, **ESLint**, **Prettier**, **Husky**, **lint-staged**, and **GitHub Actions** — deployable instantly on **Vercel**.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/)
- **Package Manager:** [PNPM](https://pnpm.io/)
- **Linting & Formatting:** ESLint + Prettier
- **Git Hooks:** Husky + lint-staged
- **CI/CD:** GitHub Actions (lint-only pipeline)
- **Hosting:** [Vercel](https://vercel.com)

---

## 🧩 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/josejrobles/tensorwave-demo.git
cd tensorwave-demo.git
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm dev
```

Visit http://localhost:3000 to see app.

## 🧹 Code Quality

### ESLint

Runs automatically via lint-staged before every commit.

Manually run:

```bash
pnpm lint
```

### Prettier

Ensures consistent formatting.
Check or fix manually:

```bash
pnpm format:check
pnpm format
```

## 🧠 Git Hooks (Husky + lint-staged)

Husky enforces pre-commit and pre-push hooks:

- **Pre-commit**: Runs ESLint + Prettier on staged files.
- **Pre-push**: Runs tests (to be added later).

Set up automatically after pnpm install.

## ☁️ Deployment (Vercel)

1. Push code to main branch.
2. Auto deploys to vercel: https://tensorwave-demo.vercel.app

## 🧩 Future Improvements

- ✅ Add unit testing with Jest and React Testing Library
- ✅ Add vercel.json for custom redirects and env variables
- ✅ Add Prettier CI check to GitHub Actions
- ✅ Add automated tests in pre-push hook

## 🧠 Author

Created by Jose Robles

💻 GitHub: [@josejrobles](https://github.com/josejrobles)

🌐 Deployed on [Vercel](https://tensorwave-demo.vercel.app)

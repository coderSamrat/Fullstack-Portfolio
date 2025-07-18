## Frontend - Fullstack Portfolio

This is the frontend for the Fullstack Portfolio project, built with React, Vite, and Tailwind CSS.

### Features
- ⚡️ Fast development with [Vite](https://vitejs.dev/)
- 🎨 Styled using [Tailwind CSS](https://tailwindcss.com/)
- 🧩 Modular React components
- 🛠️ Utility functions and modern tooling

### Getting Started

#### 1. Install dependencies
```sh
npm install
```

#### 2. Start the development server
```sh
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) by default.

#### 3. Build for production
```sh
npm run build
```

#### 4. Preview the production build
```sh
npm run preview
```

### Project Structure

```
frontend/
├── src/
│   ├── App.jsx         # Main React component
│   ├── main.jsx        # Entry point
│   ├── index.css       # Tailwind and global styles
│   └── lib/
│       └── utils.js    # Utility functions
├── index.html          # HTML template
├── package.json        # Project metadata and scripts
├── vite.config.js      # Vite configuration
└── ...
```

### Aliases
You can use `@/` to import from `src/` thanks to the Vite alias configuration.

### Linting
Run ESLint to check for code quality issues:
```sh
npm run lint
```

### Customization
- Tailwind CSS is configured in `src/index.css`.
- Component and utility aliases are set in `components.json` and `jsconfig.json`.

---

**Author:** Samrat Mallick
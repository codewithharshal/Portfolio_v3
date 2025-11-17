# Portfolio v3

A modern, responsive personal portfolio website built with React and Vite. This project showcases skills, projects, certifications, and achievements in an interactive and visually appealing manner.

## 🚀 Features

- **Responsive Design**: Optimized for all devices with mobile-first approach.
- **Interactive Animations**: Smooth animations using GSAP and Motion libraries.
- **Dynamic Sections**:
  - Hero section with engaging introduction.
  - Services offered.
  - About Me section.
  - Social links integration.
  - Projects showcase with horizontal scrolling on small devices.
  - Tech Stack display.
  - Certifications and Achievements.
  - Footer with contact information.
- **Modern UI Components**: Built with Radix UI and Tailwind CSS for consistent design.
- **Performance Optimized**: Fast loading with Vite build tool.
- **Accessibility**: Proper ARIA labels and semantic HTML.

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Motion
- **Icons**: Lucide React, React Icons
- **UI Components**: Radix UI (Separator, Slot)
- **Utilities**: Class Variance Authority, clsx, tailwind-merge
- **Development**: ESLint, TypeScript (configured)

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio-v3.git
   cd portfolio-v3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Usage

To run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

To lint the code:

```bash
npm run lint
```

## 📁 Project Structure

```
portfolio-v3/
├── public/
│   ├── logo.svg
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── img1.png
│   │   ├── img2.png
│   │   ├── logo.svg
│   │   └── undraw_programming.svg
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── separator.jsx
│   │   ├── Achivements.jsx
│   │   ├── CardNav.jsx
│   │   ├── Certifications.jsx
│   │   ├── DotGrid.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Myself.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Social.jsx
│   │   ├── Stack.jsx
│   │   └── TechStack.jsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── TODO.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

## 🎨 Customization

- **Personal Information**: Update content in `src/App.jsx` for navigation items, project details, etc.
- **Styling**: Modify Tailwind classes in components for custom styling.
- **Assets**: Replace images in `src/assets/` with your own.
- **Components**: Customize individual components in `src/components/` to fit your needs.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any questions or suggestions, please reach out through the contact information in the portfolio.

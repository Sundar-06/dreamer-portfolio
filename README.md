# Sundara Perumal's Portfolio

A modern, visually stunning portfolio website built with Angular, showcasing my expertise in Full Stack Development, with a focus on Angular, .NET, Kafka, and Event-Driven Architecture.

## 🚀 Features

- **Modern Design**: Premium UI with glassmorphism, neumorphism, and gradient effects
- **Dark Mode**: Seamless theme switching with smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations and transitions using GSAP
- **Performance**: Optimized for speed and SEO
- **Interactive**: Dynamic components with microinteractions
- **Accessibility**: WCAG compliant and keyboard navigable

## 🛠️ Tech Stack

- **Framework**: Angular 17
- **Styling**: Tailwind CSS
- **Animations**: GSAP
- **Icons**: Heroicons
- **Deployment**: Vercel/Netlify/GitHub Pages

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── nav/
│   │   ├── home/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── kafka-expertise/
│   │   ├── blog/
│   │   ├── contact/
│   │   └── theme-toggle/
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/
│   ├── icons/
│   ├── projects/
│   └── blog/
└── styles.scss
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dreamer-portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

## 📦 Building for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 🌐 Deployment

The project is configured for deployment on Vercel, Netlify, or GitHub Pages. Choose your preferred platform and follow their deployment guides.

### Vercel
```bash
vercel
```

### Netlify
```bash
netlify deploy
```

### GitHub Pages
1. Update the `base` in `angular.json` to match your repository name
2. Run:
   ```bash
   ng deploy --base-href=/your-repo-name/
   ```

## 🎨 Customization

1. **Colors**: Update the color scheme in `tailwind.config.js`
2. **Fonts**: Change the font family in `tailwind.config.js` and update the Google Fonts link in `index.html`
3. **Content**: Modify the content in each component under `src/app/components/`
4. **Icons**: Add or replace icons in `src/assets/icons/`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact

- Email: sundaraperumal132@gmail.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

## 🙏 Acknowledgments

- [Angular Team](https://angular.io)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP](https://greensock.com/gsap)
- [Heroicons](https://heroicons.com)

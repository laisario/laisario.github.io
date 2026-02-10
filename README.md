# Laísa Rio - Portfolio

Personal portfolio website showcasing my projects, skills, and experience as a Full Stack Developer.

## 🌐 Live Site
[https://laisario.github.io](https://laisario.github.io)

## 🚀 Features
- **Bilingual Support**: Full i18n with English and Portuguese
- **Responsive Design**: Works on all devices
- **CV Downloads**: Both English and Portuguese versions available
- **Project Showcase**: Highlighting key projects and technologies

## 🛠️ Tech Stack
- React 17
- React Router
- Material-UI
- i18next (internationalization)
- SCSS
- GitHub Pages

## 📦 Setup

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📝 Customization

### Update Content
Edit `src/info/Info.js` to update:
- Personal information
- Skills
- Projects
- Social links

### Update Translations
Edit translation files:
- `src/i18n/en.json` (English)
- `src/i18n/pt.json` (Portuguese)

### Update Colors
Change the gradient colors in `src/info/Info.js`:
```javascript
export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
```

### Update CV/Resume
Replace files in `public/`:
- `public/base-cv-en.pdf`
- `public/base-cv-pt.pdf`

## 📄 License
MIT License - feel free to use this template for your own portfolio!

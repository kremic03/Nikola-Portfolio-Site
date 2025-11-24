
# Nikola Kremić - Personal Portfolio Website

A modern, clean, and fully responsive personal portfolio website built with React and TailwindCSS. Features smooth animations, beautiful UI components, and a professional design showcasing skills, projects, and achievements.

## Features

- **Hero Section** - Eye-catching landing page with animated introduction
- **About Me** - Professional biography with highlight cards
- **Skills** - Organized tech stack display with visual appeal
- **Projects** - Portfolio showcase with project cards
- **Experience** - Interactive timeline of achievements and work history
- **Contact** - Functional contact form with social links
- **Fully Responsive** - Works seamlessly on all devices
- **Smooth Animations** - Powered by Framer Motion
- **Modern Design** - Clean aesthetics with TailwindCSS

## Tech Stack

- **React** - Frontend framework
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd portfolio-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The application will run at `http://localhost:5173`
   - Changes will hot-reload automatically

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be generated in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
portfolio-site/
├── src/
│   ├── components/         # React components
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # About me section
│   │   ├── Skills.jsx      # Skills grid
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Experience.jsx  # Timeline component
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer component
│   ├── assets/             # Images and static files
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── style.css           # Global styles & Tailwind imports
├── public/                 # Public assets
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies and scripts
```

## Customization Guide

### Colors

The color palette is defined in `tailwind.config.js`. The primary color scheme uses blue tones:

**Current Palette:**
- Primary Blue: `#0ea5e9` (sky-500)
- Accent shades: From sky-50 to sky-900
- Grayscale: Standard Tailwind gray palette

**To change colors:**
Edit the `tailwind.config.js` file and update the `primary` color values in the `extend.colors` section.

**Recommended Alternative Palettes:**

1. **Purple/Violet** (Creative/Modern):
   ```javascript
   primary: {
     500: '#8b5cf6', // violet-500
     600: '#7c3aed', // violet-600
     // ... other shades
   }
   ```

2. **Green/Emerald** (Fresh/Tech):
   ```javascript
   primary: {
     500: '#10b981', // emerald-500
     600: '#059669', // emerald-600
   }
   ```

3. **Orange/Amber** (Energetic/Bold):
   ```javascript
   primary: {
     500: '#f59e0b', // amber-500
     600: '#d97706', // amber-600
   }
   ```

### Fonts

**Current Setup:**
- **Body Font**: Inter (clean, modern sans-serif)
- **Display Font**: Poppins (bold headings)

Both fonts are loaded via Google Fonts in `src/style.css`.

**To change fonts:**

1. Update the Google Fonts import in `src/style.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600&display=swap');
   ```

2. Update `tailwind.config.js` font family:
   ```javascript
   fontFamily: {
     sans: ['YourFont', 'system-ui', 'sans-serif'],
   }
   ```

**Recommended Font Combinations:**

1. **Montserrat + Open Sans** (Professional)
2. **Raleway + Lato** (Modern & Clean)
3. **Space Grotesk + Work Sans** (Tech/Startup)
4. **Playfair Display + Source Sans Pro** (Elegant)

### Content Updates

**Personal Information:**
- Update your name, tagline, and bio in the respective component files
- Replace social media links in `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`
- Update email in `Contact.jsx`

**Profile Photo:**
- Replace the placeholder circle in `Hero.jsx` (line 46-51) with:
  ```jsx
  <img
    src="/path/to/your/photo.jpg"
    alt="Nikola Kremić"
    className="w-40 h-40 mx-auto rounded-full shadow-2xl object-cover"
  />
  ```

**Projects:**
- Edit the `projects` array in `src/components/Projects.jsx`
- Add project thumbnails to `src/assets/` folder
- Update GitHub and live demo URLs

**Experience:**
- Update the `timeline` array in `src/components/Experience.jsx`
- Add or remove timeline items as needed

### Adding Project Images

1. Place images in `src/assets/` folder
2. Import in the component:
   ```javascript
   import projectImage from '../assets/project-name.jpg';
   ```
3. Use in JSX:
   ```jsx
   <img src={projectImage} alt="Project Name" />
   ```

## Performance Tips

1. **Optimize Images:**
   - Use WebP format for better compression
   - Compress images before uploading (tools: TinyPNG, Squoosh)
   - Use appropriate image sizes (don't use 4K images for thumbnails)

2. **Lazy Loading:**
   - Images below the fold can be lazy-loaded
   - Consider using `loading="lazy"` attribute on images

3. **Code Splitting:**
   - Already handled by Vite
   - Consider lazy loading routes if you add more pages

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [netlify.com/drop](https://netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Build and deploy: `npm run build && npm run deploy`

## Future Upgrade Ideas

### Functionality Enhancements

1. **Dark Mode Toggle**
   - Add theme switcher using React Context
   - Store preference in localStorage

2. **Blog Section**
   - Add markdown blog with syntax highlighting
   - Use libraries like `react-markdown` or `mdx`

3. **Animations**
   - Add page transition animations
   - Implement scroll-triggered animations
   - Add cursor follower effect

4. **Contact Form Backend**
   - Integrate with EmailJS, Formspree, or SendGrid
   - Add form validation with React Hook Form
   - Add success/error notifications

5. **Multilingual Support**
   - Add i18n for Serbian/English toggle
   - Use `react-i18next` library

### Content Additions

1. **Testimonials Section**
   - Add client/colleague reviews
   - Create carousel component

2. **Blog/Articles**
   - Share technical knowledge
   - Boost SEO

3. **Resume Download**
   - Add PDF download button
   - Auto-generate from site data

4. **Project Filters**
   - Add category filtering
   - Add search functionality

### Technical Improvements

1. **SEO Optimization**
   - Add react-helmet for meta tags
   - Create sitemap.xml
   - Add Open Graph tags

2. **Analytics**
   - Add Google Analytics
   - Track user interactions

3. **Performance**
   - Implement image lazy loading
   - Add service worker for PWA
   - Optimize bundle size

4. **Accessibility**
   - Add ARIA labels
   - Ensure keyboard navigation
   - Test with screen readers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio.

## Contact

**Nikola Kremić**
- Email: nikolakremic15@gmail.com
- GitHub: [@nikolakremic](https://github.com/nikolakremic)
- LinkedIn: [nikolakremic](https://linkedin.com/in/nikolakremic)

---

Built with React & TailwindCSS | Designed and developed by Nikola Kremić




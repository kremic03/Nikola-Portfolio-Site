# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Step 3: Customize Your Portfolio

### Update Personal Information

1. **Name & Tagline** - Edit `src/components/Hero.jsx` (lines 47, 57, 63)
2. **About Me** - Edit `src/components/About.jsx` (lines 72-88)
3. **Email** - Edit `src/components/Contact.jsx` (line 152)
4. **Social Links** - Update URLs in `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`

### Add Your Projects

Edit `src/components/Projects.jsx` and update the `projects` array (starting line 43):

```javascript
{
  title: 'Your Project Name',
  description: 'Brief description...',
  techStack: ['React', 'TailwindCSS'],
  githubUrl: 'https://github.com/yourusername/project',
  liveUrl: 'https://yourproject.com',
  gradient: 'from-blue-500 to-purple-600',
}
```

### Update Experience

Edit `src/components/Experience.jsx` and modify the `timeline` array (starting line 43).

### Change Colors

Edit `tailwind.config.js` and update the primary color values:

```javascript
primary: {
  500: '#yourcolor',
  600: '#yourdarkercolor',
  // ... other shades
}
```

## Step 4: Add Your Photo

Replace the placeholder in `src/components/Hero.jsx` (lines 46-51):

```jsx
<img
  src="/your-photo.jpg"
  alt="Your Name"
  className="w-40 h-40 mx-auto rounded-full shadow-2xl object-cover"
/>
```

Place your photo in the `public/` folder.

## Step 5: Build for Production

```bash
npm run build
```

Deploy the `dist/` folder to any hosting service (Vercel, Netlify, GitHub Pages).

## Common Issues

### Port already in use
If port 5173 is busy, Vite will automatically use the next available port.

### Styles not loading
Make sure TailwindCSS is properly installed and `style.css` is imported in `main.jsx`.

### Animations not working
Verify `framer-motion` is installed: `npm install framer-motion`

## Need Help?

Check the full [README.md](./README.md) for detailed documentation.

---

Happy coding! 🚀

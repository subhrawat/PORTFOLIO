# 🎯 Subodh Rawat - Professional Portfolio

A modern, responsive, and visually appealing personal portfolio website for Subodh Rawat, a CSE student and aspiring software developer.

## ✨ Features

### 🎨 **Design & UI**
- Modern glassmorphism design with smooth animations
- Dark mode and light mode toggle
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll behavior and page transitions
- Professional color scheme with gradient effects

### 📱 **Sections Included**
1. **Hero Section** - Eye-catching introduction with animated typing effect
2. **About Me** - Professional summary and educational background
3. **Skills** - Organized technical skills by category with hover effects
4. **Projects** - Featured projects with descriptions and tech stacks
5. **Education** - Timeline of educational achievements
6. **Certifications** - Training and certifications
7. **Contact** - Easy contact form and social links
8. **Navigation** - Fixed sticky navbar with smooth scrolling

### ⚡ **Interactive Features**
- **Animated Typing Effect** - Dynamic hero subtitle with multiple strings
- **Dark/Light Mode Toggle** - Theme switching with local storage persistence
- **Smooth Animations** - Fade-in, slide-in effects with Intersection Observer
- **Form Validation** - Client-side validation with success/error notifications
- **Scroll to Top Button** - Quick navigation button
- **Mobile Menu** - Hamburger menu for mobile devices
- **Keyboard Navigation** - Support for ESC key and other shortcuts

## 🛠️ **Tech Stack**
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (Vanilla)** - No dependencies required
- **Font Awesome 6.4** - Icons library
- **Google Fonts (Poppins)** - Typography

## 📦 **Files Structure**
```
Subodh Portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/             # Assets folder (for future use)
    ├── images/         # Images and screenshots
    ├── documents/      # Resume and certificates
    └── favicons/       # Favicon files
```

## 🚀 **How to Use**

### Local Setup
1. **Extract/Clone the portfolio folder** to your desired location
2. **Open `index.html`** in your web browser (or use a local server)
   
### Using Live Server (Recommended)
1. Open the folder in VS Code
2. Install **Live Server** extension
3. Right-click on `index.html` and select "Open with Live Server"
4. The portfolio will open in your browser with hot reload enabled

### Deploy Online
You can deploy this portfolio to various platforms:

#### **GitHub Pages (Free)**
1. Create a GitHub repository named `subodh-rawat.github.io`
2. Push the portfolio files to the repository
3. Access at: `https://subodh-rawat.github.io`

#### **Netlify (Free)**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the folder
3. Get a live URL instantly

#### **Vercel (Free)**
1. Go to [vercel.com](https://vercel.com)
2. Import the project
3. Deploy with one click

#### **Other Platforms**
- Firebase Hosting
- AWS S3 + CloudFront
- GoDaddy/Bluehost
- Any shared hosting provider

## 🎨 **Customization**

### **Colors**
Edit the CSS variables in `styles.css` (lines 10-28):
```css
:root {
    --primary-color: #00d4ff;      /* Change this for main accent */
    --secondary-color: #0099cc;    /* Secondary accent */
    --accent-color: #ff006e;       /* Alternative accent */
    --dark-bg: #0a0e27;            /* Dark background */
    --light-bg: #f5f7fa;           /* Light background */
    /* ... more variables ... */
}
```

### **Typography**
- Default font: **Poppins** from Google Fonts
- Change in `styles.css` or add your own in `<head>` section of `index.html`

### **Adding Project Cards**
1. Duplicate a project card in the "Projects Section"
2. Update the title, description, and tech stack
3. Replace icon and GitHub links

### **Resume Link**
To add a resume download button:
1. Place your resume in the `assets/documents/` folder
2. Add this link in the hero section:
```html
<a href="assets/documents/resume.pdf" download class="btn btn-secondary">
    <i class="fas fa-download"></i> Download Resume
</a>
```

## 📞 **Contact Information**
- **Email:** mukulsubodh1234@gmail.com
- **Phone:** +91-7248125480
- **GitHub:** github.com/subhrawat
- **LinkedIn:** linkedin.com/in/subodh-rawat

## 🔧 **Browser Support**
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 **Performance**
- Optimized for fast loading
- No external dependencies (except icons and fonts)
- Lightweight CSS and JavaScript
- Mobile-first responsive design
- Smooth 60fps animations

## 🚀 **Future Enhancements**
- Add blog section
- Implement backend for contact form
- Add project gallery with filters
- Download resume functionality
- Add testimonials section
- Newsletter subscription
- Analytics integration
- Progressive Web App (PWA) support

## 💡 **Tips for Best Results**

1. **SEO Optimization**
   - Update meta tags in `<head>` of `index.html`
   - Add meta description and keywords
   - Use proper heading hierarchy

2. **Performance**
   - Optimize images before uploading
   - Use WebP format for images
   - Enable caching headers on server

3. **Accessibility**
   - Test with screen readers
   - Ensure color contrast (WCAG AA+)
   - Add alt text to images

4. **Mobile Testing**
   - Test on various devices
   - Use Chrome DevTools device emulation
   - Check touch interactions

## 🐛 **Troubleshooting**

### **Dark mode not persisting?**
- Clear browser cache
- Check if localStorage is enabled

### **Animations not smooth?**
- Update your browser
- Check hardware acceleration in settings
- Reduce animation intensity in CSS if needed

### **Form not submitting?**
- Currently uses client-side validation only
- To add backend: integrate with Firebase, AWS, or Node.js server

### **Icons not showing?**
- Check Font Awesome CDN link in `index.html`
- Ensure internet connection (CDN requires online access)

## 📄 **License**
This portfolio is created for personal use. Feel free to modify and use as needed.

## 🙏 **Credits**
- Design inspiration from modern portfolio trends
- Icons by Font Awesome
- Fonts by Google Fonts
- Built with HTML5, CSS3, and Vanilla JavaScript

## 📧 **Support**
For suggestions or issues, feel free to reach out at: mukulsubodh1234@gmail.com

---

**Last Updated:** March 2024

**Made with ❤️ by Subodh Rawat**

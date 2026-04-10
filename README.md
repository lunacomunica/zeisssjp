# ZEISS Optical Shop - Landing Page

Professional landing page for ZEISS optical shop located in Shopping São José, São José dos Pinhais, PR.

## 📋 Project Overview

A modern, responsive landing page showcasing ZEISS optical products and services with:
- Interactive hero section with call-to-action
- Product showcase (lenses, brands, departments)
- Testimonials carousel
- Store location information
- WhatsApp integration for instant contact

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Performance**: Optimized for fast loading
- **Accessibility**: Semantic HTML, WCAG compliance
- **Branding**: ZEISS color scheme and typography
- **Interactivity**: Smooth animations and transitions

## 🏗️ Project Structure

```
zeisssjp/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling (responsive, animations, layouts)
├── js/
│   └── script.js       # Interactive features (carousel, scroll effects)
├── images/             # Product images, logos (optional)
├── package.json        # Project metadata
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- Web browser (modern versions of Chrome, Firefox, Safari, Edge)
- (Optional) Node.js for local development server

### Running Locally

#### Simple Way (no dependencies)
1. Clone the repository
2. Open `index.html` in your browser

#### With Live Server (recommended for development)
```bash
npm install
npm run dev
```
This will start a local server at `http://localhost:8080`

## 📱 Features

### Sections
1. **Navigation Bar** - Fixed header with smooth scroll effects
2. **Hero Section** - Large impactful banner with CTA
3. **Problem/Solution** - Highlight customer pain points
4. **Products** - Showcase ZEISS lenses and departments
5. **Testimonials** - Auto-rotating customer reviews carousel
6. **Store Info** - Location, address, Google Maps link
7. **Contact Form** - WhatsApp integration for direct messaging
8. **Footer** - Company information and links

### Interactive Elements
- **Carousel**: Auto-rotating testimonials with manual controls
- **Scroll Effects**: Elements reveal as they come into view
- **Navbar Effects**: Shadow appears on scroll
- **Form Handling**: File upload support for prescription receipts
- **WhatsApp Integration**: Direct messaging via WhatsApp

## 🔧 Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --z-blue:    #1B1DB5;
  --z-cyan:    #00A8FF;
  --z-text:    #0D0E2A;
  /* ... other colors ... */
}
```

### WhatsApp Number
Update in `js/script.js` function `handleForm()`:
```javascript
window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(msg)}`, '_blank');
```
Replace `5500000000000` with your actual WhatsApp number.

### Content
Update text content directly in `index.html`. Structure is semantic and easy to find:
- Store address: Search for "Rua Dona Izabel"
- Business hours: Look for time-related content
- Contact info: Search for "Nossa loja"

## 📊 Performance Tips

1. **Images**: Optimize images before adding them (compress, use WebP)
2. **Fonts**: Currently using Google Fonts CDN (already optimized)
3. **CSS**: Minify before production (consider PostCSS/build tool)
4. **JavaScript**: Keep scripts lean, defer if possible

## 🔒 Security

- No sensitive data is stored client-side
- Form submission redirects to WhatsApp Web
- All external links open in new tabs safely
- Content Security Policy friendly (no inline scripts except essential)

## 📞 Contact Integration

Currently uses WhatsApp for contact. To integrate other services:
- **Email form**: Use Formspree, Netlify Forms, or EmailJS
- **SMS**: Add Twilio integration
- **Chat widget**: Add Zendesk, Intercom, or similar

## 🌐 Deployment Options

### Easy Options (No Cost)
- **GitHub Pages**: Push to GitHub, enable Pages in settings
- **Netlify**: Connect GitHub repo, auto-deploys on push
- **Vercel**: Similar to Netlify, great for static sites

### Traditional Hosting
- **Shared Hosting**: Any provider with FTP/File Manager
- **VPS**: More control, requires setup knowledge

### Steps for Netlify/Vercel
1. Push this repo to GitHub
2. Connect your GitHub account to Netlify/Vercel
3. Select this repository
4. Build settings: leave empty (it's pure HTML/CSS/JS)
5. Deploy!

## 🔄 Version History

- **v1.0.0** (2026-04-10): Initial landing page launch
  - Complete HTML structure
  - Responsive design
  - Interactive features
  - WhatsApp integration

## 📝 Future Enhancements

- [ ] Admin dashboard to manage testimonials
- [ ] Blog section for optical health tips
- [ ] Online appointment booking
- [ ] Product comparison tool
- [ ] Multi-language support
- [ ] Analytics integration (Google Analytics, GTM)
- [ ] SEO optimization
- [ ] AMP version for mobile performance
- [ ] Progressive Web App (PWA) features

## 🤝 Contributing

For updates or improvements:
1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Create a Pull Request

## 📜 License

MIT License - Feel free to use and modify

## 📧 Support

For technical issues or questions, contact the development team.

---

**Last Updated**: April 10, 2026
**Built by**: Luna Comunica

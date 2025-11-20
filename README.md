# Licho's Lights - Christmas Lights Installation Website

A festive, modern, mobile-friendly website for Licho's Lights, a professional Christmas lights installation business serving Ventura County, California.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Christmas Theme**: Festive color palette with holiday-inspired design elements
- **Quote Calculator**: Interactive estimate calculator for installation costs
- **Service Pages**: Detailed information about residential, commercial, custom design, and takedown services
- **Contact Form**: User-friendly contact form (UI ready for backend integration)
- **Social Media Integration**: Links to Instagram and Facebook profiles

## 📁 Project Structure

```
Christmas Lights/
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page with quote calculator
├── contact.html            # Contact page
├── assets/
│   ├── css/
│   │   └── styles.css     # Custom CSS enhancements
│   ├── js/
│   │   ├── main.js        # Main JavaScript (mobile menu, form handling)
│   │   └── calculator.js  # Quote calculator logic
│   └── images/
│       ├── gallery/       # Gallery images (placeholder images currently)
│       └── icons/         # Icon assets
└── README.md              # This file
```

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `lichos-lights` (or your preferred name)
   - Make it public (required for free GitHub Pages)

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop all files from this project
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Scroll to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access Your Site**
   - Your site will be available at: `https://[your-username].github.io/[repository-name]`
   - It may take a few minutes for the site to be live

### Method 2: Using Git Command Line

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Licho's Lights website"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/[your-username]/[repository-name].git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow steps 3-4 from Method 1 to enable GitHub Pages.

## 🛠️ Local Development

To view the website locally:

1. **Simple Method**: Open `index.html` directly in your web browser
   - Note: Some features may work better with a local server

2. **Using Python (Recommended)**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then open: http://localhost:8000
   ```

3. **Using Node.js**:
   ```bash
   npx http-server
   # Then open the URL shown in terminal
   ```

## 📝 Customization

### Update Business Information

1. **Contact Details**: Edit `contact.html` to add:
   - Phone number
   - Email address

2. **Social Media**: Update Instagram and Facebook links if needed:
   - Current: `@lichos_lights`
   - Search for `lichos_lights` in all HTML files

3. **Service Area**: Currently set to "Ventura County" - update if needed

### Replace Placeholder Images

1. Add your images to `assets/images/gallery/`
2. Update image `src` attributes in HTML files:
   - `index.html` - Gallery preview section
   - `about.html` - Behind the scenes section

### Adjust Quote Calculator

Edit `assets/js/calculator.js` to modify:
- Base pricing per linear foot
- Complexity multipliers
- Additional feature costs
- Minimum base fees

## 🎨 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styles with Tailwind CSS
- **JavaScript**: Vanilla JS (no frameworks)
- **Tailwind CSS**: Via CDN for rapid styling

## 🔄 Future Enhancements

- Backend integration for contact form
- Google Maps embed for service area
- Image gallery with lightbox
- Blog section for seasonal tips
- Online booking system
- Customer testimonials section
- SEO optimization

## 📞 Support

For questions or issues with deployment, please refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

© 2024 Licho's Lights. All rights reserved.

---

**Note**: This is a static website designed for easy migration to any hosting provider. All paths are relative, making it portable and hosting-agnostic.


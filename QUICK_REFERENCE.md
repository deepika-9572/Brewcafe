# Brew Haven Café - Quick Reference Guide

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 📁 File Locations

| Component | Location |
|-----------|----------|
| Navbar | `src/components/Navbar.js` |
| Footer | `src/components/Footer.js` |
| Menu Items | `src/pages/MenuPage.js` |
| Cart Logic | `src/context/CartContext.js` |
| Home Page | `src/pages/HomePage.js` |
| Styles | `src/styles/` |

## 🎨 Color Palette

```
Primary:    #8B4513 (Saddle Brown)
Secondary:  #D2691E (Chocolate)
Accent:     #F4A460 (Sandy Brown)
Dark:       #2C1810 (Very Dark Brown)
Light:      #F5F5F5 (White Smoke)
White:      #FFFFFF
Success:    #27AE60
Error:      #E74C3C
```

## 🔗 Routes

```
/              Home Page
/about         About Page
/menu          Menu Page
/gallery       Gallery Page
/order         Order/Cart Page
/contact       Contact Page
```

## 📦 Key Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "react-icons": "^4.12.0",
  "react-slick": "^0.29.0",
  "slick-carousel": "^1.8.1",
  "axios": "^1.6.0"
}
```

## 🧩 Component Props

### MenuItemCard
```javascript
<MenuItemCard 
  item={{
    id: number,
    name: string,
    category: string,
    description: string,
    price: number,
    image: string
  }}
/>
```

### HeroSection
```javascript
<HeroSection
  title="Title"
  subtitle="Subtitle"
  backgroundImage="url"
  ctaText="Button Text"
  ctaLink="/path"
/>
```

### TestimonialSlider
```javascript
<TestimonialSlider
  testimonials={[
    {
      name: string,
      role: string,
      text: string,
      rating: number,
      image: string
    }
  ]}
/>
```

## 🛒 Cart Context API

```javascript
import { useCart } from './context/CartContext';

const {
  cart,              // Current cart items
  orders,            // Placed orders
  addToCart,         // Add item
  removeFromCart,    // Remove item
  updateQuantity,    // Update qty
  clearCart,         // Clear all
  getTotalPrice,     // Get total
  getTotalItems,     // Get count
  placeOrder         // Place order
} = useCart();
```

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1024px) { }

/* Tablet */
@media (max-width: 1023px) { }

/* Mobile */
@media (max-width: 768px) { }

/* Small Mobile */
@media (max-width: 480px) { }
```

## 🎯 Common Tasks

### Add New Menu Item
Edit `src/pages/MenuPage.js` and add to appropriate category array:
```javascript
{
  id: 15,
  name: 'Item Name',
  category: 'Category',
  description: 'Description',
  price: 4.99,
  image: 'image-url'
}
```

### Change Primary Color
Edit `src/styles/index.css`:
```css
:root {
  --primary-color: #NewColor;
}
```

### Add New Page
1. Create `src/pages/NewPage.js`
2. Add route in `src/App.js`
3. Add link in `src/components/Navbar.js`

### Update Business Info
- **Address**: `src/components/Footer.js` (line ~20)
- **Phone**: `src/components/Footer.js` (line ~21)
- **Email**: `src/components/Footer.js` (line ~22)
- **Hours**: `src/components/Footer.js` (line ~24-26)

## 🎨 CSS Classes

### Buttons
```css
.btn-primary      /* Brown button */
.btn-secondary    /* Outlined button */
.cta-btn          /* Call-to-action button */
```

### Containers
```css
.container        /* Max-width 1200px */
.section-padding  /* 60px padding */
```

### Utilities
```css
.text-center      /* Center text */
.mt-1, .mt-2, .mt-3, .mt-4    /* Margin top */
.mb-1, .mb-2, .mb-3, .mb-4    /* Margin bottom */
```

## 🔍 Debugging Tips

### Check Console
Open browser DevTools (F12) and check Console tab for errors

### React DevTools
Install React DevTools extension to inspect component tree

### Network Tab
Check Network tab to verify images and API calls load

### Mobile Testing
Use Chrome DevTools device emulation (Ctrl+Shift+M)

## 📊 Performance Tips

1. **Images**: Use optimized URLs with width/height params
2. **Code Splitting**: React Router automatically splits pages
3. **Lazy Loading**: Consider React.lazy() for heavy components
4. **Memoization**: Use React.memo() for expensive components

## 🔐 Security Notes

- Never hardcode API keys in code
- Use environment variables for sensitive data
- Validate form inputs on both client and server
- Sanitize user input before displaying

## 📞 Contact Information

**Business Details:**
- Address: 123 Coffee Street, Brew City, BC 12345
- Phone: +1 (555) 123-4567
- Email: hello@brewhaven.com

**Hours:**
- Mon-Fri: 7:00 AM - 8:00 PM
- Sat: 8:00 AM - 9:00 PM
- Sun: 8:00 AM - 7:00 PM

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)

## ✅ Pre-Deployment Checklist

- [ ] All pages load without errors
- [ ] Responsive on mobile/tablet/desktop
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Forms submit successfully
- [ ] Cart functionality works
- [ ] No console errors
- [ ] Performance is acceptable
- [ ] SEO meta tags added
- [ ] Build completes successfully

---

**Last Updated:** November 2025
**Version:** 1.0.0

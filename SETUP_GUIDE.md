# Brew Haven Café - Setup & Development Guide

## 📋 Quick Start

### 1. Install Dependencies
```bash
npm install
```

This will install all required packages:
- React 18.2.0
- React Router DOM 6.20.0
- React Icons 4.12.0
- React Slick 0.29.0
- Axios 1.6.0

### 2. Start Development Server
```bash
npm start
```

The application will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

## 🏗️ Project Architecture

### Folder Structure Explanation

#### `/src/components/`
Reusable React components used across multiple pages:
- **Navbar.js** - Navigation bar with mobile menu
- **Footer.js** - Footer with links and social media
- **HeroSection.js** - Customizable hero banner
- **MenuItemCard.js** - Individual product card
- **MenuCategory.js** - Category section wrapper
- **FeaturedItems.js** - Featured products showcase
- **TestimonialSlider.js** - Customer testimonials carousel
- **GalleryGrid.js** - Image gallery with lightbox
- **CartComponent.js** - Shopping cart display
- **CheckoutForm.js** - Order checkout form
- **ContactForm.js** - Contact form
- **MapEmbed.js** - Google Maps embed

#### `/src/pages/`
Full page components for each route:
- **HomePage.js** - Landing page with hero, features, testimonials
- **AboutPage.js** - Company info, team, values, stats
- **MenuPage.js** - Coffee menu with category filtering
- **GalleryPage.js** - Photo gallery showcase
- **OrderPage.js** - Shopping cart and checkout
- **ContactPage.js** - Contact information and form

#### `/src/context/`
Global state management:
- **CartContext.js** - Cart and order management using React Context API

#### `/src/styles/`
CSS files organized by component and page:
- **index.css** - Global styles and CSS variables
- **App.css** - App-level styles
- **components/** - Component-specific styles
- **pages/** - Page-specific styles

### `/public/`
Static files:
- **index.html** - Main HTML file with Google Fonts

## 🎨 Styling System

### CSS Variables (in `index.css`)
```css
--primary-color: #8B4513;      /* Saddle Brown */
--secondary-color: #D2691E;    /* Chocolate */
--accent-color: #F4A460;       /* Sandy Brown */
--dark-color: #2C1810;         /* Very Dark Brown */
--light-color: #F5F5F5;        /* White Smoke */
--white: #FFFFFF;
--text-color: #333333;
--border-color: #E0E0E0;
--success-color: #27AE60;
--error-color: #E74C3C;
```

### Responsive Breakpoints
```css
Desktop:       1024px and above
Tablet:        768px to 1023px
Mobile:        Below 768px
Small Mobile:  Below 480px
```

## 🔄 State Management with Context API

### CartContext Usage

```javascript
import { useCart } from './context/CartContext';

function MyComponent() {
  const {
    cart,                    // Array of cart items
    orders,                  // Array of placed orders
    addToCart,              // Add item to cart
    removeFromCart,         // Remove item from cart
    updateQuantity,         // Update item quantity
    clearCart,              // Clear entire cart
    getTotalPrice,          // Get cart total
    getTotalItems,          // Get item count
    placeOrder              // Place an order
  } = useCart();
}
```

### Cart Item Structure
```javascript
{
  id: number,
  name: string,
  category: string,
  description: string,
  price: number,
  image: string,
  quantity: number
}
```

## 🛣️ Routing Structure

```
/                 → HomePage
/about            → AboutPage
/menu             → MenuPage
/gallery          → GalleryPage
/order            → OrderPage
/contact          → ContactPage
```

## 📱 Responsive Design Implementation

### Mobile-First Approach
All components use mobile-first CSS with media queries for larger screens.

### Grid System
- Uses CSS Grid for flexible layouts
- `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`
- Automatically adjusts columns based on screen size

### Flexbox
- Used for navigation, buttons, and inline layouts
- Provides flexible spacing and alignment

## 🎯 Component Usage Examples

### Adding a New Menu Item
```javascript
const newItem = {
  id: 14,
  name: 'Americano',
  category: 'Espresso',
  description: 'Strong espresso with hot water',
  price: 3.75,
  image: 'https://images.unsplash.com/...'
};

// Add to menuItems array in MenuPage.js
```

### Creating a New Page
1. Create file in `/src/pages/NewPage.js`
2. Import necessary components
3. Add route in `App.js`:
```javascript
<Route path="/new-page" element={<NewPage />} />
```

### Adding Navigation Link
Update `Navbar.js`:
```javascript
<li className="nav-item">
  <Link to="/new-page" className="nav-link" onClick={closeMenu}>
    New Page
  </Link>
</li>
```

## 🎨 Customization Guide

### Changing Colors
Edit CSS variables in `/src/styles/index.css`:
```css
:root {
  --primary-color: #YourColor;
  --secondary-color: #YourColor;
  /* ... etc */
}
```

### Modifying Fonts
Edit font imports in `/public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

### Updating Business Information
- **Contact Info**: Edit `src/components/Footer.js` and `src/pages/ContactPage.js`
- **About Section**: Edit `src/pages/AboutPage.js`
- **Team Members**: Update team array in `src/pages/AboutPage.js`

## 🚀 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🔍 Performance Optimization

### Image Optimization
- Using Unsplash CDN for images
- Images are optimized with width and height parameters
- Consider using WebP format for production

### Code Splitting
- React Router automatically code-splits pages
- Each page loads only when needed

### Lazy Loading
- Images load on demand
- Consider implementing React.lazy() for components

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Cart functionality works
- [ ] Forms submit without errors
- [ ] Images load properly
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Animations are smooth
- [ ] Links are functional

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# On macOS/Linux
lsof -i :3000
kill -9 <PID>

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
npm cache clean --force
rm -rf node_modules
npm install
npm run build
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 📞 Support

For issues or questions:
1. Check the README.md
2. Review component documentation
3. Check browser console for errors
4. Verify all dependencies are installed

---

Happy coding! ☕

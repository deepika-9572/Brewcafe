# Brew Haven Café - Modern Coffee Shop Website

A fully responsive and modern coffee shop website built with React, featuring a beautiful UI, smooth animations, and complete e-commerce functionality.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![React Router](https://img.shields.io/badge/React%20Router-6.20.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

### Pages
- **Home Page** - Hero section, featured items, testimonials, and call-to-action
- **About Page** - Company story, values, team members, and statistics
- **Menu Page** - Comprehensive coffee menu with category filtering
- **Gallery Page** - Beautiful image gallery with lightbox functionality
- **Order Page** - Shopping cart and checkout system
- **Contact Page** - Contact form, location map, and business information

### Components
- **Navbar** - Sticky navigation with mobile menu and cart badge
- **Footer** - Comprehensive footer with links and social media
- **HeroSection** - Customizable hero banner with background images
- **MenuItemCard** - Product cards with quantity selector and add-to-cart
- **MenuCategory** - Category sections for organized menu display
- **FeaturedItems** - Showcase featured products
- **TestimonialSlider** - Customer testimonials with navigation
- **GalleryGrid** - Image gallery with lightbox preview
- **CartComponent** - Shopping cart with item management
- **CheckoutForm** - Multi-step checkout with form validation
- **ContactForm** - Contact form with success/error messages
- **MapEmbed** - Embedded Google Maps location

### State Management
- **CartContext** - Global cart management using React Context API
- Add/remove items, update quantities, calculate totals
- Order placement and history tracking

### Design Features
- ✨ Modern and elegant UI with coffee-themed color scheme
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Smooth animations and transitions
- 🌙 Professional typography with Poppins and Playfair Display fonts
- 🎯 Intuitive user experience with clear navigation
- ♿ Accessible components and semantic HTML

## 📁 Project Structure

```
Brewcafe/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── HeroSection.js
│   │   ├── MenuItemCard.js
│   │   ├── MenuCategory.js
│   │   ├── FeaturedItems.js
│   │   ├── TestimonialSlider.js
│   │   ├── GalleryGrid.js
│   │   ├── CartComponent.js
│   │   ├── CheckoutForm.js
│   │   ├── ContactForm.js
│   │   └── MapEmbed.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── AboutPage.js
│   │   ├── MenuPage.js
│   │   ├── GalleryPage.js
│   │   ├── OrderPage.js
│   │   └── ContactPage.js
│   ├── context/
│   │   └── CartContext.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── components/
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.css
│   │   │   ├── HeroSection.css
│   │   │   ├── MenuItemCard.css
│   │   │   ├── MenuCategory.css
│   │   │   ├── FeaturedItems.css
│   │   │   ├── TestimonialSlider.css
│   │   │   ├── GalleryGrid.css
│   │   │   ├── CartComponent.css
│   │   │   ├── CheckoutForm.css
│   │   │   ├── ContactForm.css
│   │   │   └── MapEmbed.css
│   │   └── pages/
│   │       ├── HomePage.css
│   │       ├── AboutPage.css
│   │       ├── MenuPage.css
│   │       ├── GalleryPage.css
│   │       ├── OrderPage.css
│   │       └── ContactPage.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd Brewcafe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 🎨 Color Scheme

- **Primary Color**: `#8B4513` (Saddle Brown)
- **Secondary Color**: `#D2691E` (Chocolate)
- **Accent Color**: `#F4A460` (Sandy Brown)
- **Dark Color**: `#2C1810` (Very Dark Brown)
- **Light Color**: `#F5F5F5` (White Smoke)

## 📦 Dependencies

- **react** (^18.2.0) - UI library
- **react-dom** (^18.2.0) - React DOM rendering
- **react-router-dom** (^6.20.0) - Client-side routing
- **react-icons** (^4.12.0) - Icon library
- **react-slick** (^0.29.0) - Carousel component
- **slick-carousel** (^1.8.1) - Carousel styles
- **axios** (^1.6.0) - HTTP client

## 🔧 Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode with hot reload.

### Build
```bash
npm run build
```
Builds the app for production to the `build` folder.

### Test
```bash
npm test
```
Launches the test runner in interactive watch mode.

## 🌐 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 💡 Key Features Implementation

### Cart Management
The app uses React Context API for global state management:
- Add items to cart with quantity
- Update item quantities
- Remove items from cart
- Calculate totals with tax
- Place orders and track history

### Routing
React Router v6 provides client-side routing:
- Smooth page transitions
- Nested routes support
- Dynamic route parameters

### Responsive Design
CSS Grid and Flexbox for responsive layouts:
- Mobile-first approach
- Flexible grid systems
- Media queries for all breakpoints

### Performance
- Optimized images from Unsplash
- Lazy loading support
- Smooth animations with CSS transitions
- Efficient component re-renders

## 📝 Usage Examples

### Adding Items to Cart
```javascript
import { useCart } from './context/CartContext';

function MyComponent() {
  const { addToCart } = useCart();
  
  const handleAdd = () => {
    addToCart({
      id: 1,
      name: 'Espresso',
      price: 3.50,
      quantity: 1
    });
  };
  
  return <button onClick={handleAdd}>Add to Cart</button>;
}
```

### Using Cart Context
```javascript
const { cart, getTotalPrice, getTotalItems } = useCart();
```

## 🎯 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Order history and tracking
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Dark mode theme

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Created with ❤️ for coffee lovers everywhere.

## 📞 Support

For support, email hello@brewhaven.com or visit our website.

---

**Enjoy your perfect cup of coffee! ☕**

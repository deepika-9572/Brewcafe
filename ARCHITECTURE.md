# Brew Haven Café - Architecture Guide

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    React Application                     │
│                    (Brew Haven Café)                     │
└─────────────────────────────────────────────────────────┘
                            │
                ┌───────────┴───────────┐
                │                       │
        ┌───────▼────────┐    ┌────────▼────────┐
        │   App.js       │    │  CartContext    │
        │  (Routing)     │    │  (State Mgmt)   │
        └───────┬────────┘    └────────┬────────┘
                │                      │
        ┌───────┴──────────────────────┴──────┐
        │                                      │
    ┌───▼────┐  ┌──────┐  ┌──────┐  ┌───────▼──┐
    │ Navbar │  │Pages │  │Comps │  │ Styles   │
    └────────┘  └──────┘  └──────┘  └──────────┘
```

## 📊 Component Hierarchy

```
App
├── Navbar
│   ├── Logo
│   ├── Nav Links
│   ├── Cart Badge
│   └── Mobile Menu
├── Routes
│   ├── HomePage
│   │   ├── HeroSection
│   │   ├── About Preview
│   │   ├── FeaturedItems
│   │   ├── TestimonialSlider
│   │   └── CTA Section
│   ├── AboutPage
│   │   ├── HeroSection
│   │   ├── Story Section
│   │   ├── Values Grid
│   │   ├── Team Grid
│   │   └── Stats Section
│   ├── MenuPage
│   │   ├── HeroSection
│   │   ├── Category Filter
│   │   └── MenuCategory
│   │       └── MenuItemCard (multiple)
│   ├── GalleryPage
│   │   ├── HeroSection
│   │   └── GalleryGrid
│   │       └── Lightbox
│   ├── OrderPage
│   │   ├── CartComponent
│   │   │   └── Cart Items
│   │   └── CheckoutForm
│   │       └── Order Success
│   └── ContactPage
│       ├── HeroSection
│       ├── Contact Info
│       ├── ContactForm
│       └── MapEmbed
└── Footer
    ├── Company Info
    ├── Quick Links
    ├── Contact Info
    ├── Hours
    └── Social Links
```

## 🔄 Data Flow

### Cart Management Flow

```
User Action
    │
    ├─ Add to Cart
    │   └─> CartContext.addToCart()
    │       └─> Update cart state
    │           └─> Component re-renders
    │               └─> Cart badge updates
    │
    ├─ Update Quantity
    │   └─> CartContext.updateQuantity()
    │       └─> Update item quantity
    │           └─> Recalculate total
    │               └─> CartComponent updates
    │
    ├─ Remove Item
    │   └─> CartContext.removeFromCart()
    │       └─> Remove from cart array
    │           └─> Recalculate total
    │               └─> CartComponent updates
    │
    └─ Place Order
        └─> CartContext.placeOrder()
            └─> Create order object
                └─> Clear cart
                    └─> Show success page
```

## 🎯 State Management Architecture

```
CartContext (Global State)
├── State
│   ├── cart: Item[]
│   └── orders: Order[]
├── Actions
│   ├── addToCart(item)
│   ├── removeFromCart(id)
│   ├── updateQuantity(id, qty)
│   ├── clearCart()
│   ├── placeOrder(data)
│   ├── getTotalPrice()
│   └── getTotalItems()
└── Consumers
    ├── Navbar (getTotalItems)
    ├── MenuItemCard (addToCart)
    ├── CartComponent (cart, removeFromCart, updateQuantity)
    ├── CheckoutForm (placeOrder, getTotalPrice)
    └── OrderPage (cart, getTotalPrice)
```

## 📁 Folder Organization

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation bar
│   ├── Footer.js       # Footer
│   ├── HeroSection.js  # Hero banner
│   ├── MenuItemCard.js # Product card
│   ├── MenuCategory.js # Category wrapper
│   ├── FeaturedItems.js # Featured showcase
│   ├── TestimonialSlider.js # Testimonials
│   ├── GalleryGrid.js  # Gallery
│   ├── CartComponent.js # Shopping cart
│   ├── CheckoutForm.js # Checkout
│   ├── ContactForm.js  # Contact form
│   └── MapEmbed.js     # Map embed
├── pages/              # Full page components
│   ├── HomePage.js
│   ├── AboutPage.js
│   ├── MenuPage.js
│   ├── GalleryPage.js
│   ├── OrderPage.js
│   └── ContactPage.js
├── context/            # State management
│   └── CartContext.js
├── styles/             # CSS files
│   ├── index.css       # Global styles
│   ├── App.css         # App styles
│   ├── components/     # Component styles
│   └── pages/          # Page styles
├── App.js              # Main app component
└── index.js            # Entry point
```

## 🎨 Styling Architecture

### CSS Organization

```
Global Styles (index.css)
├── CSS Variables (colors, shadows, etc.)
├── Base Styles (*, body, html)
├── Typography (h1-h6, p, a)
├── Utility Classes (.container, .text-center, etc.)
└── Responsive Utilities

Component Styles
├── Layout (Navbar, Footer)
├── Sections (HeroSection, FeaturedItems)
├── Products (MenuItemCard, MenuCategory)
├── Shopping (CartComponent, CheckoutForm)
└── Utilities (ContactForm, MapEmbed)

Page Styles
├── HomePage.css
├── AboutPage.css
├── MenuPage.css
├── GalleryPage.css
├── OrderPage.css
└── ContactPage.css
```

### CSS Variables System

```css
:root {
  /* Colors */
  --primary-color: #8B4513;
  --secondary-color: #D2691E;
  --accent-color: #F4A460;
  --dark-color: #2C1810;
  --light-color: #F5F5F5;
  --white: #FFFFFF;
  --text-color: #333333;
  --border-color: #E0E0E0;
  --success-color: #27AE60;
  --error-color: #E74C3C;
  
  /* Effects */
  --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

## 🔀 Routing Architecture

```
BrowserRouter
├── Route: /
│   └── HomePage
├── Route: /about
│   └── AboutPage
├── Route: /menu
│   └── MenuPage
├── Route: /gallery
│   └── GalleryPage
├── Route: /order
│   └── OrderPage
└── Route: /contact
    └── ContactPage
```

## 📱 Responsive Design Architecture

```
Desktop (1024px+)
├── Full navigation
├── Multi-column layouts
├── Large images
└── All features visible

Tablet (768px - 1023px)
├── Adjusted navigation
├── 2-column layouts
├── Optimized spacing
└── Touch-friendly

Mobile (Below 768px)
├── Hamburger menu
├── Single column layouts
├── Smaller images
└── Optimized for touch

Small Mobile (Below 480px)
├── Simplified navigation
├── Minimal spacing
├── Compressed layouts
└── Essential features only
```

## 🔐 Security Architecture

```
User Input
    │
    ├─ Form Validation (Client-side)
    │   └─ Required fields check
    │   └─ Email format validation
    │   └─ Phone format validation
    │
    ├─ Data Sanitization
    │   └─ Remove special characters
    │   └─ Escape HTML entities
    │
    └─ State Management
        └─ No sensitive data in localStorage
        └─ Cart data in memory only
        └─ Orders in context state
```

## 🚀 Performance Architecture

```
Code Splitting
├── React Router automatic page splitting
├── Each page loads on demand
└── Reduces initial bundle size

Image Optimization
├── Unsplash CDN for images
├── Width/height parameters
├── Responsive image sizing
└── Lazy loading support

Rendering Optimization
├── Functional components
├── Hooks for state management
├── Memoization where needed
└── Efficient re-renders

Caching Strategy
├── Browser caching for static assets
├── Service worker ready
└── Optimized bundle size
```

## 🔄 Component Lifecycle

### Page Load Flow

```
1. App.js loads
   └─> CartProvider wraps app
       └─> Router initializes
           └─> Navbar renders
               └─> Page component renders
                   └─> Footer renders
                       └─> Page fully loaded
```

### User Interaction Flow

```
1. User clicks "Add to Cart"
   └─> MenuItemCard.handleAddToCart()
       └─> useCart().addToCart()
           └─> CartContext updates state
               └─> Navbar re-renders
                   └─> Cart badge updates
                       └─> User sees feedback
```

### Checkout Flow

```
1. User navigates to /order
   └─> OrderPage renders
       └─> CartComponent displays items
           └─> User clicks "Checkout"
               └─> CheckoutForm renders
                   └─> User fills form
                       └─> User submits
                           └─> Order placed
                               └─> Success page shown
```

## 📊 Data Models

### MenuItem
```javascript
{
  id: number,
  name: string,
  category: string,
  description: string,
  price: number,
  image: string
}
```

### CartItem
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

### Order
```javascript
{
  id: number,
  items: CartItem[],
  total: number,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string,
  city: string,
  zipCode: string,
  paymentMethod: string,
  timestamp: string
}
```

### Testimonial
```javascript
{
  name: string,
  role: string,
  text: string,
  rating: number,
  image: string
}
```

## 🎯 Design Patterns Used

### 1. **Context API Pattern**
- Global state management
- Avoids prop drilling
- Centralized cart logic

### 2. **Component Composition**
- Reusable components
- Single responsibility
- Easy to maintain

### 3. **Container/Presentational Pattern**
- Pages as containers
- Components as presentational
- Separation of concerns

### 4. **Custom Hooks Pattern**
- `useCart()` hook for cart access
- Encapsulates context logic
- Reusable across components

### 5. **Responsive Design Pattern**
- Mobile-first approach
- CSS Grid and Flexbox
- Media queries for breakpoints

## 🔗 Integration Points

### External APIs
- **Google Maps** - Location embed
- **Unsplash** - Image CDN
- **Google Fonts** - Typography

### Future Integration Points
- Backend API for orders
- Payment gateway (Stripe, PayPal)
- Email service for confirmations
- Analytics service
- Authentication service

---

**Architecture Version:** 1.0.0
**Last Updated:** November 2025

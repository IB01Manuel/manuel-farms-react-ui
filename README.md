# Manuel Farms - Farm-to-Customer E-Commerce Platform

## 📋 Table of Contents
- [About The Project](#about-the-project)
- [🚀 Live Demo](#-live-demo)
- [✨ Features](#-features)
- [🛠️ Built With](#️-built-with)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🔧 API Documentation](#-api-documentation)
- [🎨 Styling Guidelines](#-styling-guidelines)
- [📱 Responsive Design](#-responsive-design)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## About The Project

Manuel Farms is a modern React-based e-commerce platform designed to revolutionize the agricultural supply chain in Nigeria. Our mission is to eliminate the gap between farmers and consumers by providing a seamless digital marketplace for fresh farm produce, livestock, and agricultural products.

**Core Philosophy:** "Connecting YOU to the FOOD you love!"

**Key Value Propositions:**
- 🌱 **Direct Farm-to-Table Connection** - Eliminate middlemen, get produce directly from farmers
- 🛒 **Comprehensive Marketplace** - One-stop shop for farm products, livestock, and fisheries
- 🚚 **Nationwide Delivery** - Countrywide services with professional packaging and timely delivery
- 👨‍🌾 **Farmer Empowerment** - Supporting local farmers with better market access
- 💚 **Freshness Guaranteed** - Farm-fresh products delivered in optimal condition

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/-Live_Demo-blue?style=for-the-badge&logo=netlify)(https://manuel-farms-react-ui.vercel.app/)]

[![App Screenshot](https://github.com/IB01Manuel/manuel-farms-react-ui/blob/master/Manuel%20Farms%20-%20capture-1.png)]

**Key Sections:**
- 🏠 **Homepage** - Featured products, carousel, and search functionality
- 📖 **About Us** - Company mission, vision, and establishment story
- 📞 **Contact** - Direct communication channels
- 🔍 **Search** - Advanced product search with detailed results

## ✨ Features

### ✅ Current Features
- **Modern Responsive Design**
  - Mobile-first approach using Bootstrap 5
  - Fully responsive across all devices
  - Custom color scheme with brand identity

- **Interactive Components**
  - Dynamic image carousel with custom captions
  - Feature cards with SVG icons
  - Interactive search functionality
  - Animated hover effects

- **Search & Discovery**
  - Real-time search with API integration
  - Detailed product listings with images
  - Price display and product descriptions
  - Error handling and loading states

- **Navigation & UX**
  - React Router for seamless navigation
  - Persistent header and footer
  - Breadcrumb navigation
  - Smooth transitions between pages

### 🚧 Planned Features (Roadmap)
- **Phase 1: Enhanced E-commerce**
  - User authentication and profiles
  - Shopping cart functionality
  - Wishlist and favorites
  - Product categories and filters

- **Phase 2: Farmer Integration**
  - Farmer registration and dashboards
  - Inventory management system
  - Order tracking and management
  - Farmer reviews and ratings

- **Phase 3: Advanced Features**
  - Integrated payment gateway (Paystack, Flutterwave)
  - Real-time chat support
  - Mobile app development
  - Subscription services
  - Delivery tracking system

## 🛠️ Built With

**Frontend Stack:**
- **React 18** - Modern component-based architecture
- **React Router v6** - Client-side routing
- **Bootstrap 5** - Responsive CSS framework
- **React Bootstrap** - Bootstrap components for React
- **PropTypes** - Runtime type checking
- **Axios** - HTTP client for API calls

**Development Tools:**
- **Vite** - Fast build tool and development server
- **ESLint** - Code quality and consistency
- **Git** - Version control
- **npm** - Package management

**Backend API:**
- **Node.js/Express** - REST API server
- **PostgreSQL** - Database (planned integration)

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16.0 or higher)
- **npm** (v8.0 or higher) or **yarn**
- **Git** for version control
- **Modern web browser** (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/IB01Manuel/manuel-farms-react-ui.git
cd manuel-farms
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables (optional):**
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:3001/api
# Add other environment variables as needed
```

4. **Start the development server:**
```bash
npm run dev
# or
yarn dev
```

5. **Open in your browser:**
Visit `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```text
manuel-farms-react/
├── public/                    # Static assets
│   ├── images/               # Image assets
│   │   ├── pig farm.jpeg
│   │   ├── fish farm.jpg
│   │   ├── poultry farm.jpg
│   │   ├── corn.jpg
│   │   └── svg-icons/        # SVG icons
│   └── index.html            # Main HTML template
│
├── src/
│   ├── components/           # Reusable components
│   │   ├── Carousel.jsx      # Image carousel component
│   │   ├── Features.jsx      # Features section component
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Header.jsx        # Navigation header
│   │   └── SearchBar.jsx     # Search functionality
│   │
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Homepage
│   │   ├── About.jsx         # About page
│   │   ├── Contact.jsx       # Contact page
│   │   └── SearchResults.jsx # Search results page
│   │
│   ├── data/                 # Static data
│   │   └── data.js           # Mock data and configurations
│   │
│   ├── services/             # API services
│   │   └── api.js            # API client configuration
│   │
│   ├── styles/               # CSS styles
│   │   ├── main.css          # Main stylesheet
│   │   └── index.css         # Entry CSS file
│   │
│   ├── App.jsx               # Main application component
│   ├── index.jsx              # Application entry point
│   └── reportWebVitals.js    # Performance monitoring
│
├── .gitignore                # Git ignore file
├── package.json              # Dependencies and scripts
├── README.md                 # Project documentation
└── vite.config.js           # Vite configuration
```

## 🔧 API Documentation

### Search Endpoint
```javascript
GET /api/search?q={query}
```
**Response Format:**
```json
{
  "items": [
    {
      "id": 1,
      "name": "Product Name",
      "description": "Product description",
      "price": 5000,
      "formatted_price": "5,000",
      "image_url": "/images/product.jpg"
    }
  ]
}
```

### Environment Variables
```env
# Frontend
VITE_API_BASE_URL=http://localhost:3001

# Backend (example)
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=manuel_farms
PORT=3001
```

## 🎨 Styling Guidelines

### Color Palette
- **Primary Green:** `#008000` (rgb(0, 128, 0))
- **Primary Blue:** `rgba(3, 103, 174, 1)` (rgb(3, 103, 174))
- **Accent Colors:** Various shades of green and blue
- **Text Colors:** 
  - Dark: `#333333`
  - Light: `#666666`
  - Muted: `#6c757d`

### Typography
- **Primary Font:** Bootstrap default (system fonts)
- **Headings:** Bold with brand colors
- **Body Text:** Clean and readable
- **Special Emphasis:** Green for "FOOD", Blue for "YOU"

### Component Styling
- **Buttons:** Custom hover effects with color transitions
- **Cards:** Subtle shadows and border-radius
- **Forms:** Clean borders with focus states
- **Navigation:** Responsive collapse for mobile

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 992px
- **Desktop:** > 992px

### Mobile-First Features
- Collapsible navigation menu
- Responsive image sizing
- Touch-friendly buttons
- Optimized form inputs
- Adaptive layout grids

### Component Responsiveness
- **Carousel:** Adaptive image sizes
- **Feature Cards:** Stack vertically on mobile
- **Search Results:** Adjust image and text layout
- **Header:** Collapsible navigation

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes:**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow React best practices and component patterns
- Use PropTypes for type checking
- Maintain responsive design principles
- Write meaningful commit messages
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Bootstrap** for the responsive framework
- **React Bootstrap** for component integration
- **React Community** for excellent documentation and tools
- **All contributors** who have helped shape this project

## 📞 Contact

Manuel Farms - [manuel.ibibo@yahoo.com](mailto:manuel.ibibo@yahoo.com)

Project Link: [https://github.com/IB01Manuel/manuel-farms-react-ui](https://github.com/IB01Manuel/manuel-farms-react-ui)

---

**Made with ❤️ for Nigerian Agriculture**
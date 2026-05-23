# Digital Catalog Platform for Local Businesses

A comprehensive Next.js platform designed to help offline, design-based businesses in tier-2 and tier-3 cities build a strong online presence through digital catalogs.

## 🎯 Target Audience

- **Tiles Dealers** - Showcase ceramic, vitrified, and designer tiles
- **Marble & Sanitary Shops** - Display marble varieties and bathroom fixtures
- **Carpenters** - Present woodwork and custom furniture projects
- **Furniture Makers** - Exhibit furniture collections and designs
- **Modular Kitchen Providers** - Show kitchen designs and layouts
- **Interior Designers** - Portfolio of design projects and services
- **Hardware Stores** - Catalog of tools and construction materials
- **Paint Shops** - Color palettes and paint varieties

## ✨ Key Features

### 🏪 Digital Catalog System

- **Business Profiles** - Complete business information with contact details
- **Product Galleries** - Image-rich product showcases with categories
- **WhatsApp Integration** - Direct customer inquiries via WhatsApp
- **Mobile-First Design** - Optimized for mobile browsing experience
- **Search & Filters** - Easy product and business discovery

### 📱 Mobile-Friendly Experience

- **Responsive Design** - Works perfectly on all device sizes
- **Touch-Friendly Interface** - Optimized for mobile interactions
- **Fast Loading** - Optimized images and performance
- **Offline Capability** - Basic functionality works offline

### 💬 Communication Features

- **WhatsApp Widget** - Floating WhatsApp chat for instant communication
- **Inquiry System** - Structured inquiry forms with business details
- **Contact Integration** - Direct phone calls and WhatsApp messages
- **Lead Management** - Track and manage customer inquiries

### 🔍 Discovery & Search

- **Advanced Search** - Search by business name, location, or products
- **Category Browsing** - Browse by business type and product categories
- **Location-Based** - Find businesses in specific cities/areas
- **Featured Listings** - Highlight premium business catalogs

### 📊 Business Management

- **Admin Dashboard** - Comprehensive business management interface
- **Analytics** - Track views, inquiries, and engagement
- **Content Management** - Easy product and business information updates
- **Inquiry Tracking** - Monitor and respond to customer inquiries

## 🛠 Technical Stack

- **Framework**: Next.js 16 with App Router
- **CMS**: Sanity v5 for content management
- **Styling**: Tailwind CSS v4 with modern design system
- **Animations**: Framer Motion for smooth interactions
- **Database**: Sanity for structured content
- **Deployment**: Vercel-ready configuration
- **TypeScript**: Full type safety throughout

## 📁 Project Structure

```
src/
├── app/
│   ├── catalogs/                 # Catalog listing and detail pages
│   │   ├── [slug]/              # Individual catalog pages
│   │   └── components/          # Catalog-specific components
│   ├── search/                  # Search functionality
│   ├── admin/                   # Admin dashboard
│   ├── actions/                 # Server actions for forms
│   └── components/              # Page-specific components
├── components/
│   ├── ui/                      # Reusable UI components
│   ├── whatsapp-widget.tsx      # WhatsApp integration
│   ├── inquiry-modal.tsx        # Customer inquiry forms
│   └── search-bar.tsx           # Search functionality
├── sanity/
│   ├── schemaTypes/             # Content schemas
│   │   ├── catalog.ts           # Business catalog schema
│   │   ├── product.ts           # Product schema
│   │   ├── productCategory.ts   # Category schema
│   │   └── inquiry.ts           # Customer inquiry schema
│   └── queries.ts               # Sanity queries
└── constants/
    └── data.ts                  # Fallback data and constants
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account for CMS

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd digital-catalog-platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create `.env.local` file:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token
   RESEND_API_KEY=your_resend_key
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

5. **Access Sanity Studio**
   ```bash
   # Visit /studio in your browser for content management
   ```

## 📋 Content Management

### Setting Up Business Catalogs

1. **Create Product Categories**
   - Navigate to Sanity Studio
   - Add categories for different business types
   - Set business type (tiles, marble, furniture, etc.)

2. **Add Business Catalogs**
   - Create new catalog entries
   - Add business information, contact details
   - Upload logo and cover images
   - Set location and working hours

3. **Add Products**
   - Create products linked to catalogs
   - Add multiple product images
   - Set specifications and pricing
   - Organize by categories

### Managing Inquiries

- View customer inquiries in admin dashboard
- Track inquiry status and priority
- Export inquiry data for analysis
- Respond to customers via WhatsApp

## 🎨 Customization

### Styling

- Modify `tailwind.config.js` for design system changes
- Update color schemes in CSS variables
- Customize component styles in respective files

### Business Types

Add new business types by:

1. Updating `businessTypeLabels` in components
2. Adding new options to Sanity schemas
3. Creating appropriate icons and colors

### WhatsApp Integration

- Configure phone numbers in site settings
- Customize message templates
- Modify WhatsApp widget appearance

## 📱 Mobile Optimization

- **Touch-Friendly**: Large tap targets and gestures
- **Fast Loading**: Optimized images and lazy loading
- **Responsive**: Adapts to all screen sizes
- **Offline Support**: Basic functionality without internet

## 🔧 API Endpoints

### Sanity Queries

- `getCatalogs()` - Fetch all business catalogs
- `getCatalogBySlug(slug)` - Get specific catalog
- `getProductsByCatalog(id)` - Fetch catalog products
- `searchCatalogs(term)` - Search functionality
- `getFeaturedCatalogs()` - Get featured businesses

### Server Actions

- `createInquiry()` - Submit customer inquiries
- `sendBookingEmail()` - Handle contact form submissions

## 🚀 Deployment

### Vercel Deployment

1. Connect repository to Vercel
2. Set environment variables
3. Deploy automatically on push

### Sanity Studio Deployment

1. Deploy studio to Sanity hosting
2. Configure CORS settings
3. Set up webhooks for real-time updates

## 📊 Analytics & Monitoring

- **Business Analytics**: Track catalog views and inquiries
- **Search Analytics**: Monitor popular search terms
- **Performance**: Monitor page load times and user engagement
- **Conversion Tracking**: Track inquiry-to-customer conversion

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- 📧 Email: support@DikhaoNow.com
- 💬 WhatsApp: +91 98765 43210
- 📖 Documentation: [docs.DikhaoNow.com](https://docs.DikhaoNow.com)

## 🎯 Roadmap

- [ ] **Multi-language Support** - Hindi and regional languages
- [ ] **Payment Integration** - Online payment for products
- [ ] **Inventory Management** - Stock tracking for businesses
- [ ] **Review System** - Customer reviews and ratings
- [ ] **Social Media Integration** - Instagram and Facebook sync
- [ ] **Advanced Analytics** - Detailed business insights
- [ ] **Mobile App** - Native mobile applications
- [ ] **Voice Search** - Voice-based product search

---

**Built with ❤️ for local businesses in India**

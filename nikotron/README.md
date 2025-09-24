# 🚀 NIKOTRON: Technology Solutions Website

## 🌐 Project Overview

NIKOTRON is a modern, responsive technology services website showcasing comprehensive digital solutions. Built with cutting-edge web technologies, this project demonstrates a professional approach to presenting technology services.

### 🎯 Project Purpose

At NIKOTRON, we transform technology challenges into innovative solutions. Our website highlights our expertise in:
- Software Installation
- Computer Repair & Servicing
- Electronics Design
- IoT Solutions
- Web Development
- App Development

## 🛠 Technologies Used

- **Frontend Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## 📂 Project Structure

```
nikotron/
├── app/
│   ├── contact/
│   ├── portfolio/
│   ├── services/
│   │   ├── app-development/
│   │   ├── computer-repair-servicing/
│   │   ├── electronics-design/
│   │   ├── iot-solutions/
│   │   ├── software-installation/
│   │   └── web-development/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ContactForm.tsx
│   └── Navbar.tsx
├── public/
│   └── images/
└── styles/
    └── globals.css
```

## ✨ Key Features

- **Responsive Design**: Mobile-friendly layout
- **Interactive Components**: 
  - Dynamic contact form
  - Service detail pages
  - Portfolio modal
- **Modern UI**: Gradient backgrounds, smooth transitions
- **SEO Optimized**: Metadata for each page

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/nikotron.git
   cd nikotron
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run development server
   ```bash
   npm run dev
   ```

## 🌍 Deployment

### Recommended Platforms

1. **Vercel** (Recommended)
   - Seamless Next.js deployment
   - Free tier available
   - Automatic deployments from GitHub

2. **Netlify**
   - Easy continuous deployment
   - Free hosting for static sites

3. **GitHub Pages**
   - Static site hosting
   - Requires additional configuration for Next.js

### Deployment Steps (Vercel)

1. Connect your GitHub repository
2. Vercel will automatically detect Next.js project
3. Configure build settings if needed
4. Deploy with one click

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🏗️ Backend Build Plan

This section outlines the plan for building and integrating a dedicated backend for NIKOTRON.

### 1. Initial Setup
- **Create `server` directory**: A new directory named `server` will be created at the project root to house all backend-related code.
- **Initialize Node.js project**: Run `npm init -y` inside the `server` directory to create a `package.json` file.
- **Install dependencies**: Install `express` for the server framework and `cors` to handle cross-origin requests from the frontend.

### 2. Basic Express Server
- **Create `index.js`**: This file will be the main entry point for the server.
- **Setup Express app**: Configure a basic Express application to listen on a designated port (e.g., 3001).
- **Enable CORS**: Use the `cors` middleware to allow requests from the Next.js frontend.
- **Create a test route**: Implement a `/api/test` route that returns a simple JSON response to confirm the server is running correctly.

### 3. API Endpoints
- **Contact Form Endpoint**: Create a `POST /api/contact` endpoint to handle submissions from the contact form. This will involve:
    - Parsing the request body for form data.
    - Validating the incoming data.
    - (Initially) Logging the data to the console.
    - (Later) Integrating with an email service like Nodemailer to send notifications.
- **Services & Portfolio Endpoints**:
    - `GET /api/services`: To fetch a list of all services.
    - `GET /api/portfolio`: To fetch all portfolio items.
    - This will allow for dynamic content management in the future.

### 4. Database Integration (Future)
- **Choose a database**: Evaluate and select a database (e.g., MongoDB, PostgreSQL).
- **Setup database connection**: Configure the server to connect to the chosen database.
- **Create data models**: Define schemas for services, portfolio items, and contact submissions.
- **Refactor API endpoints**: Update the API endpoints to interact with the database for CRUD (Create, Read, Update, Delete) operations.

### 5. Deployment
- **Update Vercel configuration**: Configure the Vercel project to handle the `server` directory as a serverless function.
- **Set environment variables**: Manage sensitive information like database credentials and API keys using environment variables.
- **Deploy and test**: Deploy the updated application and test the API endpoints in a live environment.

## 📋 Future Improvements

- [ ] Add more interactive animations
- [ ] Implement dark mode
- [ ] Create more detailed service pages
- [ ] Add client testimonials
- [ ] Implement advanced form validation

## 🔒 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Nicolas Nyerere
- Email: nyererenicolas33@gmail.com
- Project Link: [https://github.com/yourusername/nikotron](https://github.com/yourusername/nikotron)
- Live Site: [https://nikotron.vercel.app](https://nikotron.vercel.app)

---

**Built with ❤️ by Nicolas Nyerere**

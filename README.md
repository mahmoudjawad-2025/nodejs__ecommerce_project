<div align="center">
  <h1>🛍️ Node.js E-Commerce REST API</h1>
  
  <p>
    <strong>A robust, modular backend engine for a complete e-commerce platform.</strong>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
    <img src="https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT" />
    <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white" alt="Cloudinary" />
  </p>
</div>

---

## 📖 Overview

This project is a feature-rich **E-Commerce Backend** built with Node.js and Express. It provides a solid foundation for online stores, managing everything from secure user authentication to complex order processing and discount systems. The codebase follows a clean, modular architecture to ensure scalability and ease of maintenance.

---

## 📋 Table of Contents
- [📖 Overview](#-overview)
- [🛠️ Main Modules & Endpoints](#️-main-modules--endpoints)
- [🚀 Technical Highlights](#-technical-highlights)
- [✨ Core Features](#-core-features)
- [🛡️ Security & Performance](#️-security--performance)
- [📂 Project Structure](#-project-structure)
- [⚙️ Getting Started](#️-getting-started)
- [📘 API Documentation](#-api-documentation)
- [📞 Contact](#-contact)

---

## 🛠️ Main Modules & Endpoints

| Module | Key Endpoints | Description |
| :--- | :--- | :--- |
| **🔐 Auth** | `/register`, `/login`, `/sendCode`, `/resetPassword` | User signup with email confirmation, secure login, and recovery. |
| **📁 Category** | `/create`, `/getAll`, `/update/:id`, `/remove/:id` | Management of product categories and sub-categories. |
| **📦 Product** | `/create`, `/getAll`, `/getDetails/:id`, `/remove/:id` | Product inventory management with image upload support. |
| **🎟️ Coupon** | `/create`, `/getAll` | Creation and validation of discount coupons with expiration dates. |
| **🛒 Cart** | `/addToCart` | Dynamic shopping cart management for registered users. |
| **🧾 Order** | `/create`, `/delivered`, `/changeStatus/:id` | Checkout processing, order tracking, and status management. |
| **⭐ Review** | `/review/create` | Feedback system for users to rate and comment on products. |
| **👤 User** | `/getUser/:id`, `/updateUser`, `/deleteUser` | User profile management and administrative user controls. |

---

## 🚀 Technical Highlights

- **Clean Architecture Principles**: Domain-driven, modular design separating routing, controllers, schemas, and middlewares for maximum testability and maintainability.
- **Global Error Handling Framework**: A custom, centralized error interception middleware that eliminates `try-catch` boilerplate and guarantees standardized, predictable API responses.
- **"Clean View" Formatting Standard**: Strict adherence to a highly readable code organization system, utilizing uniform section headers (`//- - -`) and consistent spatial logic.
- **Robust Async Handling**: Custom `asyncHandler` wrappers to catch unhandled promise rejections instantly.

---

## ✨ Core Features

### 🔐 Secure Authentication
- **JWT-Based Identity**: Secure stateless authentication for all protected routes.
- **Email Verification**: Automated confirmation emails sent via Nodemailer on registration.
- **Password Recovery**: Secure OTP/Code based password reset flow.

### 🛒 Commerce Logic
- **Inventory Management**: Full CRUD for products with categorical organization.
- **Dynamic Cart**: Per-user cart persistence and real-time updates.
- **Discount Engine**: Validation of coupons based on percentage and expiration.
- **Order Lifecycle**: From checkout creation to delivery status updates.

### ☁️ Asset & Media Management
- **Cloudinary Integration**: Remote storage for product images.
- **Multer Middleware**: Optimized file validation and upload handling for multi-image support.

### 🏗️ Technical Architecture
- **Global Error Handling**: Centralized middleware to handle all operational errors gracefully.
- **Input Validation**: Strict request payload validation using `Joi` schemas.
- **Modular Structure**: Domain-driven design where each feature (order, product, etc.) is self-contained.

---

## 📂 Project Structure

```text
📦 project_root
 ┣ 📂 db              # Mongoose models and database connection
 ┣ 📂 docs            # API documentation (Markdown/Postman)
 ┣ 📂 src
 ┃ ┣ 📂 middlewares    # Auth, validation, and error interceptors
 ┃ ┣ 📂 modules        # Core domain logic (Auth, Product, etc.)
 ┃ ┣ 📂 utils          # Shared helpers (Email, Upload, Error classes)
 ┃ ┣ 📜 index.js       # App entry point
 ┃ ┗ 📜 index_router.js# Global route distribution
 ┣ 📜 .env            # Environment secrets
 ┣ 📜 package.json    # Dependencies and scripts
 ┗ 📜 README.md       # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js**: v16.x or higher
- **MongoDB**: Local instance or Atlas cluster URI
- **Cloudinary**: API keys for media storage

### 1. Installation
```bash
# Clone the repository
git clone <repo-url>
cd ecommerce_api

# Install dependencies
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory. Use the following template:
```env
PORT=3000
DB_URL=your_mongodb_uri
LOGIN_SECRET=your_jwt_secret
CONFIRMEMAIL_SECRET=your_email_secret
SALT_ROUNDS=8

# Third-Party Services
cloud_name=your_cloudinary_name
api_key=your_cloudinary_api_key
api_secret=your_cloudinary_api_secret

EMAIL_USER=your_smtp_email
EMAIL_PASS=your_app_password
project_title="Elite eCommerce"
```

### 3. Execution
```bash
# Start development server with live reload
npm run dev

# Start production server
npm start
```

---

## 📘 API Documentation

For a detailed breakdown of every endpoint, including request bodies and sample responses:

👉 **[View Full API Documentation](docs/api_document.md)**

---

## 📞 Contact

- 📧 **Email**: [mahmoudjawad02025@gmail.com](mailto:mahmoudjawad02025@gmail.com)
- 💻 **GitHub Profile**: [@mahmoudjawad-2025](https://github.com/mahmoudjawad-2025/)
- 💼 **LinkedIn:** [linkedin.com/in/mahmoud-abu-alsebaa](https://linkedin.com/in/mahmoud-abu-alsebaa)

<br>
<div align="center">
  <i>Architected with passion, driven by clean code.</i>
</div>

# Smart Inventory & POS System

A modern Smart Inventory and Point of Sale (POS) system for shopping marts, built with Node.js, PostgreSQL, React, and Tailwind CSS.

---

## Project Overview

This system allows store staff to manage inventory, process sales via POS, generate QR code-based bills, and receive notifications on low stock items. It integrates with popular Nepalese payment gateways like eSewa and Khalti.

---

## Tech Stack

- **Backend:** Node.js, Express, Prisma ORM, PostgreSQL  
- **Frontend:** React.js, Vite, Tailwind CSS, Zustand (state management), React Router  
- **Payments:** eSewa & Khalti integration  
- **Other:** JWT Authentication, Winston Logger, Socket.IO (optional for real-time notifications)

---

## Features

### Inventory Management
- CRUD operations for products
- Real-time stock tracking
- Low stock notifications (dashboard, email, SMS)

### POS System
- Staff UI to add products to cart
- Automatic price & total calculation
- Checkout with QR code payment
- Stock deduction after sale
- Sales reports and transaction history

### Billing & Payment
- QR code generation for bills
- Payment confirmation via webhooks
- Printable/downloadable receipts

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)  
- PostgreSQL  
- npm or yarn  

### Backend Setup

1. Clone the repository  
2. Navigate to the backend folder (`server`)  
3. Install dependencies:  
   ```bash
   npm install

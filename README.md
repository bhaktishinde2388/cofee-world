# CoffeeWorld App

**Author:** Bhakti Dattatray Shinde  
**Email:** bhaktishinde2388@gmail.com | **Phone:** 7709722873  

[![React](https://img.shields.io/badge/React-17.0.2-blue)](https://reactjs.org/) [![Axios](https://img.shields.io/badge/Axios-0.27.2-green)](https://axios-http.com/) [![CSS](https://img.shields.io/badge/CSS-Responsive-red)](#)

---

## 🚀 Project Overview

CoffeeWorld is a responsive web application for coffee enthusiasts. It allows users to **signup/login**, explore coffee products, **add products to cart**, and perform **role-based operations** on products.  

- **Customer role:** Can view coffee products and add them to cart.  
- **Seller role:** Can view, add, edit, and delete coffee products.  

All data is handled via **localStorage** for authentication, cart, and role management, and **mock coffee data** is used locally to simulate product listings. Prices are displayed in **Indian Rupees (Rs)**, and all images are real coffee images fetched online.

The app is designed with a modern theme, attractive gradients, and responsive UI across all devices.

---

## ✅ Features Implemented

### Landing Page
- Responsive Navbar (Logo, Login, Signup, Logout)  
- Hamburger menu for mobile view  
- Image carousel showcasing coffee images  
- Intro section: “Why Choose Us?” cards (text-only, attractive, responsive)  
- Welcome section with **Explore Products** button  

### Authentication & Role Management
- **Signup**
  - Username, Email, Password, Confirm Password validation
  - Regex validations: username, email, strong password
  - Stores user data and role in localStorage
  - Responsive themed form  
- **Login**
  - Only registered users can log in
  - Login form shows **username and role**
  - Navbar updates dynamically to reflect login state
- **Role-based Functionality**
  - **Customer:** Can view products, add to cart, search & filter
  - **Seller:** Can view, add, edit, delete products, search & filter  

---

### Products Page
- **Protected route:** accessible only when logged in
- **Product Table / Cards**:
  - Columns: Title, Price (Rs), Description, Category, Action
  - Actions:
    - **View Product:** Modal with coffee image, details, and add-to-cart (for customers)
    - **Edit Product:** Modal with pre-filled form (for sellers only)
    - **Delete Product:** Confirmation before deleting (for sellers only)
  - **Add Product Form (Seller only):** Adds coffee product to local mock data
  - **Search & Filter:**
    - Search bar filters by coffee title
    - Category dropdown filter (only coffee category in mock data)
- **Add to Cart (Customer only):**
  - Button inside product modal
  - Adds product to localStorage cart
  - Shows toast/alert on adding product

---

### UI & UX
- Themed and gradient-based color scheme across the site  
- Rounded cards, shadows, hover effects  
- Responsive design:
  - Product cards increase in size on mobile
  - Tables convert to card-style on small screens
  - Navbar converts to hamburger menu
- Modals/popups themed consistently with gradient colors  

---

### Reusable Components
- **Button:** Themed, rounded buttons with hover effects  
- **Modal:** Themed modal for view/edit product  
- **Navbar:** Responsive with login state and role display  
- **Custom Hook:** `useConfirmDelete` for delete confirmations  

---

## 🧰 Tech Stack

- **Frontend:** React (Functional components + Hooks)  
- **Routing:** React Router  
- **State & Storage:** localStorage for authentication, cart & roles  
- **Data:** Local mock coffee products with real coffee images  
- **Styling:** CSS with responsive design and themed colors  
- **Notifications:** React Hot Toast / React Toastify  

---

### 🎯 Role-Based Summary

| Role      | Permissions |
|-----------|-------------|
| **Customer** | View coffee products, search/filter, add to cart |
| **Seller**   | View coffee products, search/filter, add/edit/delete products |

---

### 💻 How to Run

1. Clone the repository:

```bash
git clone <your-repo-url>
cd coffee-world

# 🏨 TraVoa – Hotel Booking Platform

🔗 **Live Site URL**: [https://ph-assignment-11-travoa.netlify.app/](https://ph-assignment-11-travoa.netlify.app/)

---

## 📌 Project Description

**TraVoa** is a modern, full-featured **Hotel Booking Platform** built using the MERN stack with secure authentication and dynamic features. It offers users a seamless experience for discovering and booking hotel rooms, submitting reviews, and managing their bookings. The platform is mobile-responsive, secure, and designed to be both functional and visually appealing for users and recruiters.

---

## ✨ Features

- 🏡 **Homepage**

  - Hero Banner with SwiperJS Slider
  - Integrated Hotel Map using `react-leaflet`
  - Featured Rooms with rating, image, price, and quick booking
  - Testimonial carousel with sorted real user reviews
  - Special Offers and Promotions modal

- 🔐 **Authentication**

  - Email & Password Authentication with Validation
  - Google Sign-In support
  - Secure private routes using JWT
  - SweetAlert2 & Toast notifications

- 🛏️ **Rooms Page**

  - Browse all hotel rooms with filter by price range
  - Dynamic routing to Room Details

- 📄 **Room Details**

  - Full room info from database
  - Review section with user-submitted reviews and timestamps
  - Book Now modal with date picker and real-time availability check

- 📆 **Bookings System**

  - View and manage bookings in "My Bookings" page
  - Cancel booking with date restriction logic
  - Update booking date with live feedback
  - Add reviews only after successful booking

- 📉 **Review System**

  - Review modal with rating (1–5), timestamp, and display on room details
  - Sorted descending by latest

- ❌ **404 Page**
  - Custom 404 with Lottie react and redirect button

---

## 🔒 Security

- Firebase config and MongoDB credentials are securely handled via environment variables.
- JWT tokens stored on client side and verified on private routes.
- CORS handled for deployment with proper domain whitelist.

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: Firebase + JWT
- **Routing**: React Router

---

## 📦 NPM Packages Used

**Client Side:**

- `tailwindcss` – Utility-first CSS framework
- `daisyui` – Tailwind UI components
- `axios` – API calls
- `firebase` – Auth & Firestore integration
- `lottie-react` – 404 & promo animations
- `sweetalert2` – Alerts & notifications
- `@smastrom/react-rating` – Star rating input
- `react-leaflet` – Map & marker rendering
- `swiper` – Hero banner slider
- `moment` – Date manipulation
- `framer-motion` – Component animations
- `react-countup` – Dynamic number animations
- `react-day-picker` – Date picker in booking
- `react-helmet` – Dynamic tab title & meta
- `react-icons` – Iconography
- `react-router-dom` – Routing

**Server Side:**

- `express` – Web framework
- `cors` – CORS configuration
- `dotenv` – Environment variable management
- `firebase-admin` – Admin SDK for secure access
- `mongodb` – Database client

---

## 📱 Responsiveness

TraVoa is fully optimized for all screen sizes:  
✅ Mobile  
✅ Tablet  
✅ Desktop

---

> © 2025 – Developed with ❤️ by noboKumar

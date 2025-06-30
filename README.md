
---

## 🚀 Features

- 🔐 User Registration and Login
- 📚 Book Browsing by Category
- 🛒 Add to Cart and Purchase Functionality
- 💳 Payment Integration (configurable)
- 👤 User Dashboard for Orders and Profile
- 🧑‍💻 Admin Panel for Book and User Management
- 📦 File Upload Support (e.g., book covers, previews)
- 📱 Responsive Design for All Devices

---

## 🛠️ Technologies Used

### Backend (Spring Boot)
- Java
- Spring Boot
- Spring Security (JWT Authentication)
- Spring Data JPA
- MySQL or H2 Database
- Maven

### Frontend (Angular)
- Angular 16+
- TypeScript
- RxJS
- Angular Routing
- Bootstrap / Tailwind CSS

---

## ⚙️ Getting Started

### Prerequisites
- Java 17+
- Node.js & npm
- Angular CLI
- Maven
- MySQL (or embedded H2)

## 📘 API Endpoints

### ✅ AuthController – `/api/auth`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/register` | Register a new user |
| `POST` | `/login` | Login with email & password, returns JWT token |
| `GET`  | `/image/{filename}` | Fetch uploaded image by filename |

---

### 👤 UserController – `/api/user`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/get/all/books` | Get all available books |
| `GET` | `/get/all/authors` | Get all available authors |
| `POST` | `/order/request` | Place an order |
| `GET` | `/get/my/all/order?id={userId}` | Get all orders placed by user |
| `GET` | `/get/my/info?id={userId}` | Get current user’s profile info |
| `PUT` | `/edit/my/info?id={userId}` | Update current user’s profile |

---

### 🛠️ AdminController – `/api/admin`

#### 📚 Book Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/add/book` | Add a new book (`multipart/form-data`: book JSON + image) |
| `GET`  | `/get/all/books` | Get all books (admin view) |
| `PUT`  | `/update/book` | Update book info (`multipart/form-data`: book JSON + optional image) |
| `DELETE` | `/delete/book?id={bookId}` | Delete book by ID |

#### 🖋 Author Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/add/author` | Add a new author |
| `GET`  | `/get/all/authors` | Get all authors (admin view) |
| `PUT`  | `/update/author` | Update author details |
| `DELETE` | `/delete/author?id={authorId}` | Delete author by ID |

#### 📦 Order Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/get/all/order` | Get all user orders (admin) |
| `DELETE` | `/delete/order?id={orderId}` | Delete an order |
| `PUT` | `/order/delivered?orderId={id}` | Mark an order as delivered |
| `PUT` | `/order/completed?orderId={id}` | Mark an order as completed |
| `PUT` | `/order/cancelled?orderId={id}` | Cancel an order |

#### 👥 User Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/get/all/users` | Get all users |
| `GET` | `/get/profile/info?id={userId}` | Get specific user profile (admin view) |

---

### 🖼️ File Uploads & Serving

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/auth/image/{filename}` | Fetch uploaded image file |


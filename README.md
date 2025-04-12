# 🎟️ Eventify

**Eventify** is a simple and intuitive event booking web application built with React. Users can seamlessly browse events, add tickets to cart, and view bills — all **without needing to log in**. It's designed with a clean and modular structure to ensure scalability and maintainability.

---

## 🚀 Features

- View upcoming events
- View event prices
- Add tickets to a cart (supports multiple tickets)
- View final bill
- Automatically generated unique ticket IDs
- No login required for booking

---

## 📁 Folder Structure

src/

- Home/ → Homepage logic and layout
- Events/ → Event listing and details
- Cart/ → Cart and billing logic
- UI/ → App layout and reusable UI components (e.g., Button)
- services/ → API calls and data fetching logic
- App.jsx → Main app with routing

---

## 🛠️ Tech Stack

| Purpose                 | Technology Used                    |
| ----------------------- | ---------------------------------- |
| Framework               | React                              |
| Styling                 | Tailwind CSS                       |
| Routing                 | React Router (with dataLoader)     |
| UI State Management     | Redux                              |
| Remote State Management | React Router with Loader APIs      |
| Backend API             | Firebase Realtime DB / JSON Server |

---

## 📦 Installation

````bash
git clone https://github.com/your-username/eventify.git
cd eventify
npm install


## 🌐 API Setup

By default, Eventify uses **Firebase Realtime Database** as the backend.

### Using Firebase:

Update your fetch URL inside `services/` to:

```js
https://your-firebase-project-id.firebaseio.com/events.json



---

Now you can copy-paste this wherever you need! Let me know if you'd like to add anything else. 😊
````

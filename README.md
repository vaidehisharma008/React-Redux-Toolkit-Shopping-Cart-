<h1 align="center">🛒 Redux Toolkit Shopping Cart</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2-blue?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux%20Toolkit-v2.2.3-purple?logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-green?logo=open-source-initiative" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" />
</p>

<p align="center">
  <b>A fully interactive shopping cart web app built with React + Redux Toolkit.</b>  
  <br>⚡ Manage products, quantities, and totals — all synced globally via Redux Toolkit.
</p>

---

## 🖼️ Project Preview

> *(Add your screenshot or screen recording GIF here)*  
> Example:  
> ![Preview](https://user-images.githubusercontent.com/placeholder/demo-preview.gif)

---

## 🌟 Key Features

| 🌈 Feature | 💬 Description |
|-------------|----------------|
| 🛍️ **Add to Cart** | Add products instantly to the cart |
| 🔄 **Update Quantity** | Adjust quantity and auto-update total |
| ❌ **Remove Items** | Delete products individually |
| 🧹 **Clear Cart** | Reset everything with one click |
| 💸 **Real-time Calculation** | Cart total updates dynamically |
| 🧠 **Redux Toolkit State** | Simplified global management |

---

## 🧩 Tech Stack

| Category | Tech Used |
|-----------|------------|
| ⚛️ Frontend | React 18.2 |
| 🌀 State Management | Redux Toolkit |
| 🎨 Styling | CSS3 (custom) |
| 💛 Language | JavaScript (ES6+) |

---

## 🧠 Understanding the Flow

ProductList.js (UI trigger)
⬇
dispatch(addItem(product))
⬇
cartSlice.js updates Redux state
⬇
useSelector() fetches new state
⬇
Cart.js reflects updates instantly

yaml
Copy code

🔥 **Real-time synchronization** between UI and state — no manual refresh, no prop drilling!

---

## 🗂️ Folder Structure
shopping-cart/
│
├── src/
│ ├── app/
│ │ └── store.js
│ ├── features/
│ │ └── cartSlice.js
│ ├── components/
│ │ ├── ProductList.js
│ │ └── Cart.js
│ ├── App.js
│ ├── App.css
│ └── index.js
│
└── README.md

## Visit Website: https://pl-info.github.io/Dashboard/
# Dashboard

🚀 _Modern Admin Dashboard_

A sleek, responsive, and performance-oriented Admin Dashboard built with **Vanilla JavaScript**, **CSS3**, and **HTML5**. This project showcases a dynamic data-driven interface, a robust theme-switching engine, and a mobile-first design philosophy.

✨ _Features_

- **Dynamic Data Rendering:** Automatically populates the order table using a modular JavaScript data structure.
- **Smart Theme Engine:**
  - Manual toggle between Light and Dark modes.
  - Persistent storage using `localStorage`.
  - Automatic synchronization with OS/System color schemes (`prefers-color-scheme`).
- **Fully Responsive:** Fluid grid layout that adapts seamlessly from 4K monitors to mobile devices.
- **Modern UI/UX:** Features "SN Pro" typography, CSS variables for design consistency, and glassmorphism-inspired shadows.

🚀 _Getting Started_

**Prerequisites**

- A modern web browser (Chrome, Firefox, Edge, or Safari).
- A local server environment (required for ES6 Module support).

**Installation**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourname/farspace.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd admin-dashboard
    ```
3.  **Run the project:**
    Open `index.html` using a local server (e.g., VS Code **Live Server** extension) to avoid CORS issues related to ES6 Modules.

📁 _Project Structure_

| File         | Description                                               |
| :----------- | :-------------------------------------------------------- |
| `index.html` | The main skeletal structure and DOM entry point.          |
| `style.css`  | Design system, animations, and CSS variables for theming. |
| `order.js`   | Data module containing the array of order objects.        |
| `script.js`  | Core logic for UI rendering and theme management.         |

🛠️ _Usage_

**_Adding New Orders_**

To update the dashboard data, simply add a new object to the array in `order.js`:

```javascript
{
    productName: 'New Product',
    productNumber: '00000',
    paymentStatus: 'Paid',
    status: 'Shipped'\
}
```

🛠️ _Customization & Adaptability_

**_Modifying Colors (Design System)_**

The dashboard uses a centralized design system powered by CSS variables. To update the branding or adjust the theme colors, modify the `:root` selector in `style.css`.

```css
:root {
  --color-primary: #7380ec;
  --color-danger: #ff7782;
  --color-success: #41f1b6;
  --color-warning: #ffbb55;
  --color-white: #fff;
  --color-info-dark: #7d8da1;
  --color-dark: #363949;
  --color-light: rgba(132, 139, 200, 0.18);

  --card-border-radius: 2rem;
  --border-radius-1: 0.4rem;
  --card-padding: 1.8rem;
  --box-shadow: 0 2rem 3rem var(--color-light);
}
```


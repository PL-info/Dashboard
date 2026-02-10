import { order } from './order.js';

document.addEventListener('DOMContentLoaded', () => {
    // === Render Order ===
    const orderList = document.querySelector('#order-list');
    if (orderList) {
        order.forEach(item => {
            const tr = document.createElement('tr');
            const statusClass = item.status === 'Declined' ? 'danger' : 
                                item.status === 'Pending' ? 'warning' : 
                                item.status === 'Shipped' ? 'success' : 'primary';

            tr.innerHTML = `
                <td id="start">${item.productName}</td>
                <td>${item.productNumber}</td>
                <td>${item.productStatus}</td>
                <td id="${statusClass}">${item.status}</td>
                <td id="primary">Details</td>
            `;
            orderList.appendChild(tr);
        });
    }

    // === Sidebar ===
    const sideMenu = document.querySelector("aside");
    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector(".close");

    if (menuBtn) menuBtn.onclick = () => sideMenu.classList.add('show-sidebar');
    if (closeBtn) closeBtn.onclick = () => sideMenu.classList.remove('show-sidebar');

    // === Light / Dark Mode  ===
    const modeToggle = document.querySelector(".mode"); // Target the parent div
    const lightModeBtn = document.querySelector("#light");
    const darkModeBtn = document.querySelector("#dark");
    const systemMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            lightModeBtn?.querySelector('span').classList.remove('active');
            darkModeBtn?.querySelector('span').classList.add('active');
        } else {
            document.body.classList.remove('dark-mode');
            lightModeBtn?.querySelector('span').classList.add('active');
            darkModeBtn?.querySelector('span').classList.remove('active');
        }
    };

    const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(systemMediaQuery.matches ? 'dark' : 'light');
    }
};

    initTheme();

    //  (Manual Change)
    lightModeBtn?.addEventListener('click', () => {
        localStorage.setItem('theme', 'light');
        applyTheme('light');
    });

    darkModeBtn?.addEventListener('click', () => {
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    });

   systemMediaQuery.addEventListener('change', (e) => {
    const savedTheme = localStorage.getItem('theme');
    
    if (!savedTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        applyTheme(newTheme);
    }
    });
    // Auto Change
    systemMediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) { 
        const newTheme = e.matches ? 'dark' : 'light';
        applyTheme(newTheme);
        }
    });

    // Single Click
    modeToggle?.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    const nextTheme = isDark ? 'light' : 'dark';
    
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
    });
});
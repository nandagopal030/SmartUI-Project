// Sidebar.tsx
import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { menuItems } from '../data/menuItems'

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);       // Pinned open by click
  const [hovered, setHovered] = useState(false); // Temporary open by hover


  const isSidebarOpen = open || hovered; // Determines if sidebar is currently expanded

  return (
    <>
      {/* ☰ Burger icon */}
      <div
        className={styles.menuIcon}
        onClick={() => setOpen(!open)} // Toggle pin
      >
        <span>☰</span>
      </div>
      
      {/* Sidebar container */}
      <div
        className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
      <div>
      </div>
      
        <ul className={styles.menuList}>
          {menuItems.map((item, idx) => (
            <li key={idx} className={styles.menuItem}>
              {item.icon && (
                <span className={styles.icon}>
                  <item.icon />
                </span>
              )}
              {isSidebarOpen && <span className={styles.label}>{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

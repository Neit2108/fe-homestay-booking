import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({
  brand,
  logo,
  items = [],
  actions,
  className = '',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${className}`}>
      <div className={styles.container}>
        <div className={styles.brand}>
          {logo && <img src={logo} alt="Logo" className={styles.logo} />}
          {brand && <span className={styles.brandText}>{brand}</span>}
        </div>

        <div className={styles.mobileMenuButton} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`${styles.menuItems} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navItems}>
            {items.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <a
                  href={item.href}
                  className={`${styles.navLink} ${item.active ? styles.active : ''}`}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
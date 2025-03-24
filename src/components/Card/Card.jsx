import React from 'react';
import styles from './Card.module.css';

const Card = ({
  children,
  title,
  subtitle,
  footer,
  className = '',
  ...props
}) => {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
      )}
      
      <div className={styles.body}>{children}</div>
      
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;
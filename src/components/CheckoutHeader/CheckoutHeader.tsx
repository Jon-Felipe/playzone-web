import { Fragment } from 'react';
import { NavLink } from 'react-router';
import { FiMinus } from 'react-icons/fi';

import { useAppSelector } from '../../app/hooks';
import styles from './CheckoutHeader.module.css';

const steps = [
  { number: 1, label: 'Cart Summary', to: '/cart' },
  { number: 2, label: 'Payment Method', to: '/cart/payment' },
  { number: 3, label: 'Review & Keys', to: '/cart/review' },
];

function CheckoutHeader() {
  const itemCount = useAppSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <header className={styles.header}>
      <div className={styles.titleSection}>
        <div className={styles.eyebrow}>
          <span>CHECKOUT PROTOCOL</span>
          <span className={styles.slash}>/</span>
          <span className={styles.status}>SESSION ACTIVE</span>
        </div>

        <div className={styles.titleRow}>
          <h1 className={styles.title}>Shopping Cart</h1>
          <span className={styles.itemBadge}>
            {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
          </span>
        </div>
      </div>

      <nav className={styles.stepper} aria-label='Checkout progress'>
        {steps.map((step, index) => (
          <Fragment key={step.number}>
            <NavLink
              to={step.to}
              end={index === 0}
              className={({ isActive }) =>
                `${styles.step} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.stepNumber}>{step.number}</span>
              <span className={styles.stepLabel}>{step.label}</span>
            </NavLink>

            {index !== steps.length - 1 && (
              <FiMinus className={styles.separator} aria-hidden='true' />
            )}
          </Fragment>
        ))}
      </nav>
    </header>
  );
}

export default CheckoutHeader;

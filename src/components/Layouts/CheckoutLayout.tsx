import { Outlet } from 'react-router';

import CheckoutHeader from '../CheckoutHeader/CheckoutHeader';
import styles from './CheckoutLayout.module.css';

function CheckoutLayout() {
  return (
    <div className={styles.layout}>
      <CheckoutHeader />
      <Outlet />
    </div>
  );
}

export default CheckoutLayout;

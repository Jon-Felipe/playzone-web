import { Link } from 'react-router';
import { FiBell, FiBox, FiSearch, FiShoppingCart } from 'react-icons/fi';

// extras
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      {/* Brand */}
      <Link to='/' className={styles.brand}>
        <FiBox className={styles.brandIcon} aria-hidden='true' />
        <span className={styles.brandName}>PLAYZONE</span>
      </Link>

      {/* Navigation */}
      <nav className={styles.nav}>
        <Link to='/' className={`${styles.navLink} ${styles.active}`}>
          Discover
        </Link>
        <Link to='/' className={styles.navLink}>
          Store
        </Link>
        <Link to='/' className={styles.navLink}>
          Library
        </Link>
        <Link to='/' className={styles.navLink}>
          Community
        </Link>
      </nav>

      {/* Search */}
      <div className={styles.search}>
        <FiSearch className={styles.searchIcon} aria-hidden='true' />

        <input type='text' placeholder='Search games, genres, publishers...' />
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        {/* Notifications */}
        <div className={styles.actionItem}>
          <FiBell aria-hidden='true' />
          <span className={styles.notificationDot} />
        </div>

        {/* Cart */}
        <div className={styles.actionItem}>
          <FiShoppingCart aria-hidden='true' />
          <span className={styles.cartCount}>2</span>
        </div>

        <div className={styles.divider} />

        {/* Profile */}
        <div className={styles.profile}>
          <div className={styles.avatar}>
            G
            <span className={styles.onlineDot} />
          </div>

          <span className={styles.level}>LVL 42</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

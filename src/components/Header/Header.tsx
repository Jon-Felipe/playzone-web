import { Link } from 'react-router';

// extras
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      {/* Brand */}
      <Link to='/' className={styles.brand}>
        <span className={styles.brandIcon}>◈</span>
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
        <svg viewBox='0 0 24 24' className={styles.searchIcon}>
          <circle cx='11' cy='11' r='7' />
          <path d='m16 16 5 5' />
        </svg>

        <input type='text' placeholder='Search games, genres, publishers...' />
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        {/* Notifications */}
        <div className={styles.actionItem}>
          <svg viewBox='0 0 24 24'>
            <path d='M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9' />
            <path d='M10 21h4' />
          </svg>
          <span className={styles.notificationDot} />
        </div>

        {/* Cart */}
        <div className={`${styles.actionItem} ${styles.cart}`}>
          <svg viewBox='0 0 24 24'>
            <circle cx='9' cy='21' r='1' />
            <circle cx='20' cy='21' r='1' />
            <path d='M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6' />
          </svg>
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

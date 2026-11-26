import { Link, NavLink } from 'react-router';
import { FiBell, FiBox, FiSearch, FiShoppingBag } from 'react-icons/fi';

// extras
import styles from './Header.module.css';
import { useAppSelector } from '../../app/hooks';

function getNavLinkClassName({ isActive }: { isActive: boolean }) {
  return `${styles.navLink} ${isActive ? styles.active : ''}`;
}

function Header() {
  const user = useAppSelector((state) => state.user);
  const cartItemCount = useAppSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <header className={styles.header}>
      {/* Brand */}
      <Link to='/' className={styles.brand}>
        <FiBox className={styles.brandIcon} aria-hidden='true' />
        <span className={styles.brandName}>PLAYZONE</span>
      </Link>

      {/* Navigation */}
      <nav className={styles.nav}>
        <NavLink to='/' end className={getNavLinkClassName}>
          Discover
        </NavLink>
        <NavLink to='/store' className={getNavLinkClassName}>
          Store
        </NavLink>
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
          <Link
            to='/cart'
            className={styles.cartLink}
            aria-label={`View cart with ${cartItemCount} ${
              cartItemCount === 1 ? 'item' : 'items'
            }`}
          >
            <FiShoppingBag aria-hidden='true' />
            {cartItemCount > 0 && (
              <span className={styles.cartCount}>{cartItemCount}</span>
            )}
          </Link>
        </div>

        <div className={styles.divider} />

        {user.isLoggedIn ? (
          <Link
            to='/profile'
            className={styles.profile}
            aria-label={`${user.name}'s profile`}
          >
            <div className={styles.avatar}>
              {user.name.charAt(0).toUpperCase()}
              <span className={styles.onlineDot} />
            </div>

            <span className={styles.level}>LVL 42</span>
          </Link>
        ) : (
          <Link to='/login' className={styles.loginLink}>
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;

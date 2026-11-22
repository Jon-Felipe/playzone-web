import { Link } from 'react-router';
import { FiBookmark } from 'react-icons/fi';

// extras
import styles from './HomePage.module.css';
const categories = [
  'All Games',
  'Top Sellers',
  'New & Trending',
  'Special Offers',
  'Free to Play',
  'VR Supported',
];

function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className={styles.filterBar}>
        {/* Category filters */}
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <Link
              to='/'
              key={category}
              className={`${styles.categoryButton} ${
                index === 0 ? styles.active : ''
              }`}
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className={styles.rightActions}>
          {/* Wishlist */}
          <Link to='/' className={styles.wishlist}>
            <FiBookmark aria-hidden='true' />

            <span>Wishlist</span>
            <span className={styles.wishlistCount}>14</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;

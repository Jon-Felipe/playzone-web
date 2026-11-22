import { useState } from 'react';
import { Link } from 'react-router';
import {
  FiBookmark,
  FiPlay,
  FiChevronLeft,
  FiChevronRight,
  FiThumbsUp,
  FiClock,
  FiArrowRight,
  FiShoppingBag,
  FiStar,
} from 'react-icons/fi';

const publisherSpotlight = {
  title: 'PlayStation Studios Weekend Sale',
  description:
    'Save up to 20% on select PlayStation Studios games this weekend! Limited time offer. Buy now and enjoy exclusive deals!',
  timeRemaining: '3d 12h 45m',
  dealsCount: 10,
};

// extras
import { dummyGames } from '../../data/dummy_data';
import styles from './HomePage.module.css';

function HomePage() {
  const [featuredGameIndex, setFeaturedGameIndex] = useState<number>(0);

  const featuredGame = dummyGames[featuredGameIndex];
  const highlights = dummyGames.slice(0, 5);
  const edition = featuredGame.editions[0];

  const popularGames = dummyGames.slice(0, 4);

  return (
    <div className={styles.page}>
      <section className={styles.spotlight}>
        {/* Featured Game */}
        <div
          className={styles.hero}
          style={{
            backgroundImage: `url(${featuredGame.coverImage})`,
          }}
        >
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.badges}>
              <span className={styles.featuredBadge}>MAJOR EXPANSION</span>

              <span className={styles.ratingBadge}>
                <FiThumbsUp aria-hidden='true' />
                {featuredGame.rating.label} ({featuredGame.rating.percentage}%)
              </span>

              <span className={styles.locationBadge}>
                {featuredGame.genres[1]}
              </span>
            </div>

            <div className={styles.gameInfo}>
              <h1 className={styles.title}>
                {featuredGame.title}:<span>{featuredGame.subtitle}</span>
              </h1>

              <p className={styles.description}>{featuredGame.description}</p>

              <div className={styles.genres}>
                {featuredGame.genres.slice(0, 4).map((genre) => (
                  <span key={genre}>{genre}</span>
                ))}
              </div>

              <div className={styles.actions}>
                <div className={styles.priceBox}>
                  <span className={styles.price}>
                    ${edition.price.toFixed(2)}
                  </span>
                </div>

                <Link
                  to={`/games/${featuredGame.id}`}
                  className={styles.exploreButton}
                >
                  <FiPlay aria-hidden='true' />
                  Explore Game
                </Link>

                <button
                  type='button'
                  className={styles.bookmarkButton}
                  aria-label='Add to wishlist'
                >
                  <FiBookmark aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Spotlight Highlights */}
        <aside className={styles.highlights}>
          <div className={styles.highlightsHeader}>
            <h2>SPOTLIGHT HIGHLIGHTS</h2>

            <div className={styles.pagination}>
              <FiChevronLeft aria-hidden='true' />
              <span
                aria-label={`Featured game ${featuredGameIndex + 1} of ${highlights.length}`}
              >
                1 / 5
              </span>
              <FiChevronRight aria-hidden='true' />
            </div>
          </div>

          <div className={styles.highlightList}>
            {highlights.map((game, index) => {
              const gameEdition = game.editions[0];

              return (
                <button
                  type='button'
                  key={game.id}
                  className={`${styles.highlightItem} ${
                    index === featuredGameIndex ? styles.active : ''
                  }`}
                  aria-label={`Highlight for ${game.title}`}
                  aria-pressed={index === featuredGameIndex}
                  onClick={() => setFeaturedGameIndex(index)}
                >
                  <img
                    src={game.coverImage}
                    alt={`Highlight for ${game.title}`}
                    className={styles.highlightImage}
                  />

                  <div className={styles.highlightInfo}>
                    <h3>{game.title}</h3>

                    <div className={styles.highlightMeta}>
                      <span className={styles.rating}>
                        {game.rating.percentage}%
                      </span>

                      <span className={styles.highlightPrice}>
                        ${gameEdition.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {index === featuredGameIndex && (
                    <span className={styles.activeIndicator} />
                  )}
                </button>
              );
            })}
          </div>
        </aside>
      </section>

      <section className={styles.publisherSpotlight}>
        <div className={styles.publisherContent}>
          <div className={styles.topInfo}>
            <span className={styles.publisherBadge}>PUBLISHER SPOTLIGHT</span>

            <span className={styles.timer}>
              <FiClock aria-hidden='true' />
              {publisherSpotlight.timeRemaining}
            </span>
          </div>

          <h2 className={styles.publisherTitle}>{publisherSpotlight.title}</h2>

          <p className={styles.publisherDescription}>
            {publisherSpotlight.description}
          </p>
        </div>

        <div className={styles.publisherActions}>
          <Link to='/' className={styles.dealsButton}>
            View All {publisherSpotlight.dealsCount} Deals
          </Link>

          <Link to='/' className={styles.franchiseButton}>
            Browse Franchise
          </Link>
        </div>
      </section>

      <section className={styles.popularSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow}>TOP CHARTS</span>
            <h2 className={styles.sectionTitle}>Popular This Week</h2>
          </div>

          <Link to='/' className={styles.viewAll}>
            See All Top Sellers
            <FiArrowRight aria-hidden='true' />
          </Link>
        </div>

        <div className={styles.gamesGrid}>
          {popularGames.map((game) => {
            const standardEdition = game.editions.find(
              (edition) => edition.id === 'standard',
            );

            const price = standardEdition?.price ?? 0;

            const discount = standardEdition?.discountPercentage ?? 0;

            const originalPrice = standardEdition?.originalPrice ?? price;

            return (
              <article className={styles.gameCard} key={game.id}>
                <Link to={`/games/${game.id}`} className={styles.imageLink}>
                  <div className={styles.imageContainer}>
                    <img
                      src={game.coverImage}
                      alt={game.title}
                      className={styles.gameImage}
                      loading='lazy'
                    />

                    <div className={styles.imageOverlay} />

                    <span className={styles.platformBadge}>
                      <span className={styles.platformDot} />
                      PC Verified
                    </span>

                    {discount > 0 && (
                      <span className={styles.discountBadge}>-{discount}%</span>
                    )}
                  </div>
                </Link>

                <div className={styles.cardContent}>
                  <div className={styles.gameMeta}>
                    <span className={styles.cardGenres}>
                      {game.genres.slice(0, 3).join(' • ')}
                    </span>

                    <span className={styles.cardRating}>
                      <FiStar aria-hidden='true' />
                      {game.rating.percentage}%
                    </span>
                  </div>

                  <Link to={`/games/${game.id}`} className={styles.gameTitle}>
                    {game.title}
                  </Link>

                  <div className={styles.cardFooter}>
                    <div className={styles.priceContainer}>
                      {discount > 0 && (
                        <span className={styles.originalPrice}>
                          ${originalPrice.toFixed(2)}
                        </span>
                      )}

                      <span className={styles.cardPrice}>
                        ${price.toFixed(2)}
                      </span>
                    </div>

                    <Link
                      to={`/games/${game.id}`}
                      className={styles.buyButton}
                      aria-label={`View ${game.title}`}
                    >
                      <FiShoppingBag aria-hidden='true' />
                      <span>Buy</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default HomePage;

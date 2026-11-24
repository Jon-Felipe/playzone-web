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
  FiShoppingCart,
} from 'react-icons/fi';

// components
import GameCollection from '../../components/GameCollection/GameCollection';

// extras
import { dummyGames } from '../../extras/dummy_data';
import styles from './HomePage.module.css';

const publisherSpotlight = {
  title: 'PlayStation Studios Weekend Sale',
  description:
    'Save up to 20% on select PlayStation Studios games this weekend! Limited time offer. Buy now and enjoy exclusive deals!',
  timeRemaining: '3d 12h 45m',
  dealsCount: 10,
};

const tabs = ['Top Sellers', 'New Releases', 'Upcoming', 'Indie Gems'];

function HomePage() {
  const [featuredGameIndex, setFeaturedGameIndex] = useState<number>(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

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

        <GameCollection games={popularGames} view='grid' />
      </section>

      <section className={styles.trendingSection}>
        <div className={styles.trendingHeader}>
          <div>
            <span className={styles.trendingEyebrow}>CURATED STREAMS</span>

            <h2 className={styles.trendingTitle}>
              Recently Released &amp; Trending
            </h2>
          </div>

          <div className={styles.tabs}>
            {tabs.map((tab, index) => (
              <button
                type='button'
                key={tab}
                className={`${styles.tab} ${
                  index === activeTabIndex ? styles.activeTab : ''
                }`}
                aria-pressed={index === activeTabIndex}
                onClick={() => setActiveTabIndex(index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.trendingGrid}>
          {popularGames.map((game, index) => {
            const edition = game.editions.find(
              (item) => item.id === 'standard',
            );

            const price = edition?.price ?? 0;

            return (
              <article className={styles.trendingCard} key={game.id}>
                <Link
                  to={`/games/${game.id}`}
                  className={styles.trendingImageLink}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={game.coverImage}
                      alt={game.title}
                      className={styles.trendingImage}
                    />

                    <div className={styles.trendingImageOverlay} />

                    <span className={styles.imageBadge}>
                      {['Top Rated', 'Trending', 'Popular', 'Featured'][index]}
                    </span>
                  </div>
                </Link>

                <div className={styles.trendingGameInfo}>
                  <Link to={`/games/${game.id}`} className={styles.gameName}>
                    {game.title}
                  </Link>

                  <p className={styles.developer}>
                    {game.developer} • {game.genres.slice(0, 2).join(' • ')}
                  </p>

                  <div className={styles.tags}>
                    {game.genres.slice(0, 2).map((genre) => (
                      <span className={styles.tag} key={genre}>
                        {genre}
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardBottom}>
                    <span className={styles.trendingPrice}>
                      ${price.toFixed(2)}
                    </span>

                    <button
                      type='button'
                      className={styles.cartButton}
                      aria-label={`Add ${game.title} to cart`}
                    >
                      <FiShoppingCart aria-hidden='true' />
                      Add to Cart
                    </button>
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

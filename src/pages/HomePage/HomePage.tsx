import { useState } from 'react';
import { Link } from 'react-router';
import {
  FiBookmark,
  FiPlay,
  FiChevronLeft,
  FiChevronRight,
  FiThumbsUp,
} from 'react-icons/fi';

// extras
import { dummyGames } from '../../data/dummy_data';
import styles from './HomePage.module.css';

function HomePage() {
  const [featuredGameIndex, setFeaturedGameIndex] = useState<number>(0);

  const featuredGame = dummyGames[featuredGameIndex];
  const highlights = dummyGames.slice(0, 5);
  const edition = featuredGame.editions[0];

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
    </div>
  );
}

export default HomePage;

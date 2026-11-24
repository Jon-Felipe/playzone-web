import { Link } from 'react-router';
import { FiCloud, FiMonitor, FiShoppingBag, FiThumbsUp } from 'react-icons/fi';

import type { Game } from '../../types/game';
import styles from './GamesGrid.module.css';

interface GamesGridProps {
  games: Game[];
  className?: string;
}

const releaseDateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

function GamesGrid({ games, className }: GamesGridProps) {
  return (
    <div className={`${styles.gamesGrid} ${className ?? ''}`}>
      {games.map((game) => {
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

                <div className={styles.imageBadges}>
                  {discount > 0 && (
                    <span className={styles.discountBadge}>-{discount}%</span>
                  )}

                  {game.editions.length > 1 && (
                    <span className={styles.editionBadge}>
                      Standard Edition
                    </span>
                  )}
                </div>

                <div className={styles.platformIcons} aria-label='PC and cloud'>
                  <span className={styles.platformIcon}>
                    <FiMonitor aria-hidden='true' />
                  </span>
                  <span className={styles.platformIcon}>
                    <FiCloud aria-hidden='true' />
                  </span>
                </div>
              </div>
            </Link>

            <div className={styles.cardContent}>
              <div className={styles.gameMeta}>
                <span className={styles.developer}>{game.developer}</span>
                <span className={styles.releaseDate}>
                  {releaseDateFormatter.format(
                    new Date(`${game.releaseDate}T00:00:00Z`),
                  )}
                </span>
              </div>

              <Link to={`/games/${game.id}`} className={styles.gameTitle}>
                {game.title}
              </Link>

              <div className={styles.genreTags}>
                {game.genres.slice(0, 3).map((genre) => (
                  <span className={styles.genreTag} key={genre}>
                    {genre}
                  </span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.priceAndRating}>
                  <div className={styles.cardRating}>
                    <FiThumbsUp aria-hidden='true' />
                    <span>
                      {game.rating.label} ({game.rating.percentage}%)
                    </span>
                  </div>

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
                </div>

                <Link
                  to={`/games/${game.id}`}
                  className={styles.buyButton}
                  aria-label={`Buy ${game.title}`}
                >
                  <FiShoppingBag aria-hidden='true' />
                  <span>Add To Cart</span>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default GamesGrid;

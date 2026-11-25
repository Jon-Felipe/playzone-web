import { Link } from 'react-router';
import {
  FiCloud,
  FiHeart,
  FiMonitor,
  FiShoppingBag,
  FiThumbsUp,
} from 'react-icons/fi';

// extras
import type { Game } from '../../types/game';
import { formatReleaseDate, getGamePricing } from '../../extras/helpers';
import useAddToCart from '../../hooks/useAddToCart';
import styles from './GameCard.module.css';

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  const addToCart = useAddToCart();
  const { price, discount, originalPrice } = getGamePricing(game);

  return (
    <article className={styles.gameCard}>
      <div className={styles.imageContainer}>
        <Link to={`/games/${game.id}`} className={styles.imageLink}>
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
              <span className={styles.editionBadge}>Standard Edition</span>
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
        </Link>

        <button
          type='button'
          className={styles.wishlistButton}
          aria-label={`Add ${game.title} to wishlist`}
        >
          <FiHeart aria-hidden='true' />
        </button>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.gameMeta}>
          <span className={styles.developer}>{game.developer}</span>
          <span className={styles.releaseDate}>
            {formatReleaseDate(game.releaseDate)}
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

              <span className={styles.cardPrice}>${price.toFixed(2)}</span>
            </div>
          </div>

          <button
            type='button'
            className={styles.buyButton}
            aria-label={`Add ${game.title} to cart`}
            onClick={() => addToCart(game)}
          >
            <FiShoppingBag aria-hidden='true' />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default GameCard;

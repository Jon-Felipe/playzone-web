import { Link } from 'react-router';
import { FiCloud, FiMonitor, FiShoppingBag, FiThumbsUp } from 'react-icons/fi';

// extras
import type { Game } from '../../types/game';
import { formatReleaseDate, getGamePricing } from '../../extras/helpers';
import { useAppDispatch } from '../../app/hooks';
import { addItem } from '../../features/cart/cartSlice';
import styles from './GameListCard.module.css';

interface GameListCardProps {
  game: Game;
}

function GameListCard({ game }: GameListCardProps) {
  const dispatch = useAppDispatch();
  const { editionId, price, discount, originalPrice } = getGamePricing(game);

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: game.id,
        title: game.title,
        editionId,
        quantity: 1,
        price,
      }),
    );
  };

  return (
    <article className={styles.gameListCard}>
      <Link to={`/games/${game.id}`} className={styles.imageLink}>
        <img
          src={game.coverImage}
          alt={game.title}
          className={styles.gameImage}
          loading='lazy'
        />
        <div className={styles.imageOverlay} />
        {discount > 0 && (
          <span className={styles.discountBadge}>-{discount}%</span>
        )}
      </Link>

      <div className={styles.gameDetails}>
        <div className={styles.gameMeta}>
          <span>{game.developer}</span>
          <span>{formatReleaseDate(game.releaseDate)}</span>
        </div>

        <Link to={`/games/${game.id}`} className={styles.gameTitle}>
          {game.title}
        </Link>

        <p className={styles.description}>{game.description}</p>

        <div className={styles.footerDetails}>
          <div className={styles.genreTags}>
            {game.genres.slice(0, 3).map((genre) => (
              <span className={styles.genreTag} key={genre}>
                {genre}
              </span>
            ))}
          </div>

          <div className={styles.platformIcons} aria-label='PC and cloud'>
            <FiMonitor aria-hidden='true' />
            <FiCloud aria-hidden='true' />
          </div>
        </div>
      </div>

      <div className={styles.purchase}>
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

        <button
          type='button'
          className={styles.buyButton}
          aria-label={`Add ${game.title} to cart`}
          onClick={handleAddToCart}
        >
          <FiShoppingBag aria-hidden='true' />
          Add To Cart
        </button>
      </div>
    </article>
  );
}

export default GameListCard;

import type { Game } from '../../types/game';
import GameCard from '../GameCard/GameCard';
import GameListCard from '../GameListCard/GameListCard';
import styles from './GameCollection.module.css';

export type GameCollectionView = 'grid' | 'list';

interface GameCollectionProps {
  games: Game[];
  view?: GameCollectionView;
  className?: string;
}

function GameCollection({
  games,
  view = 'grid',
  className,
}: GameCollectionProps) {
  const Card = view === 'grid' ? GameCard : GameListCard;

  return (
    <div
      className={`${styles.collection} ${styles[view]} ${className ?? ''}`}
      data-view={view}
    >
      {games.map((game) => (
        <Card game={game} key={game.id} />
      ))}
    </div>
  );
}

export default GameCollection;

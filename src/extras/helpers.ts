import type { Game } from '../types/game';

const releaseDateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export function getGamePricing(game: Game) {
  const standardEdition = game.editions.find(
    (edition) => edition.id === 'standard',
  );

  const price = standardEdition?.price ?? 0;

  return {
    price,
    discount: standardEdition?.discountPercentage ?? 0,
    originalPrice: standardEdition?.originalPrice ?? price,
  };
}

export function formatReleaseDate(releaseDate: string) {
  return releaseDateFormatter.format(new Date(`${releaseDate}T00:00:00Z`));
}

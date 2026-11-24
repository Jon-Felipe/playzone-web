import { toast } from 'react-toastify';

import { useAppDispatch } from '../app/hooks';
import type { Game } from '../types/game';
import { getGamePricing } from '../extras/helpers';
import { addItem } from '../features/cart/cartSlice';

function useAddToCart() {
  const dispatch = useAppDispatch();

  return (game: Game) => {
    const { editionId, price } = getGamePricing(game);

    dispatch(
      addItem({
        id: game.id,
        title: game.title,
        editionId,
        quantity: 1,
        price,
      }),
    );

    toast.success(`${game.title} added to cart`);
  };
}

export default useAddToCart;

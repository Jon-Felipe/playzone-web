import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// extras
import type { Game, GameEdition } from '../../types/game';

export interface CartItem {
  id: Game['id'];
  title: Game['title'];
  editionId: GameEdition['id'];
  quantity: number;
  price: GameEdition['price'];
}

type CartItemId = Pick<CartItem, 'id' | 'editionId'>;

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.editionId === action.payload.editionId,
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        return;
      }

      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<CartItemId>) => {
      state.items = state.items.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.editionId !== action.payload.editionId,
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

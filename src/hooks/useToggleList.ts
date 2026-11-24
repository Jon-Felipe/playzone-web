import { useState } from 'react';

function useToggleList<T>(initialItems: T[] = []) {
  const [items, setItems] = useState<T[]>(initialItems);

  const toggleItem = (item: T) => {
    setItems((current) =>
      current.includes(item)
        ? current.filter((currentItem) => currentItem !== item)
        : [...current, item],
    );
  };

  const clearItems = () => setItems([]);

  return { items, toggleItem, clearItems };
}

export default useToggleList;

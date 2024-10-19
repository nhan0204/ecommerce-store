import { Product } from "@/type";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  items: Product[];
  getItem: (id: string) => Product | undefined;
  updateItem: (id: string, updateCart: number) => void;
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      getItem: (id: string): Product | undefined => {
        const item = get().items.find((item) => item.id === id);

        if (!item) {
          toast("Item has not added to cart");
          return undefined;
        }

        return item;
      },
      updateItem: (id: string, updateCart: number) => {
        const item = get().items.find((item) => item.id === id);

        if (!item) {
          toast("Item has not added to cart");
          return undefined;
        }

        set({ items: get().items.map((item) => 
          item.id === id ? {...item, cart: updateCart} : item
        )});
      },
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          if ((existingItem.cart! + 1) > existingItem.quantity ) {
            return toast(
              `Sorry we only have  ${existingItem.quantity} ${existingItem.name} in stock`
            );
          }

          set({
            items: currentItems.map((item) =>
              item.id === data.id ? { ...item, cart: item.cart! + 1 } : item
            ),
          });

          return toast.success(`One more ${data.name} has added to cart`);
        }

        set({ items: [...currentItems, { ...data, cart: 1 }] });
        toast.success(`${data.name} added to cart`);
      },
      removeItem: (id: string) => {
        const removedItem = get().items.find((item) => item.id === id);

        if (!removedItem) {
          return toast("Item has not added to cart");
        }

        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success(`${removedItem.name} has removed from cart`);
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

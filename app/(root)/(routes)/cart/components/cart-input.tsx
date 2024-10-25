"use client"

import { Input } from '@/components/ui/input';
import useCart from '@/hooks/use-cart';
import { Product } from '@/type';
import React, { ChangeEvent } from 'react' 

interface CartInputProps {
  data: Product;
} 

const CartInput: React.FC<CartInputProps> = ({ data }) => {
  const getItem = useCart((state) => state.getItem);
  const updateItem = useCart((state) => state.updateItem);
  const product = getItem(data.id.toString());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedCart = parseInt(e.target.value);

    if (
      product &&
      !isNaN(updatedCart) &&
      updatedCart > 0 &&
      updatedCart <= product.quantity
    ) {
      updateItem(data.id.toString(), updatedCart);
    }
  };
    return (
      <Input
        type="number"
        value={product?.cart}
        onChange={handleChange}
      />
    );
};

export default CartInput;
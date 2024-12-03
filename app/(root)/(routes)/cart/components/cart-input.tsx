"use client"

import { Input } from '@/components/ui/input';
import useCart from '@/hooks/use-cart';
import { Product } from '@/type';
import React, { ChangeEvent } from 'react';

interface CartInputProps {
  data: Product;
}

const CartInput: React.FC<CartInputProps> = ({ data }) => {
  const getItem = useCart((state) => state.getItem);
  const updateItem = useCart((state) => state.updateItem);
  const product = getItem(data.id.toString());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedCart = parseInt(e.target.value);
    const item = data.id.toString();

    if (product && updatedCart > product.quantity)
      updateItem(item, product?.quantity)
    else if (updatedCart <= 0)
      updateItem(item, 1)
    else
      updateItem(item, updatedCart);
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
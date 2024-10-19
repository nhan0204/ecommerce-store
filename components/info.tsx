"use client";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/type";
import { ShoppingCart } from "lucide-react";
import React, { MouseEventHandler } from "react";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col ">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data.size.name}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Stock:</h3>
          <div>{data.quantity}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border boder-gray-600"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>

      <div className="mt-8 flex items-center gap-x-3 ">
        <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
          Add to cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;

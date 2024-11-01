"use client";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Summary: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const searchParams = useSearchParams();

  let totalPrice = 0;
  items.forEach((item) => (totalPrice += item.cart! * Number(item.price)));

  const onCheckOut = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_STORE_ID}/checkout`,
      {
        cart: items.map((item) => ({
          id: item.id,
          cart: item.cart,
        })),
      }
    );

    window.location = response.data.url;
  };

  useEffect(() => {
    setIsMounted(true);

    if (searchParams.get("success")) {
        toast.success("Payment completed.");
    }

    if (searchParams.get("canceled")) {
      toast.error("Payment canceled.");
    }
  }, [searchParams, removeAll]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:ml-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

      <div className="mt-6 space-y-4 border-t border-gray-200 pt-4">
        {items.map((item) => (
          <div key={item.id.toString()} className="flex items-center justify-between">
            <div className="flex gap-x-2">
              <div className="text-base font-medium text-gray-900">
                {item.name}
              </div>
              <span>(x{item.cart})</span>
            </div>
            <Currency value={item.cart! * Number(item.price)} />
          </div>
        ))}
        <div className="flex items-center justify-between text-xl font-extrabold">
          <div className=" text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button disabled={items.length === 0} onClick={onCheckOut} className="w-full mt-6">Checkout</Button>
    </div>
  );
};

export default Summary;

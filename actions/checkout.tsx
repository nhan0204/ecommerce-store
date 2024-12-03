import { Product } from "@/type";
import axios from "axios";
import toast from "react-hot-toast";

const URL = `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_STORE_ID}/checkout`;

const checkout = async (items: Product[]) => {
  try {
    console.log(URL);
    const res = await axios.post(
      URL,
      {
        cart: items.map((item) => ({
          id: item.id,
          cart: item.cart,
        }))
      }
    )

    return res;
  } catch (error) {
    toast.error("Failed to checkout");
    throw error;
  }
}

export default checkout;
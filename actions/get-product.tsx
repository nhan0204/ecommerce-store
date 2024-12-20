import { Product as ProductType } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/products`;

const getProduct = async (id: string): Promise<ProductType> => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: "GET",
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching Product", error);
    throw error;
  }
};

export default getProduct;

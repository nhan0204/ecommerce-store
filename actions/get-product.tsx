import { Product as ProductType } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<ProductType> => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: "GET",
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching Product", error);
    throw error;
  }
};

export default getProduct;

import { Category as CategoryType } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/categories`;

const getCategory = async (id: string): Promise<CategoryType> => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: "GET",
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching category", error);
    throw error;
  }
};

export default getCategory;

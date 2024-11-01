import { Category } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/categories`;
const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL, {
      method: "GET",
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching categories", error);
    return [];
  }
};

export default getCategories;

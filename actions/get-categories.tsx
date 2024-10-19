import { Category } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL, {
      method: "GET",
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching categories", error);
    return [];
  }
};

export default getCategories;

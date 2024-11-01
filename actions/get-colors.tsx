import { Color } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/colors`;
const getColors = async (): Promise<Color[]> => {
  try {
    const res = await fetch(URL, {
      method: "GET",
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching colors", error);
    return [];
  }
};

export default getColors;

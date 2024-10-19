import { Color } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
const getColors = async (): Promise<Color[]> => {
  try {
    const res = await fetch(URL, {
      method: "GET",
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching colors", error);
    return [];
  }
};

export default getColors;

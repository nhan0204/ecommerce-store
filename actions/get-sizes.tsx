import { Size } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/sizes`;
const getSizes = async (): Promise<Size[]> => {
  try {
    const res = await fetch(URL, {
      method: "GET",
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching sizes", error);
    return [];
  }
};

export default getSizes;

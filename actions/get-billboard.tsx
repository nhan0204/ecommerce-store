import { Billboard as BillboardType } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
const getBillboard = async (id: string): Promise<BillboardType> => {
  try {
    console.log(URL);
    const res = await fetch(`${URL}/${id}`, {
      method: "GET",
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching Billboard", error);
    throw error;
  }
};

export default getBillboard;

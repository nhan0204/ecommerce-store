import { Billboard as BillboardType } from "@/type";
import qs from "query-string";

interface Query {
  isHomePage?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/billboards`;

const getBillboard = async (query: Query): Promise<BillboardType[]> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        isHomePage: query.isHomePage,
      },
    });

    const res = await fetch(url, {
      method: "GET",
    });

    return res.json();
  } catch (error) {
    console.error("Error fetching Billboard", error);
    throw error;
  }
};

export default getBillboard;

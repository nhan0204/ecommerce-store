import { Product } from "@/type";
import qs from "query-string";

interface Query {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
  isArchived?: boolean;
  isHorizontal?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/products`;

const getProducts = async (query: Query): Promise<Product[]> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        colorId: query.colorId,
        sizeId: query.sizeId,
        categoryId: query.categoryId,
        isFeatured: query.isFeatured,
        isArchived: query.isArchived,
        isHorizontal: query.isHorizontal,
      },
    });

    const res = await fetch(url, {
      method: "GET",
    });

    return res.json();
  } catch (error) {
    console.error("Failed to fetch produts data");
    throw error;
  }
};

export default getProducts;

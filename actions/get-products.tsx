import { Product } from "@/type";
import qs from "query-string";

interface Query {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
  isArchived?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

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
      },
    });

    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.error("Failed to fetch produts data");
    throw error;
  }
};

export default getProducts;

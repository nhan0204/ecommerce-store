import { Store } from "@/type";

const URL = `${process.env.STORE_GET_PUBLIC_API_URL}`;

const getStore = async(): Promise<Store> => {
  try {
    const res = await fetch(URL);
    return res.json();
  } catch(error) {
    console.error('Failed to get store');
    throw error;
  }
}

export default getStore;
import dotenv from "dotenv";
import qs from "query-string";
import fs from "fs/promises";
import path from "path";

dotenv.config();

const URL = `${process.env.NEXT_PUBLIC_API_URL}stores`;
const TOKEN = process.env.VERCEL_API_TOKEN;

const VERCEL_URL = `${process.env.VERCEL_PROJECT_API_URL}${process.env.VERCEL_PROJECT_ID}/env/${process.env.VERCEL_ENV_KEY}`;

const getStoreId = async () => {
  try {
    console.log(URL);

    const url = qs.stringifyUrl({
      url: URL,
      query: {
        name: "Carmar",
      },
    });

    console.log(url);

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const data = await res.json();
    const value = data.id;

    console.log(VERCEL_URL);

    const patch = await fetch(VERCEL_URL, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: value,
        comment: "Updated environment variable for testing",
        target: ["production", "preview"],
      }),
    });

    console.log('Status: ',patch.status);

    const envPath = path.join(process.cwd(), '.env');
    const envContent = `\nNEXT_PUBLIC_STORE_ID=${data.id}`;
    await fs.appendFile(envPath, envContent);

    return patch.status || "No store found!";
  } catch (error) {
    console.error("Error fetching StoreId: ", error);
  }
};

getStoreId();

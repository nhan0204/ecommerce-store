import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";

dotenv.config();

const TOKEN = process.env.VERCEL_API_TOKEN;

const VERCEL_URL = `${process.env.VERCEL_PROJECT_API_URL}${process.env.VERCEL_PROJECT_ID}/env/${process.env.VERCEL_ENV_KEY}`;

const updateStoreId = async (storeId) => {
  try {
    const patch = await fetch(VERCEL_URL, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: storeId,
        comment: "Updated environment variable for testing",
        target: ["production", "preview"],
      }),
    });

    console.log("Status: ", patch.status);

    const envPath = path.join(process.cwd(), ".env");
    const envContent = `\nNEXT_PUBLIC_STORE_ID=${data.id}`;
    await fs.appendFile(envPath, envContent);

    return patch.status || "No store found!";
  } catch (error) {
    console.error("Error fetching StoreId: ", error);
  }
};

const handleWebhookRequest = async (req, res) => {
  const { storeId } = req.body;

  if (!storeId) {
    console.error("storeId is required");
    return res.status(400).json({ error: "storeId is required" });
  }

  const status = await updateStoreId(storeId);
  return res.status(200).json({ message: status });
};

handleWebhookRequest();

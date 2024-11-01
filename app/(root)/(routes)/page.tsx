import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import ProductList from "@/components/ui/product-list";
import { Product } from "@/type";

export const revalidate = 0;

const HomePage = async () => {
  await getBillboard(
    "23feb2bc-550e-4b5c-b0db-dfeff1f720ef"
  );

  const products: Product[] = await getProducts({
    isFeatured: true,
    isArchived: false,
  });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {/* <Billboard data={billboard} /> */}
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mb-10">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/ui/product-list";
import { Billboard as BillboardType, Product } from "@/type";

export const revalidate = 0;

const HomePage = async () => {
  const billboard: BillboardType = await getBillboard(
    "3d5fb77e-e3d8-46e0-9918-57a11f32242c"
  );

  const products: Product[] = await getProducts({
    isFeatured: true,
    isArchived: false,
  });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mb-10">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;

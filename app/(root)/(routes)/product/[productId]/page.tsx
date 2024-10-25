import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Container from "@/components/ui/container";
import ProductList from "@/components/ui/product-list";
import { Product } from "@/type";
import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product: Product = await getProduct(params.productId);

  const suggestedProducts: Product[] = await getProducts({
    categoryId: product.category.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-8">
            {/* Gallery */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 md:mt-0">
              <Info data={product}/>
            </div>
          </div>

          <hr className="my-10" />
          <ProductList title="Related Iterms" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;

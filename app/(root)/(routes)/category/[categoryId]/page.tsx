"use server"
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import NoResult from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";
import React from "react";
import Filter from "./components/filter";
import MobileFilter from "./components/mobile-filter";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {

  const [
    products,
    category,
    sizes,
    colors,
  ] = await Promise.all([
    getProducts({
      categoryId: params.categoryId,
      colorId: searchParams.colorId,
      sizeId: searchParams.sizeId,
      isArchived: false,
    }),
    getCategory(params.categoryId),
    getSizes(),
    getColors()
  ])

  return (
    <div className="bg-white">
      <Container>
        {category && (
          <Billboard
            data={category.billboard}
            dark={category.billboard.isDarkLabel}
            hasLabel={category.billboard.hasLabel}
          />
        )}
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          {sizes && colors && <MobileFilter sizes={sizes} colors={colors} />}
          {/* Desktop filters */}
          {sizes && colors && (
            <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
              <div className="hidden flex-col lg:block">
                <Filter name="Sizes" filterKey="sizeId" data={sizes} />
                <Filter name="Colors" filterKey="colorId" data={colors} />
              </div>

              <div className="mt-6 lg:col-span-4 lg:mt-0">
                {products.length === 0 && <NoResult />}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((item) => (
                    <ProductCard key={item.id.toString()} data={item} isHorizontal={item.isHorizontal} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;

import { AddToBag, CheckoutNow, ImageGallery } from "@/app/Components";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { SlugProps, fullProduct } from "@/interface";
import { Star, Truck } from "lucide-react";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
          _id,
            images,
            price,
            name,
            description,
            "slug": slug.current,
            "categoryName": category->name,
            price_id
        }`;

  const data = await client.fetch(query);

  return data;
}
import React from "react";

export const dynamic = "force-dynamic";

const ProductPge = async ({ params }: SlugProps) => {
  const data: fullProduct = await getData(params.slug);

  return (
    <section className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="max-container padding-container  ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 ">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-1">
              <span className="text-base text-gray-500 inline-block">
                {data.categoryName}
              </span>
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
                {data.name}
              </h2>
            </div>

            <div className="flexStart gap-x-4 md:mb-10 mb-5">
              <Button className=" flexCenter gap-x-3 rounded-full">
                <span>4.5</span>
                <Star width={20} hanging={20} />
              </Button>
              <span className="text-gray-500">60 Ratings</span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="font-bold text-xl md:text-2xl text-gray-800">
                  ${data.price}
                </span>
                <span className="text-sm mb-0.5 text-red-500 line-through">
                  {" "}
                  ${data.price + 50}{" "}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="mb-4 flexStart gap-x-3 text-gray-500">
              <Truck />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            <div className=" flex gap-x-3">
              <AddToBag
                name={data.name}
                image={data.images[0]}
                price={data.price}
                price_id={data.price_id}
                description={data.description}
                currency="USD"
              />

              <CheckoutNow
                name={data.name}
                image={data.images[0]}
                price={data.price}
                price_id={data.price_id}
                description={data.description}
                currency="USD"
              />
            </div>
            <div>
              <p className="mt-12 text-base text-gray-500 tracking-wide">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPge;

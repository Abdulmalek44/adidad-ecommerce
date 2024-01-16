import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../lib/sanity";
import { simplifiedProduct } from "@/interface";

async function getData() {
  const query = `*[_type == "product" && Priority == true][0..9] | order(_createdAt desc) {
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

const Newest = async () => {
  const data: simplifiedProduct[] = await getData();

  return (
    <section className="bg-white">
      <div className="max-container padding-container py-10 sm:pb-6 ">
        <div className="flexBetween mb-6">
          <h3 className="text-black font-bold sm:text-2xl text-[1.4rem] ">
            Our Newest Products
          </h3>
          <Link
            href="/all"
            className="flexCenter  gap-2  transition duration-100 hover:text-gray-500"
          >
            {" "}
            See All
            <span>
              {" "}
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 xl:gap-x-8">
          {data &&
            data.map((item) => (
              <div key={item._id} className="relative group">
                <div className="aspect-square  w-full overflow-hidden group-hover:opacity-75 lg:h-80">
                  <Image
                    src={item.imageUrl}
                    alt="NoImage"
                    className=" object-cover object-center w-full h-full"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-800 font-semibold">
                      <Link href={`/product/${item.slug}`}>{item.name}</Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.categoryName}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Newest;

import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import { HeroLinks } from "@/constants";

async function getData() {
  const query = "*[_type == 'heroImage'][1]";

  const data = await client.fetch(query);

  return data;
}

const Hero = async () => {
  const data = await getData();
  return (
    <section className="padding-container max-container sm:pb-6">
      <div className="flex flex-wrap  justify-between mb-8 md:mb-16">
        <div className="flex justify-center flex-col w-full lg:w-1/3 sm:mb-12 ">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 md:mb-8 pt-4 ">
            {" "}
            Top Fashion for a top price!
          </h1>
          <p className="text-gray-500 max-w-md leading-relaxed sm:text-lg  ">
            We sell the most exlusive and high quality products for you. We are
            the best so come and shop with us.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 mt-10 lg:w-2/3">
          <div className="relative left-12 top-12   z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image2).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
      <div className="flexBetween flex-col  gap-8 md:flex-row ">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          {HeroLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="flexCenter w-1/3 text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              {link.name}{" "}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

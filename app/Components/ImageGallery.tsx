"use client";

import { ImageGaller, ImageGalleryProps } from "@/interface";
import Image from "next/image";
import { useState } from "react";
import { urlFor } from "../lib/sanity";

const bigImageStyle =
  "border-gray-300 border-2 overflow-hidden rounded-lg bg-gray-100";

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleChangeImage = (images: ImageGaller): void => {
    setBigImage(images);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-4">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col ">
        {images.map((image: ImageGaller, index: number) => (
          <div
            key={index}
            className={
              bigImage === image
                ? bigImageStyle
                : "overflow-hidden rounded-lg bg-gray-100"
            }
          >
            <Image
              src={urlFor(image).url()}
              alt="smaill_product_image"
              width={200}
              height={200}
              className="w-full h-full object-cover object-center cursor-pointer"
              onClick={() => handleChangeImage(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-3">
        {" "}
        <Image
          src={urlFor(bigImage).url()}
          alt="big_product_image"
          width={500}
          height={500}
          className="w-full h-full object-cover object-center"
        />
        <span className=" absolute top-0 left-0 text-white bg-red-500 px-3 py-1.5 ppercase tracking-wider rounded-br-lg text-sm">
          SALE
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;

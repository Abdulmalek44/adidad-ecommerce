"use client";

import Image from "next/image";
import PhoneimageM from "../../public/phone-section-mb.avif";
import PhoneimagePC from "../../public/phone-section-pc.avif";
import AdidasApp from "../../public/adidas-app.avif";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Phone = () => {
  const [phoneImage, setPhoneImage] = useState(PhoneimagePC);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 770;
      setPhoneImage(isMobile ? PhoneimageM : PhoneimagePC);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="padding-container max-container md:mt-10 bg-white">
      <div className="flexBetween sm:flex-row flex-col relative">
        <Image
          src={phoneImage}
          alt="Phone_image"
          className=" w-full h-full object-cover "
          width={10000}
          height={10000}
        />

        <div className="absolute max-md:right-auto max-md:bottom-0 md:right-0 md:bottom-1/5 flex gap-5 flex-col">
          <Image
            alt="card"
            src={AdidasApp}
            width={200}
            height={200}
            className=" cursor-pointer hidden sm:flex"
          />
          <h1 className="text-2xl md:text-5xl max-w-60 font-extrabold ">
            DISCOVER MORE ADIDAS.
          </h1>
          <p className="text-gray-500 max-w-96">
            The adidas app puts you closer to the action with instant access to
            sneaker drops and the sports, clothes and gear that fit your style.
          </p>
          <Button className=" text-black " variant={"outline"}>
            DOWNLOAD NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Phone;

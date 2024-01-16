import Image from "next/image";
import React from "react";
import logo from "../../public/icon.svg";
import { FooterInstallApp, FooterLinks, FooterSocials } from "@/constants";
import Link from "next/link";
import CardsImage from "../../public/cards.png";
import AdidasApp from "../../public/adidas-app.avif";

const Footer = () => {
  return (
    <section className="bg-white ">
      <footer className="max-container padding-container md:py-8  border-t">
        <div className="flex  flex-col md:flex-row gap-20 flex-wrap pt-4 ">
          <div className="flex gap-y-3 flex-col">
            <Image src={logo} width={60} height={60} alt="Logo" />
            <p className="text-gray-600 sm:max-w-xs leading-7">
              Get watch ready for the new term at your nearest Rolex store. Find
              Your perfect Watch In Store. Get Rewards
            </p>
            <div className="flex gap-x-3 ">
              {FooterSocials.map((link, index) => (
                <Link href="/" key={index}>
                  <Image
                    src={link}
                    alt="logo"
                    width={30}
                    height={30}
                    className="w-full h-full  shadow-sm p-2 rounded-full hover:shadow-md duration-100 cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-1 justify-around max-md:justify-between gap-8 lg:gap-10  ">
            {FooterLinks.map((item) => (
              <div key={item.title}>
                <h5 className="text-black text-xl font-bold mb-4">
                  {item.title}
                </h5>
                <div className="flex flex-col">
                  {item.links.map((link) => (
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-gray-600 duration-100 mt-2 cursor-pointer"
                      key={link.name}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h5 className="text-black text-xl font-bold mb-4">Install App</h5>
            <Image
              alt="card"
              src={AdidasApp}
              width={150}
              height={150}
              className=" cursor-pointer "
            />
            <div className="flex flex-col gap-y-3 pt-4">
              {FooterInstallApp.map((image, index) => (
                <Image
                  key={index}
                  alt="install_app"
                  src={image}
                  width={200}
                  height={200}
                  className="border-2 rounded-md cursor-pointer hover:shadow-md"
                />
              ))}
            </div>
            <div className="py-3 flex gap-y-4 flex-col">
              <span className="text-xs text-black">
                Secured Payment Gateways
              </span>
              <Image
                alt="card"
                src={CardsImage}
                width={250}
                height={250}
                className="border-2 rounded-md cursor-pointer hover:shadow-md"
              />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

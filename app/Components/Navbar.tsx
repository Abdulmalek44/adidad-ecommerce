"use client";

import icon from "../../public/icon.svg";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

const Navbar = () => {
  const pathName = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="mb-8 border-b">
      <div className="max-container padding-container flexBetween">
        <Link href="/">
          <Image
            src={icon}
            alt="Great Photo"
            className="md:w-24 sm:h-24 max-sm:m-4"
            width={70}
            height={70}
          />
        </Link>
        <nav className="hidden lg:flex gap-16 2xl:ml-20">
          {NavLinks.map((item, index) => (
            <div key={index}>
              {pathName === item.href ? (
                <Link
                  href={item.href}
                  key={index}
                  className="text-gray-500 text-base font-semibold "
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  href={item.href}
                  key={index}
                  className=" text-black text-base font-semibold transition duration-100 hover:text-gray-500"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

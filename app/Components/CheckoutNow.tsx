"use client";

import { Button } from "@/components/ui/button";
import { AddToBagProps } from "@/interface";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

const CheckoutNow = ({
  image,
  price,
  price_id,
  name,
  description,
  currency,
}: AddToBagProps) => {
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  return (
    <Button
      variant={"outline"}
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout Now
    </Button>
  );
};

export default CheckoutNow;

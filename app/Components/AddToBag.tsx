"use client";

import { Button } from "@/components/ui/button";
import { AddToBagProps } from "@/interface";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

const AddToBag = ({
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

  const { addItem, handleCartClick } = useShoppingCart();

  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
};

export default AddToBag;

export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
}

export interface fullProduct {
    _id: string;
    images: ImageGaller[] | any;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
}

export interface SlugProps {
    params:
    {
        slug: string
    };
}

export interface CategoryProps {
    params:
    {
        category: string
    };
}


export interface ImageGalleryProps {
    images: ImageGaller[];
}

export interface ImageGaller {
    _type: string;
    _key: string;
    asset: Asset;
}

export interface Asset {
    _ref: string;
    _type: string;
}

export interface AddToBagProps {
    image: ImageGaller;
    price: number;
    price_id: string;
    name: string;
    description: string;
    currency: string;
}
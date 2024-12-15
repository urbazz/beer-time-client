export interface productImageInterface
{
    id: number
    src: string;
    alt: string;
}

export interface productInterface
{
    id: number;
    name: string;
    sku: string;
    description: string;
    price: string;
    images: productImageInterface[];
}
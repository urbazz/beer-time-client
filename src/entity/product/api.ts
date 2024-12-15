import { title } from "process";
import WooApi from "../woocommerce";
import type { productInterface } from "./types";

export default class ProductApi 
{
    static async getAllProducts(): Promise<productInterface[]>
    {
        const data = await WooApi.getAllProducts();

        return data;
    }

    static async getProductByArticle(article: string): Promise<productInterface>
    {
        const data = await WooApi.getProductByArticle(article);

        return {
            id: data.id, 
            name: data.name, 
            sku: data.sku, 
            description: data.description, 
            price: data.price,
            images: data.images
        }
    }
}
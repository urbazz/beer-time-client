import type { productInterface } from "../product/types";
import { api } from "./config";

export default class WooApi
{
    static async getAllProducts(): Promise<productInterface[]>
    {
        const {data} = await api.get('products');

        return data;
    }

    static async getProductByArticle(
        article: string
    ): Promise<productInterface>
    {
        const {data} = await api.get('products', {
            sku: article
        });

        return data[0]
    }
}
import { ProductApi, productInterface } from "@/entity/product";
import Product from "./product";

export default async function ProductPage({
    params
}: {
    params: Promise<{article: string}>
}) 
{
    const article = (await params).article;
    const product: productInterface = await ProductApi.getProductByArticle(article);

    return <Product product={product}/>
};
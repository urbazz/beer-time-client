import { Wrapper } from "@/components/Wrapper";
import { productInterface } from "@/entity/product";
import { stringWithoutTags } from "@/shared";
import { 
    ProductImages, 
    ProductTitle, 
    ProductSubtitle, 
    ProductDescription, 
    ProductPrice
} from "@/widgets/product/";

export default async function Product({
    product
}: {
    product: Promise<productInterface>
})
{
    const data = await product;

    return (        
        <div>
            <Wrapper>
                <ProductTitle>{data.name}</ProductTitle>
            </Wrapper>
            <ProductImages imagesArray={data.images}/>
            <Wrapper>
                <ProductSubtitle>{data.name}</ProductSubtitle>
                <ProductPrice currentPrice={
                    data.price
                    || 'Пожалуйста, посмотрите цену на ценнике или уточните у продавца'
                    }/>
                <ProductDescription>
                    {
                        stringWithoutTags(data.description)
                        || 'Описание пока что не добавлено'
                    }
                </ProductDescription>
            </Wrapper>
        </div>
    );
}
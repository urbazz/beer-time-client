import Title from 'antd/es/typography/Title';
import React from 'react';

export const ProductPrice = ({
    currentPrice,
    // fullPrice
}: Readonly<{
    currentPrice: string;
    // fullPrice?: string;
}>) => {
    return (
        <>
           <Title
                level={3}
                className='mg-top-0 mg-10'
           >
                {currentPrice} руб./шт.
            </Title> 
        </>
    );
};
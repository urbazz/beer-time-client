import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export const api = new WooCommerceRestApi({
    consumerKey: process.env.WC_USER_KEY || '',
    consumerSecret: process.env.WC_USER_SECRET || '',
    url: `${process.env.NEXT_PUBLIC_HOST_URL}`,
    version: 'wc/v3'
});
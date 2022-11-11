import { ProductData, ProductsData, Zecko } from 'zecko';

// eslint-disable-next-line functional/no-class
class ProductClientExample {
    readonly getAllByCollectionId = (collectionId: string, before?: string, after?: string): Promise<ProductsData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.productClient.getAllByCollectionId(collectionId, before, after);
    };

    readonly getById = (id: string, imagesBefore?: string, imagesAfter?: string, variantsBefore?: string, variantsAfter?: string, metaFieldsBefore?: string, metaFieldsAfter?: string): Promise<ProductData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.productClient.getById(id, imagesBefore, imagesAfter, variantsBefore, variantsAfter, metaFieldsBefore, metaFieldsAfter);
    };

    readonly getRealtimeData = (id: string): Promise<ProductData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.productClient.getRealtimeData(id);
    };
}

const main = async () => {
    const productClientExample = new ProductClientExample();

    console.log(
        JSON.stringify(
            await productClientExample.getAllByCollectionId('YOUR_COLLECTION_ID')
        )
    );
    console.log('\n');
    console.log(
        JSON.stringify(await productClientExample.getById('YOUR_PRODUCT_ID'))
    );
    console.log('\n');
    console.log(
        JSON.stringify(await productClientExample.getRealtimeData('YOUR_PRODUCT_ID'))
    );
};

main();

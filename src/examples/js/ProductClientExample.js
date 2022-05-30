import { Zecko } from 'zecko';

class ProductClientExample {
  getAllByCollectionId = (collectionId, after = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.productClient.getAllByCollectionId(collectionId, after);
  };

  getById = (id, imagesAfter = null, variantsAfter = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.productClient.getById(id, imagesAfter, variantsAfter);
  };
}

const productClientExample = new ProductClientExample();

console.log(
  JSON.stringify(
    await productClientExample.getAllByCollectionId('YOUR_COLLECTION_ID')
  )
);
console.log('\n');
console.log(
  JSON.stringify(
    await productClientExample.getById(
      'YOUR_PRODUCT_ID',
      'YOUR_IMAGE_CURSOR',
      'YOUR_VARIANT_CURSOR'
    )
  )
);

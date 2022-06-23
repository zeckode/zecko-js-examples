import { Zecko } from 'zecko';

class ProductClientExample {
  getAllByCollectionId = (collectionId, before = null, after = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.productClient.getAllByCollectionId(
      collectionId,
      before,
      after
    );
  };

  getById = (
    id,
    imagesBefore = null,
    imagesAfter = null,
    variantsBefore = null,
    variantsAfter = null
  ) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.productClient.getById(
      id,
      imagesBefore,
      imagesAfter,
      variantsBefore,
      variantsAfter
    );
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
  JSON.stringify(await productClientExample.getById('YOUR_PRODUCT_ID'))
);

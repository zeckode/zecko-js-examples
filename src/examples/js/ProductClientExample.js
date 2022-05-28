import { Zecko } from 'zecko-js';

class ProductClientExample {
  getAllByCollectionId = (id) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.productClient.getAllByCollectionId(id);
  };

  getByProductId = (id) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.productClient.getByProductId(id);
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
  JSON.stringify(await productClientExample.getByProductId('YOUR_PRODUCT_ID'))
);

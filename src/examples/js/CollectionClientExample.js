import { Zecko } from 'zecko-js';

class CollectionClientExample {
  get = (id) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.collectionClient.get(id);
  };

  getAll = () => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.collectionClient.getAll();
  };
}

const collectionClientExample = new CollectionClientExample();
console.log(
  JSON.stringify(await collectionClientExample.get('YOUR_COLLECTION_ID'))
);
console.log('\n');
console.log(JSON.stringify(await collectionClientExample.getAll()));

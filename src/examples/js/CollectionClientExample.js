import { Zecko } from 'zecko-js';

class CollectionClientExample {
  getbyId = (id) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.collectionClient.getbyId(id);
  };

  getAll = (after = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.collectionClient.getAll(after);
  };
}

const collectionClientExample = new CollectionClientExample();

console.log(
  JSON.stringify(await collectionClientExample.getbyId('YOUR_COLLECTION_ID'))
);
console.log('\n');
console.log(
  JSON.stringify(await collectionClientExample.getAll('COLLECTION_CURSOR'))
);

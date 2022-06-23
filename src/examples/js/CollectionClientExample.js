import { Zecko } from 'zecko';

class CollectionClientExample {
  getById = (id) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.collectionClient.getById(id);
  };

  getAll = (before = null, after = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.collectionClient.getAll(before, after);
  };
}

const collectionClientExample = new CollectionClientExample();
console.log(JSON.stringify(await collectionClientExample.getAll()));
console.log('\n');
console.log(
  JSON.stringify(await collectionClientExample.getById('YOUR_COLLECTION_ID'))
);

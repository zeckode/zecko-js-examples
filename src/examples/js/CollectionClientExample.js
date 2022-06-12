import { Zecko } from 'zecko';

class CollectionClientExample {
  getbyId = (id) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.collectionClient.getbyId(id);
  };

  getAll = () => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.collectionClient.getAll();
  };
}

const collectionClientExample = new CollectionClientExample();
console.log(JSON.stringify(await collectionClientExample.getAll()));
console.log('\n');
console.log(
  JSON.stringify(await collectionClientExample.getbyId('YOUR_COLLECTION_ID'))
);

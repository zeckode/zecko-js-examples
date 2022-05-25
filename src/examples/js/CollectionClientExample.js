import { Zecko } from 'zecko-js';

class CollectionClientExample {
  get = (id) => {
    const zecko = new Zecko({
      accessToken: process.env.ZECKO_ACCESS_TOKEN || 'YOUR_ACCESS_TOKEN',
    });

    return zecko.collectionClient.get(id);
  };

  getAll = () => {
    const zecko = new Zecko({
      accessToken: process.env.ZECKO_ACCESS_TOKEN || 'YOUR_ACCESS_TOKEN',
    });

    return zecko.collectionClient.getAll();
  };
}

console.log(
  await new CollectionClientExample().get(
    process.env.COLLECTION_ID || 'YOUR_COLLECTION_ID'
  )
);

const allCollection = await new CollectionClientExample().getAll();

console.log(JSON.stringify(allCollection));

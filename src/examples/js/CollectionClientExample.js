import { Zecko } from 'zecko-js';

class CollectionClientExample {
  get = (id) => {
    const zecko = new Zecko({
      accessToken: process.env.ZECKO_ACCESS_TOKEN || 'abc',
    });

    return zecko.collectionClient.get(id);
  };

  getAll = () => {
    const zecko = new Zecko({
      accessToken: process.env.ZECKO_ACCESS_TOKEN || 'abc',
    });

    return zecko.collectionClient.getAll();
  };
}

console.log(
  await new CollectionClientExample().get(
    process.env.COLLECTION_ID || '391817560310'
  )
);

const allCollections = await new CollectionClientExample().getAll();

console.log(JSON.stringify(allCollections));

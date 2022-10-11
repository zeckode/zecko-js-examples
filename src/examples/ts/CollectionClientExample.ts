import { Zecko } from 'zecko';

// eslint-disable-next-line functional/no-class
class CollectionClientExample {
  getById(id: string) {
    const zecko = new Zecko({
      accessToken: 'YOUR_ACCESS_TOKEN',
    });
    return zecko.collectionClient.getById(id);
  }

  readonly getAll = (before = null, after = null): array => {
    const zecko = new Zecko({
      accessToken: 'YOUR_ACCESS_TOKEN',
    });
    return zecko.collectionClient.getAll(before, after);
  };
}

const main = async () => {
  const collectionClientExample = new CollectionClientExample();
  console.log(JSON.stringify(await collectionClientExample.getAll()));
  console.log('\n');
  console.log(
    JSON.stringify(await collectionClientExample.getById('YOUR_COLLECTION_ID'))
  );
};

main();

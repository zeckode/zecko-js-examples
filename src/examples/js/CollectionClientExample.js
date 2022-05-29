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

/**
 * ! --- A trailing exclamation mark is used to denote a field that uses a Non‐Null type
 */

const collectionClientExample = new CollectionClientExample();

/**
 * PRODUCT_ID (String!) --- product_id of the product that you want to get
 */
console.log(
  JSON.stringify(await collectionClientExample.getbyId('YOUR_COLLECTION_ID'))
);

console.log('\n');

/**
 * AFTER (String) --- 'after' perameter is used to achieve pagination of the collection page
 *                    -- if you want to get the first collection page, you can omit this parameter
 *                    -- if you want to get the next collection page, you can pass the 'endCursor' value in this parameter
 *                       - 'endCursor' value is returned in the 'pageInfo' object of 'collections' object
 *                       -  you can pass any 'curser' value of an object to get next collections
 */
console.log(JSON.stringify(await collectionClientExample.getAll('YOUR_CURSOR')));

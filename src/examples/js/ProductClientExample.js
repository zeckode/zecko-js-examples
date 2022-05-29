import { Zecko } from 'zecko-js';

class ProductClientExample {
  getAllByCollectionId = (collectionId, after = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.productClient.getAllByCollectionId(collectionId, after);
  };

  getById = (id, imagesAfter = null, variantsAfter = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.productClient.getById(id, imagesAfter, variantsAfter);
  };
}

/**
 * ! --- A trailing exclamation mark is used to denote a field that uses a Non‐Null type
 */

const productClientExample = new ProductClientExample();

/**
 * COLLECTION_ID (String!) --- 'collection_id' of the collection that you want to get all products from
 *
 * AFTER (String)          --- 'after' perameter is used to achieve pagination of the results
 *                             -- if you want to get the first page, you can omit this parameter
 *                             -- if you want to get the next page, you can pass the 'endCursor' value in this parameter
 *                                - 'endCursor' value is returned in the 'pageInfo' object of 'product' object
 *                                -  you can pass any 'curser' value of an object to get next objects
 */
console.log(
  JSON.stringify(
    await productClientExample.getAllByCollectionId('YOUR_COLLECTION_ID')
  )
);

console.log('\n');

/**
 * ID (String!)             --- 'product_id' of the product that you want to get
 *
 * IMAGESAFTER (String)     --- 'imagesAfter' parameter is used to achieve the pagination of product images
 *                              -- If you want to get the first page of images, pass null as 'imagesAfter'
 *                              -- If you want to get the next page of images, pass the 'endCursor' of the current page as 'imagesAfter'
 *                                 - 'endCursor' value is returned in the 'pageInfo' object of 'images' object
 *                                 - you can pass any 'cursor' value of an object to get next images
 *
 * VARIANTSAFTER (String)   --- 'variantsAfter' parameter is used to achieve the pagination of product variants
 *                              -- If you want to get the first page of variants, pass null as 'variantsAfter'
 *                              -- If you want to get the next page of variants, pass the 'endCursor' of the current page as 'variantsAfter'
 *                                 - 'endCursor' value is returned in the 'pageInfo' object of 'variants' object
 *                                 - you can pass any 'cursor' value of an object to get next variants
 */
console.log(
  JSON.stringify(
    await productClientExample.getById(
      'YOUR_PRODUCT_ID',
      'YOUR_IMAGE_CURSOR',
      'YOUR_VARIANT_CURSOR'
    )
  )
);

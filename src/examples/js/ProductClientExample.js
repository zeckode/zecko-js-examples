import { Zecko } from 'zecko-js';

class ProductClientExample {
  getAllByCollectionId = (collectionId, after = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.productClient.getAllByCollectionId(collectionId, after);
  };

  getByProductId = (id, imagesAfter = null, variantsAfter= null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.productClient.getByProductId(id, imagesAfter, variantsAfter);
  };
}

/**
 * ! --- A trailing exclamation mark is used to denote a field that uses a Non‐Null type
 * 
 */ 

const productClientExample = new ProductClientExample();

/**
 * COLLECTION_ID (String!) --- 'collection_id' of the collection that you want to get all products from
 * 
 */
console.log(
  JSON.stringify(
    await productClientExample.getAllByCollectionId('COLLECTION_ID')
  )
);

console.log('\n');

/**
 * COLLECTION_ID (String!) --- 'collection_id' of the collection that you want to get all products from
 * 
 * AFTER (String)          --- 'after' perameter is used to achieve pagination of the results
 *                             -- if you want to get the first page, you can omit this parameter
 *                             -- if you want to get the next page, you can pass the 'endCursor' value in this parameter
 *                                - 'endCursor' value is returned in the 'pageInfo' object of the previous response
 * 
 */
console.log(
  JSON.stringify(
    await productClientExample.getAllByCollectionId(
      'COLLECTION_ID',
      'AFTER'
    )
  )
);

console.log('\n');

/**
 * ID (String!)             --- 'product_id' of the product that you want to get
 * 
 * IMAGESAFTER (String)     --- 'imagesAfter' parameter is used to achieve the pagination of product images
 *                              -- If you want to get the first page of images, pass null as 'imagesAfter'
 *                              -- If you want to get the next page of images, pass the 'endCursor' of the current page as 'imagesAfter'
 *                                 - 'endCursor' value is returned in the 'pageInfo' object of images object of the previous response
 *                                 - you can pass the 'cursor' value of image node as well, then you got the next images according that
 * 
 * VARIANTSAFTER (String)   --- 'variantsAfter' parameter is used to achieve the pagination of product variants
 *                              -- If you want to get the first page of variants, pass null as 'variantsAfter'
 *                              -- If you want to get the next page of variants, pass the 'endCursor' of the current page as 'variantsAfter'  
 *                                 - 'endCursor' value is returned in the 'pageInfo' object of variants object of the previous response
 *                                 - you can pass the 'cursor' value of variant node as well, then you got the next variants according that
 * 
 */
console.log(
  JSON.stringify(
    await productClientExample.getByProductId(
      'ID',
      'IMAGESAFTER',
      'VARIANTSAFTER'
    )
  )
);

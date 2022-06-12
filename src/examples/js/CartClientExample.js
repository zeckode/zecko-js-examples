import { Zecko } from 'zecko';

class CartClientExample {
  getAllByCustomerId = (customerId, lineItemsAfter = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.getAllByCustomerId(customerId, lineItemsAfter);
  };

  add = (cartActionRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.add(cartActionRequest);
  };
}

const cartClientExample = new CartClientExample();

console.log(
  JSON.stringify(
    await cartClientExample.getAllByCustomerId('YOUR_CUSTOMER_ID')
  )
);

console.log('\n');

console.log(
  JSON.stringify(
    await cartClientExample.add(
      {
        customerId: 'YOUR_CUSTOMER_ID',
        variantId: 'YOUR_VARIANT_ID',
        quantity: 'YOUR_QUANTITY',
      }
    )
  )
);

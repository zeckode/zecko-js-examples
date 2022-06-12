import { Zecko } from 'zecko';

class CartClientExample {
  getByClientCustomerId = (customerId, lineItemsAfter = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.getByClientCustomerId(customerId, lineItemsAfter);
  };

  addToCart = (cartActionRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.addToCart(cartActionRequest);
  };

  deleteFromCart = (cartActionRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.deleteFromCart(cartActionRequest);
  };

  delete = (customerId) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.delete(customerId);
  };
}

const cartClientExample = new CartClientExample();

console.log(JSON.stringify(await cartClientExample.getByClientCustomerId('5')));

console.log('\n');

console.log(
  JSON.stringify(
    await cartClientExample.addToCart({
      customerId: 'YOUR_CLIENT_CUSTOMER_ID',
      variantId: 'YOUR_VARIANT_ID',
      quantity: 'YOUR_QUANTITY',
    })
  )
);

console.log('\n');

console.log(
  JSON.stringify(
    await cartClientExample.deleteFromCart({
      customerId: 'YOUR_CLIENT_CUSTOMER_ID',
      variantId: 'YOUR_VARIANT_ID',
      quantity: 'YOUR_QUANTITY',
    })
  )
);

console.log('\n');

console.log(JSON.stringify(await cartClientExample.delete('YOUR_CLIENT_CUSTOMER_ID')));

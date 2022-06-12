import { Zecko } from 'zecko';

class CartClientExample {
  getByClientCustomerId = (customerId, lineItemsAfter = null) => {
    const zecko = new Zecko({ accessToken: 'abc' });
    return zecko.cartClient.getByClientCustomerId(customerId, lineItemsAfter);
  };

  addToCart = (cartActionRequest) => {
    const zecko = new Zecko({ accessToken: 'abc' });
    return zecko.cartClient.addToCart(cartActionRequest);
  };

  deleteFromCart = (cartActionRequest) => {
    const zecko = new Zecko({ accessToken: 'abc' });
    return zecko.cartClient.deleteFromCart(cartActionRequest);
  };

  delete = (customerId) => {
    const zecko = new Zecko({ accessToken: 'abc' });
    return zecko.cartClient.delete(customerId);
  };
}

const cartClientExample = new CartClientExample();

console.log(JSON.stringify(await cartClientExample.getByClientCustomerId('5')));

console.log('\n');

console.log(
  JSON.stringify(
    await cartClientExample.addToCart({
      customerId: '5',
      variantId: '40607273746483',
      quantity: 1,
    })
  )
);

console.log('\n');

console.log(
  JSON.stringify(
    await cartClientExample.deleteFromCart({
      customerId: '5',
      variantId: '40607273746483',
      quantity: 1,
    })
  )
);

console.log('\n');

console.log(
  JSON.stringify(
    await cartClientExample.delete('5')
  )
);

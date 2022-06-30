import { Zecko } from 'zecko';

class CartClientExample {
  getByCustomerId = (customerId, lineItemsAfter = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.getByCustomerId(customerId, lineItemsAfter);
  };

  addToCart = (cartActionRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.addToCart(cartActionRequest);
  };

  deleteFromCart = (cartActionRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.deleteFromCart(cartActionRequest);
  };

  completeOrderById = (id, cartCompleteRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.completeOrderById(id, cartCompleteRequest);
  };

  delete = (customerId) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.delete(customerId);
  };
}

const cartClientExample = new CartClientExample();

console.log(
  JSON.stringify(await cartClientExample.getByCustomerId('YOUR_CUSTOMER_ID'))
);

console.log('\n');

console.log(
  JSON.stringify(
    await cartClientExample.addToCart({
      customerId: 'YOUR_CUSTOMER_ID',
      variantId: 'YOUR_VARIANT_ID',
      quantity: 'YOUR_QUANTITY',
    })
  )
);

console.log('\n');

console.log(
  JSON.stringify(
    await cartClientExample.deleteFromCart({
      customerId: 'YOUR_CUSTOMER_ID',
      variantId: 'YOUR_VARIANT_ID',
      quantity: 'YOUR_QUANTITY',
    })
  )
);

console.log('\n');

console.log(
  JSON.stringify(
    await cartClientExample.completeOrderById('YOUR_CART_ID', {
      paymentMethod: 'YOUR_PAYMENT_METHOD',
    })
  )
);

console.log('\n');

console.log(JSON.stringify(await cartClientExample.delete('YOUR_CUSTOMER_ID')));

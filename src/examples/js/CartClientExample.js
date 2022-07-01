import { Zecko } from 'zecko';

class CartClientExample {
  getByCustomerId = (
    customerId,
    lineItemsBefore = null,
    lineItemsAfter = null
  ) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.getByCustomerId(
      customerId,
      lineItemsBefore,
      lineItemsAfter
    );
  };

  addToCart = (cartActionRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.addToCart(cartActionRequest);
  };

  deleteFromCart = (cartActionRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.deleteFromCart(cartActionRequest);
  };

  completeCartById = (id, cartCompleteRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.completeCartById(id, cartCompleteRequest);
  };

  deleteCartByCustomerId = (customerId) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.deleteCartByCustomerId(customerId);
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
    await cartClientExample.completeCartById('YOUR_CART_ID', {
      // YOUR_PAYMENT_METHOD can be one of COD or PREPAID
      paymentMethod: 'YOUR_PAYMENT_METHOD',
    })
  )
);

console.log('\n');

console.log(
  JSON.stringify(
    await cartClientExample.deleteCartByCustomerId('YOUR_CUSTOMER_ID')
  )
);

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

  updateCart = (id, cartUpdateRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.updateCart(id, cartUpdateRequest);
  };

  addDiscount = (id, cartDiscountRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.addDiscount(id, cartDiscountRequest);
  };

  removeDiscount = (id, cartDiscountRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.cartClient.removeDiscount(id, cartDiscountRequest);
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
    await cartClientExample.updateCart('YOUR_CART_ID', {
      customer: {
        email: 'YOUR_CUSTOMER_EMAIL_ADDRESS',
      },
      shippingAddress: {
        address1: 'YOUR_CUSTOMER_ADDRESS', // For Street address or PO Box number
        address2: 'YOUR_CUSTOMER_ADDRESS', // Optional Field, For Apartment Details
        city: 'YOUR_CUSTOMER_CITY',
        country: 'YOUR_CUSTOMER_COUNTRY', // Optional Field
        countryCode: 'YOUR_CUSTOMER_COUNTRY_CODE', // Optional Field
        firstName: 'YOUR_CUSTOMER_FIRST_NAME',
        lastName: 'YOUR_CUSTOMER_LAST_NAME', // Optional Field
        phone: 'YOUR_CUSTOMER_PHONE_NUMBER',
        zip: 'YOUR_CUSTOMER_ZIP_CODE',
      },
      shippingLine: {
        price: 'PRICE_OF_SHIPPING_RATE',
        shippingRateHandle: 'UNIQUE_HANDLE_FOR_SHIPPING_RATE',
        title: 'TITLE_OF_SHIPPING_RATE',
      },
    })
  )
);

console.log(
  JSON.stringify(
    await cartClientExample.completeCartById('YOUR_CART_ID', {
      payment: {
        totalPrice: 'TOTAL_AMOUNT_OF_CART', // that's include subTotal, Discount and Shipping
      },
    })
  )
);

console.log('\n');

console.log(
  JSON.stringify(
    await cartClientExample.deleteCartByCustomerId('YOUR_CUSTOMER_ID')
  )
);

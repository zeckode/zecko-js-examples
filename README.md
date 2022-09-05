# zecko-js-examples

## Cart Client Flow


### 1. <b>Add to cart</b>

- Used to add product variant to cart

```js
return zecko.cartClient.addToCart({
  customerId: 'YOUR_CUSTOMER_ID',
  variantId: 'YOUR_PRODUCT_VARIANT_ID',
  quantity: 'YOUR_PRODUCT_VARIANT_QUANTITY',
});
```

### 2. <b>Delete From cart</b>

- Used to remove product variant from cart

```js
return zecko.cartClient.deleteFromCart({
  customerId: 'YOUR_CUSTOMER_ID',
  variantId: 'YOUR_PRODUCT_VARIANT_ID',
  quantity: 'YOUR_PRODUCT_VARIANT_QUANTITY',
});
```

### 3. <b>Update Cart</b>

- Used to update the contact information (`customer.email`, `shippingAddress`, `shippingLine` - Shipping rate and method)


First, update the customer's address to get available shipping rates (prepaid / COD, etc). After updating `shippingAddress` you will get multiple `availableShippingRates`, one of which you can send to `cartClient.updateById` again to update shipping rates as selected by the user.

```js
return zecko.cartClient.updateById('YOUR_CART_ID', {
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
    province: 'REGION_OF_ADDRESS', // State or district, country
    zip: 'YOUR_CUSTOMER_ZIP_CODE',
  }
});
```

After updating the address, update the shipping line:

```js
return zecko.cartClient.updateById('YOUR_CART_ID', {
  shippingLine: {
    handle: 'UNIQUE_HANDLE_FOR_SHIPPING_RATE',
    price: {
      amount: 'PRICE_OF_SHIPPING_RATE';
    },
    title: 'TITLE_OF_SHIPPING_RATE',
  },
});
```


### 4. <b>Add Discount to Cart </b>

<<<<<<< HEAD
- Used to add a discount code to the cart
=======
- If you already know or you cached shippingLine then you can also pass all 3 object at one time

- After Changing the `shippingAddress` or `addToCart` or `deleteFromCart` shippingLine will be remove, So you have to pick the shippingLine from `availableShippingRates` and update that again

### 4. <b>Add Cart Discount</b>

- Used to add Discount on the Cart
>>>>>>> 1f66eba1cf884c9e05cd8be711f86f860bcffb9e

```js
return zecko.cartClient.addDiscountById('YOUR_CART_ID', {
  discounts: [
    {
      type: 'DISCOUNT_CODE_TYPE',
      code: 'DISCOUNT_CODE',
    },
  ],
});
```

### 5. <b>Remove Discount from Cart</b>

- Used to remove a discount code from the cart.

```js
return zecko.cartClient.removeDiscountById('YOUR_CART_ID', {
  discounts: [
    {
      type: 'DISCOUNT_CODE_TYPE',
      code: 'DISCOUNT_CODE',
    },
  ],
});
```

### 6. <b> Complete Cart </b>

- Used to complete the cart.

```js
return zecko.cartClient.completeCartById('YOUR_CART_ID', {
  payment: {
    totalPrice: 'TOTAL_AMOUNT_OF_CART',
  },
});
```

## 🗒️ Note

- You have to pass the exact `totalPrice` that you will get in cart response from either `getCart` or in response of `updateCart` method after updating shipping rates (`shippingLines`)
  - That includes subTotal, discount(if applicable) and shipping. This is to verify if the payment taken from the user is equal to what the cart reflects before completion.

### 4. <b>delete cart</b>

- Used to delete customer cart.

```js
return zecko.cartClient.deleteCartByCustomerId('YOUR_CUSTOMER_ID');
```

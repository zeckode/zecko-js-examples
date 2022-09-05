# zecko-js-examples

## Cart Client Flow

---

### Note 🗒️

- After updating `shippingAddress` you will get multiple `availableShippingRates` according that shipping address in Cart Response and that one the shippingLine you will use to update the cart shippingLine

---

### 1. <b>Add to cart</b>

- Used to add product variant to cart

```js
return zecko.cartClient.addToCart({
  customerId: 'YOUR_CUSTOMER_ID',
  variantId: 'YOUR_PRODUCT_VARIANT_ID',
  quantity: 'YOUR_PRODUCT_VARIANT_QUANTITY',
});
```

### 2. <b>delete From cart</b>

- Used to remove product variant to cart

```js
return zecko.cartClient.deleteFromCart({
  customerId: 'YOUR_CUSTOMER_ID',
  variantId: 'YOUR_PRODUCT_VARIANT_ID',
  quantity: 'YOUR_PRODUCT_VARIANT_QUANTITY',
});
```

### 3. <b>Update Cart</b>

- Used to update Contact information (Customer email), ShippingAddress, ShippingLine (Shipping method)

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
  },
  shippingLine: {
    handle: 'UNIQUE_HANDLE_FOR_SHIPPING_RATE',
    price: {
      amount: 'PRICE_OF_SHIPPING_RATE';
    },
    title: 'TITLE_OF_SHIPPING_RATE',
  },
});
```

### 🗒️ Note

- At least one of 'Customer', 'shippingAddress' or 'shippingLine' is necessary

- If you don't know the `shippingLine` then you will find out in `availableShippingRates` that you will get in Cart Response after updating `shippingAddress`

- If you already know or you cached shippingLine then you can also pass all 3 object at one time

### 4. <b>Add Cart Discount</b>

- Used to add Discount on the Cart

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

### 🗒️ Note

- Discount applied on totalPrice, Product level discount is not available

### 5. <b>Remove Cart Discount</b>

- Used to remove Discount on the Cart

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

- Used to complete the Cart

```js
return zecko.cartClient.completeCartById('YOUR_CART_ID', {
  payment: {
    totalPrice: 'TOTAL_AMOUNT_OF_CART',
  },
});
```

## 🗒️ Note

- You have to pass exact `totalPrice` that you will get in cart response at the end
  - That's include subTotal, Discount(if applicable) and Shipping

### 4. <b>delete cart</b>

- Used to delete customer cart

```js
return zecko.cartClient.deleteCartByCustomerId('YOUR_CUSTOMER_ID');
```

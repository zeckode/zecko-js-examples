import { CartActionRequest, CartCompleteRequest, CartData, CartDiscountRequest, CartUpdateRequest, CountryCode, DeleteCart, DiscountCodeType, Money, OrderData, Zecko } from "zecko";

// eslint-disable-next-line functional/no-class
class CartClientExample {
    readonly getByCustomerId = (
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

    readonly addToCart = (cartActionRequest: CartActionRequest): Promise<CartData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.cartClient.addToCart(cartActionRequest);
    };

    readonly deleteFromCart = (cartActionRequest: CartActionRequest): Promise<CartData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.cartClient.deleteFromCart(cartActionRequest);
    };

    readonly updateById = (id: string, cartUpdateRequest: CartUpdateRequest): Promise<CartData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.cartClient.updateById(id, cartUpdateRequest);
    };

    readonly addDiscountById = (id: string, cartDiscountRequest: CartDiscountRequest): Promise<CartData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.cartClient.addDiscountById(id, cartDiscountRequest);
    };

    readonly removeDiscountById = (id: string, cartDiscountRequest: CartDiscountRequest): Promise<CartData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.cartClient.removeDiscountById(id, cartDiscountRequest);
    };

    readonly completeCartById = (id: string, cartCompleteRequest: CartCompleteRequest): Promise<OrderData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.cartClient.completeCartById(id, cartCompleteRequest);
    };

    readonly deleteCartByCustomerId = (customerId: string): Promise<DeleteCart> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.cartClient.deleteCartByCustomerId(customerId);
    };
}

const main = async () => {
    const cartClientExample = new CartClientExample();
    const discountCodeType: DiscountCodeType = null;
    const quantity: number = null;
    const price: Money = null;
    const countryCode: CountryCode = null;
    console.log(
        JSON.stringify(await cartClientExample.getByCustomerId('YOUR_CUSTOMER_ID'))
    );

    console.log('\n');

    console.log(
        JSON.stringify(
            await cartClientExample.addToCart({
                customerId: 'YOUR_CUSTOMER_ID',
                variantId: 'YOUR_VARIANT_ID',
                quantity: quantity,
            })
        )
    );

    console.log('\n');

    console.log(
        JSON.stringify(
            await cartClientExample.deleteFromCart({
                customerId: 'YOUR_CUSTOMER_ID',
                variantId: 'YOUR_VARIANT_ID',
                quantity: quantity,
            })
        )
    );

    console.log('\n');

    console.log(
        JSON.stringify(
            await cartClientExample.updateById('YOUR_CART_ID', {
                customer: {
                    email: 'YOUR_CUSTOMER_EMAIL_ADDRESS',
                },
                shippingAddress: {
                    address1: 'YOUR_CUSTOMER_ADDRESS', // For Street address or PO Box number
                    address2: 'YOUR_CUSTOMER_ADDRESS', // Optional Field, For Apartment Details
                    city: 'YOUR_CUSTOMER_CITY',
                    country: 'YOUR_CUSTOMER_COUNTRY', // Optional Field
                    countryCode: countryCode, // Optional Field
                    firstName: 'YOUR_CUSTOMER_FIRST_NAME',
                    lastName: 'YOUR_CUSTOMER_LAST_NAME', // Optional Field
                    phone: 'YOUR_CUSTOMER_PHONE_NUMBER',
                    province: 'REGION_OF_ADDRESS', // State or district, country
                    zip: 'YOUR_CUSTOMER_ZIP_CODE',
                },
                shippingLine: {
                    price: price,
                    title: 'TITLE_OF_SHIPPING_RATE',
                },
            })
        )
    );

    console.log('\n');
    console.log(
        JSON.stringify(
            await cartClientExample.addDiscountById('YOUR_CART_ID', {
                discounts: [
                    {
                        type: discountCodeType,
                        code: 'DISCOUNT_CODE',
                    },
                ],
            })
        )
    );

    console.log('\n');

    console.log(
        JSON.stringify(
            await cartClientExample.removeDiscountById('YOUR_CART_ID', {
                discounts: [
                    {
                        type: discountCodeType,
                        code: 'DISCOUNT_CODE',
                    },
                ],
            })
        )
    );

    console.log('\n');

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

}

main()
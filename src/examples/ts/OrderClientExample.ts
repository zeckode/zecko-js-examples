import { OrderData, OrdersData, Zecko } from "zecko";

// eslint-disable-next-line functional/no-class
class OrderClientExample {
    readonly getById = (id: string, lineItemsBefore?: string, lineItemsAfter?: string): Promise<OrderData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.orderClient.getById(id, lineItemsBefore, lineItemsAfter);
    };
    readonly getAllByCustomerId = (customerId: string, before?: string, after?: string): Promise<OrdersData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.orderClient.getAllByCustomerId(customerId, before, after);
    };
}

const main = async () => {
    const orderClientExample = new OrderClientExample();
    console.log(JSON.stringify(await orderClientExample.getById('YOUR_ORDER_ID')));
    console.log('\n');
    console.log(
        JSON.stringify(
            await orderClientExample.getAllByCustomerId('YOUR_CUSTOMER_ID')
        )
    );
};

main();
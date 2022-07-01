import { Zecko } from 'zecko';

class OrderClientExample {
  getById = (id, lineItemsBefore = null, lineItemsAfter = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.orderClient.getById(id, lineItemsBefore, lineItemsAfter);
  };

  getAllByCustomerId = (customerId, before = null, after = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.orderClient.getAllByCustomerId(customerId, before, after);
  };
}

const orderClientExample = new OrderClientExample();

console.log(JSON.stringify(await orderClientExample.getById('YOUR_ORDER_ID')));

console.log('\n');

console.log(
  JSON.stringify(
    await orderClientExample.getAllByCustomerId('YOUR_CUSTOMER_ID')
  )
);

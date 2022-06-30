import { Zecko } from 'zecko';

class OrderClientExample {
  getById = (id, lineItemsBefore = null, lineItemsAfter = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.orderClient.findById(id, lineItemsBefore, lineItemsAfter);
  };

  getAll = (customerId, before = null, after = null) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.orderClient.findAll(customerId, before, after);
  };
}

const orderClientExample = new OrderClientExample();

console.log(JSON.stringify(await orderClientExample.getById('YOUR_ORDER_ID')));

console.log('\n');

console.log(
  JSON.stringify(await orderClientExample.getAll('YOUR_CUSTOMER_ID'))
);

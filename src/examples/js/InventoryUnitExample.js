import { Zecko } from 'zecko';

class InventoryUnitExample {
  cancelById = (inventoryUnitId, inventoryUnitActionRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.inventoryUnitClient.cancelById(
      inventoryUnitId,
      inventoryUnitActionRequest
    );
  };

  returnById = (inventoryUnitId, inventoryUnitActionRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.inventoryUnitClient.returnById(
      inventoryUnitId,
      inventoryUnitActionRequest
    );
  };

  exchangeById = (inventoryUnitId, inventoryUnitActionRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.inventoryUnitClient.exchangeById(
      inventoryUnitId,
      inventoryUnitActionRequest
    );
  };

  trackById = (inventoryUnitId, inventoryUnitActionRequest) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.inventoryUnitClient.trackById(
      inventoryUnitId,
      inventoryUnitActionRequest
    );
  };
}

const inventoryUnitClient = new InventoryUnitExample();

console.log(
  JSON.stringify(
    await inventoryUnitClient.cancelById('YOUR_INVENTORY_UNIT_ID', {
      cancelReason: 'YOUR_CANCEL_REASON',
    })
  )
);

console.log(
  JSON.stringify(
    await inventoryUnitClient.exchangeById('YOUR_INVENTORY_UNIT_ID', {
      exchangeReason: 'YOUR_EXCHANGE_REASON',
    })
  )
);

console.log(
  JSON.stringify(
    await inventoryUnitClient.returnById('YOUR_INVENTORY_UNIT_ID', {
      returnReason: 'YOUR_RETURN_REASON',
    })
  )
);

console.log(
  JSON.stringify(await inventoryUnitClient.trackById('YOUR_INVENTORY_UNIT_ID'))
);

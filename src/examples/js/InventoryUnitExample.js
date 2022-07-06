import { Zecko } from 'zecko';

class InventoryUnitExample {
  cancelById = (inventoryUnitId) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.inventoryUnitClient.cancelById(inventoryUnitId);
  };

  returnById = (inventoryUnitId) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.inventoryUnitClient.returnById(inventoryUnitId);
  };

  exchangeById = (inventoryUnitId) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.inventoryUnitClient.exchangeById(inventoryUnitId);
  };

  trackById = (inventoryUnitId) => {
    const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
    return zecko.inventoryUnitClient.trackById(inventoryUnitId);
  };
}

const inventoryUnitClient = new InventoryUnitExample();

console.log(await inventoryUnitClient.cancelById('YOUR_INVENTORY_UNIT_ID'));

console.log(await inventoryUnitClient.exchangeById('YOUR_INVENTORY_UNIT_ID'));

console.log(await inventoryUnitClient.returnById('YOUR_INVENTORY_UNIT_ID'));

console.log(await inventoryUnitClient.returnById('YOUR_INVENTORY_UNIT_ID'));

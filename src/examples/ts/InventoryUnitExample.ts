import { InventoryUnitCancelRequest, InventoryUnitData, InventoryUnitExchangeRequest, InventoryUnitHistory, InventoryUnitReturnRequest, Zecko } from "zecko";


// eslint-disable-next-line functional/no-class
class InventoryUnitExample {
    readonly cancelById = (inventoryUnitId: string, inventoryUnitActionRequest: InventoryUnitCancelRequest): Promise<InventoryUnitData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.inventoryUnitClient.cancelById(
            inventoryUnitId,
            inventoryUnitActionRequest
        );
    };
    readonly returnById = (inventoryUnitId: string, inventoryUnitActionRequest: InventoryUnitReturnRequest): Promise<InventoryUnitData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.inventoryUnitClient.returnById(
            inventoryUnitId,
            inventoryUnitActionRequest
        );
    };

    readonly exchangeById = (inventoryUnitId: string, inventoryUnitActionRequest: InventoryUnitExchangeRequest): Promise<InventoryUnitData> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.inventoryUnitClient.exchangeById(
            inventoryUnitId,
            inventoryUnitActionRequest
        );
    };

    readonly trackById = (inventoryUnitId: string): Promise<InventoryUnitHistory> => {
        const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
        return zecko.inventoryUnitClient.trackById(
            inventoryUnitId,
        );
    };
}


const main = async () => {
    const inventoryUnitClient = new InventoryUnitExample();

    console.log(
        JSON.stringify(
            await inventoryUnitClient.cancelById('YOUR_INVENTORY_UNIT_ID', {
                cancelReason: 'YOUR_REASON_FOR_CANCELLATION',
            })
        )
    );

    console.log(
        JSON.stringify(
            await inventoryUnitClient.exchangeById('YOUR_INVENTORY_UNIT_ID', {
                exchangeReason: 'YOUR_REASON_FOR_EXCHANGE',
            })
        )
    );

    console.log(
        JSON.stringify(
            await inventoryUnitClient.returnById('YOUR_INVENTORY_UNIT_ID', {
                returnReason: 'YOUR_REASON_FOR_RETURN',
            })
        )
    );

    console.log(
        JSON.stringify(await inventoryUnitClient.trackById('YOUR_INVENTORY_UNIT_ID'))
    );
};

main();
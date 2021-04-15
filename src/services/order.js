import { fireStore } from './firebase'
import { updateBatchStocks } from './products'

export const createOrder = ( order ) => {
    console.log(order)
    return fireStore
        .collection('orders')
        .add(order)
        // .then(( result ) => {
        //     updateBatchStocks(order.items)
        //     return result
        // })
}
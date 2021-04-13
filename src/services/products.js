import { fireStore } from './firebase'

export const getProducts = ( subcategory ) => {
    return fireStore
        .collection('products')
        .where('subcategory', '==', subcategory)
        .get()
        .then(({ docs }) => {
            return docs.map((doc) => {
                const data = doc.data()
                const id = doc.id
                return {id, ...data}
            })
        })
}

export const getProductDetail = ( id ) => {
    return fireStore
    .collection('products')
    .doc(id)
    .get()
    .then((doc) => {
        return {...doc.data(), id}
    })
}
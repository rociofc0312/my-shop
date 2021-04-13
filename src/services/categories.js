import { fireStore } from './firebase'

const formatCategories = ( categories ) => {

}

export const getAllCategories = () => {
    return fireStore
        .collection('categories')
        .get()
        .then(({ docs }) => {
            return docs.map((doc) => {
                const data = doc.data()
                const id = doc.id
                return {id, ...data}
            })
        })
}
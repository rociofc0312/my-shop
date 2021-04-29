// import { useState, useEffect, useRef } from 'react';

// export const useFirestore = (promise, params) => {
//     const oldParamsRef = useRef(params)
//     const [result, setResult] = useState({})
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         let cancel = false
//         if (params !== oldParamsRef) {
//             setLoading(true)
//             promise
//                 .then((result) => {
//                     if (cancel) return
//                     setResult(result)
//                 })
//                 .finally(() => setLoading(false))
//             oldParamsRef.current = params
//         }
//         return () => {
//             cancel = true
//         }
//     }, [params])

//     return { result, loading }
// }

export const useFirestore = () => {}
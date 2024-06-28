import { useEffect, useState } from "react"

export const useFetch = (endpoint) => {

    const [data, setData] = useState([])

    useEffect(() => {
        let getData = fetch(endpoint)
        getData.then((res) => res.json()).then((res) => setData(res))
    }, [endpoint])

    console.log(data)

    return { data }
}
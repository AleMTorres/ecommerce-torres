import { useState } from "react"

export const usePaginate = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1)

    let totalPages = Math.ceil(data.length / itemsPerPage)
    const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const prePage = () => {
        setCurrentPage(currentPage - 1)
    }

    return { currentData, totalPages, currentPage, nextPage, prePage }
}

import { useFetch } from "./hooks/useFetch"
import { usePaginate } from "./hooks/usePaginate"

export const Todos = () => {

    const todos = useFetch('https://jsonplaceholder.typicode.com/todos', [])

    const { currentData, totalPages, currentPage, nextPage, prePage } =
        usePaginate(todos, 5)


    return (
        <div>
            {currentData.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                </div>
            ))}

            <button onClick={prePage} disabled={currentPage === 1}>Anterior</button>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Siguiente</button>
        </div>
    )
}

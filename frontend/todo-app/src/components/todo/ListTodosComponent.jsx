import { useEffect, useState } from "react"
import { retriveAllTodosForUsername } from "./api/TodoApiService"

function ListTodosComponent(){

    const today = new Date()
    const targetDate = new Date(today.getFullYear()+2, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])

    useEffect(
        () => refreshTodos(), []
    )

    function refreshTodos(){

        retriveAllTodosForUsername('Soojin')
        .then(response => {
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }
    

    return(
        <div className="container">
            <h1>할 일</h1>
            <div>
                할 일 목록
                <table className='table'>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        )
                    }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default ListTodosComponent
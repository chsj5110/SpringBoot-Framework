function ListTodosComponent(){

    const today = new Date()
    const targetDate = new Date(today.getFullYear()+2, today.getMonth(), today.getDay())

    const todos = [
                    {id:1, description: '공부하기', done: false, targetDate:targetDate},
                    {id:2, description: '빨래' , done: false, targetDate:targetDate},
                    {id:3, description: '청소', done: false, targetDate:targetDate},
                ]

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
                                    <td>{todo.targetDate.toDateString()}</td>
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
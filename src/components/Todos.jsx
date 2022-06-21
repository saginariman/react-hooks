import axios from 'axios'
import React from 'react'
import useRequest from '../hooks/useRequest'

const Todos = () => {
    const [todos, loading, error] = useRequest(fetchTodos)

    function fetchTodos(query) {
      return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }
  
    if(loading){
      return <h1>Идет загрузка...</h1>
    }
  
    if(error) {
      return <h1>Произошла ошибка при загрузке данных</h1>
    }
  
    return (
      <div>
        {todos && todos.map(todo => 
            <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
                {todo.id}. {todo.title}
            </div>    
        )}
      </div>
    );
}

export default Todos
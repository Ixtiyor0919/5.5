import './List.css';
import ListItem from './List-item/List-item';
import { useEffect, useState } from 'react';

export function List() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/productRequests')
                .then(response => response.json())
                .then(data => setTodos(data))
                
            }, [])
    return(
        <>
            <div className='todo-list'>
                {
                    todos.map(todo => <ListItem key={todo.id} title={todo.title} id={todo.id} upvotes={todo.upvotes} category={todo.category} description={todo.description}/>)
                }
            </div>
        </>
    )
}

export default List
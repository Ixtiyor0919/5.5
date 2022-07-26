import './List.css';
import ListItem from './List-item/List-item';
import { useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';

export function List() {
    const ref = useRef()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/productRequests')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
    const filtered = data.filter(item => {
        if(item.category === ref.current.value) {
            return item
        }
    })
    return(
        <>
            <div className='todo-list'>
                <div className='d-none'>
                    <input type="radio" ref={ref} value='Feature'/>
                    <Header data={data.length && data.length}/>
                </div> 
                {
                    filtered.map(todo => <ListItem key={todo.id} title={todo.title} id={todo.id} upvotes={todo.upvotes} category={todo.category} description={todo.description} comments={todo.comments ? todo.comments.length : 0 } />)
                }
            </div>
        </>
    )
}

export default List
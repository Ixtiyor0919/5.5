import './Comments-item.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CommentItem(props) {

    const param = useParams()
    const current = props.todos?.find(todo => todo.id === param.id)
    console.log(current);
    return(
        <>
            <Link to={`/Comments/${current.id}`}  className='suggestion-item'>
                    <div className='suggestion-item-btn'>
                        {current.upvotes}
                    </div>
                    <div className='suggestion-item-card'>
                        <h2 className='suggestion-item-card-title'>{current.title}</h2>
                        <p className='suggestion-item-card-description'>
                            {current.description}
                        </p>
                        <button className='suggestion-item-card-btn'>{current.category}</button>
                    </div>
                    <span className='suggestion-item-comment'>{current.id}</span>
            </Link>
        </>
    )
}

export default CommentItem;
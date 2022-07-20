import './List-item.css';
import { Link } from 'react-router-dom';

function ListItem(props) {
    return(
        <>
           <div key={props.id}>
                <Link to={`/Comments${props.id}`}  className='suggestion-item'>
                        <div className='suggestion-item-btn'>
                            {props.upvotes}
                        </div>
                        <div className='suggestion-item-card'>
                            <h2 className='suggestion-item-card-title'>{props.title}</h2>
                            <p className='suggestion-item-card-description'>
                                {props.description}
                            </p>
                            <button className='suggestion-item-card-btn'>{props.category}</button>
                        </div>
                        <span className='suggestion-item-comment'>{props.id}</span>
                </Link>
           </div>
        </>
    )
}

export default ListItem
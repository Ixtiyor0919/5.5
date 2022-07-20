import './Cardtem.css'

function CardItem(props) {
    return(
        <>
            <div key={props.id} className='suggestion-item'>
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
                <span className='suggestion-item-comment'>{props.comments}</span>
            </div>
        </>
    )   
}

export default CardItem;
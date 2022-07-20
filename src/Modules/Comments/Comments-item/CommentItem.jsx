import './CommentItem.css';

function CommentItem(props) {
    return(
        <>
            <div key={props.id} className='comment-item'>
                <div className='comment-inner-card'>
                    <div className='comment-inner-card-inner'>
                        <img className="user-img" src={props.img} alt=""/>
                        <div>
                            <h3 className='user-title'>{props.name}</h3>
                            <p className='user-username'>{props.username}</p>
                        </div>
                        <span className='user-reply'>Reply</span>
                    </div>
                    <p className='user-description'>{props.content}</p>
                </div>
            </div>
        </>
    )
}

export default CommentItem
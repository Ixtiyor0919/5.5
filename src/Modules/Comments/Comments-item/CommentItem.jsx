import './CommentItem.css';

// {img, id, name, username, content}
function CommentItem({img, id, name, username, content}) {
    return (
        <div key={id} className='comment-item'>
                <div className='comment-inner-card'>
                    <div className='comment-inner-card-inner'>
                        <img className="user-img" src={img} alt=""/>
                        <div>
                            <h3 className='user-title'>{name}</h3>
                            <p className='user-username'>{username}</p>
                        </div>
                        <span className='user-reply'>Reply</span>
                    </div>
                    <p className='user-description'>{content}</p>
                </div>
            </div>
    )
        
            
        
    
}

export default CommentItem
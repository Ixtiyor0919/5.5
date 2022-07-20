import { useParams } from 'react-router-dom';
import CardItem from './Comments-item/CommentCard/CardtItem';
import CommentItem from './Comments-item/CommentItem'
import { Link } from 'react-router-dom';
import './Comments.css';
import AddComment from './CommentAdd/AddComment';

function Comments(props) {
    const param = useParams()
    const current = props.data.find(todo => +todo.id === +param.id)
    return(
        <>
            <div className='comments-container'>
                <div className='comment-wrapper-top'>
                    <Link className='comment-back' to={'/'}>Go Back</Link>
                    <Link className='edit-feedback' to={'/EditFeedback'}>Edit Feedback</Link>
                </div>
                <div className=''>
                    <CardItem key={''} id={current.id} upvotes={current.upvotes} title={current.title} content={current.content} category={current.category} description={current.description} comments={current.comments.length}/>
                </div>
                <div className='comment-list'>
                    <div className='comment-list-top'>
                        <span className='comment-length'>{2}</span>
                        <p className='comments-text'>Comments</p>
                    </div>
                    {
                        current.comments.map(item => <CommentItem key={CardItem.id} id={item.id} name={item.user.name} img={item.user.image} content={item.content} username={item.user.username} comment={item.length}/>)
                    }
                </div>
                <AddComment />
            </div>
        </>
    )   
}

export default Comments;
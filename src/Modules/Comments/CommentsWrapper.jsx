import './Comments.css';
import { useParams, Link } from 'react-router-dom';
import CardItem from './Comments-item/CommentCard/CardtItem';
import CommentItem from './Comments-item/CommentItem'
import AddComment from './CommentAdd/AddComment';
import ListItem from '../../Components/List/List-item/List-item';

function Comments(props) {
    const param = useParams()
    const current = props.data.find(todo => +todo.id === +param.id)
    console.log(param);
    return(
        <>
            <div className='comments-container'>
                <div className='comment-wrapper-top'>
                    <Link className='comment-back' to={'/'}>Go Back</Link>
                    <Link className='edit-feedback' to={`/EditFeedback-${current.id}`}>Edit Feedback</Link>
                </div>
                <div className=''>
                    <CardItem key={''} id={current.id} upvotes={current.upvotes} title={current.title} content={current.content} category={current.category} description={current.description} comments={current.comments && current.comments.length}/>
                </div>
                <div className='comment-list'>
                    <div className='comment-list-top'>
                        <span className='comment-length'>{current.comments && current.comments.length}</span>
                        <p className='comments-text'>Comments</p>
                    </div>
                    {
                        current.comments &&   current.comments.map((item, index) => <CommentItem id={index} name={item.user.name} img={item.user.image} content={item.content} username={item.user.username} comment={item.length && item.length} />)
                    }
                </div>
                <div className='d-none'>{<ListItem comments={props.data.comments && props.data.comments.length}/>}</div>
                <AddComment addComment={props.addComment} data={current}/>
            </div>
        </>
    )   
}

export default Comments;
import { useRef } from 'react'
// import CommentItem from '../Comments-item/CommentItem'
import './AddComment.css'

function AddComment({addComment, data}) {
    const id = data.id
    const comments = data.comments
    const contentRef = useRef()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const newData = {
            // "id": 1.3,
           "content": contentRef.current.value,
            "user": {
                "image": "https://raw.githubusercontent.com/mukhammadyn/product-images/main/user-images/image-elijah.jpg",
                "name": "Elijah Moss",
                "username": "hexagon.bestagon"
                }
        }
        addComment({id, comments, newData})
    }

    return(
        <>
            <div className='AddComment-wrapper'>
                <form onSubmit={handleFormSubmit}>
                    <h3 className='add-comment-title'>Add Comment</h3>
                    <textarea ref={contentRef} className='add-comment-content' name="comment" id="comment" cols="30" rows="10" placeholder='Type your comment here...'></textarea>
                    <div className='add-comment-bottom'>
                        <span className='add-comment-text'>250 Characters left</span>
                        <button type='submit' className='add-comment-btn'>Post Comment</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddComment

// {
//     "id": 6,
//     "title": "Preview images not loading",
//     "category": "bug",
//     "upvotes": 3,
//     "isUpvoted": false,
//     "status": "suggestion",
//     "description": "Challenge preview images are missing when you apply a filter.",
//     "comments": [
//     {
//     "id": 1,
//     "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
//     "user": {
//     "image": "https://raw.githubusercontent.com/mukhammadyn/product-images/main/user-images/image-suzanne.jpg",
//     "name": "Suzanne Chang",
//     "username": "upbeat1811"
//     }
//     },
//     {
//     "id": 2,
//     "content": "Please use fun, color-coded labels to easily identify them at a glance",
//     "user": {
//     "image": "https://raw.githubusercontent.com/mukhammadyn/product-images/main/user-images/image-thomas.jpg",
//     "name": "Thomas Hood",
//     "username": "brawnybrave"
//     }
//     }
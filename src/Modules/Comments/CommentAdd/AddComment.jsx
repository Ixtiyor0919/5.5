// import { useEffect } from 'react';
import './AddComment.css'

function AddComment({data}) {
    
    // const comments = [...data.comments]
    // const [datas, setData] = useState([])
    // console.log(datas);
    // useEffect(() => {
    //     fetch("http://localhost:3001/productRequests", {
    //         method: 'POST',
    //         headers: {
    //             "Content-type": "Application/json"
    //         },  
    //         body: JSON.stringify({
    //                     // "id": 1,
    //                     // "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
    //                     // "user": {
    //                     // "image": "https://raw.githubusercontent.com/mukhammadyn/product-images/main/user-images/image-suzanne.jpg",
    //                     // "name": "Suzanne Chang",
    //                     // "username": "upbeat1811"}}
    //                     "id": 6,
    //                         "title": "Preview images not loading",
    //                         "category": "bug",
    //                         "upvotes": 3,
    //                         "isUpvoted": false,
    //                         "status": "suggestion",
    //                         "description": "Challenge preview images are missing when you apply a filter.",
    //     })
    //     }, [])
    // })
    // function hangleFunction() {
    //     return 
    // }
    return(
        <>
            <div className='AddComment-wrapper'>
                <form>
                    <h3 className='add-comment-title'>Add Comment</h3>
                    <label className='add-comment-label'>
                        <input className='add-comment-input' type="text" placeholder='Type your comment here'/>
                    </label>
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
//     },
//     {
//     "id": 6,
//     "content": "I also want to be notified"
//     }
//     ]
//     }
// import CommentItem from "../Comments-item/CommentItem";
// import { useState, useEffect } from "react";
// function CommentList() {

//     const [data, setData] = useState([])
//     useEffect(() => {
//         fetch('http://localhost:3001/productRequests')
//                 .then(response => response.json())
//                 .then(data => setData(data))
//             }, [])
//     return(
//         <>
//             <ul className="Comment-list"> 
//             {
//                 current.comments.map(item => <CommentItem key={CardItem.id} id={item.id} name={item.user.name} img={item.user.image} content={item.content} username={item.user.username} comments={item.length}/>)
//             }
            
//             </ul>
//         </>
//     )
// }

// export default CommentList;
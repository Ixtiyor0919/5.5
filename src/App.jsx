// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Comments from './Modules/Comments/CommentsWrapper';
import Wrapper from './Modules/Container-wrapper/wrapper'
import NewFeedback from './Modules/AddFeddback/NewFeedback';
import EditFeedback from './Modules/EditFeedback/EditFeedback';

function App() {
  const [data, setData] = useState([])
  const API = "http://localhost:3001/productRequests";

async function fetchAPI(options = {
    url: "",
    headers: {},
    method: "GET",
    body: undefined
}) {
    try {
        const response = await fetch(options.url, {
            method: options.method,
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(options.body)
        })
        const result = await response.json()
        if (response.status >= 300) throw new Error(result);
        return result
    }catch (err) {
        alert(err)
    }
}

async function newFeedback({title, category, upvotes, description, comments, id}) {
  const result = await fetchAPI({
      url: `${API}`,
      method: "POST",
      body: {
        id,
        title,
        category,
        upvotes,
        description,
        comments: [],
      }
  })
  return result
}

async function deleteFeedbacks(id) {
  const result = await fetchAPI({
      url: `${API}/${id}`,
      method: "DELETE"
  })
  return result
}

async function updateFeedback({id, title, category, description}) {
  const result = await fetchAPI({
      url: `${API}/${id}`,
      method: "PATCH",
      body: {
          title, 
          category,
          description,
      }
  })
  return result
}

async function addComment({id, comments, newData }) {
  const result = await fetchAPI({
      url: `${API}/${id}`,
      method: "PATCH",
      body: {
        comments: [...comments, newData,]
      }
    })
  return result
}

// async function upvotesFeedback({id, comment}) {
//   const result = await fetchAPI({
//       url: `${API}${id}`,
//       method: "PATCH",
//       // body: {comments: {
//       //     [...comments, {comment}]
//       // }
//   })
//   return result
// }

useEffect(() => {
  fetch('http://localhost:3001/productRequests')
          .then(response => response.json())
          .then(data => setData(data))
      }, [])

      // useEffect(() => {
      //   fetch('http://localhost:3001/productRequests/88', {e
      //     method: 'Delete',
      //   })
      //           .then(response => response.json())
      //           .then(data => console.log(data))
      //       }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<Wrapper/>} />  
        <Route path='/Comments-:id/' element={<Comments data={data} addComment={addComment} /> } />
        <Route path='/NewFeedback' element={<NewFeedback setData={setData} data={data} newFeedback={newFeedback}/>}/>
        <Route path='/EditFeedback-:id/' element={<EditFeedback deleteFeedbacks={deleteFeedbacks} updateFeedback={updateFeedback} data={data} />} />
      </Routes>
    </>
  );
}

export default App;
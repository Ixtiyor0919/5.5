// import logo from './logo.svg';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import Comments from './Modules/Comments/CommentsWrapper';
import Wrapper from './Modules/Container-wrapper/wrapper'
import NewFeedback from './Modules/AddFeddback/NewFeedback';
import EditFeedback from './Modules/EditFeedback/EditFeedback';

function App() {
  const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/productRequests')
                .then(response => response.json())
                .then(data => setData(data))
            }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<Wrapper/>} />  
        <Route path='/Comments:id/' element={<Comments data={data}/> } />
        <Route path='/NewFeedback' element={<NewFeedback />}/>
        <Route path='/EditFeedback' element={<EditFeedback />}/>
      </Routes>
    </>
  );
}

export default App;
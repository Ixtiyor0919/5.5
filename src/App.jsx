// import logo from './logo.svg';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import CommentItem from './Components/Comments/Comments-item/Comments-item';
import Comments from './Components/Comments/CommentsWrapper';
import Wrapper from './Components/Container-wrapper/wrapper';

function App() {
  const [todos,setTodos] = useState([])

  return (
    <>
      <Routes>
        <Route path='/' element={<Wrapper setTodos={setTodos} />} />  
        <Route path='/Comments/:id' element={<Comments todos={todos}/>} />
        <Route path="*" element={<CommentItem todos={todos} />} />
      </Routes>
    </>
  );
}

export default App;

import './App.css';
import { Routes,Route, } from 'react-router-dom';
import Home from './Pages/Home';

import Learning from './Pages/Learning'
import Login from "./Pages/Login"
import Battle from './Pages/Battle';
import MazeRunner from './Pages/MazeRunner';
import Quiz from './Pages/Quiz'
import User from './Pages/UserPage'

function App() {
  return (
   <div className='bg-gray-300 h-100%'>
    
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/learn' element={<Learning/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/battle' element={<Battle/>} />
        <Route path='/maze' element={<MazeRunner/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
   
   </div>
  );
}

export default App;

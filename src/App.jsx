import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Content } from '../components/content';
import { Test } from '../components/test1';


function App() {

  console.log(import.meta.env.VITE_SERVER_URL);
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Test/>}></Route>
      <Route path="/display/:id" element={<Content/>}></Route>
    </Routes>
  </BrowserRouter>

  )
}

export default App

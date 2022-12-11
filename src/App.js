import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Project from './Components/Project/Project';
import Experience from './Components/Experience/Experience';
import Navbar from './Components/Navbar/Navbar';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Slkills';
import Footer from './Components/Footer/Footer';
import Errorpage from './Components/Errorpage/Errorpage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>

          <Route path='/'  element={<Home/>} />
          <Route path='/skill'  element={<Skills/>} />
          <Route path='/project'  element={<Project/>} />
          <Route path='/education'  element={<Education/>} />
          <Route path='/experience'  element={<Experience/>} />
          <Route path='*' element={<Errorpage/>} />

        </Routes>
<Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import Home from './components/Home';
import Student from './components/Student';
import Login from './components/Login';
import Registor from './components/Registor';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App({name}) {
  return (
    
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Student' element={<Student/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    
  );
}

export default App;

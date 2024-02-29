import './App.css';
import Header from './components/Header';
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import Home from './components/Home';
import Student from './components/Student';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Register from './components/Register';
import Profile from './components/Profile';
import Editprofile from './components/Editprofile';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Transfer from './components/Transfer';
function App({name}) {
  return (
    
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Student' element={<Student/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Editprofile' element={<Editprofile/>}></Route>
        <Route path='/Deposit' element={<Deposit/>}></Route>
        <Route path='/Withdraw' element={<Withdraw/>}></Route>
        <Route path='/Transfer' element={<Transfer/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    
  );
}

export default App;

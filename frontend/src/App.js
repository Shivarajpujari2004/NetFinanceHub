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
import Login2 from './components/Login2';
import Register2 from './components/Register2';
import Student2 from './components/Student2';
import Profile2 from './components/Profile2';
import Deposit2 from './components/Deposit2';
import Withdraw2 from './components/Withdraw2';
import Scholarship from './components/Scholarship';
function App({name}) {
  return (
    
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Student' element={<Student/>}></Route>
        <Route path='/Student2' element={<Student2/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Login2' element={<Login2/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Register2' element={<Register2/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Profile2' element={<Profile2/>}></Route>
        <Route path='/Editprofile' element={<Editprofile/>}></Route>
        <Route path='/Deposit' element={<Deposit/>}></Route>
        <Route path='/Withdraw' element={<Withdraw/>}></Route>
        <Route path='/Transfer' element={<Transfer/>}></Route>
        <Route path='/Deposit2' element={<Deposit2/>}></Route>
        <Route path='/Profile2' element={<Profile2/>}></Route>
        <Route path='/Withdraw2' element={<Withdraw2/>}></Route>
        <Route path='/Scholarship' element={<Scholarship/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    
  );
}

export default App;


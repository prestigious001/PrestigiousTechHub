import './App.css';
import React from 'react';
import NavBar from './Component/NavBar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Footer from './Pages/Footer';
import Testimonials from './Pages/Testimonials';


export default function App() {
  
  return (
    <>
   
     <Router>
      <NavBar />
      <Routes>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/blog' element = {<Blog/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        < Route path='/testimonials' element= {<Testimonials/>}/>

      </Routes> 
     </Router>
     <Footer/>
    </>
  )
}










// import React from 'react';
// import 

// function App() {
//   return (
//     <>
     
//     </>
//   );
// }

// export default App;

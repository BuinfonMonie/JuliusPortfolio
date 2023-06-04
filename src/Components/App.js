import './Ap.css';
import React from 'react'
import './index.css'; 
import './App.css'
import Header from './Components/header/header'
import Contact from './Components/contact/contact' 
import Navbar from './Components/navbar/Navbar';
import About from './Components/about/About'
import Experience from './Components/experience/Experience';
import Services from './Components/service/Service';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonial from './Components/testimonial/Testimonial';
import Footer from './Components/footer/Footer';

function App() { 
  return ( 
  <>
     < Header/>
     <Navbar/>
     <About/>
     <Experience/>
     <Services/> 
     <Portfolio/>
     <Testimonial/>
     <Contact/>
     <Footer/>    
       

   </>
);
}
export default App;
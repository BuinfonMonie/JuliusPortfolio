import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './componenets/experience/Experience'
import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App(){
    return(
    <>
        <Header/>
        <Navbar/>
        <About/>
        <Experience/>
        <Service/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </>
    )
 }
import React from "react"
export const App = () =>{
return(
    <div>
        App
    </div>
)
}
export default App; //always export the componentas defaults

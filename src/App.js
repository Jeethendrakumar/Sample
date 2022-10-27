import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './components/home'
import MainNavBar from './components/mainNav'
import Product from './components/products/products'
import Footer from './components/footer'
import Service from './components/services/services'
import About from './components/about/about'
import Login from './components/login/login'
import Contact from './components/contactUs/contact'
import Status from './components/contactUs/status/status'
import SpeedCheck from './components/contactUs/troubleshoot/speedCheck'

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <MainNavBar/>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/products' element={<Product />} />
                        <Route exact path='/services' element={<Service />}/>
                        <Route exact path='/about' element={<About />} />
                        <Route exact path='/login' element={<Login />} />
                        <Route path='/contact/' element={<Contact />}> 
                            <Route path='support' element={<Status/>}/>
                            <Route path='configure' element={<SpeedCheck/>}/>
                        </Route>
                    </Routes>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App

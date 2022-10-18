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
                    </Routes>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App

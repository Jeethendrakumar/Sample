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


class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <MainNavBar/>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/products' element={<Product />} />
                    </Routes>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App

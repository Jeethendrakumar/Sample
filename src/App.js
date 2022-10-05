import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './components/home'
import MainNavBar from './components/mainNav'


class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<MainNavBar/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App

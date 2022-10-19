import React from 'react'
import { Form } from 'react-router-dom';

class Login extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            username : '',
            password: ''
        }
    }
    handleClick = (e) => {
        console.log(e.target.username.value)
        e.preventDefault()
        alert('onSubmit')
    }
    render()
    {
        return <>
        <form onSubmit={e => this.handleClick(e)}>
        <input type={'text'} name='username' id='username' /><br />
        <input type={'password'} name='password' id='password'/><br/>
        <button>Click me</button>
        </form>
        </>
    }
}

export default Login
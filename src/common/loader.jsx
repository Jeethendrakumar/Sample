import React from 'react'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Loader extends React.Component{
    render(){
        return <>
        <FontAwesomeIcon icon={faCircleNotch} spin/><span>Loading...</span></>
    }
}

export default Loader
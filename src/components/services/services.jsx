import React from 'react'
import fetchApi from '../../actions/index'
import {connect} from 'react-redux'

class Services extends React.Component{
    componentDidMount(){
        this.props.fetchApi()
    }
    render(){
        return <div className='content-wrapper'>{this.props.posts.map(items => {
            return <li key={items.id}>
                {items.title}</li>
        })}</div>
    }
}

const mapStateToProps =(state) => {
     return {posts : state.posts}
}

export default connect(mapStateToProps, {fetchApi}) (Services)
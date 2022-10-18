import React from 'react'
import { fetchApi , changePage } from '../../actions/index'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {CardItem} from '../../common/card'
import Loader from '../../common/loader'
import ServiceGrid from '../services/serviceGrid'

class Services extends React.Component{
    componentDidMount(){
        this.props.fetchApi()
    }
    render(){
        let {posts} = this.props
        let {fetched} = posts
        let content
        if(fetched)
        {   
            content = <ServiceGrid />
        }
        else{
            content = <Loader />
        }
        return <> {content} </>
    }
}

const mapStateToProps =(state) => {
     return {posts : state.posts}
}

Services.propTypes ={
    posts: PropTypes.object,
    changePage: PropTypes.func
}


export default connect(mapStateToProps, {fetchApi, changePage}) (Services)
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
        let {services} = this.props
        let {fetched} = services
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
     return {services : state.services}
}

Services.propTypes ={
    services: PropTypes.object,
    changePage: PropTypes.func
}


export default connect(mapStateToProps, {fetchApi, changePage}) (Services)
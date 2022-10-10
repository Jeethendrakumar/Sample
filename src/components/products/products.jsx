import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faMobile, faStopwatch, faPen, faHeadphones, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import Card, {CardItem} from '../../common/card'
import Column from '../../common/column'
import fetchApi from '../../actions/index'
import {connect} from 'react-redux'

const products = [{
    desktop: {
        title: 'COMPUTER',
        label: faDesktop,
        desc : "Model: HP Price: $500 Color: Black"
    },
    mobile : {
        title: 'MOBILE',
        label: faMobile,
        desc : 'Model: HP Price: $500 Color: Black'
    },
    watch : {
        title: 'WATCH',
        label: faStopwatch,
        desc : 'Model: HP Price: $500 Color: Black'
    },
    pen : {
        title: 'PEN',
        label: faPen,
        desc : 'Model: HP\tPrice: $500 Color: Black'
    } ,
    headphones : {
        title: 'HEADPHONES',
        label: faHeadphones,
        desc : 'Model: HP Price: $500 Color: Black'
    },
    speaker : {
        title: 'SPEAKER',
        label: faVolumeHigh,
        desc : 'Model: HP Price: $500 Color: Black'
    }    
}]

class Products extends React.Component{
    componentDidMount(){
        this.props.fetchApi();
    }
    render(){
        return <CardItem item={'body'}>
        <div className='d-flex justify-content-center'>
            <div className='row'>
            {products.map(items => {
                return (Object.values(items).map(item => {
                   return <Column span={4} key={item.title}>
                <Card>
                    <CardItem item={'header'}>
                        <strong>{item.title}</strong>
                    </CardItem>
                    <CardItem item={'body'}>
                        <center>
                        <FontAwesomeIcon icon={item.label} size='5x'/>
                        </center>
                    </CardItem>
                    <CardItem item={'footer'}>
                        {item.desc}
                    </CardItem>
                </Card>
            </Column>
                }))
            })}            
            </div>
        </div>
        </CardItem>
    }
}
const mapStateToProps =(state) => {
     return  {posts : state.posts}
}
export default connect(mapStateToProps, {fetchApi}) (Products);
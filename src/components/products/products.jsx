import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faMobile, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import Card, {CardItem} from '../../common/card'
import Column from '../../common/column'

const products = [{
    desktop: {
        title: 'COMPUTER',
        label: faDesktop,
        desc : "Model: HP Price: $500"
    },
    mobile : {
        title: 'MOBILE',
        label: faMobile,
        desc : 'Model'
    },
    watch : {
        title: 'WATCH',
        label: faStopwatch,
        desc : 'Model'
    } 
}]

class Products extends React.Component{
    render(){
        return <CardItem item={'body'}>
        <div className='d-flex justify-content-center'>
            {products.map(items => {
                return (Object.values(items).map(item => {
                   return <Column span={3} key={item.title}>
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
        </CardItem>
    }
}

export default Products
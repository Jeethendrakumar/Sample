import React from 'react'
import fetchApi from '../../actions/index'
import {connect} from 'react-redux'
import Column from '../../common/column'
import Card, {CardItem} from '../../common/card'

class Services extends React.Component{
    componentDidMount(){
        this.props.fetchApi()
    }
    render(){
        return <CardItem item='body'>
            <div className='row'>
            {this.props.posts.map(items => {
                return <Column span={2} key={items.it}>
                    <Card>
                        <CardItem item={'body'}>
                        {items.email}
                        </CardItem>
                    </Card>
                    </Column>
            })}
            </div>
        </CardItem>
    }
}

const mapStateToProps =(state) => {
     return {posts : state.posts}
}

export default connect(mapStateToProps, {fetchApi}) (Services)
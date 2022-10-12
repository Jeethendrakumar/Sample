import React from 'react'
import fetchApi from '../../actions/index'
import {connect} from 'react-redux'
import Column from '../../common/column'
import Card, {CardItem} from '../../common/card'
import Loader from '../../common/loader'

class Services extends React.Component{
    componentDidMount(){
        this.props.fetchApi()
    }
    render(){
        let {fetched} = this.props.posts
        let content
        if(fetched)
        {   
            let {payload} = this.props.posts
            content = payload.map(items => {
                return <Column span={3} key={items.id}>
                    <Card>
                        <CardItem item='body'>
                            {items.name}
                        </CardItem>
                    </Card>
                </Column>
            })
        }
        else{
            content = <Loader />
        }
        return <CardItem item='body'>
            <div className='row'>
                {content}
            </div>
        </CardItem>
    }
}

const mapStateToProps =(state) => {
     return {posts : state.posts}
}

export default connect(mapStateToProps, {fetchApi}) (Services)
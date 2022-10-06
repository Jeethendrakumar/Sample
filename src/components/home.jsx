import React from 'react'
import Card,{CardItem} from '../common/card'
import Colum from '../common/column'


const brandItems = [{
    ui: {
        title: 'UI/UX',
        label: 'User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience.'
    },
    illustration : {
        title: 'ILLUSTRATION',
        label: 'An illustration is a decoration, interpretation or visual explanation of a text, concept or process, designed for integration in print and digital published media, such as posters, flyers, magazines, books, teaching materials, animations, video games and films.'
    },
    branding : {
        title: 'BRANDING',
        label: 'A brand is a name, term, design, symbol or any other feature that distinguishes one sellers good or service from those of other sellers. Brands are used in business, marketing, and advertising for recognition and, importantly, to create and store value.'
    } 
}]

const Home = () => {
    return <>
    <CardItem item={'body'}>
        <div className='d-flex justify-content-center' style={{fontSize:'50px'}}>
            What Makes Us Different
        </div>
        <div className='d-flex justify-content-center' style={{fontSize:'20px'}}>
            Learn how to develop a website
        </div>
        <br />
        <div className='d-flex justify-content-center'>
            {brandItems.map(items => {
                return (Object.values(items).map(item => {
                   return <Colum span={3} key={item.title}>
                <Card>
                    <CardItem item={'header'}>
                        <strong>{item.title}</strong>
                    </CardItem>
                    <CardItem item={'body'}>
                        {item.label}
                    </CardItem>
                    <CardItem item={'footer'}>
                        <button className='btn btn-info'>More...</button>
                    </CardItem>
                </Card>
            </Colum>
                }))
            })}
        </div>
    </CardItem>
    </>
}

export default Home
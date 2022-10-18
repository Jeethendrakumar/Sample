import React, { Component } from 'react';
import Column from '../../common/column';
import { CardItem } from '../../common/card';

class About extends Component {

    render() {
        return (
            <CardItem item='body'>
                <div className='row'>
                    <Column span={6}>
                        <div>
                            <h1>About Us</h1>
                            <p>User interface (UI) design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience. In computer or software design, user interface (UI) design primarily focuses on information architecture. It is the process of building interfaces that clearly communicates to the user what's important. UI design refers to graphical user interfaces and other forms of interface design. The goal of user interface design is to make the user's interaction as simple and efficient as possible, in terms of accomplishing user goals (user-centered design).</p>
                        </div>
                    </Column>
                    <Column span={6}>
                        <center>
                            <div className="brand-link">
                                <img
                                    src="static/img/istockphoto-1266703967-612x612.jpg"
                                    alt="Logo1"
                                    height={400}
                                    width={500}
                                />
                            </div>
                        </center>
                    </Column>
                </div>
            </CardItem>
        );
    }
}

About.propTypes = {};

export default About;
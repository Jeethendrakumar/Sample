import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom'

const menu = [
    {
        platform: {
            link: '/',
            label: 'Home'
        }
    },
    {
        pricing: {
            link: '/products',
            label: 'Products'
        }
    },
    {
        resourses: {
            link: '/services',
            label: 'Services'
        }
    },
    {
        acceleration: {
            link: '/about',
            label: 'About Us'
        }
    }
];

const getMenu = () => {
    return menu.map(items => (
        (Object.values(items).map(item => {
            return <li key={item.label} className="navbar-expand-lg">
                <NavLink exact to={item.link} className="nav-link thicker" style={{marginLeft:'30px',marginRight:'30px'}}>
                    {item.label}
                </NavLink>
            </li>
        }))
    ))
}
class MainNavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand bg-secondary navbar-light border-bottom">
                <div className="brand-link">
                    <img
                        src='static/img/Alpha-designstyle-smoothie-m.png'
                        alt="custom logo"
                        height="50"
                        weight='00px'
                        
                    />
                </div>
                <ul className="navbar-nav ml-auto">
                    {getMenu()}
                </ul>
                <ul className="navbar-nav ml-auto">
                    <div className='nav-item'>
                        <Link className="btn btn-outline-info" to='/contact'>
                            CONTACT US
                        </Link>
                        {'  '}
                        <button type="button" className="btn text-white btn-pink">
                            TRY FOR FREE
                        </button>
                    </div>
                </ul>
            </nav>
        );
    }
}

MainNavBar.propTypes = {};


export default (MainNavBar);
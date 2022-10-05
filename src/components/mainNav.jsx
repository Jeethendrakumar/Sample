import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
            return <li key={item.label} className="nav-item d-none d-sm-inline-block">
                <NavLink exact to={item.link} className="nav-link thicker">
                    {item.label}
                </NavLink>
            </li>
        }))
    ))
}
class MainNavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand bg-white navbar-light border-bottom">
                <div className="brand-link">
                    <img
                        src='static/img/Alpha-designstyle-smoothie-m.png'
                        alt="Klenty Logo"
                        height="50"
                        weight='100px'
                        
                    />
                </div>
                <ul className="navbar-nav ml-auto">
                    {getMenu()}
                </ul>
                <ul className="navbar-nav ml-auto">
                    <div className='nav-item'>
                        <button type="button" className="btn btn-outline-dark">
                            CONTACT US
                        </button>
                        {'  '}
                        <button type="button" className="btn btn-primary">
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
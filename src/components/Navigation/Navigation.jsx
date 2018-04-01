import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { NavItem, NavContainer } from './Navigation.styles';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavItem to={'/'}>Homepage</NavItem>
                    </li>
                    <li>
                        <Link to={'/landing'}>Landing</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;
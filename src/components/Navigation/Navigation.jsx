import React, {Component} from 'react';

import {NavItem, NavContainer} from './Navigation.styles';

class Navigation extends Component {
    render() {
        return (
            <NavContainer>
                <NavItem to={'/'}>Homepage</NavItem>
                <NavItem to={'/landing'}>Landing</NavItem>
            </NavContainer>
        );
    }
}

export default Navigation;
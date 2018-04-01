import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={'/'}>Homepage</Link>
                    </li>
                    <li>
                        <Link to={'/landing'}>Landing</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Menu from '../../components/Menu/Menu';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Helmet
                    title="Welcome to our Homepage"
                />
                <Menu />
                <h1>Homepage</h1>
            </div>
        );
    }
}

export default Homepage;
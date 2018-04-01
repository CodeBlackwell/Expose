import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Menu from '../../components/Menu/Menu';

class Landing extends Component {
    render() {
        return (
            <div>
                <Helmet
                    title="About us"
                />
                <Menu />
                <h1>Landing</h1>
            </div>
        );
    }
}

export default Landing;
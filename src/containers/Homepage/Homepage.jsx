import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

import Navigation from '../../components/Navigation/Navigation';
import {Title} from '../../theme/types';
import {Container} from '../../theme/grid';

class Homepage extends Component {
    render() {
        return (
            <Container>
                <Helmet
                    title="Welcome to our Homepage"
                />
                <Title>Homepage</Title>
            </Container>
        );
    }
}

export default Homepage;
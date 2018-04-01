import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Navigation from '../../components/Navigation/Navigation';
import { Title } from '../../theme/types';
import { Container } from '../../theme/grid';

class Landing extends Component {
    render() {
        return (
            <Container>
                <Helmet
                    title="Landing"
                />
                <Title>Landing</Title>
                <Navigation />
            </Container>
        );
    }
}

export default Landing;
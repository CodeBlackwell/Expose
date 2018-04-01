import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import { connect } from 'react-redux';

import { KEY as APPLICATION_KEY } from '../../constants/appConstants';

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

const mapStateToProps = function(state) {
    return {
        profiles: state.getIn([APPLICATION_KEY], 'profiles')
    }
};

export default connect(mapStateToProps)(Homepage);
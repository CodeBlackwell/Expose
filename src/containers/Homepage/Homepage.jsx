import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import { connect } from 'react-redux';

import { KEY as APPLICATION_KEY } from '../../constants/appConstants';

import {H1, H2} from '../../theme/types';
import {Container, Relative} from '../../theme/grid';
import {DiverImage} from './Homepage.styles';
import { mapFromImmutable } from '../../utils';


class Homepage extends Component {
    render() {
        const profiles = mapFromImmutable(this.props.profiles);
        return (
            <Container display="inline">
                <Helmet
                    title="Welcome to our Homepage"
                />
                <DiverImage justify="center">
                    <Relative align="center">
                        <H1 align="center">Pizza</H1>
                        <H2 align="center">Anywhere</H2>
                    </Relative>
                </DiverImage>
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
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import { connect } from 'react-redux';


import { KEY as APPLICATION_KEY } from '../../constants/appConstants';

import {H1, H2} from '../../theme/types';
import {Container, Relative} from '../../theme/grid';
import {DiverImage} from './Homepage.styles';

import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
import ForceGraph from '../../components/ForceGraph/ForceGraph';



class Homepage extends Component {
    constructor(props){
        super(props);

        this.state = { nodes: 200 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        const { nodes } = this.state;
        return (
                <Container display="inline">
                    <Helmet
                        title="The Home of Unbelievable Pizza"
                    />
                    <DiverImage justify="center">
                        <Relative align="center">
                            <H1 align="center">Unbelievable Pizza</H1>
                            <br/>
                            <H2 align="center">
                                ..Nothing more to Say
                            </H2>
                        </Relative>
                    </DiverImage>
                    <Relative>
                        <ForceGraph numberOfNodes={nodes} width={1000} height={500} />

                    </Relative>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Pick a number!
                                <input type="number" value={this.state.nodes} onChange={this.handleChange}/>
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                    <Testimonials/>
                    <Footer/>
                </Container>
        );
    }

    handleChange(event) {
        this.setState({nodes: event.target.value});
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }
}

const mapStateToProps = function(state) {
    return {
        profiles: state.getIn([APPLICATION_KEY], 'profiles')
    }
};

export default connect(mapStateToProps)(Homepage);
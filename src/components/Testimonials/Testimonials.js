import React, { Component } from 'react';

import Testimonial from './Testimony';
import { Flex } from '../../theme/grid';
// Images
import MostInteresting from '../../assets/ManinTheworld.jpg';
import Data from '../../assets/Data.jpg';
import Kanye from '../../assets/Kanye.jpg';

class Testimonials extends Component {

    constructor(props){
        super(props);

        this._renderTestimonials = this._renderTestimonials.bind(this);
    }

    _renderTestimonials(testimonials) {
        return testimonials.map((testimonial, index) => {
            const { testimony, image } = testimonial;
            return (
                <Testimonial key={index} image={image} testimony={testimony} />
            )
        })
    }

    render(){

        const testimonials = [
            {
                image: MostInteresting,
                testimony: " \"I don't usually eat pizza but when I do..." +
                "it's Unbelievable. \""
            },
            {
                image: Data,
                testimony: "\"By all logic, this pizza is statistically Unbelievable..\""
            },
            {
                image: Kanye,
                testimony: "\"I'ma let you finish but, this pizza is Unbelievable!\""
            }
        ];
        return (
            <Flex justify="space-around">
                {this._renderTestimonials(testimonials)}
            </Flex>
        )
    }
}

export default Testimonials;
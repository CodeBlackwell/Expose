import React from 'react';
import { Testimony } from './Testimony.style';
import Img from 'react-image';

const Testimonial = ({testimony, image, key}) => {
    return (
        <Testimony key={key} align="center">
            <Img src={image} height="300px" width="300px"/>
            <h3>{testimony}</h3>
        </Testimony>
    )
};

export default Testimonial;
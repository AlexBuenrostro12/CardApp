import React from 'react';
import './CardItems.css';

const Image = (props) => (
    <img 
        className="Image"
        alt={props.alt}
        src={props.image} />
);    

export default Image;
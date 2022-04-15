import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Experts.css'


const Experts = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='experts-container'>
            <div>
                <img src={img} alt="" />
                <h2>{name}</h2>
            </div>
        </div>

    );
};

export default Experts;
import React from 'react';

const Footer = () => {

    let currentDate = new Date();
    let year = currentDate.getFullYear();
    ;

    return (
        <footer className='text-primary text-center'>
            <p><small>copyright@{year}</small></p>
        </footer>
    );
};

export default Footer;
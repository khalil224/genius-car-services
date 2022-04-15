import React from 'react';


import expert1 from '../../../images/expert-1.jpg';
import expert2 from '../../../images/expert-2.jpg';
import expert3 from '../../../images/expert-3.jpg';
import expert4 from '../../../images/expert-4.jpg';
import expert5 from '../../../images/expert-5.jpg';
import expert6 from '../../../images/expert-6.png';
import Experts from '../Experts/Experts';

const experts = [
    { id: 1, name: 'will smith', img: expert1 },
    { id: 2, name: 'dill smith', img: expert2 },
    { id: 3, name: 'fill smith', img: expert3 },
    { id: 4, name: 'dwen smith', img: expert4 },
    { id: 5, name: 'bravo smith', img: expert5 },
    { id: 6, name: 'karvo smith', img: expert6 }
]

const Expert = () => {
    return (
        <div id='expert' className='container'>
            <h2 className='text-primary text-center'>Our Experts</h2>
            <div>
                {
                    experts.map(expert => <Experts key={expert.id} expert={expert}></Experts>)
                }
            </div>
        </div>
    );
};

export default Expert;
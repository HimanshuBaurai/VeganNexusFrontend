// import React from 'react';
// import './Inspire.scss'
// import foodie from '../../assets/foodie.jpeg'
// import moody from '../../assets/moody.jpeg'

// const Inspire = () => {
//     return (
//         <div id="inspire">
//             <h1>WHAT ARE YOU WAITING FOR?</h1>
//             <div className="elem">
//                 <h2>FOODIE</h2>
//                 <img
//                     src={foodie}
//                     alt=""
//                 />
//             </div>
//             <div className="elem">
//                 <h2>MOODY</h2>
//                 <img
//                     src={moody}
//                     alt=""
//                 />
//             </div>
//         </div>
//     );
// };

// export default Inspire;

import React from 'react';
import './Inspire.scss'
import foodie from '../../assets/foodie.jpeg'
import moody from '../../assets/moody.jpeg'

const Inspire = () => {
    return (
        <div id="inspire">
            <div className="h1-wrapper">
                <h1>WHAT ARE YOU WAITING FOR?</h1>
            </div>
            <div className='elem-container'>
                <div className="elem">
                    <h2>FOODIE VEGAN</h2>
                    <img
                        src={foodie}
                        alt=""
                    />
                </div>
                <div className="elem">
                    <h2>MOODY VEGAN</h2>
                    <img
                        src={moody}
                        alt=""
                    />
                </div>
            </div>

        </div>
    );
};

export default Inspire;

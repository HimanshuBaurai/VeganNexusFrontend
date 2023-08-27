// import React from 'react';
// import './Footer.scss'
// import logo from '../../assets/logo.png'
// const Footer = () => {
//   return (
//     <div id="footer">
//       <img
//         src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg"
//         alt=""
//       />
//       <div id="f1">
//         <img
//           src={logo}
//           alt=""
//         />
//       </div>
//       <div id="f2">
//         <h3>TOPTRACER Ranges</h3>
//         <h3>Golf Lessons</h3>
//         <h3>Adventure Golf</h3>
//       </div>
//       <div id="f3">
//         <h3>coffee shop</h3>
//         <h3>LEAGUES</h3>
//         <h3>Contact us</h3>
//       </div> 
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import './Footer.scss'; // Import your CSS/SCSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact-section">
                <h3>Contact Me</h3>
                <div className="social-links">
                    <a href='https://github.com/HimanshuBaurai' target="_blank" rel="noopener noreferrer">
                    <img src={'./icons8-github-50.png'} alt="LinkedIn icon" />
                    </a>
                    <a href='https://www.linkedin.com/in/himanshu-baurai-283b4022a' target="_blank" rel="noopener noreferrer">
                    <img src={'./icons8-linkedin-100.png'} alt="LinkedIn icon" />
                    </a>
                    <a href='https://www.instagram.com/himanshu_baurai' target="_blank" rel="noopener noreferrer">
                    <img src={'./instagram.png'} alt="Instagram icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


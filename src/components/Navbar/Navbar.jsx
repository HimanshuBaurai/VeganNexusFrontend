import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.png'

// const Navbar = () => {
//     const [isMenuOpen, setMenuOpen] = useState(false);
//     const toggleMenu = () => {
//         setMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div id='nav' >
//             <img src={logo} alt='website logo' />
//             <a href='#'><h4>Recipes</h4></a>
//             <a href='#'><h4>Cooking Tips</h4></a>
//             <a href='#'><h4>Meal Plans</h4></a>
//             <a href='#'><h4>Health Benefits</h4></a>
//             <a href='#'><h4>Blog/Articles</h4></a>
//         </div>
//     )
// }

// export default Navbar

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="navbar">
            <div className="container">
                {/* <!-- Logo --> */}
                <h1 id="logo">
                    <a href="#"
                    >
                        <img src={logo} alt="My Logo" />
                    </a>
                </h1>
                {/* <!-- Navbar links --> */} 
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><a className="nav-link" href="#" onClick={toggleMenu}>Recipes</a></li>
                    <li><a className="nav-link" href="#" onClick={toggleMenu}>Cooking Tips</a></li>
                    <li><a className="nav-link" href="#" onClick={toggleMenu}>Meal Plans</a></li>
                    <li><a className="nav-link" href="#" onClick={toggleMenu}>Health Benefits</a></li>
                    <li><a className="nav-link" href="#" onClick={toggleMenu}>Blog/Articles</a></li>
                </ul>
                {/* <div class="hamburger"> */}
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
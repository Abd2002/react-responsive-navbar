import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);
    const closeClick = () => setclick(false);
    
    return (
        <nav className='navbar'>
            <div className="navbar-logo">
                <Link to='/' className='nav-link'>REACT <i class='fab fa-firstdraft' /></Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </div>
            <ul className={click ? 'navbar-link active' : 'navbar-link'}>
                <li><Link to='/' className='nav-link' onClick={closeClick}>Home</Link></li>
                <li><Link to='/about' className='nav-link' onClick={closeClick}>About</Link></li>
                <li><Link to='/service' className='nav-link' onClick={closeClick}>Service</Link></li>
                <li><Link to='/portfolio' className='nav-link' onClick={closeClick}>Portfolio</Link></li>
                <li><Link to='/contact' className='nav-link' onClick={closeClick}>Contact</Link></li>
            </ul>
        </nav >
    )
}

export default Navbar
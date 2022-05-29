import React from 'react'
import { useSelector } from 'react-redux';

function Navbar() {
    const state = useSelector((state) => state.cart);
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">Redux App</span>
                    <span className="navbar-brand mb-0 h1"><i className="fas fa-shopping-cart"></i> {state}</span>
                </div>
            </nav>
        </>
    )
}

export default Navbar
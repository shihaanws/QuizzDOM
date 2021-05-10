import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
    return (
        <div className="head">
            {/* <nav style={{height:7 }} className="navb">

            </nav> */}
            <Link to="/" className="title">🙋🏻‍♂️ QuizzDOM</Link>
            {/* <p className="tagline">Unlock your knowlege at the speed of light with QuizzDOM.</p> */}
            <div className="tagline">Unlock your knowlege at the speed of light with QuizzDOM.</div>

            {/* <hr className="divider"/> */}
        </div>
    )
}

export default Header

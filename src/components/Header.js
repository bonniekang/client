import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to="/">Stream</Link>
            <Link to="/">All Stream</Link>
        </div>
    )
}

export default Header;
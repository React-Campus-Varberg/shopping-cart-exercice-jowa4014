import React from 'react';

import Cart from './cart';
import ImgUrl from '../img/sherlock-holmes-147255_640.png';

function Header() {
    return (
        <div className="myFstClass">
            {/* TODO: Change the link */}
            <a href="http://localhost:9000/"><img src={ImgUrl} className="logo" alt="Logo of the store" /></a>
            <a href="#">Testing</a>
        </div>
    );
}

export default Header;
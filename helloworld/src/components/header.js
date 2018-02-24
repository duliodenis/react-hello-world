import React from 'react';

const getYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
}

const Header = () => {
    return <div>The year is {
        getYear()
    }</div>
} 

export default Header;
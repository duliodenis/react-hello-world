import React, { Component } from 'react';
import '../css/styles.css'

class Header extends Component {
    render() {
        // const styles = {
        //     header: {
        //         background: '#03a9f4'
        //     },
        //     logo: {
        //         color: '#fff',
        //         fontFamily: 'Anton',
        //         textAlign: 'center'
        //     }
        // }

        return (
            <header> 
                <div className="logo"> Logo </div>
                <input type="text"/>
            </header>
        )
    }
} 

export default Header;
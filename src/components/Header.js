import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div>
                    <span>Some logo</span>
                </div>
                <div className="container">
                    <nav>
                        <ul className="navlink">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
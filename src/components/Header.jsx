import { render } from '@testing-library/react';
import React, { Component } from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-container row m0">
                <div className="col-md-6">
                    <h3>LOGO</h3>
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>Home</li>
                        <li>My Portfolio</li>
                        <li>Clients</li>
                        <li>Get In Touch</li>
                    </ul>
                </div>
            </div>
        )
    }
}
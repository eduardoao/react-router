import React from 'react';
import '../assert/header.css';

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <h1 className='header bordertop'>Header {this.props.name}</h1>
            </header>
        );
    }

}

import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fantansy: 'Pen'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            fantansy: '!state.isToggleOn'
        }));
    }


    render() {
        return (
            <div>
                <h2>Home - {this.state.fantansy}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>

                <button className='btn btn-info' value='Update' onClick={this.handleClick}> Update </button>
            </div>

        );
    }
}

export default Home;
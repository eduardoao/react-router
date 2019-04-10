import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from './components/Header';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { id: "1", name: "Home", path: "/" },
                { id: "2", name: "About", path: "/About" },
                { id: "3", name: "Contact", path: "/Contact" }]
        }

        console.log(this.state.data);
    }

    render() {
        return (
            <div className='container'>
                <Header name='Marvel' />
                <HashRouter>
                    <div>
                        <nav >
                            <ul className="header">
                                {
                                    this.state.data.map((data => <li><NavLink exact to={data.path}>{data.name}</NavLink></li>))
                                }
                            </ul>
                        </nav>

                        <div className="content">
                            <Route exact path="/" component={Home} />
                            <Route path="/About" component={About} />
                            <Route path="/contact" component={Contact} />
                        </div>

                    </div>
                </HashRouter>
            </div>
        )
    }
}
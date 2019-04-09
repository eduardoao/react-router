import React from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default class Main extends React.Component {
    render(){
        return(
        //Renderizar o menu ... Pode ser criado um componente
       <HashRouter>
       <div>
           {/* Define os links na página  */}
            <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>           
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          <div className="content">
          {/* Renderiza o componente na tela */}
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/contact" component={Contact} />
          </div>

        </div>
        </HashRouter>
        )
    }
}
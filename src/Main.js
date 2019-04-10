import React from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default class Main extends React.Component {

constructor(props){
    super(props)
    this.state = { data: [
        {id: "1", name: "Home", path: "/" },
        {id: "2", name: "About", path: "/About" },
        {id: "3", name: "Contact", path: "/Contact" }] }

    console.log(this.state.data);
}

    render(){
        return(
        //Renderizar o menu ... Pode ser criado um componente
       <HashRouter>
       <div className='container-fluid'>
           {/* Define os links na página  */}
            {/* <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>           
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul> */}
          
          <ul className="header">
          {
            this.state.data.map((data =><li><NavLink exact to={data.path}>{data.name}</NavLink></li>))
          }
          </ul>

          <div className="content">
          {/* Renderiza o componente na tela */}
          
           {/* this.state.data.map(
               (data=> <Route exact path={data.path} component={data.name} /> )
            )     */}
               
          
           <Route exact path="/" component={Home} />
           <Route path="/About" component={About} />
           <Route path="/contact" component={Contact} /> 
         
          </div>

        </div>
        </HashRouter>
        )
    }
}
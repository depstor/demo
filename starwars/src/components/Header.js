import React, {Component} from 'react';
import logo from '../Star_wars.png';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <a href="#" className="logo">
                        <img src={logo} alt="logo"></img>
                    </a>
                    <nav className="links">
                        <ul>
                            <li>
                              <input className="menu__links" type="text" placeholder="search"></input>  
                            </li>
                            <li>
                              <input className="menu__links" type="button" value="search"></input>  
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
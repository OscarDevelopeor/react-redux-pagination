import React, { Component } from "react";
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min";
import "materialize-css/dist/css/materialize.min.css";

class SideNav extends Component {

    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

render() {
    return (
        <div className="container">
            <ul id="slide-out" className="sidenav sidenav-fixed">
            { this.props.routes.map( (route, key) =>( 
                        <li key={key}>
                            <Link to={route.path}>
                                <i className="material-icons">{route.icon}</i>{route.name}
                            </Link>
                        </li>
                ))
            }
            </ul>
        </div>
      )
}

}

export default SideNav;

import React from 'react';
import Items from './navbarItems';

const Header = () => {
  return (
        <div className="navbar-fixed z-depth-0">
            <nav className="white z-depth-0">
                <div className="nav-wrapper container">
                    <a data-target="slide-out" className="sidenav-trigger show-on-small"><i className="material-icons">menu</i></a>
{/*                     <a href="#!" className="brand-logo  hide-on-med-and-down" style={{'color': 'black'}}>Title of Project</a>
 */}                    <ul className="right">
                           { Items.map( item =>( 
                               <li 
                                key={item.id}>
                                <a><i style={ styles.iconNavbar }
                                className="material-icons">{item.icon}</i></a>
                               </li>
                            ))
                            }
                    </ul>
                </div>
            </nav>
        </div>
  )
}

const styles = {
    iconNavbar:{
        color: 'black'
    }
}

export default Header;

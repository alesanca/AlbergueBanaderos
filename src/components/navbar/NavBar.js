import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/images/logoAlbergue.PNG';
import { Nav , NavLink , Bars , NavMenu } from './NavBarElements';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={Logo} alt="Logo"></img>
                </NavLink>
            </Nav>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>About</NavLink>
            </NavMenu>
            <Bars />
            <NavMenu>
                <NavLink to="/prueba" activeStyle>Prueba</NavLink>
            </NavMenu>
        </>
    )
}

export default NavBar;
import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/images/logoAlbergue.PNG';
import { Nav , NavLink , Bars , NavMenu } from './NavBarElements';
import '../../assets/css/header.css'

const NavBar = () => {
    return (
        <div className="header">
            <Nav>
                <NavLink to="/">
                    <img src={Logo} alt="Logo"></img>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/el-albergue" activeStyle>El Albergue</NavLink>
                    <NavLink to="/nuestros-animales" activeStyle>Nuestros animales</NavLink>
                    <NavLink to="/faq" activeStyle>FAQ</NavLink>
                    <NavLink to="/lesgilacion" activeStyle>Legislación</NavLink>
                    <NavLink to="/contacto" activeStyle>Contacto</NavLink>
                    <NavLink to="/animales-perdidos" activeStyle>Animales perdidos</NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default NavBar;
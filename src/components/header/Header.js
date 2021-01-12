import React , {Component} from 'react';
import Logo from '../../assets/images/logoAlbergue.PNG';
import NavBar from '../navbar/NavBar';
import '../../assets/css/header.css';

class Header extends Component {

    render(){
        return ( 
            <div className="header">
                <img src={Logo}></img>
                <NavBar />
            </div>
        );
    }
}

export default Header; 
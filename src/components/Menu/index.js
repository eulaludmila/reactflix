import React from 'react';
import logo from '../../assets/img/logo.png';
import Button from '../Button';
import './menu.css';
import {Link} from 'react-router-dom';


const Menu = () => {
    return (
        <nav className="menu">
            <Link to="/">
                <img className="logo" src={logo} alt="Euflix" />
            </Link>
            <Button as={Link} className="buttonLink" to="/cadastro/video">
                Novo Vídeo
           </Button>
        </nav>
    )
}

export default Menu;;
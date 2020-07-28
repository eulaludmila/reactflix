import React from 'react';
import logo from '../../assets/img/logo.png';
import Button from '../Button';
import './menu.css';


const Menu = () => {
    return (
        <nav className="menu">
            <a href="/">
                <img className="logo" src={logo} alt="Euflix" />
            </a>
            <Button as="a" className="buttonLink" caminho="/">
                Novo Vídeo
           </Button>
        </nav>
    )
}

export default Menu;;
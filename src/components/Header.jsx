import React from 'react'
import Logo from '../assets/barbearia-logo.png'
import DarkMode from '../assets/moon.png'
import LightMode from '../assets/sun.png'
import { useState } from 'react'
import './Header.css'
import './Infos.css'
import App from '../App'

function Header() {
    // const modoLightTema = "modoLightTema";
    // const modoDarkTema = "modoDarkTema";
    
    // const [estiloAtualizado, setEstiloAtualizado] = useState(false);

    // const mudarTema = () => {
    //     setEstiloAtualizado(!estiloAtualizado);
    // }


  return (
    <header className={App.estiloAtualizado ? App.modoDarkTema : App.modoLightTema} >
        <img src={Logo} className='logo' alt="" />

        <div className='darkModeTema'>
            <button className='btnMudarTema' onClick={App.mudarTema}>
                <img src={DarkMode} className='imgDark' alt="" />
                Dark
            </button>
        </div>
    </header>
  )
}

export default Header
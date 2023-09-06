import React from "react";
import { useState } from 'react'
import Header from "./components/Header"
import Banner from "./components/Banner"
import Infos from "./components/Infos"
import Logo from './assets/barbearia-logo.png'
import DarkMode from './assets/moon.png'
import LightMode from './assets/sun.png'
import BannerImg from './assets/banner-barbearia.jpg'
import './App.css';


function App() {
    const infos = "infos"; 
    const modoLightTema = "modoLightTema";
    const modoDarkTema = "modoDarkTema";
    const modoDarkTemaTexto = "modoDarkTemaTexto";
    const modoLightTemaTexto = "modoLightTemaTexto";
    
    const [estiloAtualizado, setEstiloAtualizado] = useState(false);

    const mudarTema = () => {
        setEstiloAtualizado(!estiloAtualizado);
    }

  return (
    <div className={`corpo ${estiloAtualizado ? modoDarkTema : modoLightTema}`}>
      <header>
        <img src={Logo} className='logo' alt="" />

        <div className='darkModeTema'>
            <button className='btnMudarTema' onClick={mudarTema}>
                <img src={estiloAtualizado ? LightMode : DarkMode} className='imgDark' alt="" />
            </button>
        </div>
    </header>

    <img src={BannerImg} className='bannerImg' alt="" />

    <section className={`${estiloAtualizado ? modoDarkTema : modoLightTema} ${infos}`}>
        <h1 className={estiloAtualizado ? modoDarkTemaTexto : modoLightTemaTexto}>Bem-vindo a Barber Shop</h1>
        <h2 className={estiloAtualizado ? modoDarkTema : modoLightTema}>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas</h2>
        <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
        <p className='assinatura'>S. Kelly</p>
    </section>
    </div>
  )
}

export default App

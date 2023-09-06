import React from 'react'
import './Infos.css'
import Header from './Header'

function Infos() {
  return (
    <section className={`infos ${Header.estiloAtualizado ? Header.modoDarkTema : Header.modoLightTema}`}>
        <h1>Bem-vindo a Barber Shop</h1>
        <h2>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas</h2>
        <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
        <p className='assinatura'>S. Kelly</p>
    </section>
  )
}

export default Infos
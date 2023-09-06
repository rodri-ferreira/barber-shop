import React from 'react'
import './Banner.css'
import BannerImg from '../assets/banner-barbearia.jpg'

function Banner() {
  return (
    <img src={BannerImg} className='bannerImg' alt="" />
  )
}

export default Banner
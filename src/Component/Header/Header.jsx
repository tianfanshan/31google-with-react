import React from 'react'
import '../Header/Header.css'

const Header = () => {
  return (
    <div>
        <header>
            <div>
            <a href="https://about.google/?fg=1&utm_source=google-ES&utm_medium=referral&utm_campaign=hp-header">Sobre Google</a>
            <a href="https://store.google.com/ES?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=es-ES">Tienda</a>
            </div>
      <div>
        <a href="">Gmail</a>
        <a href="">Imágenes</a>
        <button className='loginButton'>Iniciar Sesión</button>
      </div>
        </header>
    </div>
  )
}

export default Header
import React from 'react'
import '../Home/Home.css'
import micro from '../../assets/microphone.svg'
import search from '../../assets/search.svg'

const Home = () => {
  return (
    <div className='google-container'>
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""/>
        <div className='input-container'>
            <img src={search} alt="" className="search-svg"/>
            <input type="text" name="" id=""/>
            <img src={micro}  alt="" className="micro"/>
        </div>
        <div className="buttons-container">
            <button>Buscar con Google</button>
            <button>Voy a tener suerte</button>
        </div>
        <div className="language-container">
            <span>Ofrecido por Google en:</span>
            <a href="">valencia</a>
            <a href="">galego</a>
            <a href="">euskara</a>   
        </div>
    </div>
  )
}

export default Home
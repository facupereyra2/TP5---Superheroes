import React from 'react'
import capitanAmerica from '../assets/capitanamerica.png'
import './styles/Card.css'
import { Link } from 'react-router-dom'

const Card = ({objPersonajes}) => {
  const {nombreSH, nombreReal, biografia, imgURL} = objPersonajes

  const URL = imgURL.split(',')
  let img = URL[0] ? URL[0] : imgURL;
  if (imgURL.length > 1) {
    img = URL[0] ? URL[0] : imgURL;
  }

  return (
    <div className="cardbody">
      <Link to = {`/detail/${nombreSH}`}>

        <div className='card'>
            
            <h3>{nombreSH}</h3>
            <img src={img} alt="Capitan America" />
            <h4>{nombreReal}</h4>
            <p>{biografia}</p>
        </div>

      </Link>
    </div>
  )
}

export default Card
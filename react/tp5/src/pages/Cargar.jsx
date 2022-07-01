import React, {useState} from 'react'
import Modal from '../components/Modal'
import NavBar from '../components/NavBar'
import './styles/Cargar.css'

const Cargar = () => {

const [modal, setModal] = useState(false)

const [personaje, setPersonaje] = useState({
    nombrereal: '',
    nombresh: '',
    casa: '',
    año: '',
    equipamiento: '',
    biografia: '',
    imgURL: '',
})

const handleChange = (e) =>{
    setPersonaje({ ...personaje, [e.target.name]: e.target.value });
}

const Cargar = async() =>{
    const res = await fetch('http://localhost:6060/cargar',
    {
        method: 'POST',
        body: JSON.stringify(personaje),
        headers: {"Content-Type": "application/json"}
    })
    const data = await res.json();
    setModal(true)

}

  return (
    <div>
        <NavBar/>
        <div className="title">
            <h2>Agregar Personaje</h2>
        </div>

        <div className="inputs">
            <h3>Ingrese los datos correspondientes</h3>
            <input type="text" name = "nombresh" onChange= {handleChange} placeholder='Nombre personaje' />
            <input type="text" name = "nombrereal" onChange= {handleChange} placeholder='Nombre real' />
            <input type="text" name = "año" onChange= {handleChange} placeholder='Año de aparación' />
            <input type="text" name = "casa" onChange= {handleChange} placeholder='Casa' />
            <input type="text" name = "equipamiento" onChange= {handleChange} placeholder='Equipamiento' />
            <input type="text" name = "biografia" onChange= {handleChange} placeholder='Biografía' />
            <input type="text" name = "imgURL" onChange= {handleChange} placeholder='URL de la(s) imagene(s) (separadas por comas)' />
            <div className="btn">
                <button onClick={Cargar}>Agregar</button>
            </div>
        </div>
        {modal && <Modal operacion={"cargado"}/>}
    </div>
  )
}

export default Cargar
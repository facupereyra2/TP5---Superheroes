import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import './styles/Home.css'

const Home = () => {
  const [personaje, setPersonaje] = useState()
  const [personajesFiltrados, setPersonajesFiltrados] = useState()
  const [busqueda, setBusqueda] = useState("")

  const obtenerDC = async () =>{
    const res = await fetch (`http://localhost:6060/personajesporcasa/DC`)
    const data = await res.json();
    setPersonaje(data);
    setPersonajesFiltrados(data);
  }

  console.log(personajesFiltrados);

  const filtrar = (busqueda)=>{
    let resBusqueda = personaje.filter((elemento)=>{
      if (elemento.nombreSH.toString().toLowerCase().includes(busqueda.toLowerCase())){
        return elemento;
      }
    });
    setPersonajesFiltrados(resBusqueda);
  }


  const handleChange = (e) =>{
    setBusqueda(e.target.value);
    filtrar(e.target.value)
  }

  useEffect(()=>{
    obtenerDC();
  },[]);

  return (
    <div>
        <NavBar/>
        <div className="busqueda">
          <input name="busqueda" value={busqueda} type="text" onChange={handleChange} placeholder='Ingrese el nombre de un superheroe' />
        </div>
        <div className="cards">
          {personajesFiltrados && personajesFiltrados.map ((per) =>{
            return(
              <Card
                objPersonajes={per}
              />
            )
          })}
        </div>
        
    </div>
  )
}

export default Home
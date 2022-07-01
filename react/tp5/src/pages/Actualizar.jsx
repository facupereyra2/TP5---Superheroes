import React,{useState} from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../components/Modal';
import NavBar from '../components/NavBar';

const Actualizar = () => {

    const{id} = useParams();
    const[modal, setModal] = useState(false) 
    const [datos, setDatos] = useState({
        nombresh:"",
        nombrereal: "",
        casa: "",
        año:"",
        equipamiento:"",
        biografia:"",
        imgURL:""
    })

    const [personaje, setPersonaje] = useState({
        nombrereal: '',
        nombresh: '',
        casa: '',
        año: '',
        equipamiento: '',
        biografia: '',
        imgURL: '',
    })


    const Actualizar = async() =>{
        const res = await fetch(`http://localhost:6060/actualizar/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(personaje),
            headers: {"Content-Type": "application/json"}
        })
        setModal(true)
    
    }

    const getDatos = async() =>{
        const res = await fetch(`http://localhost:6060/personaje/${id}`)
        const data = await res.json();
        setDatos(data);
        console.log(datos);
    }

    
    const handleChange = (e) =>{
        setPersonaje({ ...personaje, [e.target.name]: e.target.value });
    }

    useEffect(()=>{
        getDatos()
    },[])

  return (
    <div>
        <NavBar/>
        <div className="title">
            <h2>Actualizar Personaje</h2>
        </div>
        <div className="inputs">
            <h3>Ingrese los datos correspondientes</h3>
            <input type="text" name = "nombresh" onChange= {handleChange} placeholder={`${datos.nombreSH}`}  />
            <input type="text" name = "nombrereal" onChange= {handleChange} placeholder={`${datos.nombreReal}`}   />
            <input type="text" name = "año" onChange= {handleChange} placeholder={`${datos.año}`} />
            <input type="text" name = "casa" onChange= {handleChange} placeholder={`${datos.casa}`}  />
            <input type="text" name = "equipamiento" onChange= {handleChange} placeholder={`${datos.equipamiento}`}  />
            <input type="text" name = "biografia" onChange= {handleChange} placeholder={`${datos.biografia}`}  />
            <input type="text" name = "imgURL" onChange= {handleChange} placeholder={`${datos.imgURL}`} />
            <div className="btn">
                <button onClick={Actualizar}>Actualizar</button>
            </div>
        </div>
        {modal && <Modal operacion={"actualizado"}/>}
    </div>
  )
}

export default Actualizar
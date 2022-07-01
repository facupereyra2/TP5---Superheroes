import React,{useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import './styles/Slider.css'

const Slider = ({imgs}) => {

    const [images, setImages] = useState();


    useEffect(() => {
        setImages(imgs.split(','))
    },[])


    
  

  return (
    <motion.div className="slider-container">
        <motion.div className="slider" drag="x" dragConstraints={{right: 200}}>
            {images && images.map(img =>{
                return(
                    <motion.div className="item">
                        <img src={img}/>
                    </motion.div>
                    
                )
            })}
        </motion.div>
    </motion.div>
  )
}

export default Slider
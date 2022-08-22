import React, {useState} from 'react';



const Input = (props) => {
    const [nombre,setNombre] = useState("")

    const IngresoPassword = (e) => {
        props.setIsPasswordValid(e.target.value === props.password)
      }

    return (
            <div>
                <h5>Nombre</h5>
                <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" value={nombre}/>
                <h5>Contraseña</h5>
                <input type="number" className="form-control" onChange={IngresoPassword} placeholder="Password"/>
            </div>
        );  
        
    };
export default Input;

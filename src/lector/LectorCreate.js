import React, {useState} from "react";
import {createLector} from '../service/LectorService';


function LectorCreate() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
    
            const objeto = {
            nombre:nombre,
            apellido:apellido,
            telefono: telefono,
        }
        createLector(objeto)
    }

    const onChange = (event) => {
        
            if (event.target.name==='nombre')    
            setNombre(event.target.value)
            if (event.target.name==='apellido')
            setApellido(event.target.value)
            if (event.target.name==='telefono')
            setTelefono(event.target.value)
    }

    return (
        <div>
            <h2>Lista de Lectores</h2>
      
            <form onSubmit={onSubmit}>
                <label>
                    Nombre
                    <input 
                        name="nombre" 
                        value={nombre}
                        onChange={onChange}
                    />
                </label>

                <label>
                Apellido
                <input 
                        name ="apellido" 
                        value={apellido} 
                        onChange={onChange}
                />
                </label>

                <label>
                Telefono
                <input 
                        name ="telefono" 
                        value={telefono} 
                        onChange={onChange}
                />
                </label>

                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default LectorCreate;
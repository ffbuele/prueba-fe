import React, {useState} from "react";
import {createLibro} from '../service/LibroService'


function LibroCreate() {

    const [titulo, setTitulo] = useState('');
    const [anio, setAnio] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
    
            const objeto = {
            titulo:titulo,
            anio:anio,
        }
        createLibro(objeto)
    }

    const onChange = (event) => {
        
            if (event.target.name==='titulo')    
            setTitulo(event.target.value)
            if (event.target.name==='anio')
            setAnio(event.target.value)
    }

    return (
        <div>
            <h2>Lista de Libros</h2>
      
            <form onSubmit={onSubmit}>
                <label>
                    Título
                    <input 
                        name="titulo" 
                        value={titulo}
                        onChange={onChange}
                    />
                </label>

                <label>
                Año
                <input 
                        name ="anio" 
                        value={anio} 
                        onChange={onChange}
                />
                </label>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default LibroCreate;
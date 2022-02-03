import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdLibro, updateLibro } from '../service/LibroService';

function LibroPage () {
  
  const { idlibro } = useParams();
  const [libro, setLibro] = useState({titulo:'',anio:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateLibro(libro);
  }
  const onChange = (event) =>{
        if(event.target.name==='titulo')
            setLibro({...libro,titulo:event.target.value})    
        if(event.target.name==='anio')    
            setLibro({...libro,anio:event.target.value})
  }

  useEffect(() => {    
    findByIdLibro(idlibro).then(data => {
      setLibro(data);  
    }
    );
  }, [idlibro]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>Actualizar libro</h2>
  
          <input 
            className="formUpdateInput"
            placeholder="Titulo"
            name="titulo"
            value={libro.titulo}
            onChange={onChange}
   
          />
  
        <input 
            className="formUpdateInput"
            placeholder="Anio" 
            name="anio"
            value={libro.anio}
            onChange={onChange}
        />
        
        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default LibroPage;
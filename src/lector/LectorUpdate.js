import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdLector,updateLector } from '../service/LectorService';

function LectorPage () {
  
  const { idlector } = useParams();
  const [lector, setLector] = useState({nombre:'',apellido:'',telefono:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateLector(lector);
  }
  const onChange = (event) =>{
        if(event.target.name==='nombre')
            setLector({...lector,nombre:event.target.value})    
        if(event.target.name==='apellido')    
            setLector({...lector,apellido:event.target.value})    
        if(event.target.name==='telefono')    
            setLector({...lector,telefono:event.target.value})
  }

  useEffect(() => {    
    findByIdLector(idlector).then(data => {
      setLector(data);  
    }
    );
  }, [idlector]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>Actualizar lector</h2>
  
          <input 
            className="formUpdateInput"
            placeholder="Nombre"
            name="nombre"
            value={lector.nombre}
            onChange={onChange}
   
          />
  
        <input 
            className="formUpdateInput"
            placeholder="Apellido" 
            name="apellido"
            value={lector.apellido}
            onChange={onChange}
        />

        <input 
            className="formUpdateInput"
            placeholder="Telefono" 
            name="telefono"
            value={lector.telefono}
            onChange={onChange}
        />
        
        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default LectorPage;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdUsuario,updateUsuario } from '../service/UsuarioService';

function UsuarioPage () {
  
  const { idUsuario } = useParams();
  const [usuario, setUsuario] = useState({username:'',password:'',status:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateUsuario(usuario);
  }
  const onChange = (event) =>{
        if(event.target.name==='username')
            setUsuario({...usuario,username:event.target.value})    
        if(event.target.name==='password')    
            setUsuario({...usuario,password:event.target.value})
        if(event.target.name==='status')    
            setUsuario({...usuario,status:event.target.value})
  }

  useEffect(() => {    
    findByIdUsuario(idUsuario).then(data => {
      setUsuario(data);  
    }
    );
  }, [idUsuario]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>Actualizar usuario</h2>
  
          <input 
            className="formUpdateInput"
            placeholder="Username"
            name="username"
            value={usuario.username}
            onChange={onChange}
   
          />
  
        <input 
            className="formUpdateInput"
            placeholder="Password" 
            name="password"
            value={usuario.password}
            onChange={onChange}
        />

        <input 
            className="formUpdateInput"
            placeholder="Status" 
            name="status"
            value={usuario.status}
            onChange={onChange}
        />
        
        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default UsuarioPage;
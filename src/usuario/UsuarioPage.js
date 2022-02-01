import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Usuario from './Usuario';
import UsuarioList from './UsuarioList';
import {getListUsuario } from "../service/UsuarioService";

function UsuarioPage() {
  const [usuario, setUsuario] = useState([]);
  
  useEffect(() => {    
    getListUsuario().then(data => {
      setUsuario(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      
      <Link to= '/createusuario'>
        Crear
      </Link>  

      <UsuarioList>
        {
          usuario.map(item =>
            <Usuario
              key={item.idUsuario}
              itemUsuario={item} />
          )
        }
      </UsuarioList>
    </div>
  );
}

export default UsuarioPage;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lector from './Lector'
import LectorList from "./LectorList";
import {getListLector } from "../service/LectorService";

function LectorPage() {
  const [lector, setLector] = useState([]);
  
  useEffect(() => {    
    getListLector().then(data => {
      setLector(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>Lista de Lectores</h2>
      
      <Link to= '/createlector'>
        Crear
      </Link>  

      <LectorList>
        {
          lector.map(item =>
            <Lector
              key={item.idlector}
              itemLector={item} />
          )
        }
      </LectorList>
    </div>
  );
}

export default LectorPage;
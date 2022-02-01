import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Libro from './Libro'
import LibroList from "./LibroList";
import {getListLibro } from "../service/LibroService";

function LibroPage() {
  const [libro, setLibro] = useState([]);
  
  useEffect(() => {    
    getListLibro().then(data => {
      setLibro(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>Lista de Libros</h2>
      
      <Link to= '/createlibro'>
        Crear
      </Link>  

      <LibroList>
        {
          libro.map(item =>
            <Libro
              key={item.idlibro}
              itemLibro={item} />
          )
        }
      </LibroList>
    </div>
  );
}

export default LibroPage;
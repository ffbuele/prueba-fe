import React from 'react';
import { Link } from 'react-router-dom';
import './Libro.css';

export default function Libro(props){
    return(
        <tr>
            <td className="formatoUno">{props.itemLibro.idlibro}</td>
            <td className="vehiculoNombre">{props.itemLibro.titulo}</td>
            <td className='anio'>{props.itemLibro.anio}</td>
            <td><Link to={`/updatelibro/${props.itemLibro.idlibro}`}>Editar</Link></td>
        </tr>
    )
}
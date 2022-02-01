import React from 'react';
import { Link } from 'react-router-dom';
import './Lector.css';

export default function Libro(props){
    return(
        <tr>
            <td className="formatoUno">{props.itemLector.idlector}</td>
            <td className="vehiculoNombre">{props.itemLector.nombre}</td>
            <td className='anio'>{props.itemLector.apellido}</td>
            <td className='anio'>{props.itemLector.telefono}</td>
            <td><Link to={`/updatelector/${props.itemLector.idlector}`}>Editar</Link></td>
        </tr>
    )
}
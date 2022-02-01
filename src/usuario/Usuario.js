import React from 'react';
import { Link } from 'react-router-dom';
import './Usuario.css';

export default function Libro(props){
    return(
        <tr>
            <td className="formatoUno">{props.itemUsuario.idUsuario}</td>
            <td className="vehiculoNombre">{props.itemUsuario.username}</td>
            <td className='anio'>{props.itemUsuario.password}</td>
            <td className='anio'>{props.itemUsuario.status}</td>
            <td><Link to={`/updateusuario/${props.itemUsuario.idUsuario}`}>Editar</Link></td>
        </tr>
    )
}
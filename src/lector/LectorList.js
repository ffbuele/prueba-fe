import React from 'react';

export default function LectorList (props){

    return(
        
    <table>
        <thead >
        <tr>
            <th >Id Lector</th>
            <th >Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        
            {props.children}
        
        </tbody>
    </table>
    )
}
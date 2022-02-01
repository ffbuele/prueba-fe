import React from 'react';



export default function LibroList (props){

    return(
        
    <table>
        <thead >
        <tr>
            <th >Id Libro</th>
            <th >Título</th>
            <th>Año</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        
            {props.children}
        
        </tbody>
    </table>
    )
}
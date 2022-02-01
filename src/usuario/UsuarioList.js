import React from 'react';


export default function UsuarioList (props){

    return(
        
    <table>
        <thead >
        <tr>
            <th >Id Usuario</th>
            <th >Username</th>
            <th>Password</th>
            <th>Status</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        
            {props.children}
        
        </tbody>
    </table>
    )
}
const urlCrud = 'http://localhost:3001';

const getListUsuario = async () => {
    const response = await fetch(`${urlCrud}/usuario`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const findByIdUsuario = async (idUsuario) => {
    const response = await fetch(`${urlCrud}/usuario/${idUsuario}`);  
    const data = await response.json();     
    return  data;
}


const createUsuario = async (usuario) => {
        console.log(usuario);
    
    const resp = await fetch(`${urlCrud}/usuario`, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

const updateUsuario = async (usuario) => {
  
    const resp = await fetch(`${urlCrud}/usuario`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListUsuario,
    createUsuario,
    updateUsuario,
    findByIdUsuario    
};
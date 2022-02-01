const urlCrud = 'http://localhost:3001';

const getListLibro = async () => {
    const response = await fetch(`${urlCrud}/libro`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

// Obtener solo un id
const findByIdLibro = async (idlibro) => {
    const response = await fetch(`${urlCrud}/libro/${idlibro}`);  
    const data = await response.json();     
    return  data;
}


const createLibro = async (libro) => {
        console.log(libro);
    
    const resp = await fetch(`${urlCrud}/libro`, {
        method: 'POST',
        body: JSON.stringify(libro),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

const updateLibro = async (libro) => {
  
    const resp = await fetch(`${urlCrud}/libro`, {
        method: 'PUT',
        body: JSON.stringify(libro),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListLibro,
    createLibro,
    updateLibro,
    findByIdLibro    
};
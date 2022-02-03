const urlCrud = 'http://localhost:3001';

const getListLector = async () => {
    const response = await fetch(`${urlCrud}/lector`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const findByIdLector = async (idlector) => {
    const response = await fetch(`${urlCrud}/lector/${idlector}`);  
    const data = await response.json();     
    return  data;
}


const createLector = async (lector) => {
        console.log(lector);
    
    const resp = await fetch(`${urlCrud}/lector`, {
        method: 'POST',
        body: JSON.stringify(lector),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

const updateLector = async (lector) => {
  
    const resp = await fetch(`${urlCrud}/lector`, {
        method: 'PUT',
        body: JSON.stringify(lector),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListLector,
    createLector,
    updateLector,
    findByIdLector    
};
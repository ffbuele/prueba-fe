import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import LibroCreate from './libro/LibroCreate';
import LibroPage from './libro/LibroPage';
import LibroUpdate from './libro/LibroUpdate';

import UsuarioCreate from './usuario/UsuarioCreate';
import UsuarioPage from './usuario/UsuarioPage';
import UsuarioUpdate from './usuario/UsuarioUpdate';

import LectorCreate from './lector/LectorCreate';
import LectorPage from './lector/LectorPage';
import LectorUpdate from './lector/LectorUpdate';

import Navbar from './components/Navbar';

export default function App(){
  return(

    <BrowserRouter>
      <div>
          <h1 className="App">PROYECTO INICIADO</h1>
          <h2 className='subtitulo1'>BASES DE DATOS: PLATAFORMA DE ALQUILER</h2>
      </div>

      <Navbar/>
          <Routes>


            <Route path="/libro" element={<LibroPage/>}/>
            <Route path="/createlibro" element={<LibroCreate/>}/>
            <Route path="/updatelibro/:idlibro" element={<LibroUpdate/>}/>

            <Route path="/lector" element={<LectorPage/>}/>
            <Route path="/createlector" element={<LectorCreate/>}/>
            <Route path="/updatelector/:idlector" element={<LectorUpdate/>}/>
            
            <Route path="/usuario" element={<UsuarioPage/>}/>
            <Route path="/createusuario" element={<UsuarioCreate/>}/>
            <Route path="/updateusuario/:idUsuario" element={<UsuarioUpdate/>}/>
            
                       

          </Routes>
    
    </BrowserRouter>

  );
}




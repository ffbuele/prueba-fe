import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import LibroCreate from './libro/LibroCreate';
import LibroPage from './libro/LibroPage';
import LibroUpdate from './libro/LibroUpdate';
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
            
          </Routes>
    
    </BrowserRouter>

  );
}




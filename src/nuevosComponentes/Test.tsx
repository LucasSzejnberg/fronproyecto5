import React, { useState } from 'react';
import Header from './Header';
import MenuIzquierda from './MenuIzquierda';
function Estudios() {

  let a=React;
  let b=a;
  a=b;
  return (
    <div >
      <Header logo={"/logo.png"} userName={"Joseph Fiter"} userImage={"/user.png"} />
      <MenuIzquierda 
          activeButton="Estudios" 
          bottomImageSrc="/BotonSubirEstudio.png" 
          botoncompartir="/compartirboton.png"
        />
      </div>
  );
}

export default Estudios;

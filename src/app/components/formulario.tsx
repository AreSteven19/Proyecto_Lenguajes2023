import Link from 'next/link';
import React, { useState } from 'react';
import 'firebase/firestore';
import '../globals.css';

export default function Form_datos() {

  return (


    <div>
      <div className="Formulario">
        <label htmlFor="tipo_usuario">Ingreso de anuncios</label>

        <div>
          <label htmlFor="nombre_empresa">Nombre de la empresa:</label>
          <input
            type="text"
            id="nombre_empresa"
            name="nombre_empresa"
            placeholder="ingresa un nombre"
            required
          />

          <label htmlFor="numero_reps">numero de repeticiónes</label>
          <input
            type="number"
            id="numero_reps"
            name="numero_reps"
            min="1"
            max="99"
            pattern="\d{1,2}"
            placeholder="selecciona una cantidad"
            required
          />

          <label htmlFor="duracion_video">duracion del video</label>
          <input
            type="number"
            id="duracion_video"
            name="duracion_video"
            min="1"
            max="99"
            pattern="\d{1,2}"
            placeholder="selecciona una cantidad"
            required

          />


<br />
<br />


          <label htmlFor="opciones_calidad">Seleccione la calidad: </label>
          <select name="" id="calidad">


           
            <option value="">Video calidad: 720p </option>
            <option value="">Video calidad:  4K </option>

          </select>

          <div className="rutas_cont">

          <label htmlFor="opciones_rutas">Seleccione la ruta: </label>
        
          <select name="" id="rutas">

            <option value="">Ciudad Neily-Golfito </option>
            <option value="">Paso Canoas-Golfito </option>
            <option value="">Neily-Paso-Canoas </option>
            <option value="">Palmar Norte-Río claro </option>
            

          </select>

          <div/>
         


          </div>






          <label htmlFor="precio_calculado">Precio:</label>
          <textarea
            id="direccion"
            name="direccion"
            placeholder="precio total es: "
            required
          ></textarea>


          <br />
          <button
            id="Send"
            type="submit">
            Enviar datos
          </button>
        </div>

      </div>


    </div>





  );
}

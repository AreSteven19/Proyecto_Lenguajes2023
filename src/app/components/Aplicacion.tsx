"use client"
import React, { useEffect } from 'react';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import '../firebase/config';

const Aplicacion = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'prueba', 'kCvnMXvTgS7yDnPgzoyP');
        const docSnapshot = await getDoc(queryDoc);

        if (docSnapshot.exists()) {
          const docData = docSnapshot.data();
          console.trace('Valor del documento:', docData);
        } else {
          console.trace('El documento no existe.');
        }
      } catch (error) {
        console.error('Error al recuperar los datos:', error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default Aplicacion;

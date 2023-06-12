import Image from 'next/image'
import Formulario from './components/formulario'

import React from 'react';
import './firebase/config';

import { getFirestore, getDoc, doc  } from 'firebase/firestore';


export default function Home() {


  return (
  <div>
    
    <Formulario/>
  
   
    
    

  </div>
  
  
  
  )
}

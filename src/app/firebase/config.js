
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCEwauNiZapTD1SkRlg3FSKgQU87-W5qJM",
  authDomain: "anuncios-proyecto.firebaseapp.com",
  projectId: "anuncios-proyecto",
  storageBucket: "anuncios-proyecto.appspot.com",
  messagingSenderId: "77717777502",
  appId: "1:77717777502:web:7649fc87bd919cc88e58cf"
};

const app = initializeApp(firebaseConfig);

export default app;
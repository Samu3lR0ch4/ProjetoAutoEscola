import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_DOMINIO.firebaseapp.com',
  projectId: 'SEU_PROJETO',
  storageBucket: 'SEU_BUCKET.appspot.com',
  messagingSenderId: 'SEU_ID',
  appId: 'SEU_APP_ID'
};

export const firebaseApp = initializeApp(firebaseConfig);

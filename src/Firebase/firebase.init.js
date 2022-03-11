import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
export const firebaseInitialize  = () => initializeApp(firebaseConfig);

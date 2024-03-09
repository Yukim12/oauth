import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBzcRMrIe2noxUuy45RPg2sSK2gkxVFJ2g",
  authDomain: "oauth-8c34a.firebaseapp.com",
  projectId: "oauth-8c34a",
  storageBucket: "oauth-8c34a.appspot.com",
  messagingSenderId: "972503074365",
  appId: "1:972503074365:web:3ac22d89424f0115c98c54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)






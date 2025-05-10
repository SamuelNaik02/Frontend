import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFDslTls3dRQtL6wWmw2QK0AxAxVKH0R8",
  authDomain: "jnanasetu-bfc83.firebaseapp.com",
  projectId: "jnanasetu-bfc83",
  storageBucket: "jnanasetu-bfc83.firebasestorage.app",
  messagingSenderId: "975294763807",
  appId: "1:975294763807:web:326d542411693a7be5962a",
  measurementId: "G-R0QTP0BXWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics and get a reference to the service
export const analytics = getAnalytics(app);

export default app; 
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyDwzrizJaSg8WCy4ltiz2TeGxmlGL09mgI',
  authDomain: 'mdb-auth.firebaseapp.com',
  projectId: 'mdb-auth',
  storageBucket: 'mdb-auth.appspot.com',
  messagingSenderId: '274344506817',
  appId: '1:274344506817:web:bfd26854fe89bd37e62b40',
  measurementId: 'G-K47QK8Q27Y',
}

export default function useFirebase() {
  if (getApps().length === 0) {
    const app = initializeApp(firebaseConfig)
    return { app }
  }
}

import * as firebase from 'firebase';

export const prodConfig = {
  apiKey: "AIzaSyApykR2I_S3zX3WOPxFNRNjgAEA-4RMcBc",
  authDomain: "weatherappautorization.firebaseapp.com",
  databaseURL: "https://weatherappautorization.firebaseio.com",
  storageBucket: "weatherappautorization.appspot.com",
  messagingSenderId: "105303312603",
}

export const devConfig = {
  apiKey: "AIzaSyApykR2I_S3zX3WOPxFNRNjgAEA-4RMcBc",
  authDomain: "weatherappautorization.firebaseapp.com",
  databaseURL: "https://weatherappautorization.firebaseio.com",
  storageBucket: "weatherappautorization.appspot.com",
  messagingSenderId: "105303312603",
}

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth
}
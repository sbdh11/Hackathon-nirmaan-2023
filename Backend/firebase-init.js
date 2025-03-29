var firebase = require('firebase')


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  measurementId: ""
};
  

const app = firebase.initializeApp(firebaseConfig);


let database = firebase.database()

module.exports = app;
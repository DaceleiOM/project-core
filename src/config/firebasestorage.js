const { initializeApp } = require("@firebase/app");
const { getStorage } = require("@firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyDAjnPyX_t3sZI14j1fFDsr9QSyC7oZSlc",
  authDomain: "project-food-5bc40.firebaseapp.com",
  projectId: "project-food-5bc40",
  storageBucket: "project-food-5bc40.appspot.com",
  messagingSenderId: "516378794591",
  appId: "1:516378794591:web:86d76cb0146e15c7ff19ea",
  measurementId: "G-R5S04NHWVP"
};
const app = initializeApp(firebaseConfig);

const { getApp } = require ('firebase/app');
 
const firebaseApp = getApp();
const storage = getStorage(firebaseApp, "project-food-5bc40.appspot.com");

module.exports = storage;

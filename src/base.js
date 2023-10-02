import Rebase from "re-base";
import firebase from "firebase";

//firebase app
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBqU9mjAhRuL7GiglOzi-fHu_49gsKPoNU",

  authDomain: "foodapp-lakshay.firebaseapp.com",

  databaseURL: "https://foodapp-lakshay-default-rtdb.firebaseio.com",
});

//rebase binding 
const base = Rebase.createClass(firebaseApp.database());

// named export
export  {firebaseApp};

export default base;
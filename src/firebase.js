import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyDOYL_7q5gWOX3gYYd4PdE9dofjoKXohbU",
  authDomain: "ngo-f425d.firebaseapp.com",
  projectId: "ngo-f425d",
  storageBucket: "ngo-f425d.appspot.com",
  messagingSenderId: "1004050816632",
  appId: "1:1004050816632:web:755297636a228ebfa1578d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  

  //////////////////////////////////
  
  export default {storage, firebase};
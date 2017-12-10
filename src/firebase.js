import * as firebase from "firebase";
require("firebase/firestore");

var config = {
    apiKey: "AIzaSyBacvd8X1wJt5Yvd79B1bWj64Ae9i4LbZY",
    authDomain: "playground-a5943.firebaseapp.com",
    databaseURL: "https://playground-a5943.firebaseio.com",
    projectId: "playground-a5943",
    storageBucket: "playground-a5943.appspot.com",
    messagingSenderId: "442108740626"
  };
firebase.initializeApp(config);

export default firebase;
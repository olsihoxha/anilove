import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB8Ts_WFeECWBHJtbqGwB9ZWsMplvawhDk",
    authDomain: "anilove-391e0.firebaseapp.com",
    databaseURL: "https://anilove-391e0-default-rtdb.firebaseio.com",
    projectId: "anilove-391e0",
    storageBucket: "anilove-391e0.appspot.com",
    messagingSenderId: "278105564635",
    appId: "1:278105564635:web:e79e19289f4217796333fe",
    measurementId: "G-P2KHWEV9GW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
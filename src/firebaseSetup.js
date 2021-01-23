import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAxPIFs_C4krvHew1g7ab83m7xXQw5l2MQ",
    authDomain: "hive-83b4f.firebaseapp.com",
    databaseURL: "https://hive-83b4f.firebaseio.com",
    projectId: "hive-83b4f",
    storageBucket: "hive-83b4f.appspot.com",
    messagingSenderId: "862422719837",
    appId: "1:862422719837:web:f4c3826084ac5b5ac2dcb4"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
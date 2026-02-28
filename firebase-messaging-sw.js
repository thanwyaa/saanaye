importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyB3Z8iHqNNfWEWrwIfP15x3hlh65GEZ0mQ",
    authDomain: "sanaayee.firebaseapp.com",
    projectId: "sanaayee",
    storageBucket: "sanaayee.firebasestorage.app",
    messagingSenderId: "1048456368002",
    appId: "1:1048456368002:web:e37c8e2b7ebba18ef2499b"
});

const messaging = firebase.messaging();

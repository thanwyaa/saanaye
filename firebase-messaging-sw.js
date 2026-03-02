importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSy...", // مش لازم تحط بياناتك هنا عادي
  projectId: "sanaayee",
  messagingSenderId: "777421869818",
  appId: "1:777421869818:web:..."
});

const messaging = firebase.messaging();

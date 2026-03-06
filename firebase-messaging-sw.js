// استدعاء مكتبات Firebase للإشعارات في الخلفية
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyB3Z8iHqNNfWEWrwIfP15x3hlh65GEZ0mQ",
  authDomain: "sanaayee.firebaseapp.com",
  projectId: "sanaayee",
  storageBucket: "sanaayee.firebasestorage.app",
  messagingSenderId: "1048456368002",
  appId: "1:1048456368002:web:e37c8e2b7ebba18ef2499b"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// معالجة الإشعار لما يوصل والموقع مقفول
messaging.onBackgroundMessage((payload) => {
  console.log('وصل إشعار في الخلفية: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://thanwyaa.github.io/saanaye/logo.png', // حط رابط لوجو موقعك هنا
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({

  apiKey: "AIzaSyCEDOTr_3W9oYSgT_nmWsATpXw8dAjggkY",
  authDomain: "cato-server.firebaseapp.com",
  projectId: "cato-server",
  storageBucket: "cato-server.appspot.com",
  messagingSenderId: "466353652050",
  appId: "1:466353652050:web:9bcfe157f0d70a3a3ffa8b",
});

const messaging = firebase.messaging();

// Service Worker scope
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);
});

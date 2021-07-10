importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCJeBPtJ7caNvpKA7lPaTrzoGA-fCWYqeo",
    authDomain: "notificationexpenseapp.firebaseapp.com",
    projectId: "notificationexpenseapp",
    storageBucket: "notificationexpenseapp.appspot.com",
    messagingSenderId: "877217713803",
    appId: "1:877217713803:web:e449099922b94e48d58e8e"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();

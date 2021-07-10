import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCJeBPtJ7caNvpKA7lPaTrzoGA-fCWYqeo",
    authDomain: "notificationexpenseapp.firebaseapp.com",
    projectId: "notificationexpenseapp",
    storageBucket: "notificationexpenseapp.appspot.com",
    messagingSenderId: "877217713803",
    appId: "1:877217713803:web:e449099922b94e48d58e8e"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging()

  export default function requestPermission() {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        messaging.getToken().then((currentToken) => {
          if (currentToken) {
            console.log("Token => ", currentToken)
          } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // ...
        });
        
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }
/*
 * Give the service worker access to Firebase Messaging.
 * Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/12.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.4.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAoe-SZQ6iZj_fBgz2ZSq3bbCvuo7M5K5w",
    authDomain: "webpush-3157d.firebaseapp.com",
    projectId: "webpush-3157d",
    storageBucket: "webpush-3157d.firebasestorage.app",
    messagingSenderId: "443499005463",
    appId: "1:443499005463:web:5c39f45138a277b5d83e52",
    measurementId: "G-YTYFZ0D03F"
};

// Инициализация Firebase (compat)
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    //icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

/*
 * Give the service worker access to Firebase Messaging.
 * Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

// Firebase confing
const firebaseConfig = {
    apiKey: "AIzaSyAoe-SZQ6iZj_fBgz2ZSq3bbCvuo7M5K5w",
    authDomain: "webpush-3157d.firebaseapp.com",
    projectId: "webpush-3157d",
    storageBucket: "webpush-3157d.firebasestorage.app",
    messagingSenderId: "443499005463",
    appId: "1:443499005463:web:5c39f45138a277b5d83e52",
    measurementId: "G-YTYFZ0D03F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/*
 * Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    // Customize notification here
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.body,
        icon: '',
        image: ''
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});
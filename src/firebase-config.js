/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const config = {
  apiKey: "AIzaSyC1Cl_gcKVPBwpBxBoybY95pXgDey_d9XQ",
  authDomain: "fir-friendlychat-c681a.firebaseapp.com",
  projectId: "fir-friendlychat-c681a",
  storageBucket: "fir-friendlychat-c681a.appspot.com",
  messagingSenderId: "460432187416",
  appId: "1:460432187416:web:891e4163b562feff6ae36d",
  measurementId: "G-KHQW77GFP9"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

const app = initializeApp(config);
const analytics = getAnalytics(app);
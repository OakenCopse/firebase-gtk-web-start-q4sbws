// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

import { getAuth, EmailAuthProvider, } from 'firebase/auth';

import {} from 'firebase/firestore';

import firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

async function main(){
  
  
  const firebaseConfig = {
    apiKey: "random-unique-string",
    authDomain: "your-projectId.firebaseapp.com",
    databaseURL: "https://your-projectId.firebaseio.com",
    projectId: "your-projectId",
    storageBucket: "your-projectId.appspot.com",
    messagingSenderId: "random-unique-string",
    appId: "random-unique-string",
  };
  
  initializeApp(firebaseConfig);
  auth = getAuth();

  const ui = new firebaseui.auth.AuthUI(auth);
  
    const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
    ],
    
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };

startRsvpButton.addEventListener("click", 
() => {
     ui.start("#firebaseui-auth-container", uiConfig);
});
}

main();

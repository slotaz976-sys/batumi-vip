// Firebase SDK
// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBmtDa9fkBjd-J2tToJF_8CcPVZs3pJZsM",

  authDomain: "batumi-kazino-5a748.firebaseapp.com",

  databaseURL:
    "https://batumi-kazino-5a748-default-rtdb.firebaseio.com",

  projectId: "batumi-kazino-5a748",

  storageBucket:
    "batumi-kazino-5a748.firebasestorage.app",

  messagingSenderId: "501153230995",

  appId:
    "1:501153230995:web:8dac82ebf1904fc1881d66",

  measurementId: "G-CM5ZXYEP7G"
};

// Firebase başlat
const app = initializeApp(firebaseConfig);

// Database
const db = getDatabase(app);

// Global et
window.db = db;
window.ref = ref;
window.push = push;
window.onValue = onValue;
import { initializeApp } from 'firebase/app';

// This is our application's Firebase configs
const firebaseConfig = {
	apiKey: 'AIzaSyDNxydLGU7-xYHZXhuhOec_9HAG3He_GgU',
	authDomain: 'exclusive-clothingdb.firebaseapp.com',
	projectId: 'exclusive-clothingdb',
	storageBucket: 'exclusive-clothingdb.appspot.com',
	messagingSenderId: '730657520581',
	appId: '1:730657520581:web:85caf8c549d2e1c1e369ac',
};

// Initializing firebase
const app = initializeApp(firebaseConfig);

import Rebase from 're-base'
import firebase from 'firebase'

// Initialize Firebase
const config = {
     apiKey: 'AIzaSyCOUlKOHbYhlK3KUl21BtnXcHctdSZTIkU',
     authDomain: 'bora-ajudar-44ecd.firebaseapp.com',
     databaseURL: 'https://bora-ajudar-44ecd.firebaseio.com',
     projectId: 'bora-ajudar-44ecd',
     storageBucket: 'bora-ajudar-44ecd.appspot.com',
     messagingSenderId: '677406465327'
}
const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
export const auth = firebase.auth()
export default base
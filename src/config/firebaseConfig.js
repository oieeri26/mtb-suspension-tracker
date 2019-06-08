import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyBr86rRo-m_1CO5METJEzu2wYEtg3Zj2uw",
    authDomain: "mtb-suspension-maintenance.firebaseapp.com",
    databaseURL: "https://mtb-suspension-maintenanc.firebaseio.com",
    projectId: "mtb-suspension-maintenance",
    storageBucket: "mtb-suspension-maintenanc.appspot.com",
};

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
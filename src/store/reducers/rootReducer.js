import bikeReducer from './bikeReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    bike: bikeReducer,
    firestore: firestoreReducer
})

export default rootReducer

// npm install redux react-redux
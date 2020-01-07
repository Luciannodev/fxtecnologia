 import {all} from 'redux-saga/effects'

 import cart from './saga'

 export default function* rootSaga(){
     return yield all([cart])
 }
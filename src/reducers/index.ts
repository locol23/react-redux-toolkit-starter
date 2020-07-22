import { combineReducers } from '@reduxjs/toolkit'
import titleReducer from './title'
import counterReducer from './counter'

const rootReducer = combineReducers({
  title: titleReducer,
  counter: counterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer


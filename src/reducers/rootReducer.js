import authorReducer from './authorReducer'
import bookReducer from './bookReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    book: bookReducer,
    author: authorReducer
  });


export default rootReducer

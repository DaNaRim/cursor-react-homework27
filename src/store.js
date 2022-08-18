import {combineReducers, createStore} from "redux"
import {posts} from "./redux/reducer"

const reducer = combineReducers({
  posts
})

const store = createStore(reducer)

export default store

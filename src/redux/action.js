import {ADD_POST} from "./actionType"

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post
  }
}

import {ADD_POST, UPDATE_POST} from "./actionType"

import ANAKIN_IMAGE from "../assets/img/Anakin.jpg"
import RAY_IMAGE from "../assets/img/Ray-Lucas.png"

const defaultPosts = [
  {
    id: 1,
    author: {
      authorName: "Anakin skywalker",
      authorPhoto: ANAKIN_IMAGE,
      authorNickname: "@dart_vader",
      isVerified: true
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: 1657832400000,
    likes: 887,
    comments: 482,
    reposts: 146
  },

  {
    id: 2,
    author: {
      authorName: "Anakin skywalker",
      authorPhoto: ANAKIN_IMAGE,
      authorNickname: "@dart_vader",
      isVerified: true
    },
    content: "This is test post",
    date: 1657859400000,
    likes: 887,
    comments: 482,
    reposts: 146
  },
  {
    id: 3,
    author: {
      authorName: "Anakin skywalker",
      authorPhoto: ANAKIN_IMAGE,
      authorNickname: "@dart_vader",
      isVerified: true
    },
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut consectetur delectus dolorem enim, ex\n" +
      "        excepturi laboriosam laudantium libero perferendis quibusdam ratione repudiandae sed sequi suscipit voluptatem\n" +
      "        voluptatibus. Eos, vel. Animi atque beatae blanditiis commodi earum ex facere facilis, in incidunt ipsa iure libero molestias nemo\n" +
      "        nobis obcaecati praesentium quas, quidem quisquam reiciendis sint tempore tenetur unde velit voluptates\n" +
      "        voluptatibus. Adipisci asperiores blanditiis dolore maiores modi pariatur, perferendis rem suscipit velit. Consequatur\n" +
      "        corporis doloribus est optio saepe ut vitae! Alias dolor doloribus error esse porro praesentium quidem suscipit\n" +
      "        unde vel? A atque cum cumque delectus deserunt eum magnam minus nam nemo, neque nihil nisi placeat quod reiciendis\n" +
      "        repellat similique soluta tempora temporibus tenetur voluptates. Alias delectus dicta nesciunt ratione\n" +
      "        voluptatum!",
    date: 1657869498000,
    likes: 887,
    comments: 482,
    reposts: 146
  }
]

export const posts = (state = defaultPosts, action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload]
    default:
      return state
  }
}

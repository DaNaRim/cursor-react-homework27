import React, {Component} from "react"
import Form from "../../components/Form/Form"
import PostList from "../../components/PostList/PostList"
import {HomePageWrapper} from "./HomePageWrapper"

class HomePage extends Component {
  render() {
    return (
      <HomePageWrapper>
        <Form/>
        <PostList/>
      </HomePageWrapper>
    )
  }
}

export default HomePage

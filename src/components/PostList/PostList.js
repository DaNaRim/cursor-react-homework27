import React, {Component} from "react"
import {connect} from "react-redux"
import Post from "../Post/Post"
import {PostListWrapper} from "./PostListWrapper"

class PostList extends Component {
  render() {
    const {posts} = this.props

    posts.sort((a, b) => {
      return b.date - a.date
    })

    return (
      <PostListWrapper>
        {posts.map((post, index) => <Post key={index} data={post}/>)}
      </PostListWrapper>
    )
  }
}

const getStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(getStateToProps, null)(PostList)


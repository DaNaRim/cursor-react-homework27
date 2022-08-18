import {library as fontawesome} from "@fortawesome/fontawesome-svg-core"
import {faAngleDown, faComment, faEllipsisH, faHeart, faRetweet, faSquareCheck} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React, {Component} from "react"
import {connect} from "react-redux"
import {PostWrapper} from "./PostWrapper"

fontawesome.add(faSquareCheck, faAngleDown, faHeart, faComment, faRetweet, faEllipsisH)

class Post extends Component {
  render() {
    const {id, author, content, image, date, likes, comments, reposts} = this.props.data
    const {liked, reposted, commented} = {...this.props.data}
    const {authorName, authorPhoto, authorNickname, isVerified} = author

    const authorLink = "#"

    const handleLike = (e) => {
      const {posts} = this.props
      const post = posts.find(post => post.id === Number(e.target.closest(".post").getAttribute("id")))

      if (post.liked) {
        post.likes -= 1
        post.liked = false
      } else {
        post.likes += 1
        post.liked = true
      }
      this.forceUpdate()
    }

    const handleRepost = (e) => {
      const {posts} = this.props
      const post = posts.find(post => post.id === Number(e.target.closest(".post").getAttribute("id")))

      if (post.reposted) {
        post.reposts -= 1
        post.reposted = false
      } else {
        post.reposts += 1
        post.reposted = true
      }
      this.forceUpdate()
    }

    const handleComment = (e) => {
      const {posts} = this.props
      const post = posts.find(post => post.id === Number(e.target.closest(".post").getAttribute("id")))

      if (post.commented) {
        post.comments -= 1
        post.commented = false
      } else {
        post.comments += 1
        post.commented = true
      }
      this.forceUpdate()
    }

    return (
      <PostWrapper className="post" id={`${id}`} key={id}>
        <div className="post_author_photo">
          <a href={`${authorLink}`}>
            <img src={authorPhoto} alt={`${authorName}`}/>
          </a>
        </div>

        <div className="post_main">
          <header>
            <div className="post_info">
              <a href={`${authorLink}`} className="post_info_author_name">{authorName}</a>
              <span className="post_info_author_verified">
            {isVerified ? <FontAwesomeIcon icon="fa-solid fa-square-check"/> : null}
          </span>
              <a href={`${authorLink}`} className="post_info_author_nickname">{authorNickname}</a>

              <div className="post_info_dot">&middot;</div>
              <div className="post_info_date_posted">{howMuchTimeHasPassedSinceDate(date)}</div>
            </div>

            <div className="post_wrap_arrow" onClick={showFullContent}>
              {isPostOverflown(image, content) ? <FontAwesomeIcon icon="fa-solid fa-angle-down"/> : null}
            </div>
          </header>

          <div className="post_content short">
            <div className="post_content_text">{content}</div>
            <div className="post_content_image">
              {image ? <img src={image} alt="post"/> : null}
            </div>
          </div>

          <div className="post_links">
            <div className={`post_link post_link_like` + (liked ? " active" : "")} onClick={handleLike}>
              <FontAwesomeIcon icon="fa-solid fa-heart"/>
              <span>{likes}</span>
            </div>
            <div className={`post_link post_link_comment` + (commented ? " active" : "")} onClick={handleComment}>
              <FontAwesomeIcon icon="fa-solid fa-comment"/>
              <span>{comments}</span>
            </div>
            <div className={`post_link post_link_repost` + (reposted ? " active" : "")} onClick={handleRepost}>
              <FontAwesomeIcon icon="fa-solid fa-retweet"/>
              <span>{reposts}</span>
            </div>
            <div className="post_link" onClick={() => alert("Comming soon... Or nerver")}>
              <FontAwesomeIcon icon="fa-solid fa-ellipsis-h"/>
            </div>
          </div>
        </div>
      </PostWrapper>
    )
  }
}

const getStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(getStateToProps, null)(Post)

function howMuchTimeHasPassedSinceDate(date) {
  const diff = new Date() - new Date(date)

  const diffInMinutes = Math.floor(diff / 1000 / 60)
  const diffInHours = Math.floor(diffInMinutes / 60)
  const diffInDays = Math.floor(diffInHours / 24)
  const diffInWeeks = Math.floor(diffInDays / 7)
  const diffInMonths = Math.floor(diffInWeeks / 4)
  const diffInYears = Math.floor(diffInMonths / 12)

  if (diffInMinutes < 1) return "just now"
  if (diffInMinutes === 1) return "1 minute ago"
  if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`
  if (diffInHours === 1) return "1 hour ago"
  if (diffInHours < 24) return `${diffInHours} hours ago`
  if (diffInDays === 1) return "1 day ago"
  if (diffInDays < 7) return `${diffInDays} days ago`
  if (diffInWeeks === 1) return "1 week ago"
  if (diffInWeeks < 4) return `${diffInWeeks} weeks ago`
  if (diffInMonths === 1) return "1 month ago"
  if (diffInMonths < 12) return `${diffInMonths} months ago`
  if (diffInYears === 1) return "1 year ago"
  if (diffInYears < 100) return `${diffInYears} years ago`
}

function isPostOverflown(image, content) {
  return (image) || content.length > 700
}

function showFullContent(e) {
  e.target.closest(".post_main").querySelector(".post_content").classList.toggle("short")
}

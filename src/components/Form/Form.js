import React, {Component} from "react"
import {connect} from "react-redux"
import {addPost} from "../../redux/action"
import {FormWrapper} from "./FormWrapper"

const authors = [
  {
    authorName: "Elon Mask",
    authorPhoto: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
    authorNickname: "@elonmask",
    isVerified: true
  },
  {
    authorName: "Steve Jobs",
    authorPhoto: "https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg",
    authorNickname: "@stevejobs",
    isVerified: true
  },
  {
    authorName: "Bill Gates",
    authorPhoto: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg",
    authorNickname: "@billgates",
    isVerified: true
  },
  {
    authorName: "Crying boy",
    authorPhoto: "https://cs5.pikabu.ru/images/big_size_comm/2015-01_2/14208092339159.jpg",
    authorNickname: "@indexHtml",
    isVerified: false
  }
]

class Form extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      errors: {}
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    if (Object.keys(this.validate()).length !== 0) return

    const formData = new FormData(document.querySelector("#post_form"))
    formData.append("author", document.querySelector("#post_form select[name=author]").value)

    const post = {
      id: Date.now(),
      content: formData.get("postText"),
      image: formData.get("imageUrl"),
      date: new Date(),
      author: {
        authorPhoto: authors.find(author => author.authorName === formData.get("author")).authorPhoto,
        authorName: formData.get("author"),
        authorNickname: authors.find(author => author.authorName === formData.get("author")).authorNickname,
        isVerified: authors.find(author => author.authorName === formData.get("author")).isVerified
      },
      likes: 0,
      comments: 0,
      reposts: 0
    }
    this.props.addPost(post)
  }

  validate = () => {
    const formData = new FormData(document.querySelector("#post_form"))
    formData.append("author", document.querySelector("#post_form select[name=author]").value)

    const errors = {}

    if (formData.get("postText") === "") errors.postText = "Post text is required"
    if (formData.get("author") === "DEFAULT") errors.author = "Author is required"

    this.setState({errors})
    return errors
  }

  render() {
    return (
      <FormWrapper id="post_form">
        <header>
          <h2>Create new post</h2>
        </header>
        <div className="fields">
          <textarea name="postText" placeholder="How are you today?"></textarea>
          {this.state.errors.postText && <div className="error">{this.state.errors.postText}</div>}

          <fieldset>
            <div>
              <label htmlFor="imageUrl">Link to image</label>
              <input type="url" name="imageUrl"/>
            </div>

            <div>
              <label htmlFor="author">Author</label>
              <select name="author" defaultValue={"DEFAULT"}>
                <option disabled value="DEFAULT">-- select an author --</option>
                {authors.map(author => (
                  <option key={author.authorName} value={author.authorName}>{author.authorName}</option>
                ))}
              </select>
              {this.state.errors.author && <div className="error">{this.state.errors.author}</div>}
            </div>
          </fieldset>
          <button onClick={this.handleSubmit}>Create post</button>
        </div>
      </FormWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post))
})

export default connect(null, mapDispatchToProps)(Form)



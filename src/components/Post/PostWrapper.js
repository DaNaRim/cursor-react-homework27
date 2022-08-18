import styled from "styled-components"

export const PostWrapper = styled.section`
  display: flex;
  max-width: 600px;
  margin: 0.6rem 0;
  padding: 15px;
  border: 1px solid #3b4a5a;
  border-radius: ${({theme}) => theme.$borderRadius.$primary};
  background-color: ${({theme}) => theme.$backgroundColors.$primary};
  box-shadow: #15202b 0 7px 29px 0;

  .post_author_photo {
    width: 80px;
    min-width: 80px;
    max-width: 80px;
    height: 80px;
    min-height: 80px;
    max-height: 80px;
    margin-right: 10px;

    img {
      object-fit: cover;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }

  .post_main {
    width: calc(100% - 90px);

    header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;

      .post_info {
        display: flex;
        color: #7f8f9c;

        a {
          text-decoration: none;
          color: inherit;
        }

        a, span, div {
          margin-right: 5px;
        }

        .post_info_author_name,
        .post_info_author_verified {
          font-weight: bold;
          color: white;
        }

        .post_info_dot {
          font-weight: bold;
        }
      }

      .post_wrap_arrow {
        color: #7f8f9c;
        cursor: pointer;
      }
    }

    .post_content {
      position: relative;
      overflow: hidden;
      height: max-content;
      //transition: all 2.3s ease; //not working :(

      &.short {
        max-height: 200px;
      }

      &.short:before {
        position: absolute;
        right: 0;
        left: 0;
        width: 100%;
        height: 200px;
        content: "";
        -webkit-box-shadow: inset 0px -197px 99px -168px #15202b;
        -moz-box-shadow: inset 0px -197px 99px -168px #15202b;
        box-shadow: inset 0px -197px 99px -168px #15202b;
      }

      .post_content_text {
        margin-bottom: 5px;
        text-align: left;
        word-wrap: break-word;
        color: white;
      }

      .post_content_image img {
        display: block;
        max-width: 100%;
        border-radius: 15px;
      }
    }

    .post_links {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      padding: 0 20px;
      color: #7f8f9c;

      .post_link {
        cursor: pointer;

        &.post_link_like.active > svg {
          color: palevioletred;
        }

        &.post_link_comment.active > svg {
          color: cornflowerblue;
        }

        &.post_link_repost.active > svg {
          color: greenyellow;
        }

        span {
          margin-left: 5px;
        }
      }
    }
  }
`

import React from 'react'
import PostBanner from '../components/post/PostBanner'
import PostCategoryDetails from '../components/post/PostCategoryDetails'
import Comment from '../components/post/Comment'

const Post = () => {
  return (
    <>
    <PostBanner/>
    <PostCategoryDetails/>
    <Comment/>
    </>
  )
}

export default Post
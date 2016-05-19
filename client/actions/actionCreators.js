//increment likes
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  }
}

// add comment
export function addcomment(postId, author, comment){
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, i){
  return {
    types: "REMOVE_COMMENT",
    postId,
    i
  }
}

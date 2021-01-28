import React from "react"

const ReviewTile = (props) => {
  
  return (
    <div>
      <h5>{props.review.description}</h5>
      <p>{props.review.rating}</p>
    </div>
  )
}

export default ReviewTile
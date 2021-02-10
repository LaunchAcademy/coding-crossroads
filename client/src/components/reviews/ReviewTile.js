import React from "react"

const ReviewTile = (props) => {

  return (
    <div className="callout secondary">
      <h5>Description: {props.review.description}</h5>
      <p>Rating: {props.review.rating}</p>
    </div>
  )
}

export default ReviewTile
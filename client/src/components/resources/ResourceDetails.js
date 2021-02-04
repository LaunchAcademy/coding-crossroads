import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import getResource from "../../apiRequests/getResource"
import ReviewTile from "../reviews/ReviewTile"

const ResourceDetails = (props) => {
  const [resource, setResource] = useState({
    reviews: []
  })
  
  useEffect(() => {
    const id = props.match.params.id
    getResource(id).then((resource) => {
      setResource(resource)
    })
  }, [])

  const reviewTiles = resource.reviews.map((review) => {
    return (
      <ReviewTile 
        key={review.id}
        review={review}
      />
    )
  })
  
  return(
    <section>
      <Link to="/resources">
        <h3>Back to All Resources</h3>
      </Link>
      <div className="callout">
        <h4>Title: {resource.title}</h4>
        <p>Description: {resource.description}</p>
        <p>URL:
          <a target="_blank" href={`${resource.url}`}> {resource.title}</a>
        </p>
        <p>Resource Type: {resource.resourceType}</p>
      </div>
      
      <div className="callout">
        <h4>Reviews</h4>
        {reviewTiles}
      </div>
    </section>
  )
}

export default ResourceDetails
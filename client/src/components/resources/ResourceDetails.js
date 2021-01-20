import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ResourceDetails = (props) => {
  const [resource, setResource] = useState({})

  const fetchResource = async () => {
    const id = props.match.params.id
    try {
      const response = await fetch(`/api/v1/resources/${id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const parsedResponse = await response.json()
        setResource(parsedResponse.resource)
      }
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchResource()
  }, [])

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
    </section>
  )
}

export default ResourceDetails 
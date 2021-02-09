import React, { useState, useEffect } from "react"

import ResourceForm from "./ResourceForm.js"
import ResourceTile from "./ResourceTile.js"
import getResources from "../../apiRequests/getResources.js"

const ResourceList = props => {
  const [resources, setResources] = useState([])
  
  useEffect(() => {
    getResources().then((data) => {
      setResources(data)
    })
  }, [])

  const addResource = async (formPayload) => {
    // debugger
    // "Content-Type": "application/json",
    // "Content-Type": "multipart/form-data",
    // headers: new Headers({
    //   "Accept": "image/jpeg"
    // }),
    try {
      const response = await fetch("/api/v1/resources", {
        method: "POST",
        body: formPayload
      })
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const responseBody = await response.json()
      debugger
      if (responseBody.resource) {
        setResources([
          ...resources,
          responseBody.resource
        ])
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const resourceTiles = resources.map(resource => {
    return(
       <ResourceTile 
        key={resource.id}
        id={resource.id}
        title={resource.title}
      />
    )
  })
  return(
    <div> 
      <header>
        <h1>Check Out the Latest Coding Resources</h1>
      </header>
      
      <ResourceForm 
        addResource={addResource}
      />

      <main className="callout secondary">
        <ul>
          {resourceTiles}
        </ul>
      </main>
    </div>
  )
}

export default ResourceList

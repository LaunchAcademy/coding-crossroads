import React, { useState, useEffect } from "react";

import ResourceTile from "./ResourceTile.js"
import getResources from "../../apiRequests/getResources.js"

const ResourceList = props => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    getResources().then((data) => {
      setResources(data)
    })
  }, [])

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

      <main className="callout secondary">
        <ul>
          {resourceTiles}
        </ul>
      </main>
    </div>
  )
};

export default ResourceList;

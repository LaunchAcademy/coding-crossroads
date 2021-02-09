import React, { useState } from "react"
import Dropzone from "react-dropzone"

const ResourceForm = (props) => {
  const [resource, setResource] = useState({
    title: "",
    description: "",
    url: "",
    resourceType: "",
    image: {}
  })
  const [uploadedPhoto, setUploadedPhoto] = useState([{}])

  const handleChange = (event) => {
    event.preventDefault()
    setResource({
      ...resource,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleFileUpload = (acceptedFiles) => {
    // setResource({
    //   ...resource, 
    //   acceptedFiles.map(file => Object.assign(file, {
    //   preview: URL.createObjectURL(file)
    // }))})

    setUploadedPhoto(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })))
    
    setResource({
      ...resource,
      image: acceptedFiles[0]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = new FormData()
    body.append("title", resource.title)
    body.append("description", resource.description)
    body.append("url", resource.url)
    body.append("resourceType", resource.resourceType)
    body.append("image", resource.image)
    // debugger
    props.addResource(body)
  }
 
  return (
    <form className="callout" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:
        <input
          type="text"
          id="title"
          name="title"
          value={resource.title}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="description">Description:
        <input
          type="text"
          id="description"
          name="description"
          value={resource.description}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="url">URL:
        <input
          type="text"
          id="url"
          name="url"
          value={resource.url}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="resourceType">Resource Type:
        <input
          type="text"
          id="resourceType"
          name="resourceType"
          value={resource.resourceType}
          onChange={handleChange}
        />
      </label>

      <img src={uploadedPhoto[0].preview} />
      <Dropzone onDrop={handleFileUpload}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>

      <div className="button-group">
        <input type="submit" className="button" value="Add a Resource" />
        <input type="button" className="button" value="Clear Form" />
      </div>
    </form>
  )
}

export default ResourceForm
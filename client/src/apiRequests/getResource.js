const getResource = async (id) => {
  try {
    const response = await fetch(`/api/v1/resources/${id}`)
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    }
    
    const resourceData = await response.json()
    return resourceData.resource
  } catch(err) {
    console.error(`Error in fetch: ${err.message}`)
  }
}

export default getResource

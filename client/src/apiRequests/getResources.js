const getResources = async () => {
  try {
    const response = await fetch("/api/v1/resources")
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    }
    
    const resourceData = await response.json()
    return resourceData.resources
  } catch(err){
    console.error(`Error in fetch: ${err.message}`)
  }
}

export default getResources

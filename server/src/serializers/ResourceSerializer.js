class ResourceSerializer {
  static getSummary(resource) {
    const allowedAttributes = ["id", "title"]

    let serializedResource = {}
    for (const attribute of allowedAttributes) {
      serializedResource[attribute] = resource[attribute]
    }

    return serializedResource
  }

  static getDetails(resource) {
    const allowedAttributes = ["id", "title", "description", "url", "resourceType"]
    let serializedResource = {}

    for (const attribute of allowedAttributes) {
      serializedResource[attribute] = resource[attribute]
    }
    return serializedResource
  }
}

export default ResourceSerializer
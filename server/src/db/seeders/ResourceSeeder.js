import { Resource } from "../../models/index.js"

class ResourceSeeder {
  static async seed() {
    const ResourcesData = [
      {
        title: "GitHub",
        description: "Version Control",
        url: "http://github.com",
        resourceType: "website"
      },
      {
        title: "Clubhouse",
        description: "Stories",
        url: "https://app.clubhouse.com",
        resourceType: "website"
      }
    ]

    for (const singleResourceData of ResourcesData) {
      const currentResource = await Resource.query().findOne({ title: singleResourceData.title })
      if (!currentResource) {
        await Resource.query().insert(singleResourceData)
      }
    }
  }
}
export default ResourceSeeder
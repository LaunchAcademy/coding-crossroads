import { Resource } from "../../models/index.js"

class ResourceSeeder {
  static async seed() {
    const ResourcesData = []

    for (const singleResourceData of ResourcesData) {
      const currentResource = await Resource.query().findOne({ title: singleResourceData.title })
      if (!currentResource) {
        await Resource.query().insert(singleResourceData)
      }
    }
  }
}
export default ResourceSeeder
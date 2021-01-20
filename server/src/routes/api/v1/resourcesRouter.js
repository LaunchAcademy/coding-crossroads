import express from "express";

import Resource from "../../../models/Resource.js"
import ResourceSerializer from "../../../serializers/ResourceSerializer.js"
const resourcesRouter = new express.Router();

resourcesRouter.get("/", async (req, res) => {
  try {
    const resources = await Resource.query()
    const serializedResources = resources.map(resource => ResourceSerializer.getSummary(resource))

    return res.status(200).json({ resources: serializedResources })
  } catch(error){
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

resourcesRouter.get("/:id", async (req,res) => {
  try {
    const resource = await Resource.query().findById(req.params.id).throwIfNotFound()
    const serializedResource = ResourceSerializer.getDetails(resource)
    return res.status(200).json({ resource: serializedResource })
  } catch (err) {
    return res.status(500).json({ errors: err })
  }
})


export default resourcesRouter;

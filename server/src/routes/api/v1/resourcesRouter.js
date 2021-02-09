import express from "express"
import objection from "objection"
const { ValidationError } = objection

import multer from "multer"
const upload = multer()

import uploadImage from "../../../services/uploadImage.cjs"

import Resource from "../../../models/Resource.js"
import ResourceSerializer from "../../../serializers/ResourceSerializer.js"
import cleanUserInput from "../../../services/cleanUserInput.js"


const resourcesRouter = new express.Router()

// resourcesRouter.use(upload.any())

resourcesRouter.get("/", async (req, res) => {
  try {
    const resources = await Resource.query()
    const serializedResources = resources.map(resource => ResourceSerializer.getSummary(resource))

    return res.status(200).json({ resources: serializedResources })
  } catch (error){
    return res.status(500).json({ errors: error })
  }
})

resourcesRouter.get("/:id", async (req, res) => {
  try {
    const resource = await Resource.query().findById(req.params.id).throwIfNotFound()
    const serializedResource = await ResourceSerializer.getDetails(resource)
    return res.status(200).json({ resource: serializedResource })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

// resourcesRouter.post("/", uploadImage.single("image"), async (req, res) => {
resourcesRouter.post("/", upload.any(), async (req, res) => {
  debugger
  try {
    const singleUpload = uploadImage.single("image")
    await singleUpload(req, res, function(err) {
      debugger
      if (err) {
        return res.status(422).json({ errors: [{ title: "Image Upload Error", detail: err.message }] })
      }
      debugger

      return res.status(201).json({})
    })
    
    const { body } = req
    const cleanedInput = cleanUserInput(body)
    
    debugger
    
    const newData = {
      ...cleanedInput,
      userId: req.user.id
    }
    debugger

    const resource = await Resource.query().insertAndFetch(newData)
    res.status(201).json({ resource })
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(422).json({ errors: error.data })
    } else {
      res.status(500).json({ errors: error })
    }
  }
})


export default resourcesRouter

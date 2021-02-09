const AWS = require("aws-sdk")
const multer = require("multer")
const multerS3 = require("multer-s3")

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "us-east-1"
})

const s3 = new AWS.S3()

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true)
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG are allowed!"), false)
  }
}

const uploadImage = multer({
  fileFilter,
  storage: multerS3({
    ACL: "public-read",
    s3: s3,
    bucket: "coding-crossroads",
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = uploadImage
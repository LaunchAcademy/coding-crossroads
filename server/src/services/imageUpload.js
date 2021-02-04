const aws = require("aws-sdk")
const multer = require("multer")
const multerS3 = require("multer-s3")

// import multer from "multer"
// import multerS3 from "multer-s3"
// import aws from "aws-sdk"

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: "us-east-1"
})

const s3 = new aws.s3()

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
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

// export default uploadImage
module.exports = uploadImage
import multer from "multer"
import multerS3 from "multer-s3"
import aws from "aws-sdk"

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: "us-east-1"
})

const s3 = new aws.s3()


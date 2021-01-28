import { Resource, Review } from "../../models/index.js"

class ReviewSeeder {
  static async seed() {
    const gitResource = await Resource.query().findOne({ title: "GitHub" })

    const ReviewsData = [
      {
        description: "GitHub",
        rating: 5,
      },
      {
        description: "Clubhouse",
        rating: 10
      }
    ]

    for (const singleReviewData of ReviewsData) {
      const currentReview = await Review.query().findOne({ description: singleReviewData.description })
      if (!currentReview) {
        await gitResource.$relatedQuery("reviews").insert(singleReviewData)
      }
    }
  }
}
export default ReviewSeeder
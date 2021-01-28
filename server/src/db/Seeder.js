	/* eslint-disable no-console */
  import { connection } from "../boot.js"

  import ResourceSeeder from "./seeders/ResourceSeeder.js"
  import ReviewSeeder from "./seeders/ReviewSeeder.js"
  
  class Seeder {
    static async seed() {
      console.log("Seeding Resources")
      await ResourceSeeder.seed()

      console.log("Seeding Reviews")
      await ReviewSeeder.seed()

      console.log("Done!")
      await connection.destroy()
    }
  }
  export default Seeder
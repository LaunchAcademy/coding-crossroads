const Model = require("./Model")

class Review extends Model {
  static get tableName() {
    return "reviews"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["description", "rating"],
      additionalProperties: false,
      properties: {
        description: { type: "string" },
        rating: { type: ["integer", "string"] },
        resourceId: { type: ["integer", "string" ]}
      }
    }
  }

  static get relationMappings() {
    const Resource = require("./Resource")

    return {
      resource: {
        relation: Model.BelongsToOneRelation,
        modelClass: Resource,
        join: {
          from: "reviews.resourceId",
          to: "resources.id"
        }
      }
    }
  }
}

module.exports = Review
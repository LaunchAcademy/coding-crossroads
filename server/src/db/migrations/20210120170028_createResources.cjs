/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("resources", (table) => {
    table.bigIncrements("id");
    table.string("title").notNullable()
    table.text("description").notNullable()
    table.string("url")
    table.string("resourceType").notNullable()
    table.timestamp("createdAt").notNullable().unsigned().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().unsigned().defaultTo(knex.fn.now())
  })
};

/**
 * @param {Knex} knex
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("resources")
};

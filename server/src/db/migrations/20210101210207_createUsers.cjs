/* eslint-disable no-console */
const tableName = "users"

/**
 * @typedef {import("knex")} Knex
 */

 /**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  const tableExists = await knex.schema.hasTable(tableName)

  if (!tableExists) {
    return knex.schema.createTable(tableName, (table) => {
      table.bigIncrements("id")
      table.string("email").notNullable().unique()
      table.string("cryptedPassword").notNullable()
      table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
      table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
  }

  return 1
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists(tableName)
}

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zmx17vd2d8lkjbb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "allj1dyz",
    "name": "completed",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zmx17vd2d8lkjbb")

  // remove
  collection.schema.removeField("allj1dyz")

  return dao.saveCollection(collection)
})

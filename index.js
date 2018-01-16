var recipes = new Object ({})

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
}

function deleteFromObjectByKey(object, key) {
  newObject = Object.assign({}, object)
  delete newObject.key
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}

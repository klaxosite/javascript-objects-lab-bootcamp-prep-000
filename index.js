var recipes = new Object({})

function updateObjectWithKeyAndValue(object, key, value){
  return object
  return Object.assign({}, obj, { [key]: value})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object


}

function deleteFromObjectByKey(object, key){

}

function destructivelyDeleteFromObjectByKey(object, key){


}

var recipes = new Object({})

function updateObjectWithKeyAndValue(object, key, value){
  update = Object.assign({}, object)
  update[key] = value;
  return update

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object


}

function deleteFromObjectByKey(object, key){


}

function destructivelyDeleteFromObjectByKey(object, key){


}

function updateObjectWithKeyAndValue(object, key, value){
  return object.key=value
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object,{[key]:value})
}

function deleteFromObjectByKey(object, key){
  var targetobject = object;
  // delete targetobject[key]
  return delete targetobject[key]
}

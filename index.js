let driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    const newDriver = {...obj}
    newDriver[key] = value;
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj
}

function deleteFromDriverByKey(obj, key) {
    const destructivelyManipulatedObject = {...obj}
    delete destructivelyManipulatedObject[key]
    return destructivelyManipulatedObject 
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]
    return obj
}
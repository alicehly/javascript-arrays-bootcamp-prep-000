var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return[element,...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function addElementToEndOfArray(array,element) {
  return[...array,element]
}

function accessElementInArray(array, index) {
  return array[index]
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function desctructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift
}

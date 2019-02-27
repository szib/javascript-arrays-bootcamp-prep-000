var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, element) {
  return [element, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element)
  return arr
}

function addElementToEndOfArray(arr, element) {
  return [...arr, element]
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element)
  return arr
}

function accessElementInArray(arr, idx) {
  return arr[idx]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.unshift
}

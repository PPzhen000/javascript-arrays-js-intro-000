var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,ele){
  return [ele..., array];
}

function destructivelyAddElementToBeginningOfArray(array,ele){
  array.unshift(ele);
  return array;
}

function addElementToEndOfArray(array,ele){
  return [...array, ele];
}

function destructivelyAddElementToEndOfArray(array,ele){
  array.push(ele);
  return array;
}

function accessElementInArray(array,idx){
  return array[idx];
}

function 
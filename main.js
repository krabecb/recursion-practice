const factorial = (num) => {
    if (num < 0) { return undefined }
    if (num === 0) { return 1 }
    //BASE CASE
    if (num === 1) {
      return num
    } else {
      return num * factorial(num - 1)
    }
  }
  
  // factorial(3)
  // factorial(5)
  
  const lengthOfString = (str, len = 0) => {
    if (!str.length) { return len }
    // console.log(str, str.length, len)
    let restOfString = str.substring(1)
    return lengthOfString(restOfString, ++len)
  }
  // lengthOfString('hello')
  
  function sumOfArray(array, sum = 0) {
    // console.log(array, sum)
    // This function returns the sum of all of the numbers in a given array.
    //BASE CASE: When we reach the end of the array -> idx === array.length - 1
    if (!array.length) return sum
    sum += array.at(0)
    // console.log(sum)
    array.shift()
    // console.log(array)
    return sumOfArray(array, sum)
  }
  
  // sumOfArray([1, 2])
  // sumOfArray([1, 2, 3])
  
  function findMax(array, max = 0) {
    // This function returns the largest number in a given array.
    if (!array.length) return max
    if (max < array.at(0)) {
      max = array.at(0)
      array.shift()
    } else {
      array.shift()
    }
    return findMax(array, max)
  }
  
  // findMax([1, 2])
  // findMax([9, 1, 2, 5])
// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
// Test created!
// Test failed!!

describe('pplDesc', () =>{
  it('takes in an array of objects and returns an array with a sentence about each person with their name capitalized', () =>{
    expect(pplDesc(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]



// b) Create the function that makes the test pass.

// Declare a function that takes in an array
// Declare a variable 'answer' to equal 
// Iteration with .map on given array where value == obj
// Declare a variable 'names' to equal obj.name.split(" ")
// Declare another variable 'yesCap' to equal names.map
// withtin 2nd .map, return name[0].toUpperCase() + name.slice(1)
// within first .map, return yesCap.join(" ") + " is " + obj.occupation + "."
// for main function, return answer
 
const pplDesc = (arr) => {
  answer = arr.map(obj =>{
    let names = obj.name.split(" ")
    let yesCap = names.map(name =>{
      return name[0].toUpperCase() + name.slice(1)
    })
    return yesCap.join(" ") + " is " + obj.occupation + "."
  })
  return answer
}




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
// Test created!
// Test failed!!

describe('mathOnly', () => {
  it('akes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', () =>{
    expect(mathOnly(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(mathOnly(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]



// b) Create the function that makes the test pass.

// Declare a function that takes in an array
// Declare a variable 'nums' equal to filtering given array for just numbers
// return nums using .map to return the remainder of the numbers when divided by 3


const mathOnly = (arr) => {
  let nums = arr.filter(value => typeof value === 'number')
  return nums.map(value => value % 3)
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
// Test created!
// Test failed!!

describe('sumCubes', () =>{
  it('takes in an array of numbers and returns the sum of all the numbers cubed', ()=>{
    expect(sumCubes(cubeAndSum1)).toEqual(99)
    expect(sumCubes(cubeAndSum2)).toEqual(1125)
  })
})

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



// b) Create the function that makes the test pass.

// Declare a function that takes in an array
// Declare a variable 'cube' to equal the given array with .map to give the value to the power of 3
// Return cube with .reduce to take the values and add them together

const sumCubes = (arr) => {
  let cube = arr.map(value => value**3)
  return cube.reduce((value1, value2) => value1 + value2)
}

// I feel really good about this assessment!! (it'll be reeeeallly awkward if I just tanked this one...) I'm kinda sad this is the end!
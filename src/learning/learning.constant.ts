export const learningList = [
  {
    id: 1,
    title: 'Array Concepts',
    description: 'Array methods all with examples',
    image: '',
    groupBy: [],
    filesList: [
      {
        "title": "What is Array",
        "description": `
        1) An array is a data structure used to store multiple elements in a single variable.
        2) You can access elements by their index (position) in the array and assign values to specific positions.`,
        "isGroup": false,
        "codeLists": [
          {
            "filename": "arrayAccess.js",
            "title": "Accessing and Assigning Values in Array",
            "description": "1) Access elements using their index. 2) Assign a value to a specific index.",
            "code": `
                  let arr = [1, 2, 3]; // array with three elements
      
                  // Accessing elements
                  let firstElement = arr[0]; // accessing first element, returns 1
                  let secondElement = arr[1]; // accessing second element, returns 2
      
                  // Assigning a value to a specific index
                  arr[2] = 10; // assigns 10 to the third element (index 2)
      
                  // sample output
                  console.log(arr); // [1, 2, 10]
                  console.log(firstElement); // 1
                  console.log(secondElement); // 2
                  `
          }
        ]
      },
      {
        "title": "Array Filter Method",
        "description": "The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
        "isGroup": false,
        "codeLists": [
          {
            "filename": "filter.js",
            "title": "Array Filter Example",
            "description": "1) Filter is used to create a new array with only the elements that pass a specified condition.",
            "code": `
                  let arr = [1, 2, 3, 4, 5]; // an array of numbers
      
                  // Filter: keep only even numbers
                  let filteredArr = arr.filter(x => x % 2 === 0); // [2, 4] will be returned.
      
                  // sample output
                  console.log(filteredArr); // [2, 4]
                  `
          }
        ]
      },          
      {
        title: 'Find and Find Last',
        description: `
        1) Find returns the value of the first element in the array that satisfies the provided testing function
        2) Find Last returns the value of the last element in the array that satisfies the provided testing function
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'find.js',
            title: 'Array Find example',
            description: `
            1) Find returns the value of the first element in the array that satisfies the provided testing function
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Find (returns the first element greater than 8)
                  let foundElement = arr.find(element => element > 8); // 9 will be returned.
                  
                  // sample output
                  console.log(foundElement); // 9
                  `,
          },
          {
            filename: 'findLast.js',
            title: 'Array Find Last example',
            description: `
            1) Find Last returns the value of the last element in the array that satisfies the provided testing function
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // FindLast (returns the last element greater than 8)
                  let foundLastElement = arr.findLast(element => element > 8); // 33 will be returned.
                  
                  // sample output
                  console.log(foundLastElement); // 33
                  `,
          },
        ],
      },
      {
        title: 'Find Index and Find Last Index',
        description: `
        1) Find Index returns the index of the first element in the array that satisfies the provided testing function
        2) Find Last Index returns the index of the last element in the array that satisfies the provided testing function
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'findIndex.js',
            title: 'Array Find Index example',
            description: `
            1) Find Index returns the index of the first element in the array that satisfies the provided testing function
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // FindIndex (returns the index of the first element greater than 8)
                  let foundIndex = arr.findIndex(element => element > 8); // 3 will be returned.
                  
                  // sample output
                  console.log(foundIndex); // 3
                  `,
          },
          {
            filename: 'findLastIndex.js',
            title: 'Array Find Last Index example',
            description: `
            1) Find Last Index returns the index of the last element in the array that satisfies the provided testing function
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // FindLastIndex (returns the index of the last element greater than 8)
                  let foundLastIndex = arr.findLastIndex(element => element > 8); // 4 will be returned.
                  
                  // sample output
                  console.log(foundLastIndex); // 4
                  `,
          },
        ],
      },
      {
        title: 'Some and Every',
        description: `
        1) Some tests whether at least one element in the array passes the test implemented by the provided function
        2) Every tests whether all elements in the array pass the test implemented by the provided function
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'some.js',
            title: 'Array Some example',
            description: `
            1) Some tests whether at least one element in the array passes the test implemented by the provided function
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Some (checks if any element in the array is greater than 30)
                  let hasElementGreaterThanThirty = arr.some(element => element > 30); // true will be returned.
                  
                  // sample output
                  console.log(hasElementGreaterThanThirty); // true
                  `,
          },
          {
            filename: 'every.js',
            title: 'Array Every example',
            description: `
            1) Every tests whether all elements in the array pass the test implemented by the provided function
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Every (checks if every element in the array is greater than 4)
                  let isAllGreaterThanFour = arr.every(element => element > 4 ); // true will be returned.
                  
                  // sample output
                  console.log(isAllGreaterThanFour); // true
                  `,
          },
        ],
      },
      {
        title: 'Map, ForEach, ForOf, and ForIn',
        description: `
        1) Map creates a new array by applying a function to each element of the original array
        2) ForEach executes a function for each element in the array
        3) ForOf iterates over the elements of an array
        4) ForIn iterates over the properties of an array
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'map.js',
            title: 'Array Map example',
            description: `
            1) Map creates a new array by applying a function to each element of the original array
            `,
            code: `
                  let arr = [1, 2, 3, 4]; // new array
                  
                  // Map (applies a function to each element)
                  let newArr = arr.map(element => element * 2); // [2, 4, 6, 8] will be returned.
                  
                  // sample output
                  console.log(newArr); // [2, 4, 6, 8]
                  `,
          },
          {
            filename: 'forEach.js',
            title: 'Array ForEach example',
            description: `
            1) ForEach executes a function for each element in the array
            `,
            code: `
                  let arr = [1, 2, 3, 4]; // new array
                  
                  // ForEach (executes a function for each element)
                  arr.forEach(element => console.log(element)); // 1, 2, 3, 4 will be logged.
                  `,
          },
          {
            filename: 'forOf.js',
            title: 'Array ForOf example',
            description: `
            1) ForOf iterates over the elements of an array
            `,
            code: `
                  let arr = [1, 2, 3, 4]; // new array
                  
                  // ForOf (iterates over the elements)
                  for (let element of arr) {
                    console.log(element); // 1, 2, 3, 4 will be logged.
                  }
                  `,
          },
          {
            filename: 'forIn.js',
            title: 'Array ForIn example',
            description: `
            1) ForIn iterates over the properties of an array
            `,
            code: `
                  let arr = [1, 2, 3, 4]; // new array
                  
                  // ForIn (iterates over the properties)
                  for (let index in arr) {
                    console.log(index); // 0, 1, 2, 3 will be logged.
                  }
                  `,
          },
        ],
      },
      {
        title: 'Push and Pop',
        description: `
        1) Push adds an element to the end of the array
        2) Pop removes the last element from the array
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'push.js',
            title: 'Array Push example',
            description: `
            1) Push adds an element to the end of the array
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Push (adds an element to the end of the array)
                  arr.push(10); // [5, 6, 8, 9, 33, 10] will be the new array.
                  
                  // sample output
                  console.log(arr); // [5, 6, 8, 9, 33, 10]
                  `,
          },
          {
            filename: 'pop.js',
            title: 'Array Pop example',
            description: `
            1) Pop removes the last element from the array
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Pop (removes the last element of the array)
                  let lastElement = arr.pop(); // 33 will be returned, and the array will become [5, 6, 8, 9].
                  
                  // sample output
                  console.log(lastElement); // 33
                  console.log(arr); // [5, 6, 8, 9]
                  `,
          },
        ],
      },
      {
        title: 'Shift and Unshift',
        description: `
        1) Shift removes the first element from the array
        2) Unshift adds an element to the beginning of the array
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'shift .js',
            title: 'Array Shift example',
            description: `
            1) Shift removes the first element from the array
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Shift (removes the first element of the array)
                  let firstElement = arr.shift(); // 5 will be returned, and the array will become [6, 8, 9, 33].
                  
                  // sample output
                  console.log(firstElement); // 5
                  console.log(arr); // [6, 8, 9, 33]
                  `,
          },
          {
            filename: 'unshift.js',
            title: 'Array Unshift example',
            description: `
            1) Unshift adds an element to the beginning of the array
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Unshift (adds an element to the beginning of the array)
                  arr.unshift(3); // [3, 5, 6, 8, 9, 33] will be the new array.
                  
                  // sample output
                  console.log(arr); // [3, 5, 6, 8, 9, 33]
                  `,
          },
        ],
      },
      {
        title: 'Concat and Slice',
        description: `
        1) Concat merges two or more arrays into a new array
        2) Slice returns a portion of the array into a new array
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'concat.js',
            title: 'Array Concat example',
            description: `
            1) Concat merges two or more arrays into a new array
            `,
            code: `
                  let arr1 = [5, 6, 8];
                  let arr2 = [9, 33];
                  
                  // Concat (merges two arrays into one)
                  let mergedArray = arr1.concat(arr2); // [5, 6, 8, 9, 33] will be the new array.
                  
                  // sample output
                  console.log(mergedArray); // [5, 6, 8, 9, 33]
                  `,
          },
          {
            filename: 'slice.js',
            title: 'Array Slice example',
            description: `
            1) Slice returns a portion of the array into a new array
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Slice (returns a portion of the array)
                  let slicedArray = arr.slice(1, 3); // [6, 8] will be returned.
                  
                  // sample output
                  console.log(slicedArray); // [6, 8]
                  `,
          },
        ],
      },
      {
        title: 'Splice and Fill',
        description: `
        1) Splice changes the contents of an array by removing or replacing existing elements and/or adding new elements
        2) Fill changes all elements in an array to a static value from a start index to an end index
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'splice.js',
            title: 'Array Splice example',
            description: `
            1) Splice changes the contents of an array by removing or replacing existing elements and/or adding new elements
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Splice (removes elements and optionally adds elements)
                  arr.splice(1, 2, 7, 10); // removes two elements starting at index 1, and adds 7 and 10.
                  
                  // sample output
                  console.log(arr); // [5, 7, 10, 9, 33]
                  `,
          },
          {
            filename: 'fill.js',
            title: 'Array Fill example',
            description: `
            1) Fill changes all elements in an array to a static value from a start index to an end index
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Fill (fills the array from index 1 to 3 with value 0)
                  arr.fill(0, 1, 3); // [5, 0, 0, 9, 33] will be returned.
                  
                  // sample output
                  console.log(arr); // [5, 0, 0, 9, 33]
                  `,
          },
        ],
      },
      {
        title: 'Join and IndexOf',
        description: `
        1) Join joins all elements of an array into a string
        2) IndexOf returns the first index at which a given element can be found in the array
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'join.js',
            title: 'Array Join example',
            description: `
            1) Join joins all elements of an array into a string
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Join (joins elements of the array into a string separated by '-')
                  let joinedString = arr.join('-'); // '5-6-8-9-33' will be returned.
                  
                  // sample output
                  console.log(joinedString); // '5-6-8-9-33'
                  `,
          },
          {
            filename: 'indexOf.js',
            title: 'Array IndexOf example',
            description: `
            1) IndexOf returns the first index at which a given element can be found in the array
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // IndexOf (returns the index of the first occurrence of 8)
                  let index = arr.indexOf(8); // 2 will be returned.
                  
                  // sample output
                  console.log(index); // 2
                  `,
          },
        ],
      },
      {
        title: 'Flat and FlatMap',
        description: `
        1) Flat creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
        2) FlatMap first maps each element using a mapping function, then flattens the result into a new array
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'flat.js',
            title: 'Array Flat example',
            description: `
            1) Flat creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
            `,
            code: `
                  let arr = [1, 2, [3, 4], [[5]]]; // new array
                  
                  // Flat (flattens the array up to depth 2)
                  let flattenedArr = arr.flat(2); // [1, 2, 3, 4, 5] will be returned.
                  
                  // sample output
                  console.log(flattenedArr); // [1, 2, 3, 4, 5]
                  `,
          },
          {
            filename: 'flatMap.js',
            title: 'Array FlatMap example',
            description: `
            1) FlatMap first maps each element using a mapping function, then flattens the result into a new array
            `,
            code: `
                  let arr = [1, 2, 3]; // new array
                  
                  // FlatMap (maps each value and flattens the result)
                  let flatMappedArr = arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6] will be returned.
                  
                  // sample output
                  console.log(flatMappedArr); // [1, 2, 2, 4, 3, 6]
                  `,
          },
        ],
      },
      {
        title: 'From and Of',
        description: `
        1) From creates a new array from an array-like or iterable object
        2) Of creates a new array with the provided arguments
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'from.js',
            title: 'Array From example',
            description: `
            1) From creates a new array from an array-like or iterable object
            `,
            code: `
                  let str = 'hello'; // a string
                  
                  // Array.from (converts a string into an array of characters)
                  let arr = Array.from(str); // ['h', 'e', 'l', 'l', 'o'] will be returned.
                  
                  // sample output
                  console.log(arr); // ['h', 'e', 'l', 'l', 'o']
                  `,
          },
          {
            filename: 'of.js',
            title: 'Array Of example',
            description: `
            1) Of creates a new array with the provided arguments
            `,
            code: `
                  // Array.of (creates an array from arguments)
                  let arr = Array.of(7, 9, 33); // [7, 9, 33] will be returned.
                  
                  // sample output
                  console.log(arr); // [7, 9, 33]
                  `,
          },
        ],
      },
      {
        title: 'CopyWithin',
        description: `
        1) CopyWithin copies part of an array to another location in the same array
        `,
        isGroup: false,
        codeLists: [
          {
            filename: 'copyWithin.js',
            title: 'Array CopyWithin example',
            description: `
            1) CopyWithin copies part of an array to another location in the same array
            `,
            code: `
                  let arr = [1, 2, 3, 4, 5]; // new array
                  
                  // CopyWithin (copies elements to index 0)
                  arr.copyWithin(0, 3); // [4, 5, 3, 4, 5] will be returned.
                  
                  // sample output
                  console.log(arr); // [4, 5, 3, 4, 5]
                  `,
          },
        ],
      },
      {
        title: 'Reduce',
        description: `
        1) Reduce executes a reducer function on each element of the array, resulting in a single output value
        `,
        isGroup: false,
        codeLists: [
          {
            filename: 'reduce.js',
            title: 'Array Reduce example',
            description: `
            1) Reduce executes a reducer function on each element of the array, resulting in a single output value
            `,
            code: `
                  let arr = [1, 2, 3, 4]; // new array
                  
                  // Reduce (sums all elements of the array)
                  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 10 will be returned.
                  
                  // sample output
                  console.log(sum); // 10
                  `,
          },
        ],
      },
      {
        title: 'Sort and Reverse',
        description: `
        1) Sort sorts the elements of an array in place and returns the sorted array
        2) Reverse reverses the order of the elements in an array
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'sort.js',
            title: 'Array Sort example',
            description: `
            1) Sort sorts the elements of an array in place and returns the sorted array
            `,
            code: `
                  let arr = [5, 33, 6, 9, 8]; // new array
                  
                  // Sort (sorts the array in ascending order)
                  arr.sort((a, b) => a - b); // [5, 6, 8, 9, 33] will be returned.
                  
                  // sample output
                  console.log(arr); // [5, 6, 8, 9, 33]
                  `,
          },
          {
            filename: 'reverse.js',
            title: 'Array Reverse example',
            description: `
            1) Reverse reverses the order of the elements in an array
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Reverse (reverses the order of elements)
                  arr.reverse(); // [33, 9, 8, 6, 5] will be returned.
                  
                  // sample output
                  console.log(arr); // [33, 9, 8, 6, 5]
                  `,
          },
        ],
      },
      {
        title: 'Includes',
        description: `
        1) Includes determines whether an array includes a certain value
        `,
        isGroup: false,
        codeLists: [
          {
            filename: 'includes.js',
            title: 'Array Includes example',
            description: `
            1) Includes determines whether an array includes a certain value
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Includes (checks if the array includes the number 9)
                  let hasNine = arr.includes(9); // true will be returned.
                  
                  // sample output
                  console.log(hasNine); // true
                  `,
          },
        ],
      },
      {
        title: 'Length',
        description: `
        1) Length returns the number of elements in an array
        `,
        isGroup: false,
        codeLists: [
          {
            filename: 'length.js',
            title: 'Array Length example',
            description: `
            1) Length returns the number of elements in an array
            `,
            code: `
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Length (returns the number of elements in the array)
                  let length = arr.length; // 5 will be returned.
                  
                  // sample output
                  console.log(length); // 5
                  `,
          },
        ],
      }
    ]
  },
  {
    id: 2,
    title: 'Object Concepts',
    description: 'Object methods all with examples',
    image: '',
    groupBy: [],
    filesList: [
      {
        title: 'hasOwnProperty',
        description: `
        1) It will check whether key is present or not,
        2) If present it will return true otherwise false`,
        isGroup: false,
        codeLists: [
          {
            filename: 'findIndex.js',
            title: 'hasOwnProperty example',
            description: `
            1) It will check whether key is present or not,
            2) If present it will return true otherwise false
            `,
            code: `
              // Create an object called person with two properties: name and age
              const person = { 
                      name: 'John',
                  age: 30 
              };

              // Check if person has a property called name, returns true
              console.log(person.hasOwnProperty('name'));  // true

              // Check if person has a property called age, returns true
              console.log(person.hasOwnProperty('age'));   // true

              // Check if person has a property called city, returns false because it doesn't exist
              console.log(person.hasOwnProperty('city'));  // false
                `,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Array of object Concepts',
    description: 'Object methods all with examples',
    image: '',
    groupBy: [],
    filesList: 
    [
      {
        title: 'Array of object',
        description: `
        1) An array of objects is a collection of multiple objects inside an array.`,
        isGroup: false,
        codeLists: [
          {
            "filename": "arrayOfObjects.js",
            "title": "Array of Objects Example",
            "description": `
              1) An array of objects is a collection of multiple objects inside an array.
              2) You can access an object by its index and access the properties of the object using dot notation.
            `,
            "code": `
              // Create an array of objects
              const people = [
                { name: 'John', age: 30 },   // Object 1
                { name: 'Jane', age: 25 },   // Object 2
                { name: 'Jack', age: 35 }    // Object 3
              ];

              // Access object
              console.log(people[0]); // Output: { name: 'John', age: 30 }
          
              // Access the first object (index 0) and its name property
              console.log(people[0].name); // Output: 'John'
          
              // Access the second object (index 1) and its age property
              console.log(people[1].age);  // Output: 25
          
              // Access the third object (index 2) and both properties
              console.log(people[2].name, people[2].age);  // Output: 'Jack', 35
            `
          }
          
        ],
      },
      {
        "isGroup": true,
        "title": "Find and FindLast",
        "description": "Examples for Array.find and Array.findLast with arrays of objects",
        "codeLists": [
          {
            "filename": "find.js",
            "title": "Array.find Example",
            "description": "1) The 'find' method returns the first element that satisfies the provided testing function. If not found, it returns undefined.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Find person with age 25
              const result = people.find(person => person.age === 25);
              console.log(result);  // { name: 'Jane', age: 25 }
  
              // Find person with age 40 (not found)
              const resultNotFound = people.find(person => person.age === 40);
              console.log(resultNotFound);  // undefined
            `
          },
          {
            "filename": "findLast.js",
            "title": "Array.findLast Example",
            "description": "1) The 'findLast' method returns the last element that satisfies the provided testing function. If not found, it returns undefined.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Find the last person older than 25
              const lastPerson = people.findLast(person => person.age > 25);
              console.log(lastPerson);  // { name: 'Jack', age: 35 }
  
              // Find the last person older than 40 (not found)
              const lastPersonNotFound = people.findLast(person => person.age > 40);
              console.log(lastPersonNotFound);  // undefined
            `
          }
        ]
      },
      {
        "isGroup": true,
        "title": "FindIndex and FindLastIndex",
        "description": "Examples for Array.findIndex and Array.findLastIndex with arrays of objects",
        "codeLists": [
          {
            "filename": "findIndex.js",
            "title": "Array.findIndex Example",
            "description": "1) The 'findIndex' method returns the index of the first element that satisfies the provided testing function. If not found, it returns -1.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Find index of person with age 25
              const index = people.findIndex(person => person.age === 25);
              console.log(index);  // 1
  
              // Find index of person with age 40 (not found)
              const indexNotFound = people.findIndex(person => person.age === 40);
              console.log(indexNotFound);  // -1
            `
          },
          {
            "filename": "findLastIndex.js",
            "title": "Array.findLastIndex Example",
            "description": "1) The 'findLastIndex' method returns the index of the last element that satisfies the provided testing function. If not found, it returns -1.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Find last index of person older than 25
              const lastIndex = people.findLastIndex(person => person.age > 25);
              console.log(lastIndex);  // 2
  
              // Find last index of person older than 40 (not found)
              const lastIndexNotFound = people.findLastIndex(person => person.age > 40);
              console.log(lastIndexNotFound);  // -1
            `
          }
        ]
      },
      {
        "isGroup": true,
        "title": "Shift and Unshift",
        "description": "Examples for Array.shift and Array.unshift with arrays of objects",
        "codeLists": [
          {
            "filename": "shift.js",
            "title": "Array.shift Example",
            "description": "1) The 'shift' method removes the first element from an array and returns it.",
            "code": `
              let people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Remove the first element
              const firstPerson = people.shift();
              console.log(firstPerson);  // { name: 'John', age: 30 }
            `
          },
          {
            "filename": "unshift.js",
            "title": "Array.unshift Example",
            "description": "1) The 'unshift' method adds one or more elements to the beginning of an array and returns the new length.",
            "code": `
              let people = [
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Add a new person at the beginning
              const newLength = people.unshift({ name: 'Alice', age: 22 });
              console.log(people);  // [{ name: 'Alice', age: 22 }, { name: 'Jane', age: 25 }, { name: 'Jack', age: 35 }]
            `
          }
        ]
      },
      {
        "isGroup": true,
        "title": "Push and Pop",
        "description": "Examples for Array.push and Array.pop with arrays of objects",
        "codeLists": [
          {
            "filename": "push.js",
            "title": "Array.push Example",
            "description": "1) The 'push' method adds one or more elements to the end of an array and returns the new length.",
            "code": `
              let people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 }
              ];
  
              // Add a new person at the end
              const newLength = people.push({ name: 'Jack', age: 35 });
              console.log(people);  // [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Jack', age: 35 }]
            `
          },
          {
            "filename": "pop.js",
            "title": "Array.pop Example",
            "description": "1) The 'pop' method removes the last element from an array and returns it.",
            "code": `
              let people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Remove the last person
              const lastPerson = people.pop();
              console.log(lastPerson);  // { name: 'Jack', age: 35 }
            `
          }
        ]
      },
      {
        "isGroup": true,
        "title": "Some and Every",
        "description": "Examples for Array.some and Array.every with arrays of objects",
        "codeLists": [
          {
            "filename": "some.js",
            "title": "Array.some Example",
            "description": "1) The 'some' method checks if at least one element in the array satisfies the provided testing function.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Check if there's any person older than 30
              const isOlderThan30 = people.some(person => person.age > 30);
              console.log(isOlderThan30);  // true
            `
          },
          {
            "filename": "every.js",
            "title": "Array.every Example",
            "description": "1) The 'every' method checks if all elements in the array satisfy the provided testing function.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Check if every person is older than 20
              const areAllOlderThan20 = people.every(person => person.age > 20);
              console.log(areAllOlderThan20);  // true
  
              // Check if every person is older than 30
              const areAllOlderThan30 = people.every(person => person.age > 30);
              console.log(areAllOlderThan30);  // false
            `
          }
        ]
      },
      {
        "isGroup": true,
        "title": "Looping Methods: forEach, map, forIn, forOf, reduce, filter",
        "description": "Examples for looping over arrays of objects using different looping methods.",
        "codeLists": [
          {
            "filename": "forEach.js",
            "title": "Array.forEach Example",
            "description": "1) The 'forEach' method executes a provided function once for each array element.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Use forEach to log each person's name
              people.forEach(person => console.log(person.name));
              // Output: John, Jane, Jack
            `
          },
          {
            "filename": "map.js",
            "title": "Array.map Example",
            "description": "1) The 'map' method creates a new array populated with the results of calling a provided function on every element in the calling array.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Use map to create a new array of names
              const names = people.map(person => person.name);
              console.log(names);  // Output: ['John', 'Jane', 'Jack']
            `
          },
          {
            "filename": "forIn.js",
            "title": "for...in Example",
            "description": "1) The 'for...in' statement iterates over all enumerable properties of an object.",
            "code": `
              const person = { name: 'John', age: 30, city: 'New York' };
  
              // Use for...in to loop through properties of an object
              for (let key in person) {
                console.log(key + ': ' + person[key]);
              }
              // Output: name: John, age: 30, city: New York
            `
          },
          {
            "filename": "forOf.js",
            "title": "for...of Example",
            "description": "1) The 'for...of' statement creates a loop iterating over iterable objects, like arrays.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Use for...of to loop through the array of objects
              for (let person of people) {
                console.log(person.name);
              }
              // Output: John, Jane, Jack
            `
          },
          {
            "filename": "reduce.js",
            "title": "Array.reduce Example",
            "description": "1) The 'reduce' method executes a reducer function on each element of the array, resulting in a single output value.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Use reduce to sum the ages of all people
              const totalAge = people.reduce((sum, person) => sum + person.age, 0);
              console.log(totalAge);  // Output: 90
            `
          },
          {
            "filename": "filter.js",
            "title": "Array.filter Example",
            "description": "1) The 'filter' method creates a new array with all elements that pass the test implemented by the provided function.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Use filter to get people older than 30
              const olderThan30 = people.filter(person => person.age > 30);
              console.log(olderThan30);  // Output: [{ name: 'Jack', age: 35 }]
            `
          }
        ]
      },
      {
        "isGroup": true,
        "title": "Splice and Slice",
        "description": "Examples for Array.splice and Array.slice with arrays of objects.",
        "codeLists": [
          {
            "filename": "splice.js",
            "title": "Array.splice Example",
            "description": "1) The 'splice' method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",
            "code": `
              let people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Remove one element from index 1 and insert a new one
              const removed = people.splice(1, 1, { name: 'Jill', age: 28 });
              console.log(people);  // [{ name: 'John', age: 30 }, { name: 'Jill', age: 28 }, { name: 'Jack', age: 35 }]
              console.log(removed); // [{ name: 'Jane', age: 25 }]
            `
          },
          {
            "filename": "slice.js",
            "title": "Array.slice Example",
            "description": "1) The 'slice' method returns a shallow copy of a portion of an array into a new array selected from start to end (end not included).",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Get a portion of the array from index 0 to 2
              const slicedPeople = people.slice(0, 2);
              console.log(slicedPeople);  // [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
            `
          }
        ]
      },
      {
        "isGroup": true,
        "title": "Fill, Flat, and FlatMap",
        "description": "Examples for Array.fill, Array.flat, and Array.flatMap with arrays of objects.",
        "codeLists": [
          {
            "filename": "fill.js",
            "title": "Array.fill Example",
            "description": "1) The 'fill' method fills all the elements of an array from a start index to an end index with a static value.",
            "code": `
              let people = new Array(3).fill({ name: 'Unknown', age: 0 });
              console.log(people);  // [{ name: 'Unknown', age: 0 }, { name: 'Unknown', age: 0 }, { name: 'Unknown', age: 0 }]
            `
          },
          {
            "filename": "flat.js",
            "title": "Array.flat Example",
            "description": "1) The 'flat' method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
            "code": `
              const nestedArray = [
                [{ name: 'John', age: 30 }],
                [{ name: 'Jane', age: 25 }],
                [{ name: 'Jack', age: 35 }]
              ];
  
              // Flatten the array of arrays into a single-level array
              const flatArray = nestedArray.flat();
              console.log(flatArray);  // [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Jack', age: 35 }]
            `
          },
          {
            "filename": "flatMap.js",
            "title": "Array.flatMap Example",
            "description": "1) The 'flatMap' method first maps each element using a mapping function, then flattens the result into a new array.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Use flatMap to double the ages and flatten the result
              const agesDoubled = people.flatMap(person => [person.age, person.age * 2]);
              console.log(agesDoubled);  // [30, 60, 25, 50, 35, 70]
            `
          }
        ]
      },
      {
        "isGroup": true,
        "title": "Sort: Ascending and Descending",
        "description": "Examples for sorting arrays of objects in ascending and descending order.",
        "codeLists": [
          {
            "filename": "sortAscending.js",
            "title": "Sort in Ascending Order",
            "description": "1) The 'sort' method can be used to sort an array of objects in ascending order based on a specific property.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Sort the array in ascending order based on age
              people.sort((a, b) => a.age - b.age);
              console.log(people);
              // Output: [{ name: 'Jane', age: 25 }, { name: 'John', age: 30 }, { name: 'Jack', age: 35 }]
            `
          },
          {
            "filename": "sortDescending.js",
            "title": "Sort in Descending Order",
            "description": "1) The 'sort' method can be used to sort an array of objects in descending order based on a specific property.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Sort the array in descending order based on age
              people.sort((a, b) => b.age - a.age);
              console.log(people);
              // Output: [{ name: 'Jack', age: 35 }, { name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
            `
          }
        ]
      },
      {
        "isGroup": true,
        "title": "Sorting Strings",
        "description": "Examples for sorting an array of objects by string properties in ascending and descending order.",
        "codeLists": [
          {
            "filename": "sortStringsAscending.js",
            "title": "Sort Strings Ascending Example",
            "description": "1) Sorts an array of objects by a string property in ascending order.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Sort by name in ascending order
              people.sort((a, b) => a.name.localeCompare(b.name));
              console.log(people);  // Output: [{ name: 'Jack', age: 35 }, { name: 'Jane', age: 25 }, { name: 'John', age: 30 }]
            `
          },
          {
            "filename": "sortStringsDescending.js",
            "title": "Sort Strings Descending Example",
            "description": "1) Sorts an array of objects by a string property in descending order.",
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Sort by name in descending order
              people.sort((a, b) => b.name.localeCompare(a.name));
              console.log(people);  // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Jack', age: 35 }]
            `
          }
        ]
      },
      {
        "isGroup": true,
        "title": "Sorting Dates",
        "description": "Examples for sorting an array of objects by date properties in ascending and descending order.",
        "codeLists": [
          {
            "filename": "sortDatesAscending.js",
            "title": "Sort Dates Ascending Example",
            "description": "1) Sorts an array of objects by a date property in ascending order.",
            "code": `
              const people = [
                { name: 'John', dateOfBirth: new Date('1990-05-20') },
                { name: 'Jane', dateOfBirth: new Date('1995-08-15') },
                { name: 'Jack', dateOfBirth: new Date('1985-12-10') }
              ];
  
              // Sort by dateOfBirth in ascending order
              people.sort((a, b) => a.dateOfBirth - b.dateOfBirth);
              console.log(people);  // Output: [{ name: 'Jack', dateOfBirth: new Date('1985-12-10') }, { name: 'John', dateOfBirth: new Date('1990-05-20') }, { name: 'Jane', dateOfBirth: new Date('1995-08-15') }]
            `
          },
          {
            "filename": "sortDatesDescending.js",
            "title": "Sort Dates Descending Example",
            "description": "1) Sorts an array of objects by a date property in descending order.",
            "code": `
              const people = [
                { name: 'John', dateOfBirth: new Date('1990-05-20') },
                { name: 'Jane', dateOfBirth: new Date('1995-08-15') },
                { name: 'Jack', dateOfBirth: new Date('1985-12-10') }
              ];
  
              // Sort by dateOfBirth in descending order
              people.sort((a, b) => b.dateOfBirth - a.dateOfBirth);
              console.log(people);  // Output: [{ name: 'Jane', dateOfBirth: new Date('1995-08-15') }, { name: 'John', dateOfBirth: new Date('1990-05-20') }, { name: 'Jack', dateOfBirth: new Date('1985-12-10') }]
            `
          }
        ]
      },
      {
        "title": "Filtering Array of Objects by Condition",
        "description": "Example of how to filter an array of objects and get specific field values.",
        "isGroup": false,
        "codeLists": [
          {
            "filename": "filterByCondition.js",
            "title": "Filter Array of Objects Example",
            "description": `
              1) You can filter an array of objects based on a specific condition.
              2) Use the filter method to create a new array with objects that meet the condition.
              3) You can then map the filtered objects to retrieve specific field values.
            `,
            "code": `
              // Create an array of objects
              const people = [
                { name: 'John', age: 30, city: 'New York' },
                { name: 'Jane', age: 25, city: 'Los Angeles' },
                { name: 'Jack', age: 35, city: 'Chicago' },
                { name: 'Jill', age: 28, city: 'New York' }
              ];
      
              // Filter the array to get names of people who live in New York
              const namesInNewYork = people
                .filter(person => person.city === 'New York') // Filter condition
                .map(person => person.name); // Get specific field values
      
              console.log(namesInNewYork); // Output: ['John', 'Jill']
            `
          }
        ]
      },
      {
        "title": "Filtering Array of Objects by Condition and Retrieving Multiple Fields",
        "description": "Example of how to filter an array of objects and get specific multiple field values.",
        "isGroup": false,
        "codeLists": [
          {
            "filename": "filterMultipleFields.js",
            "title": "Filter Array of Objects Example",
            "description": `
              1) You can filter an array of objects based on a specific condition.
              2) Use the filter method to create a new array with objects that meet the condition.
              3) You can then map the filtered objects to retrieve multiple specific field values.
            `,
            "code": `
              // Create an array of objects
              const people = [
                { name: 'John', age: 30, city: 'New York', occupation: 'Engineer' },
                { name: 'Jane', age: 25, city: 'Los Angeles', occupation: 'Designer' },
                { name: 'Jack', age: 35, city: 'Chicago', occupation: 'Manager' },
                { name: 'Jill', age: 28, city: 'New York', occupation: 'Architect' }
              ];
      
              // Filter the array to get names and ages of people who live in New York
              const filteredResults = people
                .filter(person => person.city === 'New York') // Filter condition
                .map(person => ({ name: person.name, age: person.age })); // Get multiple specific field values
      
              console.log(filteredResults); 
              // Output: [{ name: 'John', age: 30 }, { name: 'Jill', age: 28 }]

              // Filter the array to get names and ages of people who live in New York
              const filteredResults = people
              .filter(({ city }) => city === 'New York') // Filter condition using destructuring
              .map(({ name, age }) => ({ name, age })); // Destructure directly in map
              
              console.log(filteredResults); 
              // Output: [{ name: 'John', age: 30 }, { name: 'Jill', age: 28 }]
            `
          }
        ]
      },
      {
        "title": "Array of Objects - Removing Duplicates",
        "description": "Topics on how to remove duplicates from an array of objects by single field, multiple fields, destructuring, and more.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "removeDuplicatesBySingleField.js",
            "title": "Remove Duplicates by Single Field",
            "description": `
              1) This example shows how to remove duplicates from an array of objects based on a single field (e.g., 'name').
            `,
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'John', age: 35 } // Duplicate
              ];
      
              const uniqueByName = [...new Map(people.map(person => [person.name, person])).values()];
      
              console.log(uniqueByName);
              // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
            `
          },
          {
            "filename": "removeDuplicatesByMultipleFields.js",
            "title": "Remove Duplicates by Multiple Fields",
            "description": `
              1) This example shows how to remove duplicates based on multiple fields (e.g., 'name' and 'age').
            `,
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'John', age: 30 } // Duplicate
              ];
      
              const uniqueByNameAndAge = [...new Map(people.map(person => [JSON.stringify({ name: person.name, age: person.age }), person])).values()];
      
              console.log(uniqueByNameAndAge);
              // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
            `
          },
          {
            "filename": "removeDuplicatesUsingDestructuring.js",
            "title": "Remove Duplicates Using Destructuring",
            "description": `
              1) This example demonstrates how to use destructuring to simplify removing duplicates by a single field.
            `,
            "code": `
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'John', age: 35 } // Duplicate
              ];
      
              const uniquePeople = [...new Map(people.map(({ name, age }) => [name, { name, age }])).values()];
      
              console.log(uniquePeople);
              // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
            `
          },
          {
            "filename": "removeDuplicatesUsingDestructuringKeys.js",
            "title": "Remove Duplicates Using Destructuring Keys",
            "description": `
              1) This example shows how to remove duplicates by destructuring keys to specify which fields to check for uniqueness.
            `,
            "code": `
              const people = [
                { name: 'John', age: 30, city: 'New York' },
                { name: 'Jane', age: 25, city: 'Los Angeles' },
                { name: 'John', age: 30, city: 'New York' } // Duplicate
              ];
      
              const uniquePeople = [...new Map(people.map(({ name, age }) => [name + age, { name, age }])).values()];
      
              console.log(uniquePeople);
              // Output: [{ name: 'John', age: 30, city: 'New York' }, { name: 'Jane', age: 25, city: 'Los Angeles' }]
            `
          },
          {
            "filename": "removeDuplicatesUsingMethod.js",
            "title": "Remove Duplicates Using Method with Keys List",
            "description": `
              1) This example demonstrates a method to remove duplicates by passing an array of objects and a list of keys.
            `,
            "code": `
              const removeDuplicates = (arr, keys) => {
                const map = new Map();
                arr.forEach(obj => {
                  const key = keys.map(k => obj[k]).join('|'); // Create a unique key by joining specified keys
                  if (!map.has(key)) {
                    map.set(key, obj);
                  }
                });
                return [...map.values()];
              };
      
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'John', age: 30 } // Duplicate
              ];
      
              const uniquePeople = removeDuplicates(people, ['name', 'age']);
      
              console.log(uniquePeople);
              // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
            `
          }
        ]
      },
      {
        "title": "Array of Objects - Get Specific Keys with Destructuring",
        "description": "Topics on how to get specific multiple keys from an array of objects using destructuring and renaming keys.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "getSpecificKeysWithDestructuring.js",
            "title": "Get Specific Keys with Destructuring",
            "description": `
              1) This example shows how to get specific keys (e.g., 'name' and 'age') from an array of objects using destructuring.
            `,
            "code": `
              const people = [
                { name: 'John', age: 30, city: 'New York' },
                { name: 'Jane', age: 25, city: 'Los Angeles' },
                { name: 'Jack', age: 35, city: 'Chicago' }
              ];
      
              const specificKeys = people.map(({ name, age }) => ({ name, age }));
      
              console.log(specificKeys);
              // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Jack', age: 35 }]
            `
          },
          {
            "filename": "getSpecificKeysWithRenaming.js",
            "title": "Get Specific Keys with Renaming",
            "description": `
              1) This example demonstrates how to get specific keys from an array of objects and rename them during extraction.
            `,
            "code": `
              const people = [
                { name: 'John', age: 30, city: 'New York' },
                { name: 'Jane', age: 25, city: 'Los Angeles' },
                { name: 'Jack', age: 35, city: 'Chicago' }
              ];
      
              const renamedKeys = people.map(({ name: personName, age: personAge }) => ({ personName, personAge }));
      
              console.log(renamedKeys);
              // Output: [{ personName: 'John', personAge: 30 }, { personName: 'Jane', personAge: 25 }, { personName: 'Jack', personAge: 35 }]
            `
          },
          {
            "filename": "getSpecificKeysWithMultipleRenaming.js",
            "title": "Get Multiple Keys with Renaming",
            "description": `
              1) This example shows how to extract multiple keys and rename them in a single operation.
            `,
            "code": `
              const people = [
                { name: 'John', age: 30, city: 'New York' },
                { name: 'Jane', age: 25, city: 'Los Angeles' },
                { name: 'Jack', age: 35, city: 'Chicago' }
              ];
      
              const extractedAndRenamed = people.map(({ name: personName, age: personAge, city: location }) => ({ personName, personAge, location }));
      
              console.log(extractedAndRenamed);
              // Output: [{ personName: 'John', personAge: 30, location: 'New York' }, { personName: 'Jane', personAge: 25, location: 'Los Angeles' }, { personName: 'Jack', personAge: 35, location: 'Chicago' }]
            `
          }
        ]
      },
      {
        "title": "Using Reduce Method to Sum Values",
        "description": "This example demonstrates how to use the reduce method to calculate the sum of values in an array of objects.",
        "isGroup": false,
        "codeLists": [
          {
            "filename": "sumValuesUsingReduce.js",
            "title": "Sum Values Using Reduce",
            "description": `
              1) The reduce method executes a reducer function on each element of the array, resulting in a single output value.
              2) In this example, we calculate the sum of all 'value' properties from an array of objects.
            `,
            "code": `
              const data = [
                { value: 10 },
                { value: 20 },
                { value: 30 },
                { value: 40 }
              ];
      
              const totalSum = data.reduce((accumulator, current) => accumulator + current.value, 0);
      
              console.log(totalSum); // Output: 100
            `
          }
        ]
      },
      {
        "title": "Assigning isChecked = true Using forEach and map",
        "description": "This example shows how to assign 'isChecked' as true for each object in an array using forEach and map methods.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "assignIsCheckedUsingForEach.js",
            "title": "Assign isChecked using forEach",
            "description": `
              1) The forEach method executes a provided function once for each array element.
              2) Here, we set the 'isChecked' property of each object to true.
            `,
            "code": `
              const items = [
                { name: 'Item 1', isChecked: false },
                { name: 'Item 2', isChecked: false },
                { name: 'Item 3', isChecked: false }
              ];
      
              items.forEach(item => {
                item.isChecked = true; // Assign isChecked to true
              });
      
              console.log(items);
              // Output: 
              // [
              //   { name: 'Item 1', isChecked: true },
              //   { name: 'Item 2', isChecked: true },
              //   { name: 'Item 3', isChecked: true }
              // ]
            `
          },
          {
            "filename": "assignIsCheckedUsingMap.js",
            "title": "Assign isChecked using map",
            "description": `
              1) The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
              2) Here, we return a new array with 'isChecked' set to true.
            `,
            "code": `
              const items = [
                { name: 'Item 1', isChecked: false },
                { name: 'Item 2', isChecked: false },
                { name: 'Item 3', isChecked: false }
              ];
      
              const updatedItems = items.map(item => ({
                ...item, // Spread operator to copy existing properties
                isChecked: true // Assign isChecked to true
              }));
      
              console.log(updatedItems);
              // Output: 
              // [
              //   { name: 'Item 1', isChecked: true },
              //   { name: 'Item 2', isChecked: true },
              //   { name: 'Item 3', isChecked: true }
              // ]
            `
          }
        ]
      },
      {
        "title": "Different Ways to Group By in JavaScript",
        "description": "This example demonstrates different ways to group an array of objects by a specific key using reduce, forEach, and Map.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "groupByUsingReduce.js",
            "title": "Group By Using Reduce",
            "description": `
              1) The reduce method executes a reducer function on each element of the array, resulting in a single output value.
              2) Here, we group items by a specific key using reduce.
            `,
            "code": `
              const data = [
                { name: 'Alice', age: 25, city: 'New York' },
                { name: 'Bob', age: 30, city: 'Los Angeles' },
                { name: 'Alice', age: 35, city: 'Chicago' },
                { name: 'Bob', age: 40, city: 'New York' }
              ];
      
              const groupedByName = data.reduce((acc, curr) => {
                if (!acc[curr.name]) {
                  acc[curr.name] = [];
                }
                acc[curr.name].push(curr);
                return acc;
              }, {});
      
              console.log(groupedByName);
              // Output: 
              // {
              //   Alice: [
              //     { name: 'Alice', age: 25, city: 'New York' },
              //     { name: 'Alice', age: 35, city: 'Chicago' }
              //   ],
              //   Bob: [
              //     { name: 'Bob', age: 30, city: 'Los Angeles' },
              //     { name: 'Bob', age: 40, city: 'New York' }
              //   ]
              // }
            `
          },
          {
            "filename": "groupByUsingForEach.js",
            "title": "Group By Using forEach",
            "description": `
              1) The forEach method executes a provided function once for each array element.
              2) We can use forEach to build a grouped object manually.
            `,
            "code": `
              const data = [
                { name: 'Alice', age: 25, city: 'New York' },
                { name: 'Bob', age: 30, city: 'Los Angeles' },
                { name: 'Alice', age: 35, city: 'Chicago' },
                { name: 'Bob', age: 40, city: 'New York' }
              ];
      
              const groupedByCity = {};
              
              data.forEach(item => {
                if (!groupedByCity[item.city]) {
                  groupedByCity[item.city] = [];
                }
                groupedByCity[item.city].push(item);
              });
      
              console.log(groupedByCity);
              // Output: 
              // {
              //   'New York': [
              //     { name: 'Alice', age: 25, city: 'New York' },
              //     { name: 'Bob', age: 40, city: 'New York' }
              //   ],
              //   'Los Angeles': [
              //     { name: 'Bob', age: 30, city: 'Los Angeles' }
              //   ],
              //   Chicago: [
              //     { name: 'Alice', age: 35, city: 'Chicago' }
              //   ]
              // }
            `
          },
          {
            "filename": "groupByUsingMap.js",
            "title": "Group By Using Map",
            "description": `
              1) A Map holds key-value pairs where the keys can be of any datatype.
              2) We can use Map to group objects efficiently.
            `,
            "code": `
              const data = [
                { name: 'Alice', age: 25, city: 'New York' },
                { name: 'Bob', age: 30, city: 'Los Angeles' },
                { name: 'Alice', age: 35, city: 'Chicago' },
                { name: 'Bob', age: 40, city: 'New York' }
              ];
      
              const groupedByNameMap = new Map();
      
              data.forEach(item => {
                if (!groupedByNameMap.has(item.name)) {
                  groupedByNameMap.set(item.name, []);
                }
                groupedByNameMap.get(item.name).push(item);
              });
      
              console.log(Object.fromEntries(groupedByNameMap));
              // Output: 
              // {
              //   Alice: [
              //     { name: 'Alice', age: 25, city: 'New York' },
              //     { name: 'Alice', age: 35, city: 'Chicago' }
              //   ],
              //   Bob: [
              //     { name: 'Bob', age: 30, city: 'Los Angeles' },
              //     { name: 'Bob', age: 40, city: 'New York' }
              //   ]
              // }
            `
          }
        ]
      }
      
      
            
                  
    ],
  },
  {
    id: 4,
    title: 'Angular Concepts',
    description: 'Angular Concepts all with examples',
    image: '',
    groupBy: [],
    filesList: [
      {
        "title": "Angular",
        "isGroup": true,
        "description": "A framework for building web applications using a component-based architecture. It leverages TypeScript for robust development and facilitates the creation of single-page applications (SPAs) with dynamic content.",
        "codeLists": [
          {
            "title": "What is Angular?",
            "description": `
              1) Angular is a platform and framework for building single-page client applications using HTML and TypeScript.
              2) It provides a powerful structure for developing complex applications, enhancing maintainability and scalability.
              3) Angular employs a component-based architecture, allowing developers to encapsulate functionality into reusable components.
            `
          },
          {
            "title": "Use of Angular",
            "description": `
              1) Angular is used for building dynamic web applications that require real-time data processing and interactive user interfaces.
              2) Its features include two-way data binding, dependency injection, and a modular architecture, making it suitable for both small and large-scale applications.
              3) Angular is particularly effective in creating single-page applications (SPAs) that provide a seamless user experience without frequent page reloads.
            `
          },
          {
            "title": "Examples of Developed Applications",
            "description": `
              1) Angular is utilized in various applications across different sectors, including consumer and enterprise solutions.
              2) Notable examples include:
                - Gmail: An email service that provides a dynamic and responsive user interface.
                - Google Drive: A cloud storage solution that enhances user interaction through real-time updates.
                - Upwork: A freelance platform that uses Angular for its interactive features and real-time notifications.
                - PayPal: An online payment system leveraging Angular to deliver a smooth and efficient user experience.
            `,
            "examples": [
              "Gmail",
              "Google Drive",
              "Upwork",
              "PayPal"
            ]
          },
          {
            "title": "TypeScript",
            "description": `
              1) TypeScript is a superset of JavaScript that compiles to plain JavaScript, adding static typing to the language.
              2) It helps developers catch errors early in the development process, enhancing code quality and maintainability.
              3) TypeScript also supports modern JavaScript features, allowing developers to write more robust and structured code.
            `,
            "filename": "typescriptExample.ts",
            "code": `
              // TypeScript example
              let greeting: string = 'Hello, World!';
              console.log(greeting);
            `
          },
          {
            "title": "JavaScript",
            "description": `
              1) JavaScript is a versatile programming language essential for web development.
              2) It enables interactive web pages, allowing for dynamic content and user engagement.
              3) JavaScript is supported by all major browsers, making it a foundational technology for front-end development.
            `,
            "filename": "javascriptExample.js",
            "code": `
              // JavaScript example
              const greeting = 'Hello, World!';
              console.log(greeting);
            `
          },
          {
            "title": "ECMAScript",
            "description": `
              1) ECMAScript is the standardized scripting language specification that JavaScript follows.
              2) It provides a set of core features and functionality for scripting languages.
              3) Ensuring consistency across different implementations of JavaScript, ECMAScript is crucial for modern web development.
            `,
            "filename": "ecmascriptExample.js",
            "code": `
              // ECMAScript example
              const numbers = [1, 2, 3];
              const squared = numbers.map(n => n ** 2);
              console.log(squared); // [1, 4, 9]
            `
          },
          {
            "title": "ES6",
            "description": `
              1) ES6 (ECMAScript 2015) introduced significant features to JavaScript, enhancing the language's capabilities.
              2) Key features include arrow functions, classes, template literals, and modules, which provide more flexibility and improved code organization.
              3) These enhancements enable developers to write cleaner and more efficient code.
            `,
            "filename": "es6Example.js",
            "code": `
              // ES6 example
              const add = (a, b) => a + b;
              console.log(add(2, 3)); // 5
            `
          },
          {
            "title": "Arrow Functions",
            "description": `
              1) Arrow functions provide a shorter syntax for writing function expressions in JavaScript.
              2) They also lexically bind the 'this' value, making them especially useful in scenarios where traditional functions may lead to scope issues.
              3) This feature simplifies the code and enhances readability.
            `,
            "filename": "arrowFunctionExample.js",
            "code": `
              // Arrow function example
              const square = x => x * x;
              console.log(square(4)); // 16
            `
          }
        ]
      },      
      {
        "title": "What Happens When You Run `ng serve`",
        "isGroup": false,
        "description": "When you run `ng serve`, the Angular CLI compiles the application and serves it using a local development server. This process involves several steps, files, and configurations.",
        "codeLists": [
          {
            "title": "1. Command Execution: `ng serve`",
            "description":
            `1) When you run the command ng serve, the Angular CLI starts the development server.
            2) This command triggers the build process and watches for file changes.
            3) It serves the application on a local server, usually at http://localhost:4200.`
          },
          {
            "title": "2. Angular CLI Configuration: angular.json",
            "description": `
            1) The Angular CLI reads the configuration from the angular.json file.
            2) This file specifies the project settings, build options, and serve configurations.
            3) It includes information about the root directory, output path, and source maps.`
          },
          {
            "title": "3. Entry Point: main.ts",
            "description": `
            1) The entry point of the application is the main.ts file.
            2) This file bootstraps the root module (AppModule) using the platformBrowserDynamic().bootstrapModule() method.
            3) It initializes the Angular application and sets up the necessary environment.`
          },
          {
            "title": "4. Root Module: app.module.ts",
            "description": `
            1) The AppModule is defined in app.module.ts.
            2) This module imports necessary Angular modules and declares the components used in the application.
            3) It serves as the primary context for the application and enables dependency injection.`
          },
          {
            "title": "5. Root Component: app.component.ts",
            "description": `
            1) The root component (usually defined in app.component.ts) is specified in the bootstrap array of the AppModule.
            2) Angular creates an instance of this component and renders it in the <app-root> tag found in index.html.
            3) This triggers the component's lifecycle hooks, allowing for initialization and rendering of child components.`
          },
          {
            "title": "6. File Watching and Hot Reloading",
            "description":
              `1) The Angular CLI watches for changes in the application files (e.g., TypeScript, HTML, CSS).
              2) When a change is detected, it recompiles the code and updates the application in the browser without requiring a full reload.
              3) This feature, known as hot reloading, enhances the development experience by reflecting changes immediately.`
          },
          {
            "title": "7. Serving Static Files",
            "description": `
            1) The development server serves the compiled files (JavaScript, HTML, and CSS) from memory.
            2) The server does not write files to the disk but keeps them in memory for performance.
            3) This allows for quick access to the application while developing.`
          },
          {
            "title": "8. Open in Browser",
            "description": `
            1) After the server starts, you can open a web browser and navigate to http://localhost:4200 to view the application.
            2) The application is served on this port, and you can interact with it as if it were deployed on a live server.
            3) Any changes you make in the code will be reflected in real-time.`
          }
        ]
      },
      {
        "title": "List of Useful Commands",
        "isGroup": true,
        "description": "This section provides a collection of commands for checking versions, managing Node.js environments, and working with Angular applications.",
        "codeLists": [
          {
            "filename": "nodeVersionCheck.js",
            "title": "Node.js Version Check",
            "code": "node -v",
            "description": `
              1) Command: \`node -v\`
              2) Description: Checks the currently installed version of Node.js.
            `
          },
          {
            "filename": "npmVersionCheck.js",
            "title": "npm Version Check",
            "code": "npm -v",
            "description": `
              1) Command: \`npm -v\`
              2) Description: Displays the version of npm (Node Package Manager) installed on your system.
            `
          },
          {
            "filename": "nvmVersionCheck.js",
            "title": "nvm Version Check",
            "code": "nvm -v",
            "description": `
              1) Command: \`nvm -v\`
              2) Description: Checks the version of nvm (Node Version Manager) installed on your system.
            `
          },
          {
            "filename": "nvmListCommand.js",
            "title": "nvm List Command",
            "code": "nvm list",
            "description": `
              1) Command: \`nvm list\`
              2) Description: Lists all Node.js versions installed on your machine along with the currently active version.
            `
          },
          {
            "filename": "nvmUse.js",
            "title": "nvm Use",
            "code": "nvm use <version>",
            "description": `
              1) Command: \`nvm use <version>\`
              2) Description: Switches to the specified version of Node.js installed via nvm. Replace \`<version>\` with the desired version number.
            `
          },
          {
            "filename": "nvmDefault.js",
            "title": "nvm Default",
            "code": "nvm alias default <version>",
            "description": `
              1) Command: \`nvm alias default <version>\`
              2) Description: Sets the specified version of Node.js as the default version to be used in new terminal sessions.
            `
          },
          {
            "filename": "nvmInstallSpecificVersion.js",
            "title": "nvm Install Specific Version",
            "code": "nvm install <version>",
            "description": `
              1) Command: \`nvm install <version>\`
              2) Description: Installs a specific version of Node.js. Replace \`<version>\` with the desired version number (e.g., \`nvm install 14.17.0\`).
            `
          },
          {
            "filename": "angularProjectCreate.js",
            "title": "Angular Project Create Command",
            "code": "ng new <project-name>",
            "description": `
              1) Command: \`ng new <project-name>\`
              2) Description: Creates a new Angular project with the specified project name. The command generates a new directory with all necessary files and dependencies.
            `
          },
          {
            "filename": "runCommand.js",
            "title": "Run Command (npm start vs ng s)",
            "code": "npm start or ng serve",
            "description": `
              1) Command: \`npm start\` or \`ng serve\`
              2) Description: 
                - \`npm start\`: Runs the start script defined in \`package.json\`, typically set up to start the Angular application. 
                - \`ng serve\`: A specific Angular CLI command to serve the application, providing live reload capabilities.
            `
          },
          {
            "filename": "buildCommand.js",
            "title": "Build Command",
            "code": "ng build",
            "description": `
              1) Command: \`ng build\`
              2) Description: Compiles the Angular application into an output directory (dist/). The build can be configured for production or development with flags.
            `
          },
          {
            "filename": "moduleCommand.js",
            "title": "Module Command",
            "code": "ng generate module <module-name>",
            "description": `
              1) Command: \`ng generate module <module-name>\`
              2) Description: Generates a new Angular module with the specified name, creating a new folder and module file.
            `
          },
          {
            "filename": "serviceCommand.js",
            "title": "Service Command",
            "code": "ng generate service <service-name>",
            "description": `
              1) Command: \`ng generate service <service-name>\`
              2) Description: Creates a new Angular service, allowing you to manage data and business logic across components.
            `
          },
          {
            "filename": "componentCommand.js",
            "title": "Component Command",
            "code": "ng generate component <component-name>",
            "description": `
              1) Command: \`ng generate component <component-name>\`
              2) Description: Generates a new Angular component with the specified name, including the HTML, CSS, and TypeScript files.
            `
          },
          {
            "filename": "directiveCommand.js",
            "title": "Directive Command",
            "code": "ng generate directive <directive-name>",
            "description": `
              1) Command: \`ng generate directive <directive-name>\`
              2) Description: Creates a new Angular directive, which can be used to manipulate the DOM or extend existing HTML elements.
            `
          },
          {
            "filename": "pipeCommand.js",
            "title": "Pipe Command",
            "code": "ng generate pipe <pipe-name>",
            "description": `
              1) Command: \`ng generate pipe <pipe-name>\`
              2) Description: Generates a new Angular pipe, which can be used to transform data in templates.
            `
          },
          {
            "filename": "authGuardCommand.js",
            "title": "AuthGuard Command",
            "code": "ng generate guard <guard-name>",
            "description": `
              1) Command: \`ng generate guard <guard-name>\`
              2) Description: Creates a new Angular AuthGuard, which is used to control access to routes based on user authentication.
            `
          }
        ]
      },
      {
        "title": "Angular Modules and Components",
        "isGroup": true,
        "description": "In Angular, a module is a logical grouping of components, directives, pipes, and services. Components are the building blocks of Angular applications, responsible for rendering the UI and handling user interactions.",
        "codeLists": [
          {
            "title": "What is a Module?",
            "description": `
              1) A module in Angular is defined using the @NgModule decorator.
              2) It organizes related code into cohesive blocks.
              3) Each Angular application has at least one module, the root module, typically named AppModule.
              4) Modules can import other modules and declare components, directives, and pipes.
              5) Here is a simple example of an Angular module:
            `,
            "filename": "app.module.ts",
            "code": `
              import { NgModule } from '@angular/core';
              import { BrowserModule } from '@angular/platform-browser';
              import { AppComponent } from './app.component';
      
              @NgModule({
                declarations: [
                  AppComponent // Declare the AppComponent
                ],
                imports: [
                  BrowserModule // Import BrowserModule
                ],
                providers: [],
                bootstrap: [AppComponent] // Bootstrap the AppComponent
              })
              export class AppModule { }
            `
          },
          {
            "title": "What is a Component?",
            "description": `
              1) A component is a TypeScript class decorated with @Component that defines the view (UI) and behavior (logic).
              2) Each component has its own template, styles, and data binding.
              3) Components can interact with each other through input and output properties.
              4) Here is a simple example of an Angular component:
            `,
            "filename": "app.component.ts",
            "code": `
              import { Component } from '@angular/core';
      
              @Component({
                selector: 'app-root', // The component's HTML tag
                template: '<h1>Hello, {{ name }}!</h1>', // The HTML template
                styles: ['h1 { font-family: Lato; }'] // CSS styles
              })
              export class AppComponent {
                name: string = 'Angular'; // Component property
              }
            `
          },
          {
            "title": "HTML Integration",
            "description": `
              1) The HTML file (index.html) is the entry point of the Angular application.
              2) It contains the root component's selector that will load the Angular app.
              3) Here is how the index.html file is structured:
            `,
            "filename": "index.html",
            "code": `
              <!doctype html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Angular App</title>
                <base href="/">
                <link rel="stylesheet" href="styles.css">
              </head>
              <body>
                <app-root></app-root> <!-- Using the AppComponent -->
              </body>
              </html>
            `
          }
        ]
      },
      {
        "title": "Creating Multiple Components in Angular",
        "isGroup": true,
        "description": "Angular allows you to create multiple components to build a modular and maintainable application. Components can be reused across different parts of the application and can communicate with each other through input and output properties.",
        "codeLists": [
          {
            "title": "Creating a New Component",
            "description": `
              1) You can create a new component using the Angular CLI command.
              2) The command will generate the component files (TypeScript, HTML, and CSS).
              3) For example, to create a component named 'header', use the following command:
            `,
            "filename": "create-component-command",
            "code": "ng generate component header"
          },
          {
            "title": "Header Component (header.component.ts)",
            "description": `
              1) The header component can display a title or navigation links.
              2) Here is a simple example of a header component:
            `,
            "filename": "header.component.ts",
            "code": `
              import { Component } from '@angular/core';
      
              @Component({
                selector: 'app-header',
                template: \`
                  <h1>Welcome to My Angular App!</h1>
                  <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                  </nav>
                \`,
                styles: ['h1 { color: blue; } nav a { margin: 0 10px; }']
              })
              export class HeaderComponent { }
            `
          },
          {
            "title": "Footer Component (footer.component.ts)",
            "description": `
              1) The footer component can contain copyright information or additional links.
              2) Here is a simple example of a footer component:
            `,
            "filename": "footer.component.ts",
            "code": `
              import { Component } from '@angular/core';
      
              @Component({
                selector: 'app-footer',
                template: \`
                  <footer>
                    <p>&copy; 2024 My Angular App. All rights reserved.</p>
                  </footer>
                \`,
                styles: ['footer { text-align: center; padding: 10px; background-color: #f1f1f1; }']
              })
              export class FooterComponent { }
            `
          },
          {
            "title": "Using Components in the App Component (app.component.ts)",
            "description": `
              1) You can use the created components in the main app component.
              2) Here is how to include the header and footer components in the app component:
            `,
            "filename": "app.component.ts",
            "code": `
              import { Component } from '@angular/core';
      
              @Component({
                selector: 'app-root',
                template: \`
                  <app-header></app-header> <!-- Using Header Component -->
                  <div>
                    <h2>Main Content Area</h2>
                    <p>This is where the main content of the app will go.</p>
                  </div>
                  <app-footer></app-footer> <!-- Using Footer Component -->
                \`,
                styles: ['h2 { color: green; }']
              })
              export class AppComponent { }
            `
          },
          {
            "title": "HTML Integration (index.html)",
            "description": `
              1) The HTML file remains the same, serving as the entry point for the Angular application.
              2) It contains the root component's selector:
            `,
            "filename": "index.html",
            "code": `
              <!doctype html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Angular App</title>
                <base href="/">
                <link rel="stylesheet" href="styles.css">
              </head>
              <body>
                <app-root></app-root> <!-- Using the AppComponent -->
              </body>
              </html>
            `
          }
        ]
      },
      {
        "title": "Declaring Variables and Methods in Angular Component",
        "isGroup": true,
        "description": "In Angular components, variables can be declared with specific types. The following guidelines and examples illustrate how to declare and initialize different variable types, the order of imports, and method conventions.",
        "codeLists": [
          {
            "title": "Variable Declarations",
            "description": `
              1) In Angular components, variables are typically declared in the class.
              2) Use TypeScript types to specify the variable type (e.g., string, number, boolean, etc.).
              3) Variable names should follow camelCase for the property names (userList,studentList) and PascalCase for class names(AppModule,AdminModule).
            `,
            "filename": "example.component.ts",
            "code": `
              import { Component, OnInit } from '@angular/core';
      
              @Component({
                selector: 'app-example',
                templateUrl: './example.component.html',
                styleUrls: ['./example.component.css']
              })
              export class ExampleComponent implements OnInit {
                // String variable
                public title: string = 'Hello Angular';
      
                // Number variable
                private count: number = 0;
      
                // Boolean variable
                isActive: boolean = true;
      
                // Array variable
                public items: string[] = ['Item 1', 'Item 2', 'Item 3'];
      
                // Object variable
                public user: { name: string; age: number } = {
                  name: 'John Doe',
                  age: 30
                };
      
                // Array of objects variable
                public products: { id: number; name: string }[] = [
                  { id: 1, name: 'Product 1' },
                  { id: 2, name: 'Product 2' }
                ];
      
                // Any type variable
                public data: any = null;
      
                // ngOnInit lifecycle hook
                ngOnInit(): void {
                  console.log(this.title);
                }
      
                // Constructor
                constructor() {
                  console.log('Component Initialized');
                }
      
                // Public method
                public incrementCount(): void {
                  this.count++;
                }
      
                // Private method
                private resetCount(): void {
                  this.count = 0;
                }
              }
            `
          },
          
          {
            "title": "Order of Imports",
            "description": `
              1) Import statements should be organized in a specific order for clarity.
              2) First, import Angular core libraries, followed by third-party libraries, and then your application-specific modules.
            `,
            "filename": "example.component.ts",
            "code": `
              import { Component } from '@angular/core'; // Angular core import
              import { SomeService } from '../services/some.service'; // Service import
            `
          },
          {
            "title": "Binding Variables in Template",
            "description": `
              1) You can bind the component's properties to the HTML template using interpolation or property binding.
              2) Use double curly braces for interpolation and square brackets for property binding.
            `,
            "filename": "example.component.html",
            "code": `
              <h1>{{ title }}</h1> <!-- Interpolation -->
              <button (click)="incrementCount()">Increment Count</button>
              <p>Count: {{ count }}</p> <!-- Interpolation -->
            `
          }
        ]
      },
      {
        "title": "Data Binding in Angular",
        "isGroup": false,
        "description": "Data binding in Angular is a powerful feature that enables synchronization between the model and the view. It helps in creating dynamic and responsive applications. The following are the different types of data binding in Angular, along with their definitions and examples.",
        "codeLists": [
          {
            "title": "Interpolation",
            "description": "Interpolation is a one-way data binding technique that allows you to display component data in the template.",
            "code": `
              // In the component class
              export class AppComponent {
                title: string = 'Hello, Angular!'; // Defining a string property
              }
      
              // In the HTML template
              <h1>{{ title }}</h1> // Displays the title property value
            `
          },
          {
            "title": "Property Binding",
            "description": "Property binding allows you to bind a property of a DOM element to a component property.",
            "code": `
              // In the component class
              export class AppComponent {
                isDisabled: boolean = true; // Defining a boolean property
              }
      
              // In the HTML template
              <button [disabled]="isDisabled">Click Me</button> // Binds the button's disabled property
            `
          },
          {
            "title": "Event Binding",
            "description": "Event binding allows you to listen to events such as clicks, key presses, and more, and respond to them with a method in the component.",
            "code": `
              // In the component class
              export class AppComponent {
                onClick() {
                  alert('Button clicked!'); // Method that shows an alert
                }
              }
      
              // In the HTML template
              <button (click)="onClick()">Click Me</button> // Listens for click events
            `
          },
          {
            "title": "Two-Way Data Binding",
            "description": "Two-way data binding allows for synchronization of data between the model and the view. It is achieved using the ngModel directive.",
            "code": `
              // In the component class
              export class AppComponent {
                name: string = ''; // Defining a string property
              }
      
              // In the HTML template
              <input [(ngModel)]="name" placeholder="Enter your name" /> // Binds input value to name property
              <p>Hello, {{ name }}!</p> // Displays the name property value
            `
          }
        ]
      },      
      {
        "title": "Creating and Connecting Multiple Modules in Angular",
        "isGroup": true,
        "description": "In Angular, modules are a way to group related components, services, and other code into cohesive blocks. This helps in organizing your application and making it more manageable. The following examples demonstrate how to create multiple modules and how to connect them.",
        "codeLists": [
          {
            "title": "Creating Feature Module",
            "description": `
              1) A feature module is a way to encapsulate related components, directives, and services.
              2) Create a new module using the Angular CLI with the command: ng generate module feature-module.
              3) Import the feature module into the main application module to connect it.
            `,
            "filename": "feature.module.ts",
            "code": `
              import { NgModule } from '@angular/core';
              import { CommonModule } from '@angular/common';
              import { FeatureComponent } from './feature.component';
      
              @NgModule({
                declarations: [FeatureComponent],
                imports: [CommonModule],
                exports: [FeatureComponent] // Exporting to use in other modules
              })
              export class FeatureModule { }
            `
          },
          {
            "title": "Creating Shared Module",
            "description": `
              1) Shared modules contain components, directives, and pipes that can be reused across multiple feature modules.
              2) Create a shared module using the Angular CLI with the command: ng generate module shared.
            `,
            "filename": "shared.module.ts",
            "code": `
              import { NgModule } from '@angular/core';
              import { CommonModule } from '@angular/common';
              import { SomeComponent } from './some.component';
      
              @NgModule({
                declarations: [SomeComponent],
                imports: [CommonModule],
                exports: [SomeComponent] // Exporting to use in other modules
              })
              export class SharedModule { }
            `
          },
          {
            "title": "Connecting Modules in App Module",
            "description": `
              1) Import the created feature and shared modules into the root application module.
              2) This allows the application to utilize components from these modules.
            `,
            "filename": "app.module.ts",
            "code": `
              import { NgModule } from '@angular/core';
              import { BrowserModule } from '@angular/platform-browser';
              import { AppComponent } from './app.component';
              import { FeatureModule } from './feature/feature.module';
              import { SharedModule } from './shared/shared.module';
      
              @NgModule({
                declarations: [AppComponent],
                imports: [
                  BrowserModule,
                  FeatureModule, // Importing the feature module
                  SharedModule // Importing the shared module
                ],
                providers: [],
                bootstrap: [AppComponent]
              })
              export class AppModule { }
            `
          },
          {
            "title": "Using Components from Feature and Shared Modules",
            "description": `
              1) To use components from feature or shared modules, simply add their selectors in the HTML of the parent component.
              2) Ensure that the component from the feature or shared module is exported in the respective module file.
            `,
            "filename": "app.component.html",
            "code": `
              <h1>Welcome to the Angular Application</h1>
              <app-some></app-some> <!-- Component from Shared Module -->
              <app-feature></app-feature> <!-- Component from Feature Module -->
            `
          }
        ]
      },
      {
        "title": "Angular Routing",
        "isGroup": true,
        "description": "Angular routing allows navigation from one view to another as users perform application tasks. It provides a way to build a single-page application with multiple views, enabling users to navigate through different components seamlessly.",
        "codeLists": [
          {
            "title": "What is Routing?",
            "description": "Routing in Angular allows you to navigate between different components of your application. It helps in defining paths for the application and rendering the respective components.",
            "code": `
              // In app-routing.module.ts
              import { NgModule } from '@angular/core';
              import { RouterModule, Routes } from '@angular/router';
              import { HomeComponent } from './home/home.component';
              import { AboutComponent } from './about/about.component';
      
              const routes: Routes = [
                { path: 'home', component: HomeComponent },  // Route to HomeComponent
                { path: 'about', component: AboutComponent }, // Route to AboutComponent
              ];
      
              @NgModule({
                imports: [RouterModule.forRoot(routes)], // Importing RouterModule with the defined routes
                exports: [RouterModule]
              })
              export class AppRoutingModule {}
            `
          },
          {
            "title": "Using Routing in Components",
            "description": "To use routing, include the <router-outlet> directive in your main component template. This directive acts as a placeholder for the routed component.",
            "code": `
              // In app.component.html
              <nav>
                <a routerLink="/home">Home</a>
                <a routerLink="/about">About</a>
              </nav>
              <router-outlet></router-outlet> // Placeholder for routed components
            `
          },
          {
            "title": "Path Matching: Full and Prefix",
            "description": "Path matching determines how the router should match the URLs to the defined routes. There are two types of path matching: full and prefix.",
            "code": `
              // In app-routing.module.ts with path matching
              const routes: Routes = [
                { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirects to '/home' if the path is empty
                { path: 'home', component: HomeComponent },
                { path: 'about', component: AboutComponent },
                { path: 'feature', children: [ // Nested routes for feature
                    { path: 'child1', component: Child1Component }, // Child route
                    { path: 'child2', component: Child2Component }  // Child route
                  ]
                }
              ];
            `
          },
          {
            "title": "Full Path Match",
            "description": "When using 'pathMatch: full', the router will only redirect if the entire URL matches the path.",
            "code": `
              // In app-routing.module.ts
              const routes: Routes = [
                { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirects if the URL is exactly empty
                { path: 'home', component: HomeComponent }
              ];
            `
          },
          {
            "title": "Prefix Path Match",
            "description": "When using 'pathMatch: prefix', the router will redirect if the path begins with the specified path.",
            "code": `
              // In app-routing.module.ts
              const routes: Routes = [
                { path: 'about', component: AboutComponent },
                { path: '', redirectTo: '/home', pathMatch: 'prefix' }, // Will redirect to '/home' if the URL starts with ''
              ];
            `
          }
        ]
      },
      {
        "title": "Lazy Loading Modules in Angular",
        "isGroup": true,
        "description": "Lazy loading is a design pattern in Angular that allows you to load modules only when they are required. This helps in optimizing the performance of your application by reducing the initial loading time.",
        "codeLists": [
          {
            "title": "What is Lazy Loading?",
            "description": `
            1) Lazy loading helps to decrease the initial load time of an application by loading feature modules only when the user navigates to them.
            2) It can significantly improve the performance of large applications with many features.
            3) This is achieved by using the Angular Router to define routes that load specific modules lazily.
            `,
            "code": `
              // In app-routing.module.ts
              import { NgModule } from '@angular/core';
              import { RouterModule, Routes } from '@angular/router';
      
              const routes: Routes = [
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                {
                  path: 'feature',
                  loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) // Lazy loading FeatureModule
                },
                { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
              ];
      
              @NgModule({
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule]
              })
              export class AppRoutingModule {}
            `
          },
          {
            "title": "Creating a Feature Module",
            "description": `
            1) Create a new module using Angular CLI by running the command: ng generate module feature.
            2) This command generates a new module file named feature.module.ts.
            3) Ensure to set up routing for the feature module to define its own routes.
            `,
            "code": `
              // In feature-routing.module.ts
              import { NgModule } from '@angular/core';
              import { RouterModule, Routes } from '@angular/router';
              import { FeatureComponent } from './feature.component';
      
              const routes: Routes = [
                { path: '', component: FeatureComponent } // Default route for the Feature module
              ];
      
              @NgModule({
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
              })
              export class FeatureRoutingModule {}
            `
          },
          {
            "title": "Feature Module Definition",
            "description": `
            1) Define the feature module to encapsulate the components, services, and routes related to that feature.
            2) Use the FeatureRoutingModule to set up the routing for the module.
            `,
            "code": `
              // In feature.module.ts
              import { NgModule } from '@angular/core';
              import { CommonModule } from '@angular/common';
              import { FeatureRoutingModule } from './feature-routing.module';
              import { FeatureComponent } from './feature.component';
      
              @NgModule({
                declarations: [FeatureComponent],
                imports: [
                  CommonModule,
                  FeatureRoutingModule // Import the routing module
                ]
              })
              export class FeatureModule {}
            `
          },
          {
            "title": "Feature Component",
            "description": `
            1) Create a component for the feature module using the Angular CLI command: ng generate component feature/feature.
            2) The feature component will be displayed when the user navigates to the '/feature' route.
            `,
            "code": `
              // In feature.component.ts
              import { Component } from '@angular/core';
      
              @Component({
                selector: 'app-feature',
                template: '<h2>Feature Module Loaded!</h2>', // Simple template for the feature
                styles: []
              })
              export class FeatureComponent {}
            `
          }
        ]
      },
      {
        "title": "Angular Directives",
        "isGroup": true,
        "description": "Directives are special markers in the DOM that tell Angular to attach a specific behavior to a DOM element or transform the DOM element and its children.",
        "codeLists": [
          {
            "title": "Structural Directives",
            "description": "Structural directives change the structure of the DOM by adding or removing elements.",
            "examples": [
              {
                "title": "ngIf",
                "description": "The ngIf directive conditionally includes a template based on the value of an expression.",
                "code": `
                  <div *ngIf="isVisible">This text is visible if isVisible is true.</div>
                `,
                "ts": `
                  import { Component } from '@angular/core';
      
                  @Component({
                    selector: 'app-basic-ngif',
                    templateUrl: './basic-ngif.component.html',
                    styleUrls: ['./basic-ngif.component.css']
                  })
                  export class BasicNgIfComponent {
                    isVisible = true; // Default value
                  }
                `,
                "filename": "basic-ngif.component.ts"
              },
              {
                "title": "ngIf with else",
                "description": "The ngIf directive can be used with an else statement to provide alternative content if the condition is false.",
                "code": `
                  <div *ngIf="isVisible; else hiddenTemplate">This text is visible if isVisible is true.</div>
                  <ng-template #hiddenTemplate>
                    <div>This text is hidden if isVisible is true.</div>
                  </ng-template>
                `,
                "ts": `
                  import { Component } from '@angular/core';
      
                  @Component({
                    selector: 'app-ngif-else',
                    templateUrl: './ngif-else.component.html',
                    styleUrls: ['./ngif-else.component.css']
                  })
                  export class NgIfElseComponent {
                    isVisible = false; // Change this to see the effect
                  }
                `,
                "filename": "ngif-else.component.ts"
              },
              {
                "title": "ngIf with else if",
                "description": "You can nest ngIf directives to create more complex conditional rendering.",
                "code": `
                  <div *ngIf="status === 'active'; else inactiveTemplate">Active Status</div>
                  <ng-template #inactiveTemplate>
                    <div *ngIf="status === 'inactive'; else unknownTemplate">Inactive Status</div>
                  </ng-template>
                  <ng-template #unknownTemplate>
                    <div>Status Unknown</div>
                  </ng-template>
                `,
                "ts": `
                  import { Component } from '@angular/core';
      
                  @Component({
                    selector: 'app-ngif-elseif',
                    templateUrl: './ngif-elseif.component.html',
                    styleUrls: ['./ngif-elseif.component.css']
                  })
                  export class NgIfElseIfComponent {
                    status = 'unknown'; // Change this to 'active' or 'inactive'
                  }
                `,
                "filename": "ngif-elseif.component.ts"
              },
              {
                "title": "ngFor",
                "description": "The ngFor directive is used to repeat a block of HTML for each item in an iterable.",
                "code": `
                  <ul>
                    <li *ngFor="let item of items">{{ item }}</li>
                  </ul>
                `,
                "ts": `
                  import { Component } from '@angular/core';
      
                  @Component({
                    selector: 'app-ngfor',
                    templateUrl: './ngfor.component.html',
                    styleUrls: ['./ngfor.component.css']
                  })
                  export class NgForComponent {
                    items = ['Item 1', 'Item 2', 'Item 3']; // Example array
                  }
                `,
                "filename": "ngfor.component.ts"
              },
              {
                "title": "ngFor with if",
                "description": "You can also use ngIf in combination with ngFor to conditionally render items.",
                "code": `
                  <ul>
                    <li *ngFor="let item of items" *ngIf="item.active">{{ item.name }}</li>
                  </ul>
                `,
                "ts": `
                  import { Component } from '@angular/core';
      
                  @Component({
                    selector: 'app-ngfor-if',
                    templateUrl: './ngfor-if.component.html',
                    styleUrls: ['./ngfor-if.component.css']
                  })
                  export class NgForIfComponent {
                    items = [
                      { name: 'Item 1', active: true },
                      { name: 'Item 2', active: false },
                      { name: 'Item 3', active: true }
                    ]; // Example array of objects
                  }
                `,
                "filename": "ngfor-if.component.ts"
              },
              {
                "title": "ngSwitch",
                "description": "The ngSwitch directive is used to conditionally switch between multiple templates based on a single expression.",
                "code": `
                  <div [ngSwitch]="status">
                    <div *ngSwitchCase="'active'">Active Status</div>
                    <div *ngSwitchCase="'inactive'">Inactive Status</div>
                    <div *ngSwitchDefault>Status Unknown</div>
                  </div>
                `,
                "ts": `
                  import { Component } from '@angular/core';
      
                  @Component({
                    selector: 'app-ngswitch',
                    templateUrl: './ngswitch.component.html',
                    styleUrls: ['./ngswitch.component.css']
                  })
                  export class NgSwitchComponent {
                    status = 'inactive'; // Change this value to test different cases
                  }
                `,
                "filename": "ngswitch.component.ts"
              }
            ]
          },
          {
            "title": "Attribute Directives",
            "description": "Attribute directives change the appearance or behavior of an existing element.",
            "examples": [
              {
                "title": "ngClass",
                "description": "The ngClass directive allows you to dynamically add or remove classes based on conditions.",
                "code": `
                  <div [ngClass]="{ 'active': isActive, 'inactive': !isActive }">Toggle Class</div>
                `,
                "ts": `
                  import { Component } from '@angular/core';
      
                  @Component({
                    selector: 'app-ngclass',
                    templateUrl: './ngclass.component.html',
                    styleUrls: ['./ngclass.component.css']
                  })
                  export class NgClassComponent {
                    isActive = true; // Toggle this to see class changes
                  }
                `,
                "filename": "ngclass.component.ts"
              },
              {
                "title": "ngStyle",
                "description": "The ngStyle directive allows you to dynamically set inline styles for an element.",
                "code": `
                  <div [ngStyle]="{ 'color': isActive ? 'green' : 'red' }">Dynamic Style</div>
                `,
                "ts": `
                  import { Component } from '@angular/core';
      
                  @Component({
                    selector: 'app-ngstyle',
                    templateUrl: './ngstyle.component.html',
                    styleUrls: ['./ngstyle.component.css']
                  })
                  export class NgStyleComponent {
                    isActive = true; // Toggle this to see style changes
                  }
                `,
                "filename": "ngstyle.component.ts"
              },
              {
                "title": "ngStyle with multiple properties",
                "description": "You can also set multiple styles dynamically.",
                "code": `
                  <div [ngStyle]="{ 'color': textColor, 'font-size': fontSize + 'px' }">Multiple Styles</div>
                `,
                "ts": `
                  import { Component } from '@angular/core';
      
                  @Component({
                    selector: 'app-ngstyle-multiple',
                    templateUrl: './ngstyle-multiple.component.html',
                    styleUrls: ['./ngstyle-multiple.component.css']
                  })
                  export class NgStyleMultipleComponent {
                    textColor = 'blue';
                    fontSize = 20; // Dynamic font size
                  }
                `,
                "filename": "ngstyle-multiple.component.ts"
              }
            ]
          },
          {
            "title": "Component Directive Example",
            "description": "A component directive is a directive that is associated with a specific component, controlling its behavior and appearance.",
            "examples": [
              {
                "title": "Custom Component Directive",
                "description": "This example shows how to create a custom component directive.",
                "code": `
                  <app-custom-directive></app-custom-directive>
                
                  import { Component } from '@angular/core';
      
                  @Component({
                    selector: 'app-custom-directive',
                    template: '<h1>Custom Directive in Action!</h1>',
                    styles: ['h1 { color: blue; }']
                  })
                  export class CustomDirectiveComponent {}
                `,
                "filename": "custom-directive.component.ts"
              }
            ]
          }
        ]
      }
                        

           
      
    ]
  }
];

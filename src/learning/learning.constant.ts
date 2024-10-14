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
    isGroup: true,
    filesList: [
      {
        title: 'Object, How to access a key values',
        description:
          'In This example we can see group of examples like find index and last index',
        isGroup: true,
        codeLists: [
          {
            filename: 'Object.js',
            title: 'Object',
            description: `
              1) Object will have key value pair
              2) Object is a collection of key-value pairs, where each key is a string and each value can be any type of data, including strings, numbers, booleans, arrays, functions, and even other objects.
            `,
            code: `
              const example = { 
                foo: true, 
                bar: true 
              };
              Object.keys(example); // ["foo", "bar"]
            `,
          },
          {
            filename: 'Objectvaluesaccess.js',
            title: 'Access Values',
            description: `
              1) Object value can be accessed by dot notation or bracket notation
              2) Both notations can be used to access values
              3) Dot notation is used when the key is a valid JavaScript identifier, whereas bracket notation is used when the key is not a valid JavaScript identifier or when the key is a variable.
            `,
            code: `
              const example = { 
                foo: true, 
                bar: true 
              };
              console.log(example.foo); // true
              console.log(example['bar']); // true
            `,
          },
          {
            filename: 'Object.accessnestedlevel.js',
            title: 'Access Nested Level',
            description: `
              1) To access nested level, use dot notation or bracket notation
              2) You can chain the notation to access deeper levels
              3) Nested objects can be accessed by chaining the dot notation or bracket notation
            `,
            code: `
              const example = { 
                name: 'John',
                address: {
                  street: '123 Main St',
                  city: 'Anytown',
                  state: 'CA',
                  zip: '12345'
                },
                occupation: {
                  title: 'Software Engineer',
                  company: 'ABC Corp',
                  department: 'IT'
                }
              };
    
              console.log(example.address.street); // "123 Main St"
              console.log(example.occupation.title); // "Software Engineer"
              console.log(example['address']['city']); // "Anytown"
            `,
          },
        ],
      },
      {
        title: 'Assign Value to Object',
        description: 'In This example we can see how to assign value to object',
        isGroup: true,
        codeLists: [
          {
            filename: 'AssignValueToObject.js',
            title: 'Assign Value to Object',
            description: `
              1) To assign a value to an object, use the assignment operator (=)
              2) You can assign a value to a new key or update an existing key
            `,
            code: `
              const example = { 
                foo: true, 
                bar: true 
              };
              example.foo = false; // update existing key
              example.baz = 'new value'; // assign new key
              console.log(example); // { foo: false, bar: true, baz: 'new value' }
            `,
          },
          {
            filename: 'AssignValueToNestedObject.js',
            title: 'Assign Value to Nested Object',
            description: `
              1) To assign a value to a nested object, use the dot notation or bracket notation
              2) You can assign a value to a new key or update an existing key
            `,
            code: `
              const example = { 
                name: 'John',
                address: {
                  street: '123 Main St',
                  city: 'Anytown',
                  state: 'CA',
                  zip: '12345'
                }
              };
              example.address.street = '456 Elm St'; // update existing key
              example.address.country = 'USA'; // assign new key
              console.log(example); // { name: 'John', address: { street: '456 Elm St', city: 'Anytown', state: 'CA', zip: '12345', country: 'USA' } }
            `,
          },
        ],
      },
      {
        title: 'Create Object',
        description: 'In This example we can see how to create object',
        isGroup: true,
        codeLists: [
          {
            filename: 'CreateObject.js',
            title: 'Create Object',
            description: `
              1) To create an object, use the object literal syntax ({})
              2) You can also use the Object.create() method to create an object
            `,
            code: `
              const example = {}; // create empty object
              const example2 = Object.create({}); // create object using Object.create()
              console.log(example); // {}
              console.log(example2); // {}
            `,
          },
          {
            filename: 'CreateNestedObject.js',
            title: 'Create Nested Object',
            description: `
              1) To create a nested object, use the object literal syntax ({})
              2) You can also use the Object.create() method to create a nested object
            `,
            code: `
              const example = { 
                name: 'John',
                address: {
                  street: '123 Main St',
                  city: 'Anytown',
                  state: 'CA',
                  zip: '12345'
                }
              }; // create nested object
              const example2 = Object.create({
                name: 'Jane',
                address: {
                  street: '456 Elm St',
                  city: 'Othertown',
                  state: 'NY',
                  zip: '67890'
                }
              }); // create nested object using Object.create()
              console.log(example); // { name: 'John', address: { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' } }
              console.log(example2); // { name: 'Jane', address: { street: '456 Elm St', city: 'Othertown', state: 'NY', zip: '67890' } }
            `,
          },
        ],
      },
      {
        title: 'Concat Objects',
        description: 'In This example we can see how to concat objects',
        isGroup: true,
        codeLists: [
          {
            filename: 'ConcatObjects.js',
            title: 'Concat Objects',
            description: `
              1) To concat two objects, use the Object.assign() method
              2) You can also use the spread operator (...) to concat objects
            `,
            code: `
              const example1 = { 
                foo: true, 
                bar: true 
              };
              const example2 = { 
                baz: 'new value', 
                qux: 'another value' 
              };
              const result = Object.assign({}, example1, example2); // concat using Object.assign()
              const result2 = { ...example1, ...example2 }; // concat using spread operator
              console.log(result); // { foo: true, bar: true, baz: 'new value', qux: 'another value' }
              console.log(result2); // { foo: true, bar: true, baz: 'new value', qux: 'another value' }
            `,
          },
          {
            filename: 'ConcatNestedObjects.js',
            title: 'Concat Nested Objects',
            description: `
              1) To concat two nested objects, use the Object.assign() method
              2) You can also use the spread operator (...) to concat nested objects
            `,
            code: `
              const example1 = { 
                name: 'John',
                address: {
                  street: '123 Main St',
                  city: 'Anytown',
                  state: 'CA',
                  zip: '12345'
                }
              };
              const example2 = { 
                name: 'Jane',
                address: {
                  street: '456 Elm St',
                  city: 'Othertown',
                  state: 'NY',
                  zip: '67890'
                }
              };
              const result = Object.assign({}, example1, example2); // concat using Object.assign()
              const result2 = { ...example1, ...example2 }; // concat using spread operator
              console.log(result); // { name: 'Jane', address: { street: '456 Elm St', city: 'Othertown', state: 'NY', zip: '67890' } }
              console.log(result2); // { name: 'Jane', address: { street: '456 Elm St', city: 'Othertown', state: 'NY', zip: '67890' } }
            `,
          },
        ],
      },
      {
        title: 'Delete Key from Object',
        description: 'In This example we can see how to delete key from object',
        isGroup: true,
        codeLists: [
          {
            filename: 'DeleteKeyFromObject.js',
            title: 'Delete Key from Object',
            description: `
              1) To delete a key from an object, use the delete operator
              2) You can also use the Object.keys() method to get an array of keys and then use the splice() method to remove the key
            `,
            code: `
              const example = { 
                foo: true, 
                bar: true, 
                baz: 'new value' 
              };
              delete example.foo; // delete key using delete operator
              console.log(example); // { bar: true, baz: 'new value' }
              const keys = Object.keys(example);
              keys.splice(keys.indexOf(' bar'), 1); // remove key using Object.keys() and splice()
              console.log(example); // { baz: 'new value' }
            `,
          },
          {
            filename: 'DeleteKeyFromNestedObject.js',
            title: 'Delete Key from Nested Object',
            description: `
              1) To delete a key from a nested object, use the delete operator
              2) You can also use the Object.keys() method to get an array of keys and then use the splice() method to remove the key
            `,
            code: `
              const example = { 
                name: 'John',
                address: {
                  street: '123 Main St',
                  city: 'Anytown',
                  state: 'CA',
                  zip: '12345'
                }
              };
              delete example.address.street; // delete key using delete operator
              console.log(example); // { name: 'John', address: { city: 'Anytown', state: 'CA', zip: '12345' } }
              const keys = Object.keys(example.address);
              keys.splice(keys.indexOf('city'), 1); // remove key using Object.keys() and splice()
              console.log(example); // { name: 'John', address: { state: 'CA', zip: '12345' } }
            `,
          },
        ],
      },
      {
        title: 'Keys,Values,Entries',
        description:
          'In This example we can see group of examples like find index and last index',
        isGroup: true,
        codeLists: [
          {
            filename: 'Object.keys.js',
            title: 'Keys',
            description: `
              1) Object.keys returns an array of the object's own enumerable property names
              2) It only returns the keys of the object's own properties, not the prototype chain
            `,
            code: `
              const example = { 
                foo: true, 
                bar: true 
              };
              Object.keys(example); // ["foo", "bar"]
            `,
          },
          {
            filename: 'Object.values.js',
            title: 'Values',
            description: `
              1) Object.values returns an array of the object's own enumerable property values
              2) It only returns the values of the object's own properties, not the prototype chain
            `,
            code: `
              const example = { 
                foo: true, 
                bar: true 
              };
              Object.values(example); // [true, true]
            `,
          },
          {
            filename: 'Object.entries.js',
            title: 'Entries',
            description: `
              1) Object.entries returns an array of the object's own enumerable property [key, value] pairs
              2) It only returns the entries of the object's own properties, not the prototype chain
            `,
            code: `
              const example = { 
                foo: true, 
                bar: true 
              };
              Object.entries(example); // [["foo", true], ["bar", true]]
            `,
          },
        ],
      },
      {
        title: 'hasOwnProperty, hasOwn, in',
        description:
          'In This example we can see group of examples like find index and last index',
        isGroup: true,
        codeLists: [
          {
            filename: 'hasOwnProperty.js',
            title: 'hasOwnProperty',
            description: `
              1) hasOwnProperty returns true if the specified property is a direct property of the object
              2) If property is present it will return true otherwise false
            `,
            code: `
              const example = {};
              example.hasOwnProperty("prop"); // false
            
              example.prop = "exists";
              example.hasOwnProperty("prop"); // true
            `,
          },
          {
            filename: 'Object.hasOwn.js',
            title: 'hasOwn',
            description: `
              1) Object.hasOwn returns true if the specified property is a direct property of the object
              2) If property is present it will return true otherwise false
            `,
            code: `
              const example = {};
              Object.hasOwn(example, "prop"); // false
            
              example.prop = "exists";
              Object.hasOwn(example, "prop"); // true
            `,
          },
          {
            filename: 'inOperator.js',
            title: 'in',
            description: `
              1) in operator returns true if the specified property is present in the object or its prototype chain
              2) If property is present it will return true otherwise false
            `,
            code: `
              const example = {};
              "prop" in example; // false
            
              example.prop = "exists";
              "prop" in example; // true
            `,
          },
          {
            filename: 'Object.is.js',
            title: 'is',
            description: `
              1) Object.is returns true if the two values are the same value
              2) It checks for same-value equality, which means it checks if the two values are the same type and have the same value
            `,
            code: `
              const num1 = 0;
              const num2 = -0;
              Object.is(num1, num2); // false
            
              const str1 = "hello";
              const str2 = "hello";
              Object.is(str1, str2); // true
            `,
          },
        ],
      },
      {
        title: 'Object Iteration Methods',
        description:
          'In This example we can see how to iterate over objects using different methods',
        isGroup: true,
        codeLists: [
          {
            filename: 'ForIn.js',
            title: 'For In',
            description: `
              1) The for...in statement iterates over the enumerable properties of an object
              2) It returns the property names, not the property values
            `,
            code: `
              const example = { 
                foo: true, 
                bar: true, 
                baz: 'new value' 
              };
              for (const key in example) {
                console.log(key); // "foo", "bar", "baz"
              }
            `,
          },
          {
            filename: 'ForOf.js',
            title: 'For Of',
            description: `
              1) The for...of statement iterates over the values of an iterable object
              2) It returns the property values, not the property names
            `,
            code: `
              const example = { 
                foo: true, 
                bar: true, 
                baz: 'new value' 
              };
              for (const value of Object.values(example)) {
                console.log(value); // true, true, "new value"
              }
            `,
          },
          {
            filename: 'ForEach.js',
            title: 'ForEach',
            description: `
              1) The forEach() method executes a provided function once for each array element
              2) It can be used to iterate over the values of an object
            `,
            code: `
              const example = { 
                foo: true, 
                bar: true, 
                baz: 'new value' 
              };
              Object.values(example).forEach((value) => {
                console.log(value); // true, true, "new value"
              });
            `,
          },
          {
            filename: 'For.js',
            title: 'For',
            description: `
              1) The for statement iterates over the properties of an object
              2) It returns the property names and values
            `,
            code: `
              const example = { 
                foo: true, 
                bar: true, 
                baz: 'new value' 
              };
              for (let i = 0; i < Object.keys(example).length; i++) {
                const key = Object.keys(example)[i];
                console.log(key, example[key]); // "foo" true, "bar" true, "baz" "new value"
              }
            `,
          },
          {
            filename: 'Entries.js',
            title: 'Entries',
            description: `
              1) The entries() method returns an array of a given object's own enumerable property [key, value] pairs
              2) It can be used to iterate over the properties of an object
            `,
            code: `
              const example = { 
                foo: true, 
                bar: true, 
                baz: 'new value' 
              };
              for (const [key, value] of Object.entries(example)) {
                console.log(key, value); // "foo" true, "bar" true, "baz" "new value"
              }
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
            "code": `// In the component class
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
        title: 'Angular Directives',
        description: `
        1) Directives are used to add new behavior to an element in an Angular application.
        2) There are three types of directives: Components, Structural Directives, and Attribute Directives.
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'structural-directives.ts',
            title: 'Structural Directives',
            description: `
            1) ngIf: Conditionally includes a template based on the value of an expression.
            2) ngIf Else: Conditionally includes a template based on the value of an expression.
            3) ngIf ElseIf Else: Conditionally includes a template based on the value of multiple expressions.
            4) ngSwitch: Conditionally includes a template based on the value of an expression.
            5) ngFor: Repeats a template for each item in an array.
            `,
            code: `
              // structural-directives.ts
              import { Component } from '@angular/core';
      
              @Component({
                selector: 'app-structural-directives',
                template: \`
                  <!-- ngIf -->
                  <div *ngIf="isAdmin">Only admins can see this</div>
      
                  <!-- ngIf Else -->
                  <div *ngIf="isAdmin; else elseBlock">Only admins can see this</div>
                  <ng-template #elseBlock>Everyone else can see this</ng-template>
      
                 <!-- ngIf ElseIf Else -->
                <div *ngIf="isAdmin; else elifBlock">Only admins can see this</div>
                <ng-template #elifBlock>
                  <div *ngIf="isModerator; else elseBlock">Only moderators can see this</div>
                  <ng-template #elseBlock>Everyone else can see this</ng-template>
                </ng-template>

                  <!-- ngSwitch -->
                  <div [ngSwitch]="role">
                    <template ngSwitchCase="admin">Only admins can see this</template>
                    <template ngSwitchCase="moderator">Only moderators can see this</template>
                    <template ngSwitchDefault>Everyone else can see this</template>
                  </div>
      
                  <!-- ngFor -->
                  <ul>
                    <li *ngFor="let item of items; let i = index; let isFirst = first; let isLast = last; let isEven = even; let isOdd = odd">
                      {{ i }}. {{ item }} ({{ isFirst ? 'first' : '' }}{{ isLast ? 'last' : '' }}{{ isEven ? 'even' : '' }}{{ isOdd ? 'odd' : '' }})
                    </li>
                  </ul>
      
                  <!-- ngFor with trackBy -->
                  <ul>
                    <li *ngFor="let item of items; trackBy: trackItemById">
                      {{ item.id }}. {{ item.name }}
                    </li>
                  </ul>
      
                  <!-- ngContainer -->
                  <ng-container *ngIf="isAdmin">
                    Only admins can see this
                  </ng-container>
      
                  <!-- ngFor with ngIf -->
                  <ul>
                    <li *ngFor="let item of items">
                      <span *ngIf="item.isVisible">Visible</span>
                      {{ item.name }}
                    </li>
                  </ul>
                \`
              })
              export class StructuralDirectivesComponent {
                isAdmin = true;
                role = 'admin';
                items = [
                  { id: 1, name: 'Item 1', isVisible: true },
                  { id: 2, name: 'Item 2', isVisible: false },
                  { id: 3, name: 'Item 3', isVisible: true },
                ];
      
                trackItemById(index: number, item: any) {
                  return item.id;
                }
              }
            `,
          },
          {
            filename: 'attribute-directives.ts',
            title: 'Attribute Directives',
            description: `
            1) ngClass: Adds a class to an element based on the value of an expression.
            2) ngStyle: Adds a style to an element based on the value of an expression.
            `,
            code: `
              // attribute-directives.ts
              import { Component } from '@angular/core';
      
              @Component({
                selector: 'app-attribute-directives',
                template: \`
                  <!-- ngClass single class without condition -->
                  <div class="admin">Admin</div>

                  <li [class.active]="isAdmin==true'">Step1</li>

      
                  <!-- ngClass single class with condition -->
                  <div [ngClass]="{'admin': isAdmin}">Only admins can see this</div>
      
                  <!-- ngClass multiple classes -->
                  <div class="admin moderator">Admin and moderator</div>
      
                  <!-- ngClass multiple classes with condition -->
                  <div [ngClass]="{'admin': isAdmin, 'moderator': isModerator}">Admin and moderator</div>
      
                  <!-- ngClass ternary class -->
                  <div [ngClass]="isAdmin ? 'admin ' : 'user '">Admin or user</div>
      
                  <!-- ngClass using property binding -->
                  <div [ngClass]="getClass()">Dynamic class</div>
      
                  <!-- ngClass using property binding with multiple classes -->
                  <div [ngClass]="getClasses()">Dynamic classes</div>
      
                  <!-- ngStyle single style -->
                  <div style="background-color: red">Red background</div>

                   <!-- ngStyle single style with condition -->
            <div [style.backgroundColour]="isAdmin ? 'red' : 'blue'">Red or blue background</div>
      
                  <!-- ngStyle single style with condition -->
                  <div [ngStyle]="{'background-color': isAdmin ? 'red' : 'blue'}">Red or blue background</div>
      
                  <!-- ngStyle multiple styles -->
                  <div style="background-color: red; color: white">Red background and white text</div>
      
                  <!-- ngStyle multiple styles with condition -->
                  <div [ngStyle]="{'background-color': isAdmin ? 'red' : 'blue', 'color': isModerator ? 'white' : 'black'}">Red or blue background and white or black text</div>
      
                  <!-- ngStyle using property binding -->
                  <div [ngStyle]="getStyle()">Dynamic style</div>
      
                  <!-- ngStyle using property binding with multiple styles -->
                  <div [ngStyle]="getStyles()">Dynamic styles</div>

                  <div [ngStyle]="isAdmin?{'background-color': 'red'} : {'background-color': 'blue'}"
>hii</div>
                \`
              })
              export class AttributeDirectivesComponent {
                isAdmin = true;
                isModerator = false;
      
                getClass() {
                  return this.isAdmin ? 'admin' : 'user';
                }
      
                getClasses() {
                  return this.isAdmin ? ['admin', 'moderator'] : ['user'];
                }
      
                getStyle() {
                  return {
                    'background-color': this.isAdmin ? 'red' : 'blue',
                    'color': this.isModerator ? 'white' : 'black'
                  };
                }
      
                getStyles() {
                  return this.isAdmin ? [
                    {'background-color': 'red'},
                    {'color': 'white'}
                  ] : [
                    {'background-color': 'blue'},
                    {'color': 'black'}
                  ];
                }
              }
            `,
          },
          {
            filename: 'custom-directive.ts',
            title: 'Custom Directive',
            description: `
            1) Create a custom directive to add new behavior to an element.
            `,
            code: `
              // custom.directive.ts
              import { Directive, ElementRef } from '@angular/core';
      
              @Directive({
                selector: '[appHighlight]'
              })
              export class HighlightDirective {
                constructor(private elementRef: ElementRef) { }
      
                ngAfterViewInit() {
                  this.elementRef.nativeElement.style.backgroundColor = 'yellow';
                }
              }
      
              // app.component.ts
              import { Component } from '@angular/core';
      
              @Component({
                selector: 'app-root',
                template: \`
                  <p appHighlight>Highlighted text</p>
                \`
              })
              export class AppComponent {}
            `,
          },
        ],
      },

      {
        title: 'Angular Data Passing',
        description: `
        1) Data passing is a crucial aspect of Angular applications.
        2) There are several ways to pass data between components in Angular.
        `,
        isGroup: true,
        codeLists: [
          {
            filename: 'input.ts',
            title: '@Input',
            description: `
            1) @Input is used to pass data from a parent component to a child component.
            `,
            code: `
              // parent.component.ts
              import { Component } from '@angular/core';
      
              @Component({
                selector: 'app-parent',
                template: \`
                  <h1>Parent Component</h1>
                  <app-child [data]="data"></app-child>
                \`,
              })
              export class ParentComponent {
                data = 'Parent data';
              }
      
              // child.component.ts
              import { Component, Input } from '@angular/core';
      
              @Component({
                selector: 'app-child',
                template: \`
                  <h1>Child Component</h1>
                  <p>Received data: {{ data }}</p>
                \`,
              })
              export class ChildComponent {
                @Input() data: any;
              }
            `,
            template: {
              parent: `
                <h1>Parent Component</h1>
                <app-child [data]="data"></app-child>
              `,
              child: `
                <h1>Child Component</h1>
                <p>Received data: {{ data }}</p>
              `,
            },
          },
          {
            filename: 'output.ts',
            title: '@Output',
            description: `
            1) @Output is used to emit events from a child component to a parent component.
            `,
            code: `
              // parent.component.ts
              import { Component } from '@angular/core';
      
              @Component({
                selector: 'app-parent',
                template: \`
                  <h1>Parent Component</h1>
                  <app-child (childEvent)="onChildEvent($event)"></app-child>
                \`,
              })
              export class ParentComponent {
                onChildEvent(event: any) {
                  console.log(event);
                }
              }
      
              // child.component.ts
              import { Component, Output, EventEmitter } from '@angular/core';
      
              @Component({
                selector: 'app-child',
                template: \`
                  <h1>Child Component</h1>
                  <button (click)="emitEvent()">Emit Event</button>
                \`,
              })
              export class ChildComponent {
                @Output() childEvent = new EventEmitter();
      
                emitEvent() {
                  this.childEvent.emit('Child event emitted');
                }
              }
            `,
            template: {
              parent: `
                <h1>Parent Component</h1>
                <app-child (childEvent)="onChildEvent($event)"></app-child>
              `,
              child: `
                <h1>Child Component</h1>
                <button (click)="emitEvent()">Emit Event</button>
              `,
            },
          },
          {
            filename: 'service.ts',
            title: 'Service',
            description: `
            1) A service is a class that can be injected into components to provide shared functionality.
            `,
            code: `
              // data.service.ts
              import { Injectable } from '@angular/core';
      
              @Injectable({
                providedIn: 'root',
              })
              export class DataService {
                private data: any;
      
                constructor() {}
      
                updateData(data: any) {
                  this.data = data;
                }
      
                getData() {
                  return this.data;
                }
              }
      
              // parent.component.ts
              import { Component } from '@angular/core';
              import { DataService } from './data.service';
      
              @Component({
                selector: 'app-parent',
                template: \`
                  <h1>Parent Component</h1>
                  <button (click)="updateData()">Update Data</button>
                \`,
              })
              export class ParentComponent {
                constructor(private dataService: DataService) {}
      
                updateData() {
                  this.dataService.updateData('Updated Data');
                }
              }
      
              // child.component.ts
              import { Component } from '@angular/core';
              import { DataService } from '../data.service';
      
              @Component({
                selector: 'app-child',
                template: \`
                  <h1>Child Component</h1>
                  <p>Received data: {{ data }}</p>
                \`,
              })
              export class ChildComponent {
                constructor(private dataService: DataService) {}
      
                ngOnInit() {
                  this.data = this.dataService.getData();
                }
              }
            `,
            template: {
              parent: `
                <h1>Parent Component</h1>
                <button (click)="updateData()">Update Data</button>
              `,
              child: `
                <h1>Child Component </h1>
                <p>Received data: {{ data }}</p>
              `,
            },
          },
          {
            filename: 'subject.ts',
            title: 'Subject',
            description: `
            1) A subject is a class that can be used to multicast values to multiple observers.
            `,
            code: `
              // subject.service.ts
              import { Injectable } from '@angular/core';
              import { Subject } from 'rxjs';
      
              @Injectable({
                providedIn: 'root',
              })
              export class SubjectService {
                private subject: Subject<any>;
      
                constructor() {
                  this.subject = new Subject();
                }
      
                updateData(data: any) {
                  this.subject.next(data);
                }
      
                getData() {
                  return this.subject.asObservable();
                }
              }
      
              // parent.component.ts
              import { Component } from '@angular/core';
              import { SubjectService } from './subject.service';
      
              @Component({
                selector: 'app-parent',
                template: \`
                  <h1>Parent Component</h1>
                  <button (click)="updateData()">Update Data</button>
                \`,
              })
              export class ParentComponent {
                constructor(private subjectService: SubjectService) {}
      
                updateData() {
                  this.subjectService.updateData('Updated Data ');
                }
              }
      
              // child.component.ts
              import { Component } from '@angular/core';
              import { SubjectService } from '../subject.service';
      
              @Component({
                selector: 'app-child',
                template: \`
                  <h1>Child Component</h1>
                  <p>Received data: {{ data }}</p>
                \`,
              })
              export class ChildComponent {
                constructor(private subjectService: SubjectService) {}
      
                ngOnInit() {
                  this.subjectService.getData().subscribe((data) => {
                    this.data = data;
                  });
                }
              }
            `,
            template: {
              parent: `
                <h1>Parent Component</h1>
                <button (click)="updateData()">Update Data</button>
              `,
              child: `
                <h1>Child Component</h1>
                <p>Received data: {{ data }}</p>
              `,
            },
          },
          {
            filename: 'behavior-subject.ts',
            title: 'Behavior Subject',
            description: `
            1) A behavior subject is a class that can be used to multicast values to multiple observers, and it also provides an initial value.
            `,
            code: `
              // behavior-subject.service.ts
              import { Injectable } from '@angular/core';
              import { BehaviorSubject } from 'rxjs';
      
              @Injectable({
                providedIn: 'root',
              })
              export class BehaviorSubjectService {
                private behaviorSubject: BehaviorSubject<any>;
      
                constructor() {
                  this.behaviorSubject = new BehaviorSubject('Initial Data');
                }
      
                updateData(data: any) {
                  this.behaviorSubject.next(data);
                }
      
                getData() {
                  return this.behaviorSubject.asObservable();
                }
              }
      
              // parent.component.ts
              import { Component } from '@angular/core';
              import { BehaviorSubjectService } from './behavior-subject.service';
      
              @Component({
                selector: 'app-parent',
                template: \`
                  <h1>Parent Component</h1>
                  <button (click)="updateData()">Update Data</button>
                \`,
              })
              export class ParentComponent {
                constructor(private behaviorSubjectService: BehaviorSubjectService) {}
      
                updateData() {
                  this.behaviorSubjectService.updateData('Updated Data');
                }
              }
      
              // child.component.ts
              import { Component } from '@angular/core';
              import { BehaviorSubjectService } from '../behavior-subject.service';
      
              @Component({
                selector: 'app-child',
                template: \`
                  <h1>Child Component</h1>
                  <p>Received data: {{ data }}</p>
                \`,
              })
              export class ChildComponent {
                constructor(private behaviorSubjectService: BehaviorSubjectService) {}
      
                ngOnInit() {
                  this.behaviorSubjectService.getData().subscribe((data) => {
                    this.data = data;
                  });
                }
              }
            `,
            template: {
              parent: `
                <h1>Parent Component</h1>
                <button (click)="updateData()">Update Data</button>
              `,
              child: `
                <h1>Child Component</h1>
                <p>Received data: {{ data }}</p>
              `,
            },
          },
          {
            filename: 'replay-subject.ts',
            title: 'Replay Subject',
            description: `
            1) A replay subject is a class that can be used to multicast values to multiple observers, and it also provides a buffer of previous values.
            `,
            code: `
              // replay-subject.service.ts
              import { Injectable } from '@angular/core';
              import { ReplaySubject } from 'rxjs';
      
              @Injectable({
                providedIn: 'root',
              })
       export class ReplaySubjectService {
                private replaySubject: ReplaySubject<any>;
      
                constructor() {
                  this.replaySubject = new ReplaySubject(3); // buffer size 3
                }
      
                updateData(data: any) {
                  this.replaySubject.next(data);
                }
      
                getData() {
                  return this.replaySubject.asObservable();
                }
              }
      
              // parent.component.ts
              import { Component } from '@angular/core';
              import { ReplaySubjectService } from './replay-subject.service';
      
              @Component({
                selector: 'app-parent',
                template: \`
                  <h1>Parent Component</h1>
                  <button (click)="updateData()">Update Data</button>
                \`,
              })
              export class ParentComponent {
                constructor(private replaySubjectService: ReplaySubjectService) {}
      
                updateData() {
                  this.replaySubjectService.updateData('Updated Data');
                }
              }
      
              // child.component.ts
              import { Component } from '@angular/core';
              import { ReplaySubjectService } from '../replay-subject.service';
      
              @Component({
                selector: 'app-child',
                template: \`
                  <h1>Child Component</h1>
                  <p>Received data: {{ data }}</p>
                \`,
              })
              export class ChildComponent {
                constructor(private replaySubjectService: ReplaySubjectService) {}
      
                ngOnInit() {
                  this.replaySubjectService.getData().subscribe((data) => {
                    this.data = data;
                  });
                }
              }
            `,
            template: {
              parent: `
                <h1>Parent Component</h1>
                <button (click)="updateData()">Update Data</button>
              `,
              child: `
                <h1>Child Component</h1>
                <p>Received data: {{ data }}</p>
              `,
            },
          },
        ],
      },
                        
      {
        "title": "Complete List of Lifecycle Hooks in Angular",
        "isGroup": false,
        "description": "Angular provides a series of lifecycle hooks that allow developers to intervene at key moments during the life of a component. Each hook is executed at a specific time in the lifecycle, giving you control over the behavior of the component. Below are all the lifecycle hooks in Angular, along with their definitions and examples.",
        "codeLists": [
          {
            "title": "ngOnChanges",
            "description": "Called before ngOnInit and whenever one or more data-bound input properties change. Receives a SimpleChanges object containing the previous and current values of the changed properties.",
            "code": `
              // In the component class
              export class AppComponent implements OnChanges {
                @Input() inputValue: string;
                
                ngOnChanges(changes: SimpleChanges) {
                  console.log('ngOnChanges called!', changes); // Responds to input property changes
                }
              }
            `
          },
          {
            "title": "ngOnInit",
            "description": "Called once, after the first ngOnChanges. It is typically used for initialization logic, such as fetching data or setting up the component.",
            "code": `
              // In the component class
              export class AppComponent implements OnInit {
                ngOnInit() {
                  console.log('ngOnInit called!'); // Code that runs after the component is initialized
                }
              }
            `
          },
          {
            "title": "ngDoCheck",
            "description": "Called during every change detection run, after ngOnChanges and ngOnInit. It allows you to implement custom change detection logic.",
            "code": `
              // In the component class
              export class AppComponent implements DoCheck {
                ngDoCheck() {
                  console.log('ngDoCheck called!'); // Custom change detection logic
                }
              }
            `
          },
          {
            "title": "ngAfterContentInit",
            "description": "Called once after the component's projected content (ng-content) has been initialized. It is useful for interacting with content projected into the component.",
            "code": `
              // In the component class
              export class AppComponent implements AfterContentInit {
                ngAfterContentInit() {
                  console.log('ngAfterContentInit called!'); // Code that runs after projected content is initialized
                }
              }
            `
          },
          {
            "title": "ngAfterContentChecked",
            "description": "Called after every check of the component's projected content (ng-content). Useful for reacting to changes in content.",
            "code": `
              // In the component class
              export class AppComponent implements AfterContentChecked {
                ngAfterContentChecked() {
                  console.log('ngAfterContentChecked called!'); // Code that runs after each check of projected content
                }
              }
            `
          },
          {
            "title": "ngAfterViewInit",
            "description": "Called once after Angular has fully initialized the component's view (and its child views).",
            "code": `
              // In the component class
              export class AppComponent implements AfterViewInit {
                ngAfterViewInit() {
                  console.log('ngAfterViewInit called!'); // Code that runs after view initialization
                }
              }
            `
          },
          {
            "title": "ngAfterViewChecked",
            "description": "Called after every check of the component's view (and child views). It is useful for responding to changes in the view.",
            "code": `
              // In the component class
              export class AppComponent implements AfterViewChecked {
                ngAfterViewChecked() {
                  console.log('ngAfterViewChecked called!'); // Code that runs after each view check
                }
              }
            `
          },
          {
            "title": "ngOnDestroy",
            "description": "Called right before Angular destroys the component. Use it for cleanup tasks like unsubscribing from observables, detaching event handlers, or freeing resources.",
            "code": `
              // In the component class
              export class AppComponent implements OnDestroy {
                ngOnDestroy() {
                  console.log('ngOnDestroy called!'); // Cleanup code before component destruction
                }
              }
            `
          }
        ]
      },
      {
        "title": "Angular Forms Overview",
        "description": "This document provides examples of different types of forms in Angular, including Reactive Forms and Template-Driven Forms, covering various validation techniques and states.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "reactive-form-single-field.component.ts",
            "title": "Reactive Form - Single Field",
            "description": "This example shows how to create a reactive form with a single field using FormControl.",
            "code": `
              import { Component } from '@angular/core';
              import { FormControl } from '@angular/forms';
      
              @Component({
                selector: 'app-reactive-form-single-field',
                templateUrl: './reactive-form-single-field.component.html',
              })
              export class ReactiveFormSingleFieldComponent {
                nameControl = new FormControl(''); // Create a FormControl for the name field
      
                // To get the form control value as JSON
                get formValue() {
                  return JSON.stringify(this.nameControl.value);
                }
              }
            `
          },
          {
            "filename": "reactive-form-single-field.component.html",
            "title": "Reactive Form - Single Field Template",
            "description": "Template for the Reactive Form with a single field.",
            "code": `
              <div>
                <form>
                  <!-- Input for name -->
                  <input [formControl]="nameControl" placeholder="Enter your name" />
                  <div *ngIf="nameControl.invalid && (nameControl.dirty || nameControl.touched)">
                    <div *ngIf="nameControl.errors.required">Name is required.</div>
                  </div>
                </form>
                <p>Form Value: {{ formValue }}</p>
              </div>
            `
          },
          {
            "filename": "reactive-form-group.component.ts",
            "title": "Reactive Form - FormGroup",
            "description": "This example demonstrates how to create a reactive form using FormGroup.",
            "code": `
              import { Component } from '@angular/core';
              import { FormGroup, FormBuilder, Validators } from '@angular/forms';
      
              @Component({
                selector: 'app-reactive-form-group',
                templateUrl: './reactive-form-group.component.html',
              })
              export class ReactiveFormGroupComponent {
                userForm: FormGroup;
      
                constructor(private fb: FormBuilder) {
                  this.userForm = this.fb.group({
                    name: ['', Validators.required],
                    email: ['', [Validators.required, Validators.email]],
                  });
                }
      
                // To get the form value as JSON
                get formValue() {
                  return JSON.stringify(this.userForm.value);
                }
      
                // Reset the form
                resetForm() {
                  this.userForm.reset();
                }
              }
            `
          },
          {
            "filename": "reactive-form-group.component.html",
            "title": "Reactive Form - FormGroup Template",
            "description": "Template for the Reactive Form using FormGroup.",
            "code": `
              <form [formGroup]="userForm">
                <div>
                  <input formControlName="name" placeholder="Name" />
                  <div *ngIf="userForm.get('name').invalid && (userForm.get('name').dirty || userForm.get('name').touched)">
                    <div *ngIf="userForm.get('name').errors.required">Name is required.</div>
                  </div>
                </div>
                <div>
                  <input formControlName="email" placeholder="Email" />
                  <div *ngIf="userForm.get('email').invalid && (userForm.get('email').dirty || userForm.get('email').touched)">
                    <div *ngIf="userForm.get('email').errors.required">Email is required.</div>
                    <div *ngIf="userForm.get('email').errors.email">Enter a valid email.</div>
                  </div>
                </div>
                <button type="button" (click)="resetForm()">Reset</button>
                <p>Form Value: {{ formValue }}</p>
              </form>
            `
          },
          {
            "filename": "reactive-form-builder.component.ts",
            "title": "Reactive Form - FormBuilder",
            "description": "This example demonstrates how to create a reactive form using FormBuilder.",
            "code": `
              import { Component } from '@angular/core';
              import { FormGroup, FormBuilder, Validators } from '@angular/forms';
      
              @Component({
                selector: 'app-reactive-form-builder',
                templateUrl: './reactive-form-builder.component.html',
              })
              export class ReactiveFormBuilderComponent {
                userForm: FormGroup;
      
                constructor(private fb: FormBuilder) {
                  this.userForm = this.fb.group({
                    username: ['', [Validators.required, Validators.minLength(3)]],
                    password: ['', [Validators.required, Validators.minLength(6)]],
                  });
                }
      
                get formValue() {
                  return JSON.stringify(this.userForm.value);
                }
      
                resetForm() {
                  this.userForm.reset();
                }
              }
            `
          },
          {
            "filename": "reactive-form-builder.component.html",
            "title": "Reactive Form - FormBuilder Template",
            "description": "Template for the Reactive Form using FormBuilder.",
            "code": `
              <form [formGroup]="userForm">
                <div>
                  <input formControlName="username" placeholder="Username" />
                  <div *ngIf="userForm.get('username').invalid && (userForm.get('username').dirty || userForm.get('username').touched)">
                    <div *ngIf="userForm.get('username').errors.required">Username is required.</div>
                    <div *ngIf="userForm.get('username').errors.minlength">Minimum length is 3.</div>
                  </div>
                </div>
                <div>
                  <input type="password" formControlName="password" placeholder="Password" />
                  <div *ngIf="userForm.get('password').invalid && (userForm.get('password').dirty || userForm.get('password').touched)">
                    <div *ngIf="userForm.get('password').errors.required">Password is required.</div>
                    <div *ngIf="userForm.get('password').errors.minlength">Minimum length is 6.</div>
                  </div>
                </div>
                <button type="button" (click)="resetForm()">Reset</button>
                <p>Form Value: {{ formValue }}</p>
              </form>
            `
          },
          {
            "filename": "reactive-nested-form.component.ts",
            "title": "Reactive Form - Nested Form",
            "description": "This example demonstrates how to create a nested reactive form.",
            "code": `
              import { Component } from '@angular/core';
              import { FormGroup, FormBuilder, Validators } from '@angular/forms';
      
              @Component({
                selector: 'app-reactive-nested-form',
                templateUrl: './reactive-nested-form.component.html',
              })
              export class ReactiveNestedFormComponent {
                userForm: FormGroup;
      
                constructor(private fb: FormBuilder) {
                  this.userForm = this.fb.group({
                    name: ['', Validators.required],
                    address: this.fb.group({
                      street: ['', Validators.required],
                      city: ['', Validators.required],
                    }),
                  });
                }
      
                get formValue() {
                  return JSON.stringify(this.userForm.value);
                }
      
                resetForm() {
                  this.userForm.reset();
                }
              }
            `
          },
          {
            "filename": "reactive-nested-form.component.html",
            "title": "Reactive Form - Nested Form Template",
            "description": "Template for the nested Reactive Form.",
            "code": `
              <form [formGroup]="userForm">
                <div>
                  <input formControlName="name" placeholder="Name" />
                  <div *ngIf="userForm.get('name').invalid && (userForm.get('name').dirty || userForm.get('name').touched)">
                    <div *ngIf="userForm.get('name').errors.required">Name is required.</div>
                  </div>
                </div>
                <div formGroupName="address">
                  <h4>Address</h4>
                  <input formControlName="street" placeholder="Street" />
                  <div *ngIf="userForm.get('address.street').invalid && (userForm.get('address.street').dirty || userForm.get('address.street').touched)">
                    <div *ngIf="userForm.get('address.street').errors.required">Street is required.</div>
                  </div>
                  <input formControlName="city" placeholder="City" />
                  <div *ngIf="userForm.get('address.city').invalid && (userForm.get('address.city').dirty || userForm.get('address.city').touched)">
                    <div *ngIf="userForm.get('address.city').errors.required">City is required.</div>
                  </div>
                </div>
                <button type="button" (click)="resetForm()">Reset</button>
                <p>Form Value: {{ formValue }}</p>
              </form>
            `
          },
          {
            "filename": "dynamic-validation-radio.component.ts",
            "title": "Dynamic Validation with Radio Field",
            "description": "This example demonstrates how to add and remove form controls dynamically with validation based on the selection of a radio field.",
            "code": `
              import { Component } from '@angular/core';
              import { FormGroup, FormBuilder, Validators } from '@angular/forms';
          
              @Component({
                selector: 'app-dynamic-validation-radio',
                templateUrl: './dynamic-validation-radio.component.html',
              })
              export class DynamicValidationRadioComponent {
                userForm: FormGroup;
                activities = [
                  { value: 'games', label: 'Games' },
                  { value: 'study', label: 'Study' },
                  { value: 'none', label: 'None' },
                ];
          
                constructor(private fb: FormBuilder) {
                  this.userForm = this.fb.group({
                    activity: ['', Validators.required],
                    gameName: [''],
                    gameDescription: [''],
                    studySubject: [''],
                  });
                }
          
                onActivityChange(activity: string) {
                  this.setValidators(activity);
                }
          
                private setValidators(activity: string) {
                  const validators = {
                    games: { gameName: [Validators.required], gameDescription: [Validators.required], studySubject: [] },
                    study: { gameName: [], gameDescription: [], studySubject: [Validators.required] },
                    none: { gameName: [], gameDescription: [], studySubject: [] },
                  };
          
                  Object.keys(validators[activity]).forEach((control) => {
                    this.userForm.get(control).setValidators(validators[activity][control]);
                    this.userForm.get(control).updateValueAndValidity();
                  });
                }
          
                get formValue() {
                  return JSON.stringify(this.userForm.value);
                }
          
                resetForm() {
                  this.userForm.reset();
                }
              }
            `
          },
          {
            "filename": "dynamic-validation-radio.component.html",
            "title": "Dynamic Validation with Radio Field Template",
            "description": "Template for the dynamic validation with radio field example.",
            "code": `
              <form [formGroup]="userForm">
                <div>
                  <label>Activity:</label>
                  <div *ngFor="let activity of activities">
                    <input type="radio" [value]="activity.value" formControlName="activity" (change)="onActivityChange(activity.value)">
                    {{ activity.label }}
                  </div>
                </div>
                <div *ngIf="userForm.get('activity').value === 'games'">
                  <input formControlName="gameName" placeholder="Game Name" />
                  <div *ngIf="userForm.get('gameName').invalid && (userForm.get('gameName').dirty || userForm.get('gameName').touched)">
                    <div *ngIf="userForm.get('gameName').errors.required">Game Name is required.</div>
                  </div>
                  <input formControlName="gameDescription" placeholder="Game Description" />
                  <div *ngIf="userForm.get('gameDescription').invalid && (userForm.get('gameDescription').dirty || userForm.get('gameDescription').touched)">
                    <div *ngIf="userForm.get('gameDescription').errors.required">Game Description is required.</div>
                  </div>
                </div>
                <div *ngIf="userForm.get('activity').value === 'study'">
                  <input formControlName="studySubject" placeholder="Study Subject" />
                  <div *ngIf="userForm.get('studySubject').invalid && (userForm.get('studySubject').dirty || userForm.get('studySubject').touched)">
                    <div *ngIf="userForm.get('studySubject').errors.required">Study Subject is required.</div>
                  </div>
                </div>
                <p>Form Value: {{ formValue }}</p>
                <button type="button" (click)="resetForm()">Reset</button>
              </form>
            `
          },
          {
            "filename": "setvalue-patchvalue.component.ts",
            "title": "SetValue and PatchValue",
            "description": "This example demonstrates how to use setValue and patchValue to update form controls.",
            "code": `
              import { Component } from '@angular/core';
              import { FormGroup, FormBuilder, Validators } from '@angular/forms';
          
              @Component({
                selector: 'app-setvalue-patchvalue',
                templateUrl: './setvalue-patchvalue.component.html',
              })
              export class SetValuePatchValueComponent {
                userForm: FormGroup;
          
                constructor(private fb: FormBuilder) {
                  this.userForm = this.fb.group({
                    username: ['', Validators.required],
                    email: ['', [Validators.required, Validators.email]],
                  });
                }
          
                setValueExample() {
                // this.userForm.get('username').setValue('John Doe');
                  this.userForm.setValue({
                    username: 'John Doe',
                    email: 'john.doe@example.com',
                  });
                }
          
                patchValueExample() {
                  this.userForm.patchValue({
                    username: 'Jane Doe',
                  });
                }
          
                get formValue() {
                  return JSON.stringify(this.userForm.value);
                }
          
                resetForm() {
                  this.userForm.reset();
                }
              }
            `
          },
          {
            "filename": "setvalue-patchvalue.component.html",
            "title": "SetValue and PatchValue Template",
            "description": "Template for the setValue and patchValue form.",
            "code": `
              <form [formGroup]="userForm">
                <div>
                  <input formControlName="username" placeholder="Username" />
                  <div *ngIf="userForm.get('username').invalid && (userForm.get('username').dirty || userForm.get('username').touched)">
                    <div *ngIf="userForm.get('username').errors.required">Username is required.</div>
                  </div>
                </div>
                <div>
                  <input formControlName="email" placeholder="Email" />
                  <div *ngIf="userForm.get('email').invalid && (userForm.get('email').dirty || userForm.get('email').touched)">
                    <div *ngIf="user Form.get('email').errors.required">Email is required.</div>
                    <div *ngIf="userForm.get('email').errors.email">Enter a valid email.</div>
                  </div>
                </div>
                <button type="button" (click)="setValueExample()">Set Value Example</button>
                <button type="button" (click)="patchValueExample()">Patch Value Example</button>
                <p>Form Value: {{ formValue }}</p>
                <button type="button" (click)="resetForm()">Reset</button>
              </form>
            `
          },
          {
            "filename": "form-states.component.ts",
            "title": "Form States",
            "description": "This example demonstrates how to use form states such as touched, untouched, dirty, and pristine.",
            "code": `
              import { Component } from '@angular/core';
              import { FormGroup, FormBuilder, Validators } from '@angular/forms';
          
              @Component({
                selector: 'app-form-states',
                templateUrl: './form-states.component.html',
              })
              export class FormStatesComponent {
                userForm: FormGroup;
          
                constructor(private fb: FormBuilder) {
                  this.userForm = this.fb.group({
                    username: ['', Validators.required],
                    email: ['', [Validators.required, Validators.email]],
                  });
                }
          
                get formValue() {
                  return JSON.stringify(this.userForm.value);
                }
          
                resetForm() {
                  this.userForm.reset();
                }
              }
            `
          },
          {
            "filename": "form-states.component.html",
            "title": "Form States Template",
            "description": "Template for the form states example.",
            "code": `
              <form [formGroup]="userForm">
                <div>
                  <input formControlName="username" placeholder="Username" />
                  <div *ngIf="userForm.get('username').invalid && (userForm.get('username').dirty || userForm.get('username').touched)">
                    <div *ngIf="userForm.get('username').errors.required">Username is required.</div>
                  </div>
                  <p>Touched: {{ userForm.get('username').touched }}</p>
                  <p>Untouched: {{ userForm.get('username').untouched }}</p>
                  <p>Dirty: {{ userForm.get('username').dirty }}</p>
                  <p>Pristine: {{ userForm.get('username').pristine }}</p>
                </div>
                <div>
                  <input formControlName="email" placeholder="Email" />
                  <div *ngIf="userForm.get('email').invalid && (userForm.get('email').dirty || userForm.get('email').touched)">
                    <div *ngIf="userForm.get('email').errors.required">Email is required.</div>
                    <div *ngIf="userForm.get('email').errors.email">Enter a valid email.</div>
                  </div>
                  <p>Touched: {{ userForm.get('email').touched }}</p>
                  <p>Untouched: {{ userForm.get('email').untouched }}</p>
                  <p>Dirty: {{ userForm.get('email').dirty }}</p>
                  <p>Pristine: {{ userForm.get('email').pristine }}</p>
                  <p>Valid: {{ userForm.get('email').valid }}</p>
                  <p>Invalid: {{ userForm.get('email').invalid }}</p>

                </div>
                <p>Form Value: {{ formValue }}</p>
                <button type="button" (click)="resetForm()">Reset</button>
              </form>
            `
          },
          {
            "filename": "template-driven-form.component.ts",
            "title": "Template-Driven Form",
            "description": "This example demonstrates a template-driven form with validations.",
            "code": `
              import { Component } from '@angular/core';
      
              @Component({
                selector: 'app-template-driven-form',
                templateUrl: './template-driven-form.component.html',
              })
              export class TemplateDrivenFormComponent {
                model = {
                  name: '',
                  email: '',
                  password: ''
                };
      
                onSubmit(form) {
                  console.log('Form Submitted!', form.value);
                }
              }
            `
          },
          {
            "filename": "template-driven-form.component.html",
            "title": "Template-Driven Form Template",
            "description": "Template for the Template-Driven Form.",
            "code": `
              <form #form="ngForm" (ngSubmit)="onSubmit(form)">
                <div>
                  <input [(ngModel)]="model.name" name="name" required minlength="3" placeholder="Name" />
                  <div *ngIf="form.controls.name?.invalid && (form.controls.name?.dirty || form.controls.name?.touched)">
                    <div *ngIf="form.controls.name?.errors?.required">Name is required.</div>
                    <div *ngIf="form.controls.name?.errors?.minlength">Minimum length is 3.</div>
                  </div>
                </div>
                <div>
                  <input [(ngModel)]="model.email" name="email" required email placeholder="Email" />
                  <div *ngIf="form.controls.email?.invalid && (form.controls.email?.dirty || form.controls.email?.touched)">
                    <div *ngIf="form.controls.email?.errors?.required">Email is required.</div>
                    <div *ngIf="form.controls.email?.errors?.email">Enter a valid email.</div>
                  </div>
                </div>
                <div>
                  <input [(ngModel)]="model.password" name="password" required minlength="6" placeholder="Password" />
                  <div *ngIf="form.controls.password?.invalid && (form.controls.password?.dirty || form.controls.password?.touched)">
                    <div *ngIf="form.controls.password?.errors?.required">Password is required.</div>
                    <div *ngIf="form.controls.password?.errors?.minlength">Minimum length is 6.</div>
                  </div>
                </div>
                <button type="submit" [disabled]="form.invalid">Submit</button>
              </form>
            `
          }
        ]
      },
      {
        "title": "Dynamic Validation Add and Remove with FormBuilder and Validators in Angular",
        "description": "This Angular example demonstrates a dynamic form where validators are added or removed based on the value of a radio button group. Depending on the selected terms and conditions option, certain fields like 'firstname', 'lastname', and 'reason' will have required validation applied or removed. The form utilizes Angular's FormBuilder, Validators, and reactive form controls.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "dynamic-validation-add-removegs.component.ts",
            "title": "DynamicValidationAddRemovegsComponent",
            "description": "This TypeScript file contains the logic to dynamically add or remove validators based on the selection from the radio buttons. Validators are set using `dynamicValidationAddRemoveObject` and `setValidators` methods for fields like 'firstname', 'lastname', and 'reason'.",
            "code": `
           import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-validation-add-removegs',
  templateUrl: './dynamic-validation-add-removegs.component.html',
  styleUrls: ['./dynamic-validation-add-removegs.component.css'],
})
export class DynamicValidationAddRemovegsComponent implements OnInit {
  submitted: boolean = false;
  constructor(private fb: FormBuilder) {
    this.formName.get('terms&condition').valueChanges.subscribe((val: any) => {
      switch (val) {
        case 0:
          // this.setValidators(['firstname','lastname']);

          // or

          // let sgsgg = [
          //   {name:'firstname',validations:[Validators.required]},
          //   {name:'lastname',validations:[Validators.required]},
          //   {name:'reason'}
          // ];
          // this.dynamicValidationAddRemove(sgsgg);

          //or

          let sgsgg = {
            firstname: [Validators.required],
            lastname: [Validators.required],
            reason: [],
          };
          this.dynamicValidationAddRemoveObject(sgsgg);

          break;
        case 1:
          // this.setValidators(['reason']);

          //or

          // let sgsgs = [
          //   {name:'firstname',validations:[]}, // validation:[] is optional
          //   {name:'lastname'},
          //   {name:'reason',validations:[Validators.required]}
          // ];
          // this.dynamicValidationAddRemove(sgsgs);

          //or

          let sgsgs = {
            firstname: [],
            lastname: [],
            reason: [Validators.required],
          };
          this.dynamicValidationAddRemoveObject(sgsgs);

          break;
        case 2:
          // this.setValidators([]);

          //or

          // let sgsgss = [
          //   {name:'firstname'},
          //   {name:'lastname'},
          //   {name:'reason'}
          // ];
          // this.dynamicValidationAddRemove(sgsgss);

          //or

          let sgsgss = { firstname: [], lastname: [], reason: [] };
          this.dynamicValidationAddRemoveObject(sgsgss);
          break;
      }
    });
  }

  formName: any = this.fb.group({
    inputName: ['', Validators.required],
    'terms&condition': ['', Validators.required],
    firstname: [],
    lastname: [],
    reason: [],
  });

  ngOnInit() {}

  submit() {
    this.submitted = true;
    console.log('sgsg', this.formName);
    if (!this.formName.valid) {
      // !this.formName.valid === false
      alert('fill all the field sgsgs');
    }
    console.log('gsgs', this.formName.value);
  }

  private setValidators(allowedFiels: any = []):void {
    const fields = ['firstname', 'lastname', 'reason'];
    fields.forEach((element: any) => {
      let validators: any = [];
      if (allowedFiels.includes(element)) {
        validators = [Validators.required];
      }
      this.formName.get(element).setValidators(validators);
      this.formName.get(element).updateValueAndValidity();
    });
    console.log('gsgsgsgsgs', this.formName);
  }

  private dynamicValidationAddRemove(fields: any = []):void {
    fields.forEach((gs: any) => {
      this.formName.get(gs.name).setValidators(gs?.validations?.length > 0 ? gs.validations : []);
      this.formName.get(gs.name).updateValueAndValidity();
    });
  }

  private dynamicValidationAddRemoveObject(fields: any):void {
    Object.keys(fields).forEach((sg: any) => {
      this.formName.get(sg).setValidators(fields[sg]);
      this.formName.get(sg).updateValueAndValidity();
    });
  }
}
            `
          },
          {
            "filename": "dynamic-validation-add-removegs.component.html",
            "title": "HTML Template for DynamicValidationAddRemovegsComponent",
            "description": "The HTML template contains a form with input fields and radio buttons. Based on the selected radio button, the required validators for 'firstname', 'lastname', and 'reason' fields are dynamically applied or removed. The form's validation state is displayed below the form using Angular's reactive form features.",
            "code": `
            <p>dynamic-validation-add-removegs works!</p>
            <form [formGroup]='formName'>
              <input formControlName='inputName'>
              <div *ngIf="formName.get('inputName').errors && submitted">
                <span class="error" *ngIf ="formName.get('inputName').errors['required']">This field is required</span>
              </div>
              <div>
                <input type="radio" formControlName='terms&condition' [value]="0"><label>Accept</label>
                <input type="radio" formControlName='terms&condition' [value]="1"><label>Accept and reason</label>
                <input type="radio" formControlName='terms&condition' [value]="2"><label>Decline</label>
                <div *ngIf="formName.get('terms&condition').errors && submitted">
                  <span class="error" *ngIf ="formName.get('terms&condition').errors['required']">terms & condition is required</span>
                </div>
              </div>
              <div style="display:flex;gap:20px">
                <div>
                  <label>First name</label>
                  <input formControlName='firstname'>
                  <div *ngIf="formName.get('firstname').errors && submitted">
                    <span class="error" *ngIf ="formName.get('firstname').errors['required']">This firstname is required</span>
                  </div>
                  <br>
                  <label>Last name</label>
                  <input formControlName='lastname'>
                  <div *ngIf="formName.get('lastname').errors && submitted">
                    <span class="error" *ngIf ="formName.get('lastname').errors['required']">This lastname is required</span>
                  </div>
                </div>
                <div>
                  <label>Reason</label>
                  <input formControlName='reason'>
                  <div *ngIf="formName.get('reason').errors && submitted">
                    <span class="error" *ngIf ="formName.get('reason').errors['required']">This reason is required</span>
                  </div>
                </div>
              </div>
            </form>
            <button (click)="submit()">Submit</button>
            <p>valid: {{ formName.valid }}</p>
            <p>invalid: {{ formName.invalid }}</p>
            <p>value: {{ formName.value | json }}</p>
            `
          },
          {
            "filename": "dynamic-validation-add-removegs.component.css",
            "title": "CSS for DynamicValidationAddRemovegsComponent",
            "description": "Basic CSS for styling the dynamic form layout.",
            "code": `
            /* dynamic-validation-add-removegs.component.css */
            .error {
              color: red;
              font-size: 12px;
            }
      
            div {
              margin-bottom: 10px;
            }
      
            label {
              display: block;
              margin-bottom: 5px;
            }
      
            input {
              margin-bottom: 10px;
              padding: 5px;
            }
            `
          }
        ]
      },            
      {
        "title": "Angular Array CRUD Operations",
        "description": "This example demonstrates how to perform basic CRUD (Create, Read, Update, Delete) operations on an array in Angular.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "array-crud.component.ts",
            "title": "Array CRUD - Component",
            "description": "This example shows how to implement CRUD operations on an array in Angular.",
            "code": `
              // array-crud.component.ts
              import { Component } from '@angular/core';  // Importing Angular's Component decorator
      
              @Component({
                selector: 'app-crud', // Defines the selector used in the HTML
                templateUrl: './crud.component.html', // Points to the component's HTML file
                styleUrls: ['./crud.component.css'], // Points to the component's CSS file
              })
              export class CrudComponent {
                items = []; // Initialize an empty array to store items
      
                // CREATE: Add a new item to the array
                addItem(newItem: string) { 
                  this.items.push(newItem); // Adds the new item to the array
                }
      
                // READ: Retrieve all items from the array
                getItems() {
                  return this.items; // Returns the array of items
                }
      
                // UPDATE: Update an existing item in the array
                updateItem(index: number, updatedItem: string) {
                  this.items[index] = updatedItem; // Replaces the old item with the updated one
                }
      
                // DELETE: Remove an item from the array
                deleteItem(index: number) {
                  this.items.splice(index, 1); // Removes the item at the given index
                }
              }
            `
          },
          {
            "filename": "array-crud.component.html",
            "title": "Array CRUD - Template",
            "description": "The following code provides the HTML template for CRUD operations on the array.",
            "code": `
              <!-- array-crud.component.html -->
              <div>
                <!-- Input for new item -->
                <input #newItemInput type="text" placeholder="Add new item" />
      
                <!-- Button to add a new item to the list -->
                <button (click)="addItem(newItemInput.value)">Add Item</button>
      
                <!-- Display the list of items -->
                <ul>
                  <li *ngFor="let item of getItems(); let i = index">
                    <!-- Display item value -->
                    {{ item }} 
                    
                    <!-- Button to update item -->
                    <button (click)="updateItem(i, 'Updated Item')">Update</button>
                    
                    <!-- Button to delete item -->
                    <button (click)="deleteItem(i)">Delete</button>
                  </li>
                </ul>
              </div>
            `
          }
        ]
      },      
      {
        "title": "Angular Array of Objects CRUD Operations",
        "description": "This example demonstrates how to perform CRUD (Create, Read, Update, Delete) operations on an array of objects in Angular.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "array-object-crud.component.ts",
            "title": "Array of Objects CRUD - Component",
            "description": "The following code shows the TypeScript logic for CRUD operations on an array of objects.",
            "code": `
              // array-object-crud.component.ts
              import { Component } from '@angular/core';  // Importing Angular's Component decorator
      
              @Component({
                selector: 'app-crud', // Defines the selector used in the HTML
                templateUrl: './crud.component.html', // Points to the component's HTML file
                styleUrls: ['./crud.component.css'], // Points to the component's CSS file
              })
              export class CrudComponent {
                // Initialize an array of objects, each representing an item with id and name properties
                items = [
                  { id: 1, name: 'Item 1' },
                  { id: 2, name: 'Item 2' },
                  { id: 3, name: 'Item 3' }
                ];
      
                // CREATE: Add a new object to the array
                addItem(newItemName: string) {
                  const newItem = {
                    id: this.items.length + 1, // Assign a new unique id based on array length
                    name: newItemName // Assign the new item name
                  };
                  this.items.push(newItem); // Add the new object to the array
                }
      
                // READ: Retrieve all objects from the array
                getItems() {
                  return this.items; // Returns the array of object items
                }
      
                // UPDATE: Update the name of an existing object in the array
                updateItem(id: number, updatedName: string) {
                  const item = this.items.find(i => i.id === id); // Find the object by its id
                  if (item) {
                    item.name = updatedName; // Update the object's name property
                  }
                }
      
                // DELETE: Remove an object from the array
                deleteItem(id: number) {
                  this.items = this.items.filter(i => i.id !== id); // Filter out the object with the matching id
                }
              }
            `
          },
          {
            "filename": "array-object-crud.component.html",
            "title": "Array of Objects CRUD - Template",
            "description": "The following code provides the HTML template for CRUD operations on the array of objects.",
            "code": `
              <!-- array-object-crud.component.html -->
              <div>
                <!-- Input for new item name -->
                <input #newItemInput type="text" placeholder="Add new item" />
      
                <!-- Button to add a new object to the list -->
                <button (click)="addItem(newItemInput.value)">Add Item</button>
      
                <!-- Display the list of items (array of objects) -->
                <ul>
                  <li *ngFor="let item of getItems()">
                    <!-- Display item id and name -->
                    {{ item.id }} - {{ item.name }}
                    
                    <!-- Button to update item -->
                    <button (click)="updateItem(item.id, 'Updated ' + item.name)">Update</button>
                    
                    <!-- Button to delete item -->
                    <button (click)="deleteItem(item.id)">Delete</button>
                  </li>
                </ul>
              </div>
            `
          }
        ]
      },
      {
        "title": "Angular Array of Objects CRUD with Reactive Forms using FormBuilder",
        "description": "This example demonstrates how to perform CRUD (Create, Read, Update, Delete) operations on an array of objects with reactive form validation using FormBuilder in Angular.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "array-object-crud-reactive-forms-formbuilder.component.ts",
            "title": "Array of Objects CRUD - Component",
            "description": "This example shows how to implement CRUD operations on an array of objects with multiple fields using reactive forms with FormBuilder in Angular.",
            "code": `
              // array-object-crud-reactive-forms-formbuilder.component.ts
              import { Component } from '@angular/core';
              import { FormGroup, FormBuilder, Validators } from '@angular/forms';
      
              @Component({
                selector: 'app-crud-reactive-forms-fb',
                templateUrl: './crud-reactive-forms-formbuilder.component.html',
                styleUrls: ['./crud-reactive-forms-formbuilder.component.css']
              })
              export class CrudReactiveFormsFormBuilderComponent {
                itemForm: FormGroup; // Define the FormGroup for the form
      
                // Array of objects to store items
                items = [
                  { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
                  { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' }
                ];
      
                constructor(private formBuilder: FormBuilder) {
                  this.initForm(); // Initialize the form on component creation
                }
      
                // Initialize the reactive form using FormBuilder
                initForm() {
                  this.itemForm = this.formBuilder.group({
                    name: ['', Validators.required],
                    age: ['', [Validators.required, Validators.min(1)]],
                    email: ['', [Validators.required, Validators.email]]
                  });
                }
      
                // CREATE: Add a new object to the array
                addItem() {
                  if (this.itemForm.valid) {
                    const newItem = {
                      id: this.items.length + 1,
                      name: this.itemForm.value.name,
                      age: this.itemForm.value.age,
                      email: this.itemForm.value.email
                    };
                    this.items.push(newItem);
                    this.itemForm.reset(); // Reset the form after adding
                  }
                }
      
                // READ: Retrieve all objects
                getItems() {
                  return this.items;
                }
      
                // UPDATE: Update an existing object in the array
                updateItem(index: number) {
                  const updatedItem = this.items[index];
                  updatedItem.name = 'Updated ' + updatedItem.name;
                }
      
                // DELETE: Remove an object from the array
                deleteItem(index: number) {
                  this.items.splice(index, 1); // Remove the item by index
                }
              }
            `
          },
          {
            "filename": "array-object-crud-reactive-forms-formbuilder.component.html",
            "title": "Array of Objects CRUD - Template",
            "description": "The following code provides the HTML template for CRUD operations with reactive form validation using FormBuilder.",
            "code": `
              <!-- array-object-crud-reactive-forms-formbuilder.component.html -->
              <div>
                <form [formGroup]="itemForm">
                  <!-- Input for name -->
                  <input formControlName="name" type="text" placeholder="Name" />
                  <div *ngIf="itemForm.get('name').invalid && itemForm.get('name').touched">
                    Name is required.
                  </div>
      
                  <!-- Input for age -->
                  <input formControlName="age" type="number" placeholder="Age" />
                  <div *ngIf="itemForm.get('age').invalid && itemForm.get('age').touched">
                    Age is required and must be greater than 0.
                  </div>
      
                  <!-- Input for email -->
                  <input formControlName="email" type="email" placeholder="Email" />
                  <div *ngIf="itemForm.get('email').invalid && itemForm.get('email').touched">
                    Enter a valid email.
                  </div>
      
                  <!-- Button to add a new object -->
                  <button type="button" (click)="addItem()" [disabled]="itemForm.invalid">Add Item</button>
                </form>
      
                <!-- Display the list of items (array of objects) -->
                <ul>
                  <li *ngFor="let item of getItems(); let i = index">
                    <!-- Display item details -->
                    {{ item.id }} - Name: {{ item.name }}, Age: {{ item.age }}, Email: {{ item.email }}
      
                    <!-- Button to update item -->
                    <button (click)="updateItem(i)">Update</button>
      
                    <!-- Button to delete item -->
                    <button (click)="deleteItem(i)">Delete</button>
                  </li>
                </ul>
              </div>
            `
          }
        ]
      },
      {
        "title": "Angular Local Storage and Session Storage CRUD with Reactive Forms",
        "description": "This example demonstrates how to perform CRUD (Create, Read, Update, Delete) operations on local storage and session storage using reactive forms in Angular.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "local-storage-crud-reactive-forms.component.ts",
            "title": "Local Storage CRUD - Component",
            "description": "This example shows how to implement CRUD operations on an array of objects stored in local storage using reactive forms in Angular.",
            "code": `
              import { Component, OnInit } from '@angular/core';
              import { FormGroup, FormBuilder, Validators } from '@angular/forms';
      
              @Component({
                selector: 'app-local-storage-crud',
                templateUrl: './local-storage-crud.component.html',
                styleUrls: ['./local-storage-crud.component.css']
              })
              export class LocalStorageCrudComponent implements OnInit {
                itemForm: FormGroup; // Define the FormGroup for the form
                items: any[] = []; // Array to store items
      
                constructor(private formBuilder: FormBuilder) {
                  this.initForm(); // Initialize the form on component creation
                }
      
                ngOnInit() {
                  this.loadItems(); // Load items from local storage on init
                }
      
                // Initialize the reactive form using FormBuilder
                initForm() {
                  this.itemForm = this.formBuilder.group({
                    name: ['', Validators.required],
                    age: ['', [Validators.required, Validators.min(1)]],
                    email: ['', [Validators.required, Validators.email]]
                  });
                }
      
                // LOAD: Retrieve all objects from local storage
                loadItems() {
                  const storedItems = localStorage.getItem('items');
                  this.items = storedItems ? JSON.parse(storedItems) : [];
                }
      
                // CREATE: Add a new object to local storage
                addItem() {
                  if (this.itemForm.valid) {
                    const newItem = {
                      id: this.items.length + 1,
                      name: this.itemForm.value.name,
                      age: this.itemForm.value.age,
                      email: this.itemForm.value.email
                    };
                    this.items.push(newItem);
                    localStorage.setItem('items', JSON.stringify(this.items)); // Save updated items to local storage
                    this.itemForm.reset(); // Reset the form after adding
                  }
                }
      
                // UPDATE: Update an existing object in local storage
                updateItem(index: number) {
                  const updatedItem = this.items[index];
                  updatedItem.name = 'Updated ' + updatedItem.name;
                  localStorage.setItem('items', JSON.stringify(this.items)); // Update local storage
                }
      
                // DELETE: Remove an object from local storage
                deleteItem(index: number) {
                  this.items.splice(index, 1); // Remove the item by index
                  localStorage.setItem('items', JSON.stringify(this.items)); // Update local storage
                }
              }
            `
          },
          {
            "filename": "local-storage-crud-reactive-forms.component.html",
            "title": "Local Storage CRUD - Template",
            "description": "The following code provides the HTML template for CRUD operations with local storage using reactive forms.",
            "code": `
              <div>
                <form [formGroup]="itemForm">
                  <input formControlName="name" type="text" placeholder="Name" />
                  <div *ngIf="itemForm.get('name').invalid && itemForm.get('name').touched">
                    Name is required.
                  </div>
      
                  <input formControlName="age" type="number" placeholder="Age" />
                  <div *ngIf="itemForm.get('age').invalid && itemForm.get('age').touched">
                    Age is required and must be greater than 0.
                  </div>
      
                  <input formControlName="email" type="email" placeholder="Email" />
                  <div *ngIf="itemForm.get('email').invalid && itemForm.get('email').touched">
                    Enter a valid email.
                  </div>
      
                  <button type="button" (click)="addItem()" [disabled]="itemForm.invalid">Add Item</button>
                </form>
      
                <ul>
                  <li *ngFor="let item of items; let i = index">
                    {{ item.id }} - Name: {{ item.name }}, Age: {{ item.age }}, Email: {{ item.email }}
                    <button (click)="updateItem(i)">Update</button>
                    <button (click)="deleteItem(i)">Delete</button>
                  </li>
                </ul>
              </div>
            `
          },
          {
            "filename": "session-storage-crud-reactive-forms.component.ts",
            "title": "Session Storage CRUD - Component",
            "description": "This example shows how to implement CRUD operations on an array of objects stored in session storage using reactive forms in Angular.",
            "code": `
              import { Component, OnInit } from '@angular/core';
              import { FormGroup, FormBuilder, Validators } from '@angular/forms';
      
              @Component({
                selector: 'app-session-storage-crud',
                templateUrl: './session-storage-crud.component.html',
                styleUrls: ['./session-storage-crud.component.css']
              })
              export class SessionStorageCrudComponent implements OnInit {
                itemForm: FormGroup; // Define the FormGroup for the form
                items: any[] = []; // Array to store items
      
                constructor(private formBuilder: FormBuilder) {
                  this.initForm(); // Initialize the form on component creation
                }
      
                ngOnInit() {
                  this.loadItems(); // Load items from session storage on init
                }
      
                // Initialize the reactive form using FormBuilder
                initForm() {
                  this.itemForm = this.formBuilder.group({
                    name: ['', Validators.required],
                    age: ['', [Validators.required, Validators.min(1)]],
                    email: ['', [Validators.required, Validators.email]]
                  });
                }
      
                // LOAD: Retrieve all objects from session storage
                loadItems() {
                  const storedItems = sessionStorage.getItem('items');
                  this.items = storedItems ? JSON.parse(storedItems) : [];
                }
      
                // CREATE: Add a new object to session storage
                addItem() {
                  if (this.itemForm.valid) {
                    const newItem = {
                      id: this.items.length + 1,
                      name: this.itemForm.value.name,
                      age: this.itemForm.value.age,
                      email: this.itemForm.value.email
                    };
                    this.items.push(newItem);
                    sessionStorage.setItem('items', JSON.stringify(this.items)); // Save updated items to session storage
                    this.itemForm.reset(); // Reset the form after adding
                  }
                }
      
                // UPDATE: Update an existing object in session storage
                updateItem(index: number) {
                  const updatedItem = this.items[index];
                  updatedItem.name = 'Updated ' + updatedItem.name;
                  sessionStorage.setItem('items', JSON.stringify(this.items)); // Update session storage
                }
      
                // DELETE: Remove an object from session storage
                deleteItem(index: number) {
                  this.items.splice(index, 1); // Remove the item by index
                  sessionStorage.setItem('items', JSON.stringify(this.items)); // Update session storage
                }
              }
            `
          },
          {
            "filename": "session-storage-crud-reactive-forms.component.html",
            "title": "Session Storage CRUD - Template",
            "description": "The following code provides the HTML template for CRUD operations with session storage using reactive forms.",
            "code": `
              <div>
                <form [formGroup]="itemForm">
                  <input formControlName="name" type="text" placeholder="Name" />
                  <div *ngIf="itemForm.get('name').invalid && itemForm.get('name').touched">
                    Name is required.
                  </div>
      
                  <input formControlName="age" type="number" placeholder="Age" />
                  <div *ngIf="itemForm.get('age').invalid && itemForm.get('age').touched">
                    Age is required and must be greater than 0.
                  </div>
      
                  <input formControlName="email" type="email" placeholder="Email" />
                  <div *ngIf="itemForm.get('email').invalid && itemForm.get('email').touched">
                    Enter a valid email.
                  </div>
      
                  <button type="button" (click)="addItem()" [disabled]="itemForm.invalid">Add Item</button>
                </form>
      
                <ul>
                  <li *ngFor="let item of items; let i = index">
                    {{ item.id }} - Name: {{ item.name }}, Age: {{ item.age }}, Email: {{ item.email }}
                    <button (click)="updateItem(i)">Update</button>
                    <button (click)="deleteItem(i)">Delete</button>
                  </li>
                </ul>
              </div>
            `
          },
          
        ]
      },
      {
        "title": "Angular Local Storage CRUD Operations with Reactive Forms",
        "description": "This example demonstrates how to perform CRUD (Create, Read, Update, Delete) operations on an array of objects with reactive form validation using local storage in Angular.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "local-storage-add.component.ts",
            "title": "Local Storage Add Component",
            "description": "This component handles adding and updating items in local storage.",
            "code": `
      // local-storage-add.component.ts
      import { Component, OnInit } from '@angular/core';
      import { FormBuilder, FormGroup, Validators } from '@angular/forms';
      import { Router, ActivatedRoute } from '@angular/router';
      
      @Component({
        selector: 'app-local-storage-add',
        templateUrl: './local-storage-add.component.html',
        styleUrls: ['./local-storage-add.component.css']
      })
      export class LocalStorageAddComponent implements OnInit {
        itemForm: FormGroup; // FormGroup for the item
        editMode = false; // To track if in edit mode
        itemId: number; // To hold the item id when editing
      
        constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
          this.initForm(); // Initialize the form
        }
      
        ngOnInit() {
          // Check if in edit mode
          this.route.params.subscribe(params => {
            this.itemId = +params['id']; // Get the item ID from the route
            if (this.itemId) {
              this.editMode = true;
              const item = this.getItemFromLocalStorage(this.itemId); // Get item from local storage
              if (item) {
                this.itemForm.patchValue(item); // Populate the form with item data
              }
            }
          });
        }
      
        // Initialize the reactive form using FormBuilder
        initForm() {
          this.itemForm = this.formBuilder.group({
            name: ['', Validators.required],
            age: ['', [Validators.required, Validators.min(1)]],
            email: ['', [Validators.required, Validators.email]]
          });
        }
      
        // Add or update item
        saveItem() {
          if (this.itemForm.valid) {
            const item = {
              id: this.editMode ? this.itemId : new Date().getTime(),
              ...this.itemForm.value
            };
            this.saveToLocalStorage(item); // Save item to local storage
            this.router.navigate(['/list']); // Navigate to the list
          }
        }
      
        // Save item to local storage
        saveToLocalStorage(item) {
          let items = JSON.parse(localStorage.getItem('items')) || [];
          if (this.editMode) {
            items = items.map(i => (i.id === item.id ? item : i)); // Update item
          } else {
            items.push(item); // Add new item
          }
          localStorage.setItem('items', JSON.stringify(items)); // Update local storage
        }
      
        // Get item from local storage by id
        getItemFromLocalStorage(id: number) {
          const items = JSON.parse(localStorage.getItem('items')) || [];
          return items.find(item => item.id === id);
        }
      }
            `
          },
          {
            "filename": "local-storage-add.component.html",
            "title": "Local Storage Add Component Template",
            "description": "The following code provides the HTML template for adding and updating items in local storage.",
            "code": `
      <!-- local-storage-add.component.html -->
      <div>
        <form [formGroup]="itemForm" (ngSubmit)="saveItem()">
          <input formControlName="name" type="text" placeholder="Name" />
          <div *ngIf="itemForm.get('name').invalid && itemForm.get('name').touched">
            Name is required.
          </div>
      
          <input formControlName="age" type="number" placeholder="Age" />
          <div *ngIf="itemForm.get('age').invalid && itemForm.get('age').touched">
            Age is required and must be greater than 0.
          </div>
      
          <input formControlName="email" type="email" placeholder="Email" />
          <div *ngIf="itemForm.get('email').invalid && itemForm.get('email').touched">
            Enter a valid email.
          </div>
      
          <button type="submit" [disabled]="itemForm.invalid">Save Item</button>
        </form>
      </div>
            `
          },
          {
            "filename": "local-storage-list.component.ts",
            "title": "Local Storage List Component",
            "description": "This component displays the list of items stored in local storage and allows editing and deleting items.",
            "code": `
      // local-storage-list.component.ts
      import { Component, OnInit } from '@angular/core';
      import { Router } from '@angular/router';
      
      @Component({
        selector: 'app-local-storage-list',
        templateUrl: './local-storage-list.component.html',
        styleUrls: ['./local-storage-list.component.css']
      })
      export class LocalStorageListComponent implements OnInit {
        items: any[]; // Array to hold items
      
        constructor(private router: Router) {}
      
        ngOnInit() {
          this.getItemsFromLocalStorage(); // Get items from local storage on init
        }
      
        // Get items from local storage
        getItemsFromLocalStorage() {
          this.items = JSON.parse(localStorage.getItem('items')) || [];
        }
      
        // Navigate to add item component for editing
        editItem(id: number) {
          this.router.navigate(['/add', { id }]); // Navigate to add component with item id
        }
      
        // Delete item from local storage
        deleteItem(id: number) {
          let items = JSON.parse(localStorage.getItem('items')) || [];
          items = items.filter(item => item.id !== id); // Remove item by id
          localStorage.setItem('items', JSON.stringify(items)); // Update local storage
          this.getItemsFromLocalStorage(); // Refresh the item list
        }
      }
            `
          },
          {
            "filename": "local-storage-list.component.html",
            "title": "Local Storage List Component Template",
            "description": "The following code provides the HTML template for displaying the list of items in local storage.",
            "code": `
      <!-- local-storage-list.component.html -->
      <div>
        <h2>Items List</h2>
        <button routerLink="/add">Add New Item</button>
        <ul>
          <li *ngFor="let item of items">
            {{ item.id }} - Name: {{ item.name }}, Age: {{ item.age }}, Email: {{ item.email }}
            <button (click)="editItem(item.id)">Edit</button>
            <button (click)="deleteItem(item.id)">Delete</button>
          </li>
        </ul>
      </div>
            `
          },
          {
            "filename": "app-routing.module.ts",
            "title": "App Routing Module",
            "description": "The routing module for navigating between add and list components.",
            "code": `
      // app-routing.module.ts
      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      import { LocalStorageAddComponent } from './local-storage-add/local-storage-add.component';
      import { LocalStorageListComponent } from './local-storage-list/local-storage-list.component';
      
      const routes: Routes = [
        { path: 'add', component: LocalStorageAddComponent },
        { path: 'list', component: LocalStorageListComponent },
        { path: '', redirectTo: '/list', pathMatch: 'full' } // Redirect to list on load
      ];
      
      @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
      })
      export class AppRoutingModule { }
            `
          },
          {
            "filename": "app.component.html",
            "title": "App Component Template",
            "description": "The main application template with navigation links.",
            "code": `
      <!-- app.component.html -->
      <nav>
        <a routerLink="/add">Add Item</a>
        <a routerLink="/list">View Items</a>
      </nav>
      <router-outlet></router-outlet> <!-- This will render the routed components -->
            `
          }
        ]
      },
      {
        "title": "Angular CRUD with JSON Placeholder API",
        "description": "This example demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using a JSON Placeholder API in Angular.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "item.service.ts",
            "title": "Item Service",
            "description": "This service handles API calls for CRUD operations using the JSON Placeholder API.",
            "code": `
      // item.service.ts
      import { Injectable } from '@angular/core';
      import { HttpClient } from '@angular/common/http';
      import { Observable } from 'rxjs';
      
      @Injectable({
        providedIn: 'root'
      })
      export class ItemService {
        private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // JSON Placeholder API URL
      
        constructor(private http: HttpClient) {}
      
        // CREATE: Add a new item
        addItem(item: any): Observable<any> {
          return this.http.post(this.apiUrl, item);
        }
      
        // READ: Get all items
        getItems(): Observable<any[]> {
          return this.http.get<any[]>(this.apiUrl);
        }
      
        // UPDATE: Update an existing item
        updateItem(item: any): Observable<any> {
          return this.http.put(\`\${this.apiUrl}/\${item.id}\`, item);
        }
      
        // DELETE: Remove an item
        deleteItem(id: number): Observable<any> {
          return this.http.delete(\`\${this.apiUrl}/\${id}\`);
        }
      }
            `
          },
          {
            "filename": "crud.component.ts",
            "title": "CRUD Component",
            "description": "This component provides the UI for CRUD operations and uses reactive forms for validation.",
            "code": `
      // crud.component.ts
      import { Component, OnInit } from '@angular/core';
      import { FormGroup, FormBuilder, Validators } from '@angular/forms';
      import { ItemService } from './item.service';
      
      @Component({
        selector: 'app-crud',
        templateUrl: './crud.component.html',
        styleUrls: ['./crud.component.css']
      })
      export class CrudComponent implements OnInit {
        itemForm: FormGroup; // FormGroup for the form
        items: any[] = []; // Array to hold items
        editMode = false; // Flag for edit mode
        currentItemId: number; // ID of the item currently being edited
      
        constructor(private formBuilder: FormBuilder, private itemService: ItemService) {
          this.initForm(); // Initialize the form
        }
      
        ngOnInit() {
          this.loadItems(); // Load items on component initialization
        }
      
        // Initialize the reactive form using FormBuilder
        initForm() {
          this.itemForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            age: ['', [Validators.required, Validators.min(1)]]
          });
        }
      
        // Load items from the service
        loadItems() {
          this.itemService.getItems().subscribe(data => {
            this.items = data; // Populate items with API data
          });
        }
      
        // Add a new item
        addItem() {
          if (this.itemForm.valid) {
            this.itemService.addItem(this.itemForm.value).subscribe(newItem => {
              this.items.push(newItem); // Add new item to the local array
              this.itemForm.reset(); // Reset the form
            });
          }
        }
      
        // Prepare to edit an item
        editItem(item: any) {
          this.editMode = true; // Set edit mode
          this.currentItemId = item.id; // Set the ID of the item being edited
          this.itemForm.patchValue(item); // Populate form with item data
        }
      
        // Update an existing item
        updateItem() {
          if (this.itemForm.valid) {
            this.itemService.updateItem({ ...this.itemForm.value, id: this.currentItemId }).subscribe(updatedItem => {
              const index = this.items.findIndex(item => item.id === this.currentItemId);
              this.items[index] = updatedItem; // Update local array
              this.editMode = false; // Exit edit mode
              this.itemForm.reset(); // Reset the form
            });
          }
        }
      
        // Delete an item
        deleteItem(id: number) {
          this.itemService.deleteItem(id).subscribe(() => {
            this.items = this.items.filter(item => item.id !== id); // Remove item from local array
          });
        }
      }
            `
          },
          {
            "filename": "crud.component.html",
            "title": "CRUD Component Template",
            "description": "The HTML template for CRUD operations with reactive form validation.",
            "code": `
      <!-- crud.component.html -->
      <div>
        <form [formGroup]="itemForm" (ngSubmit)="editMode ? updateItem() : addItem()">
          <input formControlName="name" type="text" placeholder="Name" />
          <div *ngIf="itemForm.get('name').invalid && itemForm.get('name').touched">Name is required.</div>
      
          <input formControlName="email" type="email" placeholder="Email" />
          <div *ngIf="itemForm.get('email').invalid && itemForm.get('email').touched">Enter a valid email.</div>
      
          <input formControlName="age" type="number" placeholder="Age" />
          <div *ngIf="itemForm.get('age').invalid && itemForm.get('age').touched">Age is required and must be greater than 0.</div>
      
          <button type="submit" [disabled]="itemForm.invalid">{{ editMode ? 'Update' : 'Add' }}</button>
        </form>
      
        <ul>
          <li *ngFor="let item of items">
            {{ item.name }} - {{ item.email }} - {{ item.age }}
            <button (click)="editItem(item)">Edit</button>
            <button (click)="deleteItem(item.id)">Delete</button>
          </li>
        </ul>
      </div>
            `
          },
          {
            "filename": "app-routing.module.ts",
            "title": "App Routing Module",
            "description": "The routing module for navigating to the CRUD component.",
            "code": `
      // app-routing.module.ts
      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      import { CrudComponent } from './crud/crud.component';
      
      const routes: Routes = [
        { path: 'crud', component: CrudComponent },
        { path: '', redirectTo: '/crud', pathMatch: 'full' } // Redirect to CRUD component on load
      ];
      
      @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
      })
      export class AppRoutingModule { }
            `
          },
          {
            "filename": "app.module.ts",
            "title": "App Module",
            "description": "Main module of the Angular application with necessary imports.",
            "code": `
      // app.module.ts
      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      import { ReactiveFormsModule } from '@angular/forms';
      import { HttpClientModule } from '@angular/common/http';
      import { AppRoutingModule } from './app-routing.module';
      import { AppComponent } from './app.component';
      import { CrudComponent } from './crud/crud.component';
      import { ItemService } from './crud/item.service';
      
      @NgModule({
        declarations: [
          AppComponent,
          CrudComponent // Declare CRUD component
        ],
        imports: [
          BrowserModule,
          ReactiveFormsModule,
          HttpClientModule,
          AppRoutingModule // Import routing module
        ],
        providers: [ItemService], // Provide the ItemService
        bootstrap: [AppComponent]
      })
      export class AppModule { }
            `
          },
          {
            "filename": "app.component.html",
            "title": "App Component Template",
            "description": "Main application template with navigation links.",
            "code": `
      <!-- app.component.html -->
      <nav>
        <a routerLink="/crud">CRUD Operations</a>
      </nav>
      <router-outlet></router-outlet> <!-- This will render the routed components -->
            `
          }
        ]
      },
      {
        "title": "Angular AuthGuard Types and Examples",
        "description": "This example demonstrates various types of AuthGuard implementations in Angular to protect routes from unauthorized access, including methods for activating and deactivating routes.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "auth.guard.ts",
            "title": "Basic AuthGuard",
            "description": "This AuthGuard checks if a user is authenticated before allowing access to a route.",
            "code": `
      // auth.guard.ts
      import { Injectable } from '@angular/core';
      import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
      import { AuthService } from './auth.service'; // Assume AuthService is implemented
      
      @Injectable({
        providedIn: 'root'
      })
      export class AuthGuard implements CanActivate {
        constructor(private authService: AuthService, private router: Router) {}
      
        canActivate(
          next: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): boolean {
          const isAuthenticated = this.authService.isAuthenticated(); // Check authentication status
          if (!isAuthenticated) {
            this.router.navigate(['/login']); // Redirect to login if not authenticated
            return false;
          }
          return true; // Allow access if authenticated
        }
      }
      `
          },
          {
            "filename": "auth-child.guard.ts",
            "title": "CanActivateChild AuthGuard",
            "description": "This AuthGuard checks if a user is authenticated before allowing access to child routes.",
            "code": `
      // auth-child.guard.ts
      import { Injectable } from '@angular/core';
      import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
      import { AuthService } from './auth.service';
      
      @Injectable({
        providedIn: 'root'
      })
      export class AuthChildGuard implements CanActivateChild {
        constructor(private authService: AuthService, private router: Router) {}
      
        canActivateChild(
          childRoute: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): boolean {
          const isAuthenticated = this.authService.isAuthenticated(); // Check authentication status
          if (!isAuthenticated) {
            this.router.navigate(['/login']); // Redirect to login if not authenticated
            return false;
          }
          return true; // Allow access if authenticated
        }
      }
      `
          },
          {
            "filename": "can-deactivate.guard.ts",
            "title": "CanDeactivate AuthGuard",
            "description": "This AuthGuard checks if a user can leave a route, typically used for forms to prevent unsaved changes.",
            "code": `
      // can-deactivate.guard.ts
      import { Injectable } from '@angular/core';
      import { CanDeactivate } from '@angular/router';
      
      // Define an interface for components that can be deactivated
      export interface CanComponentDeactivate {
        canDeactivate: () => boolean; // Method to check if deactivation is allowed
      }
      
      @Injectable({
        providedIn: 'root'
      })
      export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
        canDeactivate(
          component: CanComponentDeactivate
        ): boolean {
          return component.canDeactivate ? component.canDeactivate() : true; // Call canDeactivate method if it exists
        }
      }
      `
          },
          {
            "filename": "can-load.guard.ts",
            "title": "CanLoad AuthGuard",
            "description": "This AuthGuard prevents a user from loading a module lazily unless they meet certain conditions.",
            "code": `
      // can-load.guard.ts
      import { Injectable } from '@angular/core';
      import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
      import { AuthService } from './auth.service';
      
      @Injectable({
        providedIn: 'root'
      })
      export class CanLoadGuard implements CanLoad {
        constructor(private authService: AuthService, private router: Router) {}
      
        canLoad(
          route: Route,
          segments: UrlSegment[]): boolean {
          const isAuthenticated = this.authService.isAuthenticated(); // Check authentication status
          if (!isAuthenticated) {
            this.router.navigate(['/login']); // Redirect to login if not authenticated
            return false;
          }
          return true; // Allow loading if authenticated
        }
      }
      `
          },
          {
            "filename": "app-routing.module.ts",
            "title": "App Routing Module with Guards",
            "description": "This module defines routes and applies AuthGuard, AuthChildGuard, CanDeactivateGuard, and CanLoadGuard to protected routes.",
            "code": `
      // app-routing.module.ts
      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      import { HomeComponent } from './home/home.component';
      import { LoginComponent } from './login/login.component';
      import { ProtectedComponent } from './protected/protected.component';
      import { UnauthorizedComponent } from './unauthorized/unauthorized.component'; // Assume this component exists
      import { AuthGuard } from './auth.guard';
      import { AuthChildGuard } from './auth-child.guard';
      import { CanDeactivateGuard } from './can-deactivate.guard';
      import { CanLoadGuard } from './can-load.guard';
      
      const routes: Routes = [
        { path: '', component: HomeComponent },
        { path: 'login', component: LoginComponent },
        { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] }, // Protecting the route with AuthGuard
        { path: 'child-protected', component: ChildComponent, canActivateChild: [AuthChildGuard] }, // Protecting child route with AuthChildGuard
        { path: 'form', component: FormComponent, canDeactivate: [CanDeactivateGuard] }, // Protecting form route with CanDeactivateGuard
        { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule), canLoad: [CanLoadGuard] } // Protecting lazy-loaded module
      ];
      
      @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
      })
      export class AppRoutingModule {}
      `
          },
          {
            "filename": "auth.service.ts",
            "title": "AuthService",
            "description": "This service manages user authentication status and roles.",
            "code": `
      // auth.service.ts
      import { Injectable } from '@angular/core';
      
      @Injectable({
        providedIn: 'root'
      })
      export class AuthService {
        private authenticated: boolean = false; // Default authentication status
        private role: string = ''; // Default role
      
        // Simulate login method
        login(role: string) {
          this.authenticated = true; // Set authenticated status to true
          this.role = role; // Set user role
        }
      
        // Simulate logout method
        logout() {
          this.authenticated = false; // Set authenticated status to false
          this.role = ''; // Clear user role
        }
      
        // Check if user is authenticated
        isAuthenticated(): boolean {
          return this.authenticated;
        }
      
        // Get user role
        getUserRole(): string {
          return this.role;
        }
      }
      `
          },
          {
            "filename": "login.component.ts",
            "title": "Login Component",
            "description": "This component allows users to log in and access protected routes based on roles.",
            "code": `
      // login.component.ts
      import { Component } from '@angular/core';
      import { AuthService } from '../auth.service';
      import { Router } from '@angular/router';
      
      @Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'
      })
      export class LoginComponent {
        constructor(private authService: AuthService, private router: Router) {}
      
        // Method to log in as admin
        loginAsAdmin() {
          this.authService.login('admin'); // Set role as admin
          this.router.navigate(['/admin']); // Redirect to admin route
        }
      
        // Method to log in as user
        loginAsUser() {
          this.authService.login('user'); // Set role as user
          this.router.navigate(['/protected']); // Redirect to protected route
        }
      }
      `
          },
          {
            "filename": "login.component.html",
            "title": "Login Component Template",
            "description": "The HTML template for the login component, offering options for admin and user login.",
            "code": `
      <!-- login.component.html -->
      <div>
        <h2>Login</h2>
        <button (click)="loginAsAdmin()">Login as Admin</button>
        <button (click)="loginAsUser()">Login as User</button>
      </div>
      `
          },
          {
            "filename": "unauthorized.component.ts",
            "title": "Unauthorized Component",
            "description": "This component displays an unauthorized access message.",
            "code": `
      // unauthorized.component.ts
      import { Component } from '@angular/core';
      
      @Component({
        selector: 'app-unauthorized',
        templateUrl: './unauthorized.component.html',
        styleUrls: ['./unauthorized.component.css'
      })
      export class UnauthorizedComponent {}
      `
          },
          {
            "filename": "unauthorized.component.html",
            "title": "Unauthorized Component Template",
            "description": "The HTML template for the unauthorized component.",
            "code": `
      <!-- unauthorized.component.html -->
      <div>
        <h2>Unauthorized Access</h2>
        <p>You do not have permission to view this page.</p>
      </div>
      `
          },
          {
            "filename": "form.component.ts",
            "title": "Form Component",
            "description": "This component represents a form that can prompt the user to confirm before leaving.",
            "code": `
      // form.component.ts
      import { Component } from '@angular/core';
      
      @Component({
        selector: 'app-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.css'
      })
      export class FormComponent implements CanComponentDeactivate {
        private formDirty: boolean = true; // Track if the form has unsaved changes
      
        canDeactivate(): boolean {
          return confirm('You have unsaved changes. Do you really want to leave?'); // Prompt for confirmation
        }
      }
      `
          },
          {
            "filename": "form.component.html",
            "title": "Form Component Template",
            "description": "The HTML template for the form component.",
            "code": `
      <!-- form.component.html -->
      <div>
        <h2>Form</h2>
        <form>
          <!-- Form elements go here -->
          <input type="text" placeholder="Enter something...">
        </form>
      </div>
      `
          },
          {
            "filename": "child.component.ts",
            "title": "Child Component",
            "description": "This component is a child route example, protected by AuthChildGuard.",
            "code": `
      // child.component.ts
      import { Component } from '@angular/core';
      
      @Component({
        selector: 'app-child',
        templateUrl: './child.component.html',
        styleUrls: ['./child.component.css'
      })
      export class ChildComponent {}
      `
          },
          {
            "filename": "child.component.html",
            "title": "Child Component Template",
            "description": "The HTML template for the child component.",
            "code": `
      <!-- child.component.html -->
      <div>
        <h2>Child Protected Route</h2>
        <p>This route is protected by AuthChildGuard.</p>
      </div>
      `
          }
        ]
      },
      {
        "title": "Simple Angular HTTP Interceptors with Examples",
        "description": "This example demonstrates the basics of HTTP interceptors in Angular, showing how to modify requests and handle responses easily.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "auth.interceptor.ts",
            "title": "Auth Interceptor",
            "description": "Adds an Authorization header to HTTP requests.",
            "code": `
      // auth.interceptor.ts
      import { Injectable } from '@angular/core';
      import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
      import { Observable } from 'rxjs';
      
      @Injectable()
      export class AuthInterceptor implements HttpInterceptor {
        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          const token = 'your-auth-token'; // Replace with your token logic
          if (token) {
            request = request.clone({
              setHeaders: { Authorization: \`Bearer \${token}\` }
            });
          }
          return next.handle(request); // Send the modified request
        }
      }
      `
          },
          {
            "filename": "error.interceptor.ts",
            "title": "Error Interceptor",
            "description": "Handles HTTP errors and logs them.",
            "code": `
      // error.interceptor.ts
      import { Injectable } from '@angular/core';
      import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
      import { Observable } from 'rxjs';
      import { catchError } from 'rxjs/operators';
      
      @Injectable()
      export class ErrorInterceptor implements HttpInterceptor {
        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          return next.handle(request).pipe(
            catchError(error => {
              console.error('HTTP error occurred:', error); // Log error
              throw error; // Rethrow the error
            })
          );
        }
      }
      `
          },
          {
            "filename": "app.module.ts",
            "title": "App Module with Interceptors",
            "description": "Registers the interceptors in the app module.",
            "code": `
      // app.module.ts
      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
      import { AppComponent } from './app.component';
      import { AuthInterceptor } from './auth.interceptor';
      import { ErrorInterceptor } from './error.interceptor';
      
      @NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule, HttpClientModule],
        providers: [
          { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
          { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
        ],
        bootstrap: [AppComponent]
      })
      export class AppModule {}
      `
          },
          {
            "filename": "app.component.ts",
            "title": "App Component",
            "description": "Basic app component for demonstration.",
            "code": `
      // app.component.ts
      import { Component } from '@angular/core';
      
      @Component({
        selector: 'app-root',
        template: '<h1>Angular Interceptors Example</h1>'
      })
      export class AppComponent {}
      `
          }
        ]
      },
      {
        "title": "Using ForkJoin in Angular with Services and JSONPlaceholder API",
        "description": "This example demonstrates how to use ForkJoin in Angular with services to fetch data from multiple endpoints. It shows how to organize your code for better separation of concerns by using a service to handle HTTP requests.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "data.service.ts",
            "title": "Data Service",
            "description": "A service to handle HTTP requests for fetching users and posts from JSONPlaceholder.",
            "code": `
      // data.service.ts
      import { Injectable } from '@angular/core';
      import { HttpClient } from '@angular/common/http';
      import { forkJoin, of } from 'rxjs';
      import { catchError, map } from 'rxjs/operators';
      
      @Injectable({
        providedIn: 'root'
      })
      export class DataService {
        private usersUrl = 'https://jsonplaceholder.typicode.com/users';
        private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
      
        constructor(private http: HttpClient) {}
      
        // Method to fetch users and posts using ForkJoin
        getUsersAndPosts() {
          const usersRequest = this.http.get(this.usersUrl).pipe(
            map(data => ({ isError: false, data })),
            catchError(() => of({ isError: true, data: [] })) // Return standardized error response
          );
      
          const postsRequest = this.http.get(this.postsUrl).pipe(
            map(data => ({ isError: false, data })),
            catchError(() => of({ isError: true, data: [] })) // Return standardized error response
          );
      
          return forkJoin([usersRequest, postsRequest]);
        }
      }
      `
          },
          {
            "filename": "app.component.ts",
            "title": "App Component",
            "description": "The main component that uses the DataService to fetch data with ForkJoin.",
            "code": `
      // app.component.ts
      import { Component, OnInit } from '@angular/core';
      import { DataService } from './data.service';
      
      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
      })
      export class AppComponent implements OnInit {
        users: any[] = [];
        posts: any[] = [];
        userError: boolean = false;
        postError: boolean = false;
      
        constructor(private dataService: DataService) {}
      
        ngOnInit() {
          this.fetchData();
        }
      
        fetchData() {
          this.dataService.getUsersAndPosts().subscribe(
            ([usersResponse, postsResponse]) => {
              if (usersResponse.isError) {
                this.userError = true; // Handle user error
                this.users = []; // Clear users
              } else {
                this.users = usersResponse.data; // Assign users data
              }
      
              if (postsResponse.isError) {
                this.postError = true; // Handle post error
                this.posts = []; // Clear posts
              } else {
                this.posts = postsResponse.data; // Assign posts data
              }
            },
            error => {
              console.error('Error fetching data:', error);
            }
          );
        }
      }
      `
          },
          {
            "filename": "app.component.html",
            "title": "App Component Template",
            "description": "The HTML template for displaying the fetched users and posts.",
            "code": `<!-- app.component.html -->
      <div>
        <h1>Users</h1>
        <ul *ngIf="!userError; else userErrorTemplate">
          <li *ngFor="let user of users">
            {{ user.name }} ({{ user.email }})
          </li>
        </ul>
        <ng-template #userErrorTemplate>
          <p>Error fetching users!</p>
        </ng-template>
      
        <h1>Posts</h1>
        <ul *ngIf="!postError; else postErrorTemplate">
          <li *ngFor="let post of posts">
            <strong>{{ post.title }}</strong>: {{ post.body }}
          </li>
        </ul>
        <ng-template #postErrorTemplate>
          <p>Error fetching posts!</p>
        </ng-template>
      </div>
      `
          },
          {
            "filename": "app.module.ts",
            "title": "App Module",
            "description": "The main module that imports necessary modules and declares the AppComponent and DataService.",
            "code": `
      // app.module.ts
      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      import { HttpClientModule } from '@angular/common/http';
      import { AppComponent } from './app.component';
      import { DataService } from './data.service';
      
      @NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule, HttpClientModule],
        providers: [DataService],
        bootstrap: [AppComponent]
      })
      export class AppModule {}
      `
          },
          {
            "filename": "app.component.css",
            "title": "App Component Styles",
            "description": "Basic styles for the AppComponent.",
            "code": `/* app.component.css */
      h1 {
        color: #4a4a4a;
      }
      
      ul {
        list-style-type: none;
        padding: 0;
      }
      
      li {
        margin: 5px 0;
      }
      `
          }
        ]
      }
      ,
      {
        "title": "Using ForkJoin in Angular with JSONPlaceholder API",
        "description": "This example demonstrates how to use ForkJoin to make multiple HTTP requests in Angular. It shows how to retrieve data from the JSONPlaceholder API by combining multiple requests and handling the results effectively.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "app.component.ts",
            "title": "App Component",
            "description": "The main component that utilizes ForkJoin to fetch data from multiple endpoints.",
            "code": `
      // app.component.ts
      import { Component, OnInit } from '@angular/core';
      import { HttpClient } from '@angular/common/http';
      import { forkJoin, of } from 'rxjs';
      import { catchError, map } from 'rxjs/operators';
      
      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
      })
      export class AppComponent implements OnInit {
        users: any[] = [];
        posts: any[] = [];
        userError: boolean = false;
        postError: boolean = false;
      
        constructor(private http: HttpClient) {}
      
        ngOnInit() {
          this.fetchData();
        }
      
        fetchData() {
          const usersRequest = this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
            map(data => ({ isError: false, data })),
            catchError(() => of({ isError: true, data: [] })) // Return standardized error response
          );
      
          const postsRequest = this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
            map(data => ({ isError: false, data })),
            catchError(() => of({ isError: true, data: [] })) // Return standardized error response
          );
      
          forkJoin([usersRequest, postsRequest]).subscribe(
            ([usersResponse, postsResponse]) => {
              if (usersResponse.isError) {
                this.userError = true; // Handle user error
                this.users = []; // Clear users
              } else {
                this.users = usersResponse.data; // Assign users data
              }
      
              if (postsResponse.isError) {
                this.postError = true; // Handle post error
                this.posts = []; // Clear posts
              } else {
                this.posts = postsResponse.data; // Assign posts data
              }
            },
            error => {
              console.error('Error fetching data:', error);
            }
          );
        }
      }
      `
          },
          {
            "filename": "app.component.html",
            "title": "App Component Template",
            "description": "The HTML template for displaying the fetched users and posts.",
            "code": `<!-- app.component.html -->
      <div>
        <h1>Users</h1>
        <ul *ngIf="!userError; else userErrorTemplate">
          <li *ngFor="let user of users">
            {{ user.name }} ({{ user.email }})
          </li>
        </ul>
        <ng-template #userErrorTemplate>
          <p>Error fetching users!</p>
        </ng-template>
      
        <h1>Posts</h1>
        <ul *ngIf="!postError; else postErrorTemplate">
          <li *ngFor="let post of posts">
            <strong>{{ post.title }}</strong>: {{ post.body }}
          </li>
        </ul>
        <ng-template #postErrorTemplate>
          <p>Error fetching posts!</p>
        </ng-template>
      </div>
      `
          },
          {
            "filename": "app.module.ts",
            "title": "App Module",
            "description": "The main module that imports necessary modules and declares the AppComponent.",
            "code": `
      // app.module.ts
      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      import { HttpClientModule } from '@angular/common/http';
      import { AppComponent } from './app.component';
      
      @NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule, HttpClientModule],
        providers: [],
        bootstrap: [AppComponent]
      })
      export class AppModule {}
      `
          },
          {
            "filename": "app.component.css",
            "title": "App Component Styles",
            "description": "Basic styles for the AppComponent.",
            "code": `/* app.component.css */
      h1 {
        color: #4a4a4a;
      }
      
      ul {
        list-style-type: none;
        padding: 0;
      }
      
      li {
        margin: 5px 0;
      }
      `
          }
        ]
      },
      {
        "title": "Using CombineLatest in Angular with Services and JSONPlaceholder API",
        "description": "This example demonstrates how to use CombineLatest in Angular with services to fetch data from multiple endpoints. The CombineLatest operator allows you to subscribe to multiple observables and receive the latest values from each whenever any observable emits a new value. It is useful when you need to combine multiple data sources that may change independently.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "data.service.ts",
            "title": "Data Service",
            "description": "A service to handle HTTP requests for fetching users and posts from JSONPlaceholder.",
            "code": `
            // data.service.ts
            import { Injectable } from '@angular/core';
            import { HttpClient } from '@angular/common/http';
            import { combineLatest } from 'rxjs';
            
            @Injectable({
              providedIn: 'root'
            })
            export class DataService {
              private usersUrl = 'https://jsonplaceholder.typicode.com/users';
              private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
            
              constructor(private http: HttpClient) {}
            
              // Method to fetch users and posts using CombineLatest
              getUsersAndPosts() {
                const usersRequest = this.http.get(this.usersUrl);
                const postsRequest = this.http.get(this.postsUrl);
            
                return combineLatest([usersRequest, postsRequest]);
              }
            }
            `
          },
          {
            "filename": "app.component.ts",
            "title": "App Component",
            "description": "The main component that uses the DataService to fetch data with CombineLatest.",
            "code": `
            // app.component.ts
            import { Component, OnInit } from '@angular/core';
            import { DataService } from './data.service';
            
            @Component({
              selector: 'app-root',
              templateUrl: './app.component.html',
              styleUrls: ['./app.component.css']
            })
            export class AppComponent implements OnInit {
              users: any[] = [];
              posts: any[] = [];
              isError: boolean = false;
            
              constructor(private dataService: DataService) {}
            
              ngOnInit() {
                this.fetchData();
              }
            
              fetchData() {
                this.dataService.getUsersAndPosts().subscribe(
                  ([users, posts]) => {
                    this.users = users;
                    this.posts = posts;
                    this.isError = false; // Reset error status on success
                  },
                  error => {
                    console.error('Error fetching data:', error);
                    this.isError = true; // Set error status on failure
                    this.users = []; // Reset users
                    this.posts = []; // Reset posts
                  }
                );
              }
            }
            `
          },
          {
            "filename": "app.component.html",
            "title": "App Component Template",
            "description": "The HTML template for displaying the fetched users and posts.",
            "code": `<!-- app.component.html -->
            <div>
              <h1 *ngIf="!isError">Users</h1>
              <ul *ngIf="!isError">
                <li *ngFor="let user of users">
                  {{ user.name }} ({{ user.email }})
                </li>
              </ul>
              
              <h1 *ngIf="!isError">Posts</h1>
              <ul *ngIf="!isError">
                <li *ngFor="let post of posts">
                  <strong>{{ post.title }}</strong>: {{ post.body }}
                </li>
              </ul>
      
              <p *ngIf="isError" style="color: red;">Error fetching data. Please try again later.</p>
            </div>
            `
          },
          {
            "filename": "app.module.ts",
            "title": "App Module",
            "description": "The main module that imports necessary modules and declares the AppComponent and DataService.",
            "code": `
            // app.module.ts
            import { NgModule } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';
            import { HttpClientModule } from '@angular/common/http';
            import { AppComponent } from './app.component';
            import { DataService } from './data.service';
            
            @NgModule({
              declarations: [AppComponent],
              imports: [BrowserModule, HttpClientModule],
              providers: [DataService],
              bootstrap: [AppComponent]
            })
            export class AppModule {}
            `
          },
          {
            "filename": "app.component.css",
            "title": "App Component Styles",
            "description": "Basic styles for the AppComponent.",
            "code": `/* app.component.css */
            h1 {
              color: #4a4a4a;
            }
            
            ul {
              list-style-type: none;
              padding: 0;
            }
            
            li {
              margin: 5px 0;
            }
            `
          }
        ]
      },
      {
        "title": "Using CombineLatest in Angular without Services and JSONPlaceholder API",
        "description": "This example demonstrates how to use CombineLatest in an Angular component to fetch data from multiple endpoints without a dedicated service. Each API call is tracked with individual flags for error handling, allowing precise identification of any failed requests.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "app.component.ts",
            "title": "App Component",
            "description": "The main component that uses HttpClient to fetch data with CombineLatest.",
            "code": `
            // app.component.ts
            import { Component, OnInit } from '@angular/core';
            import { HttpClient } from '@angular/common/http';
            import { combineLatest, of } from 'rxjs';
            import { catchError } from 'rxjs/operators';
      
            @Component({
              selector: 'app-root',
              templateUrl: './app.component.html',
              styleUrls: ['./app.component.css']
            })
            export class AppComponent implements OnInit {
              users: any[] = [];
              posts: any[] = [];
              errorInfo: {
                isError: boolean;
                usersError: boolean;
                postsError: boolean;
                data: { users?: string; posts?: string };
              } = {
                isError: false,
                usersError: false,
                postsError: false,
                data: {}
              };
      
              constructor(private http: HttpClient) {}
      
              ngOnInit() {
                this.fetchData();
              }
      
              fetchData() {
                const usersRequest = this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
                  catchError(error => {
                    console.error('Error fetching users:', error);
                    this.errorInfo.usersError = true; // Set error flag for users
                    this.errorInfo.data.users = 'Failed to fetch users'; // Indicate the specific API that failed
                    return of([]); // Return an empty array on error
                  })
                );
      
                const postsRequest = this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
                  catchError(error => {
                    console.error('Error fetching posts:', error);
                    this.errorInfo.postsError = true; // Set error flag for posts
                    this.errorInfo.data.posts = 'Failed to fetch posts'; // Indicate the specific API that failed
                    return of([]); // Return an empty array on error
                  })
                );
      
                combineLatest([usersRequest, postsRequest]).subscribe(
                  ([users, posts]) => {
                    this.users = users;
                    this.posts = posts;
                    this.errorInfo.isError = this.errorInfo.usersError || this.errorInfo.postsError; // Set overall error status based on individual errors
                  },
                  error => {
                    console.error('Error combining data:', error);
                    this.errorInfo.isError = true; // Set error status for combining
                  }
                );
              }
            }
            `
          },
          {
            "filename": "app.component.html",
            "title": "App Component Template",
            "description": "The HTML template for displaying the fetched users and posts.",
            "code": `<!-- app.component.html -->
            <div>
              <h1 *ngIf="!errorInfo.isError">Users</h1>
              <ul *ngIf="!errorInfo.isError">
                <li *ngFor="let user of users">
                  {{ user.name }} ({{ user.email }})
                </li>
              </ul>
      
              <h1 *ngIf="!errorInfo.isError">Posts</h1>
              <ul *ngIf="!errorInfo.isError">
                <li *ngFor="let post of posts">
                  <strong>{{ post.title }}</strong>: {{ post.body }}
                </li>
              </ul>
      
              <div *ngIf="errorInfo.isError" style="color: red;">
                <p *ngIf="errorInfo.data.users">{{ errorInfo.data.users }}</p>
                <p *ngIf="errorInfo.data.posts">{{ errorInfo.data.posts }}</p>
                <p>Error fetching data. Please try again later.</p>
              </div>
            </div>
            `
          },
          {
            "filename": "app.module.ts",
            "title": "App Module",
            "description": "The main module that imports necessary modules and declares the AppComponent.",
            "code": `
            // app.module.ts
            import { NgModule } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';
            import { HttpClientModule } from '@angular/common/http';
            import { AppComponent } from './app.component';
      
            @NgModule({
              declarations: [AppComponent],
              imports: [BrowserModule, HttpClientModule],
              bootstrap: [AppComponent]
            })
            export class AppModule {}
            `
          },
          {
            "filename": "app.component.css",
            "title": "App Component Styles",
            "description": "Basic styles for the AppComponent.",
            "code": `/* app.component.css */
            h1 {
              color: #4a4a4a;
            }
      
            ul {
              list-style-type: none;
              padding: 0;
            }
      
            li {
              margin: 5px 0;
            }
            `
          }
        ]
      },
      {
        "title": "Three Methods of Injecting Services in Angular",
        "description": "This example explores three methods for injecting services in Angular: Root Level Injection, Component Level Injection, and Module Level Injection. Each method serves different use cases and impacts the scope and lifetime of the service differently.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "app.component.ts",
            "title": "App Component using Root Level Injection",
            "description": "In this example, the DataService is provided at the root level, making it a singleton throughout the application. It can be injected into any component or service without needing to declare it in the providers array of those components.",
            "code": `
            // app.component.ts
            import { Component, OnInit } from '@angular/core';
            import { DataService } from './data.service';
      
            @Component({
              selector: 'app-root',
              templateUrl: './app.component.html',
              styleUrls: ['./app.component.css']
            })
            export class AppComponent implements OnInit {
              data: any;
      
              constructor(private dataService: DataService) {}
      
              ngOnInit() {
                this.data = this.dataService.getData();
              }
            }
            `
          },
          {
            "filename": "app.component.ts",
            "title": "App Component using Component Level Injection",
            "description": "In this example, the DataService is declared in the providers array of the AppComponent. This means a new instance of DataService is created for every instance of AppComponent, making it suitable for component-specific data management.",
            "code": `
            // app.component.ts
            import { Component, OnInit } from '@angular/core';
            import { DataService } from './data.service';
      
            @Component({
              selector: 'app-root',
              templateUrl: './app.component.html',
              styleUrls: ['./app.component.css'],
              providers: [DataService] // Component level injection
            })
            export class AppComponent implements OnInit {
              data: any;
      
              constructor(private dataService: DataService) {}
      
              ngOnInit() {
                this.data = this.dataService.getData();
              }
            }
            `
          },
          {
            "filename": "app.module.ts",
            "title": "App Module using Module Level Injection",
            "description": "In this example, the DataService is provided in the providers array of the AppModule. This approach makes the service available to all components within that module. It is useful for services that should be shared across multiple components in a specific module.",
            "code": `
            // app.module.ts
            import { NgModule } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';
            import { AppComponent } from './app.component';
            import { DataService } from './data.service';
      
            @NgModule({
              declarations: [AppComponent],
              imports: [BrowserModule],
              providers: [DataService], // Module level injection
              bootstrap: [AppComponent]
            })
            export class AppModule {}
            `
          },
          {
            "filename": "data.service.ts",
            "title": "Data Service",
            "description": "A simple service that provides some data for demonstration purposes. This service can be injected using any of the above methods depending on the required scope.",
            "code": `
            // data.service.ts
            import { Injectable } from '@angular/core';
      
            @Injectable({
              providedIn: 'root' // This ensures the service is a singleton
            })
            export class DataService {
              getData() {
                return 'Hello from DataService!';
              }
            }
            `
          }
        ]
      },
      {
        "title": "Checkbox Examples in Angular with ngModel",
        "description": "This document presents several checkbox examples in Angular using ngModel for two-way binding, showcasing various functionalities including standard checkbox usage, select all, select all with disabled, and managing maximum selections.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "checkbox-basic.component.ts",
            "title": "Basic Checkbox Example",
            "description": "This example demonstrates the basic usage of checkboxes in Angular without a select all option.",
            "code": `
            // checkbox-basic.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-checkbox-basic',
              templateUrl: './checkbox-basic.component.html',
              styleUrls: ['./checkbox-basic.component.css']
            })
            export class CheckboxBasicComponent {
              options = [
                { label: 'Option 1', isChecked: false },
                { label: 'Option 2', isChecked: false },
                { label: 'Option 3', isChecked: false }
              ];
            }
            `
          },
          {
            "filename": "checkbox-basic.component.html",
            "title": "Basic Checkbox Template",
            "description": "The HTML template for the basic checkbox example using ngModel for two-way binding.",
            "code": `
            <!-- checkbox-basic.component.html -->
            <div>
              <h2>Basic Checkbox Example</h2>
              <div *ngFor="let option of options">
                <input type="checkbox" [(ngModel)]="option.isChecked">
                {{ option.label }}
              </div>
            </div>
            `
          },
          {
            "filename": "checkbox-select-all.component.ts",
            "title": "Checkbox with Select All",
            "description": "This example includes a select all checkbox that can check or uncheck all individual checkboxes using ngModel.",
            "code": `
            // checkbox-select-all.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-checkbox-select-all',
              templateUrl: './checkbox-select-all.component.html',
              styleUrls: ['./checkbox-select-all.component.css']
            })
            export class CheckboxSelectAllComponent {
              options = [
                { label: 'Option 1', isChecked: false },
                { label: 'Option 2', isChecked: false },
                { label: 'Option 3', isChecked: false }
              ];
      
              selectAll = false;
      
              toggleSelectAll() {
                this.selectAll = !this.selectAll;
                this.options.forEach(option => option.isChecked = this.selectAll);
              }
            }
            `
          },
          {
            "filename": "checkbox-select-all.component.html",
            "title": "Checkbox with Select All Template",
            "description": "The HTML template for the checkbox with select all functionality using ngModel.",
            "code": `
            <!-- checkbox-select-all.component.html -->
            <div>
              <h2>Checkbox with Select All</h2>
              <label>
                <input type="checkbox" [(ngModel)]="selectAll" (change)="toggleSelectAll()">
                Select All
              </label>
              <div *ngFor="let option of options">
                <input type="checkbox" [(ngModel)]="option.isChecked">
                {{ option.label }}
              </div>
            </div>
            `
          },
          {
            "filename": "checkbox-select-all-disabled.component.ts",
            "title": "Checkbox with Select All and Disabled Options",
            "description": "This example demonstrates a select all checkbox with individual options that can be disabled using ngModel.",
            "code": `
            // checkbox-select-all-disabled.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-checkbox-select-all-disabled',
              templateUrl: './checkbox-select-all-disabled.component.html',
              styleUrls: ['./checkbox-select-all-disabled.component.css']
            })
            export class CheckboxSelectAllDisabledComponent {
              options = [
                { label: 'Option 1', isChecked: false, isDisabled: false },
                { label: 'Option 2', isChecked: false, isDisabled: true },
                { label: 'Option 3', isChecked: false, isDisabled: false }
              ];
      
              selectAll = false;
      
              toggleSelectAll() {
                this.selectAll = !this.selectAll;
                this.options.forEach(option => {
                  if (!option.isDisabled) {
                    option.isChecked = this.selectAll;
                  }
                });
              }
            }
            `
          },
          {
            "filename": "checkbox-select-all-disabled.component.html",
            "title": "Checkbox with Select All and Disabled Template",
            "description": "The HTML template for the checkbox with select all functionality and disabled options using ngModel.",
            "code": `
            <!-- checkbox-select-all-disabled.component.html -->
            <div>
              <h2>Checkbox with Select All and Disabled Options</h2>
              <label>
                <input type="checkbox" [(ngModel)]="selectAll" (change)="toggleSelectAll()">
                Select All
              </label>
              <div *ngFor="let option of options">
                <input type="checkbox" [(ngModel)]="option.isChecked" [disabled]="option.isDisabled">
                {{ option.label }}
              </div>
            </div>
            `
          },
          {
            "filename": "checkbox-max-selection.component.ts",
            "title": "Checkbox with Maximum Selection",
            "description": "This example limits the maximum number of checkboxes that can be selected to three using ngModel.",
            "code": `
            // checkbox-max-selection.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-checkbox-max-selection',
              templateUrl: './checkbox-max-selection.component.html',
              styleUrls: ['./checkbox-max-selection.component.css']
            })
            export class CheckboxMaxSelectionComponent {
              options = [
                { label: 'Option 1', isChecked: false },
                { label: 'Option 2', isChecked: false },
                { label: 'Option 3', isChecked: false },
                { label: 'Option 4', isChecked: false },
                { label: 'Option 5', isChecked: false }
              ];
      
              maxSelection = 3;
      
              toggleCheckbox(option: any) {
                const checkedCount = this.options.filter(o => o.isChecked).length;
      
                if (option.isChecked && checkedCount >= this.maxSelection) {
                  option.isChecked = false; // Prevent checking if maximum is reached
                }
              }
            }
            `
          },
          {
            "filename": "checkbox-max-selection.component.html",
            "title": "Checkbox with Maximum Selection Template",
            "description": "The HTML template for the checkbox with a maximum selection limit using ngModel.",
            "code": `
            <!-- checkbox-max-selection.component.html -->
            <div>
              <h2>Checkbox with Maximum Selection</h2>
              <div *ngFor="let option of options">
                <input type="checkbox" [(ngModel)]="option.isChecked" (change)="toggleCheckbox(option)">
                {{ option.label }}
              </div>
              <p *ngIf="options.filter(o => o.isChecked).length >= maxSelection">Maximum of {{ maxSelection }} selections allowed.</p>
            </div>
            `
          }
        ]
      },      
      {
        "title": "Checkbox Examples in Angular",
        "description": "This document presents several checkbox examples in Angular, showcasing various functionalities including standard checkbox usage, select all, select all with disabled, and managing maximum selections.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "checkbox-basic.component.ts",
            "title": "Basic Checkbox Example",
            "description": "This example demonstrates the basic usage of checkboxes in Angular without a select all option.",
            "code": `
            // checkbox-basic.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-checkbox-basic',
              templateUrl: './checkbox-basic.component.html',
              styleUrls: ['./checkbox-basic.component.css']
            })
            export class CheckboxBasicComponent {
              options = [
                { label: 'Option 1', isChecked: false },
                { label: 'Option 2', isChecked: false },
                { label: 'Option 3', isChecked: false }
              ];
      
              toggleCheckbox(option: any) {
                option.isChecked = !option.isChecked;
              }
            }
            `
          },
          {
            "filename": "checkbox-basic.component.html",
            "title": "Basic Checkbox Template",
            "description": "The HTML template for the basic checkbox example.",
            "code": `
            <!-- checkbox-basic.component.html -->
            <div>
              <h2>Basic Checkbox Example</h2>
              <div *ngFor="let option of options">
                <input type="checkbox" [checked]="option.isChecked" (change)="toggleCheckbox(option)">
                {{ option.label }}
              </div>
            </div>
            `
          },
          {
            "filename": "checkbox-select-all.component.ts",
            "title": "Checkbox with Select All",
            "description": "This example includes a select all checkbox that can check or uncheck all individual checkboxes.",
            "code": `
            // checkbox-select-all.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-checkbox-select-all',
              templateUrl: './checkbox-select-all.component.html',
              styleUrls: ['./checkbox-select-all.component.css']
            })
            export class CheckboxSelectAllComponent {
              options = [
                { label: 'Option 1', isChecked: false },
                { label: 'Option 2', isChecked: false },
                { label: 'Option 3', isChecked: false }
              ];
      
              selectAll = false;
      
              toggleSelectAll() {
                this.selectAll = !this.selectAll;
                this.options.forEach(option => option.isChecked = this.selectAll);
              }
            }
            `
          },
          {
            "filename": "checkbox-select-all.component.html",
            "title": "Checkbox with Select All Template",
            "description": "The HTML template for the checkbox with select all functionality.",
            "code": `
            <!-- checkbox-select-all.component.html -->
            <div>
              <h2>Checkbox with Select All</h2>
              <label>
                <input type="checkbox" [checked]="selectAll" (change)="toggleSelectAll()">
                Select All
              </label>
              <div *ngFor="let option of options">
                <input type="checkbox" [checked]="option.isChecked" (change)="option.isChecked = !option.isChecked">
                {{ option.label }}
              </div>
            </div>
            `
          },
          {
            "filename": "checkbox-select-all-disabled.component.ts",
            "title": "Checkbox with Select All and Disabled Options",
            "description": "This example demonstrates a select all checkbox with individual options that can be disabled.",
            "code": `
            // checkbox-select-all-disabled.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-checkbox-select-all-disabled',
              templateUrl: './checkbox-select-all-disabled.component.html',
              styleUrls: ['./checkbox-select-all-disabled.component.css']
            })
            export class CheckboxSelectAllDisabledComponent {
              options = [
                { label: 'Option 1', isChecked: false, isDisabled: false },
                { label: 'Option 2', isChecked: false, isDisabled: true },
                { label: 'Option 3', isChecked: false, isDisabled: false }
              ];
      
              selectAll = false;
      
              toggleSelectAll() {
                this.selectAll = !this.selectAll;
                this.options.forEach(option => {
                  if (!option.isDisabled) {
                    option.isChecked = this.selectAll;
                  }
                });
              }
            }
            `
          },
          {
            "filename": "checkbox-select-all-disabled.component.html",
            "title": "Checkbox with Select All and Disabled Template",
            "description": "The HTML template for the checkbox with select all functionality and disabled options.",
            "code": `
            <!-- checkbox-select-all-disabled.component.html -->
            <div>
              <h2>Checkbox with Select All and Disabled Options</h2>
              <label>
                <input type="checkbox" [checked]="selectAll" (change)="toggleSelectAll()">
                Select All
              </label>
              <div *ngFor="let option of options">
                <input type="checkbox" [checked]="option.isChecked" [disabled]="option.isDisabled" (change)="option.isChecked = !option.isChecked">
                {{ option.label }}
              </div>
            </div>
            `
          },
          {
            "filename": "checkbox-max-selection.component.ts",
            "title": "Checkbox with Maximum Selection",
            "description": "This example limits the maximum number of checkboxes that can be selected to three.",
            "code": `
            // checkbox-max-selection.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-checkbox-max-selection',
              templateUrl: './checkbox-max-selection.component.html',
              styleUrls: ['./checkbox-max-selection.component.css']
            })
            export class CheckboxMaxSelectionComponent {
              options = [
                { label: 'Option 1', isChecked: false },
                { label: 'Option 2', isChecked: false },
                { label: 'Option 3', isChecked: false },
                { label: 'Option 4', isChecked: false },
                { label: 'Option 5', isChecked: false }
              ];
      
              maxSelection = 3;
      
              toggleCheckbox(option: any) {
                const checkedCount = this.options.filter(o => o.isChecked).length;
      
                if (option.isChecked && checkedCount >= this.maxSelection) {
                  option.isChecked = false; // Prevent checking if maximum is reached
                } else {
                  option.isChecked = !option.isChecked;
                }
              }
            }
            `
          },
          {
            "filename": "checkbox-max-selection.component.html",
            "title": "Checkbox with Maximum Selection Template",
            "description": "The HTML template for the checkbox with a maximum selection limit.",
            "code": `
            <!-- checkbox-max-selection.component.html -->
            <div>
              <h2>Checkbox with Maximum Selection</h2>
              <div *ngFor="let option of options">
                <input type="checkbox" [checked]="option.isChecked" (change)="toggleCheckbox(option)">
                {{ option.label }}
              </div>
              <p *ngIf="options.filter(o => o.isChecked).length >= maxSelection">Maximum of {{ maxSelection }} selections allowed.</p>
            </div>
            `
          }
        ]
      },
      {
        "title": "Parent-Child-Grandchild Checkbox Structure with ngModel, Partial Check, and isPartial Flag in Angular",
        "description": "This example demonstrates how to create a parent component with child checkboxes, including nested checkboxes for grandchild items. The parent checkbox is checked if all children are checked, partially checked if any child is checked, and uses ngModel.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "parent-checkbox.component.ts",
            "title": "ParentCheckboxComponent",
            "description": "The parent component that manages the state of child and grandchild checkboxes, including isPartial flag.",
            "code": `
      import { Component } from '@angular/core';
      
      interface Child {
        id: number;
        name: string;
        isChecked: boolean;
        isPartial?: boolean; // Optional flag for partial selection
        childrens?: Child[]; // Optional property for nested children
      }
      
      @Component({
        selector: 'app-parent-checkbox',
        templateUrl: './parent-checkbox.component.html',
        styleUrls: ['./parent-checkbox.component.css']
      })
      export class ParentCheckboxComponent {
        selectedData: Child[] = [];
        
        children: Child[] = [
          {
            id: 1,
            name: 'Child 1',
            isChecked: false,
            isPartial: false,
            childrens: [
              { id: 11, name: 'Grandchild 1-1', isChecked: false },
              { id: 12, name: 'Grandchild 1-2', isChecked: false }
            ]
          },
          { id: 2, name: 'Child 2', isChecked: false },
          { id: 3, name: 'Child 3', isChecked: false }
        ];
      
        updateSelectedData(): void {
          // Reset selected data
          this.selectedData = [];
          
          // Filter the first-level children
          this.children.forEach(child => {
            // Add child to selected data if checked
            if (child.isChecked || (child.isPartial && child.childrens)) {
              this.selectedData.push(child);
            }
            
            // Check if any grandchildren are checked
            if (child.childrens) {
              const selectedGrandchildren = child.childrens.filter(gc => gc.isChecked);
              
              // Update parent's isChecked and isPartial based on grandchildren's state
              child.isChecked = selectedGrandchildren.length === child.childrens.length; // All grandchildren checked
              child.isPartial = selectedGrandchildren.length > 0; // At least one grandchild checked
      
              // Add selected grandchildren to selected data
              this.selectedData.push(...selectedGrandchildren);
            }
          });
        }
      }
            `
          },
          {
            "filename": "parent-checkbox.component.html",
            "title": "ParentCheckboxComponent Template",
            "description": "The HTML template for the parent component displaying child and grandchild checkboxes.",
            "code": `
      <div>
        <h2>Parent Checkbox</h2>
        <div *ngFor="let child of children; let i = index">
          <input
            type="checkbox"
            [(ngModel)]="child.isChecked"
            (ngModelChange)="updateSelectedData()"
          />
          {{ child.name }}
          <span *ngIf="child.isPartial">(Partial)</span> <!-- Display partial status -->
          
          <div *ngIf="child.childrens && child.childrens.length > 0" style="margin-left: 20px;">
            <h4>Grandchildren</h4>
            <div *ngFor="let grandchild of child.childrens">
              <input
                type="checkbox"
                [(ngModel)]="grandchild.isChecked"
                (ngModelChange)="updateSelectedData()"
              />
              {{ grandchild.name }}
            </div>
          </div>
        </div>
        
        <h3>Selected Data:</h3>
        <pre>{{ selectedData | json }}</pre>
      </div>
            `
          },
          {
            "filename": "parent-checkbox.component.css",
            "title": "ParentCheckboxComponent Styles",
            "description": "Styles for the ParentCheckboxComponent.",
            "code": `
      h2 {
        color: #4a4a4a;
      }
      
      h3 {
        margin-top: 20px;
      }
      
      h4 {
        margin-top: 10px;
      }
            `
          }
        ]
      },      
      {
        "title": "Image Upload Examples in Angular with Validations",
        "description": "This document provides examples for handling image uploads in Angular with validations for file name, size, and allowed file types.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "single-image-upload.component.ts",
            "title": "Single Image Upload Component",
            "description": "This component demonstrates the functionality for uploading a single image with validations.",
            "code": `
            // single-image-upload.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-single-image-upload',
              templateUrl: './single-image-upload.component.html',
              styleUrls: ['./single-image-upload.component.css']
            })
            export class SingleImageUploadComponent {
              selectedImage: File | null = null;
              imagePreview: string | null = null;
              errorMessage: string = '';
      
              private readonly MAX_SIZE_MB = 2; // 2 MB
              private readonly ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif'];
      
              onImageSelected(event: any) {
                const file = event.target.files[0];
                this.errorMessage = '';
                
                if (file) {
                  if (!this.isValidFile(file)) {
                    this.errorMessage = 'Invalid file. Please upload a JPEG, PNG, or GIF image under 2 MB.';
                    this.selectedImage = null;
                    this.imagePreview = null;
                    return;
                  }
      
                  this.selectedImage = file;
                  const reader = new FileReader();
                  reader.onload = () => {
                    this.imagePreview = reader.result as string;
                  };
                  reader.readAsDataURL(this.selectedImage);
                }
              }
      
              private isValidFile(file: File): boolean {
                const isValidSize = file.size <= this.MAX_SIZE_MB * 1024 * 1024; // Convert MB to bytes
                const isValidType = this.ALLOWED_TYPES.includes(file.type);
                return isValidSize && isValidType;
              }
      
              removeImage() {
                this.selectedImage = null;
                this.imagePreview = null;
              }
      
              uploadImage() {
                if (this.selectedImage) {
                  const formData = new FormData();
                  formData.append('image', this.selectedImage);
                  // Here, you would typically send the formData to your server using HttpClient.
                  console.log('Image uploaded:', this.selectedImage);
                }
              }
            }
            `
          },
          {
            "filename": "single-image-upload.component.html",
            "title": "Single Image Upload Template",
            "description": "The HTML template for the single image upload component with validations.",
            "code": `
            <!-- single-image-upload.component.html -->
            <div>
              <h2>Single Image Upload</h2>
              <input type="file" (change)="onImageSelected($event)" accept="image/*" />
              <button (click)="uploadImage()" [disabled]="!selectedImage">Upload</button>
              <button (click)="removeImage()" [disabled]="!selectedImage">Remove</button>
              <div *ngIf="errorMessage" style="color: red;">{{ errorMessage }}</div>
              <div *ngIf="imagePreview">
                <h3>Image Preview:</h3>
                <img [src]="imagePreview" alt="Image Preview" width="200" />
              </div>
            </div>
            `
          },
          {
            "filename": "multiple-image-upload.component.ts",
            "title": "Multiple Image Upload Component",
            "description": "This component demonstrates the functionality for uploading multiple images with validations.",
            "code": `
            // multiple-image-upload.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-multiple-image-upload',
              templateUrl: './multiple-image-upload.component.html',
              styleUrls: ['./multiple-image-upload.component.css']
            })
            export class MultipleImageUploadComponent {
              selectedImages: File[] = [];
              imagePreviews: string[] = [];
              errorMessage: string = '';
      
              private readonly MAX_SIZE_MB = 2; // 2 MB
              private readonly ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif'];
      
              onImagesSelected(event: any) {
                const files = event.target.files;
                this.errorMessage = '';
                this.selectedImages = [];
                this.imagePreviews = [];
      
                for (let file of files) {
                  if (this.isValidFile(file)) {
                    this.selectedImages.push(file);
                    const reader = new FileReader();
                    reader.onload = () => {
                      this.imagePreviews.push(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  } else {
                    this.errorMessage = 'Invalid file. Please upload JPEG, PNG, or GIF images under 2 MB.';
                  }
                }
              }
      
              private isValidFile(file: File): boolean {
                const isValidSize = file.size <= this.MAX_SIZE_MB * 1024 * 1024; // Convert MB to bytes
                const isValidType = this.ALLOWED_TYPES.includes(file.type);
                return isValidSize && isValidType;
              }
      
              removeImage(index: number) {
                this.selectedImages.splice(index, 1);
                this.imagePreviews.splice(index, 1);
              }
      
              uploadImages() {
                const formData = new FormData();
                this.selectedImages.forEach(image => {
                  formData.append('images', image);
                });
                // Here, you would typically send the formData to your server using HttpClient.
                console.log('Images uploaded:', this.selectedImages);
              }
            }
            `
          },
          {
            "filename": "multiple-image-upload.component.html",
            "title": "Multiple Image Upload Template",
            "description": "The HTML template for the multiple image upload component with validations.",
            "code": `
            <!-- multiple-image-upload.component.html -->
            <div>
              <h2>Multiple Image Upload</h2>
              <input type="file" (change)="onImagesSelected($event)" accept="image/*" multiple />
              <button (click)="uploadImages()" [disabled]="selectedImages.length === 0">Upload</button>
              <div *ngIf="errorMessage" style="color: red;">{{ errorMessage }}</div>
              <div *ngFor="let imagePreview of imagePreviews; let i = index">
                <h3>Image Preview {{ i + 1 }}:</h3>
                <img [src]="imagePreview" alt="Image Preview" width="200" />
                <button (click)="removeImage(i)">Remove</button>
              </div>
            </div>
            `
          },
          {
            "filename": "base64-image-upload.component.ts",
            "title": "Base64 Image Upload Component",
            "description": "This component demonstrates the conversion of an uploaded image to base64 with validations.",
            "code": `
            // base64-image-upload.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-base64-image-upload',
              templateUrl: './base64-image-upload.component.html',
              styleUrls: ['./base64-image-upload.component.css']
            })
            export class Base64ImageUploadComponent {
              selectedImage: File | null = null;
              base64Image: string | null = null;
              errorMessage: string = '';
      
              private readonly MAX_SIZE_MB = 2; // 2 MB
              private readonly ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif'];
      
              onImageSelected(event: any) {
                const file = event.target.files[0];
                this.errorMessage = '';
                
                if (file) {
                  if (!this.isValidFile(file)) {
                    this.errorMessage = 'Invalid file. Please upload a JPEG, PNG, or GIF image under 2 MB.';
                    this.selectedImage = null;
                    this.base64Image = null;
                    return;
                  }
      
                  this.selectedImage = file;
                  const reader = new FileReader();
                  reader.onload = () => {
                    this.base64Image = reader.result as string;
                  };
                  reader.readAsDataURL(this.selectedImage);
                }
              }
      
              private isValidFile(file: File): boolean {
                const isValidSize = file.size <= this.MAX_SIZE_MB * 1024 * 1024; // Convert MB to bytes
                const isValidType = this.ALLOWED_TYPES.includes(file.type);
                return isValidSize && isValidType;
              }
      
              removeImage() {
                this.selectedImage = null;
                this.base64Image = null;
              }
      
              uploadImage() {
                if (this.base64Image) {
                  // Here, you would typically send the base64 string to your server.
                  console.log('Base64 Image:', this.base64Image);
                }
              }
            }
            `
          },
          {
            "filename": "base64-image-upload.component.html",
            "title": "Base64 Image Upload Template",
            "description": "The HTML template for the base64 image upload component with validations.",
            "code": `
            <!-- base64-image-upload.component.html -->
            <div>
              <h2>Base64 Image Upload</h2>
              <input type="file" (change)="onImageSelected($event)" accept="image/*" />
              <button (click)="uploadImage()" [disabled]="!base64Image">Upload</button>
              <button (click)="removeImage()" [disabled]="!base64Image">Remove</button>
              <div *ngIf="errorMessage" style="color: red;">{{ errorMessage }}</div>
              <div *ngIf="base64Image">
                <h3>Base64 Image:</h3>
                <img [src]="base64Image" alt="Base64 Image" width="200" />
              </div>
            </div>
            `
          },
          {
            "filename": "formdata-image-upload.component.ts",
            "title": "FormData Image Upload Component",
            "description": "This component demonstrates the use of FormData for uploading images with validations.",
            "code": `
            // formdata-image-upload.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-formdata-image-upload',
              templateUrl: './formdata-image-upload.component.html',
              styleUrls: ['./formdata-image-upload.component.css']
            })
            export class FormDataImageUploadComponent {
              selectedImage: File | null = null;
              errorMessage: string = '';
      
              private readonly MAX_SIZE_MB = 2; // 2 MB
              private readonly ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif'];
      
              onImageSelected(event: any) {
                const file = event.target.files[0];
                this.errorMessage = '';
                
                if (file) {
                  if (!this.isValidFile(file)) {
                    this.errorMessage = 'Invalid file. Please upload a JPEG, PNG, or GIF image under 2 MB.';
                    this.selectedImage = null;
                    return;
                  }
      
                  this.selectedImage = file;
                }
              }
      
              private isValidFile(file: File): boolean {
                const isValidSize = file.size <= this.MAX_SIZE_MB * 1024 * 1024; // Convert MB to bytes
                const isValidType = this.ALLOWED_TYPES.includes(file.type);
                return isValidSize && isValidType;
              }
      
              uploadImage() {
                if (this.selectedImage) {
                  const formData = new FormData();
                  formData.append('image', this.selectedImage);
                  // Here, you would typically send the formData to your server using HttpClient.
                  console.log('FormData Image uploaded:', this.selectedImage);
                }
              }
            }
            `
          },
          {
            "filename": "formdata-image-upload.component.html",
            "title": "FormData Image Upload Template",
            "description": "The HTML template for the FormData image upload component with validations.",
            "code": `
            <!-- formdata-image-upload.component.html -->
            <div>
              <h2>FormData Image Upload</h2>
              <input type="file" (change)="onImageSelected($event)" accept="image/*" />
              <button (click)="uploadImage()" [disabled]="!selectedImage">Upload</button>
              <div *ngIf="errorMessage" style="color: red;">{{ errorMessage }}</div>
            </div>
            `
          }
        ]
      },
      {
        "title": "File Upload Examples in Angular with Validations",
        "description": "This document provides examples for handling file uploads in Angular with validations for file name, size, and allowed file types.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "single-file-upload.component.ts",
            "title": "Single File Upload Component",
            "description": "This component demonstrates the functionality for uploading a single file with validations.",
            "code": `
            // single-file-upload.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-single-file-upload',
              templateUrl: './single-file-upload.component.html',
              styleUrls: ['./single-file-upload.component.css']
            })
            export class SingleFileUploadComponent {
              selectedFile: File | null = null;
              errorMessage: string = '';
      
              private readonly MAX_SIZE_MB = 5; // 5 MB
              private readonly ALLOWED_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
              onFileSelected(event: any) {
                const file = event.target.files[0];
                this.errorMessage = '';
      
                if (file) {
                  if (!this.isValidFile(file)) {
                    this.errorMessage = 'Invalid file. Please upload a PDF or Word document under 5 MB.';
                    this.selectedFile = null;
                    return;
                  }
      
                  this.selectedFile = file;
                }
              }
      
              private isValidFile(file: File): boolean {
                const isValidSize = file.size <= this.MAX_SIZE_MB * 1024 * 1024; // Convert MB to bytes
                const isValidType = this.ALLOWED_TYPES.includes(file.type);
                return isValidSize && isValidType;
              }
      
              removeFile() {
                this.selectedFile = null;
              }
      
              uploadFile() {
                if (this.selectedFile) {
                  const formData = new FormData();
                  formData.append('file', this.selectedFile);
                  // Here, you would typically send the formData to your server using HttpClient.
                  console.log('File uploaded:', this.selectedFile);
                }
              }
            }
            `
          },
          {
            "filename": "single-file-upload.component.html",
            "title": "Single File Upload Template",
            "description": "The HTML template for the single file upload component with validations.",
            "code": `
            <!-- single-file-upload.component.html -->
            <div>
              <h2>Single File Upload</h2>
              <input type="file" (change)="onFileSelected($event)" />
              <button (click)="uploadFile()" [disabled]="!selectedFile">Upload</button>
              <button (click)="removeFile()" [disabled]="!selectedFile">Remove</button>
              <p *ngIf="errorMessage" style="color: red;">{{ errorMessage }}</p>
            </div>
            `
          },
          {
            "filename": "multiple-file-upload.component.ts",
            "title": "Multiple File Upload Component",
            "description": "This component demonstrates the functionality for uploading multiple files with validations.",
            "code": `
            // multiple-file-upload.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-multiple-file-upload',
              templateUrl: './multiple-file-upload.component.html',
              styleUrls: ['./multiple-file-upload.component.css']
            })
            export class MultipleFileUploadComponent {
              selectedFiles: File[] = [];
              errorMessage: string = '';
      
              private readonly MAX_SIZE_MB = 5; // 5 MB
              private readonly ALLOWED_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
              onFilesSelected(event: any) {
                const files = event.target.files;
                this.errorMessage = '';
                this.selectedFiles = [];
      
                for (let i = 0; i < files.length; i++) {
                  if (this.isValidFile(files[i])) {
                    this.selectedFiles.push(files[i]);
                  } else {
                    this.errorMessage += \`Invalid file: \${files[i].name}. Please upload PDF or Word documents under 5 MB.\\n\`;
                  }
                }
              }
      
              private isValidFile(file: File): boolean {
                const isValidSize = file.size <= this.MAX_SIZE_MB * 1024 * 1024; // Convert MB to bytes
                const isValidType = this.ALLOWED_TYPES.includes(file.type);
                return isValidSize && isValidType;
              }
      
              removeFile(index: number) {
                this.selectedFiles.splice(index, 1);
              }
      
              uploadFiles() {
                if (this.selectedFiles.length > 0) {
                  const formData = new FormData();
                  this.selectedFiles.forEach(file => {
                    formData.append('files', file);
                  });
                  // Here, you would typically send the formData to your server using HttpClient.
                  console.log('Files uploaded:', this.selectedFiles);
                }
              }
            }
            `
          },
          {
            "filename": "multiple-file-upload.component.html",
            "title": "Multiple File Upload Template",
            "description": "The HTML template for the multiple file upload component with validations.",
            "code": `
            <!-- multiple-file-upload.component.html -->
            <div>
              <h2>Multiple File Upload</h2>
              <input type="file" (change)="onFilesSelected($event)" multiple />
              <button (click)="uploadFiles()" [disabled]="selectedFiles.length === 0">Upload</button>
              <div *ngFor="let file of selectedFiles; let i = index">
                <p>{{ file.name }} <button (click)="removeFile(i)">Remove</button></p>
              </div>
              <p *ngIf="errorMessage" style="color: red;">{{ errorMessage }}</p>
            </div>
            `
          }
        ]
      },
      {
        "title": "Passing Values through Routing in Angular",
        "description": "This document outlines different methods to pass values through Angular routing, including route parameters, query parameters, and snapshots, with examples for subscribing to these values.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "app-routing.module.ts",
            "title": "App Routing Module",
            "description": "The routing module that sets up routes with parameters and query parameters.",
            "code": `
            // app-routing.module.ts
            import { NgModule } from '@angular/core';
            import { RouterModule, Routes } from '@angular/router';
            import { HomeComponent } from './home/home.component';
            import { DetailComponent } from './detail/detail.component';
      
            const routes: Routes = [
              { path: '', component: HomeComponent },
              { path: 'detail/:id', component: DetailComponent }, // Route parameter
              { path: 'search', component: DetailComponent } // Query parameter
            ];
      
            @NgModule({
              imports: [RouterModule.forRoot(routes)],
              exports: [RouterModule]
            })
            export class AppRoutingModule {}
            `
          },
          {
            "filename": "home.component.ts",
            "title": "Home Component",
            "description": "This component demonstrates how to navigate to another route with route parameters and query parameters.",
            "code": `
            // home.component.ts
            import { Component } from '@angular/core';
            import { Router } from '@angular/router';
      
            @Component({
              selector: 'app-home',
              templateUrl: './home.component.html',
              styleUrls: ['./home.component.css']
            })
            export class HomeComponent {
              constructor(private router: Router) {}
      
              navigateWithRouteParam() {
                const id = 1; // Example ID
                this.router.navigate(['/detail', id]); // Navigate with route parameter
              }
      
              navigateWithQueryParam() {
                this.router.navigate(['/search'], { queryParams: { term: 'Angular', page: 1 }}); // Navigate with query parameters
              }
            }
            `
          },
          {
            "filename": "home.component.html",
            "title": "Home Component Template",
            "description": "The HTML template for the Home component with buttons to navigate.",
            "code": `
            <!-- home.component.html -->
            <div>
              <h2>Home Component</h2>
              <button (click)="navigateWithRouteParam()">Go to Detail with Route Param</button>
              <button (click)="navigateWithQueryParam()">Go to Search with Query Param</button>
            </div>
            `
          },
          {
            "filename": "detail.component.ts",
            "title": "Detail Component",
            "description": "This component demonstrates how to retrieve route parameters and query parameters.",
            "code": `
            // detail.component.ts
            import { Component, OnInit } from '@angular/core';
            import { ActivatedRoute } from '@angular/router';
      
            @Component({
              selector: 'app-detail',
              templateUrl: './detail.component.html',
              styleUrls: ['./detail.component.css']
            })
            export class DetailComponent implements OnInit {
              routeParam: string | null = '';
              queryParam: any = {};
      
              constructor(private route: ActivatedRoute) {}
      
              ngOnInit() {
                // Using route parameters
                this.route.paramMap.subscribe(params => {
                  this.routeParam = params.get('id');
                });
      
                // Using query parameters
                this.route.queryParams.subscribe(params => {
                  this.queryParam = params;
                });
      
                // Using snapshot
                const snapshotParam = this.route.snapshot.paramMap.get('id');
                console.log('Snapshot Route Param:', snapshotParam);
              }
            }
            `
          },
          {
            "filename": "detail.component.html",
            "title": "Detail Component Template",
            "description": "The HTML template for the Detail component displaying parameters.",
            "code": `
            <!-- detail.component.html -->
            <div>
              <h2>Detail Component</h2>
              <p>Route Parameter: {{ routeParam }}</p>
              <p>Query Parameters: {{ queryParam | json }}</p>
            </div>
            `
          }
        ]
      },
      {
        "title": "Different Ways to Provide Services in Angular",
        "description": "This document outlines the three primary ways to provide services in Angular: at the root level, in a specific module, and at the component level. It includes examples for each method and explains their use cases and implications.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "service-root.ts",
            "title": "Providing a Service at the Root Level",
            "description": `
              1) Providing a service at the root level makes it a singleton across the entire application.
              2) The service will be available everywhere without needing to import it in every module.
              3) It is ideal for services that need to be reused globally (e.g., authentication or user services).
              4) To provide a service at the root level, we use the 'providedIn' property in the @Injectable decorator.
            `,
            "code": `
            // service-root.ts
            import { Injectable } from '@angular/core';
      
            @Injectable({
              providedIn: 'root' // Service provided at the root level
            })
            export class RootService {
              logMessage() {
                console.log('Service provided at root level.');
              }
            }
            `
          },
          {
            "filename": "app.module.ts",
            "title": "Providing a Service at the Module Level",
            "description": `
              1) Providing a service at the module level makes it available only to components that are declared in that module.
              2) This method is useful when the service is only needed by a subset of your application.
              3) To provide a service at the module level, include it in the 'providers' array in the module's decorator.
            `,
            "code": `
            // app.module.ts
            import { NgModule } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';
            import { AppComponent } from './app.component';
            import { ModuleService } from './module.service';
      
            @NgModule({
              declarations: [AppComponent],
              imports: [BrowserModule],
              providers: [ModuleService], // Service provided at the module level
              bootstrap: [AppComponent]
            })
            export class AppModule {}
            `
          },
          {
            "filename": "module.service.ts",
            "title": "Module Service",
            "description": `
              1) This is the service provided at the module level (in app.module.ts).
              2) This service will only be available to components declared in the same module.
            `,
            "code": `
            // module.service.ts
            import { Injectable } from '@angular/core';
      
            @Injectable()
            export class ModuleService {
              logMessage() {
                console.log('Service provided at module level.');
              }
            }
            `
          },
          {
            "filename": "component-level.ts",
            "title": "Providing a Service at the Component Level",
            "description": `
              1) Providing a service at the component level ensures that a new instance of the service is created for each instance of the component.
              2) This is useful for services that should not be shared across the entire application but rather be component-specific.
              3) To provide a service at the component level, include it in the 'providers' array in the component's decorator.
            `,
            "code": `
            // component-level.ts
            import { Component } from '@angular/core';
            import { ComponentService } from './component.service';
      
            @Component({
              selector: 'app-component',
              template: '<h1>Component with its own service</h1>',
              providers: [ComponentService] // Service provided at the component level
            })
            export class ComponentLevelComponent {
              constructor(private componentService: ComponentService) {
                componentService.logMessage();
              }
            }
            `
          },
          {
            "filename": "component.service.ts",
            "title": "Component Service",
            "description": `
              1) This is the service provided at the component level (in component-level.ts).
              2) This service will only be available to this specific component and its children, creating a separate instance for each.
            `,
            "code": `
            // component.service.ts
            import { Injectable } from '@angular/core';
      
            @Injectable()
            export class ComponentService {
              logMessage() {
                console.log('Service provided at component level.');
              }
            }
            `
          }
        ]
      },
      {
        "title": "Inbuilt Change Detection Methods in Angular",
        "description": "This document explains Angular's inbuilt methods for manually triggering change detection, including markForCheck, detectChanges, detach, reattach, and checkNoChanges. These methods are used to control the Angular change detection mechanism and improve performance in specific scenarios.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "markForCheck-example.component.ts",
            "title": "Using markForCheck",
            "description": `
              1) The markForCheck() method is used in OnPush strategy components to manually mark a component for change detection.
              2) Even if the component uses OnPush change detection, calling markForCheck() will force Angular to check the component and its ancestors in the next detection cycle.
              3) Useful in scenarios where a change in the state occurs outside Angular's zone (e.g., when using setTimeout or third-party libraries).
            `,
            "code": `
            // markForCheck-example.component.ts
            import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
      
            @Component({
              selector: 'app-mark-for-check-example',
              template: \`
                <div>
                  <h2>Mark For Check Example</h2>
                  <p>Counter: {{ counter }}</p>
                  <button (click)="updateCounter()">Update Counter</button>
                </div>
              \`,
              changeDetection: ChangeDetectionStrategy.OnPush // Using OnPush strategy
            })
            export class MarkForCheckExampleComponent {
              counter = 0;
      
              constructor(private cdr: ChangeDetectorRef) {}
      
              updateCounter() {
                setTimeout(() => {
                  this.counter++;
                  this.cdr.markForCheck(); // Manually trigger change detection
                }, 1000);
              }
            }
            `
          },
          {
            "filename": "detectChanges-example.component.ts",
            "title": "Using detectChanges",
            "description": `
              1) The detectChanges() method triggers change detection immediately for the current component and its children.
              2) This method is useful in scenarios where you need immediate updates to the DOM without waiting for Angular’s next change detection cycle.
              3) It's often used in combination with markForCheck() or in cases where an immediate update is required, such as after a manual DOM update.
            `,
            "code": `
            // detectChanges-example.component.ts
            import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
      
            @Component({
              selector: 'app-detect-changes-example',
              template: \`
                <div>
                  <h2>Detect Changes Example</h2>
                  <p>Counter: {{ counter }}</p>
                  <button (click)="forceUpdate()">Force Update</button>
                </div>
              \`,
              changeDetection: ChangeDetectionStrategy.OnPush
            })
            export class DetectChangesExampleComponent {
              counter = 0;
      
              constructor(private cdr: ChangeDetectorRef) {}
      
              forceUpdate() {
                this.counter++;
                this.cdr.detectChanges(); // Immediately trigger change detection
              }
            }
            `
          },
          {
            "filename": "detach-and-reattach.component.ts",
            "title": "Using detach and reattach",
            "description": `
              1) The detach() method allows you to detach the component from Angular's change detection system, meaning Angular will no longer automatically check the component for changes.
              2) This method is useful for performance optimization when the component doesn't need frequent updates.
              3) The reattach() method can be called to re-enable change detection for the detached component.
            `,
            "code": `
            // detach-and-reattach.component.ts
            import { Component, ChangeDetectorRef } from '@angular/core';
      
            @Component({
              selector: 'app-detach-reattach-example',
              template: \`
                <div>
                  <h2>Detach and Reattach Example</h2>
                  <p>Counter: {{ counter }}</p>
                  <button (click)="detachChangeDetection()">Detach</button>
                  <button (click)="increment()">Increment Counter</button>
                  <button (click)="reattachChangeDetection()">Reattach</button>
                </div>
              \`
            })
            export class DetachReattachExampleComponent {
              counter = 0;
      
              constructor(private cdr: ChangeDetectorRef) {}
      
              increment() {
                this.counter++;
              }
      
              detachChangeDetection() {
                this.cdr.detach(); // Detach change detection
              }
      
              reattachChangeDetection() {
                this.cdr.reattach(); // Reattach change detection
                this.cdr.detectChanges(); // Trigger detection immediately after reattaching
              }
            }
            `
          },
          {
            "filename": "checkNoChanges-example.component.ts",
            "title": "Using checkNoChanges",
            "description": `
              1) The checkNoChanges() method ensures that the model has not changed since the last change detection check.
              2) This method is used for debugging purposes, particularly in development mode, to verify that the component’s model is not modified incorrectly between checks.
              3) In production mode, this method is ignored to avoid performance degradation.
            `,
            "code": `
            // checkNoChanges-example.component.ts
            import { Component, ChangeDetectorRef } from '@angular/core';
      
            @Component({
              selector: 'app-check-no-changes-example',
              template: \`
                <div>
                  <h2>Check No Changes Example</h2>
                  <p>Counter: {{ counter }}</p>
                  <button (click)="increment()">Increment Counter</button>
                  <button (click)="checkNoChanges()">Check No Changes</button>
                </div>
              \`
            })
            export class CheckNoChangesExampleComponent {
              counter = 0;
      
              constructor(private cdr: ChangeDetectorRef) {}
      
              increment() {
                this.counter++;
              }
      
              checkNoChanges() {
                this.cdr.checkNoChanges(); // Ensure no changes between detection cycles
              }
            }
            `
          }
        ]
      },
      {
        "title": "Add and Remove Objects between Two Arrays in Angular",
        "description": "This example demonstrates how to move objects between two arrays, left and right, in Angular. When an item is clicked on the left, it is added to the right side. When an item is clicked on the right, it is removed from the right and added back to the left. Additionally, the example shows how to print the JSON data of selected items and their IDs in the template.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "app.component.ts",
            "title": "App Component",
            "description": "This is the main TypeScript file where we manage two arrays of objects (leftData and rightData). The component handles the add and remove logic between the two arrays and also tracks the selectedData and selectedIds.",
            "code": `
            // app.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-root',
              templateUrl: './app.component.html',
              styleUrls: ['./app.component.css']
            })
            export class AppComponent {
              leftData = [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' }
              ];
              rightData: any[] = [];
      
              selectedData = [];
              selectedIds = [];
      
              addToRight(item: any) {
                this.leftData = this.leftData.filter(data => data.id !== item.id);
                this.rightData.push(item);
                this.updateSelection();
              }
      
              removeFromRight(item: any) {
                this.rightData = this.rightData.filter(data => data.id !== item.id);
                this.leftData.push(item);
                this.updateSelection();
              }
      
              updateSelection() {
                this.selectedData = this.rightData.map(data => data.name);
                this.selectedIds = this.rightData.map(data => data.id);
              }
            }
            `
          },
          {
            "filename": "app.component.html",
            "title": "App Component HTML Template",
            "description": "This HTML template displays the leftData and rightData arrays. Clicking on an item on the left adds it to the right, and clicking an item on the right removes it from the right and adds it back to the left. Additionally, it prints the selectedData and selectedIds using the JSON pipe.",
            "code": `
            <!-- app.component.html -->
            <div class="container">
              <div class="row">
                <!-- Left side data -->
                <div class="col-6">
                  <h3>Left Side</h3>
                  <ul>
                    <li *ngFor="let item of leftData" (click)="addToRight(item)">
                      {{ item.name }}
                    </li>
                  </ul>
                </div>
      
                <!-- Right side data -->
                <div class="col-6">
                  <h3>Right Side</h3>
                  <ul>
                    <li *ngFor="let item of rightData" (click)="removeFromRight(item)">
                      {{ item.name }}
                    </li>
                  </ul>
                </div>
              </div>
      
              <div class="mt-3">
                <h3>Selected Data and IDs:</h3>
                <p>{{ selectedData | json }} - {{ selectedIds | json }}</p>
              </div>
            </div>
            `
          },
          {
            "filename": "app.component.css",
            "title": "App Component CSS",
            "description": "This is an optional CSS file where you can style the layout of the left and right sides for better visual separation.",
            "code": `
            /* app.component.css */
            ul {
              list-style-type: none;
              padding: 0;
            }
      
            li {
              cursor: pointer;
              padding: 5px;
              border: 1px solid #ccc;
              margin-bottom: 5px;
            }
      
            li:hover {
              background-color: #f0f0f0;
            }
            `
          }
        ]
      },
      {
        "title": "Add and Remove Objects between Two Arrays with Search Functionality in Angular",
        "description": "This example demonstrates how to move objects between two arrays in Angular, with an additional search functionality for filtering the left-side array before adding items to the right. It displays the selected data and their IDs using the JSON pipe.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "app.component.ts",
            "title": "App Component",
            "description": "This TypeScript code manages two arrays of objects (leftData and rightData) and handles the add/remove logic between the arrays. It also implements a search feature that filters the leftData array based on a search term entered by the user.",
            "code": `
            // app.component.ts
            import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-root',
              templateUrl: './app.component.html',
              styleUrls: ['./app.component.css']
            })
            export class AppComponent {
              leftData = [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' },
                { id: 4, name: 'Item 4' },
                { id: 5, name: 'Item 5' }
              ];
              rightData: any[] = [];
      
              selectedData = [];
              selectedIds = [];
      
              searchTerm: string = ''; // Used for filtering leftData
              filteredLeftData = [...this.leftData]; // Holds the filtered data
      
              addToRight(item: any) {
                this.leftData = this.leftData.filter(data => data.id !== item.id);
                this.rightData.push(item);
                this.filterLeftData();
                this.updateSelection();
              }
      
              removeFromRight(item: any) {
                this.rightData = this.rightData.filter(data => data.id !== item.id);
                this.leftData.push(item);
                this.filterLeftData();
                this.updateSelection();
              }
      
              updateSelection() {
                this.selectedData = this.rightData.map(data => data.name);
                this.selectedIds = this.rightData.map(data => data.id);
              }
      
              // Filter leftData based on search term
              filterLeftData() {
                this.filteredLeftData = this.leftData.filter(item =>
                  item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
                );
              }
            }
            `
          },
          {
            "filename": "app.component.html",
            "title": "App Component HTML Template",
            "description": "This HTML template displays the left and right arrays. It includes an input field to filter the left-side data based on a search term. Clicking an item on the left adds it to the right side, and clicking an item on the right removes it from the right side and adds it back to the left.",
            "code": `
            <!-- app.component.html -->
            <div class="container">
              <div class="row">
                <!-- Search Input for Left Side -->
                <div class="col-6">
                  <h3>Left Side</h3>
                  <input type="text" placeholder="Search..." [(ngModel)]="searchTerm" (input)="filterLeftData()" />
                  <ul>
                    <li *ngFor="let item of filteredLeftData" (click)="addToRight(item)">
                      {{ item.name }}
                    </li>
                  </ul>
                </div>
      
                <!-- Right side data -->
                <div class="col-6">
                  <h3>Right Side</h3>
                  <ul>
                    <li *ngFor="let item of rightData" (click)="removeFromRight(item)">
                      {{ item.name }}
                    </li>
                  </ul>
                </div>
              </div>
      
              <div class="mt-3">
                <h3>Selected Data and IDs:</h3>
                <p>{{ selectedData | json }} - {{ selectedIds | json }}</p>
              </div>
            </div>
            `
          },
          {
            "filename": "app.component.css",
            "title": "App Component CSS",
            "description": "This CSS styles the layout for the left and right data, as well as the input field for search functionality.",
            "code": `
            /* app.component.css */
            ul {
              list-style-type: none;
              padding: 0;
            }
      
            li {
              cursor: pointer;
              padding: 5px;
              border: 1px solid #ccc;
              margin-bottom: 5px;
            }
      
            li:hover {
              background-color: #f0f0f0;
            }
      
            input {
              margin-bottom: 10px;
              width: 100%;
              padding: 5px;
              border-radius: 4px;
              border: 1px solid #ccc;
            }
            `
          }
        ]
      },
      {
        "title": "Scroll into Invalid Field Form in Angular",
        "description": "This example demonstrates how to create a reactive form in Angular that scrolls to the first invalid field upon submission. The form includes fields for email, password, first name, last name, and reason, all with required validation.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "scroll-into-invalid-field-form.component.ts",
            "title": "ScrollIntoInvalidFieldForm Component",
            "description": "The component that implements the reactive form and scrolls to the first invalid field.",
            "code": `
      import { Component, OnInit } from '@angular/core';
      import { FormBuilder, Validators } from '@angular/forms';
      
      @Component({
        selector: 'app-scroll-into-invalid-field-form',
        templateUrl: './scroll-into-invalid-field-form.component.html',
        styleUrls: ['./scroll-into-invalid-field-form.component.css']
      })
      export class ScrollIntoInvalidFieldFormComponent implements OnInit {
        submitted: boolean = false;
        
        formName = this.fb.group({
          inputName: ['', Validators.required],
          'terms&condition': ['', Validators.required],
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          reason: ['', Validators.required],
        });
      
        constructor(private fb: FormBuilder) {}
      
        ngOnInit() {}
      
        submit() {
          this.submitted = true;
          if (!this.formName.valid) {
            this.scrollToError();
          }
        }
      
        scrollTo(el: any): void {
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      
        scrollToError(): void {
          const firstElementWithError = document.querySelector('.ng-invalid[formControlName]');
          this.scrollTo(firstElementWithError);
        }
      }
            `
          },
          {
            "filename": "scroll-into-invalid-field-form.component.html",
            "title": "ScrollIntoInvalidFieldForm Component Template",
            "description": "The HTML template for the reactive form, including validation messages.",
            "code": `
      <form style="width:50%" [formGroup]='formName'>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" formControlName='inputName' class="form-control" id="exampleInputEmail1" placeholder="Enter email">
          <div *ngIf="formName.get('inputName').errors && submitted">
            <span class="error" *ngIf="formName.get('inputName')?.errors['required']">This field is required</span>
          </div>
        </div>
        <div class="form-group">
          <label for="termsCondition">Terms & Condition</label>
          <input type="password" formControlName='terms&condition' class="form-control" id="termsCondition" placeholder="Password">
          <div *ngIf="formName.get('terms&condition').errors && submitted">
            <span class="error" *ngIf="formName.get('terms&condition')?.errors['required']">Terms & condition is required</span>
          </div>
        </div>
        <div class="form-group">
          <label for="firstname">First Name</label>
          <input type="text" formControlName="firstname" class="form-control" id="firstname" placeholder="First Name">
          <div *ngIf="formName.get('firstname').errors && submitted">
            <span class="error" *ngIf="formName.get('firstname').errors['required']">This firstname is required</span>
          </div>
        </div>
        <div class="form-group">
          <label for="lastname">Last Name</label>
          <input type="text" formControlName="lastname" class="form-control" id="lastname" placeholder="Last Name">
          <div *ngIf="formName.get('lastname').errors && submitted">
            <span class="error" *ngIf="formName.get('lastname').errors['required']">This lastname is required</span>
          </div>
        </div>
        <div class="form-group">
          <label for="reason">Reason</label>
          <input type="text" formControlName="reason" class="form-control" id="reason" placeholder="Reason">
          <div *ngIf="formName.get('reason').errors && submitted">
            <span class="error" *ngIf="formName.get('reason').errors['required']">This reason is required</span>
          </div>
        </div>
        <button type="submit" (click)="submit()" class="btn btn-primary">Submit</button>
      </form>
      <p>Valid: {{ formName.valid }}</p>
      <p>Invalid: {{ formName.invalid }}</p>
      <p>Value: {{ formName.value | json }}</p>
            `
          },
          {
            "filename": "scroll-into-invalid-field-form.component.css",
            "title": "ScrollIntoInvalidFieldForm Component Styles",
            "description": "Basic styles for the ScrollIntoInvalidFieldForm component.",
            "code": `
      .error {
        color: red;
      }
            `
          }
        ]
      },
      {
        "title": "Cache API Calls Service",
        "description": "This service handles API calls with caching functionality. It fetches data from the provided URL and uses a cache service to store and retrieve responses.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "cache-api-calls.service.ts",
            "title": "Cache API Calls Service",
            "description": "Service to manage API calls with caching using an external cache service.",
            "code": `
      import { Injectable } from '@angular/core';
      import { HttpClient } from '@angular/common/http';
      import { Observable, of } from 'rxjs';
      import { catchError, tap } from 'rxjs/operators';
      import { MultipleCacheServiceService } from '../../../../shared/services/multiple-api-cache/multiple-cache-service.service';
      
      @Injectable()
      export class CacheApiCallsService {
        constructor(private http: HttpClient, private cacheService: MultipleCacheServiceService) {}
      
        // Fetch data with cache handling
        fetchData(url: string, isRefresh: boolean = false): Observable<any> {
          const cachedData = this.cacheService.get<any>(url);
          
          return (cachedData !== null && !isRefresh)
            ? of(cachedData)
            : this.http.get(url).pipe(
                tap(data => this.cacheService.set(url, data)), // Cache the data
                catchError(error => {
                  console.error('Error fetching data:', error);
                  throw error;
                })
              );
        }
      
        // Fetch specific data with cache handling
        fetchDataParticular(url: string, isRefresh: boolean = false): Observable<any> {
          const cachedData = this.cacheService.get<any>(url);
          
          return (cachedData !== null && !isRefresh)
            ? of(cachedData)
            : this.http.get(url).pipe(
                tap(data => this.cacheService.set(url, data)), // Cache the data
                catchError(error => {
                  console.error('Error fetching data:', error);
                  throw error;
                })
              );
        }
      }
            `
          },
          {
            "filename": "cache-service-consume-multiple-calls.component.ts",
            "title": "Cache Service Consume Multiple Calls Component",
            "description": "Component to demonstrate usage of the CacheApiCallsService, including refresh functionality.",
            "code": `
      import { Component } from '@angular/core';
      import { CommonModule } from '@angular/common';
      import { HttpClientModule } from '@angular/common/http';
      import { MultipleCacheServiceService } from '../../../shared/services/multiple-api-cache/multiple-cache-service.service';
      import { CacheApiCallsService } from './service/cache-api-calls.service';
      import { ButtonComponent } from '../../../shared/component/button/button.component';
      
      @Component({
        selector: 'app-cache-service-consume-multiple-calls',
        standalone: true,
        imports: [ButtonComponent, CommonModule, HttpClientModule],
        providers: [MultipleCacheServiceService, CacheApiCallsService],
        templateUrl: './cache-service-consume-multiple-calls.component.html',
        styleUrls: ['./cache-service-consume-multiple-calls.component.scss']
      })
      export class CacheServiceConsumeMultipleCallsComponent {
        data: any[] = [];
        detail: any = {};
      
        constructor(private cacheApiService: CacheApiCallsService) {}
      
        // Refresh data with optional cache bypass
        refreshData(isRefresh: boolean): void {
          this.data = [];
          this.cacheApiService.fetchData('https://jsonplaceholder.typicode.com/todos', isRefresh).subscribe((response: any) => {
            this.data = response;
          });
        }
      
        // Refresh specific data with optional cache bypass
        refreshDataDetail(isRefresh: boolean): void {
          this.detail = {};
          this.cacheApiService.fetchDataParticular('https://jsonplaceholder.typicode.com/todos/1', isRefresh).subscribe((response: any) => {
            this.detail = response;
          });
        }
      }
            `
          },
          {
            "filename": "cache-service-consume-multiple-calls.component.html",
            "title": "Cache Service Consume Multiple Calls Component Template",
            "description": "HTML template for the CacheServiceConsumeMultipleCallsComponent, providing buttons for fetching cached and refreshed data.",
            "code": `
      <app-button [text]="'Get Cache'" [btnClass]="'btn-sm btn-primary'" (onBtnClick)="refreshData(false)"></app-button>
      <app-button [text]="'Refresh Data'" [btnClass]="'btn-sm btn-success'" (onBtnClick)="refreshData(true)"></app-button>
      
      <div *ngIf="data.length">
        Total Todos: {{ data.length }}
      </div>
      
      <app-button [text]="'Get Cache For Detail'" [btnClass]="'btn-sm btn-primary'" (onBtnClick)="refreshDataDetail(false)"></app-button>
      <app-button [text]="'Refresh Data'" [btnClass]="'btn-sm btn-success'" (onBtnClick)="refreshDataDetail(true)"></app-button>
      
      <div *ngIf="detail">
        Details: {{ detail | json }}
      </div>
            `
          }
        ]
      },
      {
        "title": "ng-bootstrap Modal Popup Without Service",
        "description": "This example demonstrates how to pass values to an ng-bootstrap modal popup without a service, directly from the parent component.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "parent-component.ts",
            "title": "Parent Component",
            "description": "Parent component that opens the modal and receives the result data when the modal is closed.",
            "code": `
      import { Component } from '@angular/core';
      import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
      import { ModalContentComponent } from './modal-content.component';
      
      @Component({
        selector: 'app-parent-component',
        templateUrl: './parent-component.html'
      })
      export class ParentComponent {
        resultData: any;
      
        constructor(private modalService: NgbModal) {}
      
        openModal() {
          const modalRef = this.modalService.open(ModalContentComponent);
          modalRef.componentInstance.data = { name: 'John', age: 30 }; // Passing data to the modal
      
          modalRef.result.then((result: any) => {
            this.resultData = result; // Data received from the modal
          }).catch((error: any) => {
            console.error('Modal dismissed:', error);
          });
        }
      }
            `
          },
          {
            "filename": "parent-component.html",
            "title": "Parent Component Template",
            "description": "HTML template for the parent component that triggers the modal and displays the result.",
            "code": `
      <button class="btn btn-primary" (click)="openModal()">Open Modal</button>
      
      <div *ngIf="resultData">
        <h3>Modal Result</h3>
        <p>Name: {{ resultData?.name }}</p>
        <p>Age: {{ resultData?.age }}</p>
      </div>
            `
          },
          {
            "filename": "modal-content.component.ts",
            "title": "Modal Content Component",
            "description": "The content component that will be displayed in the modal, receiving data from the parent and sending data back.",
            "code": `
      import { Component, Input } from '@angular/core';
      import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
      
      @Component({
        selector: 'app-modal-content',
        templateUrl: './modal-content.component.html'
      })
      export class ModalContentComponent {
        @Input() data: any; // Data received from the parent component
      
        constructor(public activeModal: NgbActiveModal) {}
      
        closeModal() {
          this.activeModal.close({ name: 'Jane', age: 25 }); // Sending data back when modal closes
        }
      
        dismissModal() {
          this.activeModal.dismiss('Modal dismissed');
        }
      }
            `
          },
          {
            "filename": "modal-content.component.html",
            "title": "Modal Content Component Template",
            "description": "HTML template for the modal content component that displays the received data and provides options to close or dismiss the modal.",
            "code": `
      <div class="modal-header">
        <h4 class="modal-title">Modal Title</h4>
        <button type="button" class="close" aria-label="Close" (click)="dismissModal()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Received Name: {{ data?.name }}</p>
        <p>Received Age: {{ data?.age }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="dismissModal()">Dismiss</button>
        <button type="button" class="btn btn-primary" (click)="closeModal()">Close with Data</button>
      </div>
            `
          }
        ]
      },      
      {
        "title": "ng-bootstrap Modal Popup",
        "description": "This example demonstrates how to pass values to an ng-bootstrap modal popup and how to send data back from the modal component.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "modal-service.ts",
            "title": "Modal Service",
            "description": "Service to open the modal and handle data passing to/from the modal component.",
            "code": `
      import { Injectable } from '@angular/core';
      import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
      import { ModalContentComponent } from './modal-content.component';
      
      @Injectable()
      export class ModalService {
        constructor(private modalService: NgbModal) {}
      
        openModal(data: any): Promise<any> {
          const modalRef = this.modalService.open(ModalContentComponent);
          modalRef.componentInstance.data = data; // Passing data to the modal
      
          return modalRef.result
            .then(result => {
              console.log('Modal closed with:', result);
              return result; // Sending data back from the modal
            })
            .catch(reason => {
              console.error('Modal dismissed:', reason);
            });
        }
      }
            `
          },
          {
            "filename": "parent-component.ts",
            "title": "Parent Component",
            "description": "Parent component that opens the modal and receives the result data when the modal is closed.",
            "code": `
      import { Component } from '@angular/core';
      import { ModalService } from './modal-service';
      
      @Component({
        selector: 'app-parent-component',
        templateUrl: './parent-component.html',
        providers: [ModalService]
      })
      export class ParentComponent {
        resultData: any;
      
        constructor(private modalService: ModalService) {}
      
        openModal() {
          const dataToSend = { name: 'John', age: 30 };
          
          this.modalService.openModal(dataToSend).then(result => {
            this.resultData = result; // Data received from the modal
          });
        }
      }
            `
          },
          {
            "filename": "parent-component.html",
            "title": "Parent Component Template",
            "description": "HTML template for the parent component that triggers the modal and displays the result.",
            "code": `
      <button class="btn btn-primary" (click)="openModal()">Open Modal</button>
      
      <div *ngIf="resultData">
        <h3>Modal Result</h3>
        <p>Name: {{ resultData?.name }}</p>
        <p>Age: {{ resultData?.age }}</p>
      </div>
            `
          },
          {
            "filename": "modal-content.component.ts",
            "title": "Modal Content Component",
            "description": "The content component that will be displayed in the modal, receiving data from the parent and sending data back.",
            "code": `
      import { Component, Input } from '@angular/core';
      import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
      
      @Component({
        selector: 'app-modal-content',
        templateUrl: './modal-content.component.html'
      })
      export class ModalContentComponent {
        @Input() data: any; // Data received from the parent component
      
        constructor(public activeModal: NgbActiveModal) {}
      
        closeModal() {
          this.activeModal.close({ name: 'Jane', age: 25 }); // Sending data back when modal closes
        }
      
        dismissModal() {
          this.activeModal.dismiss('Modal dismissed');
        }
      }
            `
          },
          {
            "filename": "modal-content.component.html",
            "title": "Modal Content Component Template",
            "description": "HTML template for the modal content component that displays the received data and provides options to close or dismiss the modal.",
            "code": `
      <div class="modal-header">
        <h4 class="modal-title">Modal Title</h4>
        <button type="button" class="close" aria-label="Close" (click)="dismissModal()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Received Name: {{ data?.name }}</p>
        <p>Received Age: {{ data?.age }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="dismissModal()">Dismiss</button>
        <button type="button" class="btn btn-primary" (click)="closeModal()">Close with Data</button>
      </div>
            `
          }
        ]
      },
      {
        "title": "ng-bootstrap Modal Popup with ngModel in Same Component",
        "description": "This example demonstrates how to open, close, and pass values using ngModel in an ng-bootstrap modal within the same component.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "modal-in-same-component.ts",
            "title": "Component with Modal Logic",
            "description": "This component contains the logic to open and close the modal, and uses ngModel for data binding.",
            "code": `
      import { Component } from '@angular/core';
      import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
      
      @Component({
        selector: 'app-modal-in-same-component',
        templateUrl: './modal-in-same-component.html'
      })
      export class ModalInSameComponent {
        modalRef: NgbModalRef | null = null;
        data = { name: '', age: null }; // ngModel binding object
      
        constructor(private modalService: NgbModal) {}
      
        openModal(content: any) {
          this.modalRef = this.modalService.open(content);
        }
      
        closeModal() {
          if (this.modalRef) {
            this.modalRef.close(); // Close the modal programmatically
          }
        }
      
        dismissModal() {
          if (this.modalRef) {
            this.modalRef.dismiss(); // Dismiss the modal programmatically
          }
        }
      
        // This method is triggered when the modal is closed
        onModalSubmit() {
          // You can handle form submission or any other logic here
          console.log('Submitted Data:', this.data);
          this.closeModal();
        }
      }
            `
          },
          {
            "filename": "modal-in-same-component.html",
            "title": "Template with Modal and Form Binding",
            "description": "HTML template that contains the modal structure and binds form fields using ngModel.",
            "code": `
      <button class="btn btn-primary" (click)="openModal(modalContent)">Open Modal</button>
      
      <!-- Modal content -->
      <ng-template #modalContent let-modal>
        <div class="modal-header">
          <h4 class="modal-title">Modal Title</h4>
          <button type="button" class="close" aria-label="Close" (click)="dismissModal()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" type="text" class="form-control" [(ngModel)]="data.name" name="name" />
            </div>
            <div class="form-group">
              <label for="age">Age</label>
              <input id="age" type="number" class="form-control" [(ngModel)]="data.age" name="age" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" (click)="dismissModal()">Dismiss</button>
          <button type="button" class="btn btn-primary" (click)="onModalSubmit()">Submit</button>
        </div>
      </ng-template>
      
      <!-- Display submitted data -->
      <div *ngIf="data.name || data.age">
        <h3>Submitted Data</h3>
        <p>Name: {{ data.name }}</p>
        <p>Age: {{ data.age }}</p>
      </div>
            `
          }
        ]
      },{
        "title": "TypeScript Concepts in Angular",
        "description": "This group contains Angular examples demonstrating the use of model, interface, extends, typeof, constant, readonly constant, and enum in an Angular context.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "user.model.ts",
            "title": "Model Example in Angular",
            "description": "This example shows how to create and use a User model class in an Angular component.",
            "code": `
      export class User {
        constructor(
          public id: number,
          public name: string,
          public email: string
        ) {}
      }
      
      // In a component:
      import { Component } from '@angular/core';
      import { User } from './user.model';
      
      @Component({
        selector: 'app-user',
        template: '<p>{{ user.name }} ({{ user.email }})</p>'
      })
      export class UserComponent {
        user: User = new User(1, 'John Doe', 'john.doe@example.com');
      }
            `
          },
          {
            "filename": "user.interface.ts",
            "title": "Interface Example in Angular",
            "description": "An interface defining the structure of a User object and its use in a service.",
            "code": `
      export interface IUser {
        id: number;
        name: string;
        email: string;
      }
      
      // In a service:
      import { Injectable } from '@angular/core';
      import { IUser } from './user.interface';
      
      @Injectable({
        providedIn: 'root'
      })
      export class UserService {
        getUser(): IUser {
          return { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
        }
      }
      
      // In a component:
      import { Component } from '@angular/core';
      import { UserService } from './user.service';
      import { IUser } from './user.interface';
      
      @Component({
        selector: 'app-user-info',
        template: '<p>{{ user?.name }} ({{ user?.email }})</p>'
      })
      export class UserInfoComponent {
        user: IUser;
      
        constructor(private userService: UserService) {
          this.user = this.userService.getUser();
        }
      }
            `
          },
          {
            "filename": "admin.model.ts",
            "title": "Extends Example in Angular",
            "description": "The Admin model extends the User model to add additional properties and usage in an Angular component.",
            "code": `
      import { User } from './user.model';
      
      export class Admin extends User {
        constructor(
          id: number,
          name: string,
          email: string,
          public adminLevel: number
        ) {
          super(id, name, email);
        }
      }
      
      // In a component:
      import { Component } from '@angular/core';
      import { Admin } from './admin.model';
      
      @Component({
        selector: 'app-admin',
        template: '<p>{{ admin.name }} is Admin Level: {{ admin.adminLevel }}</p>'
      })
      export class AdminComponent {
        admin: Admin = new Admin(1, 'Admin User', 'admin@example.com', 5);
      }
            `
          },
          {
            "filename": "typeof-example.ts",
            "title": "Typeof Example in Angular",
            "description": "This example demonstrates how to use typeof to infer types in an Angular component.",
            "code": `
      const user = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
      };
      
      type UserType = typeof user;
      
      @Component({
        selector: 'app-user-card',
        template: '<p>{{ newUser.name }} ({{ newUser.email }})</p>'
      })
      export class UserCardComponent {
        newUser: UserType = {
          id: 2,
          name: 'Jane Doe',
          email: 'jane.doe@example.com'
        };
      }
            `
          },
          {
            "filename": "constant-example.ts",
            "title": "Constant Example in Angular",
            "description": "This example demonstrates how to declare and use a constant in Angular.",
            "code": `
      export const API_URL = 'https://api.example.com';
      
      // In a service:
      import { Injectable } from '@angular/core';
      import { HttpClient } from '@angular/common/http';
      import { API_URL } from './constants';
      
      @Injectable({
        providedIn: 'root'
      })
      export class ApiService {
        constructor(private http: HttpClient) {}
      
        fetchData() {
          return this.http.get(API_URL + '/data');
        }
      }
            `
          },
          {
            "filename": "readonly-constant-example.ts",
            "title": "Read-only Constant Example in Angular",
            "description": "This example demonstrates how to declare and use a read-only constant in an Angular service.",
            "code": `
      export class Config {
        public readonly API_KEY = '12345-ABCDE';
      }
      
      // In a service:
      import { Injectable } from '@angular/core';
      import { Config } from './config';
      
      @Injectable({
        providedIn: 'root'
      })
      export class ConfigService {
        constructor(private config: Config) {}
      
        getApiKey() {
          return this.config.API_KEY;
        }
      }
            `
          },
          {
            "filename": "enum-example.ts",
            "title": "Enum Example in Angular",
            "description": "This example demonstrates how to use an enum in Angular and pass it to a component.",
            "code": `
      export enum UserRole {
        Admin = 'Admin',
        User = 'User',
        Guest = 'Guest'
      }
      
      // In a component:
      import { Component } from '@angular/core';
      import { UserRole } from './user-role.enum';
      
      @Component({
        selector: 'app-user-role',
        template: '<p>The current user role is {{ currentUserRole }}</p>'
      })
      export class UserRoleComponent {
        currentUserRole: UserRole = UserRole.Admin;
      }
            `
          }
        ]
      },
      {
        "title": "MaxLength Directive in Angular",
        "description": "This example demonstrates how to create and use a custom MaxLength directive in Angular to limit the length of input fields.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "maxlength.directive.ts",
            "title": "MaxLength Directive Code",
            "description": "This custom directive limits the maximum length of input fields.",
            "code": `
      import { Directive, HostListener, Input } from '@angular/core';
      import { NgControl } from '@angular/forms';
      
      @Directive({
        selector: '[appMaxLength]'
      })
      export class MaxLengthDirective {
        @Input() appMaxLength!: number;
      
        constructor(private control: NgControl) {}
      
        @HostListener('input', ['$event'])
        onInputChange(event: Event): void {
          const input = event.target as HTMLInputElement;
          const currentValue = input.value;
      
          if (currentValue.length > this.appMaxLength) {
            this.control.control?.setValue(currentValue.substring(0, this.appMaxLength));
          }
        }
      }
            `
          },
          {
            "filename": "app.module.ts",
            "title": "Module Registration",
            "description": "This example shows how to declare the MaxLength directive in the Angular module.",
            "code": `
      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      import { FormsModule } from '@angular/forms';
      import { AppComponent } from './app.component';
      import { MaxLengthDirective } from './maxlength.directive';
      
      @NgModule({
        declarations: [
          AppComponent,
          MaxLengthDirective
        ],
        imports: [
          BrowserModule,
          FormsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
      })
      export class AppModule { }
            `
          },
          {
            "filename": "app.component.ts",
            "title": "Component Using MaxLength Directive",
            "description": "This component uses the custom MaxLength directive to limit the input field length.",
            "code": `
      import { Component } from '@angular/core';
      
      @Component({
        selector: 'app-root',
        template: \`
          <div>
            <label for="name">Name (Max 10 characters): </label>
            <input id="name" type="text" [(ngModel)]="name" appMaxLength="10" />
            <p>Entered Name: {{ name }}</p>
          </div>
        \`,
      })
      export class AppComponent {
        name: string = '';
      }
            `
          },
          {
            "filename": "app.component.html",
            "title": "HTML Template with MaxLength Directive",
            "description": "This HTML template shows the use of the MaxLength directive on an input field.",
            "code": `
      <div>
        <label for="name">Name (Max 10 characters): </label>
        <input id="name" type="text" [(ngModel)]="name" appMaxLength="10" />
        <p>Entered Name: {{ name }}</p>
      </div>
            `
          }
        ]
      },
      {
        "title": "Angular Inbuilt Pipes and String Functions with Sample Outputs",
        "description": "This example covers Angular inbuilt pipes like DatePipe, DecimalPipe, PercentPipe, CurrencyPipe, and string functions like uppercase, lowercase, slice, and splice. Each example shows its usage and formatted outputs.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "app.component.html",
            "title": "HTML Example for Inbuilt Pipes and String Functions",
            "description": "This template includes Angular pipes and string functions for handling date formatting, numbers, and string manipulations like uppercase, lowercase, slice, and more.",
            "code": `
      <!-- Date Pipe Examples -->
      <h3>DatePipe</h3>
      <p>Short Date: {{ today | date:'short' }}</p>
      <p>Long Date: {{ today | date:'longDate' }}</p>
      <p>Custom Date (MM-dd-yyyy): {{ today | date:'MM-dd-yyyy' }}</p>
      <p>Full DateTime: {{ today | date:'full' }}</p>
      
      <!-- Decimal Pipe Examples -->
      <h3>DecimalPipe</h3>
      <p>Default Decimal: {{ piValue | number }}</p>
      <p>1 Decimal Place: {{ piValue | number:'1.0-1' }}</p>
      <p>2 Decimal Places: {{ piValue | number:'1.0-2' }}</p>
      <p>Large Number with Commas: {{ largeNumber | number:'1.0-0' }}</p>
      
      <!-- Percent Pipe Examples -->
      <h3>PercentPipe</h3>
      <p>Basic Percent: {{ decimalValue | percent }}</p>
      
      <!-- Currency Pipe Examples -->
      <h3>CurrencyPipe</h3>
      <p>USD Currency: {{ moneyValue | currency:'USD' }}</p>
      
      <!-- String Manipulations -->
      <h3>String Functions</h3>
      <p>Original Text: {{ text }}</p>
      <p>Uppercase: {{ text | uppercase }}</p>
      <p>Lowercase: {{ text | lowercase }}</p>
      <p>Sliced Text (0-5): {{ text | slice:0:5 }}</p>
      <p>Splice Example: {{ spliceText }}</p>
            `
          },
          {
            "filename": "app.component.ts",
            "title": "Component Setup for Inbuilt Pipe and String Function Examples",
            "description": "This component initializes data for various Angular pipe examples and string manipulations like uppercase, lowercase, slice, and splice.",
            "code": `
      import { Component } from '@angular/core';
      
      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
      })
      export class AppComponent {
        today: Date = new Date();
        piValue: number = 3.14159;
        decimalValue: number = 0.6789;
        largeNumber: number = 123456789;
        moneyValue: number = 2500.50;
        text: string = 'Angular Example String';
        spliceText: string = this.spliceExample('Angular Example String', 7, 7, 'Modified');
      
        // Function to demonstrate 'splice'
        spliceExample(original: string, start: number, deleteCount: number, ...items: string[]): string {
          const strArray = original.split('');
          strArray.splice(start, deleteCount, ...items);
          return strArray.join('');
        }
      }
            `
          },
          {
            "filename": "string-pipe-output.txt",
            "title": "Sample Output for String Manipulations",
            "description": "Sample output for string manipulations like uppercase, lowercase, slice, and splice showing transformed strings.",
            "code": `
      Original Text: Angular Example String
      
      Uppercase: ANGULAR EXAMPLE STRING
      Lowercase: angular example string
      Sliced Text (0-5): Angul
      Splice Example: AngularModifiedString
            `
          },
          {
            "filename": "date-pipe-output.txt",
            "title": "Sample Output for DatePipe",
            "description": "Sample output for various DatePipe formats, showing how dates are transformed.",
            "code": `
      Today: 2024-10-12 (for example)
      
      Short Date: 10/12/24
      Long Date: October 12, 2024
      Custom Date (MM-dd-yyyy): 10-12-2024
      Full DateTime: Saturday, October 12, 2024 at 12:00:00 AM GMT+5:30
            `
          },
          {
            "filename": "decimal-pipe-output.txt",
            "title": "Sample Output for DecimalPipe",
            "description": "Sample output for various DecimalPipe formats, showing how numbers are rounded and formatted.",
            "code": `
      Pi Value: 3.14159
      
      Default Decimal: 3.142
      1 Decimal Place: 3.1
      2 Decimal Places: 3.14
      Large Number with Commas: 123,456,789
            `
          },
          {
            "filename": "percent-pipe-output.txt",
            "title": "Sample Output for PercentPipe",
            "description": "Sample output for PercentPipe, showing how decimal values are converted into percentage format.",
            "code": `
      Decimal Value: 0.6789
      
      Basic Percent: 67.89%
            `
          },
          {
            "filename": "currency-pipe-output.txt",
            "title": "Sample Output for CurrencyPipe",
            "description": "Sample output for CurrencyPipe, showing how money values are formatted in different currencies.",
            "code": `
      Money Value: 2500.50
      
      USD Currency: $2,500.50
            `
          },
          {
            "filename": "app.module.ts",
            "title": "Module Setup for Pipes and String Functions",
            "description": "Module setup for HttpClientModule (if needed for API calls) and importing required Angular modules.",
            "code": `
      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      import { AppComponent } from './app.component';
      
      @NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule],
        bootstrap: [AppComponent],
      })
      export class AppModule {}
            `
          }
        ]
      },
      {
        "title": "RxJS Operators in Angular with Full Examples",
        "description": "This example covers RxJS operators like switchMap, mergeMap, concatMap, exhaustMap, and inbuilt operators such as map, filter, tap, catchError, retry, etc. Each concept is explained with examples using a single .ts and .html file, including sample outputs.",
        "isGroup": true,
        "codeLists": [
          {
            "filename": "app.component.ts",
            "title": "Component Setup for RxJS Operators",
            "description": `
            1) switchMap: This operator switches to a new observable whenever a new emission occurs, canceling previous inner observables. Useful for HTTP requests where only the latest result matters. 
            2) mergeMap: This operator maps each value to an observable and flattens them concurrently without canceling previous ones. Useful for parallel processing.
            3) concatMap: This operator waits for each observable to complete before subscribing to the next. Useful for ensuring that observables are handled sequentially.
            4) exhaustMap: This operator ignores new emissions until the current observable completes. Useful for ignoring duplicate API calls while a request is in progress.
            5) map: Transforms each value from the source observable based on a provided function. Useful for transforming data on the fly.
            6) filter: Filters values emitted by the source observable based on a condition. Useful for removing unwanted values.
            7) tap: Intercepts emissions to perform side-effects without modifying them. Often used for logging or debugging.
            8) retry: Automatically retries the source observable in case of an error. Useful for network requests that may fail intermittently.
            9) catchError: Catches errors and returns a new observable. Useful for handling errors gracefully in streams.
            `,
            "code": `
      import { Component } from '@angular/core';
      import { HttpClient } from '@angular/common/http';
      import { of, from, interval, Observable } from 'rxjs';
      import { map, filter, tap, catchError, retry, switchMap, mergeMap, concatMap, exhaustMap, take } from 'rxjs/operators';
      
      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
      })
      export class AppComponent {
        data: any = [];
        apiData: any = [];
        operatorResults: any = {
          switchMap: [],
          mergeMap: [],
          concatMap: [],
          exhaustMap: []
        };
        
        constructor(private http: HttpClient) {}
      
        // Example using switchMap
        switchMapExample() {
          const numbers$ = from([1, 2, 3]);
          numbers$.pipe(
            switchMap((id) => this.fetchData(id))
          ).subscribe(result => {
            this.operatorResults.switchMap.push(result);
          });
        }
      
        // Example using mergeMap
        mergeMapExample() {
          const numbers$ = from([1, 2, 3]);
          numbers$.pipe(
            mergeMap((id) => this.fetchData(id))
          ).subscribe(result => {
            this.operatorResults.mergeMap.push(result);
          });
        }
      
        // Example using concatMap
        concatMapExample() {
          const numbers$ = from([1, 2, 3]);
          numbers$.pipe(
            concatMap((id) => this.fetchData(id))
          ).subscribe(result => {
            this.operatorResults.concatMap.push(result);
          });
        }
      
        // Example using exhaustMap
        exhaustMapExample() {
          const numbers$ = from([1, 2, 3]);
          numbers$.pipe(
            exhaustMap((id) => this.fetchData(id))
          ).subscribe(result => {
            this.operatorResults.exhaustMap.push(result);
          });
        }
      
        // Helper function to simulate an API call
        fetchData(id: number): Observable<any> {
          return this.http.get(\`https://jsonplaceholder.typicode.com/posts/\${id}\`);
        }
      
        // Example of map operator
        mapExample() {
          const numbers$ = of(1, 2, 3, 4);
          numbers$.pipe(
            map(value => value * 10)
          ).subscribe(result => {
            console.log('Map Result:', result);
          });
        }
      
        // Example of filter operator
        filterExample() {
          const numbers$ = of(1, 2, 3, 4, 5, 6);
          numbers$.pipe(
            filter(value => value % 2 === 0)
          ).subscribe(result => {
            console.log('Filter Result:', result);
          });
        }
      
        // Example of tap operator
        tapExample() {
          const numbers$ = of(1, 2, 3);
          numbers$.pipe(
            tap(value => console.log('Before Multiply:', value)),
            map(value => value * 2),
            tap(value => console.log('After Multiply:', value))
          ).subscribe();
        }
      
        // Example of retry and catchError
        retryExample() {
          this.http.get('https://jsonplaceholder.typicode.com/invalid-url').pipe(
            retry(3),
            catchError(error => {
              console.error('Error:', error);
              return of('Error occurred');
            })
          ).subscribe(result => {
            console.log('Retry Result:', result);
          });
        }
      
        // Trigger all operator examples
        runAllExamples() {
          this.switchMapExample();
          this.mergeMapExample();
          this.concatMapExample();
          this.exhaustMapExample();
          this.mapExample();
          this.filterExample();
          this.tapExample();
          this.retryExample();
        }
      }
            `
          },
          {
            "filename": "app.component.html",
            "title": "HTML Example for Displaying RxJS Operator Results",
            "description": "This template shows how the results of various RxJS operator examples are displayed, along with API data being fetched dynamically.",
            "code": `
      <div>
        <h2>RxJS Operator Examples</h2>
        <button (click)="runAllExamples()">Run All Examples</button>
      
        <h3>1) switchMap</h3>
        <pre>{{ operatorResults.switchMap | json }}</pre>
      
        <h3>2) mergeMap</h3>
        <pre>{{ operatorResults.mergeMap | json }}</pre>
      
        <h3>3) concatMap</h3>
        <pre>{{ operatorResults.concatMap | json }}</pre>
      
        <h3>4) exhaustMap</h3>
        <pre>{{ operatorResults.exhaustMap | json }}</pre>
      
        <h3>5) Map Operator</h3>
        <p>Check the console for 'Map Result'.</p>
      
        <h3>6) Filter Operator</h3>
        <p>Check the console for 'Filter Result'.</p>
      
        <h3>7) Tap Operator</h3>
        <p>Check the console for 'Tap Operator' output.</p>
      
        <h3>8) Retry and CatchError</h3>
        <p>Check the console for 'Retry Result' after multiple attempts.</p>
      </div>
            `
          },
          {
            "filename": "rxjs-operator-output.txt",
            "title": "Sample Output for RxJS Operators",
            "description": "This file contains a sample output for switchMap, mergeMap, concatMap, and exhaustMap operator results.",
            "code": `
      switchMap Result: [
        { userId: 1, id: 1, title: 'Sample Title 1', body: 'Sample Body 1' },
        { userId: 1, id: 2, title: 'Sample Title 2', body: 'Sample Body 2' },
        { userId: 1, id: 3, title: 'Sample Title 3', body: 'Sample Body 3' }
      ]
      
      mergeMap Result: [
        { userId: 1, id: 1, title: 'Sample Title 1', body: 'Sample Body 1' },
        { userId: 1, id: 2, title: 'Sample Title 2', body: 'Sample Body 2' },
        { userId: 1, id: 3, title: 'Sample Title 3', body: 'Sample Body 3' }
      ]
      
      concatMap Result: [
        { userId: 1, id: 1, title: 'Sample Title 1', body: 'Sample Body 1' },
        { userId: 1, id: 2, title: 'Sample Title 2', body: 'Sample Body 2' },
        { userId: 1, id: 3, title: 'Sample Title 3', body: 'Sample Body 3' }
      ]
      
      exhaustMap Result: [
        { userId: 1, id: 1, title: 'Sample Title 1', body: 'Sample Body 1' },
        { userId: 1, id: 2, title: 'Sample Title 2', body: 'Sample Body 2' },
        { userId: 1, id: 3, title: 'Sample Title 3', body: 'Sample Body 3' }
      ]
            `
          }]
        },
        {
          "title": "Reusable Alert Message Component with Classes and Click Event",
          "description": "This example demonstrates how to create a reusable alert message component in Angular. The component accepts dynamic classes, message content, and emits an event when clicked.",
          "isGroup": true,
          "codeLists": [
            {
              "filename": "alert-message.component.ts",
              "title": "Reusable Alert Message Component",
              "description": `
              1) Create a reusable alert component that accepts inputs for message, alert classes, and close event.
              2) Use @Input() to dynamically accept alert message and class names.
              3) Emit an event when the alert is clicked.
              `,
              "code": `
        import { Component, Input, Output, EventEmitter } from '@angular/core';
        
        @Component({
          selector: 'app-alert-message',
          template: \`
            <div 
              [ngClass]="alertClasses"
              (click)="onAlertClick()"
              role="alert"
              class="alert"
            >
              {{ message }}
            </div>
          \`
        })
        export class AlertMessageComponent {
          @Input() message: string = 'This is an alert message!';
          @Input() alertClasses: string[] = ['alert-primary'];
          @Output() alertClick = new EventEmitter<void>();
        
          onAlertClick() {
            this.alertClick.emit();
          }
        }
              `
            },
            {
              "filename": "app.component.ts",
              "title": "Parent Component Using Reusable Alert",
              "description": `
              1) The parent component uses the reusable alert component, passing dynamic inputs for the message and alert classes.
              2) A click event handler is added to handle the alert click action.
              `,
              "code": `
        import { Component } from '@angular/core';
        
        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
        })
        export class AppComponent {
          alertMessage: string = 'This is a warning alert!';
          alertClasses: string[] = ['alert-warning'];
        
          onAlertClicked() {
            console.log('Alert was clicked!');
          }
        }
              `
            },
            {
              "filename": "app.component.html",
              "title": "HTML for Parent Component",
              "description": `
              1) The parent component renders the reusable alert component, passing in the dynamic alert message and alert classes via [message] and [alertClasses] inputs.
              2) The alertClick event is handled by the (alertClick) output, executing the click handler in the parent.
              `,
              "code": `
        <div class="container">
          <h2>Reusable Alert Example</h2>
          <app-alert-message
            [message]="alertMessage"
            [alertClasses]="alertClasses"
            (alertClick)="onAlertClicked()"
          ></app-alert-message>
        </div>
              `
            },
            {
              "filename": "app.component.css",
              "title": "Custom CSS for Alerts",
              "description": "Custom CSS for different alert types, using Bootstrap's alert styles for demonstration. These can be extended with additional classes.",
              "code": `
        .alert {
          padding: 15px;
          margin-bottom: 20px;
          border: 1px solid transparent;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .alert-primary {
          background-color: #cce5ff;
          border-color: #b8daff;
          color: #004085;
        }
        
        .alert-warning {
          background-color: #fff3cd;
          border-color: #ffeeba;
          color: #856404;
        }
        
        .alert-danger {
          background-color: #f8d7da;
          border-color: #f5c6cb;
          color: #721c24;
        }
              `
            },
            {
              "filename": "app.module.ts",
              "title": "Module Setup for Reusable Alert",
              "description": "Module setup for the reusable alert message component, importing Angular modules and declaring the component.",
              "code": `
        import { NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { AlertMessageComponent } from './alert-message/alert-message.component';
        
        @NgModule({
          declarations: [
            AppComponent,
            AlertMessageComponent
          ],
          imports: [
            BrowserModule
          ],
          providers: [],
          bootstrap: [AppComponent]
        })
        export class AppModule { }
              `
            },
            {
              "filename": "output-example.txt",
              "title": "Sample Output for Reusable Alert",
              "description": "The output will display an alert box. Clicking on the alert will trigger the console log message 'Alert was clicked!'.",
              "code": `
        Sample output:
        - A warning alert with the message "This is a warning alert!" is displayed.
        - Clicking on the alert prints "Alert was clicked!" in the console.
              `
            }
          ]
        },
        {
          "title": "Reusable Filter Component with Enum for Sorting",
          "description": "This example demonstrates how to create a reusable filter component using an enum for sorting options.",
          "isGroup": true,
          "codeLists": [
            {
              "filename": "sort.enums.ts",
              "title": "Enum for Sort Options",
              "description": `
              1) Define an enum to represent sorting options in a type-safe way.
              2) Each option corresponds to a specific sorting behavior.
              `,
              "code": `
        export enum SortOption {
          Ascending = 'ascending',
          Descending = 'descending',
          NoSort = 'noSort'
        }
              `
            },
            {
              "filename": "sort.constants.ts",
              "title": "Constant File for Sort Options",
              "description": `
              1) Define a constant array of sorting options using the SortOption enum.
              2) Each object contains a label and a corresponding value for sorting.
              `,
              "code": `
        import { SortOption } from './sort.enums';
        
        export const SORT_OPTIONS = [
          { label: 'Ascending', value: SortOption.Ascending },
          { label: 'Descending', value: SortOption.Descending },
          { label: 'No Sort', value: SortOption.NoSort }
        ];
              `
            },
            {
              "filename": "filter.component.ts",
              "title": "Reusable Filter Component",
              "description": `
              1) Import the constant sorting options and loop through them to create radio buttons.
              2) Emit the selected sorting option back to the parent component.
              `,
              "code": `
        import { Component, Output, EventEmitter } from '@angular/core';
        import { SORT_OPTIONS } from './sort.constants';
        import { SortOption } from './sort.enums';
        
        @Component({
          selector: 'app-filter',
          template: \`
            <div>
              <button (click)="toggleFilter()">
                {{ showFilter ? 'Hide' : 'Show' }} Filter Options
              </button>
              <div *ngIf="showFilter">
                <h4>Sort By:</h4>
                <label *ngFor="let option of sortOptions">
                  <input
                    type="radio"
                    name="sort"
                    [value]="option.value"
                    (change)="onFilterChange(option.value)"
                    [checked]="selectedFilter === option.value"
                  />
                  {{ option.label }}
                </label>
              </div>
            </div>
          \`
        })
        export class FilterComponent {
          @Output() filterChange = new EventEmitter<SortOption>();
        
          showFilter = false;
          selectedFilter: SortOption = SortOption.NoSort;
          sortOptions = SORT_OPTIONS;
        
          toggleFilter() {
            this.showFilter = !this.showFilter;
          }
        
          onFilterChange(value: SortOption) {
            this.selectedFilter = value;
            this.filterChange.emit(value);
          }
        }
              `
            },
            {
              "filename": "app.component.ts",
              "title": "Parent Component Using Reusable Filter",
              "description": `
              1) The parent component uses the reusable filter component and handles the emitted sorting option.
              2) It logs the selected sorting option to the console.
              `,
              "code": `
        import { Component } from '@angular/core';
        import { SortOption } from './sort.enums';
        
        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
        })
        export class AppComponent {
          selectedFilter: SortOption = SortOption.NoSort;
        
          onFilterSelected(value: SortOption) {
            this.selectedFilter = value;
            console.log('Selected filter:', value);
          }
        }
              `
            },
            {
              "filename": "app.component.html",
              "title": "HTML for Parent Component",
              "description": `
              1) The parent component renders the reusable filter component.
              2) It listens for the filter change event to update the selected filter.
              `,
              "code": `
        <div class="container">
          <h2>Filter Example</h2>
          <app-filter (filterChange)="onFilterSelected($event)"></app-filter>
        
          <div *ngIf="selectedFilter">
            <h3>Selected Filter: {{ selectedFilter }}</h3>
          </div>
        </div>
              `
            },
            {
              "filename": "app.component.css",
              "title": "CSS for Parent Component",
              "description": "Basic styles for the filter component.",
              "code": `
        .container {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        
        h2 {
          margin-bottom: 10px;
        }
        
        h4 {
          margin: 10px 0;
        }
              `
            },
            {
              "filename": "app.module.ts",
              "title": "Module Setup for Reusable Filter",
              "description": "Module setup for the reusable filter component, importing Angular modules and declaring the component.",
              "code": `
        import { NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { FilterComponent } from './filter/filter.component';
        
        @NgModule({
          declarations: [
            AppComponent,
            FilterComponent
          ],
          imports: [
            BrowserModule
          ],
          providers: [],
          bootstrap: [AppComponent]
        })
        export class AppModule { }
              `
            },
            {
              "filename": "output-example.txt",
              "title": "Sample Output for Reusable Filter",
              "description": "The output will display a button to show/hide filter options. When options are visible, radio buttons for ascending, descending, and no sort will be shown. Selecting any option will display the selected filter below.",
              "code": `
        Sample output:
        - Button to Show Filter Options.
        - Filter options are displayed with radio buttons for Ascending, Descending, and No Sort.
        - Selecting an option updates the displayed selected filter.
              `
            }
          ]
        },
        {
          "title": "Reusable Blocks Using ng-template and ngTemplateOutlet",
          "description": "This example demonstrates how to reuse blocks of code in an Angular component using ng-template and ngTemplateOutlet.",
          "isGroup": true,
          "codeLists": [
            {
              "filename": "app.component.ts",
              "title": "Main Component with Reusable Templates",
              "description": `
              1) Import necessary Angular core components.
              2) Define a component that includes reusable templates using ng-template.
              3) Use ngTemplateOutlet to render templates dynamically in the component.
              `,
              "code": `
        import { Component } from '@angular/core';
        
        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        })
        export class AppComponent {
          items = ['Item 1', 'Item 2', 'Item 3'];
        
          // Method to display a message for each item
          getMessage(item: string): string {
            return \`You selected \${item}\`;
          }
        }
              `
            },
            {
              "filename": "app.component.html",
              "title": "HTML Template for Main Component",
              "description": `
              1) Use ng-template to define reusable blocks of code.
              2) Utilize ngTemplateOutlet to insert the template in multiple locations.
              `,
              "code": `
        <div class="container">
          <h2>Reusable Template Example</h2>
          
          <!-- Define a reusable template -->
          <ng-template #itemTemplate let-item="item">
            <div class="item">
              <h4>{{ item }}</h4>
              <p>{{ getMessage(item) }}</p>
            </div>
          </ng-template>
          
          <!-- Use ngTemplateOutlet to render the template for each item -->
          <div *ngFor="let item of items">
            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
          </div>
        
          <hr />
        
          <!-- Render the same template in a different context -->
          <h3>Selected Items</h3>
          <div *ngFor="let item of items">
            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
          </div>
        </div>
              `
            },
            {
              "filename": "app.component.scss",
              "title": "Styles for Main Component",
              "description": "Basic styles for the reusable template.",
              "code": `
        .container {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        
        .item {
          margin-bottom: 10px;
        }
        
        h2 {
          margin-bottom: 10px;
        }
        
        h4 {
          margin: 5px 0;
        }
              `
            },
            {
              "filename": "output-example.txt",
              "title": "Sample Output for Reusable Blocks",
              "description": "The output will show a list of items along with their respective messages. The same template is reused in two different sections of the component.",
              "code": `
        Sample output:
        - Heading "Reusable Template Example"
        - List of items displayed with their messages.
        - A horizontal rule followed by another section "Selected Items" that reuses the same item template.
              `
            },
            {
              "filename": "app.module.ts",
              "title": "Module Setup for the Component",
              "description": "Module setup to include the main component.",
              "code": `
        import { NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        
        @NgModule({
          declarations: [
            AppComponent
          ],
          imports: [
            BrowserModule
          ],
          providers: [],
          bootstrap: [AppComponent]
        })
        export class AppModule { }
              `
            }
          ]
        }
        
                
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
            
           
      
           
      
    ]
  }
];

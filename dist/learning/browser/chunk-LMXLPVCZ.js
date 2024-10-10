import{$ as h,A as ie,B as oe,F,H as re,I as ae,J as se,R as w,S as le,W as ce,Y as de,Z as ue,_ as I,a as $,aa as B,b as K,c as Z,d as Q,e as v,f as R,g as m,h as X,i as G,j as d,k as ee,n as V,o as S,p as b,r as a,s as C,t as E,u as p,y as te,z as ne}from"./chunk-UF5NZYC3.js";import{a as l,b as c}from"./chunk-2NFLSA4Y.js";var gt=[{id:1,title:"Array Concepts",description:"Array methods all with examples",image:"",groupBy:[],filesList:[{title:"What is Array",description:`
        1) An array is a data structure used to store multiple elements in a single variable.
        2) You can access elements by their index (position) in the array and assign values to specific positions.`,isGroup:!1,codeLists:[{filename:"arrayAccess.js",title:"Accessing and Assigning Values in Array",description:"1) Access elements using their index. 2) Assign a value to a specific index.",code:`
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
                  `}]},{title:"Array Filter Method",description:"The filter() method creates a new array with all elements that pass the test implemented by the provided function.",isGroup:!1,codeLists:[{filename:"filter.js",title:"Array Filter Example",description:"1) Filter is used to create a new array with only the elements that pass a specified condition.",code:`
                  let arr = [1, 2, 3, 4, 5]; // an array of numbers
      
                  // Filter: keep only even numbers
                  let filteredArr = arr.filter(x => x % 2 === 0); // [2, 4] will be returned.
      
                  // sample output
                  console.log(filteredArr); // [2, 4]
                  `}]},{title:"Find and Find Last",description:`
        1) Find returns the value of the first element in the array that satisfies the provided testing function
        2) Find Last returns the value of the last element in the array that satisfies the provided testing function
        `,isGroup:!0,codeLists:[{filename:"find.js",title:"Array Find example",description:`
            1) Find returns the value of the first element in the array that satisfies the provided testing function
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Find (returns the first element greater than 8)
                  let foundElement = arr.find(element => element > 8); // 9 will be returned.
                  
                  // sample output
                  console.log(foundElement); // 9
                  `},{filename:"findLast.js",title:"Array Find Last example",description:`
            1) Find Last returns the value of the last element in the array that satisfies the provided testing function
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // FindLast (returns the last element greater than 8)
                  let foundLastElement = arr.findLast(element => element > 8); // 33 will be returned.
                  
                  // sample output
                  console.log(foundLastElement); // 33
                  `}]},{title:"Find Index and Find Last Index",description:`
        1) Find Index returns the index of the first element in the array that satisfies the provided testing function
        2) Find Last Index returns the index of the last element in the array that satisfies the provided testing function
        `,isGroup:!0,codeLists:[{filename:"findIndex.js",title:"Array Find Index example",description:`
            1) Find Index returns the index of the first element in the array that satisfies the provided testing function
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // FindIndex (returns the index of the first element greater than 8)
                  let foundIndex = arr.findIndex(element => element > 8); // 3 will be returned.
                  
                  // sample output
                  console.log(foundIndex); // 3
                  `},{filename:"findLastIndex.js",title:"Array Find Last Index example",description:`
            1) Find Last Index returns the index of the last element in the array that satisfies the provided testing function
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // FindLastIndex (returns the index of the last element greater than 8)
                  let foundLastIndex = arr.findLastIndex(element => element > 8); // 4 will be returned.
                  
                  // sample output
                  console.log(foundLastIndex); // 4
                  `}]},{title:"Some and Every",description:`
        1) Some tests whether at least one element in the array passes the test implemented by the provided function
        2) Every tests whether all elements in the array pass the test implemented by the provided function
        `,isGroup:!0,codeLists:[{filename:"some.js",title:"Array Some example",description:`
            1) Some tests whether at least one element in the array passes the test implemented by the provided function
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Some (checks if any element in the array is greater than 30)
                  let hasElementGreaterThanThirty = arr.some(element => element > 30); // true will be returned.
                  
                  // sample output
                  console.log(hasElementGreaterThanThirty); // true
                  `},{filename:"every.js",title:"Array Every example",description:`
            1) Every tests whether all elements in the array pass the test implemented by the provided function
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Every (checks if every element in the array is greater than 4)
                  let isAllGreaterThanFour = arr.every(element => element > 4 ); // true will be returned.
                  
                  // sample output
                  console.log(isAllGreaterThanFour); // true
                  `}]},{title:"Map, ForEach, ForOf, and ForIn",description:`
        1) Map creates a new array by applying a function to each element of the original array
        2) ForEach executes a function for each element in the array
        3) ForOf iterates over the elements of an array
        4) ForIn iterates over the properties of an array
        `,isGroup:!0,codeLists:[{filename:"map.js",title:"Array Map example",description:`
            1) Map creates a new array by applying a function to each element of the original array
            `,code:`
                  let arr = [1, 2, 3, 4]; // new array
                  
                  // Map (applies a function to each element)
                  let newArr = arr.map(element => element * 2); // [2, 4, 6, 8] will be returned.
                  
                  // sample output
                  console.log(newArr); // [2, 4, 6, 8]
                  `},{filename:"forEach.js",title:"Array ForEach example",description:`
            1) ForEach executes a function for each element in the array
            `,code:`
                  let arr = [1, 2, 3, 4]; // new array
                  
                  // ForEach (executes a function for each element)
                  arr.forEach(element => console.log(element)); // 1, 2, 3, 4 will be logged.
                  `},{filename:"forOf.js",title:"Array ForOf example",description:`
            1) ForOf iterates over the elements of an array
            `,code:`
                  let arr = [1, 2, 3, 4]; // new array
                  
                  // ForOf (iterates over the elements)
                  for (let element of arr) {
                    console.log(element); // 1, 2, 3, 4 will be logged.
                  }
                  `},{filename:"forIn.js",title:"Array ForIn example",description:`
            1) ForIn iterates over the properties of an array
            `,code:`
                  let arr = [1, 2, 3, 4]; // new array
                  
                  // ForIn (iterates over the properties)
                  for (let index in arr) {
                    console.log(index); // 0, 1, 2, 3 will be logged.
                  }
                  `}]},{title:"Push and Pop",description:`
        1) Push adds an element to the end of the array
        2) Pop removes the last element from the array
        `,isGroup:!0,codeLists:[{filename:"push.js",title:"Array Push example",description:`
            1) Push adds an element to the end of the array
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Push (adds an element to the end of the array)
                  arr.push(10); // [5, 6, 8, 9, 33, 10] will be the new array.
                  
                  // sample output
                  console.log(arr); // [5, 6, 8, 9, 33, 10]
                  `},{filename:"pop.js",title:"Array Pop example",description:`
            1) Pop removes the last element from the array
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Pop (removes the last element of the array)
                  let lastElement = arr.pop(); // 33 will be returned, and the array will become [5, 6, 8, 9].
                  
                  // sample output
                  console.log(lastElement); // 33
                  console.log(arr); // [5, 6, 8, 9]
                  `}]},{title:"Shift and Unshift",description:`
        1) Shift removes the first element from the array
        2) Unshift adds an element to the beginning of the array
        `,isGroup:!0,codeLists:[{filename:"shift .js",title:"Array Shift example",description:`
            1) Shift removes the first element from the array
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Shift (removes the first element of the array)
                  let firstElement = arr.shift(); // 5 will be returned, and the array will become [6, 8, 9, 33].
                  
                  // sample output
                  console.log(firstElement); // 5
                  console.log(arr); // [6, 8, 9, 33]
                  `},{filename:"unshift.js",title:"Array Unshift example",description:`
            1) Unshift adds an element to the beginning of the array
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Unshift (adds an element to the beginning of the array)
                  arr.unshift(3); // [3, 5, 6, 8, 9, 33] will be the new array.
                  
                  // sample output
                  console.log(arr); // [3, 5, 6, 8, 9, 33]
                  `}]},{title:"Concat and Slice",description:`
        1) Concat merges two or more arrays into a new array
        2) Slice returns a portion of the array into a new array
        `,isGroup:!0,codeLists:[{filename:"concat.js",title:"Array Concat example",description:`
            1) Concat merges two or more arrays into a new array
            `,code:`
                  let arr1 = [5, 6, 8];
                  let arr2 = [9, 33];
                  
                  // Concat (merges two arrays into one)
                  let mergedArray = arr1.concat(arr2); // [5, 6, 8, 9, 33] will be the new array.
                  
                  // sample output
                  console.log(mergedArray); // [5, 6, 8, 9, 33]
                  `},{filename:"slice.js",title:"Array Slice example",description:`
            1) Slice returns a portion of the array into a new array
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Slice (returns a portion of the array)
                  let slicedArray = arr.slice(1, 3); // [6, 8] will be returned.
                  
                  // sample output
                  console.log(slicedArray); // [6, 8]
                  `}]},{title:"Splice and Fill",description:`
        1) Splice changes the contents of an array by removing or replacing existing elements and/or adding new elements
        2) Fill changes all elements in an array to a static value from a start index to an end index
        `,isGroup:!0,codeLists:[{filename:"splice.js",title:"Array Splice example",description:`
            1) Splice changes the contents of an array by removing or replacing existing elements and/or adding new elements
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Splice (removes elements and optionally adds elements)
                  arr.splice(1, 2, 7, 10); // removes two elements starting at index 1, and adds 7 and 10.
                  
                  // sample output
                  console.log(arr); // [5, 7, 10, 9, 33]
                  `},{filename:"fill.js",title:"Array Fill example",description:`
            1) Fill changes all elements in an array to a static value from a start index to an end index
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Fill (fills the array from index 1 to 3 with value 0)
                  arr.fill(0, 1, 3); // [5, 0, 0, 9, 33] will be returned.
                  
                  // sample output
                  console.log(arr); // [5, 0, 0, 9, 33]
                  `}]},{title:"Join and IndexOf",description:`
        1) Join joins all elements of an array into a string
        2) IndexOf returns the first index at which a given element can be found in the array
        `,isGroup:!0,codeLists:[{filename:"join.js",title:"Array Join example",description:`
            1) Join joins all elements of an array into a string
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Join (joins elements of the array into a string separated by '-')
                  let joinedString = arr.join('-'); // '5-6-8-9-33' will be returned.
                  
                  // sample output
                  console.log(joinedString); // '5-6-8-9-33'
                  `},{filename:"indexOf.js",title:"Array IndexOf example",description:`
            1) IndexOf returns the first index at which a given element can be found in the array
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // IndexOf (returns the index of the first occurrence of 8)
                  let index = arr.indexOf(8); // 2 will be returned.
                  
                  // sample output
                  console.log(index); // 2
                  `}]},{title:"Flat and FlatMap",description:`
        1) Flat creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
        2) FlatMap first maps each element using a mapping function, then flattens the result into a new array
        `,isGroup:!0,codeLists:[{filename:"flat.js",title:"Array Flat example",description:`
            1) Flat creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
            `,code:`
                  let arr = [1, 2, [3, 4], [[5]]]; // new array
                  
                  // Flat (flattens the array up to depth 2)
                  let flattenedArr = arr.flat(2); // [1, 2, 3, 4, 5] will be returned.
                  
                  // sample output
                  console.log(flattenedArr); // [1, 2, 3, 4, 5]
                  `},{filename:"flatMap.js",title:"Array FlatMap example",description:`
            1) FlatMap first maps each element using a mapping function, then flattens the result into a new array
            `,code:`
                  let arr = [1, 2, 3]; // new array
                  
                  // FlatMap (maps each value and flattens the result)
                  let flatMappedArr = arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6] will be returned.
                  
                  // sample output
                  console.log(flatMappedArr); // [1, 2, 2, 4, 3, 6]
                  `}]},{title:"From and Of",description:`
        1) From creates a new array from an array-like or iterable object
        2) Of creates a new array with the provided arguments
        `,isGroup:!0,codeLists:[{filename:"from.js",title:"Array From example",description:`
            1) From creates a new array from an array-like or iterable object
            `,code:`
                  let str = 'hello'; // a string
                  
                  // Array.from (converts a string into an array of characters)
                  let arr = Array.from(str); // ['h', 'e', 'l', 'l', 'o'] will be returned.
                  
                  // sample output
                  console.log(arr); // ['h', 'e', 'l', 'l', 'o']
                  `},{filename:"of.js",title:"Array Of example",description:`
            1) Of creates a new array with the provided arguments
            `,code:`
                  // Array.of (creates an array from arguments)
                  let arr = Array.of(7, 9, 33); // [7, 9, 33] will be returned.
                  
                  // sample output
                  console.log(arr); // [7, 9, 33]
                  `}]},{title:"CopyWithin",description:`
        1) CopyWithin copies part of an array to another location in the same array
        `,isGroup:!1,codeLists:[{filename:"copyWithin.js",title:"Array CopyWithin example",description:`
            1) CopyWithin copies part of an array to another location in the same array
            `,code:`
                  let arr = [1, 2, 3, 4, 5]; // new array
                  
                  // CopyWithin (copies elements to index 0)
                  arr.copyWithin(0, 3); // [4, 5, 3, 4, 5] will be returned.
                  
                  // sample output
                  console.log(arr); // [4, 5, 3, 4, 5]
                  `}]},{title:"Reduce",description:`
        1) Reduce executes a reducer function on each element of the array, resulting in a single output value
        `,isGroup:!1,codeLists:[{filename:"reduce.js",title:"Array Reduce example",description:`
            1) Reduce executes a reducer function on each element of the array, resulting in a single output value
            `,code:`
                  let arr = [1, 2, 3, 4]; // new array
                  
                  // Reduce (sums all elements of the array)
                  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 10 will be returned.
                  
                  // sample output
                  console.log(sum); // 10
                  `}]},{title:"Sort and Reverse",description:`
        1) Sort sorts the elements of an array in place and returns the sorted array
        2) Reverse reverses the order of the elements in an array
        `,isGroup:!0,codeLists:[{filename:"sort.js",title:"Array Sort example",description:`
            1) Sort sorts the elements of an array in place and returns the sorted array
            `,code:`
                  let arr = [5, 33, 6, 9, 8]; // new array
                  
                  // Sort (sorts the array in ascending order)
                  arr.sort((a, b) => a - b); // [5, 6, 8, 9, 33] will be returned.
                  
                  // sample output
                  console.log(arr); // [5, 6, 8, 9, 33]
                  `},{filename:"reverse.js",title:"Array Reverse example",description:`
            1) Reverse reverses the order of the elements in an array
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Reverse (reverses the order of elements)
                  arr.reverse(); // [33, 9, 8, 6, 5] will be returned.
                  
                  // sample output
                  console.log(arr); // [33, 9, 8, 6, 5]
                  `}]},{title:"Includes",description:`
        1) Includes determines whether an array includes a certain value
        `,isGroup:!1,codeLists:[{filename:"includes.js",title:"Array Includes example",description:`
            1) Includes determines whether an array includes a certain value
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Includes (checks if the array includes the number 9)
                  let hasNine = arr.includes(9); // true will be returned.
                  
                  // sample output
                  console.log(hasNine); // true
                  `}]},{title:"Length",description:`
        1) Length returns the number of elements in an array
        `,isGroup:!1,codeLists:[{filename:"length.js",title:"Array Length example",description:`
            1) Length returns the number of elements in an array
            `,code:`
                  let arr = [5, 6, 8, 9, 33]; // new array
                  
                  // Length (returns the number of elements in the array)
                  let length = arr.length; // 5 will be returned.
                  
                  // sample output
                  console.log(length); // 5
                  `}]}]},{id:2,title:"Object Concepts",description:"Object methods all with examples",image:"",groupBy:[],isGroup:!0,filesList:[{title:"Object, How to access a key values",description:"In This example we can see group of examples like find index and last index",isGroup:!0,codeLists:[{filename:"Object.js",title:"Object",description:`
              1) Object will have key value pair
              2) Object is a collection of key-value pairs, where each key is a string and each value can be any type of data, including strings, numbers, booleans, arrays, functions, and even other objects.
            `,code:`
              const example = { 
                foo: true, 
                bar: true 
              };
              Object.keys(example); // ["foo", "bar"]
            `},{filename:"Objectvaluesaccess.js",title:"Access Values",description:`
              1) Object value can be accessed by dot notation or bracket notation
              2) Both notations can be used to access values
              3) Dot notation is used when the key is a valid JavaScript identifier, whereas bracket notation is used when the key is not a valid JavaScript identifier or when the key is a variable.
            `,code:`
              const example = { 
                foo: true, 
                bar: true 
              };
              console.log(example.foo); // true
              console.log(example['bar']); // true
            `},{filename:"Object.accessnestedlevel.js",title:"Access Nested Level",description:`
              1) To access nested level, use dot notation or bracket notation
              2) You can chain the notation to access deeper levels
              3) Nested objects can be accessed by chaining the dot notation or bracket notation
            `,code:`
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
            `}]},{title:"Assign Value to Object",description:"In This example we can see how to assign value to object",isGroup:!0,codeLists:[{filename:"AssignValueToObject.js",title:"Assign Value to Object",description:`
              1) To assign a value to an object, use the assignment operator (=)
              2) You can assign a value to a new key or update an existing key
            `,code:`
              const example = { 
                foo: true, 
                bar: true 
              };
              example.foo = false; // update existing key
              example.baz = 'new value'; // assign new key
              console.log(example); // { foo: false, bar: true, baz: 'new value' }
            `},{filename:"AssignValueToNestedObject.js",title:"Assign Value to Nested Object",description:`
              1) To assign a value to a nested object, use the dot notation or bracket notation
              2) You can assign a value to a new key or update an existing key
            `,code:`
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
            `}]},{title:"Create Object",description:"In This example we can see how to create object",isGroup:!0,codeLists:[{filename:"CreateObject.js",title:"Create Object",description:`
              1) To create an object, use the object literal syntax ({})
              2) You can also use the Object.create() method to create an object
            `,code:`
              const example = {}; // create empty object
              const example2 = Object.create({}); // create object using Object.create()
              console.log(example); // {}
              console.log(example2); // {}
            `},{filename:"CreateNestedObject.js",title:"Create Nested Object",description:`
              1) To create a nested object, use the object literal syntax ({})
              2) You can also use the Object.create() method to create a nested object
            `,code:`
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
            `}]},{title:"Concat Objects",description:"In This example we can see how to concat objects",isGroup:!0,codeLists:[{filename:"ConcatObjects.js",title:"Concat Objects",description:`
              1) To concat two objects, use the Object.assign() method
              2) You can also use the spread operator (...) to concat objects
            `,code:`
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
            `},{filename:"ConcatNestedObjects.js",title:"Concat Nested Objects",description:`
              1) To concat two nested objects, use the Object.assign() method
              2) You can also use the spread operator (...) to concat nested objects
            `,code:`
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
            `}]},{title:"Delete Key from Object",description:"In This example we can see how to delete key from object",isGroup:!0,codeLists:[{filename:"DeleteKeyFromObject.js",title:"Delete Key from Object",description:`
              1) To delete a key from an object, use the delete operator
              2) You can also use the Object.keys() method to get an array of keys and then use the splice() method to remove the key
            `,code:`
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
            `},{filename:"DeleteKeyFromNestedObject.js",title:"Delete Key from Nested Object",description:`
              1) To delete a key from a nested object, use the delete operator
              2) You can also use the Object.keys() method to get an array of keys and then use the splice() method to remove the key
            `,code:`
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
            `}]},{title:"Keys,Values,Entries",description:"In This example we can see group of examples like find index and last index",isGroup:!0,codeLists:[{filename:"Object.keys.js",title:"Keys",description:`
              1) Object.keys returns an array of the object's own enumerable property names
              2) It only returns the keys of the object's own properties, not the prototype chain
            `,code:`
              const example = { 
                foo: true, 
                bar: true 
              };
              Object.keys(example); // ["foo", "bar"]
            `},{filename:"Object.values.js",title:"Values",description:`
              1) Object.values returns an array of the object's own enumerable property values
              2) It only returns the values of the object's own properties, not the prototype chain
            `,code:`
              const example = { 
                foo: true, 
                bar: true 
              };
              Object.values(example); // [true, true]
            `},{filename:"Object.entries.js",title:"Entries",description:`
              1) Object.entries returns an array of the object's own enumerable property [key, value] pairs
              2) It only returns the entries of the object's own properties, not the prototype chain
            `,code:`
              const example = { 
                foo: true, 
                bar: true 
              };
              Object.entries(example); // [["foo", true], ["bar", true]]
            `}]},{title:"hasOwnProperty, hasOwn, in",description:"In This example we can see group of examples like find index and last index",isGroup:!0,codeLists:[{filename:"hasOwnProperty.js",title:"hasOwnProperty",description:`
              1) hasOwnProperty returns true if the specified property is a direct property of the object
              2) If property is present it will return true otherwise false
            `,code:`
              const example = {};
              example.hasOwnProperty("prop"); // false
            
              example.prop = "exists";
              example.hasOwnProperty("prop"); // true
            `},{filename:"Object.hasOwn.js",title:"hasOwn",description:`
              1) Object.hasOwn returns true if the specified property is a direct property of the object
              2) If property is present it will return true otherwise false
            `,code:`
              const example = {};
              Object.hasOwn(example, "prop"); // false
            
              example.prop = "exists";
              Object.hasOwn(example, "prop"); // true
            `},{filename:"inOperator.js",title:"in",description:`
              1) in operator returns true if the specified property is present in the object or its prototype chain
              2) If property is present it will return true otherwise false
            `,code:`
              const example = {};
              "prop" in example; // false
            
              example.prop = "exists";
              "prop" in example; // true
            `},{filename:"Object.is.js",title:"is",description:`
              1) Object.is returns true if the two values are the same value
              2) It checks for same-value equality, which means it checks if the two values are the same type and have the same value
            `,code:`
              const num1 = 0;
              const num2 = -0;
              Object.is(num1, num2); // false
            
              const str1 = "hello";
              const str2 = "hello";
              Object.is(str1, str2); // true
            `}]},{title:"Object Iteration Methods",description:"In This example we can see how to iterate over objects using different methods",isGroup:!0,codeLists:[{filename:"ForIn.js",title:"For In",description:`
              1) The for...in statement iterates over the enumerable properties of an object
              2) It returns the property names, not the property values
            `,code:`
              const example = { 
                foo: true, 
                bar: true, 
                baz: 'new value' 
              };
              for (const key in example) {
                console.log(key); // "foo", "bar", "baz"
              }
            `},{filename:"ForOf.js",title:"For Of",description:`
              1) The for...of statement iterates over the values of an iterable object
              2) It returns the property values, not the property names
            `,code:`
              const example = { 
                foo: true, 
                bar: true, 
                baz: 'new value' 
              };
              for (const value of Object.values(example)) {
                console.log(value); // true, true, "new value"
              }
            `},{filename:"ForEach.js",title:"ForEach",description:`
              1) The forEach() method executes a provided function once for each array element
              2) It can be used to iterate over the values of an object
            `,code:`
              const example = { 
                foo: true, 
                bar: true, 
                baz: 'new value' 
              };
              Object.values(example).forEach((value) => {
                console.log(value); // true, true, "new value"
              });
            `},{filename:"For.js",title:"For",description:`
              1) The for statement iterates over the properties of an object
              2) It returns the property names and values
            `,code:`
              const example = { 
                foo: true, 
                bar: true, 
                baz: 'new value' 
              };
              for (let i = 0; i < Object.keys(example).length; i++) {
                const key = Object.keys(example)[i];
                console.log(key, example[key]); // "foo" true, "bar" true, "baz" "new value"
              }
            `},{filename:"Entries.js",title:"Entries",description:`
              1) The entries() method returns an array of a given object's own enumerable property [key, value] pairs
              2) It can be used to iterate over the properties of an object
            `,code:`
              const example = { 
                foo: true, 
                bar: true, 
                baz: 'new value' 
              };
              for (const [key, value] of Object.entries(example)) {
                console.log(key, value); // "foo" true, "bar" true, "baz" "new value"
              }
            `}]}]},{id:3,title:"Array of object Concepts",description:"Object methods all with examples",image:"",groupBy:[],filesList:[{title:"Array of object",description:`
        1) An array of objects is a collection of multiple objects inside an array.`,isGroup:!1,codeLists:[{filename:"arrayOfObjects.js",title:"Array of Objects Example",description:`
              1) An array of objects is a collection of multiple objects inside an array.
              2) You can access an object by its index and access the properties of the object using dot notation.
            `,code:`
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
            `}]},{isGroup:!0,title:"Find and FindLast",description:"Examples for Array.find and Array.findLast with arrays of objects",codeLists:[{filename:"find.js",title:"Array.find Example",description:"1) The 'find' method returns the first element that satisfies the provided testing function. If not found, it returns undefined.",code:`
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
            `},{filename:"findLast.js",title:"Array.findLast Example",description:"1) The 'findLast' method returns the last element that satisfies the provided testing function. If not found, it returns undefined.",code:`
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
            `}]},{isGroup:!0,title:"FindIndex and FindLastIndex",description:"Examples for Array.findIndex and Array.findLastIndex with arrays of objects",codeLists:[{filename:"findIndex.js",title:"Array.findIndex Example",description:"1) The 'findIndex' method returns the index of the first element that satisfies the provided testing function. If not found, it returns -1.",code:`
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
            `},{filename:"findLastIndex.js",title:"Array.findLastIndex Example",description:"1) The 'findLastIndex' method returns the index of the last element that satisfies the provided testing function. If not found, it returns -1.",code:`
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
            `}]},{isGroup:!0,title:"Shift and Unshift",description:"Examples for Array.shift and Array.unshift with arrays of objects",codeLists:[{filename:"shift.js",title:"Array.shift Example",description:"1) The 'shift' method removes the first element from an array and returns it.",code:`
              let people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Remove the first element
              const firstPerson = people.shift();
              console.log(firstPerson);  // { name: 'John', age: 30 }
            `},{filename:"unshift.js",title:"Array.unshift Example",description:"1) The 'unshift' method adds one or more elements to the beginning of an array and returns the new length.",code:`
              let people = [
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Add a new person at the beginning
              const newLength = people.unshift({ name: 'Alice', age: 22 });
              console.log(people);  // [{ name: 'Alice', age: 22 }, { name: 'Jane', age: 25 }, { name: 'Jack', age: 35 }]
            `}]},{isGroup:!0,title:"Push and Pop",description:"Examples for Array.push and Array.pop with arrays of objects",codeLists:[{filename:"push.js",title:"Array.push Example",description:"1) The 'push' method adds one or more elements to the end of an array and returns the new length.",code:`
              let people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 }
              ];
  
              // Add a new person at the end
              const newLength = people.push({ name: 'Jack', age: 35 });
              console.log(people);  // [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Jack', age: 35 }]
            `},{filename:"pop.js",title:"Array.pop Example",description:"1) The 'pop' method removes the last element from an array and returns it.",code:`
              let people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Remove the last person
              const lastPerson = people.pop();
              console.log(lastPerson);  // { name: 'Jack', age: 35 }
            `}]},{isGroup:!0,title:"Some and Every",description:"Examples for Array.some and Array.every with arrays of objects",codeLists:[{filename:"some.js",title:"Array.some Example",description:"1) The 'some' method checks if at least one element in the array satisfies the provided testing function.",code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Check if there's any person older than 30
              const isOlderThan30 = people.some(person => person.age > 30);
              console.log(isOlderThan30);  // true
            `},{filename:"every.js",title:"Array.every Example",description:"1) The 'every' method checks if all elements in the array satisfy the provided testing function.",code:`
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
            `}]},{isGroup:!0,title:"Looping Methods: forEach, map, forIn, forOf, reduce, filter",description:"Examples for looping over arrays of objects using different looping methods.",codeLists:[{filename:"forEach.js",title:"Array.forEach Example",description:"1) The 'forEach' method executes a provided function once for each array element.",code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Use forEach to log each person's name
              people.forEach(person => console.log(person.name));
              // Output: John, Jane, Jack
            `},{filename:"map.js",title:"Array.map Example",description:"1) The 'map' method creates a new array populated with the results of calling a provided function on every element in the calling array.",code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Use map to create a new array of names
              const names = people.map(person => person.name);
              console.log(names);  // Output: ['John', 'Jane', 'Jack']
            `},{filename:"forIn.js",title:"for...in Example",description:"1) The 'for...in' statement iterates over all enumerable properties of an object.",code:`
              const person = { name: 'John', age: 30, city: 'New York' };
  
              // Use for...in to loop through properties of an object
              for (let key in person) {
                console.log(key + ': ' + person[key]);
              }
              // Output: name: John, age: 30, city: New York
            `},{filename:"forOf.js",title:"for...of Example",description:"1) The 'for...of' statement creates a loop iterating over iterable objects, like arrays.",code:`
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
            `},{filename:"reduce.js",title:"Array.reduce Example",description:"1) The 'reduce' method executes a reducer function on each element of the array, resulting in a single output value.",code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Use reduce to sum the ages of all people
              const totalAge = people.reduce((sum, person) => sum + person.age, 0);
              console.log(totalAge);  // Output: 90
            `},{filename:"filter.js",title:"Array.filter Example",description:"1) The 'filter' method creates a new array with all elements that pass the test implemented by the provided function.",code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Use filter to get people older than 30
              const olderThan30 = people.filter(person => person.age > 30);
              console.log(olderThan30);  // Output: [{ name: 'Jack', age: 35 }]
            `}]},{isGroup:!0,title:"Splice and Slice",description:"Examples for Array.splice and Array.slice with arrays of objects.",codeLists:[{filename:"splice.js",title:"Array.splice Example",description:"1) The 'splice' method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",code:`
              let people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Remove one element from index 1 and insert a new one
              const removed = people.splice(1, 1, { name: 'Jill', age: 28 });
              console.log(people);  // [{ name: 'John', age: 30 }, { name: 'Jill', age: 28 }, { name: 'Jack', age: 35 }]
              console.log(removed); // [{ name: 'Jane', age: 25 }]
            `},{filename:"slice.js",title:"Array.slice Example",description:"1) The 'slice' method returns a shallow copy of a portion of an array into a new array selected from start to end (end not included).",code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Get a portion of the array from index 0 to 2
              const slicedPeople = people.slice(0, 2);
              console.log(slicedPeople);  // [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
            `}]},{isGroup:!0,title:"Fill, Flat, and FlatMap",description:"Examples for Array.fill, Array.flat, and Array.flatMap with arrays of objects.",codeLists:[{filename:"fill.js",title:"Array.fill Example",description:"1) The 'fill' method fills all the elements of an array from a start index to an end index with a static value.",code:`
              let people = new Array(3).fill({ name: 'Unknown', age: 0 });
              console.log(people);  // [{ name: 'Unknown', age: 0 }, { name: 'Unknown', age: 0 }, { name: 'Unknown', age: 0 }]
            `},{filename:"flat.js",title:"Array.flat Example",description:"1) The 'flat' method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",code:`
              const nestedArray = [
                [{ name: 'John', age: 30 }],
                [{ name: 'Jane', age: 25 }],
                [{ name: 'Jack', age: 35 }]
              ];
  
              // Flatten the array of arrays into a single-level array
              const flatArray = nestedArray.flat();
              console.log(flatArray);  // [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Jack', age: 35 }]
            `},{filename:"flatMap.js",title:"Array.flatMap Example",description:"1) The 'flatMap' method first maps each element using a mapping function, then flattens the result into a new array.",code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Use flatMap to double the ages and flatten the result
              const agesDoubled = people.flatMap(person => [person.age, person.age * 2]);
              console.log(agesDoubled);  // [30, 60, 25, 50, 35, 70]
            `}]},{isGroup:!0,title:"Sort: Ascending and Descending",description:"Examples for sorting arrays of objects in ascending and descending order.",codeLists:[{filename:"sortAscending.js",title:"Sort in Ascending Order",description:"1) The 'sort' method can be used to sort an array of objects in ascending order based on a specific property.",code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Sort the array in ascending order based on age
              people.sort((a, b) => a.age - b.age);
              console.log(people);
              // Output: [{ name: 'Jane', age: 25 }, { name: 'John', age: 30 }, { name: 'Jack', age: 35 }]
            `},{filename:"sortDescending.js",title:"Sort in Descending Order",description:"1) The 'sort' method can be used to sort an array of objects in descending order based on a specific property.",code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Sort the array in descending order based on age
              people.sort((a, b) => b.age - a.age);
              console.log(people);
              // Output: [{ name: 'Jack', age: 35 }, { name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
            `}]},{isGroup:!0,title:"Sorting Strings",description:"Examples for sorting an array of objects by string properties in ascending and descending order.",codeLists:[{filename:"sortStringsAscending.js",title:"Sort Strings Ascending Example",description:"1) Sorts an array of objects by a string property in ascending order.",code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Sort by name in ascending order
              people.sort((a, b) => a.name.localeCompare(b.name));
              console.log(people);  // Output: [{ name: 'Jack', age: 35 }, { name: 'Jane', age: 25 }, { name: 'John', age: 30 }]
            `},{filename:"sortStringsDescending.js",title:"Sort Strings Descending Example",description:"1) Sorts an array of objects by a string property in descending order.",code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'Jack', age: 35 }
              ];
  
              // Sort by name in descending order
              people.sort((a, b) => b.name.localeCompare(a.name));
              console.log(people);  // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Jack', age: 35 }]
            `}]},{isGroup:!0,title:"Sorting Dates",description:"Examples for sorting an array of objects by date properties in ascending and descending order.",codeLists:[{filename:"sortDatesAscending.js",title:"Sort Dates Ascending Example",description:"1) Sorts an array of objects by a date property in ascending order.",code:`
              const people = [
                { name: 'John', dateOfBirth: new Date('1990-05-20') },
                { name: 'Jane', dateOfBirth: new Date('1995-08-15') },
                { name: 'Jack', dateOfBirth: new Date('1985-12-10') }
              ];
  
              // Sort by dateOfBirth in ascending order
              people.sort((a, b) => a.dateOfBirth - b.dateOfBirth);
              console.log(people);  // Output: [{ name: 'Jack', dateOfBirth: new Date('1985-12-10') }, { name: 'John', dateOfBirth: new Date('1990-05-20') }, { name: 'Jane', dateOfBirth: new Date('1995-08-15') }]
            `},{filename:"sortDatesDescending.js",title:"Sort Dates Descending Example",description:"1) Sorts an array of objects by a date property in descending order.",code:`
              const people = [
                { name: 'John', dateOfBirth: new Date('1990-05-20') },
                { name: 'Jane', dateOfBirth: new Date('1995-08-15') },
                { name: 'Jack', dateOfBirth: new Date('1985-12-10') }
              ];
  
              // Sort by dateOfBirth in descending order
              people.sort((a, b) => b.dateOfBirth - a.dateOfBirth);
              console.log(people);  // Output: [{ name: 'Jane', dateOfBirth: new Date('1995-08-15') }, { name: 'John', dateOfBirth: new Date('1990-05-20') }, { name: 'Jack', dateOfBirth: new Date('1985-12-10') }]
            `}]},{title:"Filtering Array of Objects by Condition",description:"Example of how to filter an array of objects and get specific field values.",isGroup:!1,codeLists:[{filename:"filterByCondition.js",title:"Filter Array of Objects Example",description:`
              1) You can filter an array of objects based on a specific condition.
              2) Use the filter method to create a new array with objects that meet the condition.
              3) You can then map the filtered objects to retrieve specific field values.
            `,code:`
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
            `}]},{title:"Filtering Array of Objects by Condition and Retrieving Multiple Fields",description:"Example of how to filter an array of objects and get specific multiple field values.",isGroup:!1,codeLists:[{filename:"filterMultipleFields.js",title:"Filter Array of Objects Example",description:`
              1) You can filter an array of objects based on a specific condition.
              2) Use the filter method to create a new array with objects that meet the condition.
              3) You can then map the filtered objects to retrieve multiple specific field values.
            `,code:`
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
            `}]},{title:"Array of Objects - Removing Duplicates",description:"Topics on how to remove duplicates from an array of objects by single field, multiple fields, destructuring, and more.",isGroup:!0,codeLists:[{filename:"removeDuplicatesBySingleField.js",title:"Remove Duplicates by Single Field",description:`
              1) This example shows how to remove duplicates from an array of objects based on a single field (e.g., 'name').
            `,code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'John', age: 35 } // Duplicate
              ];
      
              const uniqueByName = [...new Map(people.map(person => [person.name, person])).values()];
      
              console.log(uniqueByName);
              // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
            `},{filename:"removeDuplicatesByMultipleFields.js",title:"Remove Duplicates by Multiple Fields",description:`
              1) This example shows how to remove duplicates based on multiple fields (e.g., 'name' and 'age').
            `,code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'John', age: 30 } // Duplicate
              ];
      
              const uniqueByNameAndAge = [...new Map(people.map(person => [JSON.stringify({ name: person.name, age: person.age }), person])).values()];
      
              console.log(uniqueByNameAndAge);
              // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
            `},{filename:"removeDuplicatesUsingDestructuring.js",title:"Remove Duplicates Using Destructuring",description:`
              1) This example demonstrates how to use destructuring to simplify removing duplicates by a single field.
            `,code:`
              const people = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
                { name: 'John', age: 35 } // Duplicate
              ];
      
              const uniquePeople = [...new Map(people.map(({ name, age }) => [name, { name, age }])).values()];
      
              console.log(uniquePeople);
              // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
            `},{filename:"removeDuplicatesUsingDestructuringKeys.js",title:"Remove Duplicates Using Destructuring Keys",description:`
              1) This example shows how to remove duplicates by destructuring keys to specify which fields to check for uniqueness.
            `,code:`
              const people = [
                { name: 'John', age: 30, city: 'New York' },
                { name: 'Jane', age: 25, city: 'Los Angeles' },
                { name: 'John', age: 30, city: 'New York' } // Duplicate
              ];
      
              const uniquePeople = [...new Map(people.map(({ name, age }) => [name + age, { name, age }])).values()];
      
              console.log(uniquePeople);
              // Output: [{ name: 'John', age: 30, city: 'New York' }, { name: 'Jane', age: 25, city: 'Los Angeles' }]
            `},{filename:"removeDuplicatesUsingMethod.js",title:"Remove Duplicates Using Method with Keys List",description:`
              1) This example demonstrates a method to remove duplicates by passing an array of objects and a list of keys.
            `,code:`
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
            `}]},{title:"Array of Objects - Get Specific Keys with Destructuring",description:"Topics on how to get specific multiple keys from an array of objects using destructuring and renaming keys.",isGroup:!0,codeLists:[{filename:"getSpecificKeysWithDestructuring.js",title:"Get Specific Keys with Destructuring",description:`
              1) This example shows how to get specific keys (e.g., 'name' and 'age') from an array of objects using destructuring.
            `,code:`
              const people = [
                { name: 'John', age: 30, city: 'New York' },
                { name: 'Jane', age: 25, city: 'Los Angeles' },
                { name: 'Jack', age: 35, city: 'Chicago' }
              ];
      
              const specificKeys = people.map(({ name, age }) => ({ name, age }));
      
              console.log(specificKeys);
              // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Jack', age: 35 }]
            `},{filename:"getSpecificKeysWithRenaming.js",title:"Get Specific Keys with Renaming",description:`
              1) This example demonstrates how to get specific keys from an array of objects and rename them during extraction.
            `,code:`
              const people = [
                { name: 'John', age: 30, city: 'New York' },
                { name: 'Jane', age: 25, city: 'Los Angeles' },
                { name: 'Jack', age: 35, city: 'Chicago' }
              ];
      
              const renamedKeys = people.map(({ name: personName, age: personAge }) => ({ personName, personAge }));
      
              console.log(renamedKeys);
              // Output: [{ personName: 'John', personAge: 30 }, { personName: 'Jane', personAge: 25 }, { personName: 'Jack', personAge: 35 }]
            `},{filename:"getSpecificKeysWithMultipleRenaming.js",title:"Get Multiple Keys with Renaming",description:`
              1) This example shows how to extract multiple keys and rename them in a single operation.
            `,code:`
              const people = [
                { name: 'John', age: 30, city: 'New York' },
                { name: 'Jane', age: 25, city: 'Los Angeles' },
                { name: 'Jack', age: 35, city: 'Chicago' }
              ];
      
              const extractedAndRenamed = people.map(({ name: personName, age: personAge, city: location }) => ({ personName, personAge, location }));
      
              console.log(extractedAndRenamed);
              // Output: [{ personName: 'John', personAge: 30, location: 'New York' }, { personName: 'Jane', personAge: 25, location: 'Los Angeles' }, { personName: 'Jack', personAge: 35, location: 'Chicago' }]
            `}]},{title:"Using Reduce Method to Sum Values",description:"This example demonstrates how to use the reduce method to calculate the sum of values in an array of objects.",isGroup:!1,codeLists:[{filename:"sumValuesUsingReduce.js",title:"Sum Values Using Reduce",description:`
              1) The reduce method executes a reducer function on each element of the array, resulting in a single output value.
              2) In this example, we calculate the sum of all 'value' properties from an array of objects.
            `,code:`
              const data = [
                { value: 10 },
                { value: 20 },
                { value: 30 },
                { value: 40 }
              ];
      
              const totalSum = data.reduce((accumulator, current) => accumulator + current.value, 0);
      
              console.log(totalSum); // Output: 100
            `}]},{title:"Assigning isChecked = true Using forEach and map",description:"This example shows how to assign 'isChecked' as true for each object in an array using forEach and map methods.",isGroup:!0,codeLists:[{filename:"assignIsCheckedUsingForEach.js",title:"Assign isChecked using forEach",description:`
              1) The forEach method executes a provided function once for each array element.
              2) Here, we set the 'isChecked' property of each object to true.
            `,code:`
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
            `},{filename:"assignIsCheckedUsingMap.js",title:"Assign isChecked using map",description:`
              1) The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
              2) Here, we return a new array with 'isChecked' set to true.
            `,code:`
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
            `}]},{title:"Different Ways to Group By in JavaScript",description:"This example demonstrates different ways to group an array of objects by a specific key using reduce, forEach, and Map.",isGroup:!0,codeLists:[{filename:"groupByUsingReduce.js",title:"Group By Using Reduce",description:`
              1) The reduce method executes a reducer function on each element of the array, resulting in a single output value.
              2) Here, we group items by a specific key using reduce.
            `,code:`
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
            `},{filename:"groupByUsingForEach.js",title:"Group By Using forEach",description:`
              1) The forEach method executes a provided function once for each array element.
              2) We can use forEach to build a grouped object manually.
            `,code:`
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
            `},{filename:"groupByUsingMap.js",title:"Group By Using Map",description:`
              1) A Map holds key-value pairs where the keys can be of any datatype.
              2) We can use Map to group objects efficiently.
            `,code:`
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
            `}]}]},{id:4,title:"Angular Concepts",description:"Angular Concepts all with examples",image:"",groupBy:[],filesList:[{title:"Angular",isGroup:!0,description:"A framework for building web applications using a component-based architecture. It leverages TypeScript for robust development and facilitates the creation of single-page applications (SPAs) with dynamic content.",codeLists:[{title:"What is Angular?",description:`
              1) Angular is a platform and framework for building single-page client applications using HTML and TypeScript.
              2) It provides a powerful structure for developing complex applications, enhancing maintainability and scalability.
              3) Angular employs a component-based architecture, allowing developers to encapsulate functionality into reusable components.
            `},{title:"Use of Angular",description:`
              1) Angular is used for building dynamic web applications that require real-time data processing and interactive user interfaces.
              2) Its features include two-way data binding, dependency injection, and a modular architecture, making it suitable for both small and large-scale applications.
              3) Angular is particularly effective in creating single-page applications (SPAs) that provide a seamless user experience without frequent page reloads.
            `},{title:"Examples of Developed Applications",description:`
              1) Angular is utilized in various applications across different sectors, including consumer and enterprise solutions.
              2) Notable examples include:
                - Gmail: An email service that provides a dynamic and responsive user interface.
                - Google Drive: A cloud storage solution that enhances user interaction through real-time updates.
                - Upwork: A freelance platform that uses Angular for its interactive features and real-time notifications.
                - PayPal: An online payment system leveraging Angular to deliver a smooth and efficient user experience.
            `,examples:["Gmail","Google Drive","Upwork","PayPal"]},{title:"TypeScript",description:`
              1) TypeScript is a superset of JavaScript that compiles to plain JavaScript, adding static typing to the language.
              2) It helps developers catch errors early in the development process, enhancing code quality and maintainability.
              3) TypeScript also supports modern JavaScript features, allowing developers to write more robust and structured code.
            `,filename:"typescriptExample.ts",code:`
              // TypeScript example
              let greeting: string = 'Hello, World!';
              console.log(greeting);
            `},{title:"JavaScript",description:`
              1) JavaScript is a versatile programming language essential for web development.
              2) It enables interactive web pages, allowing for dynamic content and user engagement.
              3) JavaScript is supported by all major browsers, making it a foundational technology for front-end development.
            `,filename:"javascriptExample.js",code:`
              // JavaScript example
              const greeting = 'Hello, World!';
              console.log(greeting);
            `},{title:"ECMAScript",description:`
              1) ECMAScript is the standardized scripting language specification that JavaScript follows.
              2) It provides a set of core features and functionality for scripting languages.
              3) Ensuring consistency across different implementations of JavaScript, ECMAScript is crucial for modern web development.
            `,filename:"ecmascriptExample.js",code:`
              // ECMAScript example
              const numbers = [1, 2, 3];
              const squared = numbers.map(n => n ** 2);
              console.log(squared); // [1, 4, 9]
            `},{title:"ES6",description:`
              1) ES6 (ECMAScript 2015) introduced significant features to JavaScript, enhancing the language's capabilities.
              2) Key features include arrow functions, classes, template literals, and modules, which provide more flexibility and improved code organization.
              3) These enhancements enable developers to write cleaner and more efficient code.
            `,filename:"es6Example.js",code:`
              // ES6 example
              const add = (a, b) => a + b;
              console.log(add(2, 3)); // 5
            `},{title:"Arrow Functions",description:`
              1) Arrow functions provide a shorter syntax for writing function expressions in JavaScript.
              2) They also lexically bind the 'this' value, making them especially useful in scenarios where traditional functions may lead to scope issues.
              3) This feature simplifies the code and enhances readability.
            `,filename:"arrowFunctionExample.js",code:`
              // Arrow function example
              const square = x => x * x;
              console.log(square(4)); // 16
            `}]},{title:"What Happens When You Run `ng serve`",isGroup:!1,description:"When you run `ng serve`, the Angular CLI compiles the application and serves it using a local development server. This process involves several steps, files, and configurations.",codeLists:[{title:"1. Command Execution: `ng serve`",description:`1) When you run the command ng serve, the Angular CLI starts the development server.
            2) This command triggers the build process and watches for file changes.
            3) It serves the application on a local server, usually at http://localhost:4200.`},{title:"2. Angular CLI Configuration: angular.json",description:`
            1) The Angular CLI reads the configuration from the angular.json file.
            2) This file specifies the project settings, build options, and serve configurations.
            3) It includes information about the root directory, output path, and source maps.`},{title:"3. Entry Point: main.ts",description:`
            1) The entry point of the application is the main.ts file.
            2) This file bootstraps the root module (AppModule) using the platformBrowserDynamic().bootstrapModule() method.
            3) It initializes the Angular application and sets up the necessary environment.`},{title:"4. Root Module: app.module.ts",description:`
            1) The AppModule is defined in app.module.ts.
            2) This module imports necessary Angular modules and declares the components used in the application.
            3) It serves as the primary context for the application and enables dependency injection.`},{title:"5. Root Component: app.component.ts",description:`
            1) The root component (usually defined in app.component.ts) is specified in the bootstrap array of the AppModule.
            2) Angular creates an instance of this component and renders it in the <app-root> tag found in index.html.
            3) This triggers the component's lifecycle hooks, allowing for initialization and rendering of child components.`},{title:"6. File Watching and Hot Reloading",description:`1) The Angular CLI watches for changes in the application files (e.g., TypeScript, HTML, CSS).
              2) When a change is detected, it recompiles the code and updates the application in the browser without requiring a full reload.
              3) This feature, known as hot reloading, enhances the development experience by reflecting changes immediately.`},{title:"7. Serving Static Files",description:`
            1) The development server serves the compiled files (JavaScript, HTML, and CSS) from memory.
            2) The server does not write files to the disk but keeps them in memory for performance.
            3) This allows for quick access to the application while developing.`},{title:"8. Open in Browser",description:`
            1) After the server starts, you can open a web browser and navigate to http://localhost:4200 to view the application.
            2) The application is served on this port, and you can interact with it as if it were deployed on a live server.
            3) Any changes you make in the code will be reflected in real-time.`}]},{title:"List of Useful Commands",isGroup:!0,description:"This section provides a collection of commands for checking versions, managing Node.js environments, and working with Angular applications.",codeLists:[{filename:"nodeVersionCheck.js",title:"Node.js Version Check",code:"node -v",description:`
              1) Command: \`node -v\`
              2) Description: Checks the currently installed version of Node.js.
            `},{filename:"npmVersionCheck.js",title:"npm Version Check",code:"npm -v",description:`
              1) Command: \`npm -v\`
              2) Description: Displays the version of npm (Node Package Manager) installed on your system.
            `},{filename:"nvmVersionCheck.js",title:"nvm Version Check",code:"nvm -v",description:`
              1) Command: \`nvm -v\`
              2) Description: Checks the version of nvm (Node Version Manager) installed on your system.
            `},{filename:"nvmListCommand.js",title:"nvm List Command",code:"nvm list",description:`
              1) Command: \`nvm list\`
              2) Description: Lists all Node.js versions installed on your machine along with the currently active version.
            `},{filename:"nvmUse.js",title:"nvm Use",code:"nvm use <version>",description:"\n              1) Command: `nvm use <version>`\n              2) Description: Switches to the specified version of Node.js installed via nvm. Replace `<version>` with the desired version number.\n            "},{filename:"nvmDefault.js",title:"nvm Default",code:"nvm alias default <version>",description:`
              1) Command: \`nvm alias default <version>\`
              2) Description: Sets the specified version of Node.js as the default version to be used in new terminal sessions.
            `},{filename:"nvmInstallSpecificVersion.js",title:"nvm Install Specific Version",code:"nvm install <version>",description:"\n              1) Command: `nvm install <version>`\n              2) Description: Installs a specific version of Node.js. Replace `<version>` with the desired version number (e.g., `nvm install 14.17.0`).\n            "},{filename:"angularProjectCreate.js",title:"Angular Project Create Command",code:"ng new <project-name>",description:`
              1) Command: \`ng new <project-name>\`
              2) Description: Creates a new Angular project with the specified project name. The command generates a new directory with all necessary files and dependencies.
            `},{filename:"runCommand.js",title:"Run Command (npm start vs ng s)",code:"npm start or ng serve",description:"\n              1) Command: `npm start` or `ng serve`\n              2) Description: \n                - `npm start`: Runs the start script defined in `package.json`, typically set up to start the Angular application. \n                - `ng serve`: A specific Angular CLI command to serve the application, providing live reload capabilities.\n            "},{filename:"buildCommand.js",title:"Build Command",code:"ng build",description:`
              1) Command: \`ng build\`
              2) Description: Compiles the Angular application into an output directory (dist/). The build can be configured for production or development with flags.
            `},{filename:"moduleCommand.js",title:"Module Command",code:"ng generate module <module-name>",description:`
              1) Command: \`ng generate module <module-name>\`
              2) Description: Generates a new Angular module with the specified name, creating a new folder and module file.
            `},{filename:"serviceCommand.js",title:"Service Command",code:"ng generate service <service-name>",description:`
              1) Command: \`ng generate service <service-name>\`
              2) Description: Creates a new Angular service, allowing you to manage data and business logic across components.
            `},{filename:"componentCommand.js",title:"Component Command",code:"ng generate component <component-name>",description:`
              1) Command: \`ng generate component <component-name>\`
              2) Description: Generates a new Angular component with the specified name, including the HTML, CSS, and TypeScript files.
            `},{filename:"directiveCommand.js",title:"Directive Command",code:"ng generate directive <directive-name>",description:`
              1) Command: \`ng generate directive <directive-name>\`
              2) Description: Creates a new Angular directive, which can be used to manipulate the DOM or extend existing HTML elements.
            `},{filename:"pipeCommand.js",title:"Pipe Command",code:"ng generate pipe <pipe-name>",description:`
              1) Command: \`ng generate pipe <pipe-name>\`
              2) Description: Generates a new Angular pipe, which can be used to transform data in templates.
            `},{filename:"authGuardCommand.js",title:"AuthGuard Command",code:"ng generate guard <guard-name>",description:`
              1) Command: \`ng generate guard <guard-name>\`
              2) Description: Creates a new Angular AuthGuard, which is used to control access to routes based on user authentication.
            `}]},{title:"Angular Modules and Components",isGroup:!0,description:"In Angular, a module is a logical grouping of components, directives, pipes, and services. Components are the building blocks of Angular applications, responsible for rendering the UI and handling user interactions.",codeLists:[{title:"What is a Module?",description:`
              1) A module in Angular is defined using the @NgModule decorator.
              2) It organizes related code into cohesive blocks.
              3) Each Angular application has at least one module, the root module, typically named AppModule.
              4) Modules can import other modules and declare components, directives, and pipes.
              5) Here is a simple example of an Angular module:
            `,filename:"app.module.ts",code:`
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
            `},{title:"What is a Component?",description:`
              1) A component is a TypeScript class decorated with @Component that defines the view (UI) and behavior (logic).
              2) Each component has its own template, styles, and data binding.
              3) Components can interact with each other through input and output properties.
              4) Here is a simple example of an Angular component:
            `,filename:"app.component.ts",code:`
              import { Component } from '@angular/core';
      
              @Component({
                selector: 'app-root', // The component's HTML tag
                template: '<h1>Hello, {{ name }}!</h1>', // The HTML template
                styles: ['h1 { font-family: Lato; }'] // CSS styles
              })
              export class AppComponent {
                name: string = 'Angular'; // Component property
              }
            `},{title:"HTML Integration",description:`
              1) The HTML file (index.html) is the entry point of the Angular application.
              2) It contains the root component's selector that will load the Angular app.
              3) Here is how the index.html file is structured:
            `,filename:"index.html",code:`
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
            `}]},{title:"Creating Multiple Components in Angular",isGroup:!0,description:"Angular allows you to create multiple components to build a modular and maintainable application. Components can be reused across different parts of the application and can communicate with each other through input and output properties.",codeLists:[{title:"Creating a New Component",description:`
              1) You can create a new component using the Angular CLI command.
              2) The command will generate the component files (TypeScript, HTML, and CSS).
              3) For example, to create a component named 'header', use the following command:
            `,filename:"create-component-command",code:"ng generate component header"},{title:"Header Component (header.component.ts)",description:`
              1) The header component can display a title or navigation links.
              2) Here is a simple example of a header component:
            `,filename:"header.component.ts",code:`
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
            `},{title:"Footer Component (footer.component.ts)",description:`
              1) The footer component can contain copyright information or additional links.
              2) Here is a simple example of a footer component:
            `,filename:"footer.component.ts",code:`
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
            `},{title:"Using Components in the App Component (app.component.ts)",description:`
              1) You can use the created components in the main app component.
              2) Here is how to include the header and footer components in the app component:
            `,filename:"app.component.ts",code:`
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
            `},{title:"HTML Integration (index.html)",description:`
              1) The HTML file remains the same, serving as the entry point for the Angular application.
              2) It contains the root component's selector:
            `,filename:"index.html",code:`
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
            `}]},{title:"Declaring Variables and Methods in Angular Component",isGroup:!0,description:"In Angular components, variables can be declared with specific types. The following guidelines and examples illustrate how to declare and initialize different variable types, the order of imports, and method conventions.",codeLists:[{title:"Variable Declarations",description:`
              1) In Angular components, variables are typically declared in the class.
              2) Use TypeScript types to specify the variable type (e.g., string, number, boolean, etc.).
              3) Variable names should follow camelCase for the property names (userList,studentList) and PascalCase for class names(AppModule,AdminModule).
            `,filename:"example.component.ts",code:`
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
            `},{title:"Order of Imports",description:`
              1) Import statements should be organized in a specific order for clarity.
              2) First, import Angular core libraries, followed by third-party libraries, and then your application-specific modules.
            `,filename:"example.component.ts",code:`
              import { Component } from '@angular/core'; // Angular core import
              import { SomeService } from '../services/some.service'; // Service import
            `},{title:"Binding Variables in Template",description:`
              1) You can bind the component's properties to the HTML template using interpolation or property binding.
              2) Use double curly braces for interpolation and square brackets for property binding.
            `,filename:"example.component.html",code:`
              <h1>{{ title }}</h1> <!-- Interpolation -->
              <button (click)="incrementCount()">Increment Count</button>
              <p>Count: {{ count }}</p> <!-- Interpolation -->
            `}]},{title:"Data Binding in Angular",isGroup:!1,description:"Data binding in Angular is a powerful feature that enables synchronization between the model and the view. It helps in creating dynamic and responsive applications. The following are the different types of data binding in Angular, along with their definitions and examples.",codeLists:[{title:"Interpolation",description:"Interpolation is a one-way data binding technique that allows you to display component data in the template.",code:`
              // In the component class
              export class AppComponent {
                title: string = 'Hello, Angular!'; // Defining a string property
              }
      
              // In the HTML template
              <h1>{{ title }}</h1> // Displays the title property value
            `},{title:"Property Binding",description:"Property binding allows you to bind a property of a DOM element to a component property.",code:`// In the component class
              export class AppComponent {
                isDisabled: boolean = true; // Defining a boolean property
              }
      
              // In the HTML template
              <button [disabled]="isDisabled">Click Me</button> // Binds the button's disabled property
            `},{title:"Event Binding",description:"Event binding allows you to listen to events such as clicks, key presses, and more, and respond to them with a method in the component.",code:`
              // In the component class
              export class AppComponent {
                onClick() {
                  alert('Button clicked!'); // Method that shows an alert
                }
              }
      
              // In the HTML template
              <button (click)="onClick()">Click Me</button> // Listens for click events
            `},{title:"Two-Way Data Binding",description:"Two-way data binding allows for synchronization of data between the model and the view. It is achieved using the ngModel directive.",code:`
              // In the component class
              export class AppComponent {
                name: string = ''; // Defining a string property
              }
      
              // In the HTML template
              <input [(ngModel)]="name" placeholder="Enter your name" /> // Binds input value to name property
              <p>Hello, {{ name }}!</p> // Displays the name property value
            `}]},{title:"Creating and Connecting Multiple Modules in Angular",isGroup:!0,description:"In Angular, modules are a way to group related components, services, and other code into cohesive blocks. This helps in organizing your application and making it more manageable. The following examples demonstrate how to create multiple modules and how to connect them.",codeLists:[{title:"Creating Feature Module",description:`
              1) A feature module is a way to encapsulate related components, directives, and services.
              2) Create a new module using the Angular CLI with the command: ng generate module feature-module.
              3) Import the feature module into the main application module to connect it.
            `,filename:"feature.module.ts",code:`
              import { NgModule } from '@angular/core';
              import { CommonModule } from '@angular/common';
              import { FeatureComponent } from './feature.component';
      
              @NgModule({
                declarations: [FeatureComponent],
                imports: [CommonModule],
                exports: [FeatureComponent] // Exporting to use in other modules
              })
              export class FeatureModule { }
            `},{title:"Creating Shared Module",description:`
              1) Shared modules contain components, directives, and pipes that can be reused across multiple feature modules.
              2) Create a shared module using the Angular CLI with the command: ng generate module shared.
            `,filename:"shared.module.ts",code:`
              import { NgModule } from '@angular/core';
              import { CommonModule } from '@angular/common';
              import { SomeComponent } from './some.component';
      
              @NgModule({
                declarations: [SomeComponent],
                imports: [CommonModule],
                exports: [SomeComponent] // Exporting to use in other modules
              })
              export class SharedModule { }
            `},{title:"Connecting Modules in App Module",description:`
              1) Import the created feature and shared modules into the root application module.
              2) This allows the application to utilize components from these modules.
            `,filename:"app.module.ts",code:`
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
            `},{title:"Using Components from Feature and Shared Modules",description:`
              1) To use components from feature or shared modules, simply add their selectors in the HTML of the parent component.
              2) Ensure that the component from the feature or shared module is exported in the respective module file.
            `,filename:"app.component.html",code:`
              <h1>Welcome to the Angular Application</h1>
              <app-some></app-some> <!-- Component from Shared Module -->
              <app-feature></app-feature> <!-- Component from Feature Module -->
            `}]},{title:"Angular Routing",isGroup:!0,description:"Angular routing allows navigation from one view to another as users perform application tasks. It provides a way to build a single-page application with multiple views, enabling users to navigate through different components seamlessly.",codeLists:[{title:"What is Routing?",description:"Routing in Angular allows you to navigate between different components of your application. It helps in defining paths for the application and rendering the respective components.",code:`
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
            `},{title:"Using Routing in Components",description:"To use routing, include the <router-outlet> directive in your main component template. This directive acts as a placeholder for the routed component.",code:`
              // In app.component.html
              <nav>
                <a routerLink="/home">Home</a>
                <a routerLink="/about">About</a>
              </nav>
              <router-outlet></router-outlet> // Placeholder for routed components
            `},{title:"Path Matching: Full and Prefix",description:"Path matching determines how the router should match the URLs to the defined routes. There are two types of path matching: full and prefix.",code:`
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
            `},{title:"Full Path Match",description:"When using 'pathMatch: full', the router will only redirect if the entire URL matches the path.",code:`
              // In app-routing.module.ts
              const routes: Routes = [
                { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirects if the URL is exactly empty
                { path: 'home', component: HomeComponent }
              ];
            `},{title:"Prefix Path Match",description:"When using 'pathMatch: prefix', the router will redirect if the path begins with the specified path.",code:`
              // In app-routing.module.ts
              const routes: Routes = [
                { path: 'about', component: AboutComponent },
                { path: '', redirectTo: '/home', pathMatch: 'prefix' }, // Will redirect to '/home' if the URL starts with ''
              ];
            `}]},{title:"Lazy Loading Modules in Angular",isGroup:!0,description:"Lazy loading is a design pattern in Angular that allows you to load modules only when they are required. This helps in optimizing the performance of your application by reducing the initial loading time.",codeLists:[{title:"What is Lazy Loading?",description:`
            1) Lazy loading helps to decrease the initial load time of an application by loading feature modules only when the user navigates to them.
            2) It can significantly improve the performance of large applications with many features.
            3) This is achieved by using the Angular Router to define routes that load specific modules lazily.
            `,code:`
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
            `},{title:"Creating a Feature Module",description:`
            1) Create a new module using Angular CLI by running the command: ng generate module feature.
            2) This command generates a new module file named feature.module.ts.
            3) Ensure to set up routing for the feature module to define its own routes.
            `,code:`
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
            `},{title:"Feature Module Definition",description:`
            1) Define the feature module to encapsulate the components, services, and routes related to that feature.
            2) Use the FeatureRoutingModule to set up the routing for the module.
            `,code:`
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
            `},{title:"Feature Component",description:`
            1) Create a component for the feature module using the Angular CLI command: ng generate component feature/feature.
            2) The feature component will be displayed when the user navigates to the '/feature' route.
            `,code:`
              // In feature.component.ts
              import { Component } from '@angular/core';
      
              @Component({
                selector: 'app-feature',
                template: '<h2>Feature Module Loaded!</h2>', // Simple template for the feature
                styles: []
              })
              export class FeatureComponent {}
            `}]},{title:"Angular Directives",description:`
        1) Directives are used to add new behavior to an element in an Angular application.
        2) There are three types of directives: Components, Structural Directives, and Attribute Directives.
        `,isGroup:!0,codeLists:[{filename:"structural-directives.ts",title:"Structural Directives",description:`
            1) ngIf: Conditionally includes a template based on the value of an expression.
            2) ngIf Else: Conditionally includes a template based on the value of an expression.
            3) ngIf ElseIf Else: Conditionally includes a template based on the value of multiple expressions.
            4) ngSwitch: Conditionally includes a template based on the value of an expression.
            5) ngFor: Repeats a template for each item in an array.
            `,code:`
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
            `},{filename:"attribute-directives.ts",title:"Attribute Directives",description:`
            1) ngClass: Adds a class to an element based on the value of an expression.
            2) ngStyle: Adds a style to an element based on the value of an expression.
            `,code:`
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
            `},{filename:"custom-directive.ts",title:"Custom Directive",description:`
            1) Create a custom directive to add new behavior to an element.
            `,code:`
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
            `}]},{title:"Angular Data Passing",description:`
        1) Data passing is a crucial aspect of Angular applications.
        2) There are several ways to pass data between components in Angular.
        `,isGroup:!0,codeLists:[{filename:"input.ts",title:"@Input",description:`
            1) @Input is used to pass data from a parent component to a child component.
            `,code:`
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
            `,template:{parent:`
                <h1>Parent Component</h1>
                <app-child [data]="data"></app-child>
              `,child:`
                <h1>Child Component</h1>
                <p>Received data: {{ data }}</p>
              `}},{filename:"output.ts",title:"@Output",description:`
            1) @Output is used to emit events from a child component to a parent component.
            `,code:`
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
            `,template:{parent:`
                <h1>Parent Component</h1>
                <app-child (childEvent)="onChildEvent($event)"></app-child>
              `,child:`
                <h1>Child Component</h1>
                <button (click)="emitEvent()">Emit Event</button>
              `}},{filename:"service.ts",title:"Service",description:`
            1) A service is a class that can be injected into components to provide shared functionality.
            `,code:`
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
            `,template:{parent:`
                <h1>Parent Component</h1>
                <button (click)="updateData()">Update Data</button>
              `,child:`
                <h1>Child Component </h1>
                <p>Received data: {{ data }}</p>
              `}},{filename:"subject.ts",title:"Subject",description:`
            1) A subject is a class that can be used to multicast values to multiple observers.
            `,code:`
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
            `,template:{parent:`
                <h1>Parent Component</h1>
                <button (click)="updateData()">Update Data</button>
              `,child:`
                <h1>Child Component</h1>
                <p>Received data: {{ data }}</p>
              `}},{filename:"behavior-subject.ts",title:"Behavior Subject",description:`
            1) A behavior subject is a class that can be used to multicast values to multiple observers, and it also provides an initial value.
            `,code:`
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
            `,template:{parent:`
                <h1>Parent Component</h1>
                <button (click)="updateData()">Update Data</button>
              `,child:`
                <h1>Child Component</h1>
                <p>Received data: {{ data }}</p>
              `}},{filename:"replay-subject.ts",title:"Replay Subject",description:`
            1) A replay subject is a class that can be used to multicast values to multiple observers, and it also provides a buffer of previous values.
            `,code:`
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
            `,template:{parent:`
                <h1>Parent Component</h1>
                <button (click)="updateData()">Update Data</button>
              `,child:`
                <h1>Child Component</h1>
                <p>Received data: {{ data }}</p>
              `}}]}]}];var Ce=(()=>{class n{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(i){return new(i||n)(a(C),a(b))}}static{this.\u0275dir=d({type:n})}}return n})(),Y=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=V(n)))(o||n)}})()}static{this.\u0275dir=d({type:n,features:[p]})}}return n})(),L=new m("");var Te={provide:L,useExisting:v(()=>we),multi:!0};function Le(){let n=B()?B().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Je=new m(""),we=(()=>{class n extends Ce{constructor(t,i,o){super(t,i),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Le())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(i){return new(i||n)(a(C),a(b),a(Je,8))}}static{this.\u0275dir=d({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&F("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[w([Te]),p]})}}return n})();var Pe=new m(""),Re=new m("");function Ae(n){return n!=null}function _e(n){return ce(n)?K(n):n}function xe(n){let e={};return n.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function De(n,e){return e.map(t=>t(n))}function Ge(n){return!n.validate}function je(n){return n.map(e=>Ge(e)?e:t=>e.validate(t))}function Be(n){if(!n)return null;let e=n.filter(Ae);return e.length==0?null:function(t){return xe(De(t,e))}}function Me(n){return n!=null?Be(je(n)):null}function Ue(n){if(!n)return null;let e=n.filter(Ae);return e.length==0?null:function(t){let i=De(t,e).map(_e);return Q(i).pipe(Z(xe))}}function Ve(n){return n!=null?Ue(je(n)):null}function pe(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function He(n){return n._rawValidators}function We(n){return n._rawAsyncValidators}function U(n){return n?Array.isArray(n)?n:[n]:[]}function O(n,e){return Array.isArray(n)?n.includes(e):n===e}function he(n,e){let t=U(e);return U(n).forEach(o=>{O(t,o)||t.push(o)}),t}function me(n,e){return U(e).filter(t=>!O(n,t))}var N=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Me(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ve(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},H=class extends N{get formDirective(){return null}get path(){return null}},j=class extends N{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},W=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ze={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Pt=c(l({},ze),{"[class.ng-submitted]":"isSubmitted"}),Rt=(()=>{class n extends W{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||n)(a(j,2))}}static{this.\u0275dir=d({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&te("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[p]})}}return n})();var A="VALID",k="INVALID",f="PENDING",_="DISABLED",y=class{},T=class extends y{constructor(e,t){super(),this.value=e,this.source=t}},x=class extends y{constructor(e,t){super(),this.pristine=e,this.source=t}},D=class extends y{constructor(e,t){super(),this.touched=e,this.source=t}},g=class extends y{constructor(e,t){super(),this.status=e,this.source=t}};function Ye(n){return(J(n)?n.validators:n)||null}function qe(n){return Array.isArray(n)?Me(n):n||null}function $e(n,e){return(J(e)?e.asyncValidators:n)||null}function Ke(n){return Array.isArray(n)?Ve(n):n||null}function J(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var z=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=I(()=>this.statusReactive()),this.statusReactive=E(void 0),this._pristine=I(()=>this.pristineReactive()),this.pristineReactive=E(!0),this._touched=I(()=>this.touchedReactive()),this.touchedReactive=E(!1),this._events=new $,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return h(this.statusReactive)}set status(e){h(()=>this.statusReactive.set(e))}get valid(){return this.status===A}get invalid(){return this.status===k}get pending(){return this.status==f}get disabled(){return this.status===_}get enabled(){return this.status!==_}get pristine(){return h(this.pristineReactive)}set pristine(e){h(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return h(this.touchedReactive)}set touched(e){h(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(he(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(he(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(me(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(me(e,this._rawAsyncValidators))}hasValidator(e){return O(this._rawValidators,e)}hasAsyncValidator(e){return O(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(c(l({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new D(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new D(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(c(l({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new x(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new x(!0,i))}markAsPending(e={}){this.status=f;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new g(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(c(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=_,this.errors=null,this._forEachChild(o=>{o.disable(c(l({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new T(this.value,i)),this._events.next(new g(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(c(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=A,this._forEachChild(i=>{i.enable(c(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(c(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===f)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new T(this.value,t)),this._events.next(new g(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(c(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?_:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=f,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=_e(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new g(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new S,this.statusChanges=new S}_calculateStatus(){return this._allControlsDisabled()?_:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(f)?f:this._anyControlsHaveStatus(k)?k:A}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),o&&this._events.next(new x(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new D(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){J(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=qe(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ke(this._rawAsyncValidators)}};var Se=new m("CallSetDisabledState",{providedIn:"root",factory:()=>q}),q="always";function Ze(n,e){return[...e.path,n]}function Qe(n,e,t=q){et(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),tt(n,e),it(n,e),nt(n,e),Xe(n,e)}function fe(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Xe(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function et(n,e){let t=He(n);e.validator!==null?n.setValidators(pe(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=We(n);e.asyncValidator!==null?n.setAsyncValidators(pe(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let o=()=>n.updateValueAndValidity();fe(e._rawValidators,o),fe(e._rawAsyncValidators,o)}function tt(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Ee(n,e)})}function nt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Ee(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function Ee(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function it(n,e){let t=(i,o)=>{e.valueAccessor.writeValue(i),o&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function ot(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function rt(n){return Object.getPrototypeOf(n.constructor)===Y}function at(n,e){if(!e)return null;Array.isArray(e);let t,i,o;return e.forEach(r=>{r.constructor===we?t=r:rt(r)?i=r:o=r}),o||i||t||null}function ge(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function ye(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var st=class extends z{constructor(e=null,t,i){super(Ye(t),$e(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),J(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ye(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ge(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ge(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ye(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var lt={provide:j,useExisting:v(()=>ct)},ve=Promise.resolve(),ct=(()=>{class n extends j{constructor(t,i,o,r,s,u){super(),this._changeDetectorRef=s,this.callSetDisabledState=u,this.control=new st,this._registered=!1,this.name="",this.update=new S,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=at(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),ot(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Qe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ve.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,o=i!==0&&ue(i);ve.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Ze(t,this._parent):[t]}static{this.\u0275fac=function(i){return new(i||n)(a(H,9),a(Pe,10),a(Re,10),a(L,10),a(de,8),a(Se,8))}}static{this.\u0275dir=d({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[w([lt]),p,ee]})}}return n})();var dt={provide:L,useExisting:v(()=>Ie),multi:!0};function Fe(n,e){return n==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${n}: ${e}`.slice(0,50))}function ut(n){return n.split(":")[0]}var Ie=(()=>{class n extends Y{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let i=this._getOptionId(t),o=Fe(i,t);this.setProperty("value",o)}registerOnChange(t){this.onChange=i=>{this.value=this._getOptionValue(i),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),t))return i;return null}_getOptionValue(t){let i=ut(t);return this._optionMap.has(i)?this._optionMap.get(i):t}static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=V(n)))(o||n)}})()}static{this.\u0275dir=d({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(i,o){i&1&&F("change",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[w([dt]),p]})}}return n})(),Bt=(()=>{class n{constructor(t,i,o){this._element=t,this._renderer=i,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(Fe(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(i){return new(i||n)(a(b),a(C),a(Ie,9))}}static{this.\u0275dir=d({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return n})(),pt={provide:L,useExisting:v(()=>ke),multi:!0};function be(n,e){return n==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${n}: ${e}`.slice(0,50))}function ht(n){return n.split(":")[0]}var ke=(()=>{class n extends Y{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let i;if(Array.isArray(t)){let o=t.map(r=>this._getOptionId(r));i=(r,s)=>{r._setSelected(o.indexOf(s.toString())>-1)}}else i=(o,r)=>{o._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(t){this.onChange=i=>{let o=[],r=i.selectedOptions;if(r!==void 0){let s=r;for(let u=0;u<s.length;u++){let M=s[u],P=this._getOptionValue(M.value);o.push(P)}}else{let s=i.options;for(let u=0;u<s.length;u++){let M=s[u];if(M.selected){let P=this._getOptionValue(M.value);o.push(P)}}}this.value=o,t(o)}}_registerOption(t){let i=(this._idCounter++).toString();return this._optionMap.set(i,t),i}_getOptionId(t){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,t))return i;return null}_getOptionValue(t){let i=ht(t);return this._optionMap.has(i)?this._optionMap.get(i)._value:t}static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=V(n)))(o||n)}})()}static{this.\u0275dir=d({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(i,o){i&1&&F("change",function(s){return o.onChange(s.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[w([pt]),p]})}}return n})(),Ut=(()=>{class n{constructor(t,i,o){this._element=t,this._renderer=i,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(be(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(be(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(i){return new(i||n)(a(b),a(C),a(ke,9))}}static{this.\u0275dir=d({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return n})();var mt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=G({type:n})}static{this.\u0275inj=R({})}}return n})();var Ht=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Se,useValue:t.callSetDisabledState??q}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=G({type:n})}static{this.\u0275inj=R({imports:[mt]})}}return n})();var ft=["editor"],Oe=class n{code;editor;ngAfterViewInit(){if(this.editor){let e=this.code;try{e=prettier.format(this.code,{parser:"babel",plugins:[prettierPlugins.babel],semi:!0,singleQuote:!0})}catch{}let t=ace.edit(this.editor.nativeElement,{theme:"ace/theme/monokai",mode:"ace/mode/javascript",value:e,autoScrollEditorIntoView:!0,minLines:7,fontSize:16});t.setOptions({enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!0,showPrintMargin:!1,highlightActiveLine:!0}),t.session.setUseSoftTabs(!0),t.session.setTabSize(4),t.session.setUseWorker(!1)}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=X({type:n,selectors:[["app-code-formatter"]],viewQuery:function(t,i){if(t&1&&re(ft,5),t&2){let o;ae(o=se())&&(i.editor=o.first)}},inputs:{code:"code"},standalone:!0,features:[le],decls:3,vars:0,consts:[["editor",""],[1,"editor-container",2,"padding","0","margin","0","border","none"],["id","editor"]],template:function(t,i){t&1&&(ne(0,"div",1),oe(1,"div",2,0),ie())},styles:[".editor-container[_ngcontent-%COMP%]{width:100%;height:500px;margin:20px auto;position:relative;border:1px solid #ddd}#editor[_ngcontent-%COMP%]{position:absolute;inset:0;height:100%;width:100%;font-size:16px}"]})};export{gt as a,Rt as b,ct as c,Ie as d,Bt as e,Ut as f,Ht as g,Oe as h};

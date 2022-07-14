Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - Parameter: accepts any value and converts into string.
   - separator: accepts any value and converts into string and use that as separator between two adjacent elements.
   - Return: a string with all elements joined. if arr.length is 0, empty array is returned.
   - Example:
     ```js
     let altcampus = [`An`, `Alternative`, `to`, `school`, `you`, `wished`];
     altcampus.join(); //'An,Alternative,to,school,you,wished'
     altcampus.join(0); //'An0Alternative0to0school0you0wished'
     altcampus.join(" "); //'An Alternative to school you wished'
     ```
   - `join` accepts a optional separator and joins two elements with separator between them and returns the joined string. If no separator is passed then , is the default separator.

3. `flat`

   - Parameter: accepts one parameter i.e, Depth (default to 1) , it specifies how deep the nested array structe should be flattened
   - Return: a single Array consisting of by all the values concatenated into it.
   - Example:
     ```js
     let numbers = [1, 2, 3, [4, 5, [6, [5, 6]]]];
     numbers.flat(); //[1, 2, 3, 4, 5, Array(2)]
     numbers.flat(2); //(7) [1, 2, 3, 4, 5, 6, Array(2)]
     numbers.flat(Infinity); //[1, 2, 3, 4, 5, 6, 5, 6]
     ```
   - `flat` accepts a number as depth value and flatten the nested array structure upto that depth level.
   - No it does not mutate the original array

4. `push`

   - Parameter: n (any) number of value (number, string, boolean, array, null, undefined, object and function etc)
   - Return: the length of the final array
   - Example:

     ```js
     let numbers = [1, 2, 3];
     numbers.push(4); //4
     numbers; //[1, 2, 3, 4]

     numbers.push(true); //5
     numbers; //[1, 2, 3, 4, true]

     numbers.push(NaN, {}); //7
     numbers; //[1, 2, 3, 4, true, NaN, {…}]
     ```

   - `push` accepts n number of values separated by comma and returns the length of array after mutation. It pushes the specified value in the last of array.
   - Yes, it does not mutate the original array.

5. `indexOf`

   - Parameter: accepts two parameters searchElements and fromIndex
     - searchElement: element to be searched in array
     - fromIndex -optional : index to start search at. If index >= length of array, no search will takes place. -1 will be returned.
       if Index is negative, it is taken as offset from end of array but array is still searched from front to back.
       if Index is 0, whole array will be searched. (default)
   - Return: the first index of array will be returned and if not found then -1 will be returned.
   - Example:

     ```js
     let altcampus = [`An`, `Alternative`, `to`, `school`, `you`, `wished`];
     altcampus.indexOf(`to`); //2
     altcampus.indexOf(`to`, -4); //2
     altcampus.indexOf(`you`, 5); //-1
     ```

   - `indexOf` compares the searchElement with array elements with strict equality and if true then returns the first index that matches
   - No it does not mutate the original array

6. `lastIndexOf`

   - Parameter: accepts two parameters searchElements and fromIndex
     - searchElement: element to be searched in array
     - fromIndex -optional : index to start search backwards. If fromIndex >= length of array
       whole array search will takes place.
       if fromIndex is less tha 0, it is taken as offset from end of array therefore position will be array.length + fromIndex, so array.length + fromIndex < 0 , array is not searched.
       if fromIndex > 0 is taken as offset from the end of array
       default value is arr.length-1.
   - Return: the last index of array will be returned and if not found then -1 will be returned.
   - Example:

     ```js
     let altcampus = [
       `An`,
       `Alternative`,
       `to`,
       `school`,
       `you`,
       `wished`,
       `to`,
       `Alternative`,
     ];
     altcampus.lastIndexOf(`to`); //6
     altcampus.lastIndexOf(`to`, -4); //2
     altcampus.lastIndexOf(`Alternative`, -8); //-1
     ```

   - `lastIndexOf` compares the searchElement with array elements with strict equality from the end of the array and if true then returns the lasts index that matches
   - No it does not mutate the original array

7. `includes`

   - Parameter: accepts two parameters
   - searchElement : element to be searched in array
   - fromIndex -optional : index to start search at.
   - Return: true if value is found , else false
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.includes(4); //false
     let sentanceArray = [
       "A",
       "quick",
       "brown",
       "fox",
       "jumped",
       "over",
       "a",
       "lazy",
     ];
     sentanceArray.includes("fox"); //true
     let colors = ["red", "green", "blue"];
     colors.includes("red", 1); // false
     ```
   - `includes` searches the array for the searchElement and if found returns true else false.
   - No it does not mutate the original array

8. `reverse`

   - Parameter: none
   - Return: the array in reversed order
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.reverse(); //[3, 2, 1]
     let sentanceArray = [
       "A",
       "quick",
       "brown",
       "fox",
       "jumped",
       "over",
       "a",
       "lazy",
     ];
     sentanceArray.reverse(); //['lazy', 'a', 'over', 'jumped', 'fox', 'brown', 'quick', 'A']
     let colors = ["red", "green", "blue"];
     colors.reverse(); // ['blue', 'green', 'red']
     ```
   - `reverse` reverses the original array and returns it.
   - it mutate the original array

9. `every`

   - Parameter: accepts a callback function which is called with three arguments:

     - element: current selected element
     - index -optional: index of currently selected element.
     - array -optional: array on which every was called.

   - Return: true if all elements of array returns true in the test function.
   - Example:

     ```js
     let numbers = [1, 2, 3, 4, 5, 6, 7];
     numbers.every((element) => element); //true

     numbers.every((element) => element % 2 == 0); //false

     numbers.every((element) => 1); //true
     ```

   - `every` return true if all element passes the test function
   - No it does not mutate the original array

10. `shift`

- Parameter: none
- Return: the removed element
- Example:

  ```js
  let altcampus = [
    `An`,
    `Alternative`,
    `to`,
    `school`,
    `you`,
    `wished`,
    `to`,
    `Alternative`,
  ];
  altcampus.shift(); //"An"
  console.log(altcampus); // ['Alternative', 'to', 'school', 'you', 'wished', 'to', 'Alternative']

  let numbers = [1, 2, 3];
  numbers.shift(); // 1
  console.log(numbers); //[2, 3]

  let empty = [];
  empty.shift(); //undefined
  ```

- `shift` removes element at index 0 and shift all other elements to lower and returns the removed element.
- it mutate the original array

11. `splice`

- Parameter: accepts three parameters:
  - start : index to start from.
  - deleteCount -optional: no. of elements to delete starting from start
  - items -optional: item to add in the array.
- Return: an array consists of deleted items.
- Example:

  ```js
  let altcampus = [
    `An`,
    `Alternative`,
    `to`,
    `school`,
    `you`,
    `wished`,
    `to`,
    `Alternative`,
  ];
  altcampus.splice(3); //['school', 'you', 'wished', 'to', 'Alternative']
  console.log(altcampus); // ['An', 'Alternative', 'to']

  let numbers = [1, 2, 3];
  numbers.splice(1, 0, 44, 5, 66); // []
  console.log(numbers); //[1, 44, 5, 66, 2, 3]

  let empty = [];
  empty.splice(0, 0, NaN, undefined, true, false); //[]
  console.log(empty); //[NaN, undefined, true, false]
  ```

- `splice` modifies the arrat by removing or replacing existing elements or by adding new elements in place.
- it mutate the original array

12. `find`

- Parameter: accepts a callback function which is called with three arguments:

  - element: current selected element
  - index -optional: index of currently selected element.
  - array -optional: array on which find was called.

- Return: the first element that satisfied the testing function else returns undefined.
- Example:

  ```js
  let altcampus = [
    `An`,
    `Alternative`,
    `to`,
    `school`,
    `you`,
    `wished`,
    `to`,
    `Alternative`,
  ];
  altcampus.find((element) => element > "g"); //'to'

  let numbers = [1, 2, 3, 66, 5, 442, 12, 5412, 20];
  numbers.find((element) => element > 100); //442

  numbers.find((element) => element % 2 == 0); //2
  ```

- `find` executes callback funtion once for each element of array and if callback function returns truthy value it returns the first element that satisfied the testing function else returns undefined.
- No it does not mutate the original array

13. `unshift`

- Parameter: element : elements to add at start of array
- Return: the length of modified array
- Example:

  ```js
  let altcampus = [
    `An`,
    `Alternative`,
    `to`,
    `school`,
    `you`,
    `wished`,
    `to`,
    `Alternative`,
  ];
  altcampus.unshift("Altcampus"); //9
  console.log(altcampus); // ['Altcampus', 'An', 'Alternative', 'to', 'school', 'you', 'wished', 'to', 'Alternative']

  let numbers = [1, 2, 3];
  numbers.unshift(4, 6); // 5
  console.log(numbers); //[4,6,1,2,3]

  let empty = [];
  empty.unshift("Hello", "world"); //
  console.log(empty); //[['Hello', 'world']
  ```

- `unshift` adds elements at the start of the array and shifts other elements one index higher and returns the length of newly modified array.
- it mutate the original array

14. `findIndex`

- Parameter: accepts a callback function which is called with three arguments:

  - element: current selected element
  - index -optional: index of currently selected element.
  - array -optional: array on which find was called.

- Return: the index of first element that satisfied the testing function else returns -1.
- Example:

  ```js
  let altcampus = [
    `An`,
    `Alternative`,
    `to`,
    `school`,
    `you`,
    `wished`,
    `to`,
    `Alternative`,
  ];
  altcampus.findIndex((element) => element > "g"); //2

  let numbers = [1, 2, 3, 66, 5, 442, 12, 5412, 20];
  numbers.findIndex((element) => element > 100); //5

  numbers.findIndex((element) => element % 2 == 5); //-1
  ```

- `findIndex` executes callback funtion once for each element of array and if callback function returns truthy value it returns the index of first element that satisfied the testing function else returns -1.
- No it does not mutate the original array

15. `filter`

- Parameter: accepts a callback function which tests the elements and return true of false and it is called with three arguments:

  - element: current selected element
  - index -optional: index of currently selected element.
  - array -optional: array on which find was called.

- Return: a array tat consists of elements that passes the callback function test.

- Example:

  ```js
  let numbers = [1, 2, 3, 66, 5, 442, 12, 5412, 20];
  numbers.filter((element) => element > 100); //[442, 5412]

  numbers.filter((element) => element % 2 === 0); //[2, 66, 442, 12, 5412, 20]

  numbers.filter((element) => element % 2 !== 0); //[1, 3, 5]
  ```

- `filter` returns the array with those elements that passes the test of the callback function. if no elements passed then empty array is passed.
- No it does not mutate the original array

16. `flat`

- Parameter: accepts one parameter i.e, Depth (default to 1) , it specifies how deep the nested array structe should be flattened

- Return: a single Array consisting of by all the values concatenated into it.
- Example:
  ```js
  let numbers = [1, 2, 3, [4, 5, [6, [5, 6]]]];
  numbers.flat(); //[1, 2, 3, 4, 5, Array(2)]
  numbers.flat(2); //(7) [1, 2, 3, 4, 5, 6, Array(2)]
  numbers.flat(Infinity); //[1, 2, 3, 4, 5, 6, 5, 6]
  ```
- `flat` accepts a number as depth value and flatten the nested array structure upto that depth level.
- No it does not mutate the original array

17. `forEach`

- Parameter: accepts a callback function which is called with three arguments:

  - element: current selected element
  - index -optional: index of currently selected element.
  - array -optional: array on which find was called.

- Return: undefined

- Example:

  ```js
  let altcampus = [`An`, `Alternative`, `to`, `school`];
  altcampus.forEach((element) => console.log(element)); //An
  //Alternative
  //to
  //school

  let numbers = [1, 2, 3];
  numbers.forEach((element) => console.log(element)); //1
  //2
  //3

  let empty = [true, false, {}, undefined];
  empty.forEach((element) => console.log(element)); //true
  //false
  //{}
  //undefined
  ```

- `forEach` executes the callback function for each element of the array
- No it does not mutate the original array

18. `map`

- Parameter: accepts a callback function which is called for every element of array and each time it executes the return value is stored in new array and it is called with three arguments:

  - element: current selected element
  - index -optional: index of currently selected element.
  - array -optional: array on which find was called.

Returns: a new array of same size but element are passed through callback function.

- Example:
  ```js
  let numbers = [1, 2, 3, 10, 25, 110, 11, 234, 68161, 12];
  numbers.map((element) => element * 2); // [2, 4, 6, 20, 50, 220, 22, 468, 136322, 24]
  numbers.map((element) => element * 0); //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  numbers.map((element) => {}); //[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
  ```
- `map` return the new array of same size as original array with elements passed on by callback function
- No it does not mutate the original array

19. `pop`

- Parameter: none
- Return: the removes element
- Example:

  ```js
  let numbers = [1, 2, 3];
  numbers.pop(); //3
  numbers; //[1, 2]

  numbers.pop(); //2
  numbers; //[1]

  numbers.pop(); //1
  numbers; //[]
  ```

- `pop` removes the last element of the array and it return the deleted element.
- it mutate the original array

20. `reduce`

- Parameter:
  -callbackFn :A "reducer" function.

  The function is called with the following arguments:

  - previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].
  - currentValue: the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
  - currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
  - array: the array to traverse.

  - initialValue -Optional: A value to which previousValue is initialized the first time the callback is called.

- Return: The value that results from running the "reducer" callback function to completion over the entire array.
  ```js
  let numbers = [1, 2, 3];
  numbers.concat(4); //[1,2,3,4]
  let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
  sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
  let colors = ["red", "green", "blue"];
  colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
  ```
- `reduce` The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

- No it does not mutate the original array

21. `slice`

- Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
- Return: a single Array consisting of by all the values passed as parameters in the same order.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.concat(4); //[1,2,3,4]
  let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
  sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
  let colors = ["red", "green", "blue"];
  colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
  ```
- `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
- No it does not mutate the original array

22. `some`

- Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
- Return: a single Array consisting of by all the values passed as parameters in the same order.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.concat(4); //[1,2,3,4]
  let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
  sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
  let colors = ["red", "green", "blue"];
  colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
  ```
- `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
- No it does not mutate the original array

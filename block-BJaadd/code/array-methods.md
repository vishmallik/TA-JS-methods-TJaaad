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

8. `reverse`

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

9. `every`

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

10. `shift`

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

11. `splice`

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

12. `find`

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

13. `unshift`

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

14. `findIndex`

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

15. `filter`

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

16. `flat`

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

17. `forEach`

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

18. `map`

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

19. `pop`

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

20. `reduce`

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

Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

- Parameter - doesnt accept any parameter
- Return - return the string converted to uppercase letter but doesnt change the value of original strings since string are immutable. (string data type)
- Example:
  ```js
  "hello world".toUpperCase(); //HELLO WORLD
  "exAMPLe".toUpperCase(); //EXAMPLE
  "abc123".toUpperCase(); //ABC123
  "undeFined".toUpperCase(); //UNDEFINED
  "tRUe".toUpperCase(); //TRUE
  ```
- `toUpperCase()` converts the string to uppercase letters

3. `toLowerCase`

- Parameter - doesnt accept any parameter
- Return - return the string converted to lowercase letter but doesnt change the value of original strings since strings are immutable. (string data type)
- Example:
  ```js
  "hello World".toUpperCase(); //hello world
  "example".toUpperCase(); //example
  "aBc123".toUpperCase(); //abc123
  "UndefiNed".toUpperCase(); //undefined
  "TRUE".toUpperCase(); //true
  ```
- `toLowerCase()` converts the string to uppercase letters

4. `trim`

- Parameter - doesnt accept any parameter
- Return - return the same string but without whitespaces. (string data type)
- Example:
  ```js
  "hello World       ".trim(); //'hello World'
  "    example    ".trim(); //'example'
  "                aBc123".trim(); //'aBc123'
  "  UndefiNed          ".trim(); //'UndefiNed'
  "   TRUE  ".trim(); //'TRUE'
  ```
- `trim` removes the extra whitespaces before and after the string (string data type).

5. `trimEnd`

- Parameter - doesnt accept any parameter
- Return - return the same string but removes whitespaces that are after the string. (string data type)
- Example:
  ```js
  "hello World       ".trimEnd(); //'hello World'
  "    example    ".trimEnd(); //'    example'
  "                aBc123".trimEnd(); //'                aBc123'
  "  UndefiNed          ".trimEnd(); //'  UndefiNed'
  "   TRUE  ".trimEnd(); //'   TRUE'
  ```
- `trimEnd` removes the extra whitespaces after the string (string data type).

6. `trimStart`

- Parameter - doesnt accept any parameter
- Return - return the same string but removes whitespaces that are before the string. (string data type)
- Example:
  ```js
  "hello World       ".trimStart(); //'hello World       '
  "    example    ".trimStart(); //'example    '
  "                aBc123".trimStart(); //'aBc123'
  "  UndefiNed          ".trimStart(); //'UndefiNed          '
  "   TRUE  ".trimStart(); //'TRUE  '
  ```
- `trimStart` removes the extra whitespaces before the string (string data type).

7. `concat`

- Parameter - accepts string or multiple strings (string data type)
- Return - return string by concatenating all strings (string data type)
- Example:

  ```js
  let name = "John";
  name.concat("Snow"); //'JohnSnow'
  name.concat("Snow", "The", "Bastard"); //'JohnSnowTheBastard'
  name.concat(` Snow The Bastard Of Winterfell`); //'John Snow The Bastard Of Winterfell'
  `hello`.concat(` world!`); //'hello world!'
  "".concat(null); //"null"
  ```

  `concat` accepts string or multiple strings and concat them and returns the concatenated string.

8. `endsWith`

- Parameter - accepts two parameters

  - searchString : which is the substring to look for, at the end of calling string

  - length -optional : determines how much length to be considered for searching.

- Return - true if matches else false.

- Example:

  ```js
  let name = `John Snow The Bastard Of Winterfell`;
  name.endsWith(`ll`);
  name.endsWith(`The`); //false
  name.endsWith(`The`, 13); //true
  name.endsWith(`Winterfell`, -8); //false
  name.endsWith(`ll`, 1000); //true
  ```

  `endsWith` accepts string and length(optional) and returns true or false if the end of calling string matches with the passed string.

9. `includes`

- Parameter - accepts two parameters

  - searchString : which is the substring to look for in calling string

  - position -optional : position from where it should look for searchString.

- Return - true if matches else false.

- Example:

  ```js
  let name = `John Snow The Bastard Of Winterfell`;
  name.includes(`ll`); //true
  name.includes(`The`); //true
  name.includes(`The`, 13); //false
  name.includes(`Winterfell`, -8); //true
  name.includes(`ll`, 1000); //false
  ```

  `includes` accepts string and position(optional) and returns true or false if the passed string matches with the calling string.

10. `indexOf`

- Parameter - accepts two parameters

  - searchString : which is the substring to look for in the called string.(string data type)

  - position -optional : by default it is 0, if it is passed then it search for the first occurence of specified substring greater than or equal to position. If position value is greater than length of calling string then it doesnt search at all and if it is less than 0 then it defaults to 0. (number data type)

- Return - returns first occurence of the substring in calling string if found and if not found then return -1. (number data type)

- Example:

  ```js
  let name = `John Snow The Bastard Of Winterfell`;
  name.indexOf("o"); //1
  name.indexOf("o", 2); //7
  name.indexOf("z"); //-1
  name.indexOf("T", -7); //10
  name.indexOf("n", 50); //-1
  ```

  `indexOf` accepts substring(string data type) and position (number data type) as parameter and returns the index of substring in the called string(number data type). position is and optional string to define which occurence is to be found.

11. `lastIndexOf`

- Parameter - accepts two parameters

  - searchString : which is the substring to look for in the called string.(string data type)

  - position -optional : by default it is Infinity, if it is passed then it search for the last occurence of specified substring less than or equal to position. If position value is greater than length of calling string then it search the entire string and if it is less than 0 then it looks for the specified substring only at index 0. (number data type)

- Return - returns last occurence of the substring in calling string if found and if not found then return -1. (number data type)

- Example:

  ```js
  let name = `John Snow The Bastard Of Winterfell`;
  name.lastIndexOf("o"); //7
  name.lastIndexOf("o", 2); //1
  name.lastIndexOf("z"); //-1
  name.lastIndexOf("T", -7); //-1
  name.lastIndexOf("n", 50); //27
  ```

  `lastIndexOf` accepts substring(string data type) and position (number data type) as parameter and returns the index of substring in the called string(number data type). position is and optional string to define which occurence is to be found.

12. `padEnd`

- Parameter - accepts two parameters

  - targetLength: total length of string after padding , if targetLength < calling string length then return the string as is(i.e without any padding). (number data type)

  - padString -optional : by default it is " "(single white-space), this defines the string to pad the calling string. If padString > targetLength then it will be truncated (string data type)

- Return - returns string of paddedLength with padString applied at the end of string. (string data type)

- Example:

  ```js
  let name = `John`;
  name.padEnd(10, "o"); //'Johnoooooo'
  name.padEnd(5, "Snow"); //'JohnS'
  name.padEnd(3, "123"); //'John'
  name.padEnd(8); //'John    '
  name.padEnd(20, "*"); //'John****************'
  ```

  `padEnd` accepts targetLength(number data type) and padString (string data type) as parameter and returns a string of targetLength with paddedString applied at the end of calling string(string data type).

13. `padStart`

- Parameter - accepts two parameters

  - targetLength: total length of string after padding , if targetlength < calling string length then return the string as is(i.e without any padding). (number data type)

  - padString -optional : by default it is " "(single white-space), this defines the string to pad the calling string. If padString > targetLength then it will be truncated (string data type)

- Return - returns string of paddedLength with padString applied at the start of string. (string data type)

- Example:

  ```js
  let name = `John`;
  name.padStart(10, "o"); //'ooooooJohn'
  name.padStart(5, "Snow"); //'SJohn'
  name.padStart(3, "123"); //'John'
  name.padStart(8); //'    John'
  name.padStart(20, "*"); //'****************John'
  ```

  `padStart` accepts targetLength(number data type) and padString (string data type) as parameter and returns a string of targetLength with paddedString applied at the start of calling string(string data type).

14. `repeat`

- Parameter - accepts one parameter (number data type)

  - count: number between 0 and infinity, should not be less than -1.

- Return - returns string of specified no. of copies of given string

- Example:

  ```js
  let name = `John`;
  name.repeat(10); //'JohnJohnJohnJohnJohnJohnJohnJohnJohnJohn'
  name.repeat(0); //''
  name.repeat(1); //`John`
  name.repeat(NaN); //''
  name.repeat(-1); /*Uncaught RangeError: Invalid count value: -1
                    at String.repeat (<anonymous>)
                    at <anonymous>:1:6*/
  ```

  `repeat` repeats the original string specified no. of times(string data type)

15. `replace`

- Parameter - accepts two parameter

  - substr: string that is to be replaced (string data type)
  - newSubstr : replacement string (string data type)

- Return - returns string with the replacementof first occurence of substr. (string data type)

- Example:

  ```js
  let name = `John Snow The Bastard Of Winterfell`;
  name.replace("o", "0"); //'J0hn Snow The Bastard Of Winterfell'
  name.replace("John Snow", "Rob Stark"); //'Rob Stark The Bastard Of Winterfell'
  name.replace("o", ""); //'Jhn Snow The Bastard Of Winterfell'
  name.replace("", " "); //' John Snow The Bastard Of Winterfell'
  name.replace("n", " "); //'Joh  Snow The Bastard Of Winterfell'
  ```

  `replace` replace the substr with newSubstr at first occurence of substr

16. `slice`

- Parameter - accepts two parameter

  - indexStart: The index of the first character to include in the returned substring. (number data type)
  - indexEnd : The index of the first character to exclude from the returned substring. (number data type)

- Return - returns string containing the extracted part of the string. (string data type)

- Example:

  ```js
  let name = `John Snow The Bastard Of Winterfell`;
  name.slice(4, 10); //' Snow '
  name.slice(-5, -6); //''
  name.slice(8, 5); //''
  name.slice(0, -9); //'John Snow The Bastard Of W'
  name.slice(5, Infinity); //'Snow The Bastard Of Winterfell'
  ```

  `slice` returns the extracts string from calling string at given indexStart and end just before indexEnd.

17. `split`

- Parameter - accepts two parameter

  - separator: -optional pattern or string where split should occur, if undefined original string return in an array(string data type)
  - limit : no. of splits that should occur, any leftover text will be omitted., if limit = 0, [] returns

- Return - returns an Array of strings, split at each point where the separator occurs in the given string.

- Example:

```js
let name = `John Snow The Bastard Of Winterfell`;
name.split(" "); //['John', 'Snow', 'The', 'Bastard', 'Of', 'Winterfell']
name.split(""); //['J', 'o', 'h', 'n', ' ', 'S', 'n', 'o', 'w', ' ', 'T', 'h', 'e', ' ', 'B', 'a', 's', 't', 'a', 'r', 'd', ' ', 'O', 'f', ' ', 'W', 'i', 'n', 't', 'e', 'r', 'f', 'e', 'l', 'l']
name.split("", 4); //['J', 'o', 'h', 'n']
name.split(" ", 0); //[]
name.split("o", 2); //['J', 'hn Sn']
```

`split` returns an Array of strings, split at each point where the separator occurs in the given string.

18`substring`;

- Parameter - accepts two parameter

  - indexStart: The index of the first character to include in the returned substring. (number data type)
  - indexEnd : The index of the first character to exclude from the returned substring. (number data type)

- Return - returns string containing the specified part of the string. (string data type)

- Example:

  ```js
  let name = `John Snow The Bastard Of Winterfell`;
  name.substring(4, 10); //' Snow '
  name.substring(8, NaN); //'John Sno'
  name.substring(8, 5); //'Sno'
  name.substring(0, -9); //''
  name.substring(5, Infinity); //'Snow The Bastard Of Winterfell'
  ```

  `substring` returns the extracts string from calling string at given indexStart and end just before indexEnd. if indexEnd>indexStart then it reversed them and then calculates.

What is a string in JavaScript?

    A string is a sequence of characters used to represent text. Strings are one of the fundamental data types in JavaScript and are enclosed in single quotes (‘), double quotes (“), or backticks (`).


How do you create a string?
    You can create a string by enclosing characters in single quotes, double quotes, or backticks.


Examples:
    ‘Hello’
    “World”
    `Hello World`

What are template literals?
    Template literals are strings enclosed in backticks (`) and allow for embedded expressions using ${expression}. They can span multiple lines and include interpolated variables and expressions.


Example: `Hello, ${name}!`


How do you access characters in a string?
    You can access characters in a string using bracket notation and the index of the character. The index starts at 0 for the first character.


Example: str[0]


How do you find the length of a string?
    You can find the length of a string using the length property.


Example: str.length


How do you concatenate strings?
    You can concatenate strings using the + operator or the concat() method.


Example: str1 + str2 or str1.concat(str2)


How to find a substring in a string?
    In JavaScript, there are several ways to find a substring within a string. Here are the most common methods:

1. Using includes()
The includes() method checks if a substring exists within a string and returns a boolean (true or false).

javascript
Copy code
const str = "Hello, world!";
console.log(str.includes("world")); // true
console.log(str.includes("JavaScript")); // false

2. Using indexOf()
The indexOf() method returns the index of the first occurrence of the substring. If the substring is not found, it returns -1.

javascript
Copy code
const str = "Hello, world!";
console.log(str.indexOf("world")); // 7
console.log(str.indexOf("JavaScript")); // -1

3. Using search()
T   he search() method works with regular expressions and returns the index of the first match. If no match is     found, it returns -1.

javascript
    Copy code
    const str = "Hello, world!";
    console.log(str.search("world")); // 7
    console.log(str.search("JavaScript")); // -1
4. Using Regular Expressions

You can use a regular expression with the test() method to check if a substring exists.

javascript
Copy code
const str = "Hello, world!";
const regex = /world/;
console.log(regex.test(str)); // true

5. Using match()
The match() method can find the substring using a regular expression. It returns an array of matches or null if no match is found.

javascript
Copy code
const str = "Hello, world!";
console.log(str.match(/world/)); // ["world"]
console.log(str.match(/JavaScript/)); // null

6. Using startsWith() and endsWith()
startsWith() checks if the string starts with the given substring.
endsWith() checks if the string ends with the given substring.

javascript
Copy code
const str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("world!")); // true
When to Use Each Method:
Use includes() for a simple presence check.
Use indexOf() or search() to find the position of a substring.
Use match() or test() if you need to work with regular expressions.
Use startsWith() or endsWith() for prefix/suffix checks.
Let me know if you'd like detailed examples of any of these!







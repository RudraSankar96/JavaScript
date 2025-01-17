1. What are the differences between Java and JavaScript?
    Java is an object Oriented Programming language while JavaScript is a client-side scripting language. Both of them are totally different from each other.

    Java: It is one of the most popular programming languages. It is an object-oriented programming language and has a virtual machine platform that allows you to create compiled programs that run on nearly every platform. Java promised, “Write Once, Run Anywhere”.

    JavaScript: It is a light-weighted programming language (“scripting language”) for developing interactive web pages. It can insert dynamic text into the HTML elements. JavaScript is also known as the browser’s language.

2. What are Data Types in JavaScript?
JavaScript data types are categorized into two parts i.e. primitive and non-primitive types.

    Primitive Data Type: The predefined data types provided by JavaScript language are known as primitive data type. Primitive data types are also known as in-built data types.

    1.Numbers
    2.Strings
    3.Boolean
    4.Symbol
    5.Undefined
    6.Null
    7.BigInt

    Non-Premitive Data Type: The data types that are derived from primitive data types are known as non-primitive data types. It is also known as derived data types or reference data types.

    1.Objects
    2.Functions
    3.Arrays

3. What is the use of the isNaN function?
    The number isNan function determines whether the passed value is NaN (Not a number) and is of the type “Number”. In JavaScript, the value NaN is considered a type of number. It returns true if the argument is not a number, else it returns false.

4. Which is faster in JavaScript and ASP script?
    JavaScript is faster compared to ASP Script. JavaScript is a client-side scripting language and does not depend on the server to execute. The ASP script is a server-side scripting language always dependable on the server.

5. What is negative infinity?
    The negative infinity is a constant value represents the lowest available value. It means that no other number is lesser than this value. It can be generate using a self-made function or by an arithmetic operation. JavaScript shows the NEGATIVE_INFINITY value as -Infinity.

6. Which company developed JavaScript?
    Netscape developed JavaScript and was created by Brenden Eich in the year of 1995.

7. What are undeclared and undefined variables?
    1.Undefined: It occurs when a variable is declare but not assign any value. Undefined is not a keyword.
    2.Undeclared: It occurs when we try to access any variable which is not initialize or declare earlier using the var or const keyword. If we use ‘typeof’ operator to get the value of an undeclare variable, we will face the runtime error with the return value as “undefined”. The scope of the undeclare variables is always global.

8. What is the ‘this’ keyword in JavaScript?
    Functions in JavaScript are essential objects. Like objects, it can be assign to variables, pass to other functions, and return from functions. And much like objects, they have their own properties. ‘this’ stores the current execution context of the JavaScript program. Thus, when it use inside a function, the value of ‘this’ will change depending on how the function is defined, how it is invoked, and the default execution context.

9. Explain the working of timers in JavaScript. Also explain the drawbacks of using the timer, if any.
    The timer executes some specific code at a specific time or any small amount of code in repetition to do that you need to use the functions setTimout, setInterval, and clearInterval. If the JavaScript code sets the timer to 2 minutes and when the times are up then the page displays an alert message “times up”. The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

10. What are the different ways to create an array in JavaScript?

    Using array literal syntax: let arr = [1, 2, 3];
    Using the Array constructor: let arr = new Array(1, 2, 3);
    Using Array.of(): let arr = Array.of(1, 2, 3);
    Using Array.from(): let arr = Array.from('abc'); // ['a', 'b', 'c']

11. How do you check if a variable is an array?
    Array.isArray(variable)

12. What is the difference between push() and unshift()?
     push(): Adds elements to the end of the array.
    unshift(): Adds elements to the beginning of the array.

13. How can you remove the last element of an array?
    Using pop(): arr.pop();
14. How do you find the length of an array?
    Using the length property: arr.length.

15. How do you remove duplicates from an array?
    javascript
    Copy
    Edit
    let arr = [1, 2, 2, 3, 4, 4];
    let unique = [...new Set(arr)];

16. How can you merge two arrays?
    javascript
    Copy
    Edit
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let merged = [...arr1, ...arr2];

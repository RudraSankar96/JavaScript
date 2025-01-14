JavaScript Array map() method- FAQs

1-What is the JavaScript map() method and what is it used for?
    The JavaScript map() method is used to create a new array by applying a specified function to each element of the original array. This method does not modify the 
    original array and is particularly useful for transforming or processing data stored in arrays.


2-How does the map() method handle empty elements in an array?
    The map() method skips empty array elements, only processing non-empty values, ensuring efficient transformations and maintaining data integrity.


3-What parameters does the map() method accept in its callback function?
    The callback function used with the map() method accepts three parameters:
    element(required): The current element being processed in the array.
    index(optional): The index of the current element being processed.
    array(optional): The array map() was called upon.
5-Can map() be used with asynchronous functions in JavaScript?
    While map() can call asynchronous functions, it does not handle promises correctly. For asynchronous transformations, use Promise.all() with map() or mapAsync() 
    in frameworks that support it.


4-Can map() change the length of the array in JavaScript?
    No, map() always returns a new array with the same length as the original array, since each element of the original array corresponds to an element in the new 
    array.

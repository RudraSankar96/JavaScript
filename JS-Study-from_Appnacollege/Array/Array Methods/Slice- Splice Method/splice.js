//  Here we can delete and replace an element forn an array by using slice method.

let fruit=['apple','orange','bana','lichi','tomato'];
fruit.splice(1,2,'chiken','fish');
console.log(fruit);
//Output is [ 'apple', 'chiken', 'fish', 'lichi', 'tomato' ]

//delete 2 item from index 2
fruit.splice(2,2);
console.log(fruit); 
//Output is [ 'apple', 'chiken', 'tomato' ]

//Adding element from indx 2.
fruit.splice(1,0,'banana','orange');
console.log(fruit);
// Output is [ 'apple', 'banana', 'orange', 'chiken', 'tomato' ]
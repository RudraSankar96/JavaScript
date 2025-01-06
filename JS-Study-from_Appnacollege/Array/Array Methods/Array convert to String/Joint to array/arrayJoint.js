// Here we can joint two difeerent or same array not only two but also many.

let marvelHeros=['hulk','ironman','thor','spiderman'];
let dcHeros=['batman','superman'];
let indianHeros=['krish','shaktiman'];
let heros= marvelHeros.concat(dcHeros).concat(indianHeros);
console.log(heros);
//output is ['hulk','ironman','thor','spiderman','batman','superman','krish','shaktiman']
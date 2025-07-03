function fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}

fibonacci(5);

function greetUser(name) {
  return `Welcome, ${name}!`;
}

console.log(greetUser("Rudra"));


function circleArea(radius) {
  return Math.PI * radius * radius;
}

console.log(circleArea(5)); // 78.54

function fibonacci(number) {
  let first = 0;
  let second = 1;
  let third = first + second;

  while (third <= number) {
    first = second;

    second = third;

    third = first + second;
  }

  const nearest =
    Math.abs(third - number) >= Math.abs(second - number) ? second : third;

  const answer = nearest - number;

  return answer;
}

const num = prompt("Enter 3 number (separate by comma): ");
const arr = num.split(",").map(Number);

let sum = 0;

for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(fibonacci(sum));

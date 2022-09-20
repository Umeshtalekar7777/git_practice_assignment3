// prime check problem

let num = 13;

let factorials = 0;

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    factorials++;
  }
}
if (factorials > 0) {
  console.log(num, "Is a prime");
} else {
  console.log(num, "Is not prime");
}

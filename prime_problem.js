// prime check problem

let num = 13;

let factors = 0;

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    factors++;
  }
}
if (factors > 0) {
  console.log(num, "Is a prime");
} else {
  console.log(num, "Is not prime");
}

// prime check problem

let num = 13;

let ans = false;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    ans = true;
  }
}
if (ans==true) {
  console.log(num, "Is a prime");
} else {
  console.log(num, "Is not prime");
}

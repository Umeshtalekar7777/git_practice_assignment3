// prime check problem

let num = 13;

let flag = false;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    flag = true;
  }
}
if (flag==true) {
  console.log(num, "Is a prime");
} else {
  console.log(num, "Is not prime");
}

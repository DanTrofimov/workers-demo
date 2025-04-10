function findPrimes(limit) {
  const primes = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
}

const onCLickButton = () => {
  const date = new Date();
  console.log(
    `${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}` +
      ": on default button click"
  );
};

const triggerHeavyOperation = () => {
  let date = new Date();
  console.log(
    `${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}: heavy operation start`
  );
  findPrimes(10_000_000);

  date = new Date();

  console.log(
    `${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}: heavy operation end`
  );
};

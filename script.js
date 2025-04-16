function onCLickButton() {
  const date = new Date();
  console.log(
    `${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}` +
      ": on default button click"
  );
}

function triggerHeavyOperation(resolve = console.log) {
  let date = new Date();
  console.log(
    `${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}: heavy operation start`
  );

  const limit = 10000000;
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

  const res = primes.length;

  date = new Date();
  console.log(
    `${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}: heavy operation end`
  );

  resolve(res);
}

if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("./worklet.js");
  CSS.paintWorklet.addModule("./worklet2.js");
}

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

const worker = new Worker("./worker.js");

function triggerHeavyOperationViaWorker() {
  worker.postMessage("trigger");

  worker.onmessage = (res) => console.log(res.data);
}

function fetchData() {
  Promise.all([
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json)),
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.round(100 * Math.random())
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
  ]);
}

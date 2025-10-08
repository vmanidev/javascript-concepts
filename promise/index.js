class Cab {
  constructor() {
    this.queue = Promise.resolve();
  }

  drive(distance) {
    this.queue = this.queue.then(() => {
      return new Promise((resolve) => {
        console.log(`Driving ${distance}km...`);
        setTimeout(resolve, distance * 1000);
      });
    });
    return this;
  }

  pickup(name) {
    this.queue = this.queue.then(() => {
      return new Promise((resolve) => {
        console.log(`Picked up ${name}`);
        setTimeout(resolve, 1000);
      });
    });
    return this;
  }

  drop(name) {
    this.queue = this.queue.then(() => {
      return new Promise((resolve) => {
        console.log(`Dropped ${name}`);
        setTimeout(resolve, 1000);
      });
    });
    return this;
  }

  rest(time) {
    //chaining
    this.queue = this.queue.then(() => {
      return new Promise((resolve) => {
        console.log(`Taking rest for ${time} seconds...`);
        setTimeout(resolve, time * 1000);
      });
    });
    return this; //return this to allow chaining
  }
}

const cab = new Cab();

function bookCab() {
  //Promise chaining
  cab
    .pickup("Mani")
    .pickup("Ritu")
    .drive(5)
    .drop("Ritu")
    .drive(3)
    .drop("Mani")
    .rest(5);
}

// -----------------------------------------------

//Promise types
const p1 = Promise.resolve("Promise 1");
const p2 = Promise.resolve("Promise 2");
const p3 = Promise.resolve("Promise 3");
const p4 = Promise.reject("Promise 4 failed");

// type 1 - promise.all()
function promiseAllSuccess() {
  const promise = Promise.all([p1, p2, p3]);
  promise.then((res) => console.log(res));
}

function promiseAllFail() {
  const promise = Promise.all([p1, p2, p3, p4]);
  promise.then((res) => console.log(res));
}

// -----------------------------------------------

// type 2 - promise.allSettled()
function promiseAllSettled() {
  const promise = Promise.allSettled([p1, p2, p3, p4]);
  promise.then((res) => console.log(res));
}
// -----------------------------------------------

// type 2 - promise.any()
const task = (taskName, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${taskName} is resolved.`), delay);
  });
};

function promiseAny() {
  const promise = Promise.any([
    task("task 1", 2000),
    task("task 2", 1000),
    task("task 3", 500),
  ]);
  promise.then((res) => console.log(res));
}

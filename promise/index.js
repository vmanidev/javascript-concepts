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

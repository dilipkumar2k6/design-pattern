class MobilePhone {
  constructor() {
    this.lett = 0;
    this.long = 0;
    this.observers = [];
  }
  move() {
    this.lett += 3;
    this.long -= 5;
    this.notify();
  }
  register(observer) {
    this.observers.push(observer);
  }
  notify() {
    for (const observer of this.observers) {
      observer.update(this.lett, this.long);
    }
  }
}
class Observer {
  update(lett, long) {
    throw new Error("Implement it", { lett, long });
  }
}
class MobileApp extends Observer {
  update(lett, long) {
    console.log({ lett, long });
  }
}
const test = ()=>{
    const mobilePhone = new MobilePhone();
    const mobileApp = new MobileApp();
    mobilePhone.register(mobileApp);

    mobilePhone.move();
    mobilePhone.move();
    mobilePhone.move();
    mobilePhone.move();
    mobilePhone.move();
    mobilePhone.move();
}

test();

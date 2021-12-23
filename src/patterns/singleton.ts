/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Counter {
  private static instance: Counter;
  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor(public count: number) {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(count: number): Counter {
    if (!Counter.instance) {
      Counter.instance = new Counter(count);
    }
    return Counter.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public increase() {
    this.count++;
  }
  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public decrease() {
    this.count--;
  }
}

const counterA = Counter.getInstance(10);
const counterB = Counter.getInstance(100);

console.log(counterA === counterB);
counterB.count = 40;
counterA.increase();
console.log(counterA.count, counterB.count);

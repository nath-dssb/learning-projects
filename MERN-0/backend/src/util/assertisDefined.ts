export function assertisDefined<T>(val: T): asserts val is NonNullable<T> {
  //T allows to check any type withouth explicitly declaring any
  if (!val) {
    throw Error("Expected 'val' to be defined, but recieved " + val);
  }
}

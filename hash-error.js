export function indexLargerThanBucketsError(index, bucketsLength) {
    if (index < 0 || index >= bucketsLength) {
    throw new Error("Trying to access index out of bounds");
  }
}
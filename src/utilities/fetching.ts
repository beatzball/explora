export default function ing<T>(promise: Promise<T>) {
  return promise
    .then(data => {
      return [null, data];
    })
    .catch(err => [err]);
}

const basicPromise = new Promise(res => {
  res('basicPromise');
});
const funcPromise = () =>
  new Promise(res => {
    res('funcPromise');
  });
const chainedPromise = prom => {
  if (typeof prom === 'function') {
    prom = prom();
  }
  const promise = Promise.resolve(prom);
  return promise.then(val => val);
};
const rejectedPromise = () => {
  return Promise.reject(new Error('rejectedPromise'));
};

module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };

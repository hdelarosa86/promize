const basicPromise = new Promise(res => {
  res('basicPromise');
});
const funcPromise = () =>
  new Promise(res => {
    res('funcPromise');
  });
const chainedPromise = prom => {
  let promise = new Promise(res => {
    res(prom);
  }).then( val => val );
  return promise;
};
const rejectedPromise = () => {
    const promise = new Promise ( (res,rej) => {
        const reason = new Error('rejectedPromise'); 
        rej(reason);
    })
    return promise;
};

module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };

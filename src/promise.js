const basicPromise = new Promise( (res) => {
    res('basicPromise');
})
const funcPromise = () => new Promise( (res) => {
    res('funcPromise');
});
const chainedPromise = prom => null;
const rejectedPromise = () => null;

module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };

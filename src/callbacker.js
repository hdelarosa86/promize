const syncCallbacker = (res, rej) => {
  if ([...arguments].length < 2) {
    throw new Error('Error');
  }

  //   if (Array.isArray(arguments)) {
  //     const args = [...arguments];
  //     args.forEach(fn => {
  //       if (typeof fn !== 'function') {
  //         throw new Error('Error');
  //       }
  //     });
  //   } else
  if (typeof res !== 'function' || typeof rej !== 'function') {
    throw new Error();
  }

  const resolved = res();
  return rej(resolved);
};

const asyncCallbacker = (a, b) => {
  if ([...arguments].length < 2) {
    throw new Error('Error');
  }

  if (typeof a !== 'function' || typeof b !== 'function') {
    throw new Error();
  }
  let data = '';
  const done = (data) => {
      b(data, done);
  }
  a(data, done);


};

module.exports = { syncCallbacker, asyncCallbacker };

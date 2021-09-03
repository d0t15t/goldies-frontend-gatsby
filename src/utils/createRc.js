const [a1, a2] = process.argv.slice(2);
console.log('🚀 ~ file: createRc.js ~ line 2 ~ a1, a2', a1, a2);

process.argv.forEach((val, index, array) => {
  // console.log(`${index}: ${val}`);
  // console.log('🚀 ~ file: createRc.js ~ line 2 ~ process.argv.forEach ~ array', array);
});

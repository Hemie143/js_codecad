const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  const checkB = func(val);
  if (checkA === checkB) {
    return checkA
  } else {
    console.log('inconsistent results');
  }
}

console.log(checkConsistentOutput(addTwo, 3));

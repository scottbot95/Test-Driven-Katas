function twoSum(array, target) {
  const pastNums = {};

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const compliment = target - num;
    const existingIdx = pastNums[compliment];
    if (existingIdx !== undefined) {
      return [existingIdx, i];
    } else {
      pastNums[num] = i;
    }
  }

  return [];
}

module.exports = twoSum;

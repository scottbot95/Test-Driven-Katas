function wrap(string, colNum) {
  // if (!string) return '';
  // else if (string.length <= colNum) return string;
  const regexStr = '(.{0,' + colNum + '})(\\s|$)';
  const regexp = new RegExp(regexStr, 'g');
  return string.replace(regexp, '$1\n').trim();
}

module.exports = wrap;

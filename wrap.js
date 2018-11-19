function wrap(string, colNum) {
  if (!string) return '';
  else if(string.length <= colNum) return string;
}

module.exports = wrap;

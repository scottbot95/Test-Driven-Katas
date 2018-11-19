function wrap(string, colNum) {
  // if (!string) return '';
  // else if (string.length <= colNum) return string;
  const regexStr = '(.{0,' + colNum + '})(\\s|$)';
  const regexp = new RegExp(regexStr, 'g');
  return string.replace(regexp, '$1\n').trim();
}

function wrap2(line, maxLength) {
  if (line.length <= maxLength) {
    return line;
  }

  const indexOfBlank = line.lastIndexOf(' ', maxLength);
  let split;
  let offset;
  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else {
    split = maxLength;
    offset = 0;
  }

  return (
    line.substring(0, split) +
    '\n' +
    wrap(line.substring(split + offset), maxLength)
  );
}

module.exports = wrap;

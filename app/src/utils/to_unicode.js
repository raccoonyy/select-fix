const toUnicode = (str) => {
  return str.split('').map((value) => {
    const temp = value.charCodeAt(0).toString(16).toUpperCase();
    if (temp.length > 2) {
      return `\\u${temp}`;
    }
    return value;
  }).join('');
};

module.exports = toUnicode;

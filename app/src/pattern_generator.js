const patterns = require('./patterns');
const toUnicode = require('./utils/to_unicode');

const patternGenerator = function patternGenerator(preMatchRule, postMatchRule, targetWord) {
  var prePattern = patterns.FRONT_WORD_PATTERN;
  var postPattern = '';

  switch(preMatchRule) {
    case 'all': break;
    case 'whitespace':
      prePattern += patterns.WHITESPACE_PATTERN;
      break;
    case 'alphabet':
      prePattern += patterns.ALPHABET_PATTERN;
      break;
    case 'korean':
      prePattern += patterns.KOREAN_PATTERN;
      break;
    case 'head':
      prePattern = patterns.HEAD_PATTERN;
      break;
  }

  switch(postMatchRule) {
    case 'all':
      postPattern = patterns.BACK_WORD_PATTERN;
      break;
    case 'whitespace':
      postPattern = patterns.WHITESPACE_PATTERN + patterns.BACK_WORD_PATTERN;
      break;
    case 'alphabet':
      postPattern = patterns.ALPHABET_PATTERN + patterns.BACK_WORD_PATTERN;
      break;
    case 'korean':
      postPattern = patterns.KOREAN_PATTERN + patterns.BACK_WORD_PATTERN;
      break;
    case 'end':
      postPattern = patterns.END_PATTERN;
      break;
  }

  var beforeWord = '(' + toUnicode(targetWord) + ')';
  var regexStr = prePattern + beforeWord + postPattern;
  console.log(regexStr);
  return new RegExp(regexStr, 'g');
}

module.exports = patternGenerator;

const patterns = require('./patterns');
const toUnicode = require('./utils/to_unicode');
const groupRegex = require('./utils/group_regex');

const patternMatch = (article, targetWord) => {
  const unicodeTargetWord = toUnicode(targetWord);

  const beforeWord = '(.';
  const afterWord = '.)';
  const regex = new groupRegex(`${beforeWord}${unicodeTargetWord}${afterWord}`);

  const result = article.match(regex);
  return article.match(regex);
};

module.exports = patternMatch;

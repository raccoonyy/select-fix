const patternMatcher = require('../src/pattern_matcher');
const toUnicode = require('../src/utils/to_unicode');
const { expect } = require('chai');

describe('patternMatcher', () => {
  describe('default', () => {
    it('앞뒤 한 단어씩을 함께 리턴', () => {
      const targetWord = '불어';
      const article = '이렇게 영어와 불어는 서로 영향을';
      const result = patternMatcher(article, targetWord);

      expect(result.group(1)).to.equal(' 불어는');
    });
  });
});

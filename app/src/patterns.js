const WHITESPACE_PATTERN = '[\\s|\\b]';
const ALPHABET_PATTERN = '[A-Za-z]';
const KOREAN_PATTERN = '[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]';
const HEAD_PATTERN = '^';
const END_PATTERN = '$';

const FRONT_WORD_PATTERN = '.*[\\s|\\b]';
// 바로 앞이 빈 칸이면 그 앞의 단어까지
// 바로 앞이 글자이면 그 앞의 빈 칸과 그 앞의 단어까지
const BACK_WORD_PATTERN = '[\\s|\\b].*';
// 바로 뒤가 빈 칸이면 그 뒤 단어까지
// 바로 뒤가 글자이면 그 뒤의 빈 칸과 그 뒤 단어까지

module.exports = {
  WHITESPACE_PATTERN: WHITESPACE_PATTERN,
  ALPHABET_PATTERN: ALPHABET_PATTERN,
  KOREAN_PATTERN: KOREAN_PATTERN,
  HEAD_PATTERN: HEAD_PATTERN,
  END_PATTERN: END_PATTERN,
  FRONT_WORD_PATTERN: FRONT_WORD_PATTERN,
  BACK_WORD_PATTERN: BACK_WORD_PATTERN,
}

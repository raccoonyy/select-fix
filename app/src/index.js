require('./styles.css');
const patternMatcher = require('./pattern_matcher');

const previewButton = $('#button-preview');
previewButton.on('click', () => {
  const targetWord = $('#fix-word input.target').val();
  const article = $('#before-article').val();

  const matchList = patternMatcher(article, targetWord);
  console.log(matchList);
});

const afterArticleTextarea = $('#after-article');

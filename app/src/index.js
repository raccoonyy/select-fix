require('./styles.css');
require('semantic-ui-css/semantic.min.css');

const patternGenerator = require('./pattern_generator');

const beforeArticleTextarea = $('#before-article');
// const afterArticleTextarea = $('#after-article');

const beforeWordInput = $('#fix-word input.before');
// const afterWordInput = $('#fix-word input.after');

const preMatchRuleSelect = $('#fix-rule .pre');
const postMatchRuleSelect = $('#fix-rule .post');
const fixWord = $('#fix-rule .before');

// const beforeRuleSelect = $('before-rule');
// const afterRuleSelect = $('after-rule');

const previewButton = $('#button-preview');

beforeWordInput.on('keyup', () => {
  fixWord.text($(this).val());
});

previewButton.on('click', () => {
  const preMatchRule = preMatchRuleSelect.val();
  const postMatchRule = postMatchRuleSelect.val();
  const targetWord = beforeWordInput.val();

  const pattern = patternGenerator(preMatchRule, postMatchRule, targetWord);
  const beforeArticle = beforeArticleTextarea.val();

  const matchList = beforeArticle.match(pattern);
  console.log(matchList);
});

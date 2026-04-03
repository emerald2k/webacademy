function numberParagraphs() {
  let paragraphs = document.querySelector('#container11');
  for (let i = 0; i < paragraphs.children.length; i++) {
    let p = paragraphs.children[i];
    p.textContent = i + 1;
  }
}
function appendNumberToParagraphs() {
  let paragraphs = document.querySelector('#container11');
  for (let i = 0; i < paragraphs.children.length; i++) {
    let p = paragraphs.children[i];
    p.textContent = i + 1 + '. ' + p.textContent;
  }
}

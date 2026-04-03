function addLinks() {
  let linksContainer = document.querySelector('#links');
  const texts = ['Google', 'Facebook', 'Twitter'];
  // take each link from linksContainer and append to each a texts from the texts array, each link should have a different text from the array
  for (let i = 0; i < linksContainer.children.length; i++) {
    let link = linksContainer.children[i].querySelector('a');
    link.textContent = link.textContent + ' - ' + texts[i];
  }
}

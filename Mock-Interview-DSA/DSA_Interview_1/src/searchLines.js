/*
  Given:
    a linked list of words
    a concordance
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/
function searchLines(words, concordance, data) {
  let llWord = words.head;
  let result = []
  
  while (llWord) {
    if (concordance[llWord.value]) {
      concordance[llWord.value].forEach(sentenceIndex => {
        result.push(data[sentenceIndex]);
      })
    }
    llWord = llWord.next;
  }

  let tempSet = new Set(result);
  return [...tempSet];
}

module.exports = searchLines;

/*
 Given an array of sentences making up a body of text,
 output a concordance of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.

 const data = [
  "All human beings are born free and equal in dignity and rights.",
  "They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.",
  "Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status.",
  "Furthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty.",
  ...
  ]

  {
        all: [
           0,  2,  5,  8, 9,
          13, 44, 48, 50
        ],
        human: [ 0, 39, 49 ],
        beings: [ 0 ],
        
}
*/
function concordance(data) {

    // O(N)
    // 1) iterate through the strings within data and turn each sub array to a set
    //  data[0] = ['all, 'human', 'beings', ..., 'and', 'rights'] and lowercase each word
    let setArray = [];
    data.forEach((sentence) => {
        const tempArray = sentence.split(/[\s.,';]/);
        const wordSet = new Set(tempArray);        
        setArray.push(wordSet);
    })

    // setArray = [{ 'hi', 'my', 'name', 'is' }, { 'i', 'my', 'here' }, ...]
    // O(N^2)
    // 2) Build a map with the keys being each word, and the value being an array which takes the 
        //  index within data that the key was found at. insert each index
    const map = new Map();
    for (let i = 0; i < setArray.length; i++) { 
        setArray[i].forEach((word) => { // [{ 'hi', 'my', 'name', 'is' }]
            word = word.toLowerCase();
            if (map.has(word) && word !== '') {
                let temp = map.get(word);
                temp.push(i)
                map.set(word, temp)
            } else if (word !== ''){
                map.set(word, [i]) // Map = {}
                // console.log(map)
                // console.log(map.get(word));
            }
        })
    }

    let expectedOutput = {};
    map.forEach((value, key) => {
        expectedOutput[key] = value;
    })

    return expectedOutput;    
}

module.exports = concordance;
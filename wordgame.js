function longestWord(sentence) {
    let words = sentence.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

function shortestWord(sentence) {
    let words = sentence.split(' ');
    let shortest = words[0]; 
    for (let i = 1; i < words.length; i++) {
        if (words[i].length <= shortest.length) {
            shortest = words[i];
        }
    }
    return shortest;
}

function wordLengths(sentence) {
    let sum = 0;
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        sum += words[i].length;
    }
    return sum;
}

function analyzeSentence() {
    const sentence = document.getElementById('sentenceInput').value;
    document.getElementById('longestWord').innerText = 'Longest Word: ' + longestWord(sentence);
    document.getElementById('shortestWord').innerText = 'Shortest Word: ' + shortestWord(sentence);
    document.getElementById('wordLengths').innerText = 'Total Length of Words: ' + wordLengths(sentence);
}

console.log(longestWord('The yellow dog barked loud'));
console.log(shortestWord('The yellow dog barked loud'));
console.log(wordLengths('The yellow dog barked loud'));

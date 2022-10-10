const wordCount = (sentence)=> {
    const freqWord = {};
    const sentenceArray = sentence.split(" ");
    for(let word of sentenceArray){
        if(word in freqWord){
            freqWord[word]++;
        }else {
            freqWord[word] = 1;
        }
    }
    return freqWord;
    
}

console.log(wordCount("the quick brown fox jumps over the lazy dog"))
// const freqLetter = (sentence)=> {
//     const match = 'abcdefghijklmnopqrstuvwxyz';
//     const result ={
//     };
    
//     //this loop will set initial value to 0 in all a-z as a key
//     for(let value of match)
//         result[value] = 0;    
    
//     for(let value of sentence){
//         let findMatch = match.indexOf(value.toLowerCase());
//         if(findMatch > -1){
//             const temp = value.toLowerCase();
//             result[temp]++;
//         }
//     }
//     return result;
// }

// console.log(freqLetter("ABCDEFGHIJKLMNOPQRSTUVWXYZ./,12324"));
// console.log(freqLetter("Hello Akash, How are you feeling today!"))

//second approach
const freqLetter1 = (sentence)=> {
    const freqLetter = {};
    for(let letter of sentence){
        const lowerLetter = letter.toLowerCase();
        if(lowerLetter in freqLetter){
            freqLetter[lowerLetter]++;
        }else {
            freqLetter[lowerLetter] = 1;
        }
    }
    return freqLetter;
}
console.log(freqLetter1("Hello Akash, How are you feeling today!"));
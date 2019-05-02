// eslint-disable-next-line complexity
const wrap = (line, maxLen) => {
    let wrapWord = '';
    let arrOfWords = line.split(" ");
    let newLine = "\n";

    if (line === '') return wrapWord;

    for (let i = 0; i < arrOfWords.length; ++i){
        let spaceLeft;
        let word = arrOfWords[i];
        let wordLen = arrOfWords[i].length;
        
        if (!wrapWord.includes(newLine)) {
            spaceLeft = maxLen - wrapWord.length;
        } else {
            spaceLeft = maxLen - wrapWord.lastIndexOf(newLine);
        }
        console.log("this is space left ", spaceLeft, " this is i ", i, "this is wrapWord ", wrapWord);
        if (spaceLeft === maxLen && wordLen > maxLen){
            console.log("this is running")
            let lastSlice = 0;
            for (let j = 1; j <= wordLen; ++j) {
                if (j % maxLen === 0) {
                    wrapWord += word.slice(lastSlice, j);
                    lastSlice = j;
                }
            }
            wrapWord += word.slice(lastSlice) + " ";

        } else if (spaceLeft >= wordLen) {
            wrapWord += word;
            if (spaceLeft - wordLen > 0){
                wrapWord += ' ';
            }
        } else {
            wrapWord += newLine + word
            if (wordLen < maxLen && i !== arrOfWords.length - 1){
                wrapWord += ' ';
            }
        }
    }
    return wrapWord;
};


module.exports = wrap;
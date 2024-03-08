function mergeAlternately(word1: string, word2: string): string {
    let minLength = Math.min(word1.length, word2.length);
    let resultString = "";
    for (let i = 0; i < minLength; i++) {
        resultString += word1[i] + word2[i];
    }
    if (word1.length > word2.length) {
        resultString += word1.slice(minLength, word1.length)
    }
    else {
        resultString += word2.slice(minLength, word2.length)
    }
    return resultString;
}
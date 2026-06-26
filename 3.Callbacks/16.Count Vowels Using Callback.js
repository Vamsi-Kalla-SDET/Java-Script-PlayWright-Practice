function countVowels(str, callback) {
    let count = 0;

    for (let ch of str.toLowerCase()) {
        if ("aeiou".includes(ch)) {
            count++;
        }
    }

    callback(count);
}

countVowels("JavaScript", function(result) {
    console.log("Vowels =", result);
});
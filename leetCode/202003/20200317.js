/*
 * @Description: 
 * @Author: zhangkai
 * @Date: 2020-03-17 21:16:58
 * @LastEditTime: 2020-03-17 22:41:55
 * @LastEditors: zhangkai
 */

 /**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 * 
 * 要点：
 *      1，单词中具备的字母在字母表中也具备
 *      2，字母表中每个字母的个数应该满足单词中每个字母出现的次数，大于等于
 * 
 * 注意：每次拼写时，chars 中的每个字母都只能用一次。
 */

 /* 
    耗时：196ms
    内存：43.9MB
    超过：66.67%
 */
var countCharacters = function(words, chars) {
    // 找出字母表中每个字母的次数
    let charsMap = new Map();
    for (let char of chars) {
        charsMap.set(char, charsMap.has(char) ? charsMap.get(char) + 1 : 1)
    }
    let string = '';
    for (let i = 0; i < words.length; i++) {
        
        let wordMap = new Map();
        // 获取单词中字母出现的次数
        for (let letter of words[i]) {
           wordMap.set(letter, wordMap.has(letter) ? wordMap.get(letter) + 1 : 1);
        }
        let isRight = true;
        for (let letter of words[i]) {
            // 如果单词中字母的出现次数大于字母表中字母的出现次数 或者 字母表没有此字母
            if (wordMap.get(letter) > charsMap.get(letter) || !charsMap.has(letter)) {
                isRight = false;
                break;
            }
        }
        if (isRight) { string += words[i]; }
    }
    return string.length;
};
let words = ["cat","bt","hat","tree"], chars = "atach";
console.log(countCharacters(words, chars));

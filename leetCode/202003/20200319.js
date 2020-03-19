/*
 * @Description: 最长回文串
    给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
    在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * @Author: zhangkai
 * @Date: 2020-03-19 20:13:32
 * @LastEditTime: 2020-03-19 21:54:40
 * @LastEditors: zhangkai
 */
/**
 * @param {string} s
 * @return {number}
 */

 /* 
    时间：60 ms
    内存：35.5MB
    耗时: 97.67%
 */
var longestPalindrome = function(s) {
    let array = s.split('');
    let map = {};
    for(let i = 0; i < array.length; i++) {
        map[array[i]] = map[array[i]] ? map[array[i]] + 1: 1;
    }
    let number = 0;
    for (let item in map) {
        if (map[item] >= 2) {
            let n = Math.floor(map[item] / 2) * 2
            number += n;
        }
        if (map[item] % 2 == 1 && number % 2 == 0) { 
            number++; 
            hasSign = true;
        }
        
    }
    return number;
};
console.log(longestPalindrome('ccc')); 
/*
 * @Description: 最后一个单词的长度
 * @Author: zhangkai
 * @Date: 2020-03-11 19:47:24
 * @LastEditTime: 2020-03-11 19:50:09
 * @LastEditors: zhangkai
 */

 /* 
    耗时：60ms
    内存：33.7MB
    击败：82.80%
 */

 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let string = s.trim();
    if (!string.length) return 0;
    let array = string.split(' ');
    console.log(array);
    return array[array.length - 1].length;
};
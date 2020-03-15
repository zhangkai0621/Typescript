/*
 * @Description: 回文数：判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * @Author: zhangkai
 * @Date: 2020-03-10 20:44:52
 * @LastEditTime: 2020-03-10 22:07:32
 * @LastEditors: zhangkai
 */


 /* 
    耗时：328ms
    内存：45.9MB
    击败：5.57%
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let array = x.toString().split('');
    for (let i = 0; i < array.length / 2; i++) {
        let value = array[i];
        let index = array.length - 1 - i;
        array[i] = array[index];
        array[index] = value;
    }
    return Number(array.join('')) === x;
};


/* 
    精简版
*/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function(x) {
    var string = x.toString().split('').reverse().join('');
    return string == x ? true : false;
};

/* 
    进阶：你能不将整数转换为字符串来解决此问题吗？
*/

/* 
算法：

    首先，我们应该处理一些临界情况。所有负数都不可能是回文，例如：-123 不是回文，因为 - 不等于 3。所以我们可以对所有负数返回 false。

    现在，让我们来考虑如何反转后半部分的数字。
    对于数字 1221，如果执行 1221 % 10，我们将得到最后一位数字 1，
    要得到倒数第二位数字，我们可以先通过除以 10 把最后一位数字从 1221 中移除，1221 / 10 = 122，
    再求出上一步结果除以 10 的余数，122 % 10 = 2，就可以得到倒数第二位数字。
    如果我们把最后一位数字乘以 10，再加上倒数第二位数字，1 * 10 + 2 = 12，就得到了我们想要的反转后的数字。
    如果继续这个过程，我们将得到更多位数的反转数字。

    现在的问题是，我们如何知道反转数字的位数已经达到原始数字位数的一半？

    我们将原始数字除以 10，然后给反转后的数字乘上 10，所以，当原始数字小于或等于反转后的数字时，就意味着我们已经处理了一半位数的数字。
*/


 /* 
    耗时：200ms
    内存：45.1MB
    击败：94.53%
    注意：JS 精度问题，需要着重处理
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome3 = function(x) {
    // 负数不为回文数，如果负数，直接 return false
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;

    let reverteNum = 0;
    // 原始数字大于反转后的数字，继续处理
    while (x > reverteNum) {
        reverteNum = x % 10 + reverteNum * 10;
        x = parseInt(x / 10);
    }
    return x == reverteNum || x == parseInt(reverteNum / 10);
 }


/*
 * @Description: 字符串的最大公因子：对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。
    返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。
 * @Author: zhangkai
 * @Date: 2020-03-12 20:37:53
 * @LastEditTime: 2020-03-12 22:19:39
 * @LastEditors: zhangkai
 */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // GCD （欧几里得）算法，取最大公约数
    function check(a, b) {
        return b == 0 ? a : check(b, a % b);
    }
    // 假设 str1 为 n 个 A，str2 为 m 个 A，则 str1 + str2 == str2 + str1
    if (!(str1 + str2 == str2 + str1)) { return ''; }

    // 辗转相除法取最大公约数
    return str1.substr(0, check(str1.length, str2.length));
};
console.log(gcdOfStrings("A",
"AA"));

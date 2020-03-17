/*
 * @Description: 字符串压缩：字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
 比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。
 你可以假设字符串中只包含大小写英文字母（a至z）。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/compress-string-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @Author: zhangkai
 * @Date: 2020-03-16 20:28:21
 * @LastEditTime: 2020-03-16 20:56:08
 * @LastEditors: zhangkai
 */
/**
 * @param {string} S
 * @return {string}
 */

 /* 
    用时：72ms
    内存：39.2MB
    超过：67.50%
 
 */
var compressString = function(S) {
    let array = S.split('');
    let string = ''; // 生成的字符串
    let index = 1; // 重复项
    for (let i = 0; i < array.length; i++) {
        // 相互两个不相等则拼接字符串，如'a' + 2
        if (array[i] != array[i + 1]) { 
            string += array[i] + index;
            index = 1;
        } // 若相等，则重复项 +1
        else {
            index ++;
        }
        // 生成的字符串长度大于或等于原有字符串，则返回原有字符串，减少耗时
        if (string.length >= S.length) { return S; }
    }
    return string;
};
console.log(compressString('abbccd'));
console.log(compressString('aabcccccaaa'));


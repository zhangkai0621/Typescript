/*
 * @Description: 最后一个单词的长度
 * @Author: zhangkai
 * @Date: 2020-03-11 19:47:24
 * @LastEditTime: 2020-03-11 21:20:08
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


/* 
给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

形式上，如果可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/* 
    执行用时：72 ms
    内存消耗：39.6 MB
    击败：89.34%
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    // 求和
     var sum = A.reduce((sum, item) => sum + item, 0 );
     // 和不能被 3 整除，return false
     if (sum % 3 != 0 ) { return false; }
     // 从两边往中间，双指针查找
     var left = 0, right = A.length - 1; 
     var leftSum = A[left], rightSum = A[right];
     while (left + 1 < right) {
         // 左边之和不为3的倍数
         if (leftSum == sum / 3 && rightSum == sum / 3) {
             return true;
         }
         
         if (leftSum != sum / 3) {
             leftSum += A[++left];
             
         }
         if (rightSum != sum / 3) {
             rightSum += A[--right];
             
         }
     }
     return false;
 };
console.log(canThreePartsEqualSum(
    [10,-10,10,-10,10,-10,10,-10])); 
/*
 * @Description: 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * @Author: zhangkai
 * @Date: 2020-03-14 20:54:09
 * @LastEditTime: 2020-03-15 00:07:08
 * @LastEditors: zhangkai
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length < 2) return nums.length;
    let dp = new Array(nums.length).fill(1); // 
    let max = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS([-2,-1]));


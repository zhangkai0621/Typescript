/*
 * @Description: 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * @Author: zhangkai
 * @Date: 2020-03-08 19:41:07
 * @LastEditTime: 2020-03-08 20:28:46
 * @LastEditors: zhangkai
 */
// 两数之和
// 时间复杂度 O(n^2)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if (sum === target && i !== j) {
                return [i,j];
            }
            
        }
    }
    return [];
};


// Map 解法 ——一遍哈希表
// 时间复杂度O(n)
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let key = map.get(target - nums[i]); // 是否存在一个值与 target - x 相等的目标元素
        if (key !== undefined) { 
            return [key, i] 
        }
        map.set(nums[i], i);
    }
};

console.log(twoSum([2,7,11,15], 9));



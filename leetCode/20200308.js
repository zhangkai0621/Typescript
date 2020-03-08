/*
 * @Description: 
 * @Author: zhangkai
 * @Date: 2020-03-08 19:41:07
 * @LastEditTime: 2020-03-08 20:26:26
 * @LastEditors: zhangkai
 */
// 两数之和
// 时间复杂度 O(n^2)
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



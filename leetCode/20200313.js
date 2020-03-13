/*
 * @Description: 多数元素：给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
    你可以假设数组是非空的，并且给定的数组总是存在多数元素。
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/majority-element
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @Author: zhangkai
 * @Date: 2020-03-13 22:15:47
 * @LastEditTime: 2020-03-13 23:34:26
 * @LastEditors: zhangkai
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    /* 
    排序算法
        时间：88ms
        内存：37.7MB
        超过：38.41%

    let array = nums.sort((a, b) => a-b);
    // 因为 出现的元素最大次数大于 n / 2，所以排序后中间的一位必是出现次数最多的元素
    let index = Math.floor(array.length / 2);
    return array[index]; 
    
    */

    /* 
        时间：108ms
        内存：37.4MB
        超过：14.24%
    
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let key = map.has(nums[i]) ? map.get(nums[i]) : 1;
        map.has(nums[i]) ? map.set(nums[i], ++key) : map.set(nums[i], key);
        if (map.get(nums[i]) > nums.length / 2) return nums[i];
    }
    
    */

    /* 
        时间：68ms
        内存：37.3MB
        超过：89.69%

        摩尔投票算法

        摩尔投票算法是基于这个事实：每次从序列里选择两个不相同的数字删除掉（或称为“抵消”）
        最后剩下一个数字或几个相同的数字，就是出现次数大于总数一半的那个
    */
   let major = nums[0];
   let count = 0;
   for (let i = 0; i < nums.length; i++) {
       if (count == 0) {
           major = nums[i];
       }
       if (major == nums[i]) {
           count ++;
       }
       else {
           count --;
       }
   }
   return major;
    
};  
console.log(majorityElement([2,2,1,1,1,2,2]));



/* 
此算法时间复杂度为 O（n^2）超出时间限制

let obj = {};
for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[i] == nums[j]) {
            obj[nums[i]]++;
        }
    }
}
let min = 0, key = ''; // 
for (let item in obj) {
    if (obj[item] > min) {
        min = obj[item];
        key = item;
    }
}
return key; */
/*
 * @Description: 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
    不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @Author: zhangkai
 * @Date: 2020-03-15 21:15:28
 * @LastEditTime: 2020-03-15 21:38:53
 * @LastEditors: zhangkai
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
    用时：92 ms
    内存：37.4MB
    击败：55.39%
*/
var removeDuplicates = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] == nums[i]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1,1,2]));

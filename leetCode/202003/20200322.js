/*
 * @Description: 使数组唯一的最小增量
    给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。
    返回使 A 中的每个值都是唯一的最少操作次数。
 * @Author: zhangkai
 * @Date: 2020-03-22 21:37:55
 * @LastEditTime: 2020-03-22 22:23:14
 * @LastEditors: zhangkai
 */

 /**
 * @param {number[]} A
 * @return {number}
 */

/* 
    耗时：160ms
    内存：40.9MB
    超过：75.86%
*/
var minIncrementForUnique = function(A) {
    /* 这题先排下序就很好做了，升序排序。
    然后遍历数组，如果当前遍历的数小于或等于前一个数，说明要move
    计算当前数和前一个数的差值再加1，就实现了当前数比前一个数多1。 */
    A.sort((a, b) => a - b);
    let key = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] <= A[i - 1]) { 
            let n = A[i - 1] - A[i] + 1;
            key += n;
            A[i] += n;
        }
    }
    return key;
};
console.log(minIncrementForUnique([3,2,1,2,1,7]));
/*
 * @Description: 水壶问题

有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？
如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。
你允许：
    装满任意一个水壶
    清空任意一个水壶
    从一个水壶向另外一个水壶倒水，直到装满或者倒空

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/water-and-jug-problem
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * @Author: zhangkai
 * @Date: 2020-03-21 22:28:21
 * @LastEditTime: 2020-03-21 23:26:25
 * @LastEditors: zhangkai
 */


 /**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */

 /* 
    耗时：60ms
    内存：33.6MB
    击败：79.41%

 */
var canMeasureWater = function(x, y, z) {
    if (z < 0 || x + y < z) return false;
    if (!z) return true;
        let gcd = (a, b) => {  return b == 0 ? a : gcd(b, a % b);  }
    let g = 0; // 最大公因数
    if (x == 0 || y == 0) {
        g = x + y;
    }
    else {
        g = gcd(x, y);
    }
    return !(z % g);
}
let x = 34, y = 5, z = 6;
console.log(canMeasureWater(x, y, z));
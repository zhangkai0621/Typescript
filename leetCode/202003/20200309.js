/*
 * @Description: 整数反转：给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * @Author: zhangkai
 * @Date: 2020-03-09 20:37:43
 * @LastEditTime: 2020-03-09 22:21:24
 * @LastEditors: zhangkai
 */
/**
 * @param {number} x
 * @return {number}
 */

 /* 
    用时： 96ms
    内存消耗：37MB
    击败：31.94%
    
 */
var reverse = function(x) {
    let string = x.toString();
    var array = string.split('');
    var notNumIndex = 0; // 不是数字的数量
    var notZeroIndex = 0; // 可省略的0有几个
    var isJudgeZero = true;
    for (let i = 0; i < array.length / 2; i++) {
        
        if (/^[0-9]*$/.test(array[i])) {
            let otherIndex = array.length + notNumIndex - 1 - i;
            let value = array[i];
            array[i] = array[otherIndex];
            array[otherIndex] = value;
            if (Number(array[i]) === 0 && isJudgeZero) {
                notZeroIndex ++;
                // array.splice(i, 1);
            }
            else {
                isJudgeZero = false;
            }
        }
        else {
            notNumIndex ++;
        }
    }
    array.splice(0 + notNumIndex, notZeroIndex)
    let number = array.join('');
    if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
        return 0;
    }
    return array.join('');
};

let number = reverse(102);
console.log(number)



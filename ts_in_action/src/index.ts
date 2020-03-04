/*
 * @Description: ts 入口文件
 * @Author: zhangkai
 * @Date: 2020-02-21 10:28:59
 * @LastEditTime: 2020-03-04 10:21:34
 * @LastEditors: zhangkai
 */
// import './part-1/enum.ts';
// import './part-1/interface.ts';
import './part-1/class';

let userName: string = 'hello world';

let arr: number [] = [1, 2, 3];
let arr2: Array<number | string> = [3, 2, 1, '5'];

// 元祖
let tuple: [number, string] = [1, '2'];
// 元祖越界
tuple.push(2);
// console.log(tuple); // 能push，但不能越界访问
// console.log(tuple[2]); // err

// 函数
let add = (x: number, y: number) => x + y;
let compute = (x: number, y: number) => x + y;
compute = (a, b) => a + b;

// 对象
let obj: {x: number, y: number} = {x: 1, y: 2};
obj.x = 3;

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();
// console.log(s1 === s2); // false

// void 表示没有任何类型，当一个函数没有返回值时，通常会见到返回值类型是 void
let noReturn = () => {};

// any
let x;

// never
let err = () => {
    throw new Error('error'); // 抛出错误
}
// 死循环
let endless = () => {
    while(true) {}
}
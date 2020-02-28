/*
 * @Description: 枚举类型
 * @Author: zhangkai
 * @Date: 2020-02-28 10:55:57
 * @LastEditTime: 2020-02-28 14:54:53
 * @LastEditors: zhangkai
 */
// 定义一些带名字的常量
// 数字枚举
enum Role {
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
}
// console.log(Role.Reporter);

// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}

enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 3,
    // computed
    d = Math.random(),
    e = '123'.length
}

// 常量枚举
const enum Mouth {
    Jan,
    Feb,
    Mar
}

enum Color {
   green = 0,
   yellow = 1,
   red = 2,
   orange = 3,
   gray = 4
}

function initByColor(color: number): void {
    if (color === Color.green) {
        // do sth
    }
    else if (color === Color.yellow) {
        // do sth
    }
    else {
        
    }
}
/*
 * @Description: 类
 * @Author: zhangkai
 * @Date: 2020-03-01 15:51:32
 * @LastEditTime: 2020-03-01 20:56:46
 * @LastEditors: zhangkai
 */
class Exmple {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
}

let exmple = new Exmple('张三');

let userName:string = exmple.getName();

// 继承
class Animal {
    move(distance: number = 0): void {
        console.log(`Animal moved ${distance}m`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log('汪汪');
    }
}

let dog = new Dog();
dog.move(10);
dog.bark();



/*
 * @Description: 类
 * @Author: zhangkai
 * @Date: 2020-03-01 15:51:32
 * @LastEditTime: 2020-03-04 10:38:12
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
// 在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。

class Animal {
    name: String;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0): void {
        console.log(`Animal moved ${distanceInMeters}m`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5): void {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45): void {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}

let sam = new Snake('Sammy');
let tom: Animal = new Horse('Tommy');

sam.move();
tom.move(10);




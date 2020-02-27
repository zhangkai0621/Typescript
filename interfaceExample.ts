// 代表有一个 label 属性且类型为 string 的对象
// 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {
    size: 10,
    label: 'Size 10 Object'
};
printLabel(myObj);


// 可选属性
// 接口的属性不全都是必需的。
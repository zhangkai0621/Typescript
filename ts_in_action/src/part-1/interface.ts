/*
 * @Description: 接口
 * @Author: zhangkai
 * @Date: 2020-02-28 14:49:18
 * @LastEditTime: 2020-02-28 15:01:45
 * @LastEditors: zhangkai
 */
interface List {
    readonly id: number;
    name: String;
    age?: number;
}
interface Result {
    data: List[]
}
function render(result: Result): void {
    result.data.forEach((item) => {
        console.log(item.id, item.name);
        // item.id++; // 只读属性
        if (item.age) {
            console.log(item.age);
        }
    })
}
let result = {
    data: [
        {id: 1, name: '张三', sex: 'male'},
        {id: 2, name: '李四', age: 18},
    ]
}
render(result);
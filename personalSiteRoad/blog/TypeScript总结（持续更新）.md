# 基础类型
boolean number bigInt string array tuple(元组) enum 

```ts
// 两种方式可以定义数组。
// 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组
// 第二种方式是使用数组泛型，Array<元素类型>：
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// 元组类型允许表示一个已知元素数量和类型的"数组"，各元素的类型不必相同。

// enum 可以由枚举的值得到它的名字，也可以由名字得到枚举的值
enum Color {
    Green = 0,
    Red, // 自增
}
console.log(Color.Green); // 0
console.log(Color[0]); // Green


```
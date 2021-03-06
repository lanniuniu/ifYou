/**
 * Created by 懒牛牛 on 2017/2/15.
 */
// 对象的创建和销毁都在 JavaScript 执行过程中发生，理解这种范式的含义对理解整个语言至关重要。
// 声明和实例化
// 对象的创建方式是用关键字 new 后面跟上实例化的类的名字
//废除对象
// 当变量 oObject 设置为 null 后，对第一个创建的对象的引用就不存在了。
// 这意味着下次运行无用存储单元收集程序时，该对象将被销毁。
// 废除对象的所有引用时要当心。
// 如果一个对象有两个或更多引用，则要正确废除该对象，必须将其所有引用都设置为 null。

// 早绑定和晚绑定
// 所谓绑定（binding），即把对象的接口与对象实例结合在一起的方法。
// 早绑定（early binding）是指在实例化对象之前定义它的属性和方法，
// 这样编译器或解释程序就能够提前转换机器代码。es 不是强类型所以不支持早绑定。

// 晚绑定（late binding）指的是编译器或解释程序在运行前，不知道对象的类型。
// 使用晚绑定，无需检查对象的类型，只需检查对象是否支持属性和方法即可。
// ECMAScript 中的所有变量都采用晚绑定方法。这样就允许执行大量的对象操作，而无任何惩罚













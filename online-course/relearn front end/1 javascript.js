/*
一、JavaScript分类
    宿主对象、内置对象、固有对象、原生对象、普通对象

二、任务队列
微观任务优于宏观任务
微观任务：指js语言的任务 例如Promise
宏观任务：指宿主对象的API 例如setTimeOut

三、completion record 用于描述异常、跳出等语句执行过程
语句：普通语句、语句块、控制型语句、带标签的语句

四、词法
数字直接量
12.toString() 会报错 因为会当成12.  十进制可以带小数 但小数点前后不能都省略  其他进制不能小数

零宽字符 加隐藏水印

五、语法
js有两种源文件 脚本和模块 脚本包含语句 模块包含export import 语句
js语法全局机制： 预处理（）、指令序言（严格模式）

预处理：
    var声明永远作用于脚本、模块、函数体这个级别，在预处理阶段，不关心赋值的部分，只管在当前作用域声明这个变量

    var a =1
    function foo() {
        console.log(a) // undefined
        var a = 2
    }
    foo()

    class只能先声明后使用
    function声明跟var相似，但在if语句中不能提升
 */

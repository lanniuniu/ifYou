/**
 * Created by 懒牛牛 on 2017/1/13.
 */
/**
 * Proxy 实例的方法
 * 对12-1的方法进行详细举例
 */

//get()  用于拦截某个属性的读取操作
var person = {
    name : '刘鹏'
};
var proxy1 = new Proxy(person,{
    get: function (target, property) {
        if (property in target){//in关键字 1.For...In 声明用于对数组或者对象的属性进行循环/迭代操作。in前面是键
            // 2.单独使用判断对象是否为数组/对象的元素/属性：
            // 格式：（变量 in 对象）......注意，，，
            //当“对象”为数组时，“变量”指的是数组的“索引”；
            // 当“对象”为对象时，“变量”指的是对象的“属性”，而不是属性值
            return target[property];
        }else {
            throw new ReferenceError(`Property${property} 不存在`)
        }
    } 
});
console.log(proxy1.name);
// console.log(proxy1.age);
console.log('--------------');
//get()方法可以继承
var obj1 = Object.create(proxy1);
console.log(proxy1.name);
console.log('--------------');
//下面的例子使用get拦截，实现数组读取负数的索引。
function createArray(...elements) {
    let handler = {
        get(target, propKey, receiver) {
            console.log(target);
            console.log(propKey);
            // console.log(receiver)

            let index = Number(propKey);
            if (index < 0) {
                propKey = String(target.length + index);
            }
            return Reflect.get(target, propKey, receiver);
        }
    };

    let target = [];
    target.push(...elements);
    return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
console.log(arr[-1]);
console.log('-------------');

/* 
    reduce
    reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。参数有两个 一个为reducer 一个为初始值
    reducer 函数接收4个参数:
        Accumulator (acc) (累计器) 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值
        Current Value (cur) (当前值) 数组中正在处理的元素。
        Current Index (idx) (当前索引)
        Source Array (src) (源数组)
*/
var pipe = function (value) {
    var funcStack = [];
    var oproxy = new Proxy({} , {
      get : function (pipeObject, fnName) {
        if (fnName === 'get') {
          return funcStack.reduce(function (val, fn) {
            return fn(val);
          }, value);
        }
        funcStack.push(window[fnName]);
        return oproxy;
      }
    });
  
    return oproxy;
  }
  
  var double = n => n * 2;
  var pow    = n => n * n;
  var reverseInt = n => n.toString().split("").reverse().join("") | 0;
  
  pipe(3).double.pow.reverseInt.get;

/*
如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。
*/
const target = Object.defineProperties({}, {
    foo: {
      value: 123,
      writable: false,
      configurable: false
    },
});
  
const handler = {
get(target, propKey) {
    return 'abc';
}
};

const proxy = new Proxy(target, handler);

proxy.foo

//set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。
let validator = {
    set: function(obj, prop, value) {
      if (prop === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('The age is not an integer');
        }
        if (value > 200) {
          throw new RangeError('The age seems invalid');
        }
      }
  
      // 对于满足条件的 age 属性以及其他属性，直接保存
      obj[prop] = value;
      return true;
    }
};

let person = new Proxy({}, validator);

person.age = 100;

person.age // 100
person.age = 'young' // 报错
person.age = 300 // 报错

// 防止对象的外部读写
const handler = {
    get (target, key) {
      invariant(key, 'get');
      return target[key];
    },
    set (target, key, value) {
      invariant(key, 'set');
      target[key] = value;
      return true;
    }
  };
  function invariant (key, action) {
    if (key[0] === '_') {
      throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
  }
  const target = {};
  const proxy = new Proxy(target, handler);
  proxy._prop
  // Error: Invalid attempt to get private "_prop" property
  proxy._prop = 'c'
  // Error: Invalid attempt to set private "_prop" property

//apply() 拦截函数的调用、call和apply操作。

//has()
// has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符。

//construct()  拦截new命令

//deleteProperty() 拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
//defineProperty方法拦截了Object.defineProperty操作。
// getOwnPropertyDescriptor方法拦截Object.getOwnPropertyDescriptor，返回一个属性描述对象或者undefined。
//getPrototypeOf方法主要用来拦截Object.getPrototypeOf()运算符，以及其他一些操作。
//如Object.prototype.__proto__
//         Object.prototype.isPrototypeOf()
//         Object.getPrototypeOf()
//         Reflect.getPrototypeOf()
//         instanceof

//isExtensible方法拦截Object.isExtensible操作。

//ownKeys方法用来拦截以下操作。
//         Object.getOwnPropertyNames()
//         Object.getOwnPropertySymbols()
//         Object.keys()

// preventExtensions方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。

//setPrototypeOf方法主要用来拦截Object.setPrototypeOf方法。












/**
 * Created by 懒牛牛 on 2017/1/13.
 */
/**
 * Proxy 代理器
 * Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
 * var proxy = new Proxy(target, handler);
     Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。其中，new Proxy()表示生成一个Proxy实例，
     target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为
 作为构造函数，Proxy接受两个参数。
 第一个参数是所要代理的目标对象（上例是一个空对象），即如果没有Proxy的介入，操作原来要访问的就是这个对象；
 第二个参数是一个配置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作。
 */
let proxy1 = new Proxy({},{
    get: function (target, property) {
        return target + property;
    }
});
console.log(proxy1.time);
console.log(`-------------`);
//如果handler没有设置任何拦截，那就等同于直接通向原对象。
var target = {};
var handler = {};
let proxy2 = new Proxy(target,handler);
proxy2.a = 'A';
console.log(target);

//Proxy 实例也可以作为其他对象的原型对象。也可以同样被拦截
//支持的拦截操作
//1）get(target, propKey, receiver)
//
// 拦截对象属性的读取，比如proxy.foo和proxy['foo']。
//
// 最后一个参数receiver是一个对象，可选，参见下面Reflect.get的部分。
//
// （2）set(target, propKey, value, receiver)
//
// 拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
//
// （3）has(target, propKey)
//
// 拦截propKey in proxy的操作，返回一个布尔值。
//
// （4）deleteProperty(target, propKey)
//
// 拦截delete proxy[propKey]的操作，返回一个布尔值。
//
// （5）ownKeys(target)
//
// 拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
//
// （6）getOwnPropertyDescriptor(target, propKey)
//
// 拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
//
// （7）defineProperty(target, propKey, propDesc)
//
// 拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
//
// （8）preventExtensions(target)
//
// 拦截Object.preventExtensions(proxy)，返回一个布尔值。
//
// （9）getPrototypeOf(target)
//
// 拦截Object.getPrototypeOf(proxy)，返回一个对象。
//
// （10）isExtensible(target)
//
// 拦截Object.isExtensible(proxy)，返回一个布尔值。
//
// （11）setPrototypeOf(target, proto)
//
// 拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。
//
// 如果目标对象是函数，那么还有两种额外操作可以拦截。
//
// （12）apply(target, object, args)
//
// 拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
//
// （13）construct(target, args)
//
// 拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。



































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

// 将 Proxy 对象，设置到object.proxy属性，从而可以在object对象上调用。
let proxy3 = {
    proxy: new Proxy(target, handler)
}

// Proxy 实例也可以作为其他对象的原型对象。Object.create() 可以把参数当成__proto__创建对象
let obj = Object.create(proxy3)

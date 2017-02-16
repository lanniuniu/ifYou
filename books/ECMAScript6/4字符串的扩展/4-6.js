/**
 * Created by 懒牛牛 on 2017/1/6.
 */
/**
 * String.raw()
 * 用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，
 * 对应于替换变量后的模板字符串。
 */
console.log(`Hi\n${2+3}!`);
console.log(String.raw`Hi\n${2+3}!`);

// 如果原字符串的斜杠已经转义，那么String.raw不会做任何处理。
console.log(String.raw`Hi\\n`);




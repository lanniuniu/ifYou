/**
 * Created by 懒牛牛 on 2018/8/7.
 */

/*
组件可以将UI切分成一些的独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件。
 */

/*
函数定义/类定义组件
 */
function Welcome(name) {
  return (<h1>Hello, {name}</h1>);
}

class Welcome extends React.Component {
  render() {
    return (<h1>Hello, {name}</h1>);
  }
}

/*
组件渲染
React元素也可以是用户自定义的组件，也可以是DOM标签
当React遇到的元素是用户自定义的组件，它会将JSX属性作为单个对象传递给该组件，这个对象称之为“props”

组件名称必须以大写字母开头。
在使用该组件时你必须定义或引入它。
 */

/*
组合组件
组件可以在它的输出中引用其它组件，这就可以让我们用同一组件来抽象出任意层次的细节。
在React应用中，按钮、表单、对话框、整个屏幕的内容等，这些通常都被表示为组件。
 */

/*
封装和提取高复用性组件
在大型应用中，是很重要滴
 */

/*
props的只读性
 */
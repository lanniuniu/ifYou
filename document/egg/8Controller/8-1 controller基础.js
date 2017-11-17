/**
 * Created by 懒牛牛 on 2017/11/16.
 */

/*
什么是controller
负责解析用户的输入，处理后返回相应的结果

在 RESTful 接口中，Controller 接受用户的参数，从数据库中查找内容返回给用户或者将用户的请求更新到数据库中。
在 HTML 页面请求中，Controller 根据用户访问不同的 URL，渲染不同的模板得到 HTML 返回给用户。
在代理服务器中，Controller 将用户的请求转发到其他服务器上，并将其他服务器的处理结果返回给用户。

框架推荐 Controller 层主要对用户的请求参数进行处理（校验、转换），然后调用对应的 service 方法处理业务，得到业务结果后封装并返回：

获取用户通过 HTTP 传递过来的请求参数。
校验、组装参数。
调用 Service 进行业务处理，必要时处理转换 Service 的返回结果，让它适应用户的需求。
通过 HTTP 将结果响应给用户。
 */

/*
如何编写Controller

Controller类

Controller 支持多级目录
定义的 Controller 类，会在每一个请求访问到 server 时实例化一个全新的对象，而项目中的 Controller 类继承于 app.Controller，
会有下面几个属性挂在 this 上。

this.ctx: 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
this.app: 当前应用 Application 对象的实例，通过它我们可以拿到框架提供的全局对象和方法。
this.service：应用定义的 Service，通过它我们可以访问到抽象出的业务层，等价于 this.ctx.service 。
this.config：应用运行时的配置项。
this.logger：logger 对象，上面有四个方法（debug，info，warn，error），分别代表打印四个不同级别的日志，
使用方法和效果与 context logger 中介绍的一样，但是通过这个 logger 对象记录的日志，在日志前面会加上打印该日志的文件路径，
以便快速定位日志打印位置。

 */


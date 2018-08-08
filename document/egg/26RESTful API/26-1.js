/**
 * Created by 懒牛牛 on 2017/11/29.
 */

/*
通过 Web 技术开发服务给客户端提供接口，可能是各个 Web 框架最广泛的应用之一。
 */

/*
设计响应格式

在 RESTful 风格的设计中，我们会通过响应状态码来标识响应的状态，保持响应的 body 简洁，只返回接口数据。
 */

/*
错误处理

在接口处理发生错误的时候，如果是客户端请求参数导致的错误，我们会返回 4xx 状态码，如果是服务端自身的处理逻辑错误，
我们会返回 5xx 状态码。所有的异常对象都是对这个异常状态的描述，其中 error 字段是错误的描述，
detail 字段（可选）是导致错误的详细原因。
 */

/*
实现

1.初始化项目

2.开启 validate 插件

3.注册路由

首先，我们先按照前面的设计来注册路由，框架提供了一个便捷的方式来创建 RESTful 风格的路由，
并将一个资源的接口映射到对应的 controller 文件。

4.controller 开发

在 controller 中，我们只需要实现 app.resources 约定的 RESTful 风格的 URL 定义 中我们需要提供的接口即可。

5.service 开发

在 service 中，我们可以更加专注的编写实际生效的业务逻辑。

6.统一错误处理

正常的业务逻辑已经正常完成了，但是异常我们还没有进行处理。在前面编写的代码中，Controller 和 Service 都有可能抛出异常，
这也是我们推荐的编码方式，当发现客户端参数传递错误或者调用后端服务异常时，通过抛出异常的方式来进行中断。

Controller 中 this.ctx.validate() 进行参数校验，失败抛出异常。
Service 中调用 this.ctx.curl() 方法访问 CNode 服务，可能由于网络问题等原因抛出服务端异常。
Service 中拿到 CNode 服务端返回的结果后，可能会收到请求调用失败的返回结果，此时也会抛出异常。
框架虽然提供了默认的异常处理，但是可能和我们在前面的接口约定不一致，因此我们需要自己实现一个统一错误处理的中间件来对错误进行处理。

7.单元测试
Controller # Service 测试


 */





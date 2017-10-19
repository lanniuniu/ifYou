/**
 * Created by 懒牛牛 on 2017/10/17.
 */

/*
NoSQL=not only sql

关系型数据库遵循ACID规则
A:原子性
原子性很容易理解，也就是说事务里的所有操作要么全部做完，要么都不做，事务成功的条件是事务里的所有操作都成功，
只要有一个操作失败，整个事务就失败，需要回滚。

B:一致性
一致性也比较容易理解，也就是说数据库要一直处于一致的状态，事务的运行不会改变数据库原本的一致性约束。

C:独立性
所谓的独立性是指并发的事务之间不会互相影响，如果一个事务要访问的数据正在被另外一个事务修改，
只要另外一个事务未提交，它所访问的数据就不受未提交事务的影响。

D:持久性
持久性是指一旦事务提交后，它所做的修改将会永久的保存在数据库上，即使出现宕机也不会丢失。
 */

/*
分布式系统
由多台计算机和通信的软件组件通过计算机网络连接（本地网络或广域网）组成。
分布式系统是建立在网络之上的软件系统。正是因为软件的特性，所以分布式系统具有高度的内聚性和透明性。
因此，网络和分布式系统之间的区别更多的在于高层软件（特别是操作系统），而不是硬件。
分布式系统可以应用在不同的平台上如：Pc、工作站、局域网和广域网上等。

优点
可靠性（容错） ：
分布式计算系统中的一个重要的优点是可靠性。一台服务器的系统崩溃并不影响到其余的服务器。
可扩展性：
在分布式计算系统可以根据需要增加更多的机器。
资源共享：
共享数据是必不可少的应用，如银行，预订系统。
灵活性：
由于该系统是非常灵活的，它很容易安装，实施和调试新的服务。
更快的速度：
分布式计算系统可以有多台计算机的计算能力，使得它比其他系统有更快的处理速度。
开放系统：
由于它是开放的系统，本地或者远程都可以访问到该服务。
更高的性能：
相较于集中式计算机网络集群可以提供更高的性能（及更好的性价比）。

分布式计算的缺点
故障排除：
故障排除和诊断问题。
软件：
更少的软件支持是分布式计算系统的主要缺点。
网络：
网络基础设施的问题，包括：传输问题，高负载，信息丢失等。
安全性：
开发系统的特性让分布式计算系统存在着数据的安全性和共享的风险等问题。
 */

// NoSQL
// NoSQL，指的是非关系型的数据库。
// NoSQL有时也称作Not Only SQL的缩写，是对不同于传统的关系型数据库的数据库管理系统的统称。
// NoSQL用于超大规模数据的存储。
// （例如谷歌或Facebook每天为他们的用户收集万亿比特的数据）。
// 这些类型的数据存储不需要固定的模式，无需多余操作就可以横向扩展。

/*
什么是MongoDB
MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。
字段值可以包含其他文档，数组及文档数组。
{
    name: "liupeng",
    age: 24,
    status: "working",
    hobby: ["news","sports"]
}
 */


/*
MongoDB的特点
MongoDB的提供了一个面向文档存储，操作起来比较简单和容易。
你可以在MongoDB记录中设置任何属性的索引 (如：FirstName="Sameer",Address="8 Gandhi Road")来实现更快的排序。
你可以通过本地或者网络创建数据镜像，这使得MongoDB有更强的扩展性。
如果负载的增加（需要更多的存储空间和更强的处理能力） ，它可以分布在计算机网络中的其他节点上这就是所谓的分片。
Mongo支持丰富的查询表达式。查询指令使用JSON形式的标记，可轻易查询文档中内嵌的对象及数组。
MongoDb 使用update()命令可以实现替换完成的文档（数据）或者一些指定的数据字段 。
Mongodb中的Map/reduce主要是用来对数据进行批量处理和聚合操作。
Map和Reduce。Map函数调用emit(key,value)遍历集合中所有的记录，将key与value传给Reduce函数进行处理。
Map函数和Reduce函数是使用Javascript编写的，并可以通过db.runCommand或mapreduce命令来执行MapReduce操作。
GridFS是MongoDB中的一个内置功能，可以用于存放大量小文件。
MongoDB允许在服务端执行脚本，可以用Javascript编写某个函数，直接在服务端执行，也可以把函数的定义存储在服务端，下次直接调用即可。
MongoDB支持各种编程语言:RUBY，PYTHON，JAVA，C++，PHP，C#等多种语言。
MongoDB安装简单。
 */
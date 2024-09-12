/**
 * Created by 懒牛牛 on 2017/5/10.
 */

/*
1.软件安装
    分为在线安装和线下安装
    在线安装：a.软件管理中心安装（ubuntu）需要图形化管理界面
            b.命令行安装 1)更新apt-get update 2)查找你要安装的软件 apt-cache search 软件名
                3)下载并安装及其依赖 apt-get install 软件名
    线下安装：下载文件（tar、deb）到本地进行安装

 */

/*
xshell公钥登录

使用xshell在线传输工具（窗口>新建传输文件>命令 put），下载到/root/.ssh/ ，更改文件名为authorized_keys
 */

/*
命令
1.wget [参数] [地址] 支持ftp http https 下载

2.tar 解压
 语法：tar [主选项+辅选项] 文件或者目录
 使用该命令时，主选项是必须要有的，它告诉tar要做什么事情，辅选项是辅助使用的，可以选用。
 主选项：
 c 创建新的档案文件。如果用户想备份一个目录或是一些文件，就要选择这个选项。相当于打包。
 x 从档案文件中释放文件。相当于拆包。
 t 列出档案文件的内容，查看已经备份了哪些文件。
 特别注意，在参数的下达中， c/x/t 仅能存在一个！不可同时存在！因为不可能同时压缩与解压缩。
 辅助选项：
 -z ：是否同时具有 gzip 的属性？亦即是否需要用 gzip 压缩或解压？ 一般格式为xx.tar.gz或xx. tgz
 -j ：是否同时具有 bzip2 的属性？亦即是否需要用 bzip2 压缩或解压？一般格式为xx.tar.bz2
 -v ：压缩的过程中显示文件！这个常用
 -f ：使用档名，请留意，在 f 之后要立即接档名喔！不要再加其他参数！
 -p ：使用原文件的原来属性（属性不会依据使用者而变）

3.源码的安装一般由3个步骤组成：配置（configure）、编译（make）、安装（make install）

4.rm               删除文件
     -r            递归删除，可删除子目录及文件
     -f            强制删除

5.Yum命令常用命令详解
     1.使用YUM查找软件包
     命令：yum search~
     2.列出所有可安装的软件包
     命令：yum list
     3.列出所有可更新的软件包
     命令：yum list updates
     4.列出所有已安装的软件包
     命令：yum list installed
     5.列出所有已安装但不在Yum Repository 內的软件包
     命令：yum list extras
     6.列出所指定软件包
     命令：yum list ～
     7.使用YUM获取软件包信息
     命令：yum info ～
     8.列出所有软件包的信息
     命令：yum info
     9.列出所有可更新的软件包信息
     命令：yum info updates
     10.列出所有已安裝的软件包信息
     命令：yum info installed
     11.列出所有已安裝但不在Yum Repository 內的软件包信息
     命令：yum info extras
     12.列出软件包提供哪些文件
     命令：yum provides~

6.
 */


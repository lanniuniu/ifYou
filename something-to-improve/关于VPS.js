/**
 * Created by 懒牛牛 on 2017/5/10.
 */

/*
1.搬瓦工购买VPS
2.进入搬瓦工控制页面 kiwiVM
3.重装系统，并记录好 root密码(使用xshell进入的密码) ip 端口号
4.开始玩
 */

/*
 shadowsocks
 使用shadowsocks-libev 一键安装脚本

 部署方法（新手请保证是 root 权限）：
     cd /opt ; wget --no-check-certificate https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-libev.sh
     chmod +x shadowsocks-libev.sh
     ./shadowsocks-libev.sh 2>&1 | tee shadowsocks-libev.log

 卸载 Shadowsocks：
 cd /opt ; ./shadowsocks-libev.sh uninstall

 其他命令：
 启动：/etc/init.d/shadowsocks start
 停止：/etc/init.d/shadowsocks stop
 重启：/etc/init.d/shadowsocks restart
 查看状态：/etc/init.d/shadowsocks status

 Windows 客户端：https://github.com/shadowsocks/shadowsocks-windows/releases
 百度云（密码：rlh1）：http://pan.baidu.com/s/1jHXGG1w
 360 云盘（密码：30d3）：https://yunpan.cn/cMZLSPzTeUWJp
 Linux 客户端：https://github.com/shadowsocks/shadowsocks-gui
 OS X 客户端：https://github.com/shadowsocks/shadowsocks-iOS/wiki/Shadowsocks-for-OSX-Help
 Android 客户端：https://github.com/shadowsocks/shadowsocks-android/releases
 别人整理的客户端列表：https://shadowsocks.com/client.html
 
 使用netspeeder加速 
 1.wget --no-check-certificate https://gist.github.com/LazyZhu/dc3f2f84c336a08fd6a5/raw/d8aa4bcf955409e28a262ccf52921a65fe49da99/net_speeder_lazyinstall.sh
 2.sh net_speeder_lazyinstall.sh
 3.加速nohup /usr/local/net_speeder/net_speeder venet0 "ip" >/dev/null 2>&1 &
 4.关闭net_speeder：killall net_speeder

 */

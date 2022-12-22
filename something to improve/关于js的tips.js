/**
 * Created by 懒牛牛 on 2017/6/21.
 */

/*
1.&&表示并且，只有第一个条件为真时，才会去校验第二个条件。
cb&&cb()
如果cb没有传递进来，则cb为undefined，undefined做判断会被转换为false。
cb&&cb()可以理解为，cb这个回调函数存在时才执行cb回调函数。
 */

/**
 * 2.循环的结束方式
let arrs=[1,2,3,4,5]
 
//1: forEach循环
try{
    arrs.forEach(function(i){
        if(i == 2){
            // return; // 退出当前循环
            throw 'jump out'//退出整个循环
        }
        console.log(i)
    })
}catch(e){
 
}
 
//2: for循环
for(var i=0, len = arrs.length ; i< len ; i++){
    if(i == 2){
       //  continue;// 退出当前循环
        break;//退出整个循环
    }
    console.log(arrs[i]);   
}
 
//3 for-of循环
for(var i of arrs){
    if(i == 2){
       //  continue;// 退出当前循环
        break;//退出整个循环
   }
    console.log(i);   
}
 
//4 for-in循环
 
退出方法同for循环。
 * 
 */


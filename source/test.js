const fs = require('fs')
// 1.导入sql模块
const mysql = require('mysql')

//2.建立与mysql数据库的连接关系
const db = mysql.createPool({
    host:'127.0.0.1',//数据库的ip地址
    user:'root',//登录数据库的账号
    password:'root',//登录数据库的密码
    database:'my_db_01'//指定要操作哪个数据库
})

// 测试mysql模块是否能正常工作
db.query('select 1' ,(err,results) =>{
    // mysql模块工作期间报错了
    if(err) return console.log(err.message);
    // 能够成功的执行sql语句
    console.log(results);
})

// 查询users表中所有数据
const sqlStr = 'select * from title'
db.query(sqlStr, (err,results) =>{
    //查询数据失败
    if(err) return console.log(err.message);
    //查询成功
    //注意：如果执行的是select查询语句，则执行的是结果是数组
    // console.log(results);
    // console.log(JSON.parse(JSON.stringify(results[0].username)));
    let a = JSON.stringify(results);
    fs.writeFile('./user.json', a, function (error) {//json文件写入到data文件夹下
        if (error) console.log('json-文件写入失败');
    });

})


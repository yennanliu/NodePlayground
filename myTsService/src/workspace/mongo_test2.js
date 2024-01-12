/** https://www.runoob.com/nodejs/nodejs-mongodb.html */

/** Mongo client test with Promise */

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost/runoob";

MongoClient.connect(url).then((conn) => {
    console.log("数据库已连接");
    var dbase = conn.db("runoob");
    dbase.createCollection("site").then((res) => {
        console.log("已创建集合");
    }).catch((err) => {
        console.log("数据库操作错误");
    }).finally(() => {
        conn.close();
    });
}).catch((err) => {
    console.log("数据库连接失败");
});



MongoClient.connect(url).then((conn) => {
    console.log("数据库已连接");
    const test = conn.db("testdb").collection("test");
    // 增加
    test.insertOne({ "site": "runoob.com" }).then((res) => {
        // 查询
        return test.find().toArray().then((arr) => {
            console.log(arr);
        });
    }).then(() => {
        // 更改
        return test.updateMany({ "site": "runoob.com" },
            { $set: { "site": "example.com" } });
    }).then((res) => {
        // 查询
        return test.find().toArray().then((arr) => {
            console.log(arr);
        });
    }).then(() => {
        // 删除
        return test.deleteMany({ "site": "example.com" });
    }).then((res) => {
        // 查询
        return test.find().toArray().then((arr) => {
            console.log(arr);
        });
    }).catch((err) => {
        console.log("数据操作失败" + err.message);
    }).finally(() => {
        conn.close();
    });
}).catch((err) => {
    console.log("数据库连接失败");
});
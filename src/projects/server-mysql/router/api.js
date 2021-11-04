var express = require('express');
var router = express.Router();
var sqlTool = require('../utils/handle');

/*
    // insert:'INSERT INTO test(id, name, age) VALUES(?,?,?)',
    // update:'UPDATE test SET name=?, age=? WHERE id=?',
    // delete: 'DELETE FROM test WHERE id=?',
    // queryById: 'SELECT * FROM test WHERE id=?',
    // queryAll: 'SELECT * FROM articles'
    search: 'select * from user where concat(name,idcard,sex,···)  like '%word%''
*/
// code: 0 success, 1 err, 2 参数错误

// 文章列表 都做分页 3处接口 type 区分 0，1，2
// 1. 首页 分类查询 最新就是全部，其他 按照 tags 存在就有查询，字段用tag
// 2. year month 归档查询 查 createTime, updateTime
// 3. keywords 搜索查询 查 title,smallTitle,content,tags 存在
// 还要查对应条件下的 总条数。。。
router.get('/article_list', function(req, res, next) {
    let params = req.query;
    let { pageSize,pageNum,type } = params;
    let sql = ''
    if(!pageSize) { pageSize = 10 }
    if(!pageNum) { pageSize = 1 }
    let start =  (pageNum - 1) * pageSize
    if(!type) {
        res.json({
            code: 2,
            message: '参数有误，请检查参数'
        })
        return
    }
    if(type === 1) { // 首页
        let tag = params.tag;
        if(!tag || tag === 'lastest') {
            sql = `SELECT * FROM articles limit ${start},${pageSize}`
        } else {
            sql = `SELECT * FROM articles FIND_IN_SET(${tag},tags) limit ${start},${pageSize}`
        }
    } else if(type === 2){ // 归档

    } else if(type === 3) { // 搜索

    }
    if(!sql) return;
    sqlTool.queryAll(sql, req, res, next);
});
router.get('/article_detail', function(req, res, next) {
    let sql = 'SELECT * FROM articles WHERE id=?'
    sqlTool.queryById(sql, req, res, next);
});
router.post('/add_article', function(req, res, next) {
    let sql = 'INSERT INTO articles(title, smallTitle, banner,author,content,gitlink,tags,createTime) VALUES(?,?,?,?,?,?,?,?)'
    let params = req.body;
    const {title, smallTitle, banner,author,content,gitlink,tags} = params
    const createTime = new Date();
    const vallist = [title, smallTitle, banner,author,content,gitlink,tags,createTime]
    sqlTool.add(sql, vallist, res, next);
});
// 标签列表
router.get('/tag_list', function(req, res, next) {
    let sql = 'SELECT * FROM tags'
    sqlTool.queryAll(sql, req, res, next);
});
router.post('/add_tag', function(req, res, next) {
    let sql = 'INSERT INTO tags(name, color, icon) VALUES(?,?,?)'
    let params = req.body;
    const {name, color, icon} = params
    const vallist = [name, color, icon]
    sqlTool.add(sql, vallist, res, next);
});
module.exports = router;
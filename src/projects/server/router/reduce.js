/***
 * 返回 code， 0 成功， 1 参数有误 ，2 error 
 * { n: 1, nModified: 0, ok: 1 } // n 匹配数据数量，nModified 操作的数量
 * ***/ 

// 新增
module.exports.createData = (model, req, res) => {
    const params = req.body
    model.create({
        ...params
    }, function (err, result) {
        if (err) {
            console.log('find error：' + err);
            res.status(200).json({
                code: 2,
                message: '新增失败：' + err
            })
            return
        }
        console.log(result)
        res.status(200).json({
            code: 0,
            message: '新增成功'
        })
    })
}

// 删除 by id
module.exports.removeData = (model, req, res) => {
    const {
        id
    } = req.body
    if (!id) {
        res.status(200).json({
            code: 1,
            message: 'id is require'
        })
        return
    }
    model.remove({
        id
    }, function (err, result) {
        if (err) {
            console.log('find error：' + err);
            res.status(200).json({
                code: 2,
                message: '删除失败：' + err
            })
            return
        }
        res.status(200).json({
            code: 200,
            message: '删除成功'
        })
    })
}

// 更新 by id
module.exports.updateData = (model, req, res) => {
    const {
        id,
        ...rest
    } = req.body
    if (!id) {
        res.status(200).json({
            code: 1,
            message: 'id is require'
        })
        return
    }
    model.updateOne({
        id
    }, {
        ...rest
    }, function (err, result) {
        if (err) {
            console.log('find error：' + err);
            res.status(200).json({
                code: 2,
                message: '更新失败：' + err
            })
            return
        }
        console.log(result)
        res.status(200).json({
            code: 0,
            data: result,
            message: '操作成功'
        })
    })
}

// 查询 ispage 是否分页
module.exports.findData = (model, req, res, ispage = false) => {
    let params = req.query
    let schemaKey = Object.keys(model.schema.paths);
    let paramsKey = []
    if(!ispage) {
        paramsKey = Object.keys(params)
    } else {
        let { pageSize,pageNum,...rest } = params
        paramsKey = Object.keys({...rest})
    }
    let hasNoExistAttr = paramsKey.some(item => !schemaKey.includes(item));
    // 如果传入的参数 有不在 schema 的属性中的（也就是操作的model对应的集合中根本没这个属性） 说明传入的是 无关的参数 不能去查询 查也是空结果。
    if(hasNoExistAttr) {
        res.status(200).json({
            code: 1,
            message: '参数中包含无效的参数'
        })
        return
    }
    if (!ispage) {
        model.find({...params}, {
            _id: 0 // 不返回_id字段
        }, function (err, result) {
            if (err) {
                console.log('find error：' + err);
                res.status(200).json({
                    code: 2,
                    message: '查询失败：' + err
                })
                return
            }
            res.status(200).json({
                code: 0,
                message: '查询成功',
                data: result
            })
        })
    } else {
        // 分页 pageSize pageNum
        let { pageSize,pageNum,...rest } = params
        if(!pageSize) {
            pageSize = 10
        }
        if(!pageNum) {
            res.status(200).json({
                code: 1,
                message: 'pageNum is require'
            })
            return
        }
        if(Number(pageNum) === 0) {
            res.status(200).json({
                code: 1,
                message: 'pageNum should be an int that bigger than 0'
            })
            return
        }
        model.countDocuments({...rest},function (error, count) {
            if (error) {
                console.log('find count error：' + error);
                res.status(200).json({
                    code: 2,
                    message: '查询失败：' + error
                })
                return
            }
            let skips = Number(pageSize) * (Number(pageNum) - 1)
            //使用 skip 分页
            model.find({...rest}, {_id: 0}).skip(skips).limit(Number(pageSize)).exec(function (err, result) {
                if (err) {
                    console.log('find error：' + err);
                    res.status(200).json({
                        code: 2,
                        message: '查询失败：' + err
                    })
                    return
                }
                res.status(200).json({
                    code: 0,
                    message: '查询成功',
                    data: result,
                    total: count
                })
            })
            // 不使用 skip 分页 (待测试)
            // model.find({...rest}).sort({"_id":1}).limit(skips).exec(function (errs,arr) {
            //     if (errs) {
            //         console.log('find errors：' + errs);
            //         res.status(200).json({
            //             code: 2,
            //             message: '查询失败：' + errs
            //         })
            //         return
            //     }
            //     if(arr.length > 0){
            //         let last_id = arr[arr.length - 1]._id
            //         model.find({...rest,id:{"$gt": last_id}}).sort({"_id":1}).limit(Number(pageSize)).exec(function (err,result) {
            //             if (err) {
            //                 console.log('find error：' + err);
            //                 res.status(200).json({
            //                     code: 2,
            //                     message: '查询失败：' + err
            //                 })
            //                 return
            //             }
            //             res.status(200).json({
            //                 code: 0,
            //                 message: '查询成功',
            //                 data: result,
            //                 total: count
            //             })
            //         })
            //     } else {
            //         res.status(200).json({
            //             code: 0,
            //             message: '查询成功',
            //             data: [],
            //             total: count
            //         })
            //     }
            // })
        })
    }
}

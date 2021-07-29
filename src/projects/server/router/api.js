const express = require('express');
const router = express.Router();
const articleModel = require('../models/article');
const { createData,removeData,updateData,findData } = require('./reduce')

// code 0 success, 1 params lose, 2 err

router.get('/article_list', function (req, res) {
  findData(articleModel,req,res)
})

// 删除
router.post('/remove_article', function (req, res) {
  removeData(articleModel,req,res)
})

// 更新
router.post('/update_article', function (req, res) {
  updateData(articleModel,req, res)
})

// 新增
router.post('/add_article', function (req, res) {
  createData(articleModel,req, res)
})

module.exports = router
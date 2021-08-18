const express = require('express');
const router = express.Router();
const articleModel = require('../models/article');
const tagModel = require('../models/tags');
const { createData,removeData,updateData,findData,findDataById } = require('./reduce')

// code 0 success, 1 params err, 2 err

router.get('/article_list', function (req, res) {
  findData(articleModel,req,res,true)
})

router.get('/article_list_detail', function (req, res) {
  findDataById(articleModel,req,res)
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

// 标签列表
router.get('/tag_list', function(req,res) {
  findData(tagModel,req,res)
})
// 新增标签
router.post('/add_tag', function (req, res) {
  createData(tagModel,req, res)
})

module.exports = router
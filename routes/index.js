var express = require('express');
var router = express.Router();

/* GET home page. */
/*預設主頁面*/
//對應index.ejs，後端往前端渲染就是改這邊 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

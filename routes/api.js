var express = require('express');
var router = express.Router();

/* GET home page. */

const data=[{
  id: 1,
  title: "好棒"
}]

/*res:response req:request*/
router.get('/products', function(req, res, next) {
  res.status(200);
  res.send({
    success: true,
    data
  });
  res.end();
});

router.post('/products',function(req,res){
  const products=req.body;
  data.push({
    ...products,
    id: new Date().getTime(),
  });
  console.log(data);

  res.send({
    success: true,
    data
  })
  res.end();

});


router.delete('/products/:id', function(req, res, next) {
  const id = req.params.id;
  console.log(id);
  
  data.forEach((item,key) => {
    if(item.id == key){
      data.slice(key,1);
    }
  })

  res.send({
    success: true,
    data
  });
  res.end();
});

module.exports = router;

var express = require("express");
var router = express.Router();
var {GenerateCaption} = require('../controllers/genCaption');


/* GET home page. */

router.get('/',(req,res)=>{

  res.status(200).json({message:"Ahzam Kaaham"})
})

router.post("/", GenerateCaption);

module.exports = router;

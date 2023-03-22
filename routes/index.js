var express = require("express");
var router = express.Router();
var { GenerateCaption } = require("../controllers/generateAI/genCaption");

/* GET home page. */

router.get("/", (req, res) => {
  res.status(200).json({ message: process.env.OPENAI_API_KEY });
});

router.post("/", GenerateCaption);

//Router for subscription

module.exports = router;

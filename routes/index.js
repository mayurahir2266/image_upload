var express = require('express');
var router = express.Router();
const multer = require('multer');

  // image setup

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

var user = require('../controllar/usercontrollar');

router.post('/insert',upload.single('image') ,user.insert_data)

/* GET home page. */


module.exports = router;

var express = require('express');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //Dua file vao thu muc uploads
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        // de nguyen ten file khong thay doi
        cb(null, file.originalname);
    },
});

var upload = multer({storage: storage});
var router = express.Router();
router.post('/upload', upload.array("file",10),
    function (req, res,next) {
    var titlename =req.body.title;
    var contentname = req.body.content;
    var filename = req.files.length;
        console.log(filename);
        res.send('Upload file thanh cong '+filename+'-Title: '+titlgename+'-Content:'+contentname);
    })


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;

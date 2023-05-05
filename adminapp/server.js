const express = require('express')
const app = express()
const mysql = require('mysql')
const multer = require('multer')
const path = require('path')
const cors = require("cors");
const bodyParser = require('body-parser');
 
 
//use express static folder
app.use(cors());
app.use(express.static("./public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})
 
db.connect(function (err) {
    if (err) {  
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
})
 
//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
});
 
//@type   POST
//route for post data
app.post("/upload", upload.single('file'), (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        var imgsrc = 'http://127.0.0.1:3000/images/' + req.file.filename
        var insertData = "INSERT INTO users_file(file_src)VALUES(?)"
        db.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err
            console.log("file uploaded")
        })
    }
});

//add new user
app.post('/store-data',upload.single("file"),(req, res) => {
    console.log("req body",req);
    let data = {firstname: req.body.firstname, lastname:  req.body.lastname ,email:  req.body.email,phoneno:  req.body.phoneno,address:  req.body.address ,gender: req.body.gender ,student_type: req.body.student_type, languages: req.body.languages, test: req.body.test, image: req.body.filename};
    let sql = "INSERT INTO users_file SET ?";
    let query = db.query(sql, data,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": data}));
    });
});
 
//create connection
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))
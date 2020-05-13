const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
const PORT = 8002;
const db = new sqlite3.Database(':memory', (err => {
    if (err) {
        console.error(err.message);
    }
}));


  app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});


//Get available bookings by date
app.get('/bookings',(req,res,next) => {
start = req.query.start_date;
end = req.query.end_date;
db.all('SELECT DISTINCT Property_name FROM Bookings WHERE ($end < Start_Date OR $start >= End_Date)',{$start: start, $end: end}, (err,rows) => {
    if (err) {
        console.log("error while searching for available properties");
        console.log(err);
    }
        let bookings = [];
        rows.forEach(row => {
            bookings.push(row.Property_Name);
        })
        res.send(bookings);
        console.log(bookings);
        console.log('success')
});
next();
});


//Book home by property name & start date & end date & email
app.get('/books',(req,res, next) => {
property = req.query.home;
start = req.query.start_date;
end = req.query.end_date;
email = req.query.email;
db.run('INSERT INTO Bookings(Property_Name, Start_Date, End_Date, Email) VALUES ($property, $start, $end, $email),',{$property:property, $start:start, $end: end, $email: email}, (err,rows) => {
    if (err) {
        console.log("Error while posting new Booking");
        console.log(err.message);
    } else if (rows) {
        res.status(200).send();
        console.log("success");
    }
    
});
});



app.get('/test',(req,res,next) => {
    db.all("Select * FROM Bookings",(err,rows) => {
        if (err) {
            console.log(err);
        } else if (rows) {
            res.send(rows);
        }
    })
});



app.get('/users',(req,res,next) => {
    db.all("Select * FROM Users",(err,rows) => {
        if (err) {
            console.log(err);
        } else if (rows) {
            res.send(rows);
        }
    })
});



app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
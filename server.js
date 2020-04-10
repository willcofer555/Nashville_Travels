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

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); */


app.get('/bookings',(req,res) => {
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
});


/* added email field */
app.post('/bookings/:propertyName',(req,res) => {
start = req.query.startDate;
end = req.query.endDate;
email = req.query.email;
property = req.params.home;
db.get('INSERT INTO Bookings(Property_Name,Start_Date,End_Date, Email) VALUES ($property, $email, $start, $end),',{$property:property, $email: email, $start:start, $end: end}, (err,rows) => {
    if (err) {
        console.log("Error while posting new Booking");
        console.log(err.message);
    }
    res.status(200).send();
});
});




app.get('/test',(req,res,next) => {
    res.send("Test successful");
    db.get("Select * FROM Bookings",(err,rows) => {
        if (err) {
            console.log(err);
        } else if (rows) {
            console.log(rows);
            res.send(rows);
        }
    })
});

app.get('/users',(req,res,next) => {
    res.send("Get users successful");
    db.get("Select * FROM Users",(err,rows) => {
        if (err) {
            console.log(err);
        } else if (rows) {
            res.send(rows);
            console.log(rows);
        }
    })
});


app.get('/bookings/:property',(req,res,next) => {



});



app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
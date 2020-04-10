const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = 8002;
const db = new sqlite3.Database(':memory', (err => {
    if (err) {
        console.error(err.message);
    }
}));






app.get('/bookings',(req,res) => {
start = req.query.startDate;
end = req.query.endDate;
db.get('SELECT DISTINCT Property_name FROM Bookings WHERE ($end < Start_Date OR $start >= End_Date)',{$start: start, $end: end}, (err,rows) => {
    if (err) {
        console.log("error while searching for available properties");
        console.log(err);
    }
        res.send({bookings: rows});
        console.log(rows);
});
});


/* add email field */
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





/*app.post('/bookings',(req,res,next) => {
start = req.query.start_date;
end = req.query.end_date;
//Name of Home
property = req.query.property;
db.run('INSERT INTO Bookings (Property_Name, Start_Date, End_Date) VALUES ($property, $start, $end)',{$property:property, $start: start, $end: end});
}); */



app.get('/test',(req,res,next) => {
    res.send("Test successful");
    db.get("Select * FROM Bookings",(err,rows) => {
        if (err) {
            console.log(err);
        } else if (rows) {
            console.log(rows);
        }
    })
});


app.get('/bookings/:property',(req,res,next) => {



});



app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
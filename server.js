const db = require('./sql');
const express = require('express');
const app = express();
const morgan = require('morgan');
PORT = 4002;



//select * from 'test_table'
//where end_date < CAST('2009-12-15' AS DATE)
//or start_date > CAST('2010-01-02' AS DATE)
app.get('/bookings',(req,res,next) => {
start = req.query.start_date;
end = req.query.end_date;
db.get('SELECT Property_name FROM Bookings WHERE ($start NOT >= Start_Date AND $end NOT End_Date) OR  ',{$start: start, $end: end}, (err,row) => {
    if (err) {
        console.log("error while searching for available properties");
        console.log(err);
    }
    if (row) {
        res.send({property: rows});
    }   
});
next();
});

app.post('/bookings',(req,res,next) => {
start = req.query.start_date;
end = req.query.end_date;
//Name of Home
property = req.query.property;
db.run('INSERT INTO Bookings (Property_Name, Start_Date, End_Date) VALUES ($property, $start, $end)',{$property:property, $start: start, $end: end});
});



app.get('/bookings/:property',(req,res,next) => {



});



app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
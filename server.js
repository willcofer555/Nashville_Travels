const sqlite3 = require('sqlite3');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = requre('body-parser');
const db = new sqlite3.Database('./nashville_t.sqlite ');
PORT = 4002;



/*select * from 'test_table'
where end_date < CAST('2009-12-15' AS DATE)
or start_date > CAST('2010-01-02' AS DATE) */

app.get('/bookings',(req,res,next) => {
start = req.query.startDate;
end = req.query.endDate;
db.get('SELECT DISTINCT Property_name FROM Bookings WHERE ($end < Start_Date OR $start >= End_Date)',{$start: start, $end: end}, (err,row) => {
    if (err) {
        console.log("error while searching for available properties");
        console.log(err);
    }
    if (row) {
        res.send({bookings: rows});
    }  else {
        console.log('No rows were recorded');
    } 
});
next();
});

/*app.post('/bookings',(req,res,next) => {
start = req.query.start_date;
end = req.query.end_date;
//Name of Home
property = req.query.property;
db.run('INSERT INTO Bookings (Property_Name, Start_Date, End_Date) VALUES ($property, $start, $end)',{$property:property, $start: start, $end: end});
}); */



app.get('/bookings/:property',(req,res,next) => {



});



app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
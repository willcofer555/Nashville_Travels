/*select * from 'test_table'
where end_date < CAST('2009-12-15' AS DATE)
or start_date > CAST('2010-01-02' AS DATE) */

/*app.post('/bookings',(req,res,next) => {
start = req.query.start_date;
end = req.query.end_date;
//Name of Home
property = req.query.property;
db.run('INSERT INTO Bookings (Property_Name, Start_Date, End_Date) VALUES ($property, $start, $end)',{$property:property, $start: start, $end: end});
}); */
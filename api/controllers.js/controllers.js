const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database(':memory', (err => {
    if (err) {
        console.error(err.message);
    }
}));



//Find user in database

export const  findUserByEmail  = (email, cb) => {
    return  db.get(`SELECT * FROM Users WHERE email = ?`,[email], (err, row) => {
        if (err) {
            console.log(err)
        } else if (row) {
            return row
        }
        

    });
}


export const  createUser  = (user, cb) => {
    return  db.run('INSERT INTO Users (Last_Name, First_Name, Email, Password) VALUES ($Last_Name, $First_Name, $Email, $Password,)',user, (err) => {
        cb(err)
    });
}
///
///
///
db.run("INSERT INTO Bookings ( Property_Name, Start_Date, End_Date, Email) VALUES ('1', '20200404', '20200407', 'Janedoe@gmail.com')", (err,rows) => {
    if (err) {
        console.log(err)
        console.log("Error during insertion into bookings table");
    }
    if (rows) {
        console.log(rows);
    }
});


app.post('/booking/:home',(req,res) => {
    property = req.params.home;
    start = req.query.start_date;
    end = req.query.end_date;
    email = req.query.email;
    db.all('INSERT INTO Bookings(Property_Name, Start_Date, End_Date, Email) VALUES ($property, $start, $end, $email),',{$property:property, $email: email, $start:start, $end: end}, (err,rows) => {
        if (err) {
            console.log("Error while posting new Booking");
            console.log(err.message);
        } else if (rows) {
            res.status(200).send();
            console.log("success");
        }
    });
    });
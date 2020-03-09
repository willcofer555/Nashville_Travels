var sqlite3 = require('sqlite3');
var db =  new sqlite3.Database('./nashville_t.sqlite');


db.serialize(() => {
    db.run('DROP TABLE IF EXISTS Bookings');
    db.run('CREATE TABLE Bookings (id INTEGER PRIMARY KEY, Property_Name TEXT NOT NULL, Start_Date INTEGER NOT NULL, End_Date NOT NULL)', (err) => {
        console.log(err);
    });
    db.run('SELECT * FROM Bookings');
})





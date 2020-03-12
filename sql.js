var sqlite3 = require('sqlite3');
var db =  new sqlite3.Database('./nashville_t.sqlite');


db.serialize(() => {
    db.run('DROP TABLE IF EXISTS Bookings');
    db.run('CREATE TABLE Bookings (id INTEGER PRIMARY KEY, Property_Name TEXT NOT NULL, Start_Date INTEGER NOT NULL, End_Date INTEGER NOT NULL)', (err,rows) => {
        if (err) {
            console.log(err);
            console.log("There was an error during the creation of Bookings");
        }
        
    });
    db.run("INSERT INTO Bookings (Property_Name, Start_Date, End_Date) VALUES ( 'Property_1', '20200404', '20200407')", (err,rows) => {
        if (err) {
            console.log(err)
            console.log("Error during insertion into bookings");
        }
        if (rows) {
            console.log(rows);
        }
        
    })
    
});
db.run('SELECT * FROM Bookings', (err,rows) => {
    if (err) {
        console.log(err);
    } 
    if (rows) {
        console.log(rows)
    }
    
});




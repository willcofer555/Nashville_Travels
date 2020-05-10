var sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory', (err => {
    if (err) {
        console.error(err.message);
    }
}));

db.serialize(() => {
    db.run('DROP TABLE IF EXISTS Bookings');
    db.run('DROP TABLE IF EXISTS Users');
    db.run('CREATE TABLE Bookings (id INTEGER PRIMARY KEY, Property_Name INTEGER NOT NULL, Start_Date INTEGER NOT NULL, End_Date INTEGER NOT NULL, Email TEXT NOT NULL)', (err,rows) => {
        if (err) {
            console.log(err);
            console.log("There was an error during the creation of Bookings table");
        }
        
    });
    db.run('CREATE TABLE Users (id INTEGER PRIMARY KEY, Last_Name TEXT NOT NULL, First_Name TEXT NOT NULL, Email TEXT NOT NULL, City TEXT NOT NULL, State TEXT NOT NULL, Zipcode INTEGER NOT NULL)', (err,rows) => {
        if (err) {
            console.log(err);
            console.log("There was an error during the creation of Users table")
        }
    });

    db.run("INSERT INTO Users (Last_Name, First_Name, Email, City, State, Zipcode) VALUES ('Doe', 'John', 'Johndoe@gmail.com', 'Franklin', 'Tennessee', '37064')", (err,rows) => {
        if (err) {
            console.log(err)
            console.log("Error during insertion into users table");
        } 
        if (rows) {
            console.log(rows);
        }
    });

    db.run("INSERT INTO Bookings ( Property_Name, Start_Date, End_Date, Email) VALUES ( '0', '20200404', '20200407', 'Johndoe@gmail.com')", (err,rows) => {
        if (err) {
            console.log(err)
            console.log("Error during insertion into bookings table");
        }
        if (rows) {
            console.log(rows);
        }
    });
    db.run("INSERT INTO Bookings ( Property_Name, Start_Date, End_Date, Email) VALUES ('1', '20200404', '20200407', 'Janedoe@gmail.com')", (err,rows) => {
        if (err) {
            console.log(err)
            console.log("Error during insertion into bookings table");
        }
        if (rows) {
            console.log(rows);
        }
    });
    
});

db.run('SELECT * FROM Bookings', (err,rows) => {
    if (err) {
        console.log(err);
    } 
    if (rows) {
        console.log(rows)
    }
    
});
db.run('SELECT * FROM Users', (err,rows) => {
    if (err) {
        console.log(err);
    }
    if (rows) {
        console.log(rows)
    }
})






const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const  jwt  =  require('jsonwebtoken');
const  bcrypt  =  require('bcryptjs'); 



const app = express();

app.use(cors());


const PORT = 8003;
const db = new sqlite3.Database('../db/:memory', (err => {
    if (err) {
        console.error(err.message);
    }
}));


app.use(bodyParser.json());

 const  findUserByEmail  = (email, cb) => {
    return  db.get(`SELECT * FROM Users WHERE email = ?`,[email], (err, row) => {
        if (err) {
            console.log(err)
        } else if (row) {
            return row
        }
    });
}


 const createUser  = (user, cb) => {
    return  db.run('INSERT INTO Users (Last_Name, First_Name, Email, Password) VALUES ($Last_Name, $First_Name, $Email, $Password,)',user, (err) => {
        cb(err)
    });
}

const testUser = (email,cb) => {
    return console.log(email);
    
}



const SECRET_KEY = "willcofer123";

//GET bookings by date range
app.get('/bookings',(req,res) => {
let start = req.query.start_date;
let end = req.query.end_date;
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


//POST new booking
app.post('/booking/:home',(req,res) => {
let property = req.params.home;
let start = req.query.start_date;
let end = req.query.end_date;
let email = req.query.email;
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

//REGISTER USER WITH - NAME EMAIL PASSWORD
app.post('/users/register', (req, res) => {

    const  name  =  req.body.name;
    const  email  =  req.body.email;
    const  password  =  bcrypt.hashSync(req.body.password);

    createUser([name, email, password], (err)=>{
        if(err) return  res.status(500).send("Server error!");
        findUserByEmail(email, (err, user)=>{
            if (err) return  res.status(500).send('Server error!');  
            const  expiresIn  =  24  *  60  *  60;
            const  accessToken  =  jwt.sign({ id:  user.id }, SECRET_KEY, {
                expiresIn:  expiresIn
            });
            res.status(200).send({ "user":  user, "access_token":  accessToken, "expires_in":  expiresIn          
            });
        });
    });
});



//LOGIN WITH EMAIL PASSWORD
app.post('/users/login', (req, res) => {
    let email  =  req.body.email;
    let password  =  req.body.password;
    if (email) {

         db.get(`SELECT * FROM Users WHERE email = ?`,[email], (err, user) => {
            if (err) {
                console.log(err)
            } else if (user) {
            
                const  expiresIn  =  24  *  60  *  60;
                const  accessToken  =  jwt.sign({ id: user.id }, SECRET_KEY, {
                expiresIn:  expiresIn
                    
            });

            res.status(200).send({ "user":  user, "access_token":  accessToken, "expires_in":  expiresIn, "password": user.password});
                
            }

            
    })
    
    }

    /*
    findUserByEmail(email, (err, user)=>{
        if (err) return  res.status(500).send('Server error!');

        //check if user exists

        if (!user) return  res.status(404).send('User not found!');

        //compare entered password to db password

        const  result  =  bcrypt.compareSync(password, user.password);

        if(!result) return  res.status(401).send('Password not valid!');

        const  expiresIn  =  24  *  60  *  60;
        const  accessToken  =  jwt.sign({ id:  user.id }, SECRET_KEY, {
            expiresIn:  expiresIn
        });

        res.status(200).send({ "user":  user, "access_token":  accessToken, "expires_in":  expiresIn});

    }); 

    */



    
});





























//TESTS

//GET all Bookings
app.get('/test',(req,res,next) => {
    db.all("Select * FROM Bookings",(err,rows) => {
        if (err) {
            console.log(err);
        } else if (rows) {
            res.send(rows);
        }
    })
});


//GET all users
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
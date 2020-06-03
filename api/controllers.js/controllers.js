const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database(':memory', (err => {
    if (err) {
        console.error(err.message);
    }
}));


export const  findUserByEmail  = (email, cb) => {
    return  db.get(`SELECT * FROM users WHERE email = ?`,[email], (err, row) => {
        if (err) {
            console.log(err)
        } else if (row) {
            return row
        }
        

    });
}

export const  createUser  = (user, cb) => {
    return  db.run('INSERT INTO users (name, email, password) VALUES (?,?,?)',user, (err) => {
        cb(err)
    });
}
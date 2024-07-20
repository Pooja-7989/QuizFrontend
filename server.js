const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const server = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "QuizProject",
});


app.post('/register', (request, response) => {
    const { name, email, password } = request.body;
    const sql = "INSERT INTO register (name, email, password) VALUES (?, ?, ?)";
    const values = [name, email, password];

    server.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error:", err);
            response.status(500).json({ message: "Error raised" });
        } else {
            console.log("Registration successful");
            response.json({ message: "Registration successful. verify your account for further proceeding", success: true });
        }
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log([req.body.email, req.body.password])
    const sql = "SELECT * FROM register WHERE email = (?)";
    server.query(sql, [email], (err, results) => {
        if (err) {
            console.error('Error querying user:', err);
        }
        const user = results[0];
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
        if (email !== user.email || password !== user.password) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
        return res.json({ success: true, user: { email: user.email, username: user.username } });
    });
});



const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
});

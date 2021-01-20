const express = require("express");
const app=express();
require("./src/db/conn");
const Register = require("./src/models/registers");

const port=process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/hi', (req, res) => {
    res.send('Hello World hoooooooooooooooooooo')
  })

app.post("/port", async (req, res) => {
    try {
            const registerEmployee = new Register({     
                name: req.body.name,
                email: req.body.email,
                org: req.body.org,
                msg: req.body.msg,
            })
            await registerEmployee.save();  
            res.send("<h1>Message sent successfully<h1>")
    } 
    catch (e) {res.send("Error")}
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
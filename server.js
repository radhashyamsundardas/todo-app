const express = require('express');
const app = express();
const sequelize = require('./config/connection');
const Model = require("./models")
const PORT = 5500;
const controllers = require("./controllers");
app.use("/api", controllers);

// app.get('/', (req,res)=> {
//     res.json("hi");
// });

sequelize.sync().then(()=>{
    app.listen(PORT, ()=> {
        console.log('I am running');
    });
});


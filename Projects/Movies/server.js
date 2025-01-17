
const dotenv=require("dotenv");
const app=require('./app.js');
const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
dotenv.config({path: './config.env'});
const db= process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(db).then(()=>
{
   console.log("Connected successfully");
});
const port =process.env.PORT || 3000;
app.listen(port, ()=>
{
    console.log('App is running on port'+  port );
});



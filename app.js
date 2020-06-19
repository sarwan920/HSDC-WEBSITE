const express=require('express');
const path=require('path');
const app=express();

const PORT=process.env.PORT || 3000;

const errorController=require('./controllers/error');

const mainRoute=require('./routes/index');


app.set('view engine','ejs');
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

// app.get('/',(req,res)=>{
//     res.render('index');
// });

app.use(mainRoute);

app.use('/',errorController.getError);


app.listen(PORT,()=>{
    console.log("Server Started");
});
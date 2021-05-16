const express=require ("express");
const path=require ("path");
const hbs=require('hbs');
const app=express();
const port=process.env.PORT || 3001;
//static files serving

const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");
app.set('view engine','hbs');
app.use(express.static(staticPath));
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

// Routing
app.get("/",(req,res) =>{
    res.render("index");
})
app.get("/weather",(req,res) =>{
    res.render("weather");
})
app.get("*",(req,res) =>{
    res.render("error404");
})
app.listen(port,() =>{
    console.log("listening");
})
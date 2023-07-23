import express from "express";
import bodyparser from "body-parser";

const app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

const port =3000;
var todaylist=["hi","jo","jd"];
var worklist=["ww","wws","work"];


app.get("/work",(req,res)=>
{
    res.render("index.ejs",{
        route:"/work",
        list:worklist,
        label:"work list",
    });
});

app.post("/work",(req,res)=>
{
    var newitem =req.body.newitem;
    worklist.push(newitem);
    res.redirect("/work");

});


app.get("/today",(req,res)=>
{
    res.render("index.ejs",{
        route:"/today",
        list:todaylist,
        label:"today list",
    });
});

app.post("/today",(req,res)=>
{
    var newitem =req.body.newitem;
    todaylist.push(newitem);
    res.redirect("/today");

});

app.listen(port);
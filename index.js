
const mongo = require("./Shared/connect")
const registration=require("./Routers/registerRouter")
const song=require("./Routers/songRouter")
const fs = require("fs");
const mongodb=require("mongodb")
const binary=mongodb.Binary

const port =process.env.PORT || 3001

const cors=require("cors")
const express=require("express")
const app=express()

app.use(express.json())
app.use(cors())




var a=mongo.connect();

app.get("/check",(req,res,next)=>{
    res.send("working")
    const songsinsert=()=>{

        // await mongo.db.collection("register").insertOne(req.body)
       mongo.db.collection("newsong").insertOne({
            fileName: "Staynewfile",
            file: fs.createReadStream(
              "./new.mp3"
            ),
          
      } )
      console.log("data1")
    }
    // songsinsert();


    
})

app.use("/",registration)

app.use("/song",song)




app.listen(port, function(){
  console.log("server connected")
});




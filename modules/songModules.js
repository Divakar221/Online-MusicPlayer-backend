const mongo = require("../Shared/connect");
const binary = mongo.Binary;
var fs=require("fs");
const  db  = require("mongodb");


/* Inserting a song into DataBase */
module.exports.updateSong = async (req, res, next) => {
  try {
    console.log("Song Listed");
    var data = await mongo.db.collection("song").insertOne(req.body);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

/* Getting list of all song from DataBase */
module.exports.getsong = async (req, res, next) => {
  try {
    var data = await mongo.db.collection("song").find().toArray();
    res.send(data);
} catch(err) {
    console.log(err);
    res.status(500).send(err);
}
};


/* Updating Values to playlist data */
module.exports.playList = async (req, res, next) => {
  try {
    var data = await mongo.db.collection("register").updateOne({email:req.body.email}, { $set: {playList:req.body.playList}} );
    res.send(data);
   // console.log(data[0].path)
} catch(err) {
    console.log(err);
    res.status(500).send(err);
}
};
import mongoose from "mongoose";
var url="mongodb://localhost:27017/movieDB";
mongoose.connect(url);
console.log("successfully connected with database");
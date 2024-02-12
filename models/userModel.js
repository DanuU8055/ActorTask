import mongoose from "mongoose";


const userSchema=mongoose.Schema({
    _id:Number,
  actor:{
    type:String,
    trim:true,
    lowercase:true,
    
  },
  movies:{
    type:Array,
    trim:true,
    lowercase:true,
  }
});

const employeSchemaModel=mongoose.model("testCollection",userSchema);

export default employeSchemaModel;
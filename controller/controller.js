// movieController.js

import MovieModel from "../models/userModel.js";
import "../models/connection.js";
import url from "url";

export const getMoviesByActor = async (req, res) => {

    var  actorName  = url.parse(req.url,true).query;
    // console.log(actorName);
    var movieList=await MovieModel.find(actorName);
    
    if(movieList.length!=0){
        return res.status(200).json(movieList)
      }
      else{
     
        return res.status(500).json("Not found movie of these actor")
      } 
  } 
      
    


export const getActorsByMovie = async (req, res) => {
  
  var movieName = url.parse (req.url,true).query;
  
    var actorList=await MovieModel.findOne(movieName);
    
    if(actorList){
      return res.status(200).json(actorList.actor);
    }
    else{
      return res.status(500).json("Not Found an actor of these movie");
    }  
};
export const register = async (req,res)=>{
  var details=req.body;
  var detailsList=await MovieModel.find();
  var len=detailsList.length;
  var id=len==0?1:detailsList[len-1]._id+1;
  details={
    ...details , "_id":id
  }
  try{
    await MovieModel.create(details)
    return res.status(200).json("Successfull")
  }
  catch(error){
    console.log(error);
    return res.status(500).json("not register");
    
  }
}
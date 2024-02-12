// server.js
import express from "express";
import bodyParser from "body-parser";
import movieRouter from "./router/router.js"


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended:true}))

app.use("/casting",movieRouter);



app.listen(3001);
  console.log("http://localhost:3001");

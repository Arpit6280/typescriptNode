// import express = require("express");
// or
import express from "express";
import router from "./routes/todos";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(router);

app.listen(3000);

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ejs = require("ejs");
const cors = require("cors");
const app = express();
app.use(cors());
app.set("view engine", "ejs");
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(`https://randomuser.me/api/?page=${req.query.page}&results=${req.query.results}&seed=abc`);
    console.log(data);
    const dataa = yield data.json();
    
    res.json(dataa);
}));
app.listen(700);

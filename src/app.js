import express, {json} from "express";
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config()

const app = express();
app.use(json());
app.use(cors());

console.log("oi")

app.listen(process.env.PORT)
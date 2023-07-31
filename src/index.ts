
import express ,{Express,Request,Response} from 'express';
import dotenv from 'dotenv';
import mongoose, {ConnectOptions} from 'mongoose';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const URI = process.env.MONGO_URI!;  


//Middle ware
app.use(express.json());
app.use(cors());
app.use((req: Request,res:Response,next) => {
    console.log(req.path,req.method);
    next();
})

app.get('/',(req: Request,res:Response) => {
    res.send("Express + Typescript Server");
});

//Connect to DB
mongoose
    .connect(URI)
    //Listen for requests
    .then((db) => {
        app.listen(port, () => {
            console.log(`Conncted to DB and Listening on port: ${port}`);
        })        
    })
    .catch(err=> {
        console.log(err);
    });
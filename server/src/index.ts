import express from "express"
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// Routes Import
import projectRoutes from "./Routes/projectRoute"
import taskRoutes from "./Routes/taskRoutes"


// config
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(cors());

// Routes
app.get("/",(req,res)=> {
    res.send("This is home route");
});

app.use("/projects",projectRoutes);
app.use("/tasks",taskRoutes);


// Server
const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`server running on port ${port}`);
})
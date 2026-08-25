import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import playerRouter from "./routs/player.router.js";
import roundRouter from "./routs/round.router.js";

const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());

app.use("/player", playerRouter);
app.use("/round", roundRouter);



app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.ststus ? err.message : "Something went wrong";
    res.status(status).json({ success: false, message});
});


app.listen(PORT, (e) => {
    if (e) return console.log(e);
    console.log(`server is running on http://localhost:${PORT}`);  
});
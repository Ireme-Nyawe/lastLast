import app from "./app";
import mongoose from "mongoose";

mongoose.set("strictQuery",false);
mongoose.connect(process.env.DbC).then(()=>{
    console.log("Good Job, DB Connected.");
})
.catch((err)=> console.log(err));

const PORT = process.env.PORT || 3900;

app.listen(PORT,() => {
    console.log(`server running on Port: http://localhost:${PORT}`);
});

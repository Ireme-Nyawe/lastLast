import mongoose, { Schema } from "mongoose";

const postSchema= new Schema({
    title : {
        type : String,
        required : true,

    },
    description : {
        type : String,
        required : true,
    }
})

const postModel = mongoose.model("post", postSchema);
export default postModel;
import mongoose, { Schema } from "mongoose";

const postsSchema= new Schema({
    image : {
        type : String,
        required : true,
    },
    title : {
        type : String,
        required : true,

    },
    header : {
        type : String,
        required : true,

    },
    category : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    author : {
        type : String,
        required : true,
    },
    comments :[{
        type: Schema.Types.ObjectId,
        ref: "comments" }],
},
{
    timestamps : true,
}
)

const postModel = mongoose.model("posts", postsSchema);
export default postModel;
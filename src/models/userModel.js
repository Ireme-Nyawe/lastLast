import mongoose, { Schema } from "mongoose";

// creating Model For Users

const usersSchema = new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    profile: {
        type: String,
        require: false,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    posts: [{
        type: Schema.Types.ObjectId, 
        ref: "posts"
    }]
},
{
    timestamps : true,
},
);
const userModel = mongoose.model('users',usersSchema);
export default userModel;


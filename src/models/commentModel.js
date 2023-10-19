import mongoose, { Schema } from "mongoose";

export const commentsSchema = new Schema({
    commentBody: {
        type: String,
        require: true,
      },
      post: {
          type: Schema.Types.ObjectId,
          ref: 'Posts'
      },
      user: {
          type: Schema.Types.ObjectId,
          ref: "users" 
        },
        time : {
             type: Date,
             default: Date.now 
            },

});
const commentModel = mongoose.model('comments', commentsSchema);
export default commentModel;
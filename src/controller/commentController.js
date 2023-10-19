import postModel from "../models/postModel";
import userModel from "../models/userModel";
import commentModel from "../models/commentModel";

export const commenting = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { commentBody } = req.body;

    const commenting = await commentModel.create({
      commentBody,
      post: id,
      user: req.userModel._id,
    });

    // Add the comment to the post's Comments array
    await postModel.findByIdAndUpdate(
      id,
      { $push: { comments: commenting._id } },
      { new: true }
    );

    return res.status(201).json({
      status: "201",
      message: "Comment Sent Successfully.",
      data: commenting,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed,  Comment Not Sent!",
      error: error.message,
    });
  }
};


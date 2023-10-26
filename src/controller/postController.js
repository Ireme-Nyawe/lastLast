import postModel from "../models/postModel";
import userModel from "../models/userModel";
import { uploadToCloud } from "../helper/cloud";
import commentModel from "../models/commentModel";

// Create a new post
export const createPost = async (req, res) => {
  try {
    const { image, title, header, category, description } = req.body;

    const checkTitle = await postModel.findOne({title});
    if(checkTitle) {
      return res.status(400).json({
          status: "400",
          message: "Post With Simillar Title Exists , Try Another!",
      });
    }
    let picture;
      if(req.file) picture = await uploadToCloud(req.file, res);

    const post = await postModel.create({
      image : picture?.secure_url,
      category,
      description,
      author : req.userModel._id
    });

    // Update user with added post
    await userModel.findByIdAndUpdate(req.userModel._id,
      { $push: { posts: post._id } },
      { new: true }
    );

    return res.status(201).json({
      status: "201",
      message: "Good Job, A Post Created successfully.",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Error Occured, Failed To Create A Post",
      error: error.message,
    });
  }
};

// retrieve posts
export const retrievePosts = async (req, res) => {
  try {
    const posts = await postModel.find().populate(
      {path: "comments", populate:({path: "user", select: "firstname lastname email"})
      }).populate({path: "author", select: "firstname lastname profile"});

    return res.status(200).json({
      status: "200",
      message: "Posts Retrieved; Check:",
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "error, occured failed to retrieve posts",
      error: error.message,
    });
  }
};

//  view a specific post
export const retrievePost = async (req, res) => {
  try {
    const {id} = req.params;
    
    const post = await postModel.findById(id).populate(
      {path: "comments",select: "commentBody", populate:({path: "user", select: "firstname lastname email"})
      }).populate({path: "author", select: "firstname lastname profile"});
      const addView = await postModel.findByIdAndUpdate(id,
        {
          $inc:{views:1,}
        });

    if(!post){
      return res.status(404).json({
        ststus:404,
        message: "Post Not Found"
      })
    }
    return res.status(200).json({
      status: "200",
      message: "Post Retrieved; Check:",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "error, occured failed to retrieve posts",
      error: error.message,
    });
  }
};
// retrieve posts respective to Admin
export const getAdminPosts = async (req, res) => {
  try {
    const posts = await postModel.find({"author": req.userModel.id}).populate(
      {path: "comments", populate:({path: "user", select: "firstname lastname email"})
      }).populate({path: "author", select: "firstname lastname profile"});

    return res.status(200).json({
      status: "200",
      message: "Your Posts Retrieved; Check:",
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "error, occured failed to retrieve your Posts",
      error: error.message,
    });
  }
};

// Update post

export const updatePost = async (req, res) => {
  try {
    const {id}=req.params;
    const { image, title, header, category, description} = req.body;
    let picture;
      if(req.file) picture = await uploadToCloud(req.file, res);

    const updatedPost = await postModel.findByIdAndUpdate(id,{
      image : picture?.secure_url || "https://res.cloudinary.com/da12yf0am/image/upload/v1696850499/pbxwlozt1po8vtbwyabc.jpg",
      title,
      header,
      category,
      description,
      author : req.userModel._id
    });
    return res.status(201).json({
      status: "201",
      message: "Good Job, A Post Updated Succesfully.",
      data: updatePost,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Error Occured, Failed To Update A Post",
      error: error.message,
    });
  }
};

//Delete An Existing post

export const deletePost = async(req, res) => {
  try {
    const {id} = req.params;
    const checkId = await postModel.findById(id);
    if(!checkId){
      return res.status(404).json({
        status : "404",
        message : "Id Do Not Correspond To Any Post!"
      });
    }
    const deletep= await postModel.findByIdAndDelete(id);
    const deleteComment = await commentModel.deleteMany({post : id});
    return res.status(201).json({
      status : "201",
      message : "Good Job, Post Deleted Successfully"
    })
  } catch (error) {
    return res.status(500).json({
      status : "500",
      message : "Error Occured, Failed To Delete Post!",
      error : error.message,

    })
  }
}


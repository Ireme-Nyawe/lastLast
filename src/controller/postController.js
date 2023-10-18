import postModel from "../models/postModel";

export const createPost = async(req,res) =>{
    try {
         const { title, description } =req.body;
         const checkTitle = await postModel.findOne({
            title: req.body.title,
        });
        
        if(checkTitle){
            return res.status(500).json({
                status : 500,
                message : "A Post With This Title Already Exist, Try Another!", 
            })
        }
        const post= await postModel.create({ title, description });
        return res.status(200).json({
            message : "Good Job, Post Created Successful.",
            data : post,
        })

    } catch (error) {
        return res.status(500).json({
            status : 500,
            message : "failed To create Post.",
            error : error.message,
        })
    }
}

// view all posts
export const viewPosts = async (req,res) =>{
    try {
      const posts = await postModel.find();
      return res.status(200).json({
        status : "200",
        message : "All Posts Retrieved, Check Below:",
        data : posts,
      })
    } catch (error) {
      return res.status(500).json({
        statusbar: "500",
        message: "Failed To Retrieve Posts",
        error: error.message,
  
      });
      
    }
  };
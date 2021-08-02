const router = require('express').Router()
const Post = require('../model/Post')
var ResponseWrapper = require('../responsewrapper');

router.get('/' , async (req , res)=>{
 var resp = new ResponseWrapper();
  try {
    const allposts = await Post.find();
    res.json(resp.GetSuccessResponse(allposts));
  } catch (error) {
    res.json(resp.GetErrorResponse(error));
  }
})

router.post('/addpost' , async (req , res)=>{
    var resp = new ResponseWrapper();
    const newPost = new Post({
        title:req.body.title,
        description:req.body.description,
        mediapath:req.body.mediapath,
        privacylvl:req.body.privacylvl,
        postdate:req.body.postdate
      });
      
      try {
            var SavedPost = await newPost.save();
            res.json(resp.GetSuccessResponse(SavedPost));

      } catch (error) {
        res.json(resp.GetErrorResponse(error));
      }
})


router.put('/updatepost' , async (req , res)=>{
    var resp = new ResponseWrapper();
      try {
            var UpdatePost = await Post.updateOne({_id:req.body._id},{$set:{
                title:req.body.title,
                description:req.body.description,
                mediapath:req.body.mediapath,
                privacylvl:req.body.privacylvl,
                postdate:req.body.postdate

            }});
            res.json(resp.GetSuccessResponse(UpdatePost));

      } catch (error) {
        res.json(resp.GetErrorResponse(error));
      }
})


router.get('/:Id' , async (req , res)=>{
    var resp = new ResponseWrapper();
    try {
        const post = await Post.findById(req.params.Id);
        res.json(resp.GetSuccessResponse(post));
    } catch (error) {
        res.json(resp.GetErrorResponse(error));
    }
})

router.delete('/:Id',async (req,res)=>{
    var resp = new ResponseWrapper();
    try {
        const post = await Post.deleteOne({_id:req.params.Id})
        res.json(resp.GetSuccessResponse(post));
    } catch (error) {
        res.json(resp.GetErrorResponse(error));
    }
})

module.exports  = router    
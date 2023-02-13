const { blogs } = require('../data/db.json')

//desc  GET blogs
//route /blogs
const getBlogs = async(req, res) =>{
    const blog = await blogs
    res.status(200).json(blog)
}

//desc  GET a single blog
//route /blogs
const getBlog = async(req, res) =>{
    const { id } = req.params
    const blog = await blogs.filter(function(blogs)
     {
        return (blogs['id'] == id);
    })

    if(!blog){
        return  res.status(404).json({error: 'No such blog'})
    }

    res.status(200).json(blog)
}




module.exports = {
    getBlogs, 
    getBlog
}
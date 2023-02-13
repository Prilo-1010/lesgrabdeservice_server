const errorHandler = (err,req, res, next) =>{
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
  
    res.status(500).json({
      message: "Something went rely wrong",
    });

    next()
}

module.exports = {errorHandler}
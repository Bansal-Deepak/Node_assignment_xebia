function errorHandler(err,req,res,next){

    return res.status(req.status).send({
        errors:[{message:err.message}]
    })
}
module.exports={
    errorHandler
}
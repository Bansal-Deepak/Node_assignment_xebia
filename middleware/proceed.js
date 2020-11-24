function proceed(req,res,next){
   let {session,originalUrl}=req;
    if( originalUrl.startsWith('/pub/proxy')|| originalUrl.startsWith('/api/proxy')){
        if(!session){
            req.status=500;
            throw new Error('Url not allowed');
        }
    }
    return next();
}
module.exports={
    proceed
}
const express=require('express');
require('express-async-errors');
const cookieSession=require('cookie-session');
const app=express();
app.use(express.json());
// app.use(cookieSession({
//     signed:false
// }))
const {router:allRoutes}=require('./routes/allRoutes');
const {errorHandler}=require('./middleware/errorHandler');
app.use(allRoutes);
app.all('*',async(req,res)=>{
    req.status=400;
    throw new Error('Not Found Error');
})
app.use(errorHandler);
module.exports={
    app
}
const {app}=require('./app');
require('dotenv').config();
const {PORT}=process.env;
let port=PORT || 5000;
app.listen(port,()=>{console.log(`app is listening on port ${port}`)});
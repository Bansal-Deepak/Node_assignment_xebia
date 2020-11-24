const router=require('express').Router();
const {proceed} =require('../middleware/proceed');
const fs=require('fs');
// @route   GET '/pub/proxy/bpm/start'
// @desc    Testing 'proceed' middleware 
// @access  Public 

router.get('/pub/proxy/bpm/start',proceed,async(req,res)=>{
    return res.status(200).send('Url is allowed because session is present');
})

// @route   GET '/api/proxy/adu-ms/get'
// @desc    Testing 'proceed' middleware 
// @access  Public 
router.get('/api/proxy/adu-ms/get',proceed,async(req,res)=>{
    return res.status(200).send('Url is allowed because session is present');
})

// @route   POST '/save/:id'
// @desc    Write the contents of request body in json file named id.json 
// @access  Public 

router.post('/save/:id',proceed,async(req,res)=>{
    try{
        let {id}=req.params;
        let dataSend=JSON.stringify(req.body);
        fs.writeFile(`./all_files/${id}.json`,dataSend,'utf8',(err)=>{
            if(err){
                return res.status(400).send({
                    errors:[{message:err.message}]
                })
            }
            
            return res.status(200).send(`Written to file ${id}.json successfully`);
        })
    }
    catch(ex){
        return res.status(500).send('Something went wrong');
    }
    
})
// @route   Get '/save/:id'
// @desc    Get the contents of id.json file 
// @access  Public 

router.get('/save/:id', proceed,async(req,res)=>{
    try{
        let {id}=req.params;
fs.readFile(`./all_files/${id}.json`,'utf8',(err,data)=>{
    if(err){
        return res.status(404).send({
            errors:[{message:err.message}]
        })
    }
    return res.status(200).send(data);
})
    }
catch(ex){
    return res.status(500).send('Something went wrong');
}

})

module.exports={
    router
}
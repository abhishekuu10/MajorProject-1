const express=require('./node_modules/express');
const app=express();
const port=8000;

// use express router
app.use('/',require('./routes'))

// setting up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in running server : ${err}`);
    }
    console.log(`server is running on port: ${port}`);
});

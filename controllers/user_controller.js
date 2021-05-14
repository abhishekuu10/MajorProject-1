module.exports.home=function(req,res){

    res.end('<h1>User </h1>');
}

module.exports.profile=function(req,res){

    res.render('user_profile',{
        title:"profile"
    });
}

module.exports.posts=function(req,res){

    // res.end('<h1>User posts</h1>');
    res.render('user_posts',{
        title:"posts"
    });
}

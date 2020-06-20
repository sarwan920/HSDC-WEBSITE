exports.getIndex=(req,res,next)=>{
    
    res.render('index',{ title:'HSDC' });


}

exports.getMembership=(req,res,next)=>{

    res.render('membership',{ title:'Membership'});

}

exports.postMembership=(req,res,next)=>{

    const fullName=req.body.fullName
console.log(fullName);
res.redirect('/');

}
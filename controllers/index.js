exports.getIndex=(req,res,next)=>{
    
    res.render('index',{ title:'HSDC' });


}

exports.getMembership=(req,res,next)=>{

    res.render('membership',{ title:'Membership'});

}
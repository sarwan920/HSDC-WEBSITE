exports.getIndex=(req,res,next)=>{
    
    res.render('index',{ title:'HSDC' });


}

exports.getMembership=(req,res,next)=>{

    res.render('membership',{ title:'Membership',message:''});

}

exports.postMembership=(req,res,next)=>{

 const fullName=req.body.fullName
const email=req.body.email;
const phone=req.body.phone;
const uname=req.body.uname;
const dname=req.body.dname;
const experience=req.body.experience;
const motivation=req.body.motivation;



res.render('membership',{ title:'Membership' , message:'Your Membership Form has been Submitted Successfully'});

}
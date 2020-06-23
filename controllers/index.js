const nodemailer = require('nodemailer');

exports.getIndex = (req, res, next) => {

    res.render('index', {
        title: 'HSDC'
    });


}

exports.getMembership = (req, res, next) => {

    res.render('membership', {
        title: 'Membership',
        message: ''
    });

}

exports.postMembership = (req, res, next) => {

    const fullName = req.body.fullName
    const email = req.body.email;
    const phone = req.body.phone;
    const uname = req.body.uname;
    const dname = req.body.dname;
    const experience = req.body.experience;
    const motivation = req.body.motivation;

    const output = `
    <h4>New Form Submission</h4>
    <h3>Form Details</h3>
    <ul>
        <li>Full Name: ${fullName}</li>
        <li>Email: ${email}</li>
        <li>phone: ${phone}</li>
        <li>University Name: ${uname}</li>
        <li>Department Name: ${dname}</li>
        <li>experience: ${experience}</li>
        <li>motivation: ${motivation}</li>

    </ul>
`;

    let transporter = nodemailer.createTransport({
   service:'gmail',
        auth: {

            user: 'studentdevclub@gmail.com', // generated ethereal user
            pass: 'elgpauczoxctkqng', // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '${fullName}', // sender address
        to: "studentdevclub@gmail.com", // list of receivers
        subject: "You Have New Form Submission", // Subject line
        text: 'works', // plain text body
        html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


    res.render('membership', {
        title: 'Membership',
        message: 'Your Membership Form has been Submitted Successfully'
    });

}


exports.getMembers=(req,res,next)=>{

    res.render('members',{ title:'Members'});
}
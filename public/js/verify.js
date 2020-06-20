//get input field from application form
const fullName=document.getElementById('fullName');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const uname=document.getElementById('uname');
const dname=document.getElementById('dname');
const experience=document.getElementById('experience');
const motivation=document.getElementById('motivation');

//get error lables from application

const valid_full_name=document.getElementById('valid_full_name');
const valid_email=document.getElementById('valid_email');
const valid_phone=document.getElementById('valid_phone');
const valid_university_name=document.getElementById('valid_university_name');
const valid_department_name=document.getElementById('valid_department_name');
const valid_experience=document.getElementById('valid_experience');
const valid_motivation=document.getElementById('valid_motivation');


const form_title=document.getElementById('form-title');

//regex expression for number validation
let phone_regex=/^[+]92\d{10}$/;


function validation(){

    if( fullName.value==='' ){
        valid_full_name.classList.replace("remove_error_label", "add_error_label");
        form_title.scrollIntoView();
       fullName.focus();
     
        return false;
    } 


    if( email.value==='' ){
        valid_email.classList.replace("remove_error_label", "add_error_label");
        form_title.scrollIntoView();
        email.focus();
        
         return false;
     } 

     if( !(phone_regex.test(phone.value))){
    valid_phone.classList.replace("remove_error_label", "add_error_label");
    form_title.scrollIntoView();
        phone.focus();
        
         return false;
     } 

     if( uname.value==='' ){
        valid_university_name.classList.replace("remove_error_label", "add_error_label");
        form_title.scrollIntoView();
        uname.focus();
        
         return false;
     } 

     if( dname.value==='' ){
        valid_department_name.classList.replace("remove_error_label", "add_error_label");
        dname.focus();
         return false;
     } 

     if( experience.value==='' ){
        valid_experience.classList.replace("remove_error_label", "add_error_label");
        experience.focus();
         return false;
     } 

     
     if( motivation.value==='' ){
        valid_motivation.classList.replace("remove_error_label", "add_error_label");
        motivation.focus();
         return false;
     } 

     return true;
}



function clear_full_name() {
    valid_full_name.classList.replace("add_error_label", "remove_error_label");
   

}


function clear_email() {
valid_email.classList.replace("add_error_label", "remove_error_label");
    

}


function clear_phone() {
    valid_phone.classList.replace("add_error_label", "remove_error_label");
    
}

function clear_university_name() {

    valid_university_name.classList.replace("add_error_label", "remove_error_label");
    

}

function clear_department_name() {
    valid_department_name.classList.replace("add_error_label", "remove_error_label");
    

}


function clear_experience() {
    valid_experience.classList.replace("add_error_label", "remove_error_label");
   

}

function clear_motivation() {
    valid_motivation.classList.replace("add_error_label", "remove_error_label");
   

}





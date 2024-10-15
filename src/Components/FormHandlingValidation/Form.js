/*

In this we are doing two things handling form, validation of form

handling form means controlling/handling data from form

handling form can be done in 2-ways

1.controlled way: we use useState and bind state variable to input, then implement onchange to set state variable. otherwise

the input will be on read-only mode.

2.uncontrolled way: in this we use useRef hook, and we pass obj for printing, so we use obj.current.value

In below we can see that email handled in controlled way, while password handled in uncontrolled way


..................................................................................................................................

form validation

form validation means validating data from inputs before sending to server like checking is the user entered data in inputs in

correct format or not. like is user filled with empty spaces,wrong format of inputs,passwords

This validation helps server , because it prevents wrong data not to be entered in database

while validation has db-side also but validation done in front-end side, will reduce burden on server for some cases


example:

 //validation for email

    let emailEntered=email;

    if(emailEntered.trim()==="")
    {
      setErrors({...errors,emailErros:"Enter email"});
    }


//validation of password

let passwordEntered=password.current.value;

if(passwordEntered.trim()==="")
  {
    setErrors({...errors,passwordErrors:"Enter Password"})
  }...........


---At this time user not entered any email,pwd and user has submitted the form the enter password will be shown

because it goes on asynchronus , so we need to use call back function, where we pass our state and update state

Email address

Password

Enter Password


----after implementing call back

Email address

Enter email

Password

Enter Password

call back--->setErrors((errors)=>({...errors,emailErrors:"enter email"}))

..This will be implemented for all


------------------------------------------------------------------------

Form logic

-i usen state,ref for email,pwd handling data

-next i implented a state for email,pwd errors, so when email,pwd not in format , i updated state

-next i display msg in corresponding input, with updated state msg.

-at form submission i remove default submission, next i intillaited a hasErrors=false, when checking of errors it updated as true,

but at last when errors was removed then else blocks in checking erros updated errors state to empty,hasErrors var to false

then form will be submitted to the server. still server logic not implemeneted i printed them in console


*/
import React, { useState } from 'react';

import { useRef } from 'react';

function Form() 
{

  //email handling using controlled way
  const[email,setEmail]=useState('')


  const handleEmail=(e)=>
  {
    setEmail(e.target.value)
  }

 

  //password handling in uncontrolled way
  const password=useRef('')

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern

  const handleSubmit = (e) => 
    {
    e.preventDefault(); 

    let hasErrors=false;

    //validation for email

    let emailEntered=email;

    if(emailEntered.trim()==="")
    {
      setErrors((errors)=>({...errors,emailErros:"Enter email"}));

      hasErrors=true;

    }

    else if(!(emailRegex.test(emailEntered)))
    {
      setErrors((errors)=>({...errors,emailErros:"Enter email in format"}));

      hasErrors=true;

    }
    else
    {
      setErrors((errors)=>({...errors,emailErros:""}))

      hasErrors=false;

    }


//validation of password

let passwordEntered=password.current.value;

if(passwordEntered.trim()==="")
  {
    setErrors((errors)=>({...errors,passwordErrors:"Enter Password"}))

    hasErrors=true;

  }
  else if(passwordEntered.length<8)
  {
    setErrors((errors)=>({...errors,passwordErrors:"Password must be graeter than 8"}))

    hasErrors=true;


  }
  else
  {
    setErrors((errors)=>({...errors,passwordErrors:""}))

    hasErrors=false;

  }


  

  if(hasErrors==false)
  {
    console.log('Email:', email);
    console.log('Password:', password.current.value); 
  }
};


//validations

const [errors,setErrors]=useState({
  emailErros:"",
  passwordErrors:""
});



  return (
    <div className="container-fluid w-25 mt-5 m-auto">
      <form>
        {/* Email Field */}

        <div className="mb-3">

          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" value={email} onChange={handleEmail} />

          {errors.emailErros&&<span className='text-danger'>Enter email</span>}
          
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
          <input type="password" className="form-control" ref={password}/>

          {errors.passwordErrors&&<span className='text-danger'>{errors.passwordErrors}</span>}
          </div>

       

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;

//AJAX call for signup form
//once the form is submited
$("#signUpForm").submit(function(event){
   //prevent default php processing
   event.preventDefault();
   //collect user inputs
   //serializeArray =>get all the input in array
   var dataToPost= $(this).serializeArray();
   console.log(dataToPost);
   $.ajax ({
     url:'signup.php',
     type:'POST',
     data: dataToPost,
     //the data parameter is the thisg thaat will come back from the signup file to tell me if it's sucess or not.
     success: function(data){
       if(data){
        $("#SignUpError").html(data);
       }

     },
     error: function(){
      $("#SignUpError").html("<div class='alert alert-danger'>there was an error with ajax call</div");
     },

   });
});

  
   
   //send them to signuo.php using AJAX
     //AJAX call successfuly: show sucess message
     //..   ..   fails: show error message

//AJAX call for login form
//once the form is submited
   //prevent default php processing
   //collect user inputs
   //send them to login.php using AJAX
     //AJAX call successfuly: if php files return "success" :rediract the user to notes page
     //..   ..   fails: show error message

//AJAX call for forgot password form
//once the form is submited
   //prevent default php processing
   //collect user inputs
   //send them to login.php using AJAX
     //AJAX call successfuly: show sucess message
     //..   ..   fails: show error message
     
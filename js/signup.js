function createUser()
{
    var email=document.getElementById("userEmail").value;
    var pass=document.getElementById("userPassword").value;
    var confirm=document.getElementById("confirmPassword").value;
   console.log(pass);
   console.log(confirm);
   
    if(pass==confirm)
    {
        firebase.auth().createUserWithEmailAndPassword(email,pass).then(
            function()
        {
            window.location="index.html";
            alert("Account created successfully");
        }).catch(function (error){
            var errorMessage=error.message;
            alert(errorMessage);
        });
        
    
    }
    
    else
    {
        alert("password did not match");
    }

}
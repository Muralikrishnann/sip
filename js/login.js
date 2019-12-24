function loginUser()
{
    var email=document.getElementById("userEm").value;
    var pass=document.getElementById("userPass").value;
    firebase.auth().signInWithEmailAndPassword(email,pass).then(
        function(){
            window.location="choice.html";
        }
    ).catch(function(error)
    {
        var er=error.message;
        alert(er);
    }
    );
}

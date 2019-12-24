function glogin()
{
var provider=new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(){

    window.location="choice.html";
}).catch(function (error){
    var er=error.message;
    alert(er);
})
}
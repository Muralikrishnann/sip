function upload()
{
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var age=document.getElementById("age").value;
    var arrears=document.getElementById("arrears").value;
    var stay=document.getElementById("stay").value;
    var year=document.getElementById("year").value;
    var dept=document.getElementById("dept").value;
    var gender=document.getElementById("gender").value;
    var admt=document.getElementById("adm").value;
    var mailid=document.getElementById("mailid").value;
    var gpa=document.getElementById("gpa").value;
    var pgname=document.getElementById("pgname").value;
    var address=document.getElementById("address").value;
    var date=document.getElementById("date").value;
    var sid=document.getElementById("studid").value;
if(name==""||phone==""||age==""||mailid==""||gpa==""||pgname==""||address=="")
{
  alert("Fill all the required fields properly");
  return false;
}
else{
    firebase.database().ref('user/'+sid).set({
        userName:name,
        userPhone:phone,
        userAge:age,
        userArrears:arrears,
        userStay:stay,
        userYear:year,
        userDept:dept,
        userGender:gender,
        userAdmt:admt,
        userMailid:mailid,
        userGpa:gpa,
        userPgname:pgname,
        userAddress:address,
        userId:sid,
        userDate:date
    });
    alert("Data Added Successfully");
  }
 
}
function adddata(){
  window.location.assign("uploadData.html");
}
function getdata()
{
  window.location.assign("getdata.html");
}
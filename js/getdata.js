function getdata()
{
    var user=document.getElementById("sid").value;

    firebase.database().ref('user/'+user).once('value').then(function(get){

        var sid=get.val().userId;
        var uname=get.val().userName;
        var age=get.val().userAge;
        var phone=get.val().userPhone;
        var arrears=get.val().userArrears;
        var gpa=get.val().userGpa;
        var mailid=get.val().userMailid;
        var address=get.val().userAddress;
        var year=get.val().userYear;
        var dept=get.val().userDept;
        var gender=get.val().userGender;
        var pgname=get.val().userPgname;
        var admt=get.val().userAdmt;
        var stay=get.val().userStay;
        var bday=get.val().userDate;
        var gender=get.val().userGender;
        var pgname=get.val().userPgname;
        var admt=get.val().userAdmt;

        document.getElementById("username").innerHTML=uname;
        document.getElementById("sage").innerHTML=age;
        document.getElementById("sphone").innerHTML=phone;
        document.getElementById("sstudid").innerHTML=sid;
        document.getElementById("sarrears").innerHTML=arrears;
        document.getElementById("sgpa").innerHTML=gpa;
        document.getElementById("smailid").innerHTML=mailid;
        document.getElementById("saddress").innerHTML=address;
        document.getElementById("syear").innerHTML=year;
        document.getElementById("sdept").innerHTML=dept;
        document.getElementById("sbday").innerHTML=bday;
        document.getElementById("sstay").innerHTML=stay;
        document.getElementById("sgender").innerHTML=gender;
        document.getElementById("spgname").innerHTML=pgname;
        document.getElementById("sadmt").innerHTML=admt;
    });

}
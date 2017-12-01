window.onload=function(){
    var btn=document.getElementById("btn");
    var pass=document.getElementById("password")
    btn.addEventListener("click",function () {
        if (pass.type == "password"){
            console.log("1");
            pass.type="text"
        }else {
            pass.type="password"
        }
    });
}
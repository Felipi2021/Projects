let passy = /^abc$/;
let login = /^abc$/;
let art1 = document.getElementById("article1");
let hid1 = document.getElementById("hidden1");
let art2 = document.getElementById("article2");
let hid2 = document.getElementById("hidden2");
let art3 = document.getElementById("article3");
let hid3 = document.getElementById("hidden3");
let art4 = document.getElementById("article4");
let hid4 = document.getElementById("hidden4");
let logout = document.getElementById("logout");
document.getElementById("wyslij").onclick=function(){
    if(document.getElementById("login").value.match(login) && document.getElementById("pass").value.match(passy)){
        document.getElementById("articles").style.display="block";
        document.querySelector("section").style.display="none";
    }
    else
    {
        document.getElementById("false").innerHTML="niepoprawne dane logowania";
    }
}
art1.onclick=function(){
    hid1.style.display = "block";
    hid2.style.display = "none";
    hid3.style.display = "none";
    hid4.style.display = "none";
}
art2.onclick=function(){
    hid2.style.display = "block";
    hid3.style.display = "none";
    hid1.style.display = "none";
    hid4.style.display = "none";
}
art3.onclick=function(){
    hid3.style.display="block";
    hid2.style.display = "none";
    hid1.style.display = "none";
    hid4.style.display = "none";
}
art4.onclick=function(){
    hid4.style.display="block";
    hid2.style.display = "none";
    hid1.style.display = "none";
    hid3.style.display = "none";
}
logout.onclick=function(){
    document.getElementById("articles").style.display="none";
    document.querySelector("section").style.display="block";
}
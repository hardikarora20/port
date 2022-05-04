var colors=[{"color" : "rgb(125, 30, 30)","bcolor" : "rgb(255, 81, 81)"   , "dcolor" : "hsl(0, 100% ,var(--l))"},
            {"color" : "rgb(29, 67, 48)", "bcolor" : "rgb(113, 208, 137)" , "dcolor" : "hsl(135, 50% ,var(--l))"},
            {"color" : "rgb(88, 72, 33)", "bcolor" : "rgb(208, 199, 113)" , "dcolor" : "hsl(54, 50% ,var(--l))"},
            {"color" : "rgb(39, 58, 73)", "bcolor" : "hsl(206, 100%, 90%)" , "dcolor" : "hsl(206, 60% ,var(--l))"}];
 var rig1="5%";
 var rig2="5%";
 setTimeout(function load(){
  document.getElementById("spindiv").style.opacity="0";
  setTimeout(() => { hidespin(); }, 1200);
},1000);
// setTimeout(function(){
var repeater;
function rep(){
  if(window.innerHeight < window.innerWidth){
  rig1="-1%";
  rig2="translateX(98%)";
}
else{
  rig1="5%";
  rig2="translateX(100%)";
}
repeater=setTimeout(rep,1000)
}
rep();
if(document.getElementById("spindiv").style.display=="none"){
  setTimeout(function fade(){
    setTimeout(() => { 
      document.getElementsByTagName('ul')[0].style.animation="jump2 2s";
    }, 3200);
    setTimeout(() => { 
      document.getElementById("cross").style.animation="jump 2s";
    }, 3200);
    setTimeout(() => { 
      document.getElementById("home").style.animation="fade 2s ease-in";
    }, 3200);
  },2000);
}
// }, 500); 

function hidespin(){
  document.getElementById("spindiv").style.display="none";
}
function nav(){  
    console.log(document.getElementsByTagName('ul')[0].style.fontSize=="35px");  
    if(document.getElementsByTagName('ul')[0].style.transform=="translateX(0%)"){
        document.getElementById("cross").style.transform="rotate(0deg)";
        document.getElementsByTagName('ul')[0].style.transform=rig2;
        document.getElementById("cross").style.right=rig1;
    }
    else{
        document.getElementById("cross").style.transform="rotate(180deg)";
        document.getElementsByTagName('ul')[0].style.transform="translateX(0%)";
        document.getElementsByTagName('ul')[0].style.opacity="1";  
        if(document.getElementsByTagName('ul')[0].style.flexDirection=="column"){
            document.getElementById("cross").style.right="5%";
        }
        else{
            document.getElementById("cross").style.right="1.65%";
        }
    }
}

function theme(){
  console.log(colors);  
  var index=0;
  // console.log(document.getElementById(this.id));
  window.onclick = e => {
    index=e.target.getAttribute("content");
    document.documentElement.style.setProperty("--white", (colors[index].color));
    document.documentElement.style.setProperty("--bwhite",(colors[index].bcolor));
    document.documentElement.style.setProperty("--color-primary-darker",(colors[index].dcolor));
    console.log(e.target.getAttribute("content"));
  } 
}
// const activeDiv = document.querySelector('.active');
// activeDiv.classList.add('hidden');   
// function tab(){
    
//     document.getElementsByClassName(li)[2].add('active');

// }


window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}


document.getElementById("title").style.backgroundColor = "red";

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

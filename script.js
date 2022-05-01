window.onload=function(){
  document.getElementById("spindiv").style.opacity="0";
  document.getElementById("spindiv").style.display="none";
  document.getElementsByTagName('ul')[0].style.animation="jump2 2s";
  document.getElementById("cross").style.animation=="jump2 2s";
  console.log("loaded");
};
function nav(){  
    console.log(document.getElementsByTagName('ul')[0].style.fontSize=="35px");  
    if(document.getElementsByTagName('ul')[0].style.transform=="translateX(0%)"){
        document.getElementById("cross").style.transform="rotate(0deg)";
        if(document.getElementsByTagName('ul')[0].style.animation=="jump2 0s"){
            document.getElementsByTagName('ul')[0].style.transform="translateX(100%)";
        }
        else{
            document.getElementsByTagName('ul')[0].style.transform="translateX(98%)";
        }
        document.getElementById("cross").style.right="-1%";
    }
    else{
        document.getElementById("cross").style.transform="rotate(180deg)";
        document.getElementsByTagName('ul')[0].style.transform="translateX(0%)";
        if(document.getElementsByTagName('ul')[0].style.flexDirection=="column"){
            document.getElementById("cross").style.right="5%";
        }
        else{
            document.getElementById("cross").style.right="1.65%";
        }
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

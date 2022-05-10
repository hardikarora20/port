var colors=[{"color" : "rgb(125, 30, 30)","bcolor" : "hsl(0, 100%, 66%)"   , "dcolor" : "hsl(0, 100% ,var(--l))"  , "lcolor" : "hsl(0, 100% ,var(--m))"  },
            {"color" : "rgb(29, 67, 48)", "bcolor" : "rgb(113, 208, 137)"  , "dcolor" : "hsl(135, 50% ,var(--l))" , "lcolor" : "hsl(135, 50% ,var(--m))" },
            {"color" : "rgb(88, 72, 33)", "bcolor" : "rgb(208, 199, 113)"  , "dcolor" : "hsl(54, 50% ,var(--l))"  , "lcolor" : "hsl(54, 50% ,var(--m))"  },
            {"color" : "rgb(39, 58, 73)", "bcolor" : "hsl(206, 100%, 90%)" , "dcolor" : "hsl(206, 60% ,var(--l))" , "lcolor" : "hsl(206, 60% ,var(--m))" }];
 var rig1="5%";
 var rig2="5%";
 
//  const cursor = document.getElementById("cursor");
var timeout;
document.addEventListener('mousemove',(e)=>{
  document.getElementById("cursor").style.left=e.pageX+'px';
  document.getElementById("cursor").style.top=e.pageY+'px';
  document.getElementById("cursor").style.opacity="1";
const sections=document.querySelectorAll("section");
const options={
  threshold:0.7
};
let observer=new IntersectionObserver(navcheck, options);
function navcheck(entries){
  entries.forEach(entry=>{
    const className=entry.target.className;
    const activeAnchor=document.querySelector(`[data-page=${className}]`);
    const coords=activeAnchor.getBoundingClientRect();
    const directions={
      height:coords.height,
      width:coords.width,
      top:coords.top,
      left:coords.left
    };
    if(entry.isIntersecting){
      console.log(entry);
    }
  })
}

sections.forEach(section=>{
  observer.observe(section);
});

function mouseStop(){
  document.getElementById("cursor").style.opacity="0";
}
clearTimeout(timeout);
timeout=setTimeout(mouseStop,3000);
 })

 document.addEventListener('mouseout',(e)=>{
  document.getElementById("cursor").style.opacity="0";
})
//  window.addEventListener("mousemove",cursor);
 
//  function cursor(e){
//    mouseCursor.style.top=e.pageY+'px';
//    mouseCursor.style.left=e.pageX+'px';
//  }

 
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
    document.documentElement.style.setProperty("--color-primary-darkest",(colors[index].lcolor));
    console.log(colors[index].lcolor);
  } 
}
// const activeDiv = document.querySelector('.active');
// activeDiv.classList.add('hidden');   
// function tab(){
    
//     document.getElementsByClassName(li)[2].add('active');

// }
// document.addEventListener(scrollY,)

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


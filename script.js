function nav(){
    if(document.getElementsByTagName('ul')[0].style.transform=="translateX(0%)"){
        document.getElementById("cross").style.transform="rotate(0deg)";
        document.getElementsByTagName('ul')[0].style.transform="translateX(98%)";
        document.getElementById("cross").style.right="-1%";
    }
    else{
        document.getElementById("cross").style.transform="rotate(180deg)";
        document.getElementsByTagName('ul')[0].style.transform="translateX(0%)";
        document.getElementById("cross").style.right="1.65%";
    }
}


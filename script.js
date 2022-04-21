function nav(){
    // document.getElementById("cross").style.backgroundColor="Pink";
    // document.getElementsByTagName('ul')[0].style.right="1%";
    // document.getElementsByTagName('ul')[0].style.transform="scaleX(0)";
    if(document.getElementsByTagName('ul')[0].style.display=="none"){
    document.getElementById("cross").style.transform="rotate(180deg)";
    document.getElementsByTagName('ul')[0].style.display="flex";
    //document.getElementsByTagName('ul')[0].style.marginLeft="100px";
    }
    else{
    document.getElementById("cross").style.transform="rotate(0deg)";
    document.getElementsByTagName('ul')[0].style.display="none";
    }
}

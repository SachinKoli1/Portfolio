var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var icon=document.getElementById("icon");
    icon.onclick=function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){  //do changes in github
            icon.src="images/sun.png";
        }else{
            icon.src="images/moon.png";
        }
}

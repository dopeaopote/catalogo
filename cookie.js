let popUp=document.getElementById("cookiePopup");document.getElementById("acceptCookie").addEventListener("click",()=>{let a=new Date;a.setMinutes(2+a.getMinutes()),document.cookie="myCookieName = thisIsMyCookie; expires = "+a+";",popUp.classList.add("hide"),popUp.classList.remove("show")});const ckeckCookie=()=>{let a=document.cookie.split("=");"myCookieName"==a[0]?(popUp.classList.add("hide"),popUp.classList.remove("show")):(popUp.classList.add("show"),popUp.classList.remove("hide"))};onload=()=>{setTimeout(()=>{ckeckCookie()},100)};
var cardPointer=document.querySelectorAll(".cardsTry");
var i=0;
for(i=0; i<cardPointer.length ; i++)
{
    let ele = cardPointer[i]; 
    let x=document.querySelector('.cardStack');
    let but = ele.querySelector("a");
    ele.addEventListener('mousedown', function() { 
      //ele.setAttribute("display","block");
      x.classList.add("cardPopUp");
    });
    ele.addEventListener('mouseup', function(){
      //ele.getAttribute("display","inline");
      x.classList.remove("cardPopUp");
    });
    but.addEventListener('click', function(){
      alert("button clicked");
    });
} 